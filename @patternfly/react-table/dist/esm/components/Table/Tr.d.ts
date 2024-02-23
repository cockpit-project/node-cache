import * as React from 'react';
import { OUIAProps } from '@patternfly/react-core/dist/esm/helpers';
export interface TrProps extends Omit<React.HTMLProps<HTMLTableRowElement>, 'onResize'>, OUIAProps {
    /** Content rendered inside the <tr> row */
    children?: React.ReactNode;
    /** Additional classes added to the <tr> row  */
    className?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
    /** Flag indicating the Tr is hidden */
    isHidden?: boolean;
    /** Only applicable to Tr within the Tbody: Makes the row expandable and determines if it's expanded or not.
     * To prevent column widths from responding automatically when expandable rows are toggled, the width prop must also be passed into either the th or td component
     */
    isExpanded?: boolean;
    /** Only applicable to Tr within the Tbody: Whether the row is editable */
    isEditable?: boolean;
    /** Flag which adds hover styles for the clickable table row */
    isClickable?: boolean;
    /** Flag indicating the row is selected - adds selected styling */
    isRowSelected?: boolean;
    /** Flag indicating the row is striped */
    isStriped?: boolean;
    /** Flag indicating the row will act as a border. This is typically used for a table with a nested and sticky header. */
    isBorderRow?: boolean;
    /** An event handler for the row */
    onRowClick?: (event?: React.KeyboardEvent | React.MouseEvent) => void;
    /** Flag indicating that the row is selectable */
    isSelectable?: boolean;
    /** Flag indicating the spacing offset of the first cell should be reset */
    resetOffset?: boolean;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const Tr: React.ForwardRefExoticComponent<Omit<TrProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
//# sourceMappingURL=Tr.d.ts.map