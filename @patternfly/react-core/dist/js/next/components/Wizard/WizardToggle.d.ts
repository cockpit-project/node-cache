import React from 'react';
import { WizardNavProps } from '../Wizard';
import { WizardControlStep } from './types';
/**
 * Used to toggle between step content, including the body and footer. This is also where the navigation and its expandability is controlled.
 */
export interface WizardToggleProps {
    /** List of steps and/or sub-steps */
    steps: WizardControlStep[];
    /** The current step */
    currentStep: WizardControlStep;
    /** Wizard footer */
    footer: React.ReactElement;
    /** Wizard navigation */
    nav: React.ReactElement<WizardNavProps>;
    /** The expandable dropdown button's aria-label */
    'aria-label'?: string;
    /** Flag to unmount inactive steps instead of hiding. Defaults to true */
    hasUnmountedSteps?: boolean;
    /** Flag to determine whether the dropdown navigation is expanded */
    isNavExpanded?: boolean;
    /** Callback to expand or collapse the dropdown navigation */
    toggleNavExpanded?: () => void;
}
export declare const WizardToggle: {
    ({ steps, currentStep, footer, nav, isNavExpanded, toggleNavExpanded, hasUnmountedSteps, "aria-label": ariaLabel }: WizardToggleProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=WizardToggle.d.ts.map