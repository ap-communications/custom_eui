"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDescribedFormGroup = exports.PADDING_SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../../common");

var _title = require("../../title");

var _text = require("../../text");

var _flex = require("../../flex");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var paddingSizeToClassNameMap = {
  xxxs: 'euiDescribedFormGroup__fieldPadding--xxxsmall',
  xxs: 'euiDescribedFormGroup__fieldPadding--xxsmall',
  xs: 'euiDescribedFormGroup__fieldPadding--xsmall',
  s: 'euiDescribedFormGroup__fieldPadding--small',
  m: 'euiDescribedFormGroup__fieldPadding--medium',
  l: 'euiDescribedFormGroup__fieldPadding--large'
};
var PADDING_SIZES = (0, _common.keysOf)(paddingSizeToClassNameMap);
exports.PADDING_SIZES = PADDING_SIZES;

var EuiDescribedFormGroup = function EuiDescribedFormGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$gutterSize = _ref.gutterSize,
      gutterSize = _ref$gutterSize === void 0 ? 'l' : _ref$gutterSize,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      _ref$titleSize = _ref.titleSize,
      titleSize = _ref$titleSize === void 0 ? 'xs' : _ref$titleSize,
      title = _ref.title,
      description = _ref.description,
      descriptionFlexItemProps = _ref.descriptionFlexItemProps,
      fieldFlexItemProps = _ref.fieldFlexItemProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "gutterSize", "fullWidth", "titleSize", "title", "description", "descriptionFlexItemProps", "fieldFlexItemProps"]);
  var classes = (0, _classnames.default)('euiDescribedFormGroup', {
    'euiDescribedFormGroup--fullWidth': fullWidth
  }, className);
  var fieldClasses = (0, _classnames.default)('euiDescribedFormGroup__fields', paddingSizeToClassNameMap[titleSize], fieldFlexItemProps && fieldFlexItemProps.className);
  var renderedDescription;

  if (description) {
    renderedDescription = (0, _react2.jsx)(_text.EuiText, {
      size: "s",
      color: "subdued",
      className: "euiDescribedFormGroup__description"
    }, description);
  }

  return (0, _react2.jsx)("div", (0, _extends2.default)({
    role: "group",
    className: classes
  }, rest), (0, _react2.jsx)(_flex.EuiFlexGroup, {
    gutterSize: gutterSize
  }, (0, _react2.jsx)(_flex.EuiFlexItem, descriptionFlexItemProps, (0, _react2.jsx)(_title.EuiTitle, {
    size: titleSize,
    className: "euiDescribedFormGroup__title"
  }, title), renderedDescription), (0, _react2.jsx)(_flex.EuiFlexItem, (0, _extends2.default)({}, fieldFlexItemProps, {
    className: fieldClasses
  }), children)));
};

exports.EuiDescribedFormGroup = EuiDescribedFormGroup;