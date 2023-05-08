import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
// eslint-disable-next-line camelcase
import c_background_image_BackgroundImage from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage';
export const BackgroundImage = (_a) => {
    var { className, src } = _a, props = __rest(_a, ["className", "src"]);
    return (React.createElement("div", Object.assign({ className: css(styles.backgroundImage, className), 
        /* eslint-disable camelcase */
        style: {
            [c_background_image_BackgroundImage.name]: `url(${src})`
        } }, props)));
};
BackgroundImage.displayName = 'BackgroundImage';
//# sourceMappingURL=BackgroundImage.js.map