"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeHighlight = void 0;

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
var EuiRangeHighlight = function EuiRangeHighlight(_ref) {
  var className = _ref.className,
      hasFocus = _ref.hasFocus,
      showTicks = _ref.showTicks,
      lowerValue = _ref.lowerValue,
      upperValue = _ref.upperValue,
      max = _ref.max,
      min = _ref.min,
      compressed = _ref.compressed,
      background = _ref.background,
      onClick = _ref.onClick;
  // Calculate the width the range based on value
  // const rangeWidth = (value - min) / (max - min);
  var leftPosition = (lowerValue - min) / (max - min);
  var rangeWidth = (upperValue - lowerValue) / (max - min);
  var rangeWidthStyle = {
    background: background,
    marginLeft: "".concat(leftPosition * 100, "%"),
    width: "".concat(rangeWidth * 100, "%")
  };
  var classes = (0, _classnames.default)('euiRangeHighlight', {
    'euiRangeHighlight--hasTicks': showTicks,
    'euiRangeHighlight--compressed': compressed
  }, className);
  var progressClasses = (0, _classnames.default)('euiRangeHighlight__progress', {
    'euiRangeHighlight__progress--hasFocus': hasFocus
  });
  return (0, _react2.jsx)("div", {
    className: classes,
    onClick: onClick
  }, (0, _react2.jsx)("div", {
    className: progressClasses,
    style: rangeWidthStyle
  }));
};

exports.EuiRangeHighlight = EuiRangeHighlight;