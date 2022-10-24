"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardNavInternal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const types_1 = require("./types");
const WizardContext_1 = require("./WizardContext");
const WizardNav_1 = require("./WizardNav");
const WizardNavItem_1 = require("./WizardNavItem");
const WizardNavInternal = ({ nav, isStepVisitRequired, isNavExpanded }) => {
    const { currentStep, steps, goToStepByIndex } = WizardContext_1.useWizardContext();
    const wizardNavProps = Object.assign({ isExpanded: isNavExpanded, 'aria-label': (nav === null || nav === void 0 ? void 0 : nav['aria-label']) || 'Wizard steps' }, ((nav === null || nav === void 0 ? void 0 : nav['aria-labelledby']) && {
        'aria-labelledby': nav['aria-labelledby']
    }));
    return (react_1.default.createElement(WizardNav_1.WizardNav, Object.assign({}, wizardNavProps), steps.map((step, index) => {
        var _a;
        const stepIndex = index + 1;
        const customStepNavItem = types_1.isCustomWizardNavItem(step.navItem) && (react_1.default.createElement(react_1.default.Fragment, { key: step.id }, typeof step.navItem === 'function'
            ? step.navItem(step, currentStep, steps, goToStepByIndex)
            : step.navItem));
        if (types_1.isWizardParentStep(step) && !step.isHidden) {
            let firstSubStepIndex;
            let hasActiveChild = false;
            const subNavItems = (_a = step.subStepIds) === null || _a === void 0 ? void 0 : _a.map((subStepId, subStepIndex) => {
                const subStep = steps.find(step => step.id === subStepId);
                const subStepOrderIndex = steps.indexOf(subStep) + 1;
                const customSubStepNavItem = types_1.isCustomWizardNavItem(subStep.navItem) && (react_1.default.createElement(react_1.default.Fragment, { key: subStep.id }, typeof subStep.navItem === 'function'
                    ? subStep.navItem(subStep, currentStep, steps, goToStepByIndex)
                    : subStep.navItem));
                // Don't render the sub-step navigation item if the hidden property is enabled
                if (subStep.isHidden) {
                    return;
                }
                // Store the first sub-step index so that when its parent is clicked, the first sub-step is focused
                if (subStepIndex === 0) {
                    firstSubStepIndex = subStepOrderIndex;
                }
                // When a sub-step is active, use this flag to set the parent step as active (isCurrent)
                if ((currentStep === null || currentStep === void 0 ? void 0 : currentStep.id) === subStep.id) {
                    hasActiveChild = true;
                }
                return (customSubStepNavItem || (react_1.default.createElement(WizardNavItem_1.WizardNavItem, Object.assign({ key: subStep.id, id: subStep.id, content: subStep.name, isCurrent: (currentStep === null || currentStep === void 0 ? void 0 : currentStep.id) === subStep.id, isDisabled: subStep.isDisabled || (isStepVisitRequired && !subStep.isVisited), isVisited: subStep.isVisited, stepIndex: subStepOrderIndex, onNavItemClick: goToStepByIndex, status: subStep.status }, subStep.navItem))));
            });
            const hasEnabledChildren = react_1.default.Children.toArray(subNavItems).some(child => react_1.default.isValidElement(child) && !child.props.isDisabled);
            return (customStepNavItem || (react_1.default.createElement(WizardNavItem_1.WizardNavItem, Object.assign({ key: step.id, id: step.id, content: step.name, isExpandable: true, isCurrent: hasActiveChild, isDisabled: !hasEnabledChildren, isVisited: step.isVisited, stepIndex: firstSubStepIndex, onNavItemClick: goToStepByIndex, status: step.status }, step.navItem),
                react_1.default.createElement(WizardNav_1.WizardNav, Object.assign({}, wizardNavProps, { isInnerList: true }), subNavItems))));
        }
        if (types_1.isWizardBasicStep(step) && !step.isHidden) {
            return (customStepNavItem || (react_1.default.createElement(WizardNavItem_1.WizardNavItem, Object.assign({ key: step.id, id: step.id, content: step.name, isCurrent: (currentStep === null || currentStep === void 0 ? void 0 : currentStep.id) === step.id, isDisabled: step.isDisabled || (isStepVisitRequired && !step.isVisited), isVisited: step.isVisited, stepIndex: stepIndex, onNavItemClick: goToStepByIndex, status: step.status }, step.navItem))));
        }
    })));
};
exports.WizardNavInternal = WizardNavInternal;
//# sourceMappingURL=WizardNavInternal.js.map