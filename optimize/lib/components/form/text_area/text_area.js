"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTextArea = exports.RESIZE = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _validatable_control = require("../validatable_control");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var resizeToClassNameMap = {
  vertical: 'euiTextArea--resizeVertical',
  horizontal: 'euiTextArea--resizeHorizontal',
  both: 'euiTextArea--resizeBoth',
  none: 'euiTextArea--resizeNone'
};
var RESIZE = Object.keys(resizeToClassNameMap);
exports.RESIZE = RESIZE;

var EuiTextArea = function EuiTextArea(_ref) {
  var children = _ref.children,
      className = _ref.className,
      compressed = _ref.compressed,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      id = _ref.id,
      inputRef = _ref.inputRef,
      isInvalid = _ref.isInvalid,
      name = _ref.name,
      placeholder = _ref.placeholder,
      _ref$resize = _ref.resize,
      resize = _ref$resize === void 0 ? 'vertical' : _ref$resize,
      rows = _ref.rows,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "compressed", "fullWidth", "id", "inputRef", "isInvalid", "name", "placeholder", "resize", "rows"]);
  var classes = (0, _classnames.default)('euiTextArea', resizeToClassNameMap[resize], {
    'euiTextArea--fullWidth': fullWidth,
    'euiTextArea--compressed': compressed
  }, className);
  var definedRows;

  if (rows) {
    definedRows = rows;
  } else if (compressed) {
    definedRows = 3;
  } else {
    definedRows = 6;
  }

  return (0, _react2.jsx)(_validatable_control.EuiValidatableControl, {
    isInvalid: isInvalid
  }, (0, _react2.jsx)("textarea", (0, _extends2.default)({
    className: classes
  }, rest, {
    rows: definedRows,
    name: name,
    id: id,
    ref: inputRef,
    placeholder: placeholder
  }), children));
};

exports.EuiTextArea = EuiTextArea;