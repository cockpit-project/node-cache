import React from 'react';
import { WizardBody } from './WizardBody';
export const WizardStep = ({ body, children }) => body || body === undefined ? React.createElement(WizardBody, Object.assign({}, body), children) : React.createElement(React.Fragment, null, children);
WizardStep.displayName = 'WizardStep';
//# sourceMappingURL=WizardStep.js.map