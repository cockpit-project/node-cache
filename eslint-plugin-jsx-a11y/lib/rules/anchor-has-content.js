"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getElementType = _interopRequireDefault(require("../util/getElementType"));

var _schemas = require("../util/schemas");

var _hasAccessibleChild = _interopRequireDefault(require("../util/hasAccessibleChild"));

/**
 * @fileoverview Enforce anchor elements to contain accessible content.
 * @author Lisa Ring & Niklas Holmberg
 */
// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var errorMessage = 'Anchors must have content and the content must be accessible by a screen reader.';
var schema = (0, _schemas.generateObjSchema)({
  components: _schemas.arraySchema
});
var _default = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md',
      description: 'Enforce all anchors to contain accessible content.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var options = context.options[0] || {};
        var componentOptions = options.components || [];
        var typeCheck = ['a'].concat(componentOptions);
        var nodeType = elementType(node); // Only check anchor elements and custom types.

        if (typeCheck.indexOf(nodeType) === -1) {
          return;
        }

        if ((0, _hasAccessibleChild["default"])(node.parent, elementType)) {
          return;
        }

        context.report({
          node,
          message: errorMessage
        });
      }
    };
  }
};
exports["default"] = _default;
module.exports = exports.default;