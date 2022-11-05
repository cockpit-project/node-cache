"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardToggle = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const caret_down_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/caret-down-icon'));
const constants_1 = require("../../../helpers/constants");
const types_1 = require("./types");
const WizardToggle = ({ steps, currentStep, footer, nav, isNavExpanded, toggleNavExpanded, hasUnmountedSteps = true, 'aria-label': ariaLabel = 'Wizard toggle' }) => {
    const isActiveSubStep = types_1.isWizardSubStep(currentStep);
    const nonSubSteps = steps.filter(step => !types_1.isWizardSubStep(step));
    const wizardToggleIndex = nonSubSteps.indexOf(types_1.isWizardSubStep(currentStep) ? steps.find(step => step.id === currentStep.parentId) : currentStep) + 1;
    const handleKeyClicks = react_1.default.useCallback((event) => {
        if (isNavExpanded && event.key === constants_1.KeyTypes.Escape) {
            toggleNavExpanded();
        }
    }, [isNavExpanded, toggleNavExpanded]);
    // Open/close collapsable navigation on keydown event
    react_1.default.useEffect(() => {
        const target = typeof document !== 'undefined' ? document.body : null;
        target === null || target === void 0 ? void 0 : target.addEventListener('keydown', handleKeyClicks, false);
        return () => {
            target === null || target === void 0 ? void 0 : target.removeEventListener('keydown', handleKeyClicks, false);
        };
    }, [handleKeyClicks]);
    // Only render the current step when hasUnmountedSteps is true
    const bodyContent = hasUnmountedSteps
        ? currentStep === null || currentStep === void 0 ? void 0 : currentStep.component
        : steps.map(step => {
            if ((currentStep === null || currentStep === void 0 ? void 0 : currentStep.name) === step.name) {
                return step.component;
            }
            return (react_1.default.createElement("div", { key: step.id, style: { display: 'none' } }, step.component));
        });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { onClick: toggleNavExpanded, className: react_styles_1.css(wizard_1.default.wizardToggle, isNavExpanded && 'pf-m-expanded'), "aria-label": ariaLabel, "aria-expanded": isNavExpanded },
            react_1.default.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleList) },
                react_1.default.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleListItem) },
                    react_1.default.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleNum) }, wizardToggleIndex),
                    " ", currentStep === null || currentStep === void 0 ? void 0 :
                    currentStep.name,
                    isActiveSubStep && react_1.default.createElement(angle_right_icon_1.default, { className: react_styles_1.css(wizard_1.default.wizardToggleSeparator), "aria-hidden": "true" })),
                isActiveSubStep && react_1.default.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleListItem) }, currentStep === null || currentStep === void 0 ? void 0 : currentStep.name)),
            react_1.default.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleIcon) },
                react_1.default.createElement(caret_down_icon_1.default, { "aria-hidden": "true" }))),
        react_1.default.createElement("div", { className: react_styles_1.css(wizard_1.default.wizardOuterWrap) },
            react_1.default.createElement("div", { className: react_styles_1.css(wizard_1.default.wizardInnerWrap) },
                nav,
                bodyContent),
            footer)));
};
exports.WizardToggle = WizardToggle;
exports.WizardToggle.displayName = 'WizardToggle';
//# sourceMappingURL=WizardToggle.js.map