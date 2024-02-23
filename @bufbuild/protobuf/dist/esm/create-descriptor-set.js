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
import { Edition, FeatureSet_RepeatedFieldEncoding, FeatureSetDefaults, FieldDescriptorProto_Label, FieldDescriptorProto_Type, FieldOptions_JSType, FileDescriptorProto, FileDescriptorSet, MethodDescriptorProto, MethodOptions_IdempotencyLevel, ServiceDescriptorProto, SourceCodeInfo, } from "./google/protobuf/descriptor_pb.js";
import { assert } from "./private/assert.js";
import { LongType, ScalarType } from "./field.js";
import { MethodIdempotency, MethodKind } from "./service-type.js";
import { fieldJsonName, findEnumSharedPrefix } from "./private/names.js";
import { parseTextFormatEnumValue, parseTextFormatScalarValue, } from "./private/text-format.js";
import { createFeatureResolver } from "./private/feature-set.js";
/**
 * Create a DescriptorSet, a convenient interface for working with a set of
 * google.protobuf.FileDescriptorProto.
 *
 * Note that files must be given in topological order, so each file appears
 * before any file that imports it. Protocol buffer compilers always produce
 * files in topological order.
 */
export function createDescriptorSet(input, options) {
    const cart = {
        enums: new Map(),
        messages: new Map(),
        services: new Map(),
        extensions: new Map(),
        mapEntries: new Map(),
    };
    const fileDescriptors = input instanceof FileDescriptorSet
        ? input.file
        : input instanceof Uint8Array
            ? FileDescriptorSet.fromBinary(input).file
            : input;
    const resolverByEdition = new Map();
    const files = fileDescriptors.map((proto) => {
        var _a;
        const edition = (_a = proto.edition) !== null && _a !== void 0 ? _a : parseFileSyntax(proto.syntax, proto.edition).edition;
        let resolveFeatures = resolverByEdition.get(edition);
        if (resolveFeatures === undefined) {
            resolveFeatures = createFeatureResolver(edition, options === null || options === void 0 ? void 0 : options.featureSetDefaults, options === null || options === void 0 ? void 0 : options.serializationOptions);
            resolverByEdition.set(edition, resolveFeatures);
        }
        return newFile(proto, cart, resolveFeatures);
    });
    return Object.assign({ files }, cart);
}
/**
 * Create a descriptor for a file.
 */
function newFile(proto, cart, resolveFeatures) {
    var _a, _b;
    assert(proto.name, `invalid FileDescriptorProto: missing name`);
    const file = Object.assign(Object.assign({ kind: "file", proto, deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false }, parseFileSyntax(proto.syntax, proto.edition)), { name: proto.name.replace(/\.proto/, ""), enums: [], messages: [], extensions: [], services: [], toString() {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- we asserted above
            return `file ${this.proto.name}`;
        },
        getSyntaxComments() {
            return findComments(this.proto.sourceCodeInfo, [
                FieldNumber.FileDescriptorProto_Syntax,
            ]);
        },
        getPackageComments() {
            return findComments(this.proto.sourceCodeInfo, [
                FieldNumber.FileDescriptorProto_Package,
            ]);
        },
        getFeatures() {
            var _a;
            return resolveFeatures((_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        } });
    cart.mapEntries.clear(); // map entries are local to the file, we can safely discard
    for (const enumProto of proto.enumType) {
        addEnum(enumProto, file, undefined, cart, resolveFeatures);
    }
    for (const messageProto of proto.messageType) {
        addMessage(messageProto, file, undefined, cart, resolveFeatures);
    }
    for (const serviceProto of proto.service) {
        addService(serviceProto, file, cart, resolveFeatures);
    }
    addExtensions(file, cart, resolveFeatures);
    for (const mapEntry of cart.mapEntries.values()) {
        addFields(mapEntry, cart, resolveFeatures);
    }
    for (const message of file.messages) {
        addFields(message, cart, resolveFeatures);
        addExtensions(message, cart, resolveFeatures);
    }
    cart.mapEntries.clear(); // map entries are local to the file, we can safely discard
    return file;
}
/**
 * Create descriptors for extensions, and add them to the message / file,
 * and to our cart.
 * Recurses into nested types.
 */
function addExtensions(desc, cart, resolveFeatures) {
    switch (desc.kind) {
        case "file":
            for (const proto of desc.proto.extension) {
                const ext = newExtension(proto, desc, undefined, cart, resolveFeatures);
                desc.extensions.push(ext);
                cart.extensions.set(ext.typeName, ext);
            }
            break;
        case "message":
            for (const proto of desc.proto.extension) {
                const ext = newExtension(proto, desc.file, desc, cart, resolveFeatures);
                desc.nestedExtensions.push(ext);
                cart.extensions.set(ext.typeName, ext);
            }
            for (const message of desc.nestedMessages) {
                addExtensions(message, cart, resolveFeatures);
            }
            break;
    }
}
/**
 * Create descriptors for fields and oneof groups, and add them to the message.
 * Recurses into nested types.
 */
function addFields(message, cart, resolveFeatures) {
    const allOneofs = message.proto.oneofDecl.map((proto) => newOneof(proto, message, resolveFeatures));
    const oneofsSeen = new Set();
    for (const proto of message.proto.field) {
        const oneof = findOneof(proto, allOneofs);
        const field = newField(proto, message.file, message, oneof, cart, resolveFeatures);
        message.fields.push(field);
        if (oneof === undefined) {
            message.members.push(field);
        }
        else {
            oneof.fields.push(field);
            if (!oneofsSeen.has(oneof)) {
                oneofsSeen.add(oneof);
                message.members.push(oneof);
            }
        }
    }
    for (const oneof of allOneofs.filter((o) => oneofsSeen.has(o))) {
        message.oneofs.push(oneof);
    }
    for (const child of message.nestedMessages) {
        addFields(child, cart, resolveFeatures);
    }
}
/**
 * Create a descriptor for an enumeration, and add it our cart and to the
 * parent type, if any.
 */
function addEnum(proto, file, parent, cart, resolveFeatures) {
    var _a, _b, _c;
    assert(proto.name, `invalid EnumDescriptorProto: missing name`);
    const desc = {
        kind: "enum",
        proto,
        deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
        file,
        parent,
        name: proto.name,
        typeName: makeTypeName(proto, parent, file),
        values: [],
        sharedPrefix: findEnumSharedPrefix(proto.name, proto.value.map((v) => { var _a; return (_a = v.name) !== null && _a !== void 0 ? _a : ""; })),
        toString() {
            return `enum ${this.typeName}`;
        },
        getComments() {
            const path = this.parent
                ? [
                    ...this.parent.getComments().sourcePath,
                    FieldNumber.DescriptorProto_EnumType,
                    this.parent.proto.enumType.indexOf(this.proto),
                ]
                : [
                    FieldNumber.FileDescriptorProto_EnumType,
                    this.file.proto.enumType.indexOf(this.proto),
                ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures() {
            var _a, _b;
            return resolveFeatures((_a = parent === null || parent === void 0 ? void 0 : parent.getFeatures()) !== null && _a !== void 0 ? _a : file.getFeatures(), (_b = proto.options) === null || _b === void 0 ? void 0 : _b.features);
        },
    };
    cart.enums.set(desc.typeName, desc);
    proto.value.forEach((proto) => {
        var _a, _b;
        assert(proto.name, `invalid EnumValueDescriptorProto: missing name`);
        assert(proto.number !== undefined, `invalid EnumValueDescriptorProto: missing number`);
        desc.values.push({
            kind: "enum_value",
            proto,
            deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
            parent: desc,
            name: proto.name,
            number: proto.number,
            toString() {
                return `enum value ${desc.typeName}.${this.name}`;
            },
            declarationString() {
                var _a;
                let str = `${this.name} = ${this.number}`;
                if (((_a = this.proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) === true) {
                    str += " [deprecated = true]";
                }
                return str;
            },
            getComments() {
                const path = [
                    ...this.parent.getComments().sourcePath,
                    FieldNumber.EnumDescriptorProto_Value,
                    this.parent.proto.value.indexOf(this.proto),
                ];
                return findComments(file.proto.sourceCodeInfo, path);
            },
            getFeatures() {
                var _a;
                return resolveFeatures(desc.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
            },
        });
    });
    ((_c = parent === null || parent === void 0 ? void 0 : parent.nestedEnums) !== null && _c !== void 0 ? _c : file.enums).push(desc);
}
/**
 * Create a descriptor for a message, including nested types, and add it to our
 * cart. Note that this does not create descriptors fields.
 */
function addMessage(proto, file, parent, cart, resolveFeatures) {
    var _a, _b, _c, _d;
    assert(proto.name, `invalid DescriptorProto: missing name`);
    const desc = {
        kind: "message",
        proto,
        deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
        file,
        parent,
        name: proto.name,
        typeName: makeTypeName(proto, parent, file),
        fields: [],
        oneofs: [],
        members: [],
        nestedEnums: [],
        nestedMessages: [],
        nestedExtensions: [],
        toString() {
            return `message ${this.typeName}`;
        },
        getComments() {
            const path = this.parent
                ? [
                    ...this.parent.getComments().sourcePath,
                    FieldNumber.DescriptorProto_NestedType,
                    this.parent.proto.nestedType.indexOf(this.proto),
                ]
                : [
                    FieldNumber.FileDescriptorProto_MessageType,
                    this.file.proto.messageType.indexOf(this.proto),
                ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures() {
            var _a, _b;
            return resolveFeatures((_a = parent === null || parent === void 0 ? void 0 : parent.getFeatures()) !== null && _a !== void 0 ? _a : file.getFeatures(), (_b = proto.options) === null || _b === void 0 ? void 0 : _b.features);
        },
    };
    if (((_c = proto.options) === null || _c === void 0 ? void 0 : _c.mapEntry) === true) {
        cart.mapEntries.set(desc.typeName, desc);
    }
    else {
        ((_d = parent === null || parent === void 0 ? void 0 : parent.nestedMessages) !== null && _d !== void 0 ? _d : file.messages).push(desc);
        cart.messages.set(desc.typeName, desc);
    }
    for (const enumProto of proto.enumType) {
        addEnum(enumProto, file, desc, cart, resolveFeatures);
    }
    for (const messageProto of proto.nestedType) {
        addMessage(messageProto, file, desc, cart, resolveFeatures);
    }
}
/**
 * Create a descriptor for a service, including methods, and add it to our
 * cart.
 */
function addService(proto, file, cart, resolveFeatures) {
    var _a, _b;
    assert(proto.name, `invalid ServiceDescriptorProto: missing name`);
    const desc = {
        kind: "service",
        proto,
        deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
        file,
        name: proto.name,
        typeName: makeTypeName(proto, undefined, file),
        methods: [],
        toString() {
            return `service ${this.typeName}`;
        },
        getComments() {
            const path = [
                FieldNumber.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto),
            ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures() {
            var _a;
            return resolveFeatures(file.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        },
    };
    file.services.push(desc);
    cart.services.set(desc.typeName, desc);
    for (const methodProto of proto.method) {
        desc.methods.push(newMethod(methodProto, desc, cart, resolveFeatures));
    }
}
/**
 * Create a descriptor for a method.
 */
function newMethod(proto, parent, cart, resolveFeatures) {
    var _a, _b, _c;
    assert(proto.name, `invalid MethodDescriptorProto: missing name`);
    assert(proto.inputType, `invalid MethodDescriptorProto: missing input_type`);
    assert(proto.outputType, `invalid MethodDescriptorProto: missing output_type`);
    let methodKind;
    if (proto.clientStreaming === true && proto.serverStreaming === true) {
        methodKind = MethodKind.BiDiStreaming;
    }
    else if (proto.clientStreaming === true) {
        methodKind = MethodKind.ClientStreaming;
    }
    else if (proto.serverStreaming === true) {
        methodKind = MethodKind.ServerStreaming;
    }
    else {
        methodKind = MethodKind.Unary;
    }
    let idempotency;
    switch ((_a = proto.options) === null || _a === void 0 ? void 0 : _a.idempotencyLevel) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            idempotency = MethodIdempotency.Idempotent;
            break;
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            idempotency = MethodIdempotency.NoSideEffects;
            break;
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case undefined:
            idempotency = undefined;
            break;
    }
    const input = cart.messages.get(trimLeadingDot(proto.inputType));
    const output = cart.messages.get(trimLeadingDot(proto.outputType));
    assert(input, `invalid MethodDescriptorProto: input_type ${proto.inputType} not found`);
    assert(output, `invalid MethodDescriptorProto: output_type ${proto.inputType} not found`);
    const name = proto.name;
    return {
        kind: "rpc",
        proto,
        deprecated: (_c = (_b = proto.options) === null || _b === void 0 ? void 0 : _b.deprecated) !== null && _c !== void 0 ? _c : false,
        parent,
        name,
        methodKind,
        input,
        output,
        idempotency,
        toString() {
            return `rpc ${parent.typeName}.${name}`;
        },
        getComments() {
            const path = [
                ...this.parent.getComments().sourcePath,
                FieldNumber.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto),
            ];
            return findComments(parent.file.proto.sourceCodeInfo, path);
        },
        getFeatures() {
            var _a;
            return resolveFeatures(parent.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        },
    };
}
/**
 * Create a descriptor for a oneof group.
 */
function newOneof(proto, parent, resolveFeatures) {
    assert(proto.name, `invalid OneofDescriptorProto: missing name`);
    return {
        kind: "oneof",
        proto,
        deprecated: false,
        parent,
        fields: [],
        name: proto.name,
        toString() {
            return `oneof ${parent.typeName}.${this.name}`;
        },
        getComments() {
            const path = [
                ...this.parent.getComments().sourcePath,
                FieldNumber.DescriptorProto_OneofDecl,
                this.parent.proto.oneofDecl.indexOf(this.proto),
            ];
            return findComments(parent.file.proto.sourceCodeInfo, path);
        },
        getFeatures() {
            var _a;
            return resolveFeatures(parent.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        },
    };
}
/**
 * Create a descriptor for a field.
 */
function newField(proto, file, parent, oneof, cart, resolveFeatures) {
    var _a, _b, _c;
    assert(proto.name, `invalid FieldDescriptorProto: missing name`);
    assert(proto.number, `invalid FieldDescriptorProto: missing number`);
    assert(proto.type, `invalid FieldDescriptorProto: missing type`);
    const common = {
        proto,
        deprecated: (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.deprecated) !== null && _b !== void 0 ? _b : false,
        name: proto.name,
        number: proto.number,
        parent,
        oneof,
        optional: isOptionalField(proto, file.syntax),
        packedByDefault: isPackedFieldByDefault(proto, resolveFeatures),
        packed: isPackedField(file, parent, proto, resolveFeatures),
        jsonName: proto.jsonName === fieldJsonName(proto.name) ? undefined : proto.jsonName,
        scalar: undefined,
        longType: undefined,
        message: undefined,
        enum: undefined,
        mapKey: undefined,
        mapValue: undefined,
        declarationString,
        // toString, getComments, getFeatures are overridden in newExtension
        toString() {
            return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments() {
            const path = [
                ...this.parent.getComments().sourcePath,
                FieldNumber.DescriptorProto_Field,
                this.parent.proto.field.indexOf(this.proto),
            ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures() {
            var _a;
            return resolveFeatures(parent.getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        },
    };
    const repeated = proto.label === FieldDescriptorProto_Label.REPEATED;
    switch (proto.type) {
        case FieldDescriptorProto_Type.MESSAGE:
        case FieldDescriptorProto_Type.GROUP: {
            assert(proto.typeName, `invalid FieldDescriptorProto: missing type_name`);
            const mapEntry = cart.mapEntries.get(trimLeadingDot(proto.typeName));
            if (mapEntry !== undefined) {
                assert(repeated, `invalid FieldDescriptorProto: expected map entry to be repeated`);
                return Object.assign(Object.assign(Object.assign({}, common), { kind: "field", fieldKind: "map", repeated: false }), getMapFieldTypes(mapEntry));
            }
            const message = cart.messages.get(trimLeadingDot(proto.typeName));
            assert(message !== undefined, `invalid FieldDescriptorProto: type_name ${proto.typeName} not found`);
            return Object.assign(Object.assign({}, common), { kind: "field", fieldKind: "message", repeated,
                message });
        }
        case FieldDescriptorProto_Type.ENUM: {
            assert(proto.typeName, `invalid FieldDescriptorProto: missing type_name`);
            const e = cart.enums.get(trimLeadingDot(proto.typeName));
            assert(e !== undefined, `invalid FieldDescriptorProto: type_name ${proto.typeName} not found`);
            return Object.assign(Object.assign({}, common), { kind: "field", fieldKind: "enum", getDefaultValue,
                repeated, enum: e });
        }
        default: {
            const scalar = fieldTypeToScalarType[proto.type];
            assert(scalar, `invalid FieldDescriptorProto: unknown type ${proto.type}`);
            return Object.assign(Object.assign({}, common), { kind: "field", fieldKind: "scalar", getDefaultValue,
                repeated,
                scalar, longType: ((_c = proto.options) === null || _c === void 0 ? void 0 : _c.jstype) == FieldOptions_JSType.JS_STRING
                    ? LongType.STRING
                    : LongType.BIGINT });
        }
    }
}
/**
 * Create a descriptor for an extension field.
 */
function newExtension(proto, file, parent, cart, resolveFeatures) {
    assert(proto.extendee, `invalid FieldDescriptorProto: missing extendee`);
    const field = newField(proto, file, null, // to safe us many lines of duplicated code, we trick the type system
    undefined, cart, resolveFeatures);
    const extendee = cart.messages.get(trimLeadingDot(proto.extendee));
    assert(extendee, `invalid FieldDescriptorProto: extendee ${proto.extendee} not found`);
    return Object.assign(Object.assign({}, field), { kind: "extension", typeName: makeTypeName(proto, parent, file), parent,
        file,
        extendee,
        // Must override toString, getComments, getFeatures from newField, because we
        // call newField with parent undefined.
        toString() {
            return `extension ${this.typeName}`;
        },
        getComments() {
            const path = this.parent
                ? [
                    ...this.parent.getComments().sourcePath,
                    FieldNumber.DescriptorProto_Extension,
                    this.parent.proto.extension.indexOf(proto),
                ]
                : [
                    FieldNumber.FileDescriptorProto_Extension,
                    this.file.proto.extension.indexOf(proto),
                ];
            return findComments(file.proto.sourceCodeInfo, path);
        },
        getFeatures() {
            var _a;
            return resolveFeatures((parent !== null && parent !== void 0 ? parent : file).getFeatures(), (_a = proto.options) === null || _a === void 0 ? void 0 : _a.features);
        } });
}
/**
 * Parse the "syntax" and "edition" fields, stripping test editions.
 */
function parseFileSyntax(syntax, edition) {
    let e;
    let s;
    switch (syntax) {
        case undefined:
        case "proto2":
            s = "proto2";
            e = Edition.EDITION_PROTO2;
            break;
        case "proto3":
            s = "proto3";
            e = Edition.EDITION_PROTO3;
            break;
        case "editions":
            s = "editions";
            switch (edition) {
                case undefined:
                case Edition.EDITION_1_TEST_ONLY:
                case Edition.EDITION_2_TEST_ONLY:
                case Edition.EDITION_99997_TEST_ONLY:
                case Edition.EDITION_99998_TEST_ONLY:
                case Edition.EDITION_99999_TEST_ONLY:
                case Edition.EDITION_UNKNOWN:
                    e = Edition.EDITION_UNKNOWN;
                    break;
                default:
                    e = edition;
                    break;
            }
            break;
        default:
            throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${syntax}`);
    }
    if (syntax === "editions" && edition === Edition.EDITION_UNKNOWN) {
        throw new Error(`invalid FileDescriptorProto: syntax ${syntax} cannot have edition ${String(edition)}`);
    }
    return {
        syntax: s,
        edition: e,
    };
}
/**
 * Create a fully qualified name for a protobuf type or extension field.
 *
 * The fully qualified name for messages, enumerations, and services is
 * constructed by concatenating the package name (if present), parent
 * message names (for nested types), and the type name. We omit the leading
 * dot added by protobuf compilers. Examples:
 * - mypackage.MyMessage
 * - mypackage.MyMessage.NestedMessage
 *
 * The fully qualified name for extension fields is constructed by
 * concatenating the package name (if present), parent message names (for
 * extensions declared within a message), and the field name. Examples:
 * - mypackage.extfield
 * - mypackage.MyMessage.extfield
 */
function makeTypeName(proto, parent, file) {
    assert(proto.name, `invalid ${proto.getType().typeName}: missing name`);
    let typeName;
    if (parent) {
        typeName = `${parent.typeName}.${proto.name}`;
    }
    else if (file.proto.package !== undefined) {
        typeName = `${file.proto.package}.${proto.name}`;
    }
    else {
        typeName = `${proto.name}`;
    }
    return typeName;
}
/**
 * Remove the leading dot from a fully qualified type name.
 */
function trimLeadingDot(typeName) {
    return typeName.startsWith(".") ? typeName.substring(1) : typeName;
}
function getMapFieldTypes(mapEntry) {
    var _a, _b;
    assert((_a = mapEntry.proto.options) === null || _a === void 0 ? void 0 : _a.mapEntry, `invalid DescriptorProto: expected ${mapEntry.toString()} to be a map entry`);
    assert(mapEntry.fields.length === 2, `invalid DescriptorProto: map entry ${mapEntry.toString()} has ${mapEntry.fields.length} fields`);
    const keyField = mapEntry.fields.find((f) => f.proto.number === 1);
    assert(keyField, `invalid DescriptorProto: map entry ${mapEntry.toString()} is missing key field`);
    const mapKey = keyField.scalar;
    assert(mapKey !== undefined &&
        mapKey !== ScalarType.BYTES &&
        mapKey !== ScalarType.FLOAT &&
        mapKey !== ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${mapEntry.toString()} has unexpected key type ${(_b = keyField.proto.type) !== null && _b !== void 0 ? _b : -1}`);
    const valueField = mapEntry.fields.find((f) => f.proto.number === 2);
    assert(valueField, `invalid DescriptorProto: map entry ${mapEntry.toString()} is missing value field`);
    switch (valueField.fieldKind) {
        case "scalar":
            return {
                mapKey,
                mapValue: Object.assign(Object.assign({}, valueField), { kind: "scalar" }),
            };
        case "message":
            return {
                mapKey,
                mapValue: Object.assign(Object.assign({}, valueField), { kind: "message" }),
            };
        case "enum":
            return {
                mapKey,
                mapValue: Object.assign(Object.assign({}, valueField), { kind: "enum" }),
            };
        default:
            throw new Error("invalid DescriptorProto: unsupported map entry value field");
    }
}
/**
 * Did the user put the field in a oneof group?
 * This handles proto3 optionals.
 */
function findOneof(proto, allOneofs) {
    var _a;
    const oneofIndex = proto.oneofIndex;
    if (oneofIndex === undefined) {
        return undefined;
    }
    let oneof;
    if (proto.proto3Optional !== true) {
        oneof = allOneofs[oneofIndex];
        assert(oneof, `invalid FieldDescriptorProto: oneof #${oneofIndex} for field #${(_a = proto.number) !== null && _a !== void 0 ? _a : -1} not found`);
    }
    return oneof;
}
/**
 * Did the user use the `optional` keyword?
 * This handles proto3 optionals.
 */
function isOptionalField(proto, syntax) {
    switch (syntax) {
        case "proto2":
            return (proto.oneofIndex === undefined &&
                proto.label === FieldDescriptorProto_Label.OPTIONAL);
        case "proto3":
            return proto.proto3Optional === true;
        case "editions":
            return false;
    }
}
/**
 * Is this field packed by default? Only valid for repeated enum fields, and
 * for repeated scalar fields except BYTES and STRING.
 *
 * In proto3 syntax, fields are packed by default. In proto2 syntax, fields
 * are unpacked by default. With editions, the default is whatever the edition
 * specifies as a default. In edition 2023, fields are packed by default.
 */
function isPackedFieldByDefault(proto, resolveFeatures) {
    const { repeatedFieldEncoding } = resolveFeatures();
    if (repeatedFieldEncoding != FeatureSet_RepeatedFieldEncoding.PACKED) {
        return false;
    }
    // From the proto3 language guide:
    // > In proto3, repeated fields of scalar numeric types are packed by default.
    // This information is incomplete - according to the conformance tests, BOOL
    // and ENUM are packed by default as well. This means only STRING and BYTES
    // are not packed by default, which makes sense because they are length-delimited.
    switch (proto.type) {
        case FieldDescriptorProto_Type.STRING:
        case FieldDescriptorProto_Type.BYTES:
        case FieldDescriptorProto_Type.GROUP:
        case FieldDescriptorProto_Type.MESSAGE:
            return false;
        default:
            return true;
    }
}
/**
 * Pack this repeated field?
 *
 * Respects field type, proto2/proto3 defaults and the `packed` option, or
 * edition defaults and the edition features.repeated_field_encoding options.
 */
function isPackedField(file, parent, proto, resolveFeatures) {
    var _a, _b, _c, _d, _e, _f;
    switch (proto.type) {
        case FieldDescriptorProto_Type.STRING:
        case FieldDescriptorProto_Type.BYTES:
        case FieldDescriptorProto_Type.GROUP:
        case FieldDescriptorProto_Type.MESSAGE:
            // length-delimited types cannot be packed
            return false;
        default:
            switch (file.edition) {
                case Edition.EDITION_PROTO2:
                    return (_b = (_a = proto.options) === null || _a === void 0 ? void 0 : _a.packed) !== null && _b !== void 0 ? _b : false;
                case Edition.EDITION_PROTO3:
                    return (_d = (_c = proto.options) === null || _c === void 0 ? void 0 : _c.packed) !== null && _d !== void 0 ? _d : true;
                default: {
                    const { repeatedFieldEncoding } = resolveFeatures((_e = parent === null || parent === void 0 ? void 0 : parent.getFeatures()) !== null && _e !== void 0 ? _e : file.getFeatures(), (_f = proto.options) === null || _f === void 0 ? void 0 : _f.features);
                    return (repeatedFieldEncoding == FeatureSet_RepeatedFieldEncoding.PACKED);
                }
            }
    }
}
/**
 * Map from a compiler-generated field type to our ScalarType, which is a
 * subset of field types declared by protobuf enum google.protobuf.FieldDescriptorProto.
 */
const fieldTypeToScalarType = {
    [FieldDescriptorProto_Type.DOUBLE]: ScalarType.DOUBLE,
    [FieldDescriptorProto_Type.FLOAT]: ScalarType.FLOAT,
    [FieldDescriptorProto_Type.INT64]: ScalarType.INT64,
    [FieldDescriptorProto_Type.UINT64]: ScalarType.UINT64,
    [FieldDescriptorProto_Type.INT32]: ScalarType.INT32,
    [FieldDescriptorProto_Type.FIXED64]: ScalarType.FIXED64,
    [FieldDescriptorProto_Type.FIXED32]: ScalarType.FIXED32,
    [FieldDescriptorProto_Type.BOOL]: ScalarType.BOOL,
    [FieldDescriptorProto_Type.STRING]: ScalarType.STRING,
    [FieldDescriptorProto_Type.GROUP]: undefined,
    [FieldDescriptorProto_Type.MESSAGE]: undefined,
    [FieldDescriptorProto_Type.BYTES]: ScalarType.BYTES,
    [FieldDescriptorProto_Type.UINT32]: ScalarType.UINT32,
    [FieldDescriptorProto_Type.ENUM]: undefined,
    [FieldDescriptorProto_Type.SFIXED32]: ScalarType.SFIXED32,
    [FieldDescriptorProto_Type.SFIXED64]: ScalarType.SFIXED64,
    [FieldDescriptorProto_Type.SINT32]: ScalarType.SINT32,
    [FieldDescriptorProto_Type.SINT64]: ScalarType.SINT64,
};
/**
 * Find comments.
 */
function findComments(sourceCodeInfo, sourcePath) {
    if (!sourceCodeInfo) {
        return {
            leadingDetached: [],
            sourcePath,
        };
    }
    for (const location of sourceCodeInfo.location) {
        if (location.path.length !== sourcePath.length) {
            continue;
        }
        if (location.path.some((value, index) => sourcePath[index] !== value)) {
            continue;
        }
        return {
            leadingDetached: location.leadingDetachedComments,
            leading: location.leadingComments,
            trailing: location.trailingComments,
            sourcePath,
        };
    }
    return {
        leadingDetached: [],
        sourcePath,
    };
}
/**
 * The following field numbers are used to find comments in
 * google.protobuf.SourceCodeInfo.
 */
var FieldNumber;
(function (FieldNumber) {
    FieldNumber[FieldNumber["FileDescriptorProto_Package"] = 2] = "FileDescriptorProto_Package";
    FieldNumber[FieldNumber["FileDescriptorProto_MessageType"] = 4] = "FileDescriptorProto_MessageType";
    FieldNumber[FieldNumber["FileDescriptorProto_EnumType"] = 5] = "FileDescriptorProto_EnumType";
    FieldNumber[FieldNumber["FileDescriptorProto_Service"] = 6] = "FileDescriptorProto_Service";
    FieldNumber[FieldNumber["FileDescriptorProto_Extension"] = 7] = "FileDescriptorProto_Extension";
    FieldNumber[FieldNumber["FileDescriptorProto_Syntax"] = 12] = "FileDescriptorProto_Syntax";
    FieldNumber[FieldNumber["DescriptorProto_Field"] = 2] = "DescriptorProto_Field";
    FieldNumber[FieldNumber["DescriptorProto_NestedType"] = 3] = "DescriptorProto_NestedType";
    FieldNumber[FieldNumber["DescriptorProto_EnumType"] = 4] = "DescriptorProto_EnumType";
    FieldNumber[FieldNumber["DescriptorProto_Extension"] = 6] = "DescriptorProto_Extension";
    FieldNumber[FieldNumber["DescriptorProto_OneofDecl"] = 8] = "DescriptorProto_OneofDecl";
    FieldNumber[FieldNumber["EnumDescriptorProto_Value"] = 2] = "EnumDescriptorProto_Value";
    FieldNumber[FieldNumber["ServiceDescriptorProto_Method"] = 2] = "ServiceDescriptorProto_Method";
})(FieldNumber || (FieldNumber = {}));
/**
 * Return a string that matches the definition of a field in the protobuf
 * source. Does not take custom options into account.
 */
function declarationString() {
    var _a, _b, _c;
    const parts = [];
    if (this.repeated) {
        parts.push("repeated");
    }
    if (this.optional) {
        parts.push("optional");
    }
    const file = this.kind === "extension" ? this.file : this.parent.file;
    if (file.syntax == "proto2" &&
        this.proto.label === FieldDescriptorProto_Label.REQUIRED) {
        parts.push("required");
    }
    let type;
    switch (this.fieldKind) {
        case "scalar":
            type = ScalarType[this.scalar].toLowerCase();
            break;
        case "enum":
            type = this.enum.typeName;
            break;
        case "message":
            type = this.message.typeName;
            break;
        case "map": {
            const k = ScalarType[this.mapKey].toLowerCase();
            let v;
            switch (this.mapValue.kind) {
                case "scalar":
                    v = ScalarType[this.mapValue.scalar].toLowerCase();
                    break;
                case "enum":
                    v = this.mapValue.enum.typeName;
                    break;
                case "message":
                    v = this.mapValue.message.typeName;
                    break;
            }
            type = `map<${k}, ${v}>`;
            break;
        }
    }
    parts.push(`${type} ${this.name} = ${this.number}`);
    const options = [];
    if (((_a = this.proto.options) === null || _a === void 0 ? void 0 : _a.packed) !== undefined) {
        options.push(`packed = ${this.proto.options.packed.toString()}`);
    }
    let defaultValue = this.proto.defaultValue;
    if (defaultValue !== undefined) {
        if (this.proto.type == FieldDescriptorProto_Type.BYTES ||
            this.proto.type == FieldDescriptorProto_Type.STRING) {
            defaultValue = '"' + defaultValue.replace('"', '\\"') + '"';
        }
        options.push(`default = ${defaultValue}`);
    }
    if (this.jsonName !== undefined) {
        options.push(`json_name = "${this.jsonName}"`);
    }
    if (((_b = this.proto.options) === null || _b === void 0 ? void 0 : _b.jstype) !== undefined) {
        options.push(`jstype = ${FieldOptions_JSType[this.proto.options.jstype]}`);
    }
    if (((_c = this.proto.options) === null || _c === void 0 ? void 0 : _c.deprecated) === true) {
        options.push(`deprecated = true`);
    }
    if (options.length > 0) {
        parts.push("[" + options.join(", ") + "]");
    }
    return parts.join(" ");
}
/**
 * Parses a text-encoded default value (proto2) of a scalar or enum field.
 */
function getDefaultValue() {
    const d = this.proto.defaultValue;
    if (d === undefined) {
        return undefined;
    }
    switch (this.fieldKind) {
        case "enum":
            return parseTextFormatEnumValue(this.enum, d);
        case "scalar":
            return parseTextFormatScalarValue(this.scalar, d);
        default:
            return undefined;
    }
}
