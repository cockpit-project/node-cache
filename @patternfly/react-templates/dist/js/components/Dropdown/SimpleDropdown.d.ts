import React from 'react';
import { DropdownItemProps, DropdownProps } from '@patternfly/react-core/dist/esm/components/Dropdown';
import { MenuToggleProps } from '@patternfly/react-core/dist/esm/components/MenuToggle';
import { OUIAProps } from '@patternfly/react-core/dist/esm/helpers';
export interface SimpleDropdownItem extends Omit<DropdownItemProps, 'content'> {
    /** Content of the dropdown item. If the isDivider prop is true, this prop will be ignored. */
    content?: React.ReactNode;
    /** Unique identifier for the dropdown item, which is used in the dropdown onSelect callback */
    value: string | number;
    /** Callback for when the dropdown item is clicked. */
    onClick?: (event?: any) => void;
    /** URL to redirect to when the dropdown item is clicked. */
    to?: string;
    /** Flag indicating whether the dropdown item should render as a divider. If true, the item will be rendered without
     * the dropdown item wrapper.
     */
    isDivider?: boolean;
}
export interface SimpleDropdownProps extends Omit<DropdownProps, 'toggle'>, OUIAProps {
    /** Initial items of the dropdown. */
    initialItems?: SimpleDropdownItem[];
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Flag indicating the dropdown should be disabled. */
    isDisabled?: boolean;
    /** Flag indicated whether the dropdown toggle should take up the full width of its parent. */
    isToggleFullWidth?: boolean;
    /** Callback triggered when any dropdown item is clicked. */
    onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, value?: string | number) => void;
    /** Callback triggered when the dropdown toggle opens or closes. */
    onToggle?: (nextIsOpen: boolean) => void;
    /** Flag indicating the dropdown toggle should be focused after a dropdown item is clicked. */
    shouldFocusToggleOnSelect?: boolean;
    /** Adds an accessible name to the dropdown toggle. Required when the dropdown toggle does not
     * have any text content.
     */
    toggleAriaLabel?: string;
    /** Content of the toggle. */
    toggleContent: React.ReactNode;
    /** Variant style of the dropdown toggle. */
    toggleVariant?: 'default' | 'plain' | 'plainText';
    /** Width of the toggle. */
    toggleWidth?: string;
    /** Additional props passed to the toggle. */
    toggleProps?: MenuToggleProps;
}
export declare const SimpleDropdown: React.ForwardRefExoticComponent<SimpleDropdownProps & React.RefAttributes<any>>;
//# sourceMappingURL=SimpleDropdown.d.ts.map