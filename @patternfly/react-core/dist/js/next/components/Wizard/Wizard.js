"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const types_1 = require("./types");
const utils_1 = require("./utils");
const WizardContext_1 = require("./WizardContext");
const WizardToggle_1 = require("./WizardToggle");
const Wizard = (_a) => {
    var { startIndex = 1, children, footer, height, width, className, header, nav, unmountInactiveSteps, onNavByIndex, onNext, onBack, onSave, onClose } = _a, wrapperProps = tslib_1.__rest(_a, ["startIndex", "children", "footer", "height", "width", "className", "header", "nav", "unmountInactiveSteps", "onNavByIndex", "onNext", "onBack", "onSave", "onClose"]);
    const [currentStepIndex, setCurrentStepIndex] = react_1.default.useState(startIndex);
    const steps = utils_1.buildSteps(children);
    const goToStepByIndex = (index) => {
        const lastStepIndex = steps.length;
        if (index < 1) {
            index = 1;
        }
        else if (index > lastStepIndex) {
            index = lastStepIndex;
        }
        const currStep = steps[index - 1];
        const prevStep = steps[currentStepIndex - 1];
        setCurrentStepIndex(index);
        return onNavByIndex === null || onNavByIndex === void 0 ? void 0 : onNavByIndex(utils_1.normalizeNavStep(currStep), utils_1.normalizeNavStep(prevStep));
    };
    const goToNextStep = () => {
        // Save when on the last step, otherwise close
        if (currentStepIndex >= steps.length) {
            if (onSave) {
                return onSave();
            }
            return onClose === null || onClose === void 0 ? void 0 : onClose();
        }
        let currStep = steps[currentStepIndex];
        let newStepIndex = currentStepIndex + 1;
        const prevStep = steps[currentStepIndex - 1];
        // Skip parent step and focus on the first sub-step if they exist
        if (types_1.isWizardParentStep(currStep)) {
            newStepIndex += 1;
            currStep = steps[currentStepIndex + 1];
        }
        setCurrentStepIndex(newStepIndex);
        return onNext === null || onNext === void 0 ? void 0 : onNext(utils_1.normalizeNavStep(currStep), utils_1.normalizeNavStep(prevStep));
    };
    const goToPrevStep = () => {
        if (steps.length < currentStepIndex) {
            // Previous step was removed, just update the currentStep state
            setCurrentStepIndex(steps.length);
        }
        else {
            let currStep = steps[currentStepIndex - 2];
            let newStepIndex = currentStepIndex - 1;
            const prevStep = steps[currentStepIndex - 1];
            // // Skip parent step and focus on the step prior
            if (types_1.isWizardParentStep(currStep)) {
                newStepIndex -= 1;
                currStep = steps[currentStepIndex - 3];
            }
            setCurrentStepIndex(newStepIndex);
            return onBack === null || onBack === void 0 ? void 0 : onBack(utils_1.normalizeNavStep(currStep), utils_1.normalizeNavStep(prevStep));
        }
    };
    const goToStepById = (id) => {
        const stepIndex = steps.findIndex(step => step.id === id) + 1;
        stepIndex > 0 && setCurrentStepIndex(stepIndex);
    };
    const goToStepByName = (name) => {
        const stepIndex = steps.findIndex(step => step.name === name) + 1;
        stepIndex > 0 && setCurrentStepIndex(stepIndex);
    };
    return (react_1.default.createElement(WizardContext_1.WizardContextProvider, { steps: steps, currentStepIndex: currentStepIndex, footer: footer, onNext: goToNextStep, onBack: goToPrevStep, onClose: onClose, goToStepById: goToStepById, goToStepByName: goToStepByName, goToStepByIndex: goToStepByIndex },
        react_1.default.createElement("div", Object.assign({ className: react_styles_1.css(wizard_1.default.wizard, className), style: Object.assign(Object.assign({}, (height ? { height } : {})), (width ? { width } : {})) }, wrapperProps),
            header,
            react_1.default.createElement(WizardToggle_1.WizardToggleInternal, { nav: nav, unmountInactiveSteps: unmountInactiveSteps }))));
};
exports.Wizard = Wizard;
exports.Wizard.displayName = 'Wizard';
//# sourceMappingURL=Wizard.js.map