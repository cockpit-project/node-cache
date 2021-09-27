"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Droppable = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const DroppableContext_1 = require("./DroppableContext");
const Droppable = (_a) => {
    var { className, children, zone = 'defaultZone', droppableId = 'defaultId' } = _a, props = tslib_1.__rest(_a, ["className", "children", "zone", "droppableId"]);
    return (React.createElement(DroppableContext_1.DroppableContext.Provider, { value: { zone, droppableId } },
        React.createElement("div", Object.assign({ "data-pf-droppable": zone, "data-pf-droppableid": droppableId, className: className }, props), children)));
};
exports.Droppable = Droppable;
exports.Droppable.displayName = 'Droppable';
//# sourceMappingURL=Droppable.js.map