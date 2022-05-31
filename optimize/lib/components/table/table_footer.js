"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableFooter = void 0;

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
var EuiTableFooter = function EuiTableFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className"]);
  return (0, _react2.jsx)("tfoot", (0, _extends2.default)({
    className: className
  }, rest), (0, _react2.jsx)("tr", null, children));
};

exports.EuiTableFooter = EuiTableFooter;