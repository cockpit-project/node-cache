import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import { css } from '@patternfly/react-styles';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
export class MenuToggleBase extends React.Component {
    constructor() {
        super(...arguments);
        this.displayName = 'MenuToggleBase';
    }
    render() {
        const _a = this.props, { children, className, icon, badge, isExpanded, isDisabled, isFullHeight, isFullWidth, variant, innerRef, onClick, 'aria-label': ariaLabel } = _a, otherProps = __rest(_a, ["children", "className", "icon", "badge", "isExpanded", "isDisabled", "isFullHeight", "isFullWidth", "variant", "innerRef", "onClick", 'aria-label']);
        const isPlain = variant === 'plain';
        const isPlainText = variant === 'plainText';
        const isTypeahead = variant === 'typeahead';
        const toggleControls = (React.createElement("span", { className: css(styles.menuToggleControls) },
            React.createElement("span", { className: css(styles.menuToggleToggleIcon) },
                React.createElement(CaretDownIcon, { "aria-hidden": true }))));
        const content = (React.createElement(React.Fragment, null,
            icon && React.createElement("span", { className: css(styles.menuToggleIcon) }, icon),
            isTypeahead ? children : React.createElement("span", { className: "pf-c-menu-toggle__text" }, children),
            badge && React.createElement("span", { className: css(styles.menuToggleCount) }, badge),
            isTypeahead ? (React.createElement("button", { type: "button", className: css(styles.menuToggleButton), "aria-expanded": isExpanded, onClick: onClick, "aria-label": "Menu toggle" }, toggleControls)) : (toggleControls)));
        const componentProps = Object.assign(Object.assign({ className: css(styles.menuToggle, isExpanded && styles.modifiers.expanded, variant === 'primary' && styles.modifiers.primary, (isPlain || isPlainText) && styles.modifiers.plain, isPlainText && styles.modifiers.text, isFullHeight && styles.modifiers.fullHeight, isTypeahead && styles.modifiers.typeahead, isFullWidth && styles.modifiers.fullWidth, className), children: isPlain ? children : content }, (isDisabled && { disabled: true })), otherProps);
        if (isTypeahead) {
            return React.createElement("div", Object.assign({ ref: innerRef }, componentProps));
        }
        return (React.createElement("button", Object.assign({ className: css(styles.menuToggle, isExpanded && styles.modifiers.expanded, variant === 'primary' && styles.modifiers.primary, variant === 'secondary' && styles.modifiers.secondary, (isPlain || isPlainText) && styles.modifiers.plain, isPlainText && styles.modifiers.text, isFullHeight && styles.modifiers.fullHeight, isFullWidth && styles.modifiers.fullWidth, className), ref: innerRef, type: "button", "aria-label": ariaLabel, "aria-expanded": isExpanded, onClick: onClick }, componentProps)));
    }
}
MenuToggleBase.defaultProps = {
    className: '',
    isExpanded: false,
    isDisabled: false,
    isFullWidth: false,
    isFullHeight: false,
    variant: 'default'
};
export const MenuToggle = React.forwardRef((props, ref) => (React.createElement(MenuToggleBase, Object.assign({ innerRef: ref }, props))));
MenuToggle.displayName = 'MenuToggle';
//# sourceMappingURL=MenuToggle.js.map