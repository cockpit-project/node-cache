import * as React from 'react';
export interface TextInputGroupMainProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the text input group main div */
    children?: React.ReactNode;
    /** Additional classes applied to the text input group main container */
    className?: string;
    /** Icon to be shown on the left side of the text input group main container */
    icon?: React.ReactNode;
    /** Callback for when there is a change in the input field*/
    onChange?: () => void;
    /** Accessibility label for the input */
    'aria-label'?: string;
}
export declare const TextInputGroupMain: React.FunctionComponent<TextInputGroupMainProps>;
//# sourceMappingURL=TextInputGroupMain.d.ts.map