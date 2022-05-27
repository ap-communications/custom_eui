"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeThumb = void 0;

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
var EuiRangeThumb = function EuiRangeThumb(_ref) {
  var className = _ref.className,
      min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      disabled = _ref.disabled,
      showInput = _ref.showInput,
      showTicks = _ref.showTicks,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      tabIndex = _ref.tabIndex,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "min", "max", "value", "disabled", "showInput", "showTicks", "onClick", "onMouseDown", "tabIndex"]);
  var classes = (0, _classnames.default)('euiRangeThumb', {
    'euiRangeThumb--hasTicks': showTicks
  }, className);
  var commonAttrs = {
    className: classes,
    role: 'slider',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': Number(value),
    'aria-disabled': !!disabled,
    tabIndex: showInput || !!disabled ? -1 : tabIndex || 0
  };
  return onClick || onMouseDown ? (0, _react2.jsx)("button", (0, _extends2.default)({
    type: "button",
    onClick: onClick,
    onMouseDown: onMouseDown,
    disabled: disabled
  }, commonAttrs, rest)) : (0, _react2.jsx)("div", (0, _extends2.default)({}, commonAttrs, rest));
};

exports.EuiRangeThumb = EuiRangeThumb;