import React from 'react';
import { Dropdown, DropdownItem, DropdownToggle } from '@patternfly/react-core';
export const SpiceActions = ({ textSendShortcut = 'Send Key', textCtrlAltDel = 'Ctrl+Alt+Del', onCtrlAltDel }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (React.createElement(Dropdown, { id: "console-send-shortcut", onSelect: () => {
            setIsOpen(!isOpen);
            onCtrlAltDel();
        }, isOpen: isOpen, toggle: React.createElement(DropdownToggle, { onToggle: isDropdownOpen => setIsOpen(isDropdownOpen) }, textSendShortcut), dropdownItems: [React.createElement(DropdownItem, { key: "ctrl-alt-delete" }, textCtrlAltDel)] }));
};
SpiceActions.displayName = 'SpiceActions';
//# sourceMappingURL=SpiceActions.js.map