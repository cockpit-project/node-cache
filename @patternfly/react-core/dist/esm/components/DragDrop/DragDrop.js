import * as React from 'react';
export const DragDropContext = React.createContext({
    onDrag: (_source) => true,
    onDrop: (_source, _dest) => false
});
export const DragDrop = ({ children, onDrag = () => true, onDrop = () => false }) => React.createElement(DragDropContext.Provider, { value: { onDrag, onDrop } }, children);
DragDrop.displayName = 'DragDrop';
//# sourceMappingURL=DragDrop.js.map