"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPopoverFooter = exports.PADDING_SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var paddingSizeToClassNameMap = {
  none: 'euiPopoverFooter--paddingNone',
  s: 'euiPopoverFooter--paddingSmall',
  m: 'euiPopoverFooter--paddingMedium',
  l: 'euiPopoverFooter--paddingLarge'
};
var PADDING_SIZES = (0, _common.keysOf)(paddingSizeToClassNameMap);
exports.PADDING_SIZES = PADDING_SIZES;

var EuiPopoverFooter = function EuiPopoverFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      paddingSize = _ref.paddingSize,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "paddingSize"]);
  var classes = (0, _classnames.default)('euiPopoverFooter', paddingSize ? paddingSizeToClassNameMap[paddingSize] : null, className);
  return (0, _react2.jsx)("div", (0, _extends2.default)({
    className: classes
  }, rest), children);
};

exports.EuiPopoverFooter = EuiPopoverFooter;