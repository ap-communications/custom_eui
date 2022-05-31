"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeDraggable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../../services");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiRangeDraggable = function EuiRangeDraggable(_ref) {
  var className = _ref.className,
      showTicks = _ref.showTicks,
      lowerPosition = _ref.lowerPosition,
      upperPosition = _ref.upperPosition,
      compressed = _ref.compressed,
      onChange = _ref.onChange,
      min = _ref.min,
      max = _ref.max,
      disabled = _ref.disabled,
      value = _ref.value,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "showTicks", "lowerPosition", "upperPosition", "compressed", "onChange", "min", "max", "disabled", "value"]);
  var outerStyle = {
    left: "calc(".concat(lowerPosition, ")"),
    right: "calc(100% - ".concat(upperPosition, " - 16px)")
  };
  var classes = (0, _classnames.default)('euiRangeDraggable', {
    'euiRangeDraggable--hasTicks': showTicks,
    'euiRangeDraggable--compressed': compressed,
    'euiRangeDraggable--disabled': disabled
  }, className);

  var handleChange = function handleChange(_ref2, isFirstInteraction) {
    var x = _ref2.x;
    if (disabled) return;
    onChange(x, isFirstInteraction);
  };

  var _useMouseMove = (0, _services.useMouseMove)(handleChange),
      _useMouseMove2 = (0, _slicedToArray2.default)(_useMouseMove, 2),
      handleMouseDown = _useMouseMove2[0],
      handleInteraction = _useMouseMove2[1];

  var commonProps = {
    className: classes,
    role: 'slider',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': value[0],
    'aria-valuetext': "".concat(value[0], ", ").concat(value[1]),
    'aria-disabled': !!disabled,
    tabIndex: !!disabled ? -1 : 0
  };
  return (0, _react2.jsx)("div", (0, _extends2.default)({
    style: outerStyle
  }, commonProps, rest), (0, _react2.jsx)("div", {
    className: "euiRangeDraggle__inner",
    onMouseDown: handleMouseDown,
    onTouchStart: handleInteraction,
    onTouchMove: handleInteraction
  }));
};

exports.EuiRangeDraggable = EuiRangeDraggable;