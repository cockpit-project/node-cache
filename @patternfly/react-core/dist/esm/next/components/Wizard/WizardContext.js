import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { isCustomWizardFooter } from './types';
import { getActiveStep } from './utils';
import { WizardFooter } from './WizardFooter';
export const WizardContext = React.createContext({});
// eslint-disable-next-line patternfly-react/no-anonymous-functions
export const WizardContextProvider = ({ steps: initialSteps, footer: initialFooter, currentStepIndex, children, onNext, onBack, onClose, goToStepById, goToStepByName, goToStepByIndex }) => {
    const [steps, setSteps] = React.useState(initialSteps);
    const [footer, setFooter] = React.useState(initialFooter);
    const activeStep = getActiveStep(steps, currentStepIndex);
    const wizardFooter = React.useMemo(() => {
        var _a;
        return isCustomWizardFooter(footer) ? (React.createElement("div", { className: css(styles.wizardFooter) }, footer)) : (React.createElement(WizardFooter, Object.assign({ activeStep: activeStep, onNext: onNext, onBack: onBack, onClose: onClose, disableBackButton: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === ((_a = steps[0]) === null || _a === void 0 ? void 0 : _a.id) }, footer)));
    }, [activeStep, footer, onBack, onClose, onNext, steps]);
    // When the active step changes and the newly active step isn't visited, set the visited flag to true.
    React.useEffect(() => {
        if (activeStep && !(activeStep === null || activeStep === void 0 ? void 0 : activeStep.visited)) {
            setSteps(prevSteps => prevSteps.map(step => {
                if (step.id === activeStep.id) {
                    return Object.assign(Object.assign({}, step), { visited: true });
                }
                return step;
            }));
        }
    }, [activeStep]);
    return (React.createElement(WizardContext.Provider, { value: {
            steps,
            activeStep,
            footer: wizardFooter,
            onNext,
            onBack,
            onClose,
            goToStepById,
            goToStepByName,
            goToStepByIndex,
            setFooter
        } }, typeof children === 'function'
        ? children({ activeStep, steps, footer: wizardFooter, onNext, onBack, onClose })
        : children));
};
export const useWizardContext = () => React.useContext(WizardContext);
//# sourceMappingURL=WizardContext.js.map