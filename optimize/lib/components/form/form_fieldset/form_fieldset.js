"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFormFieldset = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _form_legend = require("./form_legend");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiFormFieldset = function EuiFormFieldset(_ref) {
  var children = _ref.children,
      className = _ref.className,
      legend = _ref.legend,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "legend"]);
  var legendDisplay = !!legend && (0, _react2.jsx)(_form_legend.EuiFormLegend, legend);
  return (0, _react2.jsx)("fieldset", (0, _extends2.default)({
    className: className
  }, rest), legendDisplay, children);
};

exports.EuiFormFieldset = EuiFormFieldset;