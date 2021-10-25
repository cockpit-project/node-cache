import * as React from 'react';
export interface ProgressStepProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    /** Content rendered inside the progress step. */
    children?: React.ReactNode;
    /** Additional classes applied to the progress step container. */
    className?: string;
    /** Variant of the progress step. Each variant has a default icon. */
    variant?: 'default' | 'success' | 'info' | 'pending' | 'warning' | 'danger';
    /** Flag indicating the progress step is the current step. */
    isCurrent?: boolean;
    /** Custom icon of a progress step. Will override default icons provided by the variant. */
    icon?: React.ReactNode;
    /** Description text of a progress step. */
    description?: string;
    /** ID of the title of the progress step. */
    titleId?: string;
}
export declare const ProgressStep: React.FunctionComponent<ProgressStepProps>;
//# sourceMappingURL=ProgressStep.d.ts.map