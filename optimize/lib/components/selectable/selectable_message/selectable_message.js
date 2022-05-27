"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSelectableMessage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../text");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiSelectableMessage = function EuiSelectableMessage(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$bordered = _ref.bordered,
      bordered = _ref$bordered === void 0 ? false : _ref$bordered,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "bordered"]);
  var classes = (0, _classnames.default)('euiSelectableMessage', {
    'euiSelectableMessage--bordered': bordered
  }, className);
  return (0, _react2.jsx)(_text.EuiText, (0, _extends2.default)({
    color: "subdued",
    size: "xs",
    className: classes
  }, rest), children);
};

exports.EuiSelectableMessage = EuiSelectableMessage;