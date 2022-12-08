import React from 'react';
import { isCustomWizardNavItem, isWizardBasicStep, isWizardParentStep } from './types';
import { useWizardContext } from './WizardContext';
import { WizardNav } from './WizardNav';
import { WizardNavItem } from './WizardNavItem';
export const WizardNavInternal = ({ nav, isStepVisitRequired, isNavExpanded }) => {
    const { currentStep, steps, goToStepByIndex } = useWizardContext();
    const wizardNavProps = Object.assign({ isExpanded: isNavExpanded, 'aria-label': (nav === null || nav === void 0 ? void 0 : nav['aria-label']) || 'Wizard steps' }, ((nav === null || nav === void 0 ? void 0 : nav['aria-labelledby']) && {
        'aria-labelledby': nav['aria-labelledby']
    }));
    return (React.createElement(WizardNav, Object.assign({}, wizardNavProps), steps.map((step, index) => {
        var _a;
        const stepIndex = index + 1;
        const customStepNavItem = isCustomWizardNavItem(step.navItem) && (React.createElement(React.Fragment, { key: step.id }, typeof step.navItem === 'function'
            ? step.navItem(step, currentStep, steps, goToStepByIndex)
            : step.navItem));
        if (isWizardParentStep(step) && !step.isHidden) {
            let firstSubStepIndex;
            let hasActiveChild = false;
            const subNavItems = (_a = step.subStepIds) === null || _a === void 0 ? void 0 : _a.map((subStepId, subStepIndex) => {
                const subStep = steps.find(step => step.id === subStepId);
                const subStepOrderIndex = steps.indexOf(subStep) + 1;
                const customSubStepNavItem = isCustomWizardNavItem(subStep.navItem) && (React.createElement(React.Fragment, { key: subStep.id }, typeof subStep.navItem === 'function'
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
                return (customSubStepNavItem || (React.createElement(WizardNavItem, Object.assign({ key: subStep.id, id: subStep.id, content: subStep.name, isCurrent: (currentStep === null || currentStep === void 0 ? void 0 : currentStep.id) === subStep.id, isDisabled: subStep.isDisabled || (isStepVisitRequired && !subStep.isVisited), isVisited: subStep.isVisited, stepIndex: subStepOrderIndex, onNavItemClick: goToStepByIndex, status: subStep.status }, subStep.navItem))));
            });
            const hasEnabledChildren = React.Children.toArray(subNavItems).some(child => React.isValidElement(child) && !child.props.isDisabled);
            return (customStepNavItem || (React.createElement(WizardNavItem, Object.assign({ key: step.id, id: step.id, content: step.name, isExpandable: true, isCurrent: hasActiveChild, isDisabled: !hasEnabledChildren, isVisited: step.isVisited, stepIndex: firstSubStepIndex, onNavItemClick: goToStepByIndex, status: step.status }, step.navItem),
                React.createElement(WizardNav, Object.assign({}, wizardNavProps, { isInnerList: true }), subNavItems))));
        }
        if (isWizardBasicStep(step) && !step.isHidden) {
            return (customStepNavItem || (React.createElement(WizardNavItem, Object.assign({ key: step.id, id: step.id, content: step.name, isCurrent: (currentStep === null || currentStep === void 0 ? void 0 : currentStep.id) === step.id, isDisabled: step.isDisabled || (isStepVisitRequired && !step.isVisited), isVisited: step.isVisited, stepIndex: stepIndex, onNavItemClick: goToStepByIndex, status: step.status }, step.navItem))));
        }
    })));
};
//# sourceMappingURL=WizardNavInternal.js.map