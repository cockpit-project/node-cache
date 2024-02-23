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
import { BinaryReader, BinaryWriter, WireType } from "../binary-encoding.js";
import { Message } from "../message.js";
import { LongType, ScalarType } from "../field.js";
import { wrapField } from "./field-wrapper.js";
import { scalarDefaultValue, scalarTypeInfo } from "./scalars.js";
import { assert } from "./assert.js";
/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unnecessary-condition, no-case-declarations, prefer-const */
const unknownFieldsSymbol = Symbol("@bufbuild/protobuf/unknown-fields");
// Default options for parsing binary data.
const readDefaults = {
    readUnknownFields: true,
    readerFactory: (bytes) => new BinaryReader(bytes),
};
// Default options for serializing binary data.
const writeDefaults = {
    writeUnknownFields: true,
    writerFactory: () => new BinaryWriter(),
};
function makeReadOptions(options) {
    return options ? Object.assign(Object.assign({}, readDefaults), options) : readDefaults;
}
function makeWriteOptions(options) {
    return options ? Object.assign(Object.assign({}, writeDefaults), options) : writeDefaults;
}
export function makeBinaryFormatCommon() {
    return {
        makeReadOptions,
        makeWriteOptions,
        listUnknownFields(message) {
            var _a;
            return (_a = message[unknownFieldsSymbol]) !== null && _a !== void 0 ? _a : [];
        },
        discardUnknownFields(message) {
            delete message[unknownFieldsSymbol];
        },
        writeUnknownFields(message, writer) {
            const m = message;
            const c = m[unknownFieldsSymbol];
            if (c) {
                for (const f of c) {
                    writer.tag(f.no, f.wireType).raw(f.data);
                }
            }
        },
        onUnknownField(message, no, wireType, data) {
            const m = message;
            if (!Array.isArray(m[unknownFieldsSymbol])) {
                m[unknownFieldsSymbol] = [];
            }
            m[unknownFieldsSymbol].push({ no, wireType, data });
        },
        readMessage(message, reader, lengthOrEndTagFieldNo, options, delimitedMessageEncoding) {
            const type = message.getType();
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            const end = delimitedMessageEncoding
                ? reader.len
                : reader.pos + lengthOrEndTagFieldNo;
            let fieldNo, wireType;
            while (reader.pos < end) {
                [fieldNo, wireType] = reader.tag();
                if (wireType == WireType.EndGroup) {
                    break;
                }
                const field = type.fields.find(fieldNo);
                if (!field) {
                    const data = reader.skip(wireType);
                    if (options.readUnknownFields) {
                        this.onUnknownField(message, fieldNo, wireType, data);
                    }
                    continue;
                }
                readField(message, reader, field, wireType, options);
            }
            if (delimitedMessageEncoding && // eslint-disable-line @typescript-eslint/strict-boolean-expressions
                (wireType != WireType.EndGroup || fieldNo !== lengthOrEndTagFieldNo)) {
                throw new Error(`invalid end group tag`);
            }
        },
        readField,
    };
}
function readField(target, // eslint-disable-line @typescript-eslint/no-explicit-any -- `any` is the best choice for dynamic access
reader, field, wireType, options) {
    let { repeated, localName } = field;
    if (field.oneof) {
        target = target[field.oneof.localName];
        if (target.case != localName) {
            delete target.value;
        }
        target.case = localName;
        localName = "value";
    }
    switch (field.kind) {
        case "scalar":
        case "enum":
            const scalarType = field.kind == "enum" ? ScalarType.INT32 : field.T;
            let read = readScalar;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison -- acceptable since it's covered by tests
            if (field.kind == "scalar" && field.L > 0) {
                read = readScalarLTString;
            }
            if (repeated) {
                let arr = target[localName]; // safe to assume presence of array, oneof cannot contain repeated values
                const isPacked = wireType == WireType.LengthDelimited &&
                    scalarType != ScalarType.STRING &&
                    scalarType != ScalarType.BYTES;
                if (isPacked) {
                    let e = reader.uint32() + reader.pos;
                    while (reader.pos < e) {
                        arr.push(read(reader, scalarType));
                    }
                }
                else {
                    arr.push(read(reader, scalarType));
                }
            }
            else {
                target[localName] = read(reader, scalarType);
            }
            break;
        case "message":
            const messageType = field.T;
            if (repeated) {
                // safe to assume presence of array, oneof cannot contain repeated values
                target[localName].push(readMessageField(reader, new messageType(), options, field));
            }
            else {
                if (target[localName] instanceof Message) {
                    readMessageField(reader, target[localName], options, field);
                }
                else {
                    target[localName] = readMessageField(reader, new messageType(), options, field);
                    if (messageType.fieldWrapper && !field.oneof && !field.repeated) {
                        target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
                    }
                }
            }
            break;
        case "map":
            let [mapKey, mapVal] = readMapEntry(field, reader, options);
            // safe to assume presence of map object, oneof cannot contain repeated values
            target[localName][mapKey] = mapVal;
            break;
    }
}
// Read a message, avoiding MessageType.fromBinary() to re-use the
// BinaryReadOptions and the IBinaryReader.
function readMessageField(reader, message, options, field) {
    const format = message.getType().runtime.bin;
    const delimited = field === null || field === void 0 ? void 0 : field.delimited;
    format.readMessage(message, reader, delimited ? field === null || field === void 0 ? void 0 : field.no : reader.uint32(), // eslint-disable-line @typescript-eslint/strict-boolean-expressions
    options, delimited);
    return message;
}
// Read a map field, expecting key field = 1, value field = 2
function readMapEntry(field, reader, options) {
    const length = reader.uint32(), end = reader.pos + length;
    let key, val;
    while (reader.pos < end) {
        let [fieldNo] = reader.tag();
        switch (fieldNo) {
            case 1:
                key = readScalar(reader, field.K);
                break;
            case 2:
                switch (field.V.kind) {
                    case "scalar":
                        val = readScalar(reader, field.V.T);
                        break;
                    case "enum":
                        val = reader.int32();
                        break;
                    case "message":
                        val = readMessageField(reader, new field.V.T(), options, undefined);
                        break;
                }
                break;
        }
    }
    if (key === undefined) {
        let keyRaw = scalarDefaultValue(field.K, LongType.BIGINT);
        key =
            field.K == ScalarType.BOOL
                ? keyRaw.toString()
                : keyRaw;
    }
    if (typeof key != "string" && typeof key != "number") {
        key = key.toString();
    }
    if (val === undefined) {
        switch (field.V.kind) {
            case "scalar":
                val = scalarDefaultValue(field.V.T, LongType.BIGINT);
                break;
            case "enum":
                val = 0;
                break;
            case "message":
                val = new field.V.T();
                break;
        }
    }
    return [key, val];
}
// Read a scalar value, but return 64 bit integral types (int64, uint64,
// sint64, fixed64, sfixed64) as string instead of bigint.
function readScalarLTString(reader, type) {
    const v = readScalar(reader, type);
    return typeof v == "bigint" ? v.toString() : v;
}
// Does not use scalarTypeInfo() for better performance.
function readScalar(reader, type) {
    switch (type) {
        case ScalarType.STRING:
            return reader.string();
        case ScalarType.BOOL:
            return reader.bool();
        case ScalarType.DOUBLE:
            return reader.double();
        case ScalarType.FLOAT:
            return reader.float();
        case ScalarType.INT32:
            return reader.int32();
        case ScalarType.INT64:
            return reader.int64();
        case ScalarType.UINT64:
            return reader.uint64();
        case ScalarType.FIXED64:
            return reader.fixed64();
        case ScalarType.BYTES:
            return reader.bytes();
        case ScalarType.FIXED32:
            return reader.fixed32();
        case ScalarType.SFIXED32:
            return reader.sfixed32();
        case ScalarType.SFIXED64:
            return reader.sfixed64();
        case ScalarType.SINT64:
            return reader.sint64();
        case ScalarType.UINT32:
            return reader.uint32();
        case ScalarType.SINT32:
            return reader.sint32();
    }
}
export function writeMapEntry(writer, options, field, key, value) {
    writer.tag(field.no, WireType.LengthDelimited);
    writer.fork();
    // javascript only allows number or string for object properties
    // we convert from our representation to the protobuf type
    let keyValue = key;
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- we deliberately handle just the special cases for map keys
    switch (field.K) {
        case ScalarType.INT32:
        case ScalarType.FIXED32:
        case ScalarType.UINT32:
        case ScalarType.SFIXED32:
        case ScalarType.SINT32:
            keyValue = Number.parseInt(key);
            break;
        case ScalarType.BOOL:
            assert(key == "true" || key == "false");
            keyValue = key == "true";
            break;
    }
    // write key, expecting key field number = 1
    writeScalar(writer, field.K, 1, keyValue, true);
    // write value, expecting value field number = 2
    switch (field.V.kind) {
        case "scalar":
            writeScalar(writer, field.V.T, 2, value, true);
            break;
        case "enum":
            writeScalar(writer, ScalarType.INT32, 2, value, true);
            break;
        case "message":
            writer.tag(2, WireType.LengthDelimited).bytes(value.toBinary(options));
            break;
    }
    writer.join();
}
// Value must not be undefined
export function writeMessageField(writer, options, field, value) {
    const message = wrapField(field.T, value);
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (field === null || field === void 0 ? void 0 : field.delimited)
        writer
            .tag(field.no, WireType.StartGroup)
            .raw(message.toBinary(options))
            .tag(field.no, WireType.EndGroup);
    else
        writer
            .tag(field.no, WireType.LengthDelimited)
            .bytes(message.toBinary(options));
}
export function writeScalar(writer, type, fieldNo, value, emitIntrinsicDefault) {
    let [wireType, method, isIntrinsicDefault] = scalarTypeInfo(type, value);
    if (!isIntrinsicDefault || emitIntrinsicDefault) {
        writer.tag(fieldNo, wireType)[method](value);
    }
}
export function writePacked(writer, type, fieldNo, value) {
    if (!value.length) {
        return;
    }
    writer.tag(fieldNo, WireType.LengthDelimited).fork();
    let [, method] = scalarTypeInfo(type);
    for (let i = 0; i < value.length; i++) {
        writer[method](value[i]);
    }
    writer.join();
}
