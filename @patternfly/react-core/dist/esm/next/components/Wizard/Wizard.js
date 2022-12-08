import { __rest } from "tslib";
import React from 'react';
import findLastIndex from 'lodash/findLastIndex';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { isWizardParentStep, isCustomWizardNav } from './types';
import { buildSteps, normalizeNavStep } from './utils';
import { useWizardContext, WizardContextProvider } from './WizardContext';
import { WizardToggle } from './WizardToggle';
import { WizardNavInternal } from './WizardNavInternal';
export const Wizard = (_a) => {
    var { children, footer, height, width, className, header, nav, startIndex = 1, isStepVisitRequired = false, hasUnmountedSteps = true, onNavByIndex, onNext, onBack, onSave, onClose } = _a, wrapperProps = __rest(_a, ["children", "footer", "height", "width", "className", "header", "nav", "startIndex", "isStepVisitRequired", "hasUnmountedSteps", "onNavByIndex", "onNext", "onBack", "onSave", "onClose"]);
    const [currentStepIndex, setCurrentStepIndex] = React.useState(startIndex);
    const initialSteps = buildSteps(children);
    const goToNextStep = (steps = initialSteps) => {
        const newStepIndex = steps.findIndex((step, index) => index + 1 > currentStepIndex && !step.isHidden && !isWizardParentStep(step)) + 1;
        if (currentStepIndex >= steps.length || !newStepIndex) {
            return onSave ? onSave() : onClose === null || onClose === void 0 ? void 0 : onClose();
        }
        const currStep = isWizardParentStep(steps[currentStepIndex])
            ? steps[currentStepIndex + 1]
            : steps[currentStepIndex];
        const prevStep = steps[currentStepIndex - 1];
        setCurrentStepIndex(newStepIndex);
        return onNext === null || onNext === void 0 ? void 0 : onNext(normalizeNavStep(currStep, steps), normalizeNavStep(prevStep, steps));
    };
    const goToPrevStep = (steps = initialSteps) => {
        const newStepIndex = findLastIndex(steps, (step, index) => index + 1 < currentStepIndex && !step.isHidden && !isWizardParentStep(step)) + 1;
        const currStep = isWizardParentStep(steps[currentStepIndex - 2])
            ? steps[currentStepIndex - 3]
            : steps[currentStepIndex - 2];
        const prevStep = steps[currentStepIndex - 1];
        setCurrentStepIndex(newStepIndex);
        return onBack === null || onBack === void 0 ? void 0 : onBack(normalizeNavStep(currStep, steps), normalizeNavStep(prevStep, steps));
    };
    const goToStepByIndex = (steps = initialSteps, index) => {
        const lastStepIndex = steps.length + 1;
        // Handle index when out of bounds or hidden
        if (index < 1) {
            index = 1;
        }
        else if (index > lastStepIndex) {
            index = lastStepIndex;
        }
        else if (steps[index - 1].isHidden) {
            // eslint-disable-next-line no-console
            console.error('Wizard: Unable to navigate to hidden step.');
        }
        const currStep = steps[index - 1];
        const prevStep = steps[currentStepIndex - 1];
        setCurrentStepIndex(index);
        return onNavByIndex === null || onNavByIndex === void 0 ? void 0 : onNavByIndex(normalizeNavStep(currStep, steps), normalizeNavStep(prevStep, steps));
    };
    const goToStepById = (steps = initialSteps, id) => {
        const stepIndex = steps.findIndex(step => step.id === id) + 1;
        if (stepIndex > 0 && stepIndex < steps.length + 1 && !steps[stepIndex].isHidden) {
            setCurrentStepIndex(stepIndex);
        }
        else {
            // eslint-disable-next-line no-console
            console.error(`Wizard: Unable to navigate to step with id: ${id}.`);
        }
    };
    const goToStepByName = (steps = initialSteps, name) => {
        const stepIndex = initialSteps.findIndex(step => step.name === name) + 1;
        if (stepIndex > 0 && stepIndex < steps.length + 1 && !steps[stepIndex].isHidden) {
            setCurrentStepIndex(stepIndex);
        }
        else {
            // eslint-disable-next-line no-console
            console.error(`Wizard: Unable to navigate to step with name: ${name}.`);
        }
    };
    return (React.createElement(WizardContextProvider, { steps: initialSteps, currentStepIndex: currentStepIndex, footer: footer, isStepVisitRequired: isStepVisitRequired, onNext: goToNextStep, onBack: goToPrevStep, onClose: onClose, goToStepById: goToStepById, goToStepByName: goToStepByName, goToStepByIndex: goToStepByIndex },
        React.createElement("div", Object.assign({ className: css(styles.wizard, className), style: Object.assign(Object.assign({}, (height ? { height } : {})), (width ? { width } : {})) }, wrapperProps),
            header,
            React.createElement(WizardInternal, { nav: nav, hasUnmountedSteps: hasUnmountedSteps, isStepVisitRequired: isStepVisitRequired }))));
};
const WizardInternal = ({ nav, hasUnmountedSteps, isStepVisitRequired }) => {
    const { currentStep, steps, footer, goToStepByIndex } = useWizardContext();
    const [isNavExpanded, setIsNavExpanded] = React.useState(false);
    const wizardNav = React.useMemo(() => {
        if (isCustomWizardNav(nav)) {
            return typeof nav === 'function' ? nav(isNavExpanded, steps, currentStep, goToStepByIndex) : nav;
        }
        return React.createElement(WizardNavInternal, { nav: nav, isNavExpanded: isNavExpanded, isStepVisitRequired: isStepVisitRequired });
    }, [currentStep, isStepVisitRequired, goToStepByIndex, isNavExpanded, nav, steps]);
    return (React.createElement(WizardToggle, { nav: wizardNav, footer: footer, steps: steps, currentStep: currentStep, isNavExpanded: isNavExpanded, toggleNavExpanded: () => setIsNavExpanded(prevIsExpanded => !prevIsExpanded), hasUnmountedSteps: hasUnmountedSteps }));
};
Wizard.displayName = 'Wizard';
//# sourceMappingURL=Wizard.js.map