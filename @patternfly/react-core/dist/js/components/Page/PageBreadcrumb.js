"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBreadcrumb = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const page_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Page/page"));
const util_1 = require("../../helpers/util");
const Page_1 = require("../Page/Page");
const PageBreadcrumb = (_a) => {
    var { className = '', children, isWidthLimited, sticky, stickyOnBreakpoint, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false } = _a, props = tslib_1.__rest(_a, ["className", "children", "isWidthLimited", "sticky", "stickyOnBreakpoint", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll"]);
    const { height, getVerticalBreakpoint } = React.useContext(Page_1.PageContext);
    return (React.createElement("section", Object.assign({ className: react_styles_1.css(page_1.default.pageMainBreadcrumb, util_1.formatBreakpointMods(stickyOnBreakpoint, page_1.default, 'sticky-', getVerticalBreakpoint(height), true), isWidthLimited && page_1.default.modifiers.limitWidth, sticky === 'top' && page_1.default.modifiers.stickyTop, sticky === 'bottom' && page_1.default.modifiers.stickyBottom, hasShadowTop && page_1.default.modifiers.shadowTop, hasShadowBottom && page_1.default.modifiers.shadowBottom, hasOverflowScroll && page_1.default.modifiers.overflowScroll, className) }, (hasOverflowScroll && { tabIndex: 0 }), props),
        isWidthLimited && React.createElement("div", { className: react_styles_1.css(page_1.default.pageMainBody) }, children),
        !isWidthLimited && children));
};
exports.PageBreadcrumb = PageBreadcrumb;
exports.PageBreadcrumb.displayName = 'PageBreadcrumb';
//# sourceMappingURL=PageBreadcrumb.js.map