"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialConsoleActions = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_core_1 = require("@patternfly/react-core");
const react_jss_1 = require("react-jss");
const useStyles = (0, react_jss_1.createUseStyles)({
    consoleActionsSerial: {
        gridArea: 'actions-extra',
        display: 'flex',
        justifyContent: 'flex-end',
        '> button': {
            marginRight: 'var(--pf-t-global--spacer--sm)'
        }
    }
});
const SerialConsoleActions = (_a) => {
    var { textDisconnect = 'Disconnect', textReset = 'Reset' } = _a, props = tslib_1.__rest(_a, ["textDisconnect", "textReset"]);
    return (react_1.default.createElement("div", { className: useStyles().consoleActionsSerial },
        react_1.default.createElement(react_core_1.Button, { variant: "secondary", onClick: props.onDisconnect }, textDisconnect),
        react_1.default.createElement(react_core_1.Button, { variant: "secondary", onClick: props.onReset }, textReset)));
};
exports.SerialConsoleActions = SerialConsoleActions;
exports.SerialConsoleActions.displayName = 'SerialConsoleActions';
//# sourceMappingURL=SerialConsoleActions.js.map