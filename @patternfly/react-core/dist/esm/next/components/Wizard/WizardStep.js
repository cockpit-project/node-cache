import React from 'react';
import { WizardBody } from './WizardBody';
import { useWizardFooter } from './hooks/useWizardFooter';
import { useWizardContext } from './WizardContext';
export const WizardStep = ({ children, body, id, footer, isHidden, isDisabled, navItem, status }) => {
    const { currentStep, setStep, toggleStep } = useWizardContext();
    useWizardFooter(footer, id);
    // Update the controlled step when a change is detected with select properties
    React.useEffect(() => {
        if ((currentStep === null || currentStep === void 0 ? void 0 : currentStep.id) === id && (isDisabled || navItem || status || !(currentStep === null || currentStep === void 0 ? void 0 : currentStep.isVisited))) {
            setStep(Object.assign(Object.assign(Object.assign(Object.assign({ id }, (isDisabled && { isDisabled })), (navItem && { navItem })), (status && { status })), (!(currentStep === null || currentStep === void 0 ? void 0 : currentStep.isVisited) && { isVisited: true })));
        }
    }, [id, setStep, currentStep === null || currentStep === void 0 ? void 0 : currentStep.id, isDisabled, navItem, status, currentStep === null || currentStep === void 0 ? void 0 : currentStep.isVisited]);
    // Toggle visibility when the isHidden flag updates.
    // Wizard's hasUnmountedSteps prop must be set to false for visibility changes to take effect.
    React.useEffect(() => {
        if (isHidden !== undefined) {
            toggleStep(id, isHidden);
        }
    }, [toggleStep, id, isHidden]);
    return body || body === undefined ? React.createElement(WizardBody, Object.assign({}, body), children) : React.createElement(React.Fragment, null, children);
};
WizardStep.displayName = 'WizardStep';
//# sourceMappingURL=WizardStep.js.map