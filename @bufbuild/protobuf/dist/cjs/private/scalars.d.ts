import { LongType, ScalarType } from "../field.js";
import type { IBinaryWriter } from "../binary-encoding.js";
import { WireType } from "../binary-encoding.js";
/**
 * Returns true if both scalar values are equal.
 */
export declare function scalarEquals(type: ScalarType, a: string | boolean | number | bigint | Uint8Array | undefined, b: string | boolean | number | bigint | Uint8Array | undefined): boolean;
/**
 * Returns the default value for the given scalar type, following
 * proto3 semantics.
 */
export declare function scalarDefaultValue(type: ScalarType, longType: LongType): any;
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
export declare function scalarTypeInfo(type: ScalarType, value?: any): [
    WireType,
    Exclude<keyof IBinaryWriter, "tag" | "raw" | "fork" | "join" | "finish">,
    boolean
];
