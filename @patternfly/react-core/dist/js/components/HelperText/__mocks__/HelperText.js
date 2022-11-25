"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperText = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const HelperText = ({ children, isLiveRegion }) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("div", { "data-testid": "helper-text-children-container" }, children),
    react_1.default.createElement("p", null, `isLiveRegion: ${isLiveRegion}`)));
exports.HelperText = HelperText;
//# sourceMappingURL=HelperText.js.map