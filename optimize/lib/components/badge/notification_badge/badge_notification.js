"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiNotificationBadge = exports.SIZES = exports.COLORS = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../../common");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var colorToClassMap = {
  accent: null,
  subdued: 'euiNotificationBadge--subdued'
};
var COLORS = (0, _common.keysOf)(colorToClassMap);
exports.COLORS = COLORS;
var sizeToClassNameMap = {
  s: null,
  m: 'euiNotificationBadge--medium'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;

var EuiNotificationBadge = function EuiNotificationBadge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 's' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'accent' : _ref$color,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "size", "color"]);
  var classes = (0, _classnames.default)('euiNotificationBadge', sizeToClassNameMap[size], colorToClassMap[color], className);
  return (0, _react2.jsx)("span", (0, _extends2.default)({
    className: classes
  }, rest), children);
};

exports.EuiNotificationBadge = EuiNotificationBadge;