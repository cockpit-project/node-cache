import React from 'react';
import { SelectOptionProps, MenuToggleProps, SelectProps } from '@patternfly/react-core';
export interface MultiTypeaheadSelectOption extends Omit<SelectOptionProps, 'content'> {
    /** Content of the select option. */
    content: string | number;
    /** Value of the select option. */
    value: string | number;
}
export interface MultiTypeaheadSelectProps extends Omit<SelectProps, 'toggle' | 'onSelect'> {
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Initial options of the select. */
    initialOptions: MultiTypeaheadSelectOption[];
    /** Callback triggered on selection. */
    onSelectionChange?: (_event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<HTMLInputElement>, selections: (string | number)[]) => void;
    /** Callback triggered when the select opens or closes. */
    onToggle?: (nextIsOpen: boolean) => void;
    /** Callback triggered when the text in the input field changes. */
    onInputChange?: (newValue: string) => void;
    /** Placeholder text for the select input. */
    placeholder?: string;
    /** Message to display when no options match the filter. */
    noOptionsFoundMessage?: string | ((filter: string) => string);
    /** Flag indicating the select should be disabled. */
    isDisabled?: boolean;
    /** Width of the toggle. */
    toggleWidth?: string;
    /** Additional props passed to the toggle. */
    toggleProps?: MenuToggleProps;
}
export declare const MultiTypeaheadSelectBase: React.FunctionComponent<MultiTypeaheadSelectProps>;
export declare const MultiTypeaheadSelect: React.ForwardRefExoticComponent<MultiTypeaheadSelectProps & React.RefAttributes<any>>;
//# sourceMappingURL=MultiTypeaheadSelect.d.ts.map