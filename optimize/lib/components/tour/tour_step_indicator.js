"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTourStepIndicator = exports.STATUS = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _icon = require("../icon");

var _i18n = require("../i18n");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var statusToClassNameMap = {
  complete: 'euiTourStepIndicator--complete',
  incomplete: 'euiTourStepIndicator--incomplete',
  active: 'euiTourStepIndicator--active'
};
var STATUS = (0, _common.keysOf)(statusToClassNameMap);
exports.STATUS = STATUS;

var EuiTourStepIndicator = function EuiTourStepIndicator(_ref) {
  var className = _ref.className,
      number = _ref.number,
      status = _ref.status,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "number", "status"]);
  var classes = (0, _classnames.default)('euiTourStepIndicator', status ? statusToClassNameMap[status] : undefined, className);
  var indicatorIcon;

  if (status === 'active') {
    indicatorIcon = (0, _react2.jsx)(_i18n.EuiI18n, {
      token: "euiTourStepIndicator.isActive",
      default: "active"
    }, function (isActive) {
      return (0, _react2.jsx)(_icon.EuiIcon, {
        type: "dot",
        className: "euiStepNumber__icon",
        "aria-label": isActive,
        color: "success",
        "aria-current": "step"
      });
    });
  } else if (status === 'complete') {
    indicatorIcon = (0, _react2.jsx)(_i18n.EuiI18n, {
      token: "euiTourStepIndicator.isComplete",
      default: "complete"
    }, function (isComplete) {
      return (0, _react2.jsx)(_icon.EuiIcon, {
        type: "dot",
        className: "euiStepNumber__icon",
        "aria-label": isComplete,
        color: "subdued"
      });
    });
  } else if (status === 'incomplete') {
    indicatorIcon = (0, _react2.jsx)(_i18n.EuiI18n, {
      token: "euiTourStepIndicator.isIncomplete",
      default: "incomplete"
    }, function (isIncomplete) {
      return (0, _react2.jsx)(_icon.EuiIcon, {
        type: "dot",
        className: "euiStepNumber__icon",
        "aria-label": isIncomplete,
        color: "subdued"
      });
    });
  }

  return (0, _react2.jsx)(_i18n.EuiI18n, {
    token: "euiTourStepIndicator.ariaLabel",
    default: "Step {number} {status}",
    values: {
      status: status,
      number: number
    }
  }, function (ariaLabel) {
    return (0, _react2.jsx)("li", (0, _extends2.default)({
      className: classes,
      "aria-label": ariaLabel
    }, rest), indicatorIcon);
  });
};

exports.EuiTourStepIndicator = EuiTourStepIndicator;