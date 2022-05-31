"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStepNumber = exports.STATUS = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _accessibility = require("../accessibility");

var _common = require("../common");

var _icon = require("../icon");

var _step_strings = require("./step_strings");

var _loading = require("../loading");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var statusToClassNameMap = {
  incomplete: 'euiStepNumber--incomplete',
  disabled: 'euiStepNumber--disabled',
  loading: 'euiStepNumber--loading',
  warning: 'euiStepNumber--warning',
  danger: 'euiStepNumber--danger',
  complete: 'euiStepNumber--complete',
  current: null // Current displays the same as the default (undefined)

};
var STATUS = (0, _common.keysOf)(statusToClassNameMap);
exports.STATUS = STATUS;

var EuiStepNumber = function EuiStepNumber(_ref) {
  var className = _ref.className,
      status = _ref.status,
      number = _ref.number,
      isHollow = _ref.isHollow,
      titleSize = _ref.titleSize,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "status", "number", "isHollow", "titleSize"]);
  var stepAriaLabel = (0, _step_strings.useI18nStep)({
    number: number
  });
  var completeAriaLabel = (0, _step_strings.useI18nCompleteStep)({
    number: number
  });
  var warningAriaLabel = (0, _step_strings.useI18nWarningStep)({
    number: number
  });
  var errorsAriaLabel = (0, _step_strings.useI18nErrorsStep)({
    number: number
  });
  var incompleteAriaLabel = (0, _step_strings.useI18nIncompleteStep)({
    number: number
  });
  var disabledAriaLabel = (0, _step_strings.useI18nDisabledStep)({
    number: number
  });
  var loadingAriaLabel = (0, _step_strings.useI18nLoadingStep)({
    number: number
  });
  var currentAriaLabel = (0, _step_strings.useI18nCurrentStep)({
    number: number
  });
  var classes = (0, _classnames.default)('euiStepNumber', status ? statusToClassNameMap[status] : undefined, {
    'euiStepNumber-isHollow': isHollow
  }, className);
  var iconSize = titleSize === 'xs' ? 's' : 'm';
  var screenReaderText = stepAriaLabel;
  if (status === 'incomplete') screenReaderText = incompleteAriaLabel;else if (status === 'disabled') screenReaderText = disabledAriaLabel;else if (status === 'loading') screenReaderText = loadingAriaLabel;else if (status === 'current') screenReaderText = currentAriaLabel;
  var numberOrIcon = (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("span", null, screenReaderText)), (0, _react2.jsx)("span", {
    className: "euiStepNumber__number",
    "aria-hidden": "true"
  }, number));

  if (status === 'complete') {
    numberOrIcon = (0, _react2.jsx)(_icon.EuiIcon, {
      type: "check",
      className: "euiStepNumber__icon",
      size: iconSize,
      "aria-label": completeAriaLabel
    });
  } else if (status === 'warning') {
    numberOrIcon = (0, _react2.jsx)(_icon.EuiIcon, {
      type: "alert",
      className: "euiStepNumber__icon",
      size: iconSize,
      "aria-label": warningAriaLabel
    });
  } else if (status === 'danger') {
    numberOrIcon = (0, _react2.jsx)(_icon.EuiIcon, {
      type: "cross",
      className: "euiStepNumber__icon",
      size: iconSize,
      "aria-label": errorsAriaLabel
    });
  } else if (status === 'loading') {
    numberOrIcon = (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("span", null, screenReaderText)), (0, _react2.jsx)(_loading.EuiLoadingSpinner, {
      className: "euiStepNumber__loader",
      size: iconSize === 's' ? 'l' : 'xl'
    }));
  }

  return (0, _react2.jsx)("span", (0, _extends2.default)({
    className: classes
  }, rest), numberOrIcon);
};

exports.EuiStepNumber = EuiStepNumber;