import { __rest } from "tslib";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { formatBreakpointMods } from '../../helpers/util';
import { PageContext } from '../Page/Page';
export const PageGroup = (_a) => {
    var { className = '', children, sticky, stickyOnBreakpoint, hasShadowTop = false, hasShadowBottom = false, hasOverflowScroll = false } = _a, props = __rest(_a, ["className", "children", "sticky", "stickyOnBreakpoint", "hasShadowTop", "hasShadowBottom", "hasOverflowScroll"]);
    const { height, getVerticalBreakpoint } = React.useContext(PageContext);
    return (React.createElement("div", Object.assign({}, props, { className: css(styles.pageMainGroup, formatBreakpointMods(stickyOnBreakpoint, styles, 'sticky-', getVerticalBreakpoint(height), true), sticky === 'top' && styles.modifiers.stickyTop, sticky === 'bottom' && styles.modifiers.stickyBottom, hasShadowTop && styles.modifiers.shadowTop, hasShadowBottom && styles.modifiers.shadowBottom, hasOverflowScroll && styles.modifiers.overflowScroll, className) }, (hasOverflowScroll && { tabIndex: 0 })), children));
};
PageGroup.displayName = 'PageGroup';
//# sourceMappingURL=PageGroup.js.map