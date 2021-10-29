import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';
export const TextInputGroup = (_a) => {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: css(styles.textInputGroup, className) }, props), children));
};
TextInputGroup.displayName = 'TextInputGroup';
//# sourceMappingURL=TextInputGroup.js.map