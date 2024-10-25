"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleSelect = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Select_1 = require('@patternfly/react-core/dist/js/components/Select');
const MenuToggle_1 = require('@patternfly/react-core/dist/js/components/MenuToggle');
const SimpleSelectBase = (_a) => {
    var { innerRef, initialOptions, isDisabled, onSelect, onToggle, toggleContent, toggleWidth = '200px', toggleProps, placeholder = 'Select a value' } = _a, props = tslib_1.__rest(_a, ["innerRef", "initialOptions", "isDisabled", "onSelect", "onToggle", "toggleContent", "toggleWidth", "toggleProps", "placeholder"]);
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const [selected, setSelected] = react_1.default.useState();
    react_1.default.useEffect(() => {
        const selectedOption = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.find((option) => option.selected);
        setSelected(selectedOption);
    }, [initialOptions]);
    const simpleSelectOptions = initialOptions === null || initialOptions === void 0 ? void 0 : initialOptions.map((option) => {
        const { content, value } = option, props = tslib_1.__rest(option, ["content", "value"]);
        const isSelected = (selected === null || selected === void 0 ? void 0 : selected.value) === value;
        return (react_1.default.createElement(Select_1.SelectOption, Object.assign({ value: value, key: value, isSelected: isSelected }, props), content));
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
    const toggle = (toggleRef) => (react_1.default.createElement(MenuToggle_1.MenuToggle, Object.assign({ ref: toggleRef, onClick: onToggleClick, isExpanded: isOpen, isDisabled: isDisabled, style: {
            width: toggleWidth
        } }, toggleProps), toggleContent ? toggleContent : (selected === null || selected === void 0 ? void 0 : selected.content) || placeholder));
    return (react_1.default.createElement(Select_1.Select, Object.assign({ isOpen: isOpen, selected: selected, onSelect: _onSelect, onOpenChange: (isOpen) => {
            onToggle && onToggle(isOpen);
            setIsOpen(isOpen);
        }, toggle: toggle, shouldFocusToggleOnSelect: true, ref: innerRef }, props),
        react_1.default.createElement(Select_1.SelectList, null, simpleSelectOptions)));
};
exports.SimpleSelect = react_1.default.forwardRef((props, ref) => (react_1.default.createElement(SimpleSelectBase, Object.assign({}, props, { innerRef: ref }))));
exports.SimpleSelect.displayName = 'SimpleSelect';
//# sourceMappingURL=SimpleSelect.js.map