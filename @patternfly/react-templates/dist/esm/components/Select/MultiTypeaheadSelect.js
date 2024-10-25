import { __rest } from "tslib";
import React from 'react';
import { Select, SelectOption, SelectList, MenuToggle, TextInputGroup, TextInputGroupMain, TextInputGroupUtilities, Button, ChipGroup, Chip } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
export const MultiTypeaheadSelectBase = (_a) => {
    var _b;
    var { innerRef, initialOptions, onSelectionChange, onToggle, onInputChange, placeholder = 'Select an option', noOptionsFoundMessage = (filter) => `No results found for "${filter}"`, isDisabled, toggleWidth, toggleProps } = _a, props = __rest(_a, ["innerRef", "initialOptions", "onSelectionChange", "onToggle", "onInputChange", "placeholder", "noOptionsFoundMessage", "isDisabled", "toggleWidth", "toggleProps"]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(((_b = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.filter((o) => o.selected)) !== null && _b !== void 0 ? _b : []).map((o) => o.value));
    const [inputValue, setInputValue] = React.useState();
    const [selectOptions, setSelectOptions] = React.useState(initialOptions);
    const [focusedItemIndex, setFocusedItemIndex] = React.useState(null);
    const [activeItemId, setActiveItemId] = React.useState(null);
    const textInputRef = React.useRef();
    const NO_RESULTS = 'no results';
    const openMenu = () => {
        onToggle && onToggle(true);
        setIsOpen(true);
    };
    React.useEffect(() => {
        let newSelectOptions = initialOptions;
        // Filter menu items based on the text input value when one exists
        if (inputValue) {
            newSelectOptions = initialOptions.filter((option) => String(option.content).toLowerCase().includes(inputValue.toLowerCase()));
            // When no options are found after filtering, display 'No results found'
            if (!newSelectOptions.length) {
                newSelectOptions = [
                    {
                        isAriaDisabled: true,
                        content: typeof noOptionsFoundMessage === 'string' ? noOptionsFoundMessage : noOptionsFoundMessage(inputValue),
                        value: NO_RESULTS
                    }
                ];
            }
            // Open the menu when the input value changes and the new value is not empty
            openMenu();
        }
        setSelectOptions(newSelectOptions);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue, initialOptions]);
    React.useEffect(() => { var _a; return setSelected(((_a = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.filter((o) => o.selected)) !== null && _a !== void 0 ? _a : []).map((o) => o.value)); }, [initialOptions]);
    const setActiveAndFocusedItem = (itemIndex) => {
        setFocusedItemIndex(itemIndex);
        const focusedItem = selectOptions[itemIndex];
        setActiveItemId(focusedItem.value);
    };
    const resetActiveAndFocusedItem = () => {
        setFocusedItemIndex(null);
        setActiveItemId(null);
    };
    const closeMenu = () => {
        onToggle && onToggle(false);
        setIsOpen(false);
        resetActiveAndFocusedItem();
        setInputValue('');
    };
    const onInputClick = () => {
        if (!isOpen) {
            openMenu();
        }
        else if (!inputValue) {
            closeMenu();
        }
    };
    const selectOption = (_event, option) => {
        const selections = selected.includes(option) ? selected.filter((o) => option !== o) : [...selected, option];
        onSelectionChange && onSelectionChange(_event, selections);
        setSelected(selections);
    };
    const clearOption = (_event, option) => {
        const selections = selected.filter((o) => option !== o);
        onSelectionChange && onSelectionChange(_event, selections);
        setSelected(selections);
    };
    const _onSelect = (_event, value) => {
        if (value && value !== NO_RESULTS) {
            selectOption(_event, value);
        }
    };
    const onTextInputChange = (_event, value) => {
        setInputValue(value);
        onInputChange && onInputChange(value);
        resetActiveAndFocusedItem();
    };
    const handleMenuArrowKeys = (key) => {
        let indexToFocus = 0;
        if (!isOpen) {
            openMenu();
        }
        if (selectOptions.every((option) => option.isDisabled)) {
            return;
        }
        if (key === 'ArrowUp') {
            // When no index is set or at the first index, focus to the last, otherwise decrement focus index
            if (focusedItemIndex === null || focusedItemIndex === 0) {
                indexToFocus = selectOptions.length - 1;
            }
            else {
                indexToFocus = focusedItemIndex - 1;
            }
            // Skip disabled options
            while (selectOptions[indexToFocus].isDisabled) {
                indexToFocus--;
                if (indexToFocus === -1) {
                    indexToFocus = selectOptions.length - 1;
                }
            }
        }
        if (key === 'ArrowDown') {
            // When no index is set or at the last index, focus to the first, otherwise increment focus index
            if (focusedItemIndex === null || focusedItemIndex === selectOptions.length - 1) {
                indexToFocus = 0;
            }
            else {
                indexToFocus = focusedItemIndex + 1;
            }
            // Skip disabled options
            while (selectOptions[indexToFocus].isDisabled) {
                indexToFocus++;
                if (indexToFocus === selectOptions.length) {
                    indexToFocus = 0;
                }
            }
        }
        setActiveAndFocusedItem(indexToFocus);
    };
    const onInputKeyDown = (event) => {
        const focusedItem = focusedItemIndex !== null ? selectOptions[focusedItemIndex] : null;
        switch (event.key) {
            case 'Enter':
                if (isOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.isAriaDisabled) {
                    selectOption(event, focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.value);
                }
                if (!isOpen) {
                    onToggle && onToggle(true);
                    setIsOpen(true);
                }
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                event.preventDefault();
                handleMenuArrowKeys(event.key);
                break;
        }
    };
    const onToggleClick = () => {
        var _a;
        onToggle && onToggle(!isOpen);
        setIsOpen(!isOpen);
        (_a = textInputRef === null || textInputRef === void 0 ? void 0 : textInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const onClearButtonClick = (ev) => {
        var _a;
        setSelected([]);
        onInputChange && onInputChange('');
        resetActiveAndFocusedItem();
        (_a = textInputRef === null || textInputRef === void 0 ? void 0 : textInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        onSelectionChange && onSelectionChange(ev, []);
    };
    const toggle = (toggleRef) => (React.createElement(MenuToggle, Object.assign({ ref: toggleRef, variant: "typeahead", "aria-label": "Multi select Typeahead menu toggle", onClick: onToggleClick, isExpanded: isOpen, isDisabled: isDisabled, isFullWidth: true, style: {
            width: toggleWidth
        } }, toggleProps),
        React.createElement(TextInputGroup, { isPlain: true },
            React.createElement(TextInputGroupMain, Object.assign({ value: inputValue, onClick: onInputClick, onChange: onTextInputChange, onKeyDown: onInputKeyDown, autoComplete: "off", innerRef: textInputRef, placeholder: placeholder }, (activeItemId && { 'aria-activedescendant': activeItemId }), { role: "combobox", isExpanded: isOpen, "aria-controls": "select-typeahead-listbox" }),
                React.createElement(ChipGroup, { "aria-label": "Current selections" }, selected.map((selection, index) => {
                    var _a;
                    return (React.createElement(Chip, { key: index, "datatest-id": `${selection}-chip`, onClick: (ev) => {
                            ev.stopPropagation();
                            clearOption(ev, selection);
                        } }, (_a = initialOptions.find((o) => o.value === selection)) === null || _a === void 0 ? void 0 : _a.content));
                }))),
            React.createElement(TextInputGroupUtilities, Object.assign({}, (selected.length === 0 ? { style: { display: 'none' } } : {})),
                React.createElement(Button, { variant: "plain", onClick: onClearButtonClick, "aria-label": "Clear input value" },
                    React.createElement(TimesIcon, { "aria-hidden": true }))))));
    return (React.createElement(Select, Object.assign({ isOpen: isOpen, selected: selected, onSelect: _onSelect, onOpenChange: (isOpen) => {
            !isOpen && closeMenu();
        }, toggle: toggle, shouldFocusFirstItemOnOpen: false, ref: innerRef }, props),
        React.createElement(SelectList, null, selectOptions.map((option, index) => {
            const { content, value } = option, props = __rest(option, ["content", "value"]);
            return (React.createElement(SelectOption, Object.assign({ key: value, value: value, isFocused: focusedItemIndex === index }, props), content));
        }))));
};
MultiTypeaheadSelectBase.displayName = 'MultiTypeaheadSelectBase';
export const MultiTypeaheadSelect = React.forwardRef((props, ref) => (React.createElement(MultiTypeaheadSelectBase, Object.assign({}, props, { innerRef: ref }))));
MultiTypeaheadSelect.displayName = 'MultiTypeaheadSelect';
//# sourceMappingURL=MultiTypeaheadSelect.js.map