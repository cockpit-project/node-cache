"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeaheadSelect = exports.TypeaheadSelectBase = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const times_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/times-icon'));
const defaultNoOptionsFoundMessage = (filter) => `No results found for "${filter}"`;
const defaultCreateOptionMessage = (newValue) => `Create "${newValue}"`;
const defaultFilterFunction = (filterValue, options) => options.filter((o) => String(o.content).toLowerCase().includes(filterValue.toLowerCase()));
const TypeaheadSelectBase = (_a) => {
    var { innerRef, selectOptions, onSelect, onToggle, onInputChange, filterFunction = defaultFilterFunction, onClearSelection, placeholder = 'Select an option', noOptionsAvailableMessage = 'No options are available', noOptionsFoundMessage = defaultNoOptionsFoundMessage, isCreatable = false, isCreateOptionOnTop = false, createOptionMessage = defaultCreateOptionMessage, isDisabled, toggleWidth, toggleProps } = _a, props = tslib_1.__rest(_a, ["innerRef", "selectOptions", "onSelect", "onToggle", "onInputChange", "filterFunction", "onClearSelection", "placeholder", "noOptionsAvailableMessage", "noOptionsFoundMessage", "isCreatable", "isCreateOptionOnTop", "createOptionMessage", "isDisabled", "toggleWidth", "toggleProps"]);
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const [filterValue, setFilterValue] = react_1.default.useState('');
    const [isFiltering, setIsFiltering] = react_1.default.useState(false);
    const [focusedItemIndex, setFocusedItemIndex] = react_1.default.useState(null);
    const [activeItemId, setActiveItemId] = react_1.default.useState(null);
    const textInputRef = react_1.default.useRef();
    const NO_RESULTS = 'no results';
    const selected = react_1.default.useMemo(() => selectOptions === null || selectOptions === void 0 ? void 0 : selectOptions.find((option) => option.value === props.selected || option.isSelected), [props.selected, selectOptions]);
    const filteredSelections = react_1.default.useMemo(() => {
        let newSelectOptions = selectOptions;
        // Filter menu items based on the text input value when one exists
        if (isFiltering && filterValue) {
            newSelectOptions = filterFunction(filterValue, selectOptions);
            if (isCreatable &&
                filterValue.trim() &&
                !newSelectOptions.find((o) => String(o.content).toLowerCase() === filterValue.toLowerCase())) {
                const createOption = {
                    content: typeof createOptionMessage === 'string' ? createOptionMessage : createOptionMessage(filterValue),
                    value: filterValue
                };
                newSelectOptions = isCreateOptionOnTop
                    ? [createOption, ...newSelectOptions]
                    : [...newSelectOptions, createOption];
            }
            // When no options are found after filtering, display 'No results found'
            if (!newSelectOptions.length) {
                newSelectOptions = [
                    {
                        isAriaDisabled: true,
                        content: typeof noOptionsFoundMessage === 'string' ? noOptionsFoundMessage : noOptionsFoundMessage(filterValue),
                        value: NO_RESULTS
                    }
                ];
            }
        }
        // When no options are  available,  display 'No options available'
        if (!newSelectOptions.length) {
            newSelectOptions = [
                {
                    isAriaDisabled: true,
                    content: noOptionsAvailableMessage,
                    value: NO_RESULTS
                }
            ];
        }
        return newSelectOptions;
    }, [
        isFiltering,
        filterValue,
        filterFunction,
        selectOptions,
        noOptionsFoundMessage,
        isCreatable,
        isCreateOptionOnTop,
        createOptionMessage,
        noOptionsAvailableMessage
    ]);
    react_1.default.useEffect(() => {
        if (isFiltering) {
            openMenu();
        }
        // Don't update on openMenu changes
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFiltering]);
    const setActiveAndFocusedItem = (itemIndex) => {
        setFocusedItemIndex(itemIndex);
        const focusedItem = selectOptions[itemIndex];
        setActiveItemId(String(focusedItem.value));
    };
    const resetActiveAndFocusedItem = () => {
        setFocusedItemIndex(null);
        setActiveItemId(null);
    };
    const openMenu = () => {
        if (!isOpen) {
            onToggle && onToggle(true);
            setIsOpen(true);
            setTimeout(() => {
                var _a;
                (_a = textInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }, 100);
        }
    };
    const closeMenu = () => {
        var _a;
        onToggle && onToggle(false);
        setIsOpen(false);
        resetActiveAndFocusedItem();
        setIsFiltering(false);
        setFilterValue(String((_a = selected === null || selected === void 0 ? void 0 : selected.content) !== null && _a !== void 0 ? _a : ''));
    };
    const onInputClick = () => {
        if (!isOpen) {
            openMenu();
        }
        else if (isFiltering) {
            closeMenu();
        }
    };
    const selectOption = (_event, option) => {
        onSelect && onSelect(_event, option.value);
        closeMenu();
    };
    const _onSelect = (_event, value) => {
        if (value && value !== NO_RESULTS) {
            const optionToSelect = selectOptions.find((option) => option.value === value);
            if (optionToSelect) {
                selectOption(_event, optionToSelect);
            }
            else if (isCreatable) {
                selectOption(_event, { value, content: value });
            }
        }
    };
    const onTextInputChange = (_event, value) => {
        setIsFiltering(true);
        setFilterValue(value || '');
        onInputChange && onInputChange(value);
        resetActiveAndFocusedItem();
    };
    const handleMenuArrowKeys = (key) => {
        let indexToFocus = 0;
        openMenu();
        if (filteredSelections.every((option) => option.isDisabled)) {
            return;
        }
        if (key === 'ArrowUp') {
            // When no index is set or at the first index, focus to the last, otherwise decrement focus index
            if (focusedItemIndex === null || focusedItemIndex === 0) {
                indexToFocus = filteredSelections.length - 1;
            }
            else {
                indexToFocus = focusedItemIndex - 1;
            }
            // Skip disabled options
            while (filteredSelections[indexToFocus].isDisabled) {
                indexToFocus--;
                if (indexToFocus === -1) {
                    indexToFocus = filteredSelections.length - 1;
                }
            }
        }
        if (key === 'ArrowDown') {
            // When no index is set or at the last index, focus to the first, otherwise increment focus index
            if (focusedItemIndex === null || focusedItemIndex === filteredSelections.length - 1) {
                indexToFocus = 0;
            }
            else {
                indexToFocus = focusedItemIndex + 1;
            }
            // Skip disabled options
            while (filteredSelections[indexToFocus].isDisabled) {
                indexToFocus++;
                if (indexToFocus === filteredSelections.length) {
                    indexToFocus = 0;
                }
            }
        }
        setActiveAndFocusedItem(indexToFocus);
    };
    const onInputKeyDown = (event) => {
        const focusedItem = focusedItemIndex !== null ? filteredSelections[focusedItemIndex] : null;
        switch (event.key) {
            case 'Enter':
                if (isOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.isAriaDisabled) {
                    selectOption(event, focusedItem);
                }
                openMenu();
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
        if (!isOpen) {
            openMenu();
        }
        else {
            closeMenu();
        }
        (_a = textInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const onClearButtonClick = () => {
        var _a;
        if (selected && onSelect) {
            onSelect(undefined, selected.value);
        }
        setFilterValue('');
        onInputChange && onInputChange('');
        setIsFiltering(false);
        resetActiveAndFocusedItem();
        (_a = textInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        onClearSelection && onClearSelection();
    };
    const toggle = (toggleRef) => {
        var _a;
        return (react_1.default.createElement(react_core_1.MenuToggle, Object.assign({ ref: toggleRef, variant: "typeahead", "aria-label": "Typeahead menu toggle", onClick: onToggleClick, isExpanded: isOpen, isDisabled: isDisabled, isFullWidth: true, style: {
                width: toggleWidth
            } }, toggleProps),
            react_1.default.createElement(react_core_1.TextInputGroup, { isPlain: true },
                react_1.default.createElement(react_core_1.TextInputGroupMain, Object.assign({ value: isFiltering ? filterValue : ((_a = selected === null || selected === void 0 ? void 0 : selected.content) !== null && _a !== void 0 ? _a : ''), onClick: onInputClick, onChange: onTextInputChange, onKeyDown: onInputKeyDown, autoComplete: "off", innerRef: textInputRef, placeholder: placeholder }, (activeItemId && { 'aria-activedescendant': activeItemId }), { role: "combobox", isExpanded: isOpen, "aria-controls": "select-typeahead-listbox" })),
                react_1.default.createElement(react_core_1.TextInputGroupUtilities, Object.assign({}, (!(isFiltering && filterValue) && !selected ? { style: { display: 'none' } } : {})),
                    react_1.default.createElement(react_core_1.Button, { variant: "plain", onClick: onClearButtonClick, "aria-label": "Clear input value" },
                        react_1.default.createElement(times_icon_1.default, { "aria-hidden": true }))))));
    };
    return (react_1.default.createElement(react_core_1.Select, Object.assign({ isOpen: isOpen, selected: selected, onSelect: _onSelect, onOpenChange: (isOpen) => !isOpen && closeMenu(), toggle: toggle, shouldFocusFirstItemOnOpen: false, ref: innerRef }, props),
        react_1.default.createElement(react_core_1.SelectList, null, filteredSelections.map((option, index) => {
            const { content, value } = option, props = tslib_1.__rest(option, ["content", "value"]);
            return (react_1.default.createElement(react_core_1.SelectOption, Object.assign({ key: value, value: value, isFocused: focusedItemIndex === index }, props), content));
        }))));
};
exports.TypeaheadSelectBase = TypeaheadSelectBase;
exports.TypeaheadSelectBase.displayName = 'TypeaheadSelectBase';
exports.TypeaheadSelect = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(exports.TypeaheadSelectBase, Object.assign({}, props, { innerRef: ref }))));
exports.TypeaheadSelect.displayName = 'TypeaheadSelect';
//# sourceMappingURL=TypeaheadSelect.js.map