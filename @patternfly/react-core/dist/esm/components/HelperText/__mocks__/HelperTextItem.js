import React from 'react';
export const HelperTextItem = ({ children, variant }) => (React.createElement(React.Fragment, null,
    React.createElement("div", { "data-testid": "helper-text-item-children-container" }, children),
    React.createElement("p", null, `variant: ${variant}`)));
//# sourceMappingURL=HelperTextItem.js.map