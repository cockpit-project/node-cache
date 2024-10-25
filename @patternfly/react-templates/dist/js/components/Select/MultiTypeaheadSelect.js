"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTypeaheadSelect = exports.MultiTypeaheadSelectBase = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const times_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/times-icon'));
const MultiTypeaheadSelectBase = (_a) => {
    var _b;
    var { innerRef, initialOptions, onSelectionChange, onToggle, onInputChange, placeholder = 'Select an option', noOptionsFoundMessage = (filter) => `No results found for "${filter}"`, isDisabled, toggleWidth, toggleProps } = _a, props = tslib_1.__rest(_a, ["innerRef", "initialOptions", "onSelectionChange", "onToggle", "onInputChange", "placeholder", "noOptionsFoundMessage", "isDisabled", "toggleWidth", "toggleProps"]);
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const [selected, setSelected] = react_1.default.useState(((_b = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.filter((o) => o.selected)) !== null && _b !== void 0 ? _b : []).map((o) => o.value));
    const [inputValue, setInputValue] = react_1.default.useState();
    const [selectOptions, setSelectOptions] = react_1.default.useState(initialOptions);
    const [focusedItemIndex, setFocusedItemIndex] = react_1.default.useState(null);
    const [activeItemId, setActiveItemId] = react_1.default.useState(null);
    const textInputRef = react_1.default.useRef();
    const NO_RESULTS = 'no results';
    const openMenu = () => {
        onToggle && onToggle(true);
        setIsOpen(true);
    };
    react_1.default.useEffect(() => {
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
    react_1.default.useEffect(() => { var _a; return setSelected(((_a = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.filter((o) => o.selected)) !== null && _a !== void 0 ? _a : []).map((o) => o.value)); }, [initialOptions]);
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
    const toggle = (toggleRef) => (react_1.default.createElement(react_core_1.MenuToggle, Object.assign({ ref: toggleRef, variant: "typeahead", "aria-label": "Multi select Typeahead menu toggle", onClick: onToggleClick, isExpanded: isOpen, isDisabled: isDisabled, isFullWidth: true, style: {
            width: toggleWidth
        } }, toggleProps),
        react_1.default.createElement(react_core_1.TextInputGroup, { isPlain: true },
            react_1.default.createElement(react_core_1.TextInputGroupMain, Object.assign({ value: inputValue, onClick: onInputClick, onChange: onTextInputChange, onKeyDown: onInputKeyDown, autoComplete: "off", innerRef: textInputRef, placeholder: placeholder }, (activeItemId && { 'aria-activedescendant': activeItemId }), { role: "combobox", isExpanded: isOpen, "aria-controls": "select-typeahead-listbox" }),
                react_1.default.createElement(react_core_1.ChipGroup, { "aria-label": "Current selections" }, selected.map((selection, index) => {
                    var _a;
                    return (react_1.default.createElement(react_core_1.Chip, { key: index, "datatest-id": `${selection}-chip`, onClick: (ev) => {
                            ev.stopPropagation();
                            clearOption(ev, selection);
                        } }, (_a = initialOptions.find((o) => o.value === selection)) === null || _a === void 0 ? void 0 : _a.content));
                }))),
            react_1.default.createElement(react_core_1.TextInputGroupUtilities, Object.assign({}, (selected.length === 0 ? { style: { display: 'none' } } : {})),
                react_1.default.createElement(react_core_1.Button, { variant: "plain", onClick: onClearButtonClick, "aria-label": "Clear input value" },
                    react_1.default.createElement(times_icon_1.default, { "aria-hidden": true }))))));
    return (react_1.default.createElement(react_core_1.Select, Object.assign({ isOpen: isOpen, selected: selected, onSelect: _onSelect, onOpenChange: (isOpen) => {
            !isOpen && closeMenu();
        }, toggle: toggle, shouldFocusFirstItemOnOpen: false, ref: innerRef }, props),
        react_1.default.createElement(react_core_1.SelectList, null, selectOptions.map((option, index) => {
            const { content, value } = option, props = tslib_1.__rest(option, ["content", "value"]);
            return (react_1.default.createElement(react_core_1.SelectOption, Object.assign({ key: value, value: value, isFocused: focusedItemIndex === index }, props), content));
        }))));
};
exports.MultiTypeaheadSelectBase = MultiTypeaheadSelectBase;
exports.MultiTypeaheadSelectBase.displayName = 'MultiTypeaheadSelectBase';
exports.MultiTypeaheadSelect = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(exports.MultiTypeaheadSelectBase, Object.assign({}, props, { innerRef: ref }))));
exports.MultiTypeaheadSelect.displayName = 'MultiTypeaheadSelect';
//# sourceMappingURL=MultiTypeaheadSelect.js.map