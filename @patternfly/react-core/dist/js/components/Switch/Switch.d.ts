import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface SwitchProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'>, OUIAProps {
    /** id for the label. */
    id?: string;
    /** Additional classes added to the switch */
    className?: string;
    /** Text value for the label when on */
    label?: React.ReactNode;
    /** Text value for the label when off */
    labelOff?: React.ReactNode;
    /** Flag to show if the switch is checked. */
    isChecked?: boolean;
    /** Flag to show if the switch has a check icon. */
    hasCheckIcon?: boolean;
    /** Flag to show if the switch is disabled. */
    isDisabled?: boolean;
    /** A callback for when the switch selection changes. (isChecked, event) => {} */
    onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
    /** Adds accessible text to the switch, and should describe the isChecked="true" state. When label is defined, aria-label should be set to the text string that is visible when isChecked is true. */
    'aria-label'?: string;
    /** Flag to reverse the layout of toggle and label (toggle on right). */
    isReversed?: boolean;
}
export declare class Switch extends React.Component<SwitchProps & OUIAProps, {
    ouiaStateId: string;
}> {
    static displayName: string;
    id: string;
    static defaultProps: SwitchProps;
    constructor(props: SwitchProps & OUIAProps);
    render(): JSX.Element;
}
//# sourceMappingURL=Switch.d.ts.map