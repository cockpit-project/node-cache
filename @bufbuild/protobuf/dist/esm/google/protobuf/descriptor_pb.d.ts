import { proto2 } from "../../proto2.js";
import type { PartialMessage, PlainMessage } from "../../message.js";
import { Message } from "../../message.js";
import type { FieldList } from "../../field-list.js";
import type { BinaryReadOptions } from "../../binary-format.js";
import type { JsonReadOptions, JsonValue } from "../../json-format.js";
/**
 * The full set of known editions.
 *
 * @generated from enum google.protobuf.Edition
 */
export declare enum Edition {
    /**
     * A placeholder for an unknown edition value.
     *
     * @generated from enum value: EDITION_UNKNOWN = 0;
     */
    EDITION_UNKNOWN = 0,
    /**
     * Legacy syntax "editions".  These pre-date editions, but behave much like
     * distinct editions.  These can't be used to specify the edition of proto
     * files, but feature definitions must supply proto2/proto3 defaults for
     * backwards compatibility.
     *
     * @generated from enum value: EDITION_PROTO2 = 998;
     */
    EDITION_PROTO2 = 998,
    /**
     * @generated from enum value: EDITION_PROTO3 = 999;
     */
    EDITION_PROTO3 = 999,
    /**
     * Editions that have been released.  The specific values are arbitrary and
     * should not be depended on, but they will always be time-ordered for easy
     * comparison.
     *
     * @generated from enum value: EDITION_2023 = 1000;
     */
    EDITION_2023 = 1000,
    /**
     * Placeholder editions for testing feature resolution.  These should not be
     * used or relyed on outside of tests.
     *
     * @generated from enum value: EDITION_1_TEST_ONLY = 1;
     */
    EDITION_1_TEST_ONLY = 1,
    /**
     * @generated from enum value: EDITION_2_TEST_ONLY = 2;
     */
    EDITION_2_TEST_ONLY = 2,
    /**
     * @generated from enum value: EDITION_99997_TEST_ONLY = 99997;
     */
    EDITION_99997_TEST_ONLY = 99997,
    /**
     * @generated from enum value: EDITION_99998_TEST_ONLY = 99998;
     */
    EDITION_99998_TEST_ONLY = 99998,
    /**
     * @generated from enum value: EDITION_99999_TEST_ONLY = 99999;
     */
    EDITION_99999_TEST_ONLY = 99999
}
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 *
 * @generated from message google.protobuf.FileDescriptorSet
 */
export declare class FileDescriptorSet extends Message<FileDescriptorSet> {
    /**
     * @generated from field: repeated google.protobuf.FileDescriptorProto file = 1;
     */
    file: FileDescriptorProto[];
    constructor(data?: PartialMessage<FileDescriptorSet>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.FileDescriptorSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileDescriptorSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileDescriptorSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileDescriptorSet;
    static equals(a: FileDescriptorSet | PlainMessage<FileDescriptorSet> | undefined, b: FileDescriptorSet | PlainMessage<FileDescriptorSet> | undefined): boolean;
}
/**
 * Describes a complete .proto file.
 *
 * @generated from message google.protobuf.FileDescriptorProto
 */
export declare class FileDescriptorProto extends Message<FileDescriptorProto> {
    /**
     * file name, relative to root of source tree
     *
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * e.g. "foo", "foo.bar", etc.
     *
     * @generated from field: optional string package = 2;
     */
    package?: string;
    /**
     * Names of files imported by this file.
     *
     * @generated from field: repeated string dependency = 3;
     */
    dependency: string[];
    /**
     * Indexes of the public imported files in the dependency list above.
     *
     * @generated from field: repeated int32 public_dependency = 10;
     */
    publicDependency: number[];
    /**
     * Indexes of the weak imported files in the dependency list.
     * For Google-internal migration only. Do not use.
     *
     * @generated from field: repeated int32 weak_dependency = 11;
     */
    weakDependency: number[];
    /**
     * All top-level definitions in this file.
     *
     * @generated from field: repeated google.protobuf.DescriptorProto message_type = 4;
     */
    messageType: DescriptorProto[];
    /**
     * @generated from field: repeated google.protobuf.EnumDescriptorProto enum_type = 5;
     */
    enumType: EnumDescriptorProto[];
    /**
     * @generated from field: repeated google.protobuf.ServiceDescriptorProto service = 6;
     */
    service: ServiceDescriptorProto[];
    /**
     * @generated from field: repeated google.protobuf.FieldDescriptorProto extension = 7;
     */
    extension: FieldDescriptorProto[];
    /**
     * @generated from field: optional google.protobuf.FileOptions options = 8;
     */
    options?: FileOptions;
    /**
     * This field contains optional information about the original source code.
     * You may safely remove this entire field without harming runtime
     * functionality of the descriptors -- the information is needed only by
     * development tools.
     *
     * @generated from field: optional google.protobuf.SourceCodeInfo source_code_info = 9;
     */
    sourceCodeInfo?: SourceCodeInfo;
    /**
     * The syntax of the proto file.
     * The supported values are "proto2", "proto3", and "editions".
     *
     * If `edition` is present, this value must be "editions".
     *
     * @generated from field: optional string syntax = 12;
     */
    syntax?: string;
    /**
     * The edition of the proto file.
     *
     * @generated from field: optional google.protobuf.Edition edition = 14;
     */
    edition?: Edition;
    constructor(data?: PartialMessage<FileDescriptorProto>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.FileDescriptorProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileDescriptorProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileDescriptorProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileDescriptorProto;
    static equals(a: FileDescriptorProto | PlainMessage<FileDescriptorProto> | undefined, b: FileDescriptorProto | PlainMessage<FileDescriptorProto> | undefined): boolean;
}
/**
 * Describes a message type.
 *
 * @generated from message google.protobuf.DescriptorProto
 */
export declare class DescriptorProto extends Message<DescriptorProto> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: repeated google.protobuf.FieldDescriptorProto field = 2;
     */
    field: FieldDescriptorProto[];
    /**
     * @generated from field: repeated google.protobuf.FieldDescriptorProto extension = 6;
     */
    extension: FieldDescriptorProto[];
    /**
     * @generated from field: repeated google.protobuf.DescriptorProto nested_type = 3;
     */
    nestedType: DescriptorProto[];
    /**
     * @generated from field: repeated google.protobuf.EnumDescriptorProto enum_type = 4;
     */
    enumType: EnumDescriptorProto[];
    /**
     * @generated from field: repeated google.protobuf.DescriptorProto.ExtensionRange extension_range = 5;
     */
    extensionRange: DescriptorProto_ExtensionRange[];
    /**
     * @generated from field: repeated google.protobuf.OneofDescriptorProto oneof_decl = 8;
     */
    oneofDecl: OneofDescriptorProto[];
    /**
     * @generated from field: optional google.protobuf.MessageOptions options = 7;
     */
    options?: MessageOptions;
    /**
     * @generated from field: repeated google.protobuf.DescriptorProto.ReservedRange reserved_range = 9;
     */
    reservedRange: DescriptorProto_ReservedRange[];
    /**
     * Reserved field names, which may not be used by fields in the same message.
     * A given name may only be reserved once.
     *
     * @generated from field: repeated string reserved_name = 10;
     */
    reservedName: string[];
    constructor(data?: PartialMessage<DescriptorProto>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.DescriptorProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DescriptorProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DescriptorProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DescriptorProto;
    static equals(a: DescriptorProto | PlainMessage<DescriptorProto> | undefined, b: DescriptorProto | PlainMessage<DescriptorProto> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.DescriptorProto.ExtensionRange
 */
export declare class DescriptorProto_ExtensionRange extends Message<DescriptorProto_ExtensionRange> {
    /**
     * Inclusive.
     *
     * @generated from field: optional int32 start = 1;
     */
    start?: number;
    /**
     * Exclusive.
     *
     * @generated from field: optional int32 end = 2;
     */
    end?: number;
    /**
     * @generated from field: optional google.protobuf.ExtensionRangeOptions options = 3;
     */
    options?: ExtensionRangeOptions;
    constructor(data?: PartialMessage<DescriptorProto_ExtensionRange>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.DescriptorProto.ExtensionRange";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DescriptorProto_ExtensionRange;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DescriptorProto_ExtensionRange;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DescriptorProto_ExtensionRange;
    static equals(a: DescriptorProto_ExtensionRange | PlainMessage<DescriptorProto_ExtensionRange> | undefined, b: DescriptorProto_ExtensionRange | PlainMessage<DescriptorProto_ExtensionRange> | undefined): boolean;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 *
 * @generated from message google.protobuf.DescriptorProto.ReservedRange
 */
export declare class DescriptorProto_ReservedRange extends Message<DescriptorProto_ReservedRange> {
    /**
     * Inclusive.
     *
     * @generated from field: optional int32 start = 1;
     */
    start?: number;
    /**
     * Exclusive.
     *
     * @generated from field: optional int32 end = 2;
     */
    end?: number;
    constructor(data?: PartialMessage<DescriptorProto_ReservedRange>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.DescriptorProto.ReservedRange";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DescriptorProto_ReservedRange;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DescriptorProto_ReservedRange;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DescriptorProto_ReservedRange;
    static equals(a: DescriptorProto_ReservedRange | PlainMessage<DescriptorProto_ReservedRange> | undefined, b: DescriptorProto_ReservedRange | PlainMessage<DescriptorProto_ReservedRange> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.ExtensionRangeOptions
 */
export declare class ExtensionRangeOptions extends Message<ExtensionRangeOptions> {
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    /**
     * For external users: DO NOT USE. We are in the process of open sourcing
     * extension declaration and executing internal cleanups before it can be
     * used externally.
     *
     * @generated from field: repeated google.protobuf.ExtensionRangeOptions.Declaration declaration = 2;
     */
    declaration: ExtensionRangeOptions_Declaration[];
    /**
     * Any features defined in the specific edition.
     *
     * @generated from field: optional google.protobuf.FeatureSet features = 50;
     */
    features?: FeatureSet;
    /**
     * The verification state of the range.
     * TODO: flip the default to DECLARATION once all empty ranges
     * are marked as UNVERIFIED.
     *
     * @generated from field: optional google.protobuf.ExtensionRangeOptions.VerificationState verification = 3 [default = UNVERIFIED];
     */
    verification?: ExtensionRangeOptions_VerificationState;
    constructor(data?: PartialMessage<ExtensionRangeOptions>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.ExtensionRangeOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtensionRangeOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtensionRangeOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtensionRangeOptions;
    static equals(a: ExtensionRangeOptions | PlainMessage<ExtensionRangeOptions> | undefined, b: ExtensionRangeOptions | PlainMessage<ExtensionRangeOptions> | undefined): boolean;
}
/**
 * The verification state of the extension range.
 *
 * @generated from enum google.protobuf.ExtensionRangeOptions.VerificationState
 */
export declare enum ExtensionRangeOptions_VerificationState {
    /**
     * All the extensions of the range must be declared.
     *
     * @generated from enum value: DECLARATION = 0;
     */
    DECLARATION = 0,
    /**
     * @generated from enum value: UNVERIFIED = 1;
     */
    UNVERIFIED = 1
}
/**
 * @generated from message google.protobuf.ExtensionRangeOptions.Declaration
 */
export declare class ExtensionRangeOptions_Declaration extends Message<ExtensionRangeOptions_Declaration> {
    /**
     * The extension number declared within the extension range.
     *
     * @generated from field: optional int32 number = 1;
     */
    number?: number;
    /**
     * The fully-qualified name of the extension field. There must be a leading
     * dot in front of the full name.
     *
     * @generated from field: optional string full_name = 2;
     */
    fullName?: string;
    /**
     * The fully-qualified type name of the extension field. Unlike
     * Metadata.type, Declaration.type must have a leading dot for messages
     * and enums.
     *
     * @generated from field: optional string type = 3;
     */
    type?: string;
    /**
     * If true, indicates that the number is reserved in the extension range,
     * and any extension field with the number will fail to compile. Set this
     * when a declared extension field is deleted.
     *
     * @generated from field: optional bool reserved = 5;
     */
    reserved?: boolean;
    /**
     * If true, indicates that the extension must be defined as repeated.
     * Otherwise the extension must be defined as optional.
     *
     * @generated from field: optional bool repeated = 6;
     */
    repeated?: boolean;
    constructor(data?: PartialMessage<ExtensionRangeOptions_Declaration>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.ExtensionRangeOptions.Declaration";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtensionRangeOptions_Declaration;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtensionRangeOptions_Declaration;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtensionRangeOptions_Declaration;
    static equals(a: ExtensionRangeOptions_Declaration | PlainMessage<ExtensionRangeOptions_Declaration> | undefined, b: ExtensionRangeOptions_Declaration | PlainMessage<ExtensionRangeOptions_Declaration> | undefined): boolean;
}
/**
 * Describes a field within a message.
 *
 * @generated from message google.protobuf.FieldDescriptorProto
 */
export declare class FieldDescriptorProto extends Message<FieldDescriptorProto> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional int32 number = 3;
     */
    number?: number;
    /**
     * @generated from field: optional google.protobuf.FieldDescriptorProto.Label label = 4;
     */
    label?: FieldDescriptorProto_Label;
    /**
     * If type_name is set, this need not be set.  If both this and type_name
     * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
     *
     * @generated from field: optional google.protobuf.FieldDescriptorProto.Type type = 5;
     */
    type?: FieldDescriptorProto_Type;
    /**
     * For message and enum types, this is the name of the type.  If the name
     * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
     * rules are used to find the type (i.e. first the nested types within this
     * message are searched, then within the parent, on up to the root
     * namespace).
     *
     * @generated from field: optional string type_name = 6;
     */
    typeName?: string;
    /**
     * For extensions, this is the name of the type being extended.  It is
     * resolved in the same manner as type_name.
     *
     * @generated from field: optional string extendee = 2;
     */
    extendee?: string;
    /**
     * For numeric types, contains the original text representation of the value.
     * For booleans, "true" or "false".
     * For strings, contains the default text contents (not escaped in any way).
     * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
     *
     * @generated from field: optional string default_value = 7;
     */
    defaultValue?: string;
    /**
     * If set, gives the index of a oneof in the containing type's oneof_decl
     * list.  This field is a member of that oneof.
     *
     * @generated from field: optional int32 oneof_index = 9;
     */
    oneofIndex?: number;
    /**
     * JSON name of this field. The value is set by protocol compiler. If the
     * user has set a "json_name" option on this field, that option's value
     * will be used. Otherwise, it's deduced from the field's name by converting
     * it to camelCase.
     *
     * @generated from field: optional string json_name = 10;
     */
    jsonName?: string;
    /**
     * @generated from field: optional google.protobuf.FieldOptions options = 8;
     */
    options?: FieldOptions;
    /**
     * If true, this is a proto3 "optional". When a proto3 field is optional, it
     * tracks presence regardless of field type.
     *
     * When proto3_optional is true, this field must be belong to a oneof to
     * signal to old proto3 clients that presence is tracked for this field. This
     * oneof is known as a "synthetic" oneof, and this field must be its sole
     * member (each proto3 optional field gets its own synthetic oneof). Synthetic
     * oneofs exist in the descriptor only, and do not generate any API. Synthetic
     * oneofs must be ordered after all "real" oneofs.
     *
     * For message fields, proto3_optional doesn't create any semantic change,
     * since non-repeated message fields always track presence. However it still
     * indicates the semantic detail of whether the user wrote "optional" or not.
     * This can be useful for round-tripping the .proto file. For consistency we
     * give message fields a synthetic oneof also, even though it is not required
     * to track presence. This is especially important because the parser can't
     * tell if a field is a message or an enum, so it must always create a
     * synthetic oneof.
     *
     * Proto2 optional fields do not set this flag, because they already indicate
     * optional with `LABEL_OPTIONAL`.
     *
     * @generated from field: optional bool proto3_optional = 17;
     */
    proto3Optional?: boolean;
    constructor(data?: PartialMessage<FieldDescriptorProto>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.FieldDescriptorProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldDescriptorProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldDescriptorProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldDescriptorProto;
    static equals(a: FieldDescriptorProto | PlainMessage<FieldDescriptorProto> | undefined, b: FieldDescriptorProto | PlainMessage<FieldDescriptorProto> | undefined): boolean;
}
/**
 * @generated from enum google.protobuf.FieldDescriptorProto.Type
 */
export declare enum FieldDescriptorProto_Type {
    /**
     * 0 is reserved for errors.
     * Order is weird for historical reasons.
     *
     * @generated from enum value: TYPE_DOUBLE = 1;
     */
    DOUBLE = 1,
    /**
     * @generated from enum value: TYPE_FLOAT = 2;
     */
    FLOAT = 2,
    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     *
     * @generated from enum value: TYPE_INT64 = 3;
     */
    INT64 = 3,
    /**
     * @generated from enum value: TYPE_UINT64 = 4;
     */
    UINT64 = 4,
    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     *
     * @generated from enum value: TYPE_INT32 = 5;
     */
    INT32 = 5,
    /**
     * @generated from enum value: TYPE_FIXED64 = 6;
     */
    FIXED64 = 6,
    /**
     * @generated from enum value: TYPE_FIXED32 = 7;
     */
    FIXED32 = 7,
    /**
     * @generated from enum value: TYPE_BOOL = 8;
     */
    BOOL = 8,
    /**
     * @generated from enum value: TYPE_STRING = 9;
     */
    STRING = 9,
    /**
     * Tag-delimited aggregate.
     * Group type is deprecated and not supported after google.protobuf. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.  In Editions, the group wire format
     * can be enabled via the `message_encoding` feature.
     *
     * @generated from enum value: TYPE_GROUP = 10;
     */
    GROUP = 10,
    /**
     * Length-delimited aggregate.
     *
     * @generated from enum value: TYPE_MESSAGE = 11;
     */
    MESSAGE = 11,
    /**
     * New in version 2.
     *
     * @generated from enum value: TYPE_BYTES = 12;
     */
    BYTES = 12,
    /**
     * @generated from enum value: TYPE_UINT32 = 13;
     */
    UINT32 = 13,
    /**
     * @generated from enum value: TYPE_ENUM = 14;
     */
    ENUM = 14,
    /**
     * @generated from enum value: TYPE_SFIXED32 = 15;
     */
    SFIXED32 = 15,
    /**
     * @generated from enum value: TYPE_SFIXED64 = 16;
     */
    SFIXED64 = 16,
    /**
     * Uses ZigZag encoding.
     *
     * @generated from enum value: TYPE_SINT32 = 17;
     */
    SINT32 = 17,
    /**
     * Uses ZigZag encoding.
     *
     * @generated from enum value: TYPE_SINT64 = 18;
     */
    SINT64 = 18
}
/**
 * @generated from enum google.protobuf.FieldDescriptorProto.Label
 */
export declare enum FieldDescriptorProto_Label {
    /**
     * 0 is reserved for errors
     *
     * @generated from enum value: LABEL_OPTIONAL = 1;
     */
    OPTIONAL = 1,
    /**
     * @generated from enum value: LABEL_REPEATED = 3;
     */
    REPEATED = 3,
    /**
     * The required label is only allowed in google.protobuf.  In proto3 and Editions
     * it's explicitly prohibited.  In Editions, the `field_presence` feature
     * can be used to get this behavior.
     *
     * @generated from enum value: LABEL_REQUIRED = 2;
     */
    REQUIRED = 2
}
/**
 * Describes a oneof.
 *
 * @generated from message google.protobuf.OneofDescriptorProto
 */
export declare class OneofDescriptorProto extends Message<OneofDescriptorProto> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional google.protobuf.OneofOptions options = 2;
     */
    options?: OneofOptions;
    constructor(data?: PartialMessage<OneofDescriptorProto>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.OneofDescriptorProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OneofDescriptorProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OneofDescriptorProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OneofDescriptorProto;
    static equals(a: OneofDescriptorProto | PlainMessage<OneofDescriptorProto> | undefined, b: OneofDescriptorProto | PlainMessage<OneofDescriptorProto> | undefined): boolean;
}
/**
 * Describes an enum type.
 *
 * @generated from message google.protobuf.EnumDescriptorProto
 */
export declare class EnumDescriptorProto extends Message<EnumDescriptorProto> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: repeated google.protobuf.EnumValueDescriptorProto value = 2;
     */
    value: EnumValueDescriptorProto[];
    /**
     * @generated from field: optional google.protobuf.EnumOptions options = 3;
     */
    options?: EnumOptions;
    /**
     * Range of reserved numeric values. Reserved numeric values may not be used
     * by enum values in the same enum declaration. Reserved ranges may not
     * overlap.
     *
     * @generated from field: repeated google.protobuf.EnumDescriptorProto.EnumReservedRange reserved_range = 4;
     */
    reservedRange: EnumDescriptorProto_EnumReservedRange[];
    /**
     * Reserved enum value names, which may not be reused. A given name may only
     * be reserved once.
     *
     * @generated from field: repeated string reserved_name = 5;
     */
    reservedName: string[];
    constructor(data?: PartialMessage<EnumDescriptorProto>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.EnumDescriptorProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumDescriptorProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumDescriptorProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumDescriptorProto;
    static equals(a: EnumDescriptorProto | PlainMessage<EnumDescriptorProto> | undefined, b: EnumDescriptorProto | PlainMessage<EnumDescriptorProto> | undefined): boolean;
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 *
 * @generated from message google.protobuf.EnumDescriptorProto.EnumReservedRange
 */
export declare class EnumDescriptorProto_EnumReservedRange extends Message<EnumDescriptorProto_EnumReservedRange> {
    /**
     * Inclusive.
     *
     * @generated from field: optional int32 start = 1;
     */
    start?: number;
    /**
     * Inclusive.
     *
     * @generated from field: optional int32 end = 2;
     */
    end?: number;
    constructor(data?: PartialMessage<EnumDescriptorProto_EnumReservedRange>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumDescriptorProto_EnumReservedRange;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumDescriptorProto_EnumReservedRange;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumDescriptorProto_EnumReservedRange;
    static equals(a: EnumDescriptorProto_EnumReservedRange | PlainMessage<EnumDescriptorProto_EnumReservedRange> | undefined, b: EnumDescriptorProto_EnumReservedRange | PlainMessage<EnumDescriptorProto_EnumReservedRange> | undefined): boolean;
}
/**
 * Describes a value within an enum.
 *
 * @generated from message google.protobuf.EnumValueDescriptorProto
 */
export declare class EnumValueDescriptorProto extends Message<EnumValueDescriptorProto> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional int32 number = 2;
     */
    number?: number;
    /**
     * @generated from field: optional google.protobuf.EnumValueOptions options = 3;
     */
    options?: EnumValueOptions;
    constructor(data?: PartialMessage<EnumValueDescriptorProto>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.EnumValueDescriptorProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumValueDescriptorProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumValueDescriptorProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumValueDescriptorProto;
    static equals(a: EnumValueDescriptorProto | PlainMessage<EnumValueDescriptorProto> | undefined, b: EnumValueDescriptorProto | PlainMessage<EnumValueDescriptorProto> | undefined): boolean;
}
/**
 * Describes a service.
 *
 * @generated from message google.protobuf.ServiceDescriptorProto
 */
export declare class ServiceDescriptorProto extends Message<ServiceDescriptorProto> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: repeated google.protobuf.MethodDescriptorProto method = 2;
     */
    method: MethodDescriptorProto[];
    /**
     * @generated from field: optional google.protobuf.ServiceOptions options = 3;
     */
    options?: ServiceOptions;
    constructor(data?: PartialMessage<ServiceDescriptorProto>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.ServiceDescriptorProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceDescriptorProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceDescriptorProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceDescriptorProto;
    static equals(a: ServiceDescriptorProto | PlainMessage<ServiceDescriptorProto> | undefined, b: ServiceDescriptorProto | PlainMessage<ServiceDescriptorProto> | undefined): boolean;
}
/**
 * Describes a method of a service.
 *
 * @generated from message google.protobuf.MethodDescriptorProto
 */
export declare class MethodDescriptorProto extends Message<MethodDescriptorProto> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * Input and output type names.  These are resolved in the same way as
     * FieldDescriptorProto.type_name, but must refer to a message type.
     *
     * @generated from field: optional string input_type = 2;
     */
    inputType?: string;
    /**
     * @generated from field: optional string output_type = 3;
     */
    outputType?: string;
    /**
     * @generated from field: optional google.protobuf.MethodOptions options = 4;
     */
    options?: MethodOptions;
    /**
     * Identifies if client streams multiple client messages
     *
     * @generated from field: optional bool client_streaming = 5 [default = false];
     */
    clientStreaming?: boolean;
    /**
     * Identifies if server streams multiple server messages
     *
     * @generated from field: optional bool server_streaming = 6 [default = false];
     */
    serverStreaming?: boolean;
    constructor(data?: PartialMessage<MethodDescriptorProto>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.MethodDescriptorProto";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodDescriptorProto;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodDescriptorProto;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodDescriptorProto;
    static equals(a: MethodDescriptorProto | PlainMessage<MethodDescriptorProto> | undefined, b: MethodDescriptorProto | PlainMessage<MethodDescriptorProto> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.FileOptions
 */
export declare class FileOptions extends Message<FileOptions> {
    /**
     * Sets the Java package where classes generated from this .proto will be
     * placed.  By default, the proto package is used, but this is often
     * inappropriate because proto packages do not normally start with backwards
     * domain names.
     *
     * @generated from field: optional string java_package = 1;
     */
    javaPackage?: string;
    /**
     * Controls the name of the wrapper Java class generated for the .proto file.
     * That class will always contain the .proto file's getDescriptor() method as
     * well as any top-level extensions defined in the .proto file.
     * If java_multiple_files is disabled, then all the other classes from the
     * .proto file will be nested inside the single wrapper outer class.
     *
     * @generated from field: optional string java_outer_classname = 8;
     */
    javaOuterClassname?: string;
    /**
     * If enabled, then the Java code generator will generate a separate .java
     * file for each top-level message, enum, and service defined in the .proto
     * file.  Thus, these types will *not* be nested inside the wrapper class
     * named by java_outer_classname.  However, the wrapper class will still be
     * generated to contain the file's getDescriptor() method as well as any
     * top-level extensions defined in the file.
     *
     * @generated from field: optional bool java_multiple_files = 10 [default = false];
     */
    javaMultipleFiles?: boolean;
    /**
     * This option does nothing.
     *
     * @generated from field: optional bool java_generate_equals_and_hash = 20 [deprecated = true];
     * @deprecated
     */
    javaGenerateEqualsAndHash?: boolean;
    /**
     * If set true, then the Java2 code generator will generate code that
     * throws an exception whenever an attempt is made to assign a non-UTF-8
     * byte sequence to a string field.
     * Message reflection will do the same.
     * However, an extension field still accepts non-UTF-8 byte sequences.
     * This option has no effect on when used with the lite runtime.
     *
     * @generated from field: optional bool java_string_check_utf8 = 27 [default = false];
     */
    javaStringCheckUtf8?: boolean;
    /**
     * @generated from field: optional google.protobuf.FileOptions.OptimizeMode optimize_for = 9 [default = SPEED];
     */
    optimizeFor?: FileOptions_OptimizeMode;
    /**
     * Sets the Go package where structs generated from this .proto will be
     * placed. If omitted, the Go package will be derived from the following:
     *   - The basename of the package import path, if provided.
     *   - Otherwise, the package statement in the .proto file, if present.
     *   - Otherwise, the basename of the .proto file, without extension.
     *
     * @generated from field: optional string go_package = 11;
     */
    goPackage?: string;
    /**
     * Should generic services be generated in each language?  "Generic" services
     * are not specific to any particular RPC system.  They are generated by the
     * main code generators in each language (without additional plugins).
     * Generic services were the only kind of service generation supported by
     * early versions of google.protobuf.
     *
     * Generic services are now considered deprecated in favor of using plugins
     * that generate code specific to your particular RPC system.  Therefore,
     * these default to false.  Old code which depends on generic services should
     * explicitly set them to true.
     *
     * @generated from field: optional bool cc_generic_services = 16 [default = false];
     */
    ccGenericServices?: boolean;
    /**
     * @generated from field: optional bool java_generic_services = 17 [default = false];
     */
    javaGenericServices?: boolean;
    /**
     * @generated from field: optional bool py_generic_services = 18 [default = false];
     */
    pyGenericServices?: boolean;
    /**
     * @generated from field: optional bool php_generic_services = 42 [default = false];
     */
    phpGenericServices?: boolean;
    /**
     * Is this file deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for everything in the file, or it will be completely ignored; in the very
     * least, this is a formalization for deprecating files.
     *
     * @generated from field: optional bool deprecated = 23 [default = false];
     */
    deprecated?: boolean;
    /**
     * Enables the use of arenas for the proto messages in this file. This applies
     * only to generated classes for C++.
     *
     * @generated from field: optional bool cc_enable_arenas = 31 [default = true];
     */
    ccEnableArenas?: boolean;
    /**
     * Sets the objective c class prefix which is prepended to all objective c
     * generated classes from this .proto. There is no default.
     *
     * @generated from field: optional string objc_class_prefix = 36;
     */
    objcClassPrefix?: string;
    /**
     * Namespace for generated classes; defaults to the package.
     *
     * @generated from field: optional string csharp_namespace = 37;
     */
    csharpNamespace?: string;
    /**
     * By default Swift generators will take the proto package and CamelCase it
     * replacing '.' with underscore and use that to prefix the types/symbols
     * defined. When this options is provided, they will use this value instead
     * to prefix the types/symbols defined.
     *
     * @generated from field: optional string swift_prefix = 39;
     */
    swiftPrefix?: string;
    /**
     * Sets the php class prefix which is prepended to all php generated classes
     * from this .proto. Default is empty.
     *
     * @generated from field: optional string php_class_prefix = 40;
     */
    phpClassPrefix?: string;
    /**
     * Use this option to change the namespace of php generated classes. Default
     * is empty. When this option is empty, the package name will be used for
     * determining the namespace.
     *
     * @generated from field: optional string php_namespace = 41;
     */
    phpNamespace?: string;
    /**
     * Use this option to change the namespace of php generated metadata classes.
     * Default is empty. When this option is empty, the proto file name will be
     * used for determining the namespace.
     *
     * @generated from field: optional string php_metadata_namespace = 44;
     */
    phpMetadataNamespace?: string;
    /**
     * Use this option to change the package of ruby generated classes. Default
     * is empty. When this option is not set, the package name will be used for
     * determining the ruby package.
     *
     * @generated from field: optional string ruby_package = 45;
     */
    rubyPackage?: string;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from field: optional google.protobuf.FeatureSet features = 50;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here.
     * See the documentation for the "Options" section above.
     *
     * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    constructor(data?: PartialMessage<FileOptions>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.FileOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileOptions;
    static equals(a: FileOptions | PlainMessage<FileOptions> | undefined, b: FileOptions | PlainMessage<FileOptions> | undefined): boolean;
}
/**
 * Generated classes can be optimized for speed or code size.
 *
 * @generated from enum google.protobuf.FileOptions.OptimizeMode
 */
export declare enum FileOptions_OptimizeMode {
    /**
     * Generate complete code for parsing, serialization,
     *
     * @generated from enum value: SPEED = 1;
     */
    SPEED = 1,
    /**
     * etc.
     *
     * Use ReflectionOps to implement these methods.
     *
     * @generated from enum value: CODE_SIZE = 2;
     */
    CODE_SIZE = 2,
    /**
     * Generate code using MessageLite and the lite runtime.
     *
     * @generated from enum value: LITE_RUNTIME = 3;
     */
    LITE_RUNTIME = 3
}
/**
 * @generated from message google.protobuf.MessageOptions
 */
export declare class MessageOptions extends Message<MessageOptions> {
    /**
     * Set true to use the old proto1 MessageSet wire format for extensions.
     * This is provided for backwards-compatibility with the MessageSet wire
     * format.  You should not use this for any other reason:  It's less
     * efficient, has fewer features, and is more complicated.
     *
     * The message must be defined exactly as follows:
     *   message Foo {
     *     option message_set_wire_format = true;
     *     extensions 4 to max;
     *   }
     * Note that the message cannot have any defined fields; MessageSets only
     * have extensions.
     *
     * All extensions of your type must be singular messages; e.g. they cannot
     * be int32s, enums, or repeated messages.
     *
     * Because this is an option, the above two restrictions are not enforced by
     * the protocol compiler.
     *
     * @generated from field: optional bool message_set_wire_format = 1 [default = false];
     */
    messageSetWireFormat?: boolean;
    /**
     * Disables the generation of the standard "descriptor()" accessor, which can
     * conflict with a field of the same name.  This is meant to make migration
     * from proto1 easier; new code should avoid fields named "descriptor".
     *
     * @generated from field: optional bool no_standard_descriptor_accessor = 2 [default = false];
     */
    noStandardDescriptorAccessor?: boolean;
    /**
     * Is this message deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the message, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating messages.
     *
     * @generated from field: optional bool deprecated = 3 [default = false];
     */
    deprecated?: boolean;
    /**
     * NOTE: Do not set the option in .proto files. Always use the maps syntax
     * instead. The option should only be implicitly set by the proto compiler
     * parser.
     *
     * Whether the message is an automatically generated map entry type for the
     * maps field.
     *
     * For maps fields:
     *     map<KeyType, ValueType> map_field = 1;
     * The parsed descriptor looks like:
     *     message MapFieldEntry {
     *         option map_entry = true;
     *         optional KeyType key = 1;
     *         optional ValueType value = 2;
     *     }
     *     repeated MapFieldEntry map_field = 1;
     *
     * Implementations may choose not to generate the map_entry=true message, but
     * use a native map in the target language to hold the keys and values.
     * The reflection APIs in such implementations still need to work as
     * if the field is a repeated message field.
     *
     * @generated from field: optional bool map_entry = 7;
     */
    mapEntry?: boolean;
    /**
     * Enable the legacy handling of JSON field name conflicts.  This lowercases
     * and strips underscored from the fields before comparison in proto3 only.
     * The new behavior takes `json_name` into account and applies to proto2 as
     * well.
     *
     * This should only be used as a temporary measure against broken builds due
     * to the change in behavior for JSON field name conflicts.
     *
     * TODO This is legacy behavior we plan to remove once downstream
     * teams have had time to migrate.
     *
     * @generated from field: optional bool deprecated_legacy_json_field_conflicts = 11 [deprecated = true];
     * @deprecated
     */
    deprecatedLegacyJsonFieldConflicts?: boolean;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from field: optional google.protobuf.FeatureSet features = 12;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    constructor(data?: PartialMessage<MessageOptions>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.MessageOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageOptions;
    static equals(a: MessageOptions | PlainMessage<MessageOptions> | undefined, b: MessageOptions | PlainMessage<MessageOptions> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.FieldOptions
 */
export declare class FieldOptions extends Message<FieldOptions> {
    /**
     * The ctype option instructs the C++ code generator to use a different
     * representation of the field than it normally would.  See the specific
     * options below.  This option is only implemented to support use of
     * [ctype=CORD] and [ctype=STRING] (the default) on non-repeated fields of
     * type "bytes" in the open source release -- sorry, we'll try to include
     * other types in a future version!
     *
     * @generated from field: optional google.protobuf.FieldOptions.CType ctype = 1 [default = STRING];
     */
    ctype?: FieldOptions_CType;
    /**
     * The packed option can be enabled for repeated primitive fields to enable
     * a more efficient representation on the wire. Rather than repeatedly
     * writing the tag and type for each element, the entire array is encoded as
     * a single length-delimited blob. In proto3, only explicit setting it to
     * false will avoid using packed encoding.  This option is prohibited in
     * Editions, but the `repeated_field_encoding` feature can be used to control
     * the behavior.
     *
     * @generated from field: optional bool packed = 2;
     */
    packed?: boolean;
    /**
     * The jstype option determines the JavaScript type used for values of the
     * field.  The option is permitted only for 64 bit integral and fixed types
     * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
     * is represented as JavaScript string, which avoids loss of precision that
     * can happen when a large value is converted to a floating point JavaScript.
     * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
     * use the JavaScript "number" type.  The behavior of the default option
     * JS_NORMAL is implementation dependent.
     *
     * This option is an enum to permit additional types to be added, e.g.
     * goog.math.Integer.
     *
     * @generated from field: optional google.protobuf.FieldOptions.JSType jstype = 6 [default = JS_NORMAL];
     */
    jstype?: FieldOptions_JSType;
    /**
     * Should this field be parsed lazily?  Lazy applies only to message-type
     * fields.  It means that when the outer message is initially parsed, the
     * inner message's contents will not be parsed but instead stored in encoded
     * form.  The inner message will actually be parsed when it is first accessed.
     *
     * This is only a hint.  Implementations are free to choose whether to use
     * eager or lazy parsing regardless of the value of this option.  However,
     * setting this option true suggests that the protocol author believes that
     * using lazy parsing on this field is worth the additional bookkeeping
     * overhead typically needed to implement it.
     *
     * This option does not affect the public interface of any generated code;
     * all method signatures remain the same.  Furthermore, thread-safety of the
     * interface is not affected by this option; const methods remain safe to
     * call from multiple threads concurrently, while non-const methods continue
     * to require exclusive access.
     *
     * Note that implementations may choose not to check required fields within
     * a lazy sub-message.  That is, calling IsInitialized() on the outer message
     * may return true even if the inner message has missing required fields.
     * This is necessary because otherwise the inner message would have to be
     * parsed in order to perform the check, defeating the purpose of lazy
     * parsing.  An implementation which chooses not to check required fields
     * must be consistent about it.  That is, for any particular sub-message, the
     * implementation must either *always* check its required fields, or *never*
     * check its required fields, regardless of whether or not the message has
     * been parsed.
     *
     * As of May 2022, lazy verifies the contents of the byte stream during
     * parsing.  An invalid byte stream will cause the overall parsing to fail.
     *
     * @generated from field: optional bool lazy = 5 [default = false];
     */
    lazy?: boolean;
    /**
     * unverified_lazy does no correctness checks on the byte stream. This should
     * only be used where lazy with verification is prohibitive for performance
     * reasons.
     *
     * @generated from field: optional bool unverified_lazy = 15 [default = false];
     */
    unverifiedLazy?: boolean;
    /**
     * Is this field deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for accessors, or it will be completely ignored; in the very least, this
     * is a formalization for deprecating fields.
     *
     * @generated from field: optional bool deprecated = 3 [default = false];
     */
    deprecated?: boolean;
    /**
     * For Google-internal migration only. Do not use.
     *
     * @generated from field: optional bool weak = 10 [default = false];
     */
    weak?: boolean;
    /**
     * Indicate that the field value should not be printed out when using debug
     * formats, e.g. when the field contains sensitive credentials.
     *
     * @generated from field: optional bool debug_redact = 16 [default = false];
     */
    debugRedact?: boolean;
    /**
     * @generated from field: optional google.protobuf.FieldOptions.OptionRetention retention = 17;
     */
    retention?: FieldOptions_OptionRetention;
    /**
     * @generated from field: repeated google.protobuf.FieldOptions.OptionTargetType targets = 19;
     */
    targets: FieldOptions_OptionTargetType[];
    /**
     * @generated from field: repeated google.protobuf.FieldOptions.EditionDefault edition_defaults = 20;
     */
    editionDefaults: FieldOptions_EditionDefault[];
    /**
     * Any features defined in the specific edition.
     *
     * @generated from field: optional google.protobuf.FeatureSet features = 21;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    constructor(data?: PartialMessage<FieldOptions>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.FieldOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldOptions;
    static equals(a: FieldOptions | PlainMessage<FieldOptions> | undefined, b: FieldOptions | PlainMessage<FieldOptions> | undefined): boolean;
}
/**
 * @generated from enum google.protobuf.FieldOptions.CType
 */
export declare enum FieldOptions_CType {
    /**
     * Default mode.
     *
     * @generated from enum value: STRING = 0;
     */
    STRING = 0,
    /**
     * The option [ctype=CORD] may be applied to a non-repeated field of type
     * "bytes". It indicates that in C++, the data should be stored in a Cord
     * instead of a string.  For very large strings, this may reduce memory
     * fragmentation. It may also allow better performance when parsing from a
     * Cord, or when parsing with aliasing enabled, as the parsed Cord may then
     * alias the original buffer.
     *
     * @generated from enum value: CORD = 1;
     */
    CORD = 1,
    /**
     * @generated from enum value: STRING_PIECE = 2;
     */
    STRING_PIECE = 2
}
/**
 * @generated from enum google.protobuf.FieldOptions.JSType
 */
export declare enum FieldOptions_JSType {
    /**
     * Use the default type.
     *
     * @generated from enum value: JS_NORMAL = 0;
     */
    JS_NORMAL = 0,
    /**
     * Use JavaScript strings.
     *
     * @generated from enum value: JS_STRING = 1;
     */
    JS_STRING = 1,
    /**
     * Use JavaScript numbers.
     *
     * @generated from enum value: JS_NUMBER = 2;
     */
    JS_NUMBER = 2
}
/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 *
 * @generated from enum google.protobuf.FieldOptions.OptionRetention
 */
export declare enum FieldOptions_OptionRetention {
    /**
     * @generated from enum value: RETENTION_UNKNOWN = 0;
     */
    RETENTION_UNKNOWN = 0,
    /**
     * @generated from enum value: RETENTION_RUNTIME = 1;
     */
    RETENTION_RUNTIME = 1,
    /**
     * @generated from enum value: RETENTION_SOURCE = 2;
     */
    RETENTION_SOURCE = 2
}
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 *
 * @generated from enum google.protobuf.FieldOptions.OptionTargetType
 */
export declare enum FieldOptions_OptionTargetType {
    /**
     * @generated from enum value: TARGET_TYPE_UNKNOWN = 0;
     */
    TARGET_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: TARGET_TYPE_FILE = 1;
     */
    TARGET_TYPE_FILE = 1,
    /**
     * @generated from enum value: TARGET_TYPE_EXTENSION_RANGE = 2;
     */
    TARGET_TYPE_EXTENSION_RANGE = 2,
    /**
     * @generated from enum value: TARGET_TYPE_MESSAGE = 3;
     */
    TARGET_TYPE_MESSAGE = 3,
    /**
     * @generated from enum value: TARGET_TYPE_FIELD = 4;
     */
    TARGET_TYPE_FIELD = 4,
    /**
     * @generated from enum value: TARGET_TYPE_ONEOF = 5;
     */
    TARGET_TYPE_ONEOF = 5,
    /**
     * @generated from enum value: TARGET_TYPE_ENUM = 6;
     */
    TARGET_TYPE_ENUM = 6,
    /**
     * @generated from enum value: TARGET_TYPE_ENUM_ENTRY = 7;
     */
    TARGET_TYPE_ENUM_ENTRY = 7,
    /**
     * @generated from enum value: TARGET_TYPE_SERVICE = 8;
     */
    TARGET_TYPE_SERVICE = 8,
    /**
     * @generated from enum value: TARGET_TYPE_METHOD = 9;
     */
    TARGET_TYPE_METHOD = 9
}
/**
 * @generated from message google.protobuf.FieldOptions.EditionDefault
 */
export declare class FieldOptions_EditionDefault extends Message<FieldOptions_EditionDefault> {
    /**
     * @generated from field: optional google.protobuf.Edition edition = 3;
     */
    edition?: Edition;
    /**
     * Textproto value.
     *
     * @generated from field: optional string value = 2;
     */
    value?: string;
    constructor(data?: PartialMessage<FieldOptions_EditionDefault>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.FieldOptions.EditionDefault";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldOptions_EditionDefault;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldOptions_EditionDefault;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldOptions_EditionDefault;
    static equals(a: FieldOptions_EditionDefault | PlainMessage<FieldOptions_EditionDefault> | undefined, b: FieldOptions_EditionDefault | PlainMessage<FieldOptions_EditionDefault> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.OneofOptions
 */
export declare class OneofOptions extends Message<OneofOptions> {
    /**
     * Any features defined in the specific edition.
     *
     * @generated from field: optional google.protobuf.FeatureSet features = 1;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    constructor(data?: PartialMessage<OneofOptions>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.OneofOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OneofOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OneofOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OneofOptions;
    static equals(a: OneofOptions | PlainMessage<OneofOptions> | undefined, b: OneofOptions | PlainMessage<OneofOptions> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.EnumOptions
 */
export declare class EnumOptions extends Message<EnumOptions> {
    /**
     * Set this option to true to allow mapping different tag names to the same
     * value.
     *
     * @generated from field: optional bool allow_alias = 2;
     */
    allowAlias?: boolean;
    /**
     * Is this enum deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the enum, or it will be completely ignored; in the very least, this
     * is a formalization for deprecating enums.
     *
     * @generated from field: optional bool deprecated = 3 [default = false];
     */
    deprecated?: boolean;
    /**
     * Enable the legacy handling of JSON field name conflicts.  This lowercases
     * and strips underscored from the fields before comparison in proto3 only.
     * The new behavior takes `json_name` into account and applies to proto2 as
     * well.
     * TODO Remove this legacy behavior once downstream teams have
     * had time to migrate.
     *
     * @generated from field: optional bool deprecated_legacy_json_field_conflicts = 6 [deprecated = true];
     * @deprecated
     */
    deprecatedLegacyJsonFieldConflicts?: boolean;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from field: optional google.protobuf.FeatureSet features = 7;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    constructor(data?: PartialMessage<EnumOptions>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.EnumOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumOptions;
    static equals(a: EnumOptions | PlainMessage<EnumOptions> | undefined, b: EnumOptions | PlainMessage<EnumOptions> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.EnumValueOptions
 */
export declare class EnumValueOptions extends Message<EnumValueOptions> {
    /**
     * Is this enum value deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the enum value, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating enum values.
     *
     * @generated from field: optional bool deprecated = 1 [default = false];
     */
    deprecated?: boolean;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from field: optional google.protobuf.FeatureSet features = 2;
     */
    features?: FeatureSet;
    /**
     * Indicate that fields annotated with this enum value should not be printed
     * out when using debug formats, e.g. when the field contains sensitive
     * credentials.
     *
     * @generated from field: optional bool debug_redact = 3 [default = false];
     */
    debugRedact?: boolean;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    constructor(data?: PartialMessage<EnumValueOptions>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.EnumValueOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumValueOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumValueOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumValueOptions;
    static equals(a: EnumValueOptions | PlainMessage<EnumValueOptions> | undefined, b: EnumValueOptions | PlainMessage<EnumValueOptions> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.ServiceOptions
 */
export declare class ServiceOptions extends Message<ServiceOptions> {
    /**
     * Any features defined in the specific edition.
     *
     * @generated from field: optional google.protobuf.FeatureSet features = 34;
     */
    features?: FeatureSet;
    /**
     * Is this service deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the service, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating services.
     *
     * @generated from field: optional bool deprecated = 33 [default = false];
     */
    deprecated?: boolean;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    constructor(data?: PartialMessage<ServiceOptions>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.ServiceOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceOptions;
    static equals(a: ServiceOptions | PlainMessage<ServiceOptions> | undefined, b: ServiceOptions | PlainMessage<ServiceOptions> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.MethodOptions
 */
export declare class MethodOptions extends Message<MethodOptions> {
    /**
     * Is this method deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the method, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating methods.
     *
     * @generated from field: optional bool deprecated = 33 [default = false];
     */
    deprecated?: boolean;
    /**
     * @generated from field: optional google.protobuf.MethodOptions.IdempotencyLevel idempotency_level = 34 [default = IDEMPOTENCY_UNKNOWN];
     */
    idempotencyLevel?: MethodOptions_IdempotencyLevel;
    /**
     * Any features defined in the specific edition.
     *
     * @generated from field: optional google.protobuf.FeatureSet features = 35;
     */
    features?: FeatureSet;
    /**
     * The parser stores options it doesn't recognize here. See above.
     *
     * @generated from field: repeated google.protobuf.UninterpretedOption uninterpreted_option = 999;
     */
    uninterpretedOption: UninterpretedOption[];
    constructor(data?: PartialMessage<MethodOptions>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.MethodOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodOptions;
    static equals(a: MethodOptions | PlainMessage<MethodOptions> | undefined, b: MethodOptions | PlainMessage<MethodOptions> | undefined): boolean;
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 *
 * @generated from enum google.protobuf.MethodOptions.IdempotencyLevel
 */
export declare enum MethodOptions_IdempotencyLevel {
    /**
     * @generated from enum value: IDEMPOTENCY_UNKNOWN = 0;
     */
    IDEMPOTENCY_UNKNOWN = 0,
    /**
     * implies idempotent
     *
     * @generated from enum value: NO_SIDE_EFFECTS = 1;
     */
    NO_SIDE_EFFECTS = 1,
    /**
     * idempotent, but may have side effects
     *
     * @generated from enum value: IDEMPOTENT = 2;
     */
    IDEMPOTENT = 2
}
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 *
 * @generated from message google.protobuf.UninterpretedOption
 */
export declare class UninterpretedOption extends Message<UninterpretedOption> {
    /**
     * @generated from field: repeated google.protobuf.UninterpretedOption.NamePart name = 2;
     */
    name: UninterpretedOption_NamePart[];
    /**
     * The value of the uninterpreted option, in whatever type the tokenizer
     * identified it as during parsing. Exactly one of these should be set.
     *
     * @generated from field: optional string identifier_value = 3;
     */
    identifierValue?: string;
    /**
     * @generated from field: optional uint64 positive_int_value = 4;
     */
    positiveIntValue?: bigint;
    /**
     * @generated from field: optional int64 negative_int_value = 5;
     */
    negativeIntValue?: bigint;
    /**
     * @generated from field: optional double double_value = 6;
     */
    doubleValue?: number;
    /**
     * @generated from field: optional bytes string_value = 7;
     */
    stringValue?: Uint8Array;
    /**
     * @generated from field: optional string aggregate_value = 8;
     */
    aggregateValue?: string;
    constructor(data?: PartialMessage<UninterpretedOption>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.UninterpretedOption";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UninterpretedOption;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UninterpretedOption;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UninterpretedOption;
    static equals(a: UninterpretedOption | PlainMessage<UninterpretedOption> | undefined, b: UninterpretedOption | PlainMessage<UninterpretedOption> | undefined): boolean;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 *
 * @generated from message google.protobuf.UninterpretedOption.NamePart
 */
export declare class UninterpretedOption_NamePart extends Message<UninterpretedOption_NamePart> {
    /**
     * @generated from field: required string name_part = 1;
     */
    namePart?: string;
    /**
     * @generated from field: required bool is_extension = 2;
     */
    isExtension?: boolean;
    constructor(data?: PartialMessage<UninterpretedOption_NamePart>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.UninterpretedOption.NamePart";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UninterpretedOption_NamePart;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UninterpretedOption_NamePart;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UninterpretedOption_NamePart;
    static equals(a: UninterpretedOption_NamePart | PlainMessage<UninterpretedOption_NamePart> | undefined, b: UninterpretedOption_NamePart | PlainMessage<UninterpretedOption_NamePart> | undefined): boolean;
}
/**
 * TODO Enums in C++ gencode (and potentially other languages) are
 * not well scoped.  This means that each of the feature enums below can clash
 * with each other.  The short names we've chosen maximize call-site
 * readability, but leave us very open to this scenario.  A future feature will
 * be designed and implemented to handle this, hopefully before we ever hit a
 * conflict here.
 *
 * @generated from message google.protobuf.FeatureSet
 */
export declare class FeatureSet extends Message<FeatureSet> {
    /**
     * @generated from field: optional google.protobuf.FeatureSet.FieldPresence field_presence = 1;
     */
    fieldPresence?: FeatureSet_FieldPresence;
    /**
     * @generated from field: optional google.protobuf.FeatureSet.EnumType enum_type = 2;
     */
    enumType?: FeatureSet_EnumType;
    /**
     * @generated from field: optional google.protobuf.FeatureSet.RepeatedFieldEncoding repeated_field_encoding = 3;
     */
    repeatedFieldEncoding?: FeatureSet_RepeatedFieldEncoding;
    /**
     * @generated from field: optional google.protobuf.FeatureSet.Utf8Validation utf8_validation = 4;
     */
    utf8Validation?: FeatureSet_Utf8Validation;
    /**
     * @generated from field: optional google.protobuf.FeatureSet.MessageEncoding message_encoding = 5;
     */
    messageEncoding?: FeatureSet_MessageEncoding;
    /**
     * @generated from field: optional google.protobuf.FeatureSet.JsonFormat json_format = 6;
     */
    jsonFormat?: FeatureSet_JsonFormat;
    constructor(data?: PartialMessage<FeatureSet>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.FeatureSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeatureSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeatureSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeatureSet;
    static equals(a: FeatureSet | PlainMessage<FeatureSet> | undefined, b: FeatureSet | PlainMessage<FeatureSet> | undefined): boolean;
}
/**
 * @generated from enum google.protobuf.FeatureSet.FieldPresence
 */
export declare enum FeatureSet_FieldPresence {
    /**
     * @generated from enum value: FIELD_PRESENCE_UNKNOWN = 0;
     */
    FIELD_PRESENCE_UNKNOWN = 0,
    /**
     * @generated from enum value: EXPLICIT = 1;
     */
    EXPLICIT = 1,
    /**
     * @generated from enum value: IMPLICIT = 2;
     */
    IMPLICIT = 2,
    /**
     * @generated from enum value: LEGACY_REQUIRED = 3;
     */
    LEGACY_REQUIRED = 3
}
/**
 * @generated from enum google.protobuf.FeatureSet.EnumType
 */
export declare enum FeatureSet_EnumType {
    /**
     * @generated from enum value: ENUM_TYPE_UNKNOWN = 0;
     */
    ENUM_TYPE_UNKNOWN = 0,
    /**
     * @generated from enum value: OPEN = 1;
     */
    OPEN = 1,
    /**
     * @generated from enum value: CLOSED = 2;
     */
    CLOSED = 2
}
/**
 * @generated from enum google.protobuf.FeatureSet.RepeatedFieldEncoding
 */
export declare enum FeatureSet_RepeatedFieldEncoding {
    /**
     * @generated from enum value: REPEATED_FIELD_ENCODING_UNKNOWN = 0;
     */
    REPEATED_FIELD_ENCODING_UNKNOWN = 0,
    /**
     * @generated from enum value: PACKED = 1;
     */
    PACKED = 1,
    /**
     * @generated from enum value: EXPANDED = 2;
     */
    EXPANDED = 2
}
/**
 * @generated from enum google.protobuf.FeatureSet.Utf8Validation
 */
export declare enum FeatureSet_Utf8Validation {
    /**
     * @generated from enum value: UTF8_VALIDATION_UNKNOWN = 0;
     */
    UTF8_VALIDATION_UNKNOWN = 0,
    /**
     * @generated from enum value: NONE = 1;
     */
    NONE = 1,
    /**
     * @generated from enum value: VERIFY = 2;
     */
    VERIFY = 2
}
/**
 * @generated from enum google.protobuf.FeatureSet.MessageEncoding
 */
export declare enum FeatureSet_MessageEncoding {
    /**
     * @generated from enum value: MESSAGE_ENCODING_UNKNOWN = 0;
     */
    MESSAGE_ENCODING_UNKNOWN = 0,
    /**
     * @generated from enum value: LENGTH_PREFIXED = 1;
     */
    LENGTH_PREFIXED = 1,
    /**
     * @generated from enum value: DELIMITED = 2;
     */
    DELIMITED = 2
}
/**
 * @generated from enum google.protobuf.FeatureSet.JsonFormat
 */
export declare enum FeatureSet_JsonFormat {
    /**
     * @generated from enum value: JSON_FORMAT_UNKNOWN = 0;
     */
    JSON_FORMAT_UNKNOWN = 0,
    /**
     * @generated from enum value: ALLOW = 1;
     */
    ALLOW = 1,
    /**
     * @generated from enum value: LEGACY_BEST_EFFORT = 2;
     */
    LEGACY_BEST_EFFORT = 2
}
/**
 * A compiled specification for the defaults of a set of features.  These
 * messages are generated from FeatureSet extensions and can be used to seed
 * feature resolution. The resolution with this object becomes a simple search
 * for the closest matching edition, followed by proto merges.
 *
 * @generated from message google.protobuf.FeatureSetDefaults
 */
export declare class FeatureSetDefaults extends Message<FeatureSetDefaults> {
    /**
     * @generated from field: repeated google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault defaults = 1;
     */
    defaults: FeatureSetDefaults_FeatureSetEditionDefault[];
    /**
     * The minimum supported edition (inclusive) when this was constructed.
     * Editions before this will not have defaults.
     *
     * @generated from field: optional google.protobuf.Edition minimum_edition = 4;
     */
    minimumEdition?: Edition;
    /**
     * The maximum known edition (inclusive) when this was constructed. Editions
     * after this will not have reliable defaults.
     *
     * @generated from field: optional google.protobuf.Edition maximum_edition = 5;
     */
    maximumEdition?: Edition;
    constructor(data?: PartialMessage<FeatureSetDefaults>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.FeatureSetDefaults";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeatureSetDefaults;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeatureSetDefaults;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeatureSetDefaults;
    static equals(a: FeatureSetDefaults | PlainMessage<FeatureSetDefaults> | undefined, b: FeatureSetDefaults | PlainMessage<FeatureSetDefaults> | undefined): boolean;
}
/**
 * A map from every known edition with a unique set of defaults to its
 * defaults. Not all editions may be contained here.  For a given edition,
 * the defaults at the closest matching edition ordered at or before it should
 * be used.  This field must be in strict ascending order by edition.
 *
 * @generated from message google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
 */
export declare class FeatureSetDefaults_FeatureSetEditionDefault extends Message<FeatureSetDefaults_FeatureSetEditionDefault> {
    /**
     * @generated from field: optional google.protobuf.Edition edition = 3;
     */
    edition?: Edition;
    /**
     * @generated from field: optional google.protobuf.FeatureSet features = 2;
     */
    features?: FeatureSet;
    constructor(data?: PartialMessage<FeatureSetDefaults_FeatureSetEditionDefault>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeatureSetDefaults_FeatureSetEditionDefault;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeatureSetDefaults_FeatureSetEditionDefault;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeatureSetDefaults_FeatureSetEditionDefault;
    static equals(a: FeatureSetDefaults_FeatureSetEditionDefault | PlainMessage<FeatureSetDefaults_FeatureSetEditionDefault> | undefined, b: FeatureSetDefaults_FeatureSetEditionDefault | PlainMessage<FeatureSetDefaults_FeatureSetEditionDefault> | undefined): boolean;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 *
 * @generated from message google.protobuf.SourceCodeInfo
 */
export declare class SourceCodeInfo extends Message<SourceCodeInfo> {
    /**
     * A Location identifies a piece of source code in a .proto file which
     * corresponds to a particular definition.  This information is intended
     * to be useful to IDEs, code indexers, documentation generators, and similar
     * tools.
     *
     * For example, say we have a file like:
     *   message Foo {
     *     optional string foo = 1;
     *   }
     * Let's look at just the field definition:
     *   optional string foo = 1;
     *   ^       ^^     ^^  ^  ^^^
     *   a       bc     de  f  ghi
     * We have the following locations:
     *   span   path               represents
     *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
     *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
     *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
     *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
     *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
     *
     * Notes:
     * - A location may refer to a repeated field itself (i.e. not to any
     *   particular index within it).  This is used whenever a set of elements are
     *   logically enclosed in a single code segment.  For example, an entire
     *   extend block (possibly containing multiple extension definitions) will
     *   have an outer location whose path refers to the "extensions" repeated
     *   field without an index.
     * - Multiple locations may have the same path.  This happens when a single
     *   logical declaration is spread out across multiple places.  The most
     *   obvious example is the "extend" block again -- there may be multiple
     *   extend blocks in the same scope, each of which will have the same path.
     * - A location's span is not always a subset of its parent's span.  For
     *   example, the "extendee" of an extension declaration appears at the
     *   beginning of the "extend" block and is shared by all extensions within
     *   the block.
     * - Just because a location's span is a subset of some other location's span
     *   does not mean that it is a descendant.  For example, a "group" defines
     *   both a type and a field in a single declaration.  Thus, the locations
     *   corresponding to the type and field and their components will overlap.
     * - Code which tries to interpret locations should probably be designed to
     *   ignore those that it doesn't understand, as more types of locations could
     *   be recorded in the future.
     *
     * @generated from field: repeated google.protobuf.SourceCodeInfo.Location location = 1;
     */
    location: SourceCodeInfo_Location[];
    constructor(data?: PartialMessage<SourceCodeInfo>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.SourceCodeInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SourceCodeInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SourceCodeInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SourceCodeInfo;
    static equals(a: SourceCodeInfo | PlainMessage<SourceCodeInfo> | undefined, b: SourceCodeInfo | PlainMessage<SourceCodeInfo> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.SourceCodeInfo.Location
 */
export declare class SourceCodeInfo_Location extends Message<SourceCodeInfo_Location> {
    /**
     * Identifies which part of the FileDescriptorProto was defined at this
     * location.
     *
     * Each element is a field number or an index.  They form a path from
     * the root FileDescriptorProto to the place where the definition occurs.
     * For example, this path:
     *   [ 4, 3, 2, 7, 1 ]
     * refers to:
     *   file.message_type(3)  // 4, 3
     *       .field(7)         // 2, 7
     *       .name()           // 1
     * This is because FileDescriptorProto.message_type has field number 4:
     *   repeated DescriptorProto message_type = 4;
     * and DescriptorProto.field has field number 2:
     *   repeated FieldDescriptorProto field = 2;
     * and FieldDescriptorProto.name has field number 1:
     *   optional string name = 1;
     *
     * Thus, the above path gives the location of a field name.  If we removed
     * the last element:
     *   [ 4, 3, 2, 7 ]
     * this path refers to the whole field declaration (from the beginning
     * of the label to the terminating semicolon).
     *
     * @generated from field: repeated int32 path = 1 [packed = true];
     */
    path: number[];
    /**
     * Always has exactly three or four elements: start line, start column,
     * end line (optional, otherwise assumed same as start line), end column.
     * These are packed into a single field for efficiency.  Note that line
     * and column numbers are zero-based -- typically you will want to add
     * 1 to each before displaying to a user.
     *
     * @generated from field: repeated int32 span = 2 [packed = true];
     */
    span: number[];
    /**
     * If this SourceCodeInfo represents a complete declaration, these are any
     * comments appearing before and after the declaration which appear to be
     * attached to the declaration.
     *
     * A series of line comments appearing on consecutive lines, with no other
     * tokens appearing on those lines, will be treated as a single comment.
     *
     * leading_detached_comments will keep paragraphs of comments that appear
     * before (but not connected to) the current element. Each paragraph,
     * separated by empty lines, will be one comment element in the repeated
     * field.
     *
     * Only the comment content is provided; comment markers (e.g. //) are
     * stripped out.  For block comments, leading whitespace and an asterisk
     * will be stripped from the beginning of each line other than the first.
     * Newlines are included in the output.
     *
     * Examples:
     *
     *   optional int32 foo = 1;  // Comment attached to foo.
     *   // Comment attached to bar.
     *   optional int32 bar = 2;
     *
     *   optional string baz = 3;
     *   // Comment attached to baz.
     *   // Another line attached to baz.
     *
     *   // Comment attached to moo.
     *   //
     *   // Another line attached to moo.
     *   optional double moo = 4;
     *
     *   // Detached comment for corge. This is not leading or trailing comments
     *   // to moo or corge because there are blank lines separating it from
     *   // both.
     *
     *   // Detached comment for corge paragraph 2.
     *
     *   optional string corge = 5;
     *   /* Block comment attached
     *    * to corge.  Leading asterisks
     *    * will be removed. *\/
     *   /* Block comment attached to
     *    * grault. *\/
     *   optional int32 grault = 6;
     *
     *   // ignored detached comments.
     *
     * @generated from field: optional string leading_comments = 3;
     */
    leadingComments?: string;
    /**
     * @generated from field: optional string trailing_comments = 4;
     */
    trailingComments?: string;
    /**
     * @generated from field: repeated string leading_detached_comments = 6;
     */
    leadingDetachedComments: string[];
    constructor(data?: PartialMessage<SourceCodeInfo_Location>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.SourceCodeInfo.Location";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SourceCodeInfo_Location;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SourceCodeInfo_Location;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SourceCodeInfo_Location;
    static equals(a: SourceCodeInfo_Location | PlainMessage<SourceCodeInfo_Location> | undefined, b: SourceCodeInfo_Location | PlainMessage<SourceCodeInfo_Location> | undefined): boolean;
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 *
 * @generated from message google.protobuf.GeneratedCodeInfo
 */
export declare class GeneratedCodeInfo extends Message<GeneratedCodeInfo> {
    /**
     * An Annotation connects some span of text in generated code to an element
     * of its generating .proto file.
     *
     * @generated from field: repeated google.protobuf.GeneratedCodeInfo.Annotation annotation = 1;
     */
    annotation: GeneratedCodeInfo_Annotation[];
    constructor(data?: PartialMessage<GeneratedCodeInfo>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.GeneratedCodeInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneratedCodeInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneratedCodeInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneratedCodeInfo;
    static equals(a: GeneratedCodeInfo | PlainMessage<GeneratedCodeInfo> | undefined, b: GeneratedCodeInfo | PlainMessage<GeneratedCodeInfo> | undefined): boolean;
}
/**
 * @generated from message google.protobuf.GeneratedCodeInfo.Annotation
 */
export declare class GeneratedCodeInfo_Annotation extends Message<GeneratedCodeInfo_Annotation> {
    /**
     * Identifies the element in the original source .proto file. This field
     * is formatted the same as SourceCodeInfo.Location.path.
     *
     * @generated from field: repeated int32 path = 1 [packed = true];
     */
    path: number[];
    /**
     * Identifies the filesystem path to the original source .proto.
     *
     * @generated from field: optional string source_file = 2;
     */
    sourceFile?: string;
    /**
     * Identifies the starting offset in bytes in the generated code
     * that relates to the identified object.
     *
     * @generated from field: optional int32 begin = 3;
     */
    begin?: number;
    /**
     * Identifies the ending offset in bytes in the generated code that
     * relates to the identified object. The end offset should be one past
     * the last relevant byte (so the length of the text = end - begin).
     *
     * @generated from field: optional int32 end = 4;
     */
    end?: number;
    /**
     * @generated from field: optional google.protobuf.GeneratedCodeInfo.Annotation.Semantic semantic = 5;
     */
    semantic?: GeneratedCodeInfo_Annotation_Semantic;
    constructor(data?: PartialMessage<GeneratedCodeInfo_Annotation>);
    static readonly runtime: typeof proto2;
    static readonly typeName = "google.protobuf.GeneratedCodeInfo.Annotation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeneratedCodeInfo_Annotation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeneratedCodeInfo_Annotation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeneratedCodeInfo_Annotation;
    static equals(a: GeneratedCodeInfo_Annotation | PlainMessage<GeneratedCodeInfo_Annotation> | undefined, b: GeneratedCodeInfo_Annotation | PlainMessage<GeneratedCodeInfo_Annotation> | undefined): boolean;
}
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 *
 * @generated from enum google.protobuf.GeneratedCodeInfo.Annotation.Semantic
 */
export declare enum GeneratedCodeInfo_Annotation_Semantic {
    /**
     * There is no effect or the effect is indescribable.
     *
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * The element is set or otherwise mutated.
     *
     * @generated from enum value: SET = 1;
     */
    SET = 1,
    /**
     * An alias to the element is returned.
     *
     * @generated from enum value: ALIAS = 2;
     */
    ALIAS = 2
}
