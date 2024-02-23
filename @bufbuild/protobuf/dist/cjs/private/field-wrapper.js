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
exports.getUnwrappedFieldType = exports.wrapField = void 0;
const message_js_1 = require("../message.js");
const field_js_1 = require("../field.js");
/**
 * Wrap a primitive message field value in its corresponding wrapper
 * message. This function is idempotent.
 */
function wrapField(type, value) {
    if (value instanceof message_js_1.Message || !type.fieldWrapper) {
        return value;
    }
    return type.fieldWrapper.wrapField(value);
}
exports.wrapField = wrapField;
/**
 * If the given field uses one of the well-known wrapper types, return
 * the primitive type it wraps.
 */
function getUnwrappedFieldType(field) {
    if (field.fieldKind !== "message") {
        return undefined;
    }
    if (field.repeated) {
        return undefined;
    }
    if (field.oneof != undefined) {
        return undefined;
    }
    return wktWrapperToScalarType[field.message.typeName];
}
exports.getUnwrappedFieldType = getUnwrappedFieldType;
const wktWrapperToScalarType = {
    "google.protobuf.DoubleValue": field_js_1.ScalarType.DOUBLE,
    "google.protobuf.FloatValue": field_js_1.ScalarType.FLOAT,
    "google.protobuf.Int64Value": field_js_1.ScalarType.INT64,
    "google.protobuf.UInt64Value": field_js_1.ScalarType.UINT64,
    "google.protobuf.Int32Value": field_js_1.ScalarType.INT32,
    "google.protobuf.UInt32Value": field_js_1.ScalarType.UINT32,
    "google.protobuf.BoolValue": field_js_1.ScalarType.BOOL,
    "google.protobuf.StringValue": field_js_1.ScalarType.STRING,
    "google.protobuf.BytesValue": field_js_1.ScalarType.BYTES,
};
