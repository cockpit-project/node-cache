import { __rest } from "tslib";
import React from 'react';
import { Badge, MenuToggle, Select, SelectList, SelectOption } from '@patternfly/react-core';
const CheckboxSelectBase = (_a) => {
    var { innerRef, initialOptions, isDisabled, onSelect: passedOnSelect, onToggle, toggleContent, toggleWidth = '200px', toggleProps } = _a, props = __rest(_a, ["innerRef", "initialOptions", "isDisabled", "onSelect", "onToggle", "toggleContent", "toggleWidth", "toggleProps"]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState([]);
    React.useEffect(() => {
        var _a;
        const selectedOptions = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.filter((option) => option.selected);
        setSelected((_a = selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.map((selectedOption) => String(selectedOption.value))) !== null && _a !== void 0 ? _a : []);
    }, [initialOptions]);
    const checkboxSelectOptions = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.map((option) => {
        const { content, value } = option, props = __rest(option, ["content", "value"]);
        const isSelected = selected.includes(`${value}`);
        return (React.createElement(SelectOption, Object.assign({ value: value, key: value, hasCheckbox: true, isSelected: isSelected }, props), content));
    });
    const onToggleClick = () => {
        onToggle && onToggle(!isOpen);
        setIsOpen(!isOpen);
    };
    const onSelect = (event, value) => {
        const valueString = `${value}`;
        if (selected.includes(valueString)) {
            setSelected((prevSelected) => prevSelected.filter((item) => item !== valueString));
        }
        else {
            setSelected((prevSelected) => [...prevSelected, valueString]);
        }
        passedOnSelect && passedOnSelect(event, value);
    };
    const defaultToggleContent = (React.createElement(React.Fragment, null,
        "Filter by status",
        selected.length > 0 && React.createElement(Badge, { isRead: true }, selected.length)));
    const toggle = (toggleRef) => (React.createElement(MenuToggle, Object.assign({ ref: toggleRef, onClick: onToggleClick, isExpanded: isOpen, isDisabled: isDisabled, style: {
            width: toggleWidth
        } }, toggleProps), toggleContent || defaultToggleContent));
    return (React.createElement(Select, Object.assign({ isOpen: isOpen, selected: selected, onSelect: onSelect, onOpenChange: (isOpen) => {
            onToggle && onToggle(isOpen);
            setIsOpen(isOpen);
        }, toggle: toggle, ref: innerRef, role: "menu" }, props),
        React.createElement(SelectList, null, checkboxSelectOptions)));
};
export const CheckboxSelect = React.forwardRef((props, ref) => (React.createElement(CheckboxSelectBase, Object.assign({}, props, { innerRef: ref }))));
//# sourceMappingURL=CheckboxSelect.js.map