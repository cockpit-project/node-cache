import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';
export const TextInputGroupMain = (_a) => {
    var { children, className, icon, onChange, 'aria-label': ariaLabel, value: inputValue } = _a, props = __rest(_a, ["children", "className", "icon", "onChange", 'aria-label', "value"]);
    return (React.createElement("div", Object.assign({ className: css(styles.textInputGroupMain, icon && styles.modifiers.icon, className) }, props),
        children,
        React.createElement("span", { className: css(styles.textInputGroupText) },
            icon && React.createElement("span", { className: css(styles.textInputGroupIcon) }, icon),
            React.createElement("input", { type: "text", className: css(styles.textInputGroupTextInput), "aria-label": ariaLabel, onChange: onChange, value: inputValue }))));
};
TextInputGroupMain.defaultProps = { 'aria-label': 'Type to filter' };
TextInputGroupMain.displayName = 'TextInputGroupMain';
//# sourceMappingURL=TextInputGroupMain.js.map