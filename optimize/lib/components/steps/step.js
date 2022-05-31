"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStep = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _title = require("../title");

var _step_number = require("./step_number");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiStep = function EuiStep(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$headingElement = _ref.headingElement,
      headingElement = _ref$headingElement === void 0 ? 'p' : _ref$headingElement,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      title = _ref.title,
      _ref$titleSize = _ref.titleSize,
      titleSize = _ref$titleSize === void 0 ? 's' : _ref$titleSize,
      status = _ref.status,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "headingElement", "step", "title", "titleSize", "status"]);
  var classes = (0, _classnames.default)('euiStep', {
    'euiStep--small': titleSize === 'xs',
    'euiStep-isDisabled': status === 'disabled'
  }, className);
  var numberClasses = (0, _classnames.default)('euiStep__circle', {
    'euiStepNumber--small': titleSize === 'xs'
  });
  return (0, _react2.jsx)("div", (0, _extends2.default)({
    className: classes
  }, rest), (0, _react2.jsx)("div", {
    className: "euiStep__titleWrapper"
  }, (0, _react2.jsx)(_step_number.EuiStepNumber, {
    className: numberClasses,
    number: step,
    status: status,
    titleSize: titleSize,
    isHollow: status === 'incomplete'
  }), (0, _react2.jsx)(_title.EuiTitle, {
    size: titleSize,
    className: "euiStep__title"
  }, /*#__PURE__*/(0, _react.createElement)(headingElement, null, title))), (0, _react2.jsx)("div", {
    className: "euiStep__content"
  }, children));
};

exports.EuiStep = EuiStep;