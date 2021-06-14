import * as React from 'react';
export interface SliderStepObject {
    /** Value of the step. This value is a percentage of the slider where the  tick is drawn. */
    value: number;
    /** The display label for the step value. THis is also used for the aria-valuetext */
    label: string;
    /** Flag to hide the label */
    isLabelHidden?: boolean;
}
export interface SliderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
    /** Additional classes added to the spinner. */
    className?: string;
    /** Current value  */
    currentValue?: number;
    /** Flag indicating if the slider is is discrete */
    isDiscrete?: boolean;
    /** Adds disabled styling and disables the slider and the input component is present */
    isDisabled?: boolean;
    /** Array of slider step objects (value and label of each step) for the slider. */
    steps?: SliderStepObject[];
    /** Flag to show value input field */
    isInputVisible?: boolean;
    /** Value displayed in the input field */
    inputValue?: number;
    /** Aria label for the input field */
    inputAriaLabel?: string;
    thumbAriaLabel?: string;
    /** Label that is place after the input field */
    inputLabel?: string | number;
    /** Position of the input */
    inputPosition?: 'aboveThumb' | 'right';
    /** Value input callback.  Called when enter is hit while in input filed or focus shifts from input field */
    onChange?: (value: number) => void;
    /** Value change callback. This is called when the slider value changes */
    onValueChange?: (value: number) => void;
    /** Actions placed to the left of the slider */
    leftActions?: React.ReactNode;
    /** Actions placed to the right of the slider */
    rightActions?: React.ReactNode;
}
export declare const Slider: React.FunctionComponent<SliderProps>;
//# sourceMappingURL=Slider.d.ts.map