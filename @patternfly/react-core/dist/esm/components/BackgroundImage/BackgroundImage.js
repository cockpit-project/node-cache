import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
export const BackgroundImage = (_a) => {
    var { className } = _a, 
    // src,
    props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: css(styles.backgroundImage, className), 
        /* eslint-disable camelcase */
        style: {
        // [c_background_image_BackgroundImage.name as string]: `url(${src})`
        } }, props)));
};
BackgroundImage.displayName = 'BackgroundImage';
//# sourceMappingURL=BackgroundImage.js.map