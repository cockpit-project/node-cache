"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuContainer = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Popper_1 = require("../../helpers/Popper/Popper");
/**
 * Container that links a menu and menu toggle together, to handle basic keyboard input and control the opening and closing of a menu.
 */
const MenuContainer = ({ menu, menuRef, isOpen, toggle, toggleRef, onOpenChange, zIndex = 9999, popperProps, onOpenChangeKeys = ['Escape', 'Tab'], shouldFocusFirstItemOnOpen = true, shouldPreventScrollOnItemFocus = true, focusTimeoutDelay = 0 }) => {
    const prevIsOpen = react_1.default.useRef(isOpen);
    react_1.default.useEffect(() => {
        // menu was opened, focus on first menu item
        if (prevIsOpen.current === false && isOpen === true && shouldFocusFirstItemOnOpen) {
            setTimeout(() => {
                var _a;
                const firstElement = (_a = menuRef === null || menuRef === void 0 ? void 0 : menuRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])');
                firstElement && firstElement.focus({ preventScroll: shouldPreventScrollOnItemFocus });
            }, focusTimeoutDelay);
        }
        prevIsOpen.current = isOpen;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    react_1.default.useEffect(() => {
        const handleMenuKeys = (event) => {
            var _a, _b, _c;
            // Close the menu on tab or escape if onOpenChange is provided
            if ((isOpen && onOpenChange && ((_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) ||
                ((_b = toggleRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
                if (onOpenChangeKeys.includes(event.key)) {
                    onOpenChange(false);
                    (_c = toggleRef.current) === null || _c === void 0 ? void 0 : _c.focus();
                }
            }
        };
        const handleClick = (event) => {
            var _a, _b;
            // If the event is not on the toggle and onOpenChange callback is provided, close the menu
            if (isOpen && onOpenChange && !((_a = toggleRef === null || toggleRef === void 0 ? void 0 : toggleRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                if (isOpen && !((_b = menuRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
                    onOpenChange(false);
                }
            }
        };
        window.addEventListener('keydown', handleMenuKeys);
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('keydown', handleMenuKeys);
            window.removeEventListener('click', handleClick);
        };
    }, [focusTimeoutDelay, isOpen, menuRef, onOpenChange, onOpenChangeKeys, shouldPreventScrollOnItemFocus, toggleRef]);
    return (react_1.default.createElement(Popper_1.Popper, Object.assign({ trigger: toggle, triggerRef: toggleRef, popper: menu, popperRef: menuRef, isVisible: isOpen, zIndex: zIndex }, popperProps)));
};
exports.MenuContainer = MenuContainer;
exports.MenuContainer.displayName = 'MenuContainer';
//# sourceMappingURL=MenuContainer.js.map