import { __rest } from "tslib";
import React from 'react';
export const Button = (_a) => {
    var { children, variant, isInline, onClick, iconPosition, icon } = _a, props = __rest(_a, ["children", "variant", "isInline", "onClick", "iconPosition", "icon"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", Object.assign({ onClick: onClick }, props), children),
        React.createElement("p", null, `variant: ${variant}`),
        React.createElement("p", { id: "labelling-id" }, "Test label"),
        React.createElement("p", null, `isInline: ${isInline}`),
        React.createElement("p", null, `iconPosition: ${iconPosition}`),
        React.createElement("div", { "data-testid": "icon" }, icon)));
};
export const ButtonVariant = { plain: 'plain', link: 'link' };
//# sourceMappingURL=Button.js.map