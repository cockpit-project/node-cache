"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VncActions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const react_core_2 = require("@patternfly/react-core");
const react_jss_1 = require("react-jss");
const useStyles = (0, react_jss_1.createUseStyles)({
    consoleActionsVnc: {
        gridArea: 'actions-extra',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        columnGap: 'var(--pf-t-global--spacer--sm)'
    }
});
const VncActions = ({ textSendShortcut = 'Send Key', textCtrlAltDel = 'Ctrl+Alt+Del', textDisconnect = 'Disconnect', onCtrlAltDel = undefined, onDisconnect, additionalButtons = [] }) => {
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const styles = useStyles();
    const onToggleClick = () => {
        setIsOpen(!isOpen);
    };
    const onSelect = (_event, _value) => {
        setIsOpen(false);
    };
    const toolbar = (react_1.default.createElement("div", { className: styles.consoleActionsVnc },
        additionalButtons,
        react_1.default.createElement(react_core_2.Dropdown, { id: "pf-v6-c-console__send-shortcut", isOpen: isOpen, onSelect: onSelect, onOpenChange: (isOpen) => setIsOpen(isOpen), toggle: (toggleRef) => (react_1.default.createElement(react_core_2.MenuToggle, { ref: toggleRef, onClick: onToggleClick, isExpanded: isOpen }, textSendShortcut)) },
            react_1.default.createElement(react_core_2.DropdownList, null,
                react_1.default.createElement(react_core_2.DropdownItem, { onClick: onCtrlAltDel, key: "ctrl-alt-delete" }, textCtrlAltDel))),
        react_1.default.createElement(react_core_1.Button, { variant: react_core_1.ButtonVariant.secondary, onClick: onDisconnect }, textDisconnect)));
    return toolbar;
};
exports.VncActions = VncActions;
exports.VncActions.displayName = 'VncActions';
//# sourceMappingURL=VncActions.js.map