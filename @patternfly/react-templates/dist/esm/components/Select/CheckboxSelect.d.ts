import React from 'react';
import { MenuToggleProps, SelectOptionProps, SelectProps } from '@patternfly/react-core';
export interface CheckboxSelectOption extends Omit<SelectOptionProps, 'content'> {
    /** Content of the select option. */
    content: React.ReactNode;
    /** Value of the select option. */
    value: string | number;
}
export interface CheckboxSelectProps extends Omit<SelectProps, 'toggle'> {
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Initial options of the select. */
    initialOptions?: CheckboxSelectOption[];
    /** Callback triggered on selection. */
    onSelect?: (_event: React.MouseEvent<Element, MouseEvent>, value?: string | number) => void;
    /** Callback triggered when the select opens or closes. */
    onToggle?: (nextIsOpen: boolean) => void;
    /** Flag indicating the select should be disabled. */
    isDisabled?: boolean;
    /** Content of the toggle. Defaults to a string with badge count of selected options. */
    toggleContent?: React.ReactNode;
    /** Width of the toggle. */
    toggleWidth?: string;
    /** Additional props passed to the toggle. */
    toggleProps?: MenuToggleProps;
}
export declare const CheckboxSelect: React.ForwardRefExoticComponent<CheckboxSelectProps & React.RefAttributes<any>>;
//# sourceMappingURL=CheckboxSelect.d.ts.map