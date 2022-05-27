"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeTicks = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _inner_text = require("../../inner_text");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiTickValue = function EuiTickValue(_ref) {
  var disabled = _ref.disabled,
      customTicks = _ref.ticks,
      min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      onChange = _ref.onChange,
      percentageWidth = _ref.percentageWidth,
      tickValue = _ref.tickValue,
      ticksRef = _ref.ticksRef;
  var tickStyle = {};
  var tickObject = customTicks ? customTicks.find(function (o) {
    return o.value === tickValue;
  }) : {
    value: tickValue,
    label: tickValue
  };
  var isMinTick = (tickObject === null || tickObject === void 0 ? void 0 : tickObject.value) === min;
  var isMaxTick = (tickObject === null || tickObject === void 0 ? void 0 : tickObject.value) === max;
  var label = tickObject ? tickObject.label : tickValue; // Math worked out by trial and error
  // Shifts the label into the reserved margin of EuiRangeTrack

  var labelShiftVal = (isMinTick || isMaxTick) && label.length > 3 ? Math.min(label.length * 0.25, 1.25) : 0;

  if (isMaxTick && !!labelShiftVal) {
    tickStyle.right = '0%';
  } else {
    var _ticksRef$current$cli, _ticksRef$current;

    var trackWidth = (_ticksRef$current$cli = (_ticksRef$current = ticksRef.current) === null || _ticksRef$current === void 0 ? void 0 : _ticksRef$current.clientWidth) !== null && _ticksRef$current$cli !== void 0 ? _ticksRef$current$cli : 0;
    var position = (0, _utils.calculateThumbPosition)(tickValue, min, max, trackWidth);
    var thumbOffset = labelShiftVal ? 0 : _utils.EUI_THUMB_SIZE / 2;
    tickStyle.left = "calc(".concat(position, "% + ").concat(thumbOffset, "px)");
  }

  tickStyle.maxWidth = customTicks ? undefined : "".concat(percentageWidth, "%");
  var pseudoShift = {};

  if (labelShiftVal) {
    var labelShift = isMaxTick ? 'marginRight' : 'marginLeft';
    tickStyle[labelShift] = "-".concat(labelShiftVal, "em");
    pseudoShift[labelShift] = "calc(".concat(labelShiftVal, "em + 4px)"); // 4px derived from .euiRangeTicks left/right offset
  }

  var pseudoTick = tickObject && !!labelShiftVal && (isMinTick || isMaxTick);
  var tickClasses = (0, _classnames.default)('euiRangeTick', {
    'euiRangeTick--selected': value === tickValue,
    'euiRangeTick--isCustom': customTicks,
    'euiRangeTick--isMin': labelShiftVal && isMinTick,
    'euiRangeTick--isMax': labelShiftVal && isMaxTick,
    'euiRangeTick--hasTickMark': pseudoTick
  });

  var _useInnerText = (0, _inner_text.useInnerText)(),
      _useInnerText2 = (0, _slicedToArray2.default)(_useInnerText, 2),
      ref = _useInnerText2[0],
      innerText = _useInnerText2[1];

  return (0, _react2.jsx)("button", {
    type: "button",
    className: tickClasses,
    value: tickValue,
    disabled: disabled,
    onClick: onChange,
    style: tickStyle,
    tabIndex: -1,
    ref: ref,
    title: typeof label === 'string' ? label : innerText
  }, pseudoTick && (0, _react2.jsx)("span", {
    className: "euiRangeTick__pseudo",
    "aria-hidden": true,
    style: pseudoShift
  }), label);
};

var EuiRangeTicks = function EuiRangeTicks(props) {
  var ticks = props.ticks,
      tickSequence = props.tickSequence,
      max = props.max,
      min = props.min,
      _props$interval = props.interval,
      interval = _props$interval === void 0 ? 1 : _props$interval,
      compressed = props.compressed;

  var ticksRef = _react.default.useRef(null); // Calculate the width of each tick mark


  var percentageWidth = interval / (max - min + interval) * 100;
  var classes = (0, _classnames.default)('euiRangeTicks', {
    'euiRangeTicks--compressed': compressed,
    'euiRangeTicks--isCustom': ticks
  });
  return (0, _react2.jsx)("div", {
    className: classes,
    ref: ticksRef
  }, tickSequence.map(function (tickValue) {
    return (0, _react2.jsx)(EuiTickValue, (0, _extends2.default)({
      key: tickValue
    }, props, {
      percentageWidth: percentageWidth,
      tickValue: tickValue,
      ticksRef: ticksRef
    }));
  }));
};

exports.EuiRangeTicks = EuiRangeTicks;