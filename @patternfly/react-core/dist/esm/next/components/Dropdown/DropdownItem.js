import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import { MenuItem } from '../../../components/Menu';
import { useOUIAProps } from '../../../helpers';
export const DropdownItem = (_a) => {
    var { children, className, description, ouiaId, ouiaSafe } = _a, props = __rest(_a, ["children", "className", "description", "ouiaId", "ouiaSafe"]);
    const ouiaProps = useOUIAProps(DropdownItem.displayName, ouiaId, ouiaSafe);
    return (React.createElement(MenuItem, Object.assign({ className: css(className), description: description }, ouiaProps, props), children));
};
DropdownItem.displayName = 'DropdownItem';
//# sourceMappingURL=DropdownItem.js.map