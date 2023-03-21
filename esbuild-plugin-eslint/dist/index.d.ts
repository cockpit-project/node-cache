import type { PluginOptions } from "./types/plugin-options.js";
import type { Plugin } from "esbuild";
declare const _default: ({ filter, throwOnError, throwOnWarning, ...eslintOptions }?: PluginOptions) => Plugin;
export default _default;
