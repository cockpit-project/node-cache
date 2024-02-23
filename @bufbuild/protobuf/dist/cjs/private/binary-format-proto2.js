"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBinaryFormatProto2 = void 0;
const field_js_1 = require("../field.js");
const binary_format_common_js_1 = require("./binary-format-common.js");
/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unnecessary-condition, @typescript-eslint/strict-boolean-expressions, no-case-declarations, prefer-const */
function makeBinaryFormatProto2() {
    return Object.assign(Object.assign({}, (0, binary_format_common_js_1.makeBinaryFormatCommon)()), { writeField,
        writeMessage(message, writer, options) {
            const type = message.getType();
            let field;
            for (field of type.fields.byNumber()) {
                let value, localName = field.localName;
                if (field.oneof) {
                    const oneof = message[field.oneof.localName];
                    if (oneof.case !== localName) {
                        continue; // field is not selected, skip
                    }
                    value = oneof.value;
                }
                else {
                    value = message[localName];
                    // In contrast to proto3, we raise an error if a non-optional (proto2 required)
                    // field is missing a value.
                    if (value === undefined && !field.oneof && !field.opt) {
                        throw new Error(`cannot encode field ${type.typeName}.${field === null || field === void 0 ? void 0 : field.name} to binary: required field not set`);
                    }
                }
                writeField(field, value, writer, options);
            }
            if (options.writeUnknownFields) {
                this.writeUnknownFields(message, writer);
            }
            return writer;
        } });
}
exports.makeBinaryFormatProto2 = makeBinaryFormatProto2;
// TODO field presence: merge this function with proto3
function writeField(field, value, // eslint-disable-line @typescript-eslint/no-explicit-any -- `any` is the best choice for dynamic access
writer, options) {
    const repeated = field.repeated;
    switch (field.kind) {
        case "scalar":
        case "enum":
            let scalarType = field.kind == "enum" ? field_js_1.ScalarType.INT32 : field.T;
            if (repeated) {
                if (field.packed) {
                    (0, binary_format_common_js_1.writePacked)(writer, scalarType, field.no, value);
                }
                else {
                    for (const item of value) {
                        (0, binary_format_common_js_1.writeScalar)(writer, scalarType, field.no, item, true);
                    }
                }
            }
            else if (value !== undefined) {
                // In contrast to proto3, we do not skip intrinsic default values.
                // Explicit default values are not special cased either.
                (0, binary_format_common_js_1.writeScalar)(writer, scalarType, field.no, value, true);
            }
            break;
        case "message":
            if (repeated) {
                for (const item of value) {
                    (0, binary_format_common_js_1.writeMessageField)(writer, options, field, item);
                }
            }
            else if (value !== undefined) {
                (0, binary_format_common_js_1.writeMessageField)(writer, options, field, value);
            }
            break;
        case "map":
            for (const [key, val] of Object.entries(value)) {
                (0, binary_format_common_js_1.writeMapEntry)(writer, options, field, key, val);
            }
            break;
    }
}
