"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeTooltip = void 0;

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
var EuiRangeTooltip = function EuiRangeTooltip(_ref) {
  var value = _ref.value,
      valueAppend = _ref.valueAppend,
      valuePrepend = _ref.valuePrepend,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      showTicks = _ref.showTicks,
      compressed = _ref.compressed;
  var classes = (0, _classnames.default)('euiRangeTooltip', {
    'euiRangeTooltip--compressed': compressed
  }); // Calculate the left position based on value

  var val = 0;

  if (typeof value === 'number') {
    val = value;
  } else if (typeof value === 'string') {
    val = parseFloat(value);
  }

  var decimal = (val - min) / (max - min); // Must be between 0-100%

  var valuePosition = decimal <= 1 ? decimal : 1;
  valuePosition = valuePosition >= 0 ? valuePosition : 0;
  var valuePositionSide;
  var valuePositionStyle;

  if (valuePosition > 0.5) {
    valuePositionSide = 'left';
    valuePositionStyle = {
      right: "".concat((1 - valuePosition) * 100, "%")
    };
  } else {
    valuePositionSide = 'right';
    valuePositionStyle = {
      left: "".concat(valuePosition * 100, "%")
    };
  } // Change left/right position based on value (half way point)


  var valueClasses = (0, _classnames.default)('euiRangeTooltip__value', "euiRangeTooltip__value--".concat(valuePositionSide), {
    'euiRangeTooltip__value--hasTicks': showTicks
  });
  return (0, _react2.jsx)("div", {
    className: classes
  }, (0, _react2.jsx)("output", {
    className: valueClasses,
    htmlFor: name,
    style: valuePositionStyle
  }, valuePrepend, value, valueAppend));
};

exports.EuiRangeTooltip = EuiRangeTooltip;