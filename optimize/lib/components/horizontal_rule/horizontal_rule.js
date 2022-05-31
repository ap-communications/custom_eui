"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHorizontalRule = exports.MARGINS = exports.SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var sizeToClassNameMap = {
  full: 'euiHorizontalRule--full',
  half: 'euiHorizontalRule--half',
  quarter: 'euiHorizontalRule--quarter'
};
var SIZES = Object.keys(sizeToClassNameMap);
exports.SIZES = SIZES;
var marginToClassNameMap = {
  none: null,
  xs: 'euiHorizontalRule--marginXSmall',
  s: 'euiHorizontalRule--marginSmall',
  m: 'euiHorizontalRule--marginMedium',
  l: 'euiHorizontalRule--marginLarge',
  xl: 'euiHorizontalRule--marginXLarge',
  xxl: 'euiHorizontalRule--marginXXLarge'
};
var MARGINS = Object.keys(marginToClassNameMap);
exports.MARGINS = MARGINS;

var EuiHorizontalRule = function EuiHorizontalRule(_ref) {
  var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'full' : _ref$size,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 'l' : _ref$margin,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "size", "margin"]);
  var classes = (0, _classnames.default)('euiHorizontalRule', sizeToClassNameMap[size], marginToClassNameMap[margin], className);
  return (0, _react2.jsx)("hr", (0, _extends2.default)({
    className: classes
  }, rest));
};

exports.EuiHorizontalRule = EuiHorizontalRule;