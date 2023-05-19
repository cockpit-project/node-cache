import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItem } from '../Menu';
import { useOUIAProps } from '../../helpers';
const DropdownItemBase = (_a) => {
    var { children, className, description, isDisabled, itemId, onClick, ouiaId, ouiaSafe, innerRef } = _a, props = __rest(_a, ["children", "className", "description", "isDisabled", "itemId", "onClick", "ouiaId", "ouiaSafe", "innerRef"]);
    const ouiaProps = useOUIAProps(DropdownItem.displayName, ouiaId, ouiaSafe);
    return (React.createElement(MenuItem, Object.assign({ className: css(className), description: description, isDisabled: isDisabled, itemId: itemId, onClick: onClick, ref: innerRef }, ouiaProps, props), children));
};
export const DropdownItem = React.forwardRef((props, ref) => (React.createElement(DropdownItemBase, Object.assign({}, props, { innerRef: ref }))));
DropdownItem.displayName = 'DropdownItem';
//# sourceMappingURL=DropdownItem.js.map