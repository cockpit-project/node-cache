import * as React from 'react';
import { SelectOptionObject } from '@patternfly/react-core/dist/esm/components/Select';
import { EditableSelectInputProps } from './base';
export interface IEditableSelectInputCell extends Omit<React.HTMLProps<HTMLElement | HTMLDivElement>, 'onSelect'> {
    /** Row index of this select input cell */
    rowIndex: number;
    /** Cell index of this select input cell */
    cellIndex: number;
    /** Props to build the select component */
    props: EditableSelectInputProps;
    /** Event handler which fires when user selects an option in this cell */
    onSelect: (newValue: string | SelectOptionObject, event: React.MouseEvent | React.ChangeEvent, rowIndex: number, cellIndex: number, isPlaceholder?: boolean) => void;
    /** Options to display in the expandable select menu */
    options?: React.ReactElement[];
    /** Flag indicating the select input is disabled */
    isDisabled?: boolean;
    /** Current selected options to display as the read only value of the table cell */
    selections?: string | SelectOptionObject | (string | SelectOptionObject)[];
    /** Flag indicating the select menu is open */
    isOpen?: boolean;
    /** Event handler which fires when the select toggle is toggled */
    onToggle?: (isExpanded: boolean) => void;
    /** Event handler which fires when the user clears the selections */
    clearSelection?: (rowIndex: number, cellIndex: number, event?: React.MouseEvent) => void;
}
export declare const EditableSelectInputCell: React.FunctionComponent<IEditableSelectInputCell>;
//# sourceMappingURL=EditableSelectInputCell.d.ts.map