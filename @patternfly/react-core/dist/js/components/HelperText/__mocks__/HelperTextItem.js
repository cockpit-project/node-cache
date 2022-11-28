"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperTextItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const HelperTextItem = ({ children, variant }) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("div", { "data-testid": "helper-text-item-children-container" }, children),
    react_1.default.createElement("p", null, `variant: ${variant}`)));
exports.HelperTextItem = HelperTextItem;
//# sourceMappingURL=HelperTextItem.js.map