"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFlexItem = exports.GROW_SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
var GROW_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
exports.GROW_SIZES = GROW_SIZES;

var EuiFlexItem = function EuiFlexItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? true : _ref$grow,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "grow", "component"]);
  validateGrowValue(grow);
  var classes = (0, _classnames.default)('euiFlexItem', (0, _defineProperty2.default)({
    'euiFlexItem--flexGrowZero': !grow
  }, "euiFlexItem--flexGrow".concat(grow), typeof grow === 'number' ? GROW_SIZES.indexOf(grow) >= 0 : undefined), className);
  return (// @ts-ignore difficult to verify `rest` applies to `Component`
    (0, _react2.jsx)(Component, (0, _extends2.default)({
      className: classes
    }, rest), children)
  );
};

exports.EuiFlexItem = EuiFlexItem;

function validateGrowValue(value) {
  var validValues = [null, undefined, true, false].concat(GROW_SIZES);

  if (validValues.indexOf(value) === -1) {
    throw new Error("Prop `grow` passed to `EuiFlexItem` must be a boolean or an integer between 1 and 10, received `".concat(value, "`"));
  }
}