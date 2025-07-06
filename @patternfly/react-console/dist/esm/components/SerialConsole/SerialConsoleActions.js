import { __rest } from "tslib";
import React from 'react';
import { Button } from '@patternfly/react-core';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    consoleActionsSerial: {
        gridArea: 'actions-extra',
        display: 'flex',
        justifyContent: 'flex-end',
        '> button': {
            marginRight: 'var(--pf-t-global--spacer--sm)'
        }
    }
});
export const SerialConsoleActions = (_a) => {
    var { textDisconnect = 'Disconnect', textReset = 'Reset' } = _a, props = __rest(_a, ["textDisconnect", "textReset"]);
    return (React.createElement("div", { className: useStyles().consoleActionsSerial },
        React.createElement(Button, { variant: "secondary", onClick: props.onDisconnect }, textDisconnect),
        React.createElement(Button, { variant: "secondary", onClick: props.onReset }, textReset)));
};
SerialConsoleActions.displayName = 'SerialConsoleActions';
//# sourceMappingURL=SerialConsoleActions.js.map