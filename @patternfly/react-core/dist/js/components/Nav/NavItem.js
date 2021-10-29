"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavItem = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const nav_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/Nav/nav"));
const react_styles_1 = require("@patternfly/react-styles");
const Nav_1 = require("./Nav");
const PageSidebar_1 = require("../Page/PageSidebar");
const helpers_1 = require("../../helpers");
const angle_right_icon_1 = tslib_1.__importDefault(require('@patternfly/react-icons/dist/js/icons/angle-right-icon'));
const NavItem = (_a) => {
    var { children, styleChildren = true, className, to, isActive = false, groupId = null, itemId = null, preventDefault = false, onClick = null, component = 'a', flyout, onShowFlyout, ouiaId, ouiaSafe } = _a, props = tslib_1.__rest(_a, ["children", "styleChildren", "className", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick", "component", "flyout", "onShowFlyout", "ouiaId", "ouiaSafe"]);
    const { flyoutRef, setFlyoutRef } = React.useContext(Nav_1.NavContext);
    const { isNavOpen } = React.useContext(PageSidebar_1.PageSidebarContext);
    const [flyoutTarget, setFlyoutTarget] = React.useState(null);
    const ref = React.useRef();
    const flyoutVisible = ref === flyoutRef;
    const Component = component;
    const hasFlyout = flyout !== undefined;
    const showFlyout = (show, override) => {
        if ((!flyoutVisible || override) && show) {
            setFlyoutRef(ref);
        }
        else if ((flyoutVisible || override) && !show) {
            setFlyoutRef(null);
        }
        onShowFlyout && show && onShowFlyout();
    };
    const onMouseOver = (event) => {
        const evtContainedInFlyout = event.target.closest('.pf-c-nav__item.pf-m-flyout');
        if (hasFlyout && !flyoutVisible) {
            showFlyout(true);
        }
        else if (flyoutRef !== null && !evtContainedInFlyout) {
            setFlyoutRef(null);
        }
    };
    const onFlyoutClick = (event) => {
        const target = event.target;
        const closestItem = target.closest('.pf-m-flyout');
        if (!closestItem) {
            if (hasFlyout) {
                showFlyout(false, true);
            }
            else if (flyoutRef !== null) {
                setFlyoutRef(null);
            }
        }
    };
    React.useEffect(() => {
        if (hasFlyout) {
            window.addEventListener('click', onFlyoutClick);
        }
        return () => {
            if (hasFlyout) {
                window.removeEventListener('click', onFlyoutClick);
            }
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
                showFlyout(false);
            }
        }
    };
    const flyoutButton = (React.createElement("span", { className: react_styles_1.css(nav_1.default.navToggle) },
        React.createElement("span", { className: react_styles_1.css(nav_1.default.navToggleIcon) },
            React.createElement(angle_right_icon_1.default, { "aria-hidden": true }))));
    const renderDefaultLink = (context) => {
        const preventLinkDefault = preventDefault || !to;
        return (React.createElement(Component, Object.assign({ href: to, onClick: (e) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick), className: react_styles_1.css(nav_1.default.navLink, isActive && nav_1.default.modifiers.current, className), "aria-current": isActive ? 'page' : null, tabIndex: isNavOpen ? null : '-1' }, props),
            children,
            flyout && flyoutButton));
    };
    const renderClonedChild = (context, child) => React.cloneElement(child, Object.assign(Object.assign({ onClick: (e) => context.onSelect(e, groupId, itemId, to, preventDefault, onClick), 'aria-current': isActive ? 'page' : null }, (styleChildren && {
        className: react_styles_1.css(nav_1.default.navLink, isActive && nav_1.default.modifiers.current, child.props && child.props.className)
    })), { tabIndex: child.props.tabIndex || isNavOpen ? null : -1, children: hasFlyout ? (React.createElement(React.Fragment, null,
            child.props.children,
            flyoutButton)) : (child.props.children) }));
    const ouiaProps = helpers_1.useOUIAProps(exports.NavItem.displayName, ouiaId, ouiaSafe);
    return (React.createElement("li", Object.assign({}, (hasFlyout && {
        onKeyDown: handleFlyout
    }), { onMouseOver: onMouseOver, className: react_styles_1.css(nav_1.default.navItem, hasFlyout && nav_1.default.modifiers.flyout, className), ref: ref }, ouiaProps),
        React.createElement(Nav_1.NavContext.Consumer, null, context => React.isValidElement(children)
            ? renderClonedChild(context, children)
            : renderDefaultLink(context)),
        flyoutVisible && flyout));
};
exports.NavItem = NavItem;
exports.NavItem.displayName = 'NavItem';
//# sourceMappingURL=NavItem.js.map