"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSwitch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accessibility = require("../../../services/accessibility");

var _icon = require("../../icon");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiSwitch = function EuiSwitch(_ref) {
  var label = _ref.label,
      id = _ref.id,
      checked = _ref.checked,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      onChange = _ref.onChange,
      className = _ref.className,
      _ref$showLabel = _ref.showLabel,
      showLabel = _ref$showLabel === void 0 ? true : _ref$showLabel,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      labelProps = _ref.labelProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["label", "id", "checked", "disabled", "compressed", "onChange", "className", "showLabel", "type", "labelProps"]);
  var switchId = (0, _accessibility.useGeneratedHtmlId)({
    conditionalId: id
  });
  var labelId = (0, _accessibility.useGeneratedHtmlId)({
    conditionalId: labelProps === null || labelProps === void 0 ? void 0 : labelProps.id
  });
  var onClick = (0, _react.useCallback)(function (e) {
    if (disabled) {
      return;
    }

    var event = e;
    event.target.checked = !checked;
    onChange(event);
  }, [checked, disabled, onChange]);
  var classes = (0, _classnames.default)('euiSwitch', {
    'euiSwitch--compressed': compressed
  }, className);
  var labelClasses = (0, _classnames.default)('euiSwitch__label', labelProps === null || labelProps === void 0 ? void 0 : labelProps.className);

  if (showLabel === false && typeof label !== 'string') {
    console.warn('EuiSwitch `label` must be a string when `showLabel` is false.');
  }

  return (0, _react2.jsx)("div", {
    className: classes
  }, (0, _react2.jsx)("button", (0, _extends2.default)({
    id: switchId,
    "aria-checked": checked || false,
    className: "euiSwitch__button",
    role: "switch",
    type: type,
    disabled: disabled,
    onClick: onClick,
    "aria-label": showLabel ? undefined : label,
    "aria-labelledby": showLabel ? labelId : undefined
  }, rest), (0, _react2.jsx)("span", {
    className: "euiSwitch__body"
  }, (0, _react2.jsx)("span", {
    className: "euiSwitch__thumb"
  }), (0, _react2.jsx)("span", {
    className: "euiSwitch__track"
  }, !compressed && (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_icon.EuiIcon, {
    type: "cross",
    size: "m",
    className: "euiSwitch__icon"
  }), (0, _react2.jsx)(_icon.EuiIcon, {
    type: "check",
    size: "m",
    className: "euiSwitch__icon euiSwitch__icon--checked"
  }))))), showLabel && // <button> + <label> has poor screen reader support.
  // Click handler added to simulate natural, secondary <label> interactivity.
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  (0, _react2.jsx)("span", (0, _extends2.default)({}, labelProps, {
    className: labelClasses,
    id: labelId,
    onClick: onClick
  }), label));
};

exports.EuiSwitch = EuiSwitch;