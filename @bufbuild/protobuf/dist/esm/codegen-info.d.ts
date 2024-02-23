import { reifyWkt } from "./private/reify-wkt.js";
import type { DescEnum, DescEnumValue, DescField, DescExtension, DescMessage, DescMethod, DescOneof, DescService } from "./descriptor-set.js";
import { LongType, ScalarType } from "./field.js";
interface CodegenInfo {
    /**
     * Name of the runtime library NPM package.
     */
    readonly packageName: string;
    readonly localName: (desc: DescEnum | DescEnumValue | DescMessage | DescExtension | DescOneof | DescField | DescService | DescMethod) => string;
    readonly symbols: Record<RuntimeSymbolName, RuntimeSymbolInfo>;
    readonly getUnwrappedFieldType: (field: DescField | DescExtension) => ScalarType | undefined;
    readonly wktSourceFiles: readonly string[];
    readonly scalarDefaultValue: (type: ScalarType, longType: LongType) => any;
    /**
     * @deprecated please use reifyWkt from @bufbuild/protoplugin/ecmascript instead
     */
    readonly reifyWkt: typeof reifyWkt;
    readonly safeIdentifier: (name: string) => string;
    readonly safeObjectProperty: (name: string) => string;
}
type RuntimeSymbolName = "proto2" | "proto3" | "Message" | "PartialMessage" | "PlainMessage" | "FieldList" | "MessageType" | "Extension" | "BinaryReadOptions" | "BinaryWriteOptions" | "JsonReadOptions" | "JsonWriteOptions" | "JsonValue" | "JsonObject" | "protoDouble" | "protoInt64" | "ScalarType" | "LongType" | "MethodKind" | "MethodIdempotency" | "IMessageTypeRegistry";
type RuntimeSymbolInfo = {
    typeOnly: boolean;
    publicImportPath: string;
    privateImportPath: string;
};
export declare const codegenInfo: CodegenInfo;
export {};
