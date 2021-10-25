import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { getUniqueId } from '../../helpers';
import GripVerticalIcon from '@patternfly/react-icons/dist/esm/icons/grip-vertical-icon';
import { Button, ButtonVariant } from '../Button';
import { DualListSelectorListContext } from './DualListSelectorContext';
export const DualListSelectorListItemBase = (_a) => {
    var { onOptionSelect, orderIndex, children, className, id = getUniqueId('dual-list-selector-list-item'), isSelected, innerRef, isDraggable = false, draggableButtonAriaLabel = 'Reorder option' } = _a, props = __rest(_a, ["onOptionSelect", "orderIndex", "children", "className", "id", "isSelected", "innerRef", "isDraggable", "draggableButtonAriaLabel"]);
    const ref = innerRef || React.useRef(null);
    const { setFocusedOption } = React.useContext(DualListSelectorListContext);
    return (React.createElement("li", Object.assign({ className: css(styles.dualListSelectorListItem, className), key: orderIndex, onClick: (e) => {
            setFocusedOption(id);
            onOptionSelect(e, id);
        }, onKeyDown: (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                document.activeElement.click();
                e.preventDefault();
            }
        }, "aria-selected": isSelected, id: id, ref: ref, role: "option", tabIndex: -1 }, props),
        React.createElement("div", { className: css(styles.dualListSelectorListItemRow, isSelected && styles.modifiers.selected) },
            isDraggable && (React.createElement("div", { className: css(styles.dualListSelectorDraggable) },
                React.createElement(Button, { variant: ButtonVariant.plain, "aria-label": draggableButtonAriaLabel, component: "span" },
                    React.createElement(GripVerticalIcon, { style: { verticalAlign: '-0.3em' } })))),
            React.createElement("span", { className: css(styles.dualListSelectorItem) },
                React.createElement("span", { className: css(styles.dualListSelectorItemMain) },
                    React.createElement("span", { className: css(styles.dualListSelectorItemText) }, children))))));
};
DualListSelectorListItemBase.displayName = 'DualListSelectorListItemBase';
export const DualListSelectorListItem = React.forwardRef((props, ref) => (React.createElement(DualListSelectorListItemBase, Object.assign({ innerRef: ref }, props))));
DualListSelectorListItem.displayName = 'DualListSelectorListItem';
//# sourceMappingURL=DualListSelectorListItem.js.map