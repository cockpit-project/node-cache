function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import TableHeading from '../TableHeading';

const actionHeaderCellFormatter = (value, {
  column
}) => React.createElement(TableHeading, _extends({
  "aria-label": column.header.label
}, column.header.props), column.header.label);

actionHeaderCellFormatter.propTypes = {
  /** cell value */
  value: PropTypes.node,

  /** column definition */
  column: PropTypes.object
};
actionHeaderCellFormatter.defaultProps = {
  value: null,
  column: {}
};
export default actionHeaderCellFormatter;