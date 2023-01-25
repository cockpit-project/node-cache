"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetMergedSteps = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const fast_deep_equal_1 = tslib_1.__importDefault(require("fast-deep-equal"));
/**
 * Get stable ref of combined initial (prop provided) and current (context stored) steps.
 * @param initialSteps
 * @param currentSteps
 * @returns WizardStepType[]
 */
const useGetMergedSteps = (initialSteps, currentSteps) => {
    const initialStepsRef = react_1.default.useRef(initialSteps);
    const currentStepsRef = react_1.default.useRef(currentSteps);
    // Check each value within the array of initialSteps (props) and currentSteps (context).
    // If any value changes for either of these, update the reference.
    if (!(0, fast_deep_equal_1.default)(initialStepsRef.current, initialSteps)) {
        initialStepsRef.current = initialSteps;
    }
    if (!(0, fast_deep_equal_1.default)(currentStepsRef.current, currentSteps)) {
        currentStepsRef.current = currentSteps;
    }
    // Combine both initial and current steps, where prop provided values
    // take precedence over what's stored in context.
    const mergedSteps = react_1.default.useMemo(() => initialSteps.reduce((acc, initialStepProps, index) => {
        const currentStepProps = currentSteps[index];
        if (initialStepProps.id === currentStepProps.id) {
            acc.push(Object.assign(Object.assign({}, currentStepProps), initialStepProps));
        }
        return acc;
    }, []), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialStepsRef.current, currentStepsRef.current]);
    return mergedSteps;
};
exports.useGetMergedSteps = useGetMergedSteps;
//# sourceMappingURL=useGetMergedSteps.js.map