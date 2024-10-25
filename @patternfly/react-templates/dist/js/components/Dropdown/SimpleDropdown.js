"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDropdown = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Dropdown_1 = require('@patternfly/react-core/dist/js/components/Dropdown');
const MenuToggle_1 = require('@patternfly/react-core/dist/js/components/MenuToggle');
const Divider_1 = require('@patternfly/react-core/dist/js/components/Divider');
const SimpleDropdownBase = (_a) => {
    var { innerRef, initialItems, onSelect: onSelectProp, onToggle: onToggleProp, isDisabled, toggleAriaLabel, toggleContent, isToggleFullWidth, toggleVariant = 'default', toggleWidth, toggleProps, shouldFocusToggleOnSelect } = _a, props = tslib_1.__rest(_a, ["innerRef", "initialItems", "onSelect", "onToggle", "isDisabled", "toggleAriaLabel", "toggleContent", "isToggleFullWidth", "toggleVariant", "toggleWidth", "toggleProps", "shouldFocusToggleOnSelect"]);
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const onSelect = (event, value) => {
        onSelectProp && onSelectProp(event, value);
        onToggleProp && onToggleProp(false);
        setIsOpen(false);
    };
    const onToggle = () => {
        onToggleProp && onToggleProp(!isOpen);
        setIsOpen(!isOpen);
    };
    const dropdownToggle = (toggleRef) => (react_1.default.createElement(MenuToggle_1.MenuToggle, Object.assign({ ref: toggleRef, onClick: onToggle, isExpanded: isOpen, isDisabled: isDisabled, variant: toggleVariant, "aria-label": toggleAriaLabel, isFullWidth: isToggleFullWidth, style: {
            width: toggleWidth
        } }, toggleProps), toggleContent));
    const dropdownSimpleItems = initialItems === null || initialItems === void 0 ? void 0 : initialItems.map((item) => {
        const { content, onClick, to, value, isDivider } = item, itemProps = tslib_1.__rest(item, ["content", "onClick", "to", "value", "isDivider"]);
        return isDivider ? (react_1.default.createElement(Divider_1.Divider, { component: "li", key: value })) : (react_1.default.createElement(Dropdown_1.DropdownItem, Object.assign({ onClick: onClick, to: to, key: value, value: value }, itemProps), content));
    });
    return (react_1.default.createElement(Dropdown_1.Dropdown, Object.assign({ toggle: dropdownToggle, isOpen: isOpen, onSelect: onSelect, shouldFocusToggleOnSelect: shouldFocusToggleOnSelect, onOpenChange: (isOpen) => {
            onToggleProp && onToggleProp(isOpen);
            setIsOpen(isOpen);
        }, ref: innerRef }, props),
        react_1.default.createElement(Dropdown_1.DropdownList, null, dropdownSimpleItems)));
};
exports.SimpleDropdown = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(SimpleDropdownBase, Object.assign({}, props, { innerRef: ref }))));
exports.SimpleDropdown.displayName = 'SimpleDropdown';
//# sourceMappingURL=SimpleDropdown.js.map