"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPageSideBar = exports.PADDING_SIZES = void 0;

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
var paddingSizeToClassNameMap = {
  none: null,
  s: 'euiPageSideBar--paddingSmall',
  m: 'euiPageSideBar--paddingMedium',
  l: 'euiPageSideBar--paddingLarge'
};
var PADDING_SIZES = (0, _common.keysOf)(paddingSizeToClassNameMap);
exports.PADDING_SIZES = PADDING_SIZES;

var EuiPageSideBar = function EuiPageSideBar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      sticky = _ref.sticky,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'none' : _ref$paddingSize,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "sticky", "paddingSize"]);
  var classes = (0, _classnames.default)('euiPageSideBar', paddingSizeToClassNameMap[paddingSize], {
    'euiPageSideBar--sticky': sticky
  }, className);
  return (0, _react2.jsx)("div", (0, _extends2.default)({
    className: classes
  }, rest), children);
};

exports.EuiPageSideBar = EuiPageSideBar;