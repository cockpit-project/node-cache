import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import { KeyTypes } from '../../../helpers/constants';
import { isWizardSubStep } from './types';
export const WizardToggle = ({ steps, currentStep, footer, nav, isNavExpanded, toggleNavExpanded, hasUnmountedSteps = true, 'aria-label': ariaLabel = 'Wizard toggle' }) => {
    const isActiveSubStep = isWizardSubStep(currentStep);
    const nonSubSteps = steps.filter(step => !isWizardSubStep(step));
    const wizardToggleIndex = nonSubSteps.indexOf(isWizardSubStep(currentStep) ? steps.find(step => step.id === currentStep.parentId) : currentStep) + 1;
    const handleKeyClicks = React.useCallback((event) => {
        if (isNavExpanded && event.key === KeyTypes.Escape) {
            toggleNavExpanded();
        }
    }, [isNavExpanded, toggleNavExpanded]);
    // Open/close collapsable navigation on keydown event
    React.useEffect(() => {
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
            return (React.createElement("div", { key: step.id, style: { display: 'none' } }, step.component));
        });
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: toggleNavExpanded, className: css(styles.wizardToggle, isNavExpanded && 'pf-m-expanded'), "aria-label": ariaLabel, "aria-expanded": isNavExpanded },
            React.createElement("span", { className: css(styles.wizardToggleList) },
                React.createElement("span", { className: css(styles.wizardToggleListItem) },
                    React.createElement("span", { className: css(styles.wizardToggleNum) }, wizardToggleIndex),
                    " ", currentStep === null || currentStep === void 0 ? void 0 :
                    currentStep.name,
                    isActiveSubStep && React.createElement(AngleRightIcon, { className: css(styles.wizardToggleSeparator), "aria-hidden": "true" })),
                isActiveSubStep && React.createElement("span", { className: css(styles.wizardToggleListItem) }, currentStep === null || currentStep === void 0 ? void 0 : currentStep.name)),
            React.createElement("span", { className: css(styles.wizardToggleIcon) },
                React.createElement(CaretDownIcon, { "aria-hidden": "true" }))),
        React.createElement("div", { className: css(styles.wizardOuterWrap) },
            React.createElement("div", { className: css(styles.wizardInnerWrap) },
                nav,
                bodyContent),
            footer)));
};
WizardToggle.displayName = 'WizardToggle';
//# sourceMappingURL=WizardToggle.js.map