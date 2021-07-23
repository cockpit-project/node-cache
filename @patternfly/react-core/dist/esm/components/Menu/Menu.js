import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, getDefaultOUIAId } from '../../helpers';
import { MenuContext } from './MenuContext';
import { canUseDOM } from '../../helpers/util';
import { KeyboardHandler, setTabIndex } from '../../helpers';
class MenuBase extends React.Component {
    constructor() {
        super(...arguments);
        this.menuRef = React.createRef();
        this.activeMenu = null;
        this.state = {
            ouiaStateId: getDefaultOUIAId(Menu.displayName),
            searchInputValue: '',
            transitionMoveTarget: null
        };
        this.handleDrilldownTransition = (event) => {
            let ref = this.menuRef;
            if (this.props.innerRef) {
                ref = this.props.innerRef;
            }
            if (!ref.current ||
                (ref.current !== event.target.closest('.pf-c-menu') &&
                    !Array.from(ref.current.getElementsByClassName('pf-c-menu')).includes(event.target.closest('.pf-c-menu')))) {
                return;
            }
            if (this.state.transitionMoveTarget) {
                this.state.transitionMoveTarget.focus();
                this.setState({ transitionMoveTarget: null });
            }
            else {
                const nextMenu = ref.current.querySelector('#' + this.props.activeMenu) || ref.current || null;
                const nextTarget = Array.from(nextMenu.getElementsByTagName('UL')[0].children).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')))[0].firstChild;
                nextTarget.focus();
                nextTarget.tabIndex = 0;
            }
        };
        this.handleExtraKeys = (event) => {
            const isDrilldown = this.props.containsDrilldown;
            const activeElement = document.activeElement;
            if (event.target.closest('.pf-c-menu') !== this.activeMenu &&
                !event.target.classList.contains('pf-c-breadcrumb__link')) {
                this.activeMenu = event.target.closest('.pf-c-menu');
            }
            if (event.target.tagName === 'INPUT') {
                return;
            }
            const parentMenu = this.activeMenu;
            const key = event.key;
            const isFromBreadcrumb = activeElement.classList.contains('pf-c-breadcrumb__link') ||
                activeElement.classList.contains('pf-c-dropdown__toggle');
            if (key === ' ' || key === 'Enter') {
                event.preventDefault();
                if (isDrilldown && !isFromBreadcrumb) {
                    const isDrillingOut = activeElement.closest('li').classList.contains('pf-m-current-path');
                    if (isDrillingOut && parentMenu.parentElement.tagName === 'LI') {
                        activeElement.tabIndex = -1;
                        parentMenu.parentElement.firstChild.tabIndex = 0;
                        this.setState({ transitionMoveTarget: parentMenu.parentElement.firstChild });
                    }
                    else {
                        if (activeElement.nextElementSibling && activeElement.nextElementSibling.classList.contains('pf-c-menu')) {
                            const childItems = Array.from(activeElement.nextElementSibling.getElementsByTagName('UL')[0].children).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')));
                            activeElement.tabIndex = -1;
                            childItems[0].firstChild.tabIndex = 0;
                            this.setState({ transitionMoveTarget: childItems[0].firstChild });
                        }
                    }
                }
                document.activeElement.click();
            }
        };
        this.createNavigableElements = () => {
            const isDrilldown = this.props.containsDrilldown;
            return isDrilldown
                ? Array.from(this.activeMenu.getElementsByTagName('UL')[0].children).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')))
                : Array.from(this.activeMenu.getElementsByTagName('LI')).filter(el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')));
        };
    }
    componentDidMount() {
        if (canUseDOM) {
            window.addEventListener('transitionend', this.props.isRootMenu ? this.handleDrilldownTransition : null);
        }
        let ref = this.menuRef;
        if (this.props.innerRef) {
            ref = this.props.innerRef;
        }
        setTabIndex(Array.from(ref.current.querySelector('ul').querySelectorAll('button, a')));
    }
    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            let ref = this.menuRef;
            if (this.props.innerRef) {
                ref = this.props.innerRef;
            }
            setTabIndex(Array.from(ref.current.querySelector('ul').querySelectorAll('button, a')));
        }
    }
    componentWillUnmount() {
        if (canUseDOM) {
            window.removeEventListener('transitionend', this.handleDrilldownTransition);
        }
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, id, children, className, onSelect, selected = null, onActionClick, ouiaId, ouiaSafe, containsFlyout, containsDrilldown, isMenuDrilledIn, drilldownItemPath, drilledInMenus, onDrillIn, onDrillOut, onGetMenuHeight, parentMenu = null, activeItemId = null, innerRef, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isRootMenu, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        activeMenu } = _a, props = __rest(_a, ['aria-label', "id", "children", "className", "onSelect", "selected", "onActionClick", "ouiaId", "ouiaSafe", "containsFlyout", "containsDrilldown", "isMenuDrilledIn", "drilldownItemPath", "drilledInMenus", "onDrillIn", "onDrillOut", "onGetMenuHeight", "parentMenu", "activeItemId", "innerRef", "isRootMenu", "activeMenu"]);
        const _isMenuDrilledIn = (isMenuDrilledIn && isMenuDrilledIn) || (drilledInMenus && drilledInMenus.includes(id)) || false;
        return (React.createElement(MenuContext.Provider, { value: {
                menuId: id,
                parentMenu: parentMenu ? parentMenu : id,
                onSelect,
                onActionClick,
                activeItemId,
                selected,
                drilledInMenus,
                drilldownItemPath,
                onDrillIn,
                onDrillOut,
                onGetMenuHeight
            } },
            isRootMenu && (React.createElement(KeyboardHandler, { containerRef: this.props.innerRef || this.menuRef || null, additionalKeyHandler: this.handleExtraKeys, createNavigableElements: this.createNavigableElements, isActiveElement: (element) => document.activeElement.parentElement === element ||
                    (document.activeElement.closest('ol') && document.activeElement.closest('ol').firstChild === element), getFocusableElement: (navigableElement) => navigableElement.firstChild, noHorizontalArrowHandling: document.activeElement &&
                    (document.activeElement.classList.contains('pf-c-breadcrumb__link') ||
                        document.activeElement.classList.contains('pf-c-dropdown__toggle')), noEnterHandling: true, noSpaceHandling: true })),
            React.createElement("div", Object.assign({ id: id, className: css(styles.menu, containsFlyout && styles.modifiers.flyout, containsDrilldown && styles.modifiers.drilldown, _isMenuDrilledIn && styles.modifiers.drilledIn, className), "aria-label": ariaLabel || containsFlyout ? 'Local' : 'Global', ref: innerRef || this.menuRef || null }, getOUIAProps(Menu.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), props), children)));
    }
}
MenuBase.defaultProps = {
    ouiaSafe: true,
    isRootMenu: true
};
export const Menu = React.forwardRef((props, ref) => (React.createElement(MenuBase, Object.assign({}, props, { innerRef: ref }))));
Menu.displayName = 'Menu';
//# sourceMappingURL=Menu.js.map