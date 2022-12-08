"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceConsole = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const spice_html5_1 = require("@spice-project/spice-html5");
const constants_1 = require("../common/constants");
const SpiceActions_1 = require("./SpiceActions");
const { CONNECTED, CONNECTING, DISCONNECTED } = constants_1.constants;
const SpiceConsole = ({ children = null, host = '', port = '80', path = '', encrypt = false, password, className = '', onDisconnected, onInitFailed, textConnecting = 'Connecting', textDisconnected = 'Disconnected', textSendShortcut, textCtrlAltDel }) => {
    let spiceStaticComponent;
    let sc;
    const [status, setStatus] = react_1.default.useState(CONNECTING);
    react_1.default.useEffect(() => {
        try {
            const protocol = encrypt ? 'wss' : 'ws';
            const uri = `${protocol}://${host}:${port}/${path}`;
            sc = new spice_html5_1.SpiceMainConn({
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
            spice_html5_1.sendCtrlAltDel();
        }
    };
    const onSpiceError = (e) => {
        disconnect();
        setStatus(DISCONNECTED);
        onDisconnected(e);
    };
    if (!spiceStaticComponent) {
        // create just once
        spiceStaticComponent = react_1.default.createElement("div", { id: "spice-screen" });
    }
    return (react_1.default.createElement("div", { className: react_styles_1.css('spice-console', className) },
        children,
        react_1.default.createElement("div", null, status === CONNECTED && (react_1.default.createElement(SpiceActions_1.SpiceActions, { onCtrlAltDel: onCtrlAltDel, textSendShortcut: textSendShortcut, textCtrlAltDel: textCtrlAltDel }))),
        react_1.default.createElement("div", null,
            (status === DISCONNECTED || status === CONNECTING) && (react_1.default.createElement("div", { className: 'spice-console-' + status }, status === DISCONNECTED ? textDisconnected : textConnecting)),
            status,
            spiceStaticComponent)));
};
exports.SpiceConsole = SpiceConsole;
exports.SpiceConsole.displayName = 'SpiceConsole';
//# sourceMappingURL=SpiceConsole.js.map