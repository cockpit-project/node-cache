import React from 'react';
import { Button, ButtonVariant } from '@patternfly/react-core';
import { Dropdown, DropdownItem, DropdownList, MenuToggle } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    consoleActionsVnc: {
        gridArea: 'actions-extra',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        columnGap: 'var(--pf-t-global--spacer--sm)'
    }
});
export const VncActions = ({ textSendShortcut = 'Send Key', textCtrlAltDel = 'Ctrl+Alt+Del', textDisconnect = 'Disconnect', onCtrlAltDel = undefined, onDisconnect, additionalButtons = [] }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const styles = useStyles();
    const onToggleClick = () => {
        setIsOpen(!isOpen);
    };
    const onSelect = (_event, _value) => {
        setIsOpen(false);
    };
    const toolbar = (React.createElement("div", { className: styles.consoleActionsVnc },
        additionalButtons,
        React.createElement(Dropdown, { id: "pf-v6-c-console__send-shortcut", isOpen: isOpen, onSelect: onSelect, onOpenChange: (isOpen) => setIsOpen(isOpen), toggle: (toggleRef) => (React.createElement(MenuToggle, { ref: toggleRef, onClick: onToggleClick, isExpanded: isOpen }, textSendShortcut)) },
            React.createElement(DropdownList, null,
                React.createElement(DropdownItem, { onClick: onCtrlAltDel, key: "ctrl-alt-delete" }, textCtrlAltDel))),
        React.createElement(Button, { variant: ButtonVariant.secondary, onClick: onDisconnect }, textDisconnect)));
    return toolbar;
};
VncActions.displayName = 'VncActions';
//# sourceMappingURL=VncActions.js.map