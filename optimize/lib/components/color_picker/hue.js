"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHue = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var HUE_RANGE = 359;

var EuiHue = function EuiHue(_ref) {
  var className = _ref.className,
      hex = _ref.hex,
      _ref$hue = _ref.hue,
      hue = _ref$hue === void 0 ? 1 : _ref$hue,
      id = _ref.id,
      onChange = _ref.onChange,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "hex", "hue", "id", "onChange"]);

  var handleChange = function handleChange(e) {
    onChange(Number(e.target.value));
  };

  var classes = (0, _classnames.default)('euiHue', className);
  return (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("label", {
    htmlFor: "".concat(id, "-hue")
  }, (0, _react2.jsx)(_i18n.EuiI18n, {
    token: "euiHue.label",
    default: "Select the HSV color mode 'hue' value"
  }))), (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("p", {
    "aria-live": "polite"
  }, hex)), (0, _react2.jsx)("div", {
    className: classes
  }, (0, _react2.jsx)("input", (0, _extends2.default)({
    id: "".concat(id, "-hue"),
    min: 0,
    max: HUE_RANGE,
    step: 1,
    type: "range",
    className: "euiHue__range",
    value: hue,
    onChange: handleChange
  }, rest))));
};

exports.EuiHue = EuiHue;