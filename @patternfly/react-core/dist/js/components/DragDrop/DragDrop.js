"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragDrop = exports.DragDropContext = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
exports.DragDropContext = React.createContext({
    onDrag: (_source) => true,
    onDrop: (_source, _dest) => false
});
const DragDrop = ({ children, onDrag = () => true, onDrop = () => false }) => React.createElement(exports.DragDropContext.Provider, { value: { onDrag, onDrop } }, children);
exports.DragDrop = DragDrop;
exports.DragDrop.displayName = 'DragDrop';
//# sourceMappingURL=DragDrop.js.map