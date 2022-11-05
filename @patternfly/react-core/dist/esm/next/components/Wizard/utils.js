import { __rest } from "tslib";
import React from 'react';
import { WizardStep } from './WizardStep';
/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardControlStep[]
 */
export const buildSteps = (children) => React.Children.toArray(children).reduce((acc, child) => {
    if (isWizardStep(child)) {
        const { steps: subSteps, id } = child.props;
        acc.push(Object.assign(Object.assign({ component: child }, normalizeStep(child.props)), (subSteps && {
            subStepIds: subSteps === null || subSteps === void 0 ? void 0 : subSteps.map(subStep => {
                acc.push(Object.assign(Object.assign({}, normalizeStep(subStep.props)), { component: subStep, parentId: id }));
                return subStep.props.id;
            })
        })));
    }
    else {
        throw new Error('Wizard only accepts children of type WizardStep');
    }
    return acc;
}, []);
export function isWizardStep(child) {
    var _a, _b;
    return ((React.isValidElement(child) && child.type === WizardStep) ||
        (((_a = child.props) === null || _a === void 0 ? void 0 : _a.name) !== undefined && ((_b = child.props) === null || _b === void 0 ? void 0 : _b.id) !== undefined));
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const normalizeStep = (_a) => {
    var { children, steps, body } = _a, controlStep = __rest(_a, ["children", "steps", "body"]);
    return controlStep;
};
export const normalizeNavStep = (navStep, steps) => ({
    id: navStep.id,
    name: navStep.name.toString(),
    index: steps.indexOf(navStep) + 1
});
export const getCurrentStep = (steps, currentStepIndex) => steps.find((_, index) => index + 1 === currentStepIndex);
//# sourceMappingURL=utils.js.map