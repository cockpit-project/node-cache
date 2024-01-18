const hasCompoundParentsExpanded = (parentId, compoundParent, rows) => {
    // max rows.length parents
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const i of rows) {
        if (rows[parentId].hasOwnProperty('parent')) {
            parentId = rows[parentId].parent;
        }
        else {
            return rows[parentId].cells[compoundParent].props.isOpen;
        }
    }
    return false;
};
const hasParentsExpanded = (parentId, rows) => {
    // max rows.length parents
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const i of rows) {
        if (rows[parentId].hasOwnProperty('parent')) {
            parentId = rows[parentId].parent;
        }
        else {
            return rows[parentId].isOpen;
        }
    }
    return false;
};
export const isRowExpanded = (row, rows) => {
    if (row.parent !== undefined) {
        if (row.hasOwnProperty('compoundParent')) {
            return hasCompoundParentsExpanded(row.parent, row.compoundParent, rows);
        }
        return hasParentsExpanded(row.parent, rows) && rows[row.parent].isOpen;
    }
    return undefined;
};
export const getErrorTextByValidator = (validatorName, validators) => {
    const result = validators.filter((validator) => validator.name === validatorName);
    return result[0].errorText;
};
export const cancelCellEdits = (row) => {
    row.cells.forEach((cell) => {
        delete cell.props.errorText;
        delete cell.props.editableValue;
        cell.props.isValid = true;
        // for editable selects, revert the selected property to its original value
        if (cell.props.selected) {
            cell.props.selected = cell.props.value;
        }
    });
    row.isEditable = !row.isEditable;
    row.isValid = true;
    return row;
};
export const validateCellEdits = (row, type, validationErrors, missingPropErrorTxt = 'Validation requires unique name property for row cells') => {
    row.isValid = Object.keys(validationErrors).length ? false : true;
    row.cells.forEach((cell) => {
        delete cell.props.errorText;
        const hasValue = cell.props.value !== undefined && cell.props.value !== null;
        const hasEditableValue = cell.props.editableValue !== undefined && cell.props.editableValue !== null;
        if (cell.props && hasValue && hasEditableValue) {
            if (type === 'save') {
                const errorMsg = Object.keys(validationErrors)
                    .filter((validatorName) => validationErrors[validatorName].includes(cell.props.name))
                    .map((validatorName) => getErrorTextByValidator(validatorName, row.rowEditValidationRules));
                if (errorMsg.length) {
                    cell.props.errorText = cell.props.name ? errorMsg.join(', ') : missingPropErrorTxt;
                    if (cell.props.name === undefined) {
                        // eslint-disable-next-line no-console
                        console.warn('Row edit validation reporting requires cell definitions to have a unique name property.');
                    }
                }
                else {
                    delete cell.props.errorText;
                    cell.props.isValid = true;
                }
            }
        }
    });
    return row;
};
export const applyCellEdits = (row, type) => {
    row.cells.forEach((cell) => {
        delete cell.props.errorText;
        const hasValue = cell.props.value !== undefined && cell.props.value !== null;
        const hasEditableValue = cell.props.editableValue !== undefined && cell.props.editableValue !== null;
        // sync for validation
        if (hasValue && !hasEditableValue) {
            cell.props.editableValue = cell.props.value;
        }
        if (cell.props && hasValue && hasEditableValue) {
            if (type === 'save') {
                cell.props.value = cell.props.editableValue;
                cell.props.isValid = true;
                delete cell.props.errorText;
            }
            delete cell.props.editableValue;
        }
    });
    row.isEditable = !row.isEditable;
    row.isValid = true;
    return row;
};
const camelize = (s) => s.toUpperCase().replace('-', '').replace('_', '');
export const toCamel = (s) => s.replace(/([-_][a-z])/gi, camelize);
/**
 * @param {string} input - String to capitalize
 */
export function capitalize(input) {
    return input[0].toUpperCase() + input.substring(1);
}
//# sourceMappingURL=utils.js.map