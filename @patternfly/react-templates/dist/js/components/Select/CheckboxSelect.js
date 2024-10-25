"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxSelect = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const CheckboxSelectBase = (_a) => {
    var { innerRef, initialOptions, isDisabled, onSelect: passedOnSelect, onToggle, toggleContent, toggleWidth = '200px', toggleProps } = _a, props = tslib_1.__rest(_a, ["innerRef", "initialOptions", "isDisabled", "onSelect", "onToggle", "toggleContent", "toggleWidth", "toggleProps"]);
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const [selected, setSelected] = react_1.default.useState([]);
    react_1.default.useEffect(() => {
        var _a;
        const selectedOptions = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.filter((option) => option.selected);
        setSelected((_a = selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.map((selectedOption) => String(selectedOption.value))) !== null && _a !== void 0 ? _a : []);
    }, [initialOptions]);
    const checkboxSelectOptions = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.map((option) => {
        const { content, value } = option, props = tslib_1.__rest(option, ["content", "value"]);
        const isSelected = selected.includes(`${value}`);
        return (react_1.default.createElement(react_core_1.SelectOption, Object.assign({ value: value, key: value, hasCheckbox: true, isSelected: isSelected }, props), content));
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
    const defaultToggleContent = (react_1.default.createElement(react_1.default.Fragment, null,
        "Filter by status",
        selected.length > 0 && react_1.default.createElement(react_core_1.Badge, { isRead: true }, selected.length)));
    const toggle = (toggleRef) => (react_1.default.createElement(react_core_1.MenuToggle, Object.assign({ ref: toggleRef, onClick: onToggleClick, isExpanded: isOpen, isDisabled: isDisabled, style: {
            width: toggleWidth
        } }, toggleProps), toggleContent || defaultToggleContent));
    return (react_1.default.createElement(react_core_1.Select, Object.assign({ isOpen: isOpen, selected: selected, onSelect: onSelect, onOpenChange: (isOpen) => {
            onToggle && onToggle(isOpen);
            setIsOpen(isOpen);
        }, toggle: toggle, ref: innerRef, role: "menu" }, props),
        react_1.default.createElement(react_core_1.SelectList, null, checkboxSelectOptions)));
};
exports.CheckboxSelect = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(CheckboxSelectBase, Object.assign({}, props, { innerRef: ref }))));
//# sourceMappingURL=CheckboxSelect.js.map