import React from 'react';
export const HelperText = ({ children, isLiveRegion }) => (React.createElement(React.Fragment, null,
    React.createElement("div", { "data-testid": "helper-text-children-container" }, children),
    React.createElement("p", null, `isLiveRegion: ${isLiveRegion}`)));
//# sourceMappingURL=HelperText.js.map