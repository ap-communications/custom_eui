"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFormControlLayoutDelimited = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../text");

var _form_control_layout = require("./form_control_layout");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiFormControlLayoutDelimited = function EuiFormControlLayoutDelimited(_ref) {
  var startControl = _ref.startControl,
      endControl = _ref.endControl,
      _ref$delimiter = _ref.delimiter,
      delimiter = _ref$delimiter === void 0 ? '→' : _ref$delimiter,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["startControl", "endControl", "delimiter", "className"]);
  var classes = (0, _classnames.default)('euiFormControlLayoutDelimited', className);
  return (0, _react2.jsx)(_form_control_layout.EuiFormControlLayout, (0, _extends2.default)({
    className: classes
  }, rest), addClassesToControl(startControl), (0, _react2.jsx)(_text.EuiText, {
    className: "euiFormControlLayoutDelimited__delimeter",
    size: "s",
    color: "subdued"
  }, delimiter), addClassesToControl(endControl));
};

exports.EuiFormControlLayoutDelimited = EuiFormControlLayoutDelimited;

function addClassesToControl(control) {
  return /*#__PURE__*/(0, _react.cloneElement)(control, {
    className: (0, _classnames.default)(control.props.className, 'euiFormControlLayoutDelimited__input')
  });
}