"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWizardContext = exports.WizardContextProvider = exports.WizardContext = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const types_1 = require("./types");
const utils_1 = require("./utils");
const WizardFooter_1 = require("./WizardFooter");
exports.WizardContext = react_1.default.createContext({});
// eslint-disable-next-line patternfly-react/no-anonymous-functions
const WizardContextProvider = ({ steps: initialSteps, footer: initialFooter, currentStepIndex, children, onNext, onBack, onClose, goToStepById, goToStepByName, goToStepByIndex }) => {
    const [steps, setSteps] = react_1.default.useState(initialSteps);
    const [footer, setFooter] = react_1.default.useState(initialFooter);
    const activeStep = utils_1.getActiveStep(steps, currentStepIndex);
    const wizardFooter = react_1.default.useMemo(() => {
        var _a;
        return types_1.isCustomWizardFooter(footer) ? (react_1.default.createElement("div", { className: react_styles_1.css(wizard_1.default.wizardFooter) }, footer)) : (react_1.default.createElement(WizardFooter_1.WizardFooter, Object.assign({ activeStep: activeStep, onNext: onNext, onBack: onBack, onClose: onClose, disableBackButton: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === ((_a = steps[0]) === null || _a === void 0 ? void 0 : _a.id) }, footer)));
    }, [activeStep, footer, onBack, onClose, onNext, steps]);
    // When the active step changes and the newly active step isn't visited, set the visited flag to true.
    react_1.default.useEffect(() => {
        if (activeStep && !(activeStep === null || activeStep === void 0 ? void 0 : activeStep.visited)) {
            setSteps(prevSteps => prevSteps.map(step => {
                if (step.id === activeStep.id) {
                    return Object.assign(Object.assign({}, step), { visited: true });
                }
                return step;
            }));
        }
    }, [activeStep]);
    return (react_1.default.createElement(exports.WizardContext.Provider, { value: {
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
exports.WizardContextProvider = WizardContextProvider;
const useWizardContext = () => react_1.default.useContext(exports.WizardContext);
exports.useWizardContext = useWizardContext;
//# sourceMappingURL=WizardContext.js.map