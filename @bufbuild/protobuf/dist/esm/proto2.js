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
import { makeProtoRuntime } from "./private/proto-runtime.js";
import { makeBinaryFormatProto2 } from "./private/binary-format-proto2.js";
import { makeUtilCommon } from "./private/util-common.js";
import { InternalFieldList } from "./private/field-list.js";
import { InternalOneofInfo } from "./private/field.js";
import { localFieldName, fieldJsonName } from "./private/names.js";
import { makeJsonFormatProto2 } from "./private/json-format-proto2.js";
import { LongType } from "./field.js";
/**
 * Provides functionality for messages defined with the proto2 syntax.
 */
export const proto2 = makeProtoRuntime("proto2", makeJsonFormatProto2(), makeBinaryFormatProto2(), Object.assign(Object.assign({}, makeUtilCommon()), { newFieldList(fields) {
        return new InternalFieldList(fields, normalizeFieldInfosProto2);
    },
    initFields(target) {
        for (const member of target.getType().fields.byMember()) {
            const name = member.localName, t = target;
            if (member.repeated) {
                t[name] = [];
                continue;
            }
            switch (member.kind) {
                case "oneof":
                    t[name] = { case: undefined };
                    break;
                case "map":
                    t[name] = {};
                    break;
                case "scalar":
                case "enum":
                case "message":
                    // In contrast to proto3, enum and scalar fields have no intrinsic default value,
                    // only an optional explicit default value.
                    // Unlike proto3 intrinsic default values, proto2 explicit default values are not
                    // set on construction, because they are not omitted on the wire. If we did set
                    // default values on construction, a deserialize-serialize round-trip would add
                    // fields to a message.
                    break;
            }
        }
    } }));
/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument */
function normalizeFieldInfosProto2(fieldInfos) {
    var _a, _b, _c, _d, _e;
    const r = [];
    let o;
    for (const field of typeof fieldInfos == "function"
        ? fieldInfos()
        : fieldInfos) {
        const f = field;
        f.localName = localFieldName(field.name, field.oneof !== undefined);
        f.jsonName = (_a = field.jsonName) !== null && _a !== void 0 ? _a : fieldJsonName(field.name);
        f.repeated = (_b = field.repeated) !== null && _b !== void 0 ? _b : false;
        if (field.kind == "scalar") {
            f.L = (_c = field.L) !== null && _c !== void 0 ? _c : LongType.BIGINT;
        }
        // We do not surface options at this time
        // f.options = field.options ?? emptyReadonlyObject;
        if (field.oneof !== undefined) {
            const ooname = typeof field.oneof == "string" ? field.oneof : field.oneof.name;
            if (!o || o.name != ooname) {
                o = new InternalOneofInfo(ooname);
            }
            f.oneof = o;
            o.addField(f);
        }
        // proto2 specific:
        if (field.kind == "message") {
            f.delimited = (_d = field.delimited) !== null && _d !== void 0 ? _d : false;
        }
        // In contrast to proto3, repeated fields are unpacked except when explicitly specified.
        f.packed = (_e = field.packed) !== null && _e !== void 0 ? _e : false;
        r.push(f);
    }
    return r;
}
