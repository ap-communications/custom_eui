"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableHeader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiTableHeader = function EuiTableHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$wrapWithTableRow = _ref.wrapWithTableRow,
      wrapWithTableRow = _ref$wrapWithTableRow === void 0 ? true : _ref$wrapWithTableRow,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "wrapWithTableRow"]);
  return (0, _react2.jsx)("thead", (0, _extends2.default)({
    className: className
  }, rest), wrapWithTableRow ? (0, _react2.jsx)("tr", null, children) : children);
};

exports.EuiTableHeader = EuiTableHeader;