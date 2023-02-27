import React from 'react';
import { css } from '@patternfly/react-styles';
import { SpiceMainConn, sendCtrlAltDel } from '@spice-project/spice-html5';
import { constants } from '../common/constants';
import { SpiceActions } from './SpiceActions';
const { CONNECTED, CONNECTING, DISCONNECTED } = constants;
export const SpiceConsole = ({ children = null, host = '', port = '80', path = '', encrypt = false, password, className = '', onDisconnected, onInitFailed, textConnecting = 'Connecting', textDisconnected = 'Disconnected', textSendShortcut, textCtrlAltDel }) => {
    let spiceStaticComponent;
    let sc;
    const [status, setStatus] = React.useState(CONNECTING);
    React.useEffect(() => {
        try {
            const protocol = encrypt ? 'wss' : 'ws';
            const uri = `${protocol}://${host}:${port}/${path}`;
            sc = new SpiceMainConn({
                uri,
                /* eslint-disable camelcase */
                screen_id: 'spice-screen',
                password,
                onerror: onSpiceError,
                onsuccess: setStatus(CONNECTED)
            });
        }
        catch (e) {
            onInitFailed && onInitFailed(e);
            disconnect();
        }
        return () => disconnect();
    }, []);
    const disconnect = () => {
        if (sc) {
            sc.stop();
            sc = undefined;
        }
    };
    const onCtrlAltDel = () => {
        if (sc) {
            sendCtrlAltDel();
        }
    };
    const onSpiceError = (e) => {
        disconnect();
        setStatus(DISCONNECTED);
        onDisconnected(e);
    };
    if (!spiceStaticComponent) {
        // create just once
        spiceStaticComponent = React.createElement("div", { id: "spice-screen" });
    }
    return (React.createElement("div", { className: css('spice-console', className) },
        children,
        React.createElement("div", null, status === CONNECTED && (React.createElement(SpiceActions, { onCtrlAltDel: onCtrlAltDel, textSendShortcut: textSendShortcut, textCtrlAltDel: textCtrlAltDel }))),
        React.createElement("div", null,
            (status === DISCONNECTED || status === CONNECTING) && (React.createElement("div", { className: 'spice-console-' + status }, status === DISCONNECTED ? textDisconnected : textConnecting)),
            status,
            spiceStaticComponent)));
};
SpiceConsole.displayName = 'SpiceConsole';
//# sourceMappingURL=SpiceConsole.js.map