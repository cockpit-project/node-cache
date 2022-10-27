"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentStep = exports.normalizeNavStep = exports.normalizeStep = exports.isWizardStep = exports.buildSteps = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const WizardStep_1 = require("./WizardStep");
/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardControlStep[]
 */
const buildSteps = (children) => react_1.default.Children.toArray(children).reduce((acc, child) => {
    if (isWizardStep(child)) {
        const { steps: subSteps, id } = child.props;
        acc.push(Object.assign(Object.assign({ component: child }, exports.normalizeStep(child.props)), (subSteps && {
            subStepIds: subSteps === null || subSteps === void 0 ? void 0 : subSteps.map(subStep => {
                acc.push(Object.assign(Object.assign({}, exports.normalizeStep(subStep.props)), { component: subStep, parentId: id }));
                return subStep.props.id;
            })
        })));
    }
    else {
        throw new Error('Wizard only accepts children of type WizardStep');
    }
    return acc;
}, []);
exports.buildSteps = buildSteps;
function isWizardStep(child) {
    var _a, _b;
    return ((react_1.default.isValidElement(child) && child.type === WizardStep_1.WizardStep) ||
        (((_a = child.props) === null || _a === void 0 ? void 0 : _a.name) !== undefined && ((_b = child.props) === null || _b === void 0 ? void 0 : _b.id) !== undefined));
}
exports.isWizardStep = isWizardStep;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const normalizeStep = (_a) => {
    var { children, steps, body } = _a, controlStep = tslib_1.__rest(_a, ["children", "steps", "body"]);
    return controlStep;
};
exports.normalizeStep = normalizeStep;
const normalizeNavStep = (navStep, steps) => ({
    id: navStep.id,
    name: navStep.name.toString(),
    index: steps.indexOf(navStep) + 1
});
exports.normalizeNavStep = normalizeNavStep;
const getCurrentStep = (steps, currentStepIndex) => steps.find((_, index) => index + 1 === currentStepIndex);
exports.getCurrentStep = getCurrentStep;
//# sourceMappingURL=utils.js.map