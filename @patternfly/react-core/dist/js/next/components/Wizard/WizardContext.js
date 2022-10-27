"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWizardContext = exports.WizardContextProvider = exports.WizardContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const types_1 = require("./types");
const utils_1 = require("./utils");
const WizardFooter_1 = require("./WizardFooter");
exports.WizardContext = react_1.default.createContext({});
const WizardContextProvider = ({ steps: initialSteps, footer: initialFooter, currentStepIndex, isStepVisitRequired, children, onNext, onBack, onClose, goToStepById, goToStepByName, goToStepByIndex }) => {
    const [steps, setSteps] = react_1.default.useState(initialSteps);
    const [currentFooter, setCurrentFooter] = react_1.default.useState(typeof initialFooter !== 'function' ? initialFooter : undefined);
    const currentStep = utils_1.getCurrentStep(steps, currentStepIndex);
    const goToNextStep = react_1.default.useCallback(() => onNext(steps), [onNext, steps]);
    const goToPrevStep = react_1.default.useCallback(() => onBack(steps), [onBack, steps]);
    const footer = react_1.default.useMemo(() => {
        var _a;
        const wizardFooter = currentFooter || initialFooter;
        if (types_1.isCustomWizardFooter(wizardFooter)) {
            const customFooter = wizardFooter;
            return typeof customFooter === 'function'
                ? customFooter(currentStep, goToNextStep, goToPrevStep, onClose)
                : customFooter;
        }
        return (react_1.default.createElement(WizardFooter_1.WizardFooter, Object.assign({ currentStep: currentStep, onNext: goToNextStep, onBack: goToPrevStep, onClose: onClose, isBackDisabled: (currentStep === null || currentStep === void 0 ? void 0 : currentStep.id) === ((_a = steps[0]) === null || _a === void 0 ? void 0 : _a.id) }, wizardFooter)));
    }, [currentFooter, initialFooter, currentStep, goToNextStep, goToPrevStep, onClose, steps]);
    const getStep = react_1.default.useCallback((stepId) => steps.find(step => step.id === stepId), [steps]);
    const setStep = react_1.default.useCallback((step) => setSteps(prevSteps => prevSteps.map(prevStep => {
        if (prevStep.id === step.id) {
            return Object.assign(Object.assign({}, prevStep), step);
        }
        return prevStep;
    })), []);
    const toggleStep = react_1.default.useCallback((stepId, isHidden) => setSteps(prevSteps => {
        let stepToHide;
        return prevSteps.map(prevStep => {
            if (prevStep.id === stepId) {
                // Don't hide the currently active step or its parent (if a sub-step).
                if (isHidden &&
                    (currentStep.id === prevStep.id ||
                        (types_1.isWizardParentStep(prevStep) && prevStep.subStepIds.includes(currentStep.id)))) {
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
    return (react_1.default.createElement(exports.WizardContext.Provider, { value: {
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
            goToStepById: react_1.default.useCallback(id => goToStepById(steps, id), [goToStepById, steps]),
            goToStepByName: react_1.default.useCallback(name => goToStepByName(steps, name), [goToStepByName, steps]),
            goToStepByIndex: react_1.default.useCallback(index => goToStepByIndex(steps, index), [goToStepByIndex, steps])
        } }, children));
};
exports.WizardContextProvider = WizardContextProvider;
exports.WizardContextProvider.displayName = 'WizardContextProvider';
const useWizardContext = () => react_1.default.useContext(exports.WizardContext);
exports.useWizardContext = useWizardContext;
//# sourceMappingURL=WizardContext.js.map