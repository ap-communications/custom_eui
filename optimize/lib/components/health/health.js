"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHealth = exports.TEXT_SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _icon = require("../icon");

var _flex = require("../flex");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var sizeToClassNameMap = {
  xs: 'euiHealth--textSizeXS',
  s: 'euiHealth--textSizeS',
  m: 'euiHealth--textSizeM',
  inherit: 'euiHealth--textSizeInherit'
};
var TEXT_SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.TEXT_SIZES = TEXT_SIZES;

var EuiHealth = function EuiHealth(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      _ref$textSize = _ref.textSize,
      textSize = _ref$textSize === void 0 ? 's' : _ref$textSize,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "color", "textSize"]);
  var classes = (0, _classnames.default)('euiHealth', textSize ? sizeToClassNameMap[textSize] : null, className);
  return (0, _react2.jsx)("div", (0, _extends2.default)({
    className: classes
  }, rest), (0, _react2.jsx)(_flex.EuiFlexGroup, {
    gutterSize: "xs",
    alignItems: "center",
    responsive: false
  }, (0, _react2.jsx)(_flex.EuiFlexItem, {
    grow: false
  }, (0, _react2.jsx)(_icon.EuiIcon, {
    type: "dot",
    color: color
  })), (0, _react2.jsx)(_flex.EuiFlexItem, {
    grow: false
  }, children)));
};

exports.EuiHealth = EuiHealth;