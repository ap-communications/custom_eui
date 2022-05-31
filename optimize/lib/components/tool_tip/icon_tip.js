"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiIconTip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _icon = require("../icon");

var _tool_tip = require("./tool_tip");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiIconTip = function EuiIconTip(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'questionInCircle' : _ref$type,
      _ref$ariaLabel = _ref['aria-label'],
      ariaLabel = _ref$ariaLabel === void 0 ? 'Info' : _ref$ariaLabel,
      color = _ref.color,
      size = _ref.size,
      iconProps = _ref.iconProps,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top' : _ref$position,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 'regular' : _ref$delay,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["type", "aria-label", "color", "size", "iconProps", "position", "delay"]);
  return (0, _react2.jsx)(_tool_tip.EuiToolTip, (0, _extends2.default)({
    position: position,
    delay: delay
  }, rest), (0, _react2.jsx)(_icon.EuiIcon, (0, _extends2.default)({
    tabIndex: 0,
    type: type,
    color: color,
    size: size,
    "aria-label": ariaLabel
  }, iconProps)));
};

exports.EuiIconTip = EuiIconTip;