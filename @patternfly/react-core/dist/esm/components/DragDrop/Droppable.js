import { __rest } from "tslib";
import * as React from 'react';
import { DroppableContext } from './DroppableContext';
export const Droppable = (_a) => {
    var { className, children, zone = 'defaultZone', droppableId = 'defaultId' } = _a, props = __rest(_a, ["className", "children", "zone", "droppableId"]);
    return (React.createElement(DroppableContext.Provider, { value: { zone, droppableId } },
        React.createElement("div", Object.assign({ "data-pf-droppable": zone, "data-pf-droppableid": droppableId, className: className }, props), children)));
};
Droppable.displayName = 'Droppable';
//# sourceMappingURL=Droppable.js.map