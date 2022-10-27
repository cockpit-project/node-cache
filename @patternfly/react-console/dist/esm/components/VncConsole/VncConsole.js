import React from 'react';
import { css } from '@patternfly/react-styles';
import { Button, EmptyState, EmptyStateBody, EmptyStateIcon, Spinner } from '@patternfly/react-core';
import { initLogging } from '@novnc/novnc/core/util/logging';
/** Has bad types. https://github.com/larryprice/novnc-core/issues/5 */
import RFB from '@novnc/novnc/core/rfb';
import { VncActions } from './VncActions';
import { constants } from '../common/constants';
import styles from '@patternfly/react-styles/css/components/Consoles/VncConsole';
import '@patternfly/react-styles/css/components/Consoles/VncConsole.css';
const { CONNECTED, CONNECTING, DISCONNECTED } = constants;
export const VncConsole = ({ children, host, port = '80', path = '', encrypt = false, resizeSession = true, scaleViewport = false, viewOnly = false, shared = false, credentials, repeaterID = '', vncLogging = 'warn', consoleContainerId, additionalButtons = [], onDisconnected = () => { }, onInitFailed, onSecurityFailure, textConnect = 'Connect', textConnecting = 'Connecting', textDisconnected = 'Click Connect to open the VNC console.', textDisconnect = 'Disconnect', textSendShortcut, textCtrlAltDel }) => {
    const rfb = React.useRef();
    let novncStaticComponent;
    let novncElem;
    const [status, setStatus] = React.useState(CONNECTING);
    const addEventListeners = () => {
        var _a, _b, _c;
        if (rfb.current) {
            (_a = rfb.current) === null || _a === void 0 ? void 0 : _a.addEventListener('connect', onConnected);
            (_b = rfb.current) === null || _b === void 0 ? void 0 : _b.addEventListener('disconnect', _onDisconnected);
            (_c = rfb.current) === null || _c === void 0 ? void 0 : _c.addEventListener('securityfailure', _onSecurityFailure);
        }
    };
    const removeEventListeners = () => {
        if (rfb.current) {
            rfb.current.removeEventListener('connect', onConnected);
            rfb.current.removeEventListener('disconnect', _onDisconnected);
            rfb.current.removeEventListener('securityfailure', _onSecurityFailure);
        }
    };
    const connect = () => {
        const protocol = encrypt ? 'wss' : 'ws';
        const url = `${protocol}://${host}:${port}/${path}`;
        const options = {
            repeaterID,
            shared,
            credentials
        };
        rfb.current = new RFB(novncElem, url, options);
        addEventListeners();
        rfb.current.viewOnly = viewOnly;
        rfb.current.scaleViewport = scaleViewport;
        rfb.current.resizeSession = resizeSession;
    };
    React.useEffect(() => {
        initLogging(vncLogging);
        try {
            connect();
        }
        catch (e) {
            onInitFailed && onInitFailed(e);
            rfb.current = undefined;
        }
        return () => {
            disconnect();
            removeEventListeners();
            rfb.current = undefined;
        };
    }, [connect, onInitFailed, removeEventListeners, vncLogging]);
    const disconnect = () => {
        if (!rfb.current) {
            return;
        }
        rfb.current.disconnect();
    };
    const onConnected = () => {
        setStatus(CONNECTED);
    };
    const _onDisconnected = (e) => {
        setStatus(DISCONNECTED);
        onDisconnected(e);
    };
    const _onSecurityFailure = (e) => {
        setStatus(DISCONNECTED);
        onSecurityFailure(e);
    };
    const onCtrlAltDel = () => {
        var _a;
        if (rfb.current) {
            (_a = rfb === null || rfb === void 0 ? void 0 : rfb.current) === null || _a === void 0 ? void 0 : _a.sendCtrlAltDel();
        }
    };
    let rightContent;
    let emptyState;
    switch (status) {
        case CONNECTED:
            rightContent = (React.createElement(VncActions, { onCtrlAltDel: onCtrlAltDel, textSendShortcut: textSendShortcut, textCtrlAltDel: textCtrlAltDel, textDisconnect: textDisconnect, onDisconnect: disconnect, additionalButtons: additionalButtons }));
            break;
        case DISCONNECTED:
            emptyState = (React.createElement(EmptyState, null,
                React.createElement(EmptyStateBody, null, textDisconnected),
                React.createElement(Button, { variant: "primary", onClick: connect }, textConnect)));
            break;
        case CONNECTING:
        default:
            emptyState = (React.createElement(EmptyState, null,
                React.createElement(EmptyStateIcon, { variant: "container", component: Spinner }),
                React.createElement(EmptyStateBody, null, textConnecting)));
    }
    if (!novncStaticComponent) {
        novncStaticComponent = React.createElement("div", { id: consoleContainerId, ref: e => (novncElem = e) });
    }
    return (React.createElement(React.Fragment, null,
        rightContent,
        React.createElement("div", { className: css(styles.consoleVnc) },
            children,
            React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    emptyState,
                    novncStaticComponent)))));
};
VncConsole.displayName = 'VncConsole';
//# sourceMappingURL=VncConsole.js.map