"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardStep = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const WizardBody_1 = require("./WizardBody");
const useWizardFooter_1 = require("./hooks/useWizardFooter");
const WizardContext_1 = require("./WizardContext");
const WizardStep = ({ children, body, id, footer, isHidden, isDisabled, navItem, status }) => {
    const { currentStep, setStep, toggleStep } = WizardContext_1.useWizardContext();
    useWizardFooter_1.useWizardFooter(footer, id);
    // Update the controlled step when a change is detected with select properties
    react_1.default.useEffect(() => {
        if ((currentStep === null || currentStep === void 0 ? void 0 : currentStep.id) === id && (isDisabled || navItem || status || !(currentStep === null || currentStep === void 0 ? void 0 : currentStep.isVisited))) {
            setStep(Object.assign(Object.assign(Object.assign(Object.assign({ id }, (isDisabled && { isDisabled })), (navItem && { navItem })), (status && { status })), (!(currentStep === null || currentStep === void 0 ? void 0 : currentStep.isVisited) && { isVisited: true })));
        }
    }, [id, setStep, currentStep === null || currentStep === void 0 ? void 0 : currentStep.id, isDisabled, navItem, status, currentStep === null || currentStep === void 0 ? void 0 : currentStep.isVisited]);
    // Toggle visibility when the isHidden flag updates.
    // Wizard's hasUnmountedSteps prop must be set to false for visibility changes to take effect.
    react_1.default.useEffect(() => {
        if (isHidden !== undefined) {
            toggleStep(id, isHidden);
        }
    }, [toggleStep, id, isHidden]);
    return body || body === undefined ? react_1.default.createElement(WizardBody_1.WizardBody, Object.assign({}, body), children) : react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.WizardStep = WizardStep;
exports.WizardStep.displayName = 'WizardStep';
//# sourceMappingURL=WizardStep.js.map