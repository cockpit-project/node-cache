import * as React from 'react';
export interface BackgroundImageProps extends Omit<React.HTMLProps<HTMLDivElement>, 'src'> {
    /** Additional classes added to the background image. */
    className?: string;
    /** The URL or file path of the image for the background */
    src: string;
}
export declare const BackgroundImage: React.FunctionComponent<BackgroundImageProps>;
//# sourceMappingURL=BackgroundImage.d.ts.map