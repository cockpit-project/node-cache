import React from 'react';
import { Button, EmptyState, Spinner, EmptyStateFooter } from '@patternfly/react-core';
import { XTerm } from './XTerm';
import { SerialConsoleActions } from './SerialConsoleActions';
import { constants } from '../common/constants';
import { createUseStyles } from 'react-jss';
const { CONNECTED, DISCONNECTED, LOADING } = constants;
const useStyles = createUseStyles({
    consoleSerial: {
        gridArea: 'main'
    }
});
const SerialConsoleBase = ({ onConnect, onDisconnect, 
// eslint-disable-next-line @typescript-eslint/no-empty-function
onTitleChanged = () => { }, onData, cols, rows, fontFamily, fontSize, status = 'loading', textConnect = 'Connect', textDisconnect, textReset, textDisconnected = 'Click Connect to open serial console.', textLoading = 'Loading ...', innerRef }) => {
    const styles = useStyles();
    React.useEffect(() => {
        onConnect();
        return () => {
            onDisconnect();
        };
    }, [onConnect, onDisconnect]);
    const onConnectClick = () => {
        onConnect();
        focusTerminal();
    };
    const onDisconnectClick = () => {
        onDisconnect();
        focusTerminal();
    };
    const onResetClick = () => {
        onDisconnect();
        onConnect();
        focusTerminal();
    };
    const focusTerminal = () => {
        innerRef && innerRef.current && innerRef.current.focusTerminal();
    };
    let terminal;
    switch (status) {
        case CONNECTED:
            terminal = (React.createElement(XTerm, { innerRef: innerRef, cols: cols, rows: rows, fontFamily: fontFamily, fontSize: fontSize, onTitleChanged: onTitleChanged, onData: onData }));
            break;
        case DISCONNECTED:
            terminal = (React.createElement(EmptyState, { titleText: textDisconnected },
                React.createElement(EmptyStateFooter, null,
                    React.createElement(Button, { onClick: onConnectClick }, textConnect))));
            break;
        case LOADING:
        default:
            terminal = React.createElement(EmptyState, { icon: Spinner, titleText: textLoading });
            break;
    }
    return (React.createElement(React.Fragment, null,
        status !== DISCONNECTED && (React.createElement(SerialConsoleActions, { onDisconnect: onDisconnectClick, onReset: onResetClick, textDisconnect: textDisconnect, textReset: textReset })),
        React.createElement("div", { className: styles.consoleSerial }, terminal)));
};
SerialConsoleBase.displayName = 'SerialConsoleBase';
export const SerialConsole = React.forwardRef((props, ref) => (React.createElement(SerialConsoleBase, Object.assign({ innerRef: ref }, props))));
SerialConsole.displayName = 'SerialConsole';
//# sourceMappingURL=SerialConsole.js.map