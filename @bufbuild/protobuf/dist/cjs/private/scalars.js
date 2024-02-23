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
exports.scalarTypeInfo = exports.scalarDefaultValue = exports.scalarEquals = void 0;
const field_js_1 = require("../field.js");
const binary_encoding_js_1 = require("../binary-encoding.js");
const proto_int64_js_1 = require("../proto-int64.js");
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns true if both scalar values are equal.
 */
function scalarEquals(type, a, b) {
    if (a === b) {
        // This correctly matches equal values except BYTES and (possibly) 64-bit integers.
        return true;
    }
    // Special case BYTES - we need to compare each byte individually
    if (type == field_js_1.ScalarType.BYTES) {
        if (!(a instanceof Uint8Array) || !(b instanceof Uint8Array)) {
            return false;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    // Special case 64-bit integers - we support number, string and bigint representation.
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
    switch (type) {
        case field_js_1.ScalarType.UINT64:
        case field_js_1.ScalarType.FIXED64:
        case field_js_1.ScalarType.INT64:
        case field_js_1.ScalarType.SFIXED64:
        case field_js_1.ScalarType.SINT64:
            // Loose comparison will match between 0n, 0 and "0".
            return a == b;
    }
    // Anything that hasn't been caught by strict comparison or special cased
    // BYTES and 64-bit integers is not equal.
    return false;
}
exports.scalarEquals = scalarEquals;
/**
 * Returns the default value for the given scalar type, following
 * proto3 semantics.
 */
function scalarDefaultValue(type, longType) {
    switch (type) {
        case field_js_1.ScalarType.BOOL:
            return false;
        case field_js_1.ScalarType.UINT64:
        case field_js_1.ScalarType.FIXED64:
        case field_js_1.ScalarType.INT64:
        case field_js_1.ScalarType.SFIXED64:
        case field_js_1.ScalarType.SINT64:
            // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison -- acceptable since it's covered by tests
            return longType == 0 ? proto_int64_js_1.protoInt64.zero : "0";
        case field_js_1.ScalarType.DOUBLE:
        case field_js_1.ScalarType.FLOAT:
            return 0.0;
        case field_js_1.ScalarType.BYTES:
            return new Uint8Array(0);
        case field_js_1.ScalarType.STRING:
            return "";
        default:
            // Handles INT32, UINT32, SINT32, FIXED32, SFIXED32.
            // We do not use individual cases to save a few bytes code size.
            return 0;
    }
}
exports.scalarDefaultValue = scalarDefaultValue;
/**
 * Get information for writing a scalar value.
 *
 * Returns tuple:
 * [0]: appropriate WireType
 * [1]: name of the appropriate method of IBinaryWriter
 * [2]: whether the given value is a default value for proto3 semantics
 *
 * If argument `value` is omitted, [2] is always false.
 */
function scalarTypeInfo(type, value) {
    const isUndefined = value === undefined;
    let wireType = binary_encoding_js_1.WireType.Varint;
    let isIntrinsicDefault = value === 0;
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check -- INT32, UINT32, SINT32 are covered by the defaults
    switch (type) {
        case field_js_1.ScalarType.STRING:
            isIntrinsicDefault = isUndefined || !value.length;
            wireType = binary_encoding_js_1.WireType.LengthDelimited;
            break;
        case field_js_1.ScalarType.BOOL:
            isIntrinsicDefault = value === false;
            break;
        case field_js_1.ScalarType.DOUBLE:
            wireType = binary_encoding_js_1.WireType.Bit64;
            break;
        case field_js_1.ScalarType.FLOAT:
            wireType = binary_encoding_js_1.WireType.Bit32;
            break;
        case field_js_1.ScalarType.INT64:
            isIntrinsicDefault = isUndefined || value == 0; // Loose comparison matches 0n, 0 and "0"
            break;
        case field_js_1.ScalarType.UINT64:
            isIntrinsicDefault = isUndefined || value == 0; // Loose comparison matches 0n, 0 and "0"
            break;
        case field_js_1.ScalarType.FIXED64:
            isIntrinsicDefault = isUndefined || value == 0; // Loose comparison matches 0n, 0 and "0"
            wireType = binary_encoding_js_1.WireType.Bit64;
            break;
        case field_js_1.ScalarType.BYTES:
            isIntrinsicDefault = isUndefined || !value.byteLength;
            wireType = binary_encoding_js_1.WireType.LengthDelimited;
            break;
        case field_js_1.ScalarType.FIXED32:
            wireType = binary_encoding_js_1.WireType.Bit32;
            break;
        case field_js_1.ScalarType.SFIXED32:
            wireType = binary_encoding_js_1.WireType.Bit32;
            break;
        case field_js_1.ScalarType.SFIXED64:
            isIntrinsicDefault = isUndefined || value == 0;
            wireType = binary_encoding_js_1.WireType.Bit64;
            break;
        case field_js_1.ScalarType.SINT64:
            isIntrinsicDefault = isUndefined || value == 0;
            break;
    }
    const method = field_js_1.ScalarType[type].toLowerCase();
    return [wireType, method, isUndefined || isIntrinsicDefault];
}
exports.scalarTypeInfo = scalarTypeInfo;
