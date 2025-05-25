"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessConsoles = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const constants_1 = require("../common/constants");
const react_jss_1 = require("react-jss");
const { NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE } = constants_1.constants;
const useStyles = (0, react_jss_1.createUseStyles)({
    console: {
        display: 'grid',
        gridTemplateAreas: '\'actions-main actions-extra\'\n    \'main main\'',
        rowGap: 'var(--pf-t-global--spacer--md)'
    },
    consoleActions: {
        gridArea: 'actions-main',
        display: 'flex',
        '> div': {
            marginRight: 'var(--pf-t-global--spacer--sm)'
        }
    }
});
const getChildTypeName = (child) => child && child.props && child.props.type ? child.props.type : (child && child.type && child.type.displayName) || null;
const isChildOfType = (child, type) => {
    if (child && child.props && child.props.type) {
        return child.props.type === type;
    }
    else if (child && child.type) {
        return child.type.displayName === type;
    }
    return false;
};
const AccessConsoles = ({ children, textSelectConsoleType = 'Select console type', textSerialConsole = 'Serial console', textVncConsole = 'VNC console', textDesktopViewerConsole = 'Desktop viewer', preselectedType = null }) => {
    const styles = useStyles();
    const typeMap = {
        [SERIAL_CONSOLE_TYPE]: textSerialConsole,
        [VNC_CONSOLE_TYPE]: textVncConsole,
        [DESKTOP_VIEWER_CONSOLE_TYPE]: textDesktopViewerConsole
    };
    const [type, setType] = react_1.default.useState(preselectedType !== NONE_TYPE ? { value: preselectedType, toString: () => typeMap[preselectedType] } : null);
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const getConsoleForType = (type) => react_1.default.Children.map(children, (child) => {
        if (getChildTypeName(child) === type.value) {
            return react_1.default.createElement(react_1.default.Fragment, { key: getChildTypeName(child) }, child);
        }
        else {
            return null;
        }
    });
    const toggle = (toggleRef) => (react_1.default.createElement(react_core_1.MenuToggle, { ref: toggleRef, id: "pf-v6-c-console__type-selector", onClick: onToggleClick, "aria-label": "Console type toggle", isExpanded: isOpen, style: {
            width: '100%'
        } }, type.toString()));
    const onToggleClick = () => {
        setIsOpen(!isOpen);
    };
    const onSelect = (_event, value) => {
        setType(value);
        setIsOpen(false);
    };
    const selectOptions = [];
    react_1.default.Children.toArray(children).forEach((child) => {
        if (isChildOfType(child, VNC_CONSOLE_TYPE)) {
            selectOptions.push(react_1.default.createElement(react_core_1.SelectOption, { key: VNC_CONSOLE_TYPE, id: VNC_CONSOLE_TYPE, value: { value: VNC_CONSOLE_TYPE, toString: () => textVncConsole } }, textVncConsole));
        }
        else if (isChildOfType(child, SERIAL_CONSOLE_TYPE)) {
            selectOptions.push(react_1.default.createElement(react_core_1.SelectOption, { key: SERIAL_CONSOLE_TYPE, id: SERIAL_CONSOLE_TYPE, value: { value: SERIAL_CONSOLE_TYPE, toString: () => textSerialConsole } }, textSerialConsole));
        }
        else if (isChildOfType(child, DESKTOP_VIEWER_CONSOLE_TYPE)) {
            selectOptions.push(react_1.default.createElement(react_core_1.SelectOption, { key: DESKTOP_VIEWER_CONSOLE_TYPE, id: DESKTOP_VIEWER_CONSOLE_TYPE, value: { value: DESKTOP_VIEWER_CONSOLE_TYPE, toString: () => textDesktopViewerConsole } }, textDesktopViewerConsole));
        }
        else {
            const typeText = getChildTypeName(child);
            selectOptions.push(react_1.default.createElement(react_core_1.SelectOption, { key: typeText, id: typeText, value: { value: typeText, toString: () => typeText } }, typeText));
        }
    });
    return (react_1.default.createElement("div", { className: styles.console },
        react_1.default.Children.toArray(children).length > 1 && (react_1.default.createElement("div", { className: styles.consoleActions },
            react_1.default.createElement(react_core_1.Select, { "aria-label": textSelectConsoleType, toggle: toggle, onSelect: onSelect, isOpen: isOpen, selected: type, onOpenChange: (isOpen) => setIsOpen(isOpen) },
                react_1.default.createElement(react_core_1.SelectList, null, selectOptions)))),
        type && getConsoleForType(type)));
};
exports.AccessConsoles = AccessConsoles;
exports.AccessConsoles.displayName = 'AccessConsoles';
//# sourceMappingURL=AccessConsoles.js.map