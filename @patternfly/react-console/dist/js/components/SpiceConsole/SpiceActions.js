"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceActions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const SpiceActions = ({ textSendShortcut = 'Send Key', textCtrlAltDel = 'Ctrl+Alt+Del', onCtrlAltDel }) => {
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const onToggleClick = () => {
        setIsOpen(!isOpen);
    };
    const onSelect = (_event, _value) => {
        setIsOpen(false);
        onCtrlAltDel();
    };
    return (react_1.default.createElement(react_core_1.Dropdown, { id: "console-send-shortcut", onSelect: onSelect, isOpen: isOpen, onOpenChange: (isOpen) => setIsOpen(isOpen), toggle: (toggleRef) => (react_1.default.createElement(react_core_1.MenuToggle, { ref: toggleRef, onClick: onToggleClick, isExpanded: isOpen }, textSendShortcut)) },
        react_1.default.createElement(react_core_1.DropdownList, null,
            react_1.default.createElement(react_core_1.DropdownItem, { key: "ctrl-alt-delete" }, textCtrlAltDel))));
};
exports.SpiceActions = SpiceActions;
exports.SpiceActions.displayName = 'SpiceActions';
//# sourceMappingURL=SpiceActions.js.map