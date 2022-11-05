import React from 'react';
import { isCustomWizardFooter, isWizardParentStep } from './types';
import { getCurrentStep } from './utils';
import { WizardFooter } from './WizardFooter';
export const WizardContext = React.createContext({});
export const WizardContextProvider = ({ steps: initialSteps, footer: initialFooter, currentStepIndex, isStepVisitRequired, children, onNext, onBack, onClose, goToStepById, goToStepByName, goToStepByIndex }) => {
    const [steps, setSteps] = React.useState(initialSteps);
    const [currentFooter, setCurrentFooter] = React.useState(typeof initialFooter !== 'function' ? initialFooter : undefined);
    const currentStep = getCurrentStep(steps, currentStepIndex);
    const goToNextStep = React.useCallback(() => onNext(steps), [onNext, steps]);
    const goToPrevStep = React.useCallback(() => onBack(steps), [onBack, steps]);
    const footer = React.useMemo(() => {
        var _a;
        const wizardFooter = currentFooter || initialFooter;
        if (isCustomWizardFooter(wizardFooter)) {
            const customFooter = wizardFooter;
            return typeof customFooter === 'function'
                ? customFooter(currentStep, goToNextStep, goToPrevStep, onClose)
                : customFooter;
        }
        return (React.createElement(WizardFooter, Object.assign({ currentStep: currentStep, onNext: goToNextStep, onBack: goToPrevStep, onClose: onClose, isBackDisabled: (currentStep === null || currentStep === void 0 ? void 0 : currentStep.id) === ((_a = steps[0]) === null || _a === void 0 ? void 0 : _a.id) }, wizardFooter)));
    }, [currentFooter, initialFooter, currentStep, goToNextStep, goToPrevStep, onClose, steps]);
    const getStep = React.useCallback((stepId) => steps.find(step => step.id === stepId), [steps]);
    const setStep = React.useCallback((step) => setSteps(prevSteps => prevSteps.map(prevStep => {
        if (prevStep.id === step.id) {
            return Object.assign(Object.assign({}, prevStep), step);
        }
        return prevStep;
    })), []);
    const toggleStep = React.useCallback((stepId, isHidden) => setSteps(prevSteps => {
        let stepToHide;
        return prevSteps.map(prevStep => {
            if (prevStep.id === stepId) {
                // Don't hide the currently active step or its parent (if a sub-step).
                if (isHidden &&
                    (currentStep.id === prevStep.id ||
                        (isWizardParentStep(prevStep) && prevStep.subStepIds.includes(currentStep.id)))) {
                    // eslint-disable-next-line no-console
                    console.error('Wizard: Unable to hide the current step or its parent.');
                    return prevStep;
                }
                stepToHide = Object.assign(Object.assign({}, prevStep), { isHidden });
                return stepToHide;
            }
            // When isStepVisitRequired is enabled, if the step was previously hidden and not visited yet,
            // when it is shown, all steps beyond it should be disabled to ensure it is visited.
            if (isStepVisitRequired &&
                (stepToHide === null || stepToHide === void 0 ? void 0 : stepToHide.isHidden) === false &&
                !(stepToHide === null || stepToHide === void 0 ? void 0 : stepToHide.isVisited) &&
                prevSteps.indexOf(stepToHide) < prevSteps.indexOf(prevStep)) {
                return Object.assign(Object.assign({}, prevStep), { isVisited: false });
            }
            return prevStep;
        });
    }), [currentStep.id, isStepVisitRequired]);
    return (React.createElement(WizardContext.Provider, { value: {
            steps,
            currentStep,
            currentStepIndex,
            footer,
            onClose,
            getStep,
            setStep,
            toggleStep,
            setFooter: setCurrentFooter,
            onNext: goToNextStep,
            onBack: goToPrevStep,
            goToStepById: React.useCallback(id => goToStepById(steps, id), [goToStepById, steps]),
            goToStepByName: React.useCallback(name => goToStepByName(steps, name), [goToStepByName, steps]),
            goToStepByIndex: React.useCallback(index => goToStepByIndex(steps, index), [goToStepByIndex, steps])
        } }, children));
};
WizardContextProvider.displayName = 'WizardContextProvider';
export const useWizardContext = () => React.useContext(WizardContext);
//# sourceMappingURL=WizardContext.js.map