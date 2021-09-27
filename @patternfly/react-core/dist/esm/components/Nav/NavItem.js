import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { css } from '@patternfly/react-styles';
import { NavContext } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { useOUIAProps } from '../../helpers';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
export const NavItem = (_a) => {
    var { children, styleChildren = true, className, to, isActive = false, groupId = null, itemId = null, preventDefault = false, onClick = null, component = 'a', flyout, onShowFlyout, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "styleChildren", "className", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick", "component", "flyout", "onShowFlyout", "ouiaId", "ouiaSafe"]);
    const { flyoutRef, setFlyoutRef } = React.useContext(NavContext);
    const { isNavOpen } = React.useContext(PageSidebarContext);
    const [flyoutTarget, setFlyoutTarget] = React.useState(null);
    const ref = React.useRef();
    const flyoutVisible = ref === flyoutRef;
    const Component = component;
    const hasFlyout = flyout !== undefined;
    const showFlyout = (show) => {
        if (!flyoutVisible && show) {
            setFlyoutRef(ref);
        }
        else if (flyoutVisible && !show) {
            setFlyoutRef(null);
        }
        onShowFlyout && show && onShowFlyout();
    };
    const onMouseOver = () => {
        if (hasFlyout) {
            showFlyout(true);
        }
        else if (flyoutRef !== null) {
            setFlyoutRef(null);
        }
    };
    const onFlyoutClick = (event) => {
        const target = event.target;
        const closestItem = target.closest('.pf-c-nav__item');
        if (!closestItem) {
            if (hasFlyout) {
                showFlyout(true);
            }
            else {
                setFlyoutRef(null);
            }
        }
    };
    React.useEffect(() => {
        window.addEventListener('click', onFlyoutClick);
        return () => {
            window.removeEventListener('click', onFlyoutClick);
        };
    }, []);
    React.useEffect(() => {
        if (flyoutTarget) {
            if (flyoutVisible) {
                const flyoutMenu = flyoutTarget.nextElementSibling;
                const flyoutItems = Array.from(flyoutMenu.getElementsByTagName('UL')[0].children).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')));
                flyoutItems[0].firstChild.focus();
            }
            else {
                flyoutTarget.focus();
            }
        }
    }, [flyoutVisible, flyoutTarget]);
    const handleFlyout = (event) => {
        const key = event.key;
        const target = event.target;
        if (!hasFlyout) {
            return;
        }
        if (key === ' ' || key === 'ArrowRight') {
            event.stopPropagation();
            event.preventDefault();
            if (!flyoutVisible) {
                showFlyout(true);
                setFlyoutTarget(target);
            }
        }
        if (key === 'Escape' || key === 'ArrowLeft') {
            if (flyoutVisible) {
                event.stopPropagation();
                event.preventDefault();
                let closestFlyout = target.closest('.pf-c-nav__item.pf-m-flyout');
                if (target.parentElement === closestFlyout) {
                    closestFlyout = closestFlyout.parentElement.closest('.pf-c-nav__item.pf-m-flyout');
                }
                if (closestFlyout) {
                    closestFlyout.firstChild.focus();
                }
                showFlyout(false);
            }
        }
    };
    const flyoutButton = (React.createElement("span", { className: css(styles.navToggle) },
        React.createElement("span", { className: css(styles.navToggleIcon) },
            React.createElement(AngleRightIcon, { "aria-hidden": true }))));
    const renderDefaultLink = (context) => {
        const preventLinkDefault = preventDefault || !to;
        return (React.createElement(Component, Object.assign({ href: to, onClick: (e) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick), className: css(styles.navLink, isActive && styles.modifiers.current, className), "aria-current": isActive ? 'page' : null, tabIndex: isNavOpen ? null : '-1' }, props),
            children,
            flyout && flyoutButton));
    };
    const renderClonedChild = (context, child) => React.cloneElement(child, Object.assign(Object.assign({ onClick: (e) => context.onSelect(e, groupId, itemId, to, preventDefault, onClick), 'aria-current': isActive ? 'page' : null }, (styleChildren && {
        className: css(styles.navLink, isActive && styles.modifiers.current, child.props && child.props.className)
    })), { tabIndex: child.props.tabIndex || isNavOpen ? null : -1, children: hasFlyout ? (React.createElement(React.Fragment, null,
            child.props.children,
            flyoutButton)) : (child.props.children) }));
    const ouiaProps = useOUIAProps(NavItem.displayName, ouiaId, ouiaSafe);
    return (React.createElement("li", Object.assign({}, (hasFlyout && {
        onKeyDown: handleFlyout
    }), { onMouseOver: onMouseOver, className: css(styles.navItem, hasFlyout && styles.modifiers.flyout, className), ref: ref }, ouiaProps),
        React.createElement(NavContext.Consumer, null, context => React.isValidElement(children)
            ? renderClonedChild(context, children)
            : renderDefaultLink(context)),
        flyoutVisible && flyout));
};
NavItem.displayName = 'NavItem';
//# sourceMappingURL=NavItem.js.map