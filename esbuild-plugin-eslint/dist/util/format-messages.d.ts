import type { ESLint } from "eslint";
import type { PartialMessage } from "esbuild";
declare const _default: (lintResults: ESLint.LintResult[]) => {
    warnings: PartialMessage[];
    errors: PartialMessage[];
};
export default _default;
