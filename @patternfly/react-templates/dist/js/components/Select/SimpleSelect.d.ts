import React from 'react';
import { SelectOptionProps, SelectProps } from '@patternfly/react-core/dist/esm/components/Select';
import { MenuToggleProps } from '@patternfly/react-core/dist/esm/components/MenuToggle';
export interface SimpleSelectOption extends Omit<SelectOptionProps, 'content'> {
    /** Content of the select option. */
    content: React.ReactNode;
    /** Value of the select option. */
    value: string | number;
}
export interface SimpleSelectProps extends Omit<SelectProps, 'toggle'> {
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Initial options of the select. */
    initialOptions?: SimpleSelectOption[];
    /** Callback triggered on selection. */
    onSelect?: (_event: React.MouseEvent<Element, MouseEvent>, selection: string | number) => void;
    /** Callback triggered when the select opens or closes. */
    onToggle?: (nextIsOpen: boolean) => void;
    /** Flag indicating the select should be disabled. */
    isDisabled?: boolean;
    /** Content of the toggle. Defaults to the selected option. */
    toggleContent?: React.ReactNode;
    /** Placeholder text for the select input. */
    placeholder?: string;
    /** Width of the toggle. */
    toggleWidth?: string;
    /** Additional props passed to the toggle. */
    toggleProps?: MenuToggleProps;
}
export declare const SimpleSelect: React.ForwardRefExoticComponent<SimpleSelectProps & React.RefAttributes<any>>;
//# sourceMappingURL=SimpleSelect.d.ts.map