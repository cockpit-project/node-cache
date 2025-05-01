import React from 'react';
import { MenuToggle, Select, SelectOption, SelectList } from '@patternfly/react-core';
import { constants } from '../common/constants';
import { createUseStyles } from 'react-jss';
const { NONE_TYPE, SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, DESKTOP_VIEWER_CONSOLE_TYPE } = constants;
const useStyles = createUseStyles({
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
export const AccessConsoles = ({ children, textSelectConsoleType = 'Select console type', textSerialConsole = 'Serial console', textVncConsole = 'VNC console', textDesktopViewerConsole = 'Desktop viewer', preselectedType = null }) => {
    const styles = useStyles();
    const typeMap = {
        [SERIAL_CONSOLE_TYPE]: textSerialConsole,
        [VNC_CONSOLE_TYPE]: textVncConsole,
        [DESKTOP_VIEWER_CONSOLE_TYPE]: textDesktopViewerConsole
    };
    const [type, setType] = React.useState(preselectedType !== NONE_TYPE ? { value: preselectedType, toString: () => typeMap[preselectedType] } : null);
    const [isOpen, setIsOpen] = React.useState(false);
    const getConsoleForType = (type) => React.Children.map(children, (child) => {
        if (getChildTypeName(child) === type.value) {
            return React.createElement(React.Fragment, { key: getChildTypeName(child) }, child);
        }
        else {
            return null;
        }
    });
    const toggle = (toggleRef) => (React.createElement(MenuToggle, { ref: toggleRef, id: "pf-v6-c-console__type-selector", onClick: onToggleClick, "aria-label": "Console type toggle", isExpanded: isOpen, style: {
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
    React.Children.toArray(children).forEach((child) => {
        if (isChildOfType(child, VNC_CONSOLE_TYPE)) {
            selectOptions.push(React.createElement(SelectOption, { key: VNC_CONSOLE_TYPE, id: VNC_CONSOLE_TYPE, value: { value: VNC_CONSOLE_TYPE, toString: () => textVncConsole } }, textVncConsole));
        }
        else if (isChildOfType(child, SERIAL_CONSOLE_TYPE)) {
            selectOptions.push(React.createElement(SelectOption, { key: SERIAL_CONSOLE_TYPE, id: SERIAL_CONSOLE_TYPE, value: { value: SERIAL_CONSOLE_TYPE, toString: () => textSerialConsole } }, textSerialConsole));
        }
        else if (isChildOfType(child, DESKTOP_VIEWER_CONSOLE_TYPE)) {
            selectOptions.push(React.createElement(SelectOption, { key: DESKTOP_VIEWER_CONSOLE_TYPE, id: DESKTOP_VIEWER_CONSOLE_TYPE, value: { value: DESKTOP_VIEWER_CONSOLE_TYPE, toString: () => textDesktopViewerConsole } }, textDesktopViewerConsole));
        }
        else {
            const typeText = getChildTypeName(child);
            selectOptions.push(React.createElement(SelectOption, { key: typeText, id: typeText, value: { value: typeText, toString: () => typeText } }, typeText));
        }
    });
    return (React.createElement("div", { className: styles.console },
        React.Children.toArray(children).length > 1 && (React.createElement("div", { className: styles.consoleActions },
            React.createElement(Select, { "aria-label": textSelectConsoleType, toggle: toggle, onSelect: onSelect, isOpen: isOpen, selected: type, onOpenChange: (isOpen) => setIsOpen(isOpen) },
                React.createElement(SelectList, null, selectOptions)))),
        type && getConsoleForType(type)));
};
AccessConsoles.displayName = 'AccessConsoles';
//# sourceMappingURL=AccessConsoles.js.map