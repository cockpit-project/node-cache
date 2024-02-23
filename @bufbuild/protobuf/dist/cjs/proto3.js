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
exports.proto3 = void 0;
const proto_runtime_js_1 = require("./private/proto-runtime.js");
const binary_format_proto3_js_1 = require("./private/binary-format-proto3.js");
const json_format_proto3_js_1 = require("./private/json-format-proto3.js");
const util_common_js_1 = require("./private/util-common.js");
const field_list_js_1 = require("./private/field-list.js");
const scalars_js_1 = require("./private/scalars.js");
const field_js_1 = require("./field.js");
const field_js_2 = require("./private/field.js");
const names_js_1 = require("./private/names.js");
/**
 * Provides functionality for messages defined with the proto3 syntax.
 */
exports.proto3 = (0, proto_runtime_js_1.makeProtoRuntime)("proto3", (0, json_format_proto3_js_1.makeJsonFormatProto3)(), (0, binary_format_proto3_js_1.makeBinaryFormatProto3)(), Object.assign(Object.assign({}, (0, util_common_js_1.makeUtilCommon)()), { newFieldList(fields) {
        return new field_list_js_1.InternalFieldList(fields, normalizeFieldInfosProto3);
    },
    initFields(target) {
        for (const member of target.getType().fields.byMember()) {
            if (member.opt) {
                continue;
            }
            const name = member.localName, t = target;
            if (member.repeated) {
                t[name] = [];
                continue;
            }
            switch (member.kind) {
                case "oneof":
                    t[name] = { case: undefined };
                    break;
                case "enum":
                    t[name] = 0;
                    break;
                case "map":
                    t[name] = {};
                    break;
                case "scalar":
                    t[name] = (0, scalars_js_1.scalarDefaultValue)(member.T, member.L); // eslint-disable-line @typescript-eslint/no-unsafe-assignment
                    break;
                case "message":
                    // message fields are always optional in proto3
                    break;
            }
        }
    } }));
/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument */
function normalizeFieldInfosProto3(fieldInfos) {
    var _a, _b, _c, _d;
    const r = [];
    let o;
    for (const field of typeof fieldInfos == "function"
        ? fieldInfos()
        : fieldInfos) {
        const f = field;
        f.localName = (0, names_js_1.localFieldName)(field.name, field.oneof !== undefined);
        f.jsonName = (_a = field.jsonName) !== null && _a !== void 0 ? _a : (0, names_js_1.fieldJsonName)(field.name);
        f.repeated = (_b = field.repeated) !== null && _b !== void 0 ? _b : false;
        if (field.kind == "scalar") {
            f.L = (_c = field.L) !== null && _c !== void 0 ? _c : field_js_1.LongType.BIGINT;
        }
        // We do not surface options at this time
        // f.options = field.options ?? emptyReadonlyObject;
        if (field.oneof !== undefined) {
            const ooname = typeof field.oneof == "string" ? field.oneof : field.oneof.name;
            if (!o || o.name != ooname) {
                o = new field_js_2.InternalOneofInfo(ooname);
            }
            f.oneof = o;
            o.addField(f);
        }
        // proto3 specific:
        if (field.kind == "message") {
            f.delimited = false;
        }
        // From the proto3 language guide:
        // > In proto3, repeated fields of scalar numeric types are packed by default.
        // This information is incomplete - according to the conformance tests, BOOL
        // and ENUM are packed by default as well. This means only STRING and BYTES
        // are not packed by default, which makes sense because they are length-delimited.
        f.packed =
            (_d = field.packed) !== null && _d !== void 0 ? _d : (field.kind == "enum" ||
                (field.kind == "scalar" &&
                    field.T != field_js_1.ScalarType.BYTES &&
                    field.T != field_js_1.ScalarType.STRING));
        r.push(f);
    }
    return r;
}
