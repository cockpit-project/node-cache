"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const findLastIndex_1 = tslib_1.__importDefault(require("lodash/findLastIndex"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const types_1 = require("./types");
const utils_1 = require("./utils");
const WizardContext_1 = require("./WizardContext");
const WizardToggle_1 = require("./WizardToggle");
const WizardNavInternal_1 = require("./WizardNavInternal");
const Wizard = (_a) => {
    var { children, footer, height, width, className, header, nav, startIndex = 1, isStepVisitRequired = false, hasUnmountedSteps = true, onNavByIndex, onNext, onBack, onSave, onClose } = _a, wrapperProps = tslib_1.__rest(_a, ["children", "footer", "height", "width", "className", "header", "nav", "startIndex", "isStepVisitRequired", "hasUnmountedSteps", "onNavByIndex", "onNext", "onBack", "onSave", "onClose"]);
    const [currentStepIndex, setCurrentStepIndex] = react_1.default.useState(startIndex);
    const initialSteps = utils_1.buildSteps(children);
    const goToNextStep = (steps = initialSteps) => {
        const newStepIndex = steps.findIndex((step, index) => index + 1 > currentStepIndex && !step.isHidden && !types_1.isWizardParentStep(step)) + 1;
        if (currentStepIndex >= steps.length || !newStepIndex) {
            return onSave ? onSave() : onClose === null || onClose === void 0 ? void 0 : onClose();
        }
        const currStep = types_1.isWizardParentStep(steps[currentStepIndex])
            ? steps[currentStepIndex + 1]
            : steps[currentStepIndex];
        const prevStep = steps[currentStepIndex - 1];
        setCurrentStepIndex(newStepIndex);
        return onNext === null || onNext === void 0 ? void 0 : onNext(utils_1.normalizeNavStep(currStep, steps), utils_1.normalizeNavStep(prevStep, steps));
    };
    const goToPrevStep = (steps = initialSteps) => {
        const newStepIndex = findLastIndex_1.default(steps, (step, index) => index + 1 < currentStepIndex && !step.isHidden && !types_1.isWizardParentStep(step)) + 1;
        const currStep = types_1.isWizardParentStep(steps[currentStepIndex - 2])
            ? steps[currentStepIndex - 3]
            : steps[currentStepIndex - 2];
        const prevStep = steps[currentStepIndex - 1];
        setCurrentStepIndex(newStepIndex);
        return onBack === null || onBack === void 0 ? void 0 : onBack(utils_1.normalizeNavStep(currStep, steps), utils_1.normalizeNavStep(prevStep, steps));
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
        return onNavByIndex === null || onNavByIndex === void 0 ? void 0 : onNavByIndex(utils_1.normalizeNavStep(currStep, steps), utils_1.normalizeNavStep(prevStep, steps));
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
    return (react_1.default.createElement(WizardContext_1.WizardContextProvider, { steps: initialSteps, currentStepIndex: currentStepIndex, footer: footer, isStepVisitRequired: isStepVisitRequired, onNext: goToNextStep, onBack: goToPrevStep, onClose: onClose, goToStepById: goToStepById, goToStepByName: goToStepByName, goToStepByIndex: goToStepByIndex },
        react_1.default.createElement("div", Object.assign({ className: react_styles_1.css(wizard_1.default.wizard, className), style: Object.assign(Object.assign({}, (height ? { height } : {})), (width ? { width } : {})) }, wrapperProps),
            header,
            react_1.default.createElement(WizardInternal, { nav: nav, hasUnmountedSteps: hasUnmountedSteps, isStepVisitRequired: isStepVisitRequired }))));
};
exports.Wizard = Wizard;
const WizardInternal = ({ nav, hasUnmountedSteps, isStepVisitRequired }) => {
    const { currentStep, steps, footer, goToStepByIndex } = WizardContext_1.useWizardContext();
    const [isNavExpanded, setIsNavExpanded] = react_1.default.useState(false);
    const wizardNav = react_1.default.useMemo(() => {
        if (types_1.isCustomWizardNav(nav)) {
            return typeof nav === 'function' ? nav(isNavExpanded, steps, currentStep, goToStepByIndex) : nav;
        }
        return react_1.default.createElement(WizardNavInternal_1.WizardNavInternal, { nav: nav, isNavExpanded: isNavExpanded, isStepVisitRequired: isStepVisitRequired });
    }, [currentStep, isStepVisitRequired, goToStepByIndex, isNavExpanded, nav, steps]);
    return (react_1.default.createElement(WizardToggle_1.WizardToggle, { nav: wizardNav, footer: footer, steps: steps, currentStep: currentStep, isNavExpanded: isNavExpanded, toggleNavExpanded: () => setIsNavExpanded(prevIsExpanded => !prevIsExpanded), hasUnmountedSteps: hasUnmountedSteps }));
};
exports.Wizard.displayName = 'Wizard';
//# sourceMappingURL=Wizard.js.map