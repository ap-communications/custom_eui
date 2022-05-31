"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFormLabel = void 0;

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
var EuiFormLabel = function EuiFormLabel(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'label' : _ref$type,
      isFocused = _ref.isFocused,
      isInvalid = _ref.isInvalid,
      isDisabled = _ref.isDisabled,
      children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["type", "isFocused", "isInvalid", "isDisabled", "children", "className"]);
  var classes = (0, _classnames.default)('euiFormLabel', className, {
    'euiFormLabel-isFocused': isFocused,
    'euiFormLabel-isInvalid': isInvalid,
    'euiFormLabel-isDisabled': isDisabled
  });

  if (type === 'legend') {
    return (0, _react2.jsx)("legend", (0, _extends2.default)({
      className: classes
    }, rest), children);
  } else {
    return (0, _react2.jsx)("label", (0, _extends2.default)({
      className: classes
    }, rest), children);
  }
};

exports.EuiFormLabel = EuiFormLabel;