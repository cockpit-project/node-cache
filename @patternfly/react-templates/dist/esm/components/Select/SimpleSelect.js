import { __rest } from "tslib";
import React from 'react';
import { Select, SelectList, SelectOption } from '@patternfly/react-core/dist/esm/components/Select';
import { MenuToggle } from '@patternfly/react-core/dist/esm/components/MenuToggle';
const SimpleSelectBase = (_a) => {
    var { innerRef, initialOptions, isDisabled, onSelect, onToggle, toggleContent, toggleWidth = '200px', toggleProps, placeholder = 'Select a value' } = _a, props = __rest(_a, ["innerRef", "initialOptions", "isDisabled", "onSelect", "onToggle", "toggleContent", "toggleWidth", "toggleProps", "placeholder"]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState();
    React.useEffect(() => {
        const selectedOption = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.find((option) => option.selected);
        setSelected(selectedOption);
    }, [initialOptions]);
    const simpleSelectOptions = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.map((option) => {
        const { content, value } = option, props = __rest(option, ["content", "value"]);
        const isSelected = (selected === null || selected === void 0 ? void 0 : selected.value) === value;
        return (React.createElement(SelectOption, Object.assign({ value: value, key: value, isSelected: isSelected }, props), content));
    });
    const onToggleClick = () => {
        onToggle && onToggle(!isOpen);
        setIsOpen(!isOpen);
    };
    const _onSelect = (_event, value) => {
        onSelect && onSelect(_event, value);
        setSelected(initialOptions.find((o) => o.value === value));
        onToggle && onToggle(true);
        setIsOpen(false);
    };
    const toggle = (toggleRef) => (React.createElement(MenuToggle, Object.assign({ ref: toggleRef, onClick: onToggleClick, isExpanded: isOpen, isDisabled: isDisabled, style: {
            width: toggleWidth
        } }, toggleProps), toggleContent ? toggleContent : (selected === null || selected === void 0 ? void 0 : selected.content) || placeholder));
    return (React.createElement(Select, Object.assign({ isOpen: isOpen, selected: selected, onSelect: _onSelect, onOpenChange: (isOpen) => {
            onToggle && onToggle(isOpen);
            setIsOpen(isOpen);
        }, toggle: toggle, shouldFocusToggleOnSelect: true, ref: innerRef }, props),
        React.createElement(SelectList, null, simpleSelectOptions)));
};
export const SimpleSelect = React.forwardRef((props, ref) => (React.createElement(SimpleSelectBase, Object.assign({}, props, { innerRef: ref }))));
SimpleSelect.displayName = 'SimpleSelect';
//# sourceMappingURL=SimpleSelect.js.map