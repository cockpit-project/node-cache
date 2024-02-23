// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { assert } from "./private/assert.js";
import { proto3 } from "./proto3.js";
import { proto2 } from "./proto2.js";
import { LongType } from "./field.js";
import { localName } from "./private/names.js";
import { Timestamp } from "./google/protobuf/timestamp_pb.js";
import { Duration } from "./google/protobuf/duration_pb.js";
import { Any } from "./google/protobuf/any_pb.js";
import { Empty } from "./google/protobuf/empty_pb.js";
import { FieldMask } from "./google/protobuf/field_mask_pb.js";
import { ListValue, NullValue, Struct, Value, } from "./google/protobuf/struct_pb.js";
import { getEnumType } from "./private/enum.js";
import { BoolValue, BytesValue, DoubleValue, FloatValue, Int32Value, Int64Value, StringValue, UInt32Value, UInt64Value, } from "./google/protobuf/wrappers_pb.js";
import { FieldDescriptorProto_Type, FileDescriptorSet, } from "./google/protobuf/descriptor_pb.js";
import { createDescriptorSet } from "./create-descriptor-set.js";
// well-known message types with specialized JSON representation
const wkMessages = [
    Any,
    Duration,
    Empty,
    FieldMask,
    Struct,
    Value,
    ListValue,
    Timestamp,
    Duration,
    DoubleValue,
    FloatValue,
    Int64Value,
    Int32Value,
    UInt32Value,
    UInt64Value,
    BoolValue,
    StringValue,
    BytesValue,
];
// well-known enum types with specialized JSON representation
const wkEnums = [getEnumType(NullValue)];
/**
 * Create a registry from a set of descriptors. The types returned by this
 * registry behave exactly like types from generated code.
 *
 * This function accepts google.protobuf.FileDescriptorSet in serialized or
 * deserialized form. Alternatively, it also accepts a DescriptorSet (see
 * createDescriptorSet()).
 *
 * By default, all well-known types with a specialized JSON representation
 * are replaced with their generated counterpart in this package.
 */
export function createRegistryFromDescriptors(input, replaceWkt = true) {
    const set = input instanceof Uint8Array || input instanceof FileDescriptorSet
        ? createDescriptorSet(input)
        : input;
    const enums = new Map();
    const messages = new Map();
    const extensions = new Map();
    const extensionsByExtendee = new Map();
    const services = {};
    if (replaceWkt) {
        for (const mt of wkMessages) {
            messages.set(mt.typeName, mt);
        }
        for (const et of wkEnums) {
            enums.set(et.typeName, et);
        }
    }
    return {
        /**
         * May raise an error on invalid descriptors.
         */
        findEnum(typeName) {
            const existing = enums.get(typeName);
            if (existing) {
                return existing;
            }
            const desc = set.enums.get(typeName);
            if (!desc) {
                return undefined;
            }
            const runtime = desc.file.syntax == "proto3" ? proto3 : proto2;
            const type = runtime.makeEnumType(typeName, desc.values.map((u) => ({
                no: u.number,
                name: u.name,
                localName: localName(u),
            })), {});
            enums.set(typeName, type);
            return type;
        },
        /**
         * May raise an error on invalid descriptors.
         */
        findMessage(typeName) {
            const existing = messages.get(typeName);
            if (existing) {
                return existing;
            }
            const desc = set.messages.get(typeName);
            if (!desc) {
                return undefined;
            }
            const runtime = desc.file.syntax == "proto3" ? proto3 : proto2;
            const fields = [];
            const type = runtime.makeMessageType(typeName, () => fields, {
                localName: localName(desc),
            });
            messages.set(typeName, type);
            for (const field of desc.fields) {
                const fieldInfo = makeFieldInfo(field, this);
                fields.push(fieldInfo);
            }
            return type;
        },
        /**
         * May raise an error on invalid descriptors.
         */
        findService(typeName) {
            const existing = services[typeName];
            if (existing) {
                return existing;
            }
            const desc = set.services.get(typeName);
            if (!desc) {
                return undefined;
            }
            const methods = {};
            for (const method of desc.methods) {
                const I = this.findMessage(method.input.typeName);
                const O = this.findMessage(method.output.typeName);
                assert(I, `message "${method.input.typeName}" for ${method.toString()} not found`);
                assert(O, `output message "${method.output.typeName}" for ${method.toString()} not found`);
                methods[localName(method)] = {
                    name: method.name,
                    I,
                    O,
                    kind: method.methodKind,
                    idempotency: method.idempotency,
                    // We do not surface options at this time
                    // options: {},
                };
            }
            return (services[typeName] = {
                typeName: desc.typeName,
                methods,
            });
        },
        /**
         * May raise an error on invalid descriptors.
         */
        findExtensionFor(typeName, no) {
            var _a;
            if (!set.messages.has(typeName)) {
                return undefined;
            }
            let extensionsByNo = extensionsByExtendee.get(typeName);
            if (!extensionsByNo) {
                // maintain a lookup for extension desc by number
                extensionsByNo = new Map();
                extensionsByExtendee.set(typeName, extensionsByNo);
                for (const desc of set.extensions.values()) {
                    if (desc.extendee.typeName == typeName) {
                        extensionsByNo.set(desc.number, desc);
                    }
                }
            }
            const desc = (_a = extensionsByExtendee.get(typeName)) === null || _a === void 0 ? void 0 : _a.get(no);
            return desc ? this.findExtension(desc.typeName) : undefined;
        },
        /**
         * May raise an error on invalid descriptors.
         */
        findExtension(typeName) {
            const existing = extensions.get(typeName);
            if (existing) {
                return existing;
            }
            const desc = set.extensions.get(typeName);
            if (!desc) {
                return undefined;
            }
            const extendee = this.findMessage(desc.extendee.typeName);
            assert(extendee, `message "${desc.extendee.typeName}" for ${desc.toString()} not found`);
            const runtime = desc.file.syntax == "proto3" ? proto3 : proto2;
            const ext = runtime.makeExtension(typeName, extendee, makeFieldInfo(desc, this));
            extensions.set(typeName, ext);
            return ext;
        },
    };
}
function makeFieldInfo(desc, resolver) {
    switch (desc.fieldKind) {
        case "map":
            assert(desc.kind == "field"); // maps are not allowed for extensions
            return makeMapFieldInfo(desc, resolver);
        case "message":
            return makeMessageFieldInfo(desc, resolver);
        case "enum": {
            const fi = makeEnumFieldInfo(desc, resolver);
            fi.default = desc.getDefaultValue();
            return fi;
        }
        case "scalar": {
            const fi = makeScalarFieldInfo(desc);
            fi.default = desc.getDefaultValue();
            return fi;
        }
    }
}
function makeMapFieldInfo(field, resolver) {
    const base = {
        kind: "map",
        no: field.number,
        name: field.name,
        jsonName: field.jsonName,
        K: field.mapKey,
    };
    if (field.mapValue.message) {
        const messageType = resolver.findMessage(field.mapValue.message.typeName);
        assert(messageType, `message "${field.mapValue.message.typeName}" for ${field.toString()} not found`);
        return Object.assign(Object.assign({}, base), { V: {
                kind: "message",
                T: messageType,
            } });
    }
    if (field.mapValue.enum) {
        const enumType = resolver.findEnum(field.mapValue.enum.typeName);
        assert(enumType, `enum "${field.mapValue.enum.typeName}" for ${field.toString()} not found`);
        return Object.assign(Object.assign({}, base), { V: {
                kind: "enum",
                T: enumType,
            } });
    }
    return Object.assign(Object.assign({}, base), { V: {
            kind: "scalar",
            T: field.mapValue.scalar,
        } });
}
function makeScalarFieldInfo(field) {
    // We are creating _partial_ field info here, so we omit long type bigint,
    // which is the default.
    const longType = field.longType == LongType.STRING
        ? { L: LongType.STRING }
        : {};
    const base = Object.assign({ kind: "scalar", no: field.number, name: field.name, jsonName: field.jsonName, T: field.scalar }, longType);
    if (field.repeated) {
        return Object.assign(Object.assign({}, base), { repeated: true, packed: field.packed, oneof: undefined, T: field.scalar });
    }
    if (field.oneof) {
        return Object.assign(Object.assign({}, base), { oneof: field.oneof.name });
    }
    if (field.optional) {
        return Object.assign(Object.assign({}, base), { opt: true });
    }
    return base;
}
function makeMessageFieldInfo(field, resolver) {
    const messageType = resolver.findMessage(field.message.typeName);
    assert(messageType, `message "${field.message.typeName}" for ${field.toString()} not found`);
    const base = {
        kind: "message",
        no: field.number,
        name: field.name,
        jsonName: field.jsonName,
        T: messageType,
        delimited: field.proto.type == FieldDescriptorProto_Type.GROUP,
    };
    if (field.repeated) {
        return Object.assign(Object.assign({}, base), { repeated: true, packed: field.packed, oneof: undefined });
    }
    if (field.oneof) {
        return Object.assign(Object.assign({}, base), { oneof: field.oneof.name });
    }
    if (field.optional) {
        return Object.assign(Object.assign({}, base), { opt: true });
    }
    return base;
}
function makeEnumFieldInfo(field, resolver) {
    const enumType = resolver.findEnum(field.enum.typeName);
    assert(enumType, `enum "${field.enum.typeName}" for ${field.toString()} not found`);
    const base = {
        kind: "enum",
        no: field.number,
        name: field.name,
        jsonName: field.jsonName,
        T: enumType,
    };
    if (field.repeated) {
        return Object.assign(Object.assign({}, base), { repeated: true, packed: field.packed, oneof: undefined });
    }
    if (field.oneof) {
        return Object.assign(Object.assign({}, base), { oneof: field.oneof.name });
    }
    if (field.optional) {
        return Object.assign(Object.assign({}, base), { opt: true });
    }
    return base;
}
