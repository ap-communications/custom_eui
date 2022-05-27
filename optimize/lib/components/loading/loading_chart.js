"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiLoadingChart = exports.SIZES = void 0;

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
var sizeToClassNameMap = {
  m: 'euiLoadingChart--medium',
  l: 'euiLoadingChart--large',
  xl: 'euiLoadingChart--xLarge'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;

var EuiLoadingChart = function EuiLoadingChart(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$mono = _ref.mono,
      mono = _ref$mono === void 0 ? false : _ref$mono,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["size", "mono", "className"]);
  var classes = (0, _classnames.default)('euiLoadingChart', {
    'euiLoadingChart--mono': mono
  }, className, sizeToClassNameMap[size]);
  return (0, _react2.jsx)("span", (0, _extends2.default)({
    className: classes
  }, rest), (0, _react2.jsx)("span", {
    className: "euiLoadingChart__bar"
  }), (0, _react2.jsx)("span", {
    className: "euiLoadingChart__bar"
  }), (0, _react2.jsx)("span", {
    className: "euiLoadingChart__bar"
  }), (0, _react2.jsx)("span", {
    className: "euiLoadingChart__bar"
  }));
};

exports.EuiLoadingChart = EuiLoadingChart;