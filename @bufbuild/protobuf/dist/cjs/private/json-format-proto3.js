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
exports.makeJsonFormatProto3 = void 0;
const field_wrapper_js_1 = require("./field-wrapper.js");
const assert_js_1 = require("./assert.js");
const json_format_common_js_1 = require("./json-format-common.js");
/* eslint-disable no-case-declarations, @typescript-eslint/restrict-plus-operands,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument */
function makeJsonFormatProto3() {
    // TODO field presence: merge this function with proto2. the reading side already switches behavior on the nullAsZeroValue argument.
    return (0, json_format_common_js_1.makeJsonFormatCommon)(true, (writeEnum, writeScalar) => {
        return function writeField(field, value, options) {
            if (field.kind == "map") {
                const jsonObj = {};
                switch (field.V.kind) {
                    case "scalar":
                        for (const [entryKey, entryValue] of Object.entries(value)) {
                            const val = writeScalar(field.V.T, entryValue, true);
                            (0, assert_js_1.assert)(val !== undefined);
                            jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                        }
                        break;
                    case "message":
                        for (const [entryKey, entryValue] of Object.entries(value)) {
                            // JSON standard allows only (double quoted) string as property key
                            jsonObj[entryKey.toString()] = entryValue.toJson(options);
                        }
                        break;
                    case "enum":
                        const enumType = field.V.T;
                        for (const [entryKey, entryValue] of Object.entries(value)) {
                            (0, assert_js_1.assert)(entryValue === undefined || typeof entryValue == "number");
                            const val = writeEnum(enumType, entryValue, true, options.enumAsInteger);
                            (0, assert_js_1.assert)(val !== undefined);
                            jsonObj[entryKey.toString()] = val; // JSON standard allows only (double quoted) string as property key
                        }
                        break;
                }
                return options.emitDefaultValues || Object.keys(jsonObj).length > 0
                    ? jsonObj
                    : undefined;
            }
            else if (field.repeated) {
                const jsonArr = [];
                switch (field.kind) {
                    case "scalar":
                        for (let i = 0; i < value.length; i++) {
                            jsonArr.push(writeScalar(field.T, value[i], true));
                        }
                        break;
                    case "enum":
                        for (let i = 0; i < value.length; i++) {
                            jsonArr.push(writeEnum(field.T, value[i], true, options.enumAsInteger));
                        }
                        break;
                    case "message":
                        for (let i = 0; i < value.length; i++) {
                            jsonArr.push(value[i].toJson(options));
                        }
                        break;
                }
                return options.emitDefaultValues || jsonArr.length > 0
                    ? jsonArr
                    : undefined;
            }
            else {
                if (value === undefined) {
                    return undefined;
                }
                switch (field.kind) {
                    case "scalar":
                        return writeScalar(field.T, value, !!field.oneof || field.opt || options.emitDefaultValues);
                    case "enum":
                        return writeEnum(field.T, value, !!field.oneof || field.opt || options.emitDefaultValues, options.enumAsInteger);
                    case "message":
                        return (0, field_wrapper_js_1.wrapField)(field.T, value).toJson(options);
                }
            }
        };
    });
}
exports.makeJsonFormatProto3 = makeJsonFormatProto3;
