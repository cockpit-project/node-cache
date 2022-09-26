"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardToggleInternal = exports.WizardToggle = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const wizard_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Wizard/wizard"));
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const caret_down_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/caret-down-icon'));
const constants_1 = require("../../../helpers/constants");
const Wizard_1 = require("../Wizard");
const types_1 = require("./types");
const WizardContext_1 = require("./WizardContext");
const WizardToggle = ({ steps, activeStep, footer, nav, isNavExpanded, toggleNavExpanded, unmountInactiveSteps = true, 'aria-label': ariaLabel = 'Wizard toggle' }) => {
    const isActiveSubStep = types_1.isWizardSubStep(activeStep);
    const handleKeyClicks = react_1.default.useCallback((event) => {
        if (isNavExpanded && event.key === constants_1.KeyTypes.Escape) {
            toggleNavExpanded();
        }
    }, [isNavExpanded, toggleNavExpanded]);
    // Open/close collapsable nav on keydown event
    react_1.default.useEffect(() => {
        const target = typeof document !== 'undefined' ? document.body : null;
        target === null || target === void 0 ? void 0 : target.addEventListener('keydown', handleKeyClicks, false);
        return () => {
            target === null || target === void 0 ? void 0 : target.removeEventListener('keydown', handleKeyClicks, false);
        };
    }, [handleKeyClicks]);
    // Only render the active step when unmountInactiveSteps is true
    const bodyContent = unmountInactiveSteps
        ? activeStep === null || activeStep === void 0 ? void 0 : activeStep.component
        : steps.map(step => {
            if ((activeStep === null || activeStep === void 0 ? void 0 : activeStep.name) === step.name) {
                return step.component;
            }
            return (react_1.default.createElement("div", { key: step.id, style: { display: 'none' } }, step.component));
        });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { onClick: toggleNavExpanded, className: react_styles_1.css(wizard_1.default.wizardToggle, isNavExpanded && 'pf-m-expanded'), "aria-label": ariaLabel, "aria-expanded": isNavExpanded },
            react_1.default.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleList) },
                react_1.default.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleListItem) }, activeStep === null || activeStep === void 0 ? void 0 :
                    activeStep.name,
                    isActiveSubStep && react_1.default.createElement(angle_right_icon_1.default, { className: react_styles_1.css(wizard_1.default.wizardToggleSeparator), "aria-hidden": "true" })),
                isActiveSubStep && react_1.default.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleListItem) }, activeStep === null || activeStep === void 0 ? void 0 : activeStep.name)),
            react_1.default.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleIcon) },
                react_1.default.createElement(caret_down_icon_1.default, { "aria-hidden": "true" }))),
        react_1.default.createElement("div", { className: react_styles_1.css(wizard_1.default.wizardOuterWrap) },
            react_1.default.createElement("div", { className: react_styles_1.css(wizard_1.default.wizardInnerWrap) },
                nav,
                bodyContent),
            footer)));
};
exports.WizardToggle = WizardToggle;
const WizardToggleInternal = ({ nav, unmountInactiveSteps }) => {
    const [isNavExpanded, setIsNavExpanded] = react_1.default.useState(false);
    const { activeStep, steps, footer, goToStepByIndex } = WizardContext_1.useWizardContext();
    const wizardNav = react_1.default.useMemo(() => {
        if (types_1.isCustomWizardNav(nav)) {
            return nav(isNavExpanded, steps, activeStep, goToStepByIndex);
        }
        const navProps = Object.assign({ isExpanded: isNavExpanded, 'aria-label': (nav === null || nav === void 0 ? void 0 : nav.ariaLabel) || 'Wizard nav' }, ((nav === null || nav === void 0 ? void 0 : nav.ariaLabelledBy) && { 'aria-labelledby': nav === null || nav === void 0 ? void 0 : nav.ariaLabelledBy }));
        return (react_1.default.createElement(Wizard_1.WizardNav, Object.assign({}, navProps), steps.map((step, index) => {
            var _a;
            const stepIndex = index + 1;
            const stepNavItem = step.navItem && react_1.default.createElement(react_1.default.Fragment, { key: step.id }, step.navItem);
            if (types_1.isWizardParentStep(step)) {
                let firstSubStepIndex;
                let hasActiveChild = false;
                const subNavItems = (_a = step.subStepIds) === null || _a === void 0 ? void 0 : _a.map((subStepId, index) => {
                    const subStep = steps.find(step => step.id === subStepId);
                    const subStepIndex = steps.indexOf(subStep) + 1;
                    if (index === 0) {
                        firstSubStepIndex = subStepIndex;
                    }
                    if ((activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === subStep.id) {
                        hasActiveChild = true;
                    }
                    return subStep.navItem ? (react_1.default.createElement(react_1.default.Fragment, { key: subStep.id }, subStep.navItem)) : (react_1.default.createElement(Wizard_1.WizardNavItem, { key: subStep.id, id: subStep.id, content: subStep.name, isCurrent: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === subStep.id, isDisabled: subStep.isDisabled || ((nav === null || nav === void 0 ? void 0 : nav.forceStepVisit) && !subStep.visited), step: subStepIndex, onNavItemClick: goToStepByIndex }));
                });
                const hasEnabledChildren = react_1.default.Children.toArray(subNavItems).some(child => react_1.default.isValidElement(child) && !child.props.isDisabled);
                return (stepNavItem || (react_1.default.createElement(Wizard_1.WizardNavItem, { key: step.id, id: step.id, content: step.name, isExpandable: nav === null || nav === void 0 ? void 0 : nav.isExpandable, isCurrent: hasActiveChild, isDisabled: !hasEnabledChildren, step: firstSubStepIndex, onNavItemClick: goToStepByIndex },
                    react_1.default.createElement(Wizard_1.WizardNav, Object.assign({}, navProps, { returnList: true }), subNavItems))));
            }
            if (types_1.isWizardBasicStep(step)) {
                return (stepNavItem || (react_1.default.createElement(Wizard_1.WizardNavItem, { key: step.id, id: step.id, content: step.name, isCurrent: (activeStep === null || activeStep === void 0 ? void 0 : activeStep.id) === step.id, isDisabled: step.isDisabled || ((nav === null || nav === void 0 ? void 0 : nav.forceStepVisit) && !step.visited), step: stepIndex, onNavItemClick: goToStepByIndex })));
            }
        })));
    }, [activeStep, goToStepByIndex, isNavExpanded, nav, steps]);
    return (react_1.default.createElement(exports.WizardToggle, { nav: wizardNav, footer: footer, steps: steps, activeStep: activeStep, isNavExpanded: isNavExpanded, toggleNavExpanded: () => setIsNavExpanded(prevIsExpanded => !prevIsExpanded), unmountInactiveSteps: unmountInactiveSteps }));
};
exports.WizardToggleInternal = WizardToggleInternal;
exports.WizardToggle.displayName = 'WizardToggle';
//# sourceMappingURL=WizardToggle.js.map