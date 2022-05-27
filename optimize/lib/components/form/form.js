"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiForm = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _call_out = require("../call_out");

var _i18n = require("../i18n");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiForm = function EuiForm(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isInvalid = _ref.isInvalid,
      error = _ref.error,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'div' : _ref$component,
      _ref$invalidCallout = _ref.invalidCallout,
      invalidCallout = _ref$invalidCallout === void 0 ? 'above' : _ref$invalidCallout,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "isInvalid", "error", "component", "invalidCallout"]);
  var handleFocus = (0, _react.useCallback)(function (node) {
    node === null || node === void 0 ? void 0 : node.focus();
  }, []);
  var classes = (0, _classnames.default)('euiForm', className);
  var optionalErrors = null;

  if (error) {
    var errorTexts = Array.isArray(error) ? error : [error];
    optionalErrors = (0, _react2.jsx)("ul", null, errorTexts.map(function (error, index) {
      return (0, _react2.jsx)("li", {
        className: "euiForm__error",
        key: index
      }, error);
    }));
  }

  var optionalErrorAlert;

  if (isInvalid && invalidCallout === 'above') {
    optionalErrorAlert = (0, _react2.jsx)(_i18n.EuiI18n, {
      token: "euiForm.addressFormErrors",
      default: "Please address the highlighted errors."
    }, function (addressFormErrors) {
      return (0, _react2.jsx)(_call_out.EuiCallOut, {
        tabIndex: -1,
        ref: handleFocus,
        className: "euiForm__errors",
        title: addressFormErrors,
        color: "danger",
        role: "alert",
        "aria-live": "assertive"
      }, optionalErrors);
    });
  }

  var Element = component;
  return (0, _react2.jsx)(Element, (0, _extends2.default)({
    className: classes
  }, rest), optionalErrorAlert, children);
};

exports.EuiForm = EuiForm;