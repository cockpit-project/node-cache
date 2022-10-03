import React from 'react';
import { WizardNavProps } from '../Wizard';
import { WizardControlStep, DefaultWizardNavProps, CustomWizardNavFunction } from './types';
/**
 * Used to toggle between step content, including the body and footer. This is also where the nav and its expandability is controlled.
 */
export interface WizardToggleProps {
    /** List of steps and/or sub-steps */
    steps: WizardControlStep[];
    /** The currently active WizardStep */
    activeStep: WizardControlStep;
    /** Wizard footer */
    footer: React.ReactElement;
    /** Wizard nav */
    nav: React.ReactElement<WizardNavProps>;
    /** The expandable dropdown button's aria-label */
    'aria-label'?: string;
    /** Flag to unmount inactive steps instead of hiding. Defaults to true */
    unmountInactiveSteps?: boolean;
    /** Flag to determine whether the dropdown nav is expanded */
    isNavExpanded?: boolean;
    /** Callback to expand or collapse the dropdown nav */
    toggleNavExpanded?: () => void;
}
export declare const WizardToggle: {
    ({ steps, activeStep, footer, nav, isNavExpanded, toggleNavExpanded, unmountInactiveSteps, "aria-label": ariaLabel }: WizardToggleProps): JSX.Element;
    displayName: string;
};
interface WizardToggleInternalProps extends Pick<WizardToggleProps, 'unmountInactiveSteps'> {
    /** Custom WizardNav or callback used to create a default WizardNav */
    nav?: DefaultWizardNavProps | CustomWizardNavFunction;
}
export declare const WizardToggleInternal: ({ nav, unmountInactiveSteps }: WizardToggleInternalProps) => JSX.Element;
export {};
//# sourceMappingURL=WizardToggle.d.ts.map