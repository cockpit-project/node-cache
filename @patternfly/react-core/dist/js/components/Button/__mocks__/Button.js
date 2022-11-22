"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonVariant = exports.Button = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Button = (_a) => {
    var { children, variant, isInline, onClick, iconPosition, icon } = _a, props = tslib_1.__rest(_a, ["children", "variant", "isInline", "onClick", "iconPosition", "icon"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", Object.assign({ onClick: onClick }, props), children),
        react_1.default.createElement("p", null, `variant: ${variant}`),
        react_1.default.createElement("p", { id: "labelling-id" }, "Test label"),
        react_1.default.createElement("p", null, `isInline: ${isInline}`),
        react_1.default.createElement("p", null, `iconPosition: ${iconPosition}`),
        react_1.default.createElement("div", { "data-testid": "icon" }, icon)));
};
exports.Button = Button;
exports.ButtonVariant = { plain: 'plain', link: 'link' };
//# sourceMappingURL=Button.js.map