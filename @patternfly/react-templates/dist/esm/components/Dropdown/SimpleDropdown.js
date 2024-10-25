import { __rest } from "tslib";
import React from 'react';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core/dist/esm/components/Dropdown';
import { MenuToggle } from '@patternfly/react-core/dist/esm/components/MenuToggle';
import { Divider } from '@patternfly/react-core/dist/esm/components/Divider';
const SimpleDropdownBase = (_a) => {
    var { innerRef, initialItems, onSelect: onSelectProp, onToggle: onToggleProp, isDisabled, toggleAriaLabel, toggleContent, isToggleFullWidth, toggleVariant = 'default', toggleWidth, toggleProps, shouldFocusToggleOnSelect } = _a, props = __rest(_a, ["innerRef", "initialItems", "onSelect", "onToggle", "isDisabled", "toggleAriaLabel", "toggleContent", "isToggleFullWidth", "toggleVariant", "toggleWidth", "toggleProps", "shouldFocusToggleOnSelect"]);
    const [isOpen, setIsOpen] = React.useState(false);
    const onSelect = (event, value) => {
        onSelectProp && onSelectProp(event, value);
        onToggleProp && onToggleProp(false);
        setIsOpen(false);
    };
    const onToggle = () => {
        onToggleProp && onToggleProp(!isOpen);
        setIsOpen(!isOpen);
    };
    const dropdownToggle = (toggleRef) => (React.createElement(MenuToggle, Object.assign({ ref: toggleRef, onClick: onToggle, isExpanded: isOpen, isDisabled: isDisabled, variant: toggleVariant, "aria-label": toggleAriaLabel, isFullWidth: isToggleFullWidth, style: {
            width: toggleWidth
        } }, toggleProps), toggleContent));
    const dropdownSimpleItems = initialItems === null || initialItems === void 0 ? void 0 : initialItems.map((item) => {
        const { content, onClick, to, value, isDivider } = item, itemProps = __rest(item, ["content", "onClick", "to", "value", "isDivider"]);
        return isDivider ? (React.createElement(Divider, { component: "li", key: value })) : (React.createElement(DropdownItem, Object.assign({ onClick: onClick, to: to, key: value, value: value }, itemProps), content));
    });
    return (React.createElement(Dropdown, Object.assign({ toggle: dropdownToggle, isOpen: isOpen, onSelect: onSelect, shouldFocusToggleOnSelect: shouldFocusToggleOnSelect, onOpenChange: (isOpen) => {
            onToggleProp && onToggleProp(isOpen);
            setIsOpen(isOpen);
        }, ref: innerRef }, props),
        React.createElement(DropdownList, null, dropdownSimpleItems)));
};
export const SimpleDropdown = React.forwardRef((props, ref) => (React.createElement(SimpleDropdownBase, Object.assign({}, props, { innerRef: ref }))));
SimpleDropdown.displayName = 'SimpleDropdown';
//# sourceMappingURL=SimpleDropdown.js.map