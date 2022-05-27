"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTextAlign = exports.ALIGNMENTS = exports.alignmentToClassNameMap = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var alignmentToClassNameMap = {
  left: 'euiTextAlign--left',
  right: 'euiTextAlign--right',
  center: 'euiTextAlign--center'
};
exports.alignmentToClassNameMap = alignmentToClassNameMap;
var ALIGNMENTS = (0, _common.keysOf)(alignmentToClassNameMap);
exports.ALIGNMENTS = ALIGNMENTS;

var EuiTextAlign = function EuiTextAlign(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "textAlign"]);
  var classes = (0, _classnames.default)('euiTextAlign', alignmentToClassNameMap[textAlign], className);
  return (0, _react2.jsx)("div", (0, _extends2.default)({
    className: classes
  }, rest), children);
};

exports.EuiTextAlign = EuiTextAlign;