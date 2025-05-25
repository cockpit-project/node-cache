import React from 'react';
import { Dropdown, DropdownItem, DropdownList, MenuToggle } from '@patternfly/react-core';
export const SpiceActions = ({ textSendShortcut = 'Send Key', textCtrlAltDel = 'Ctrl+Alt+Del', onCtrlAltDel }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onToggleClick = () => {
        setIsOpen(!isOpen);
    };
    const onSelect = (_event, _value) => {
        setIsOpen(false);
        onCtrlAltDel();
    };
    return (React.createElement(Dropdown, { id: "console-send-shortcut", onSelect: onSelect, isOpen: isOpen, onOpenChange: (isOpen) => setIsOpen(isOpen), toggle: (toggleRef) => (React.createElement(MenuToggle, { ref: toggleRef, onClick: onToggleClick, isExpanded: isOpen }, textSendShortcut)) },
        React.createElement(DropdownList, null,
            React.createElement(DropdownItem, { key: "ctrl-alt-delete" }, textCtrlAltDel))));
};
SpiceActions.displayName = 'SpiceActions';
//# sourceMappingURL=SpiceActions.js.map