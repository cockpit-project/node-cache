import * as React from 'react';
export interface DraggableProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside DragDrop */
    children?: React.ReactNode;
    /** Class to add to outer div */
    className?: string;
}
export declare const Draggable: React.FunctionComponent<DraggableProps>;
//# sourceMappingURL=Draggable.d.ts.map