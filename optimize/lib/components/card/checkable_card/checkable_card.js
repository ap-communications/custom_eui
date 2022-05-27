"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCheckableCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _form = require("../../form");

var _panel = require("../../panel");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiCheckableCard = function EuiCheckableCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$checkableType = _ref.checkableType,
      checkableType = _ref$checkableType === void 0 ? 'radio' : _ref$checkableType,
      label = _ref.label,
      checked = _ref.checked,
      disabled = _ref.disabled,
      hasShadow = _ref.hasShadow,
      _ref$hasBorder = _ref.hasBorder,
      hasBorder = _ref$hasBorder === void 0 ? true : _ref$hasBorder,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "checkableType", "label", "checked", "disabled", "hasShadow", "hasBorder"]);
  var id = rest.id;
  var labelEl = (0, _react.useRef)(null);
  var classes = (0, _classnames.default)('euiCheckableCard', {
    'euiCheckableCard-isChecked': checked,
    'euiCheckableCard-isDisabled': disabled
  }, className);
  var checkableElement;

  if (checkableType === 'radio') {
    checkableElement = (0, _react2.jsx)(_form.EuiRadio, (0, _extends2.default)({
      checked: checked,
      disabled: disabled
    }, rest));
  } else {
    checkableElement = (0, _react2.jsx)(_form.EuiCheckbox, (0, _extends2.default)({
      checked: checked,
      disabled: disabled
    }, rest));
  }

  var labelClasses = (0, _classnames.default)('euiCheckableCard__label', {
    'euiCheckableCard__label-isDisabled': disabled
  });

  var onChangeAffordance = function onChangeAffordance() {
    if (labelEl.current) {
      labelEl.current.click();
    }
  };

  return (0, _react2.jsx)(_panel.EuiSplitPanel.Outer, {
    responsive: false,
    hasShadow: hasShadow,
    hasBorder: hasBorder,
    direction: "row",
    className: classes
  }, (0, _react2.jsx)(_panel.EuiSplitPanel.Inner, {
    // Bubbles up the change event when clicking on the whole div for extra affordance
    onClick: disabled ? undefined : onChangeAffordance,
    color: checked ? 'primary' : 'subdued',
    grow: false
  }, checkableElement), (0, _react2.jsx)(_panel.EuiSplitPanel.Inner, null, (0, _react2.jsx)("label", {
    ref: labelEl,
    className: labelClasses,
    htmlFor: id,
    "aria-describedby": children ? "".concat(id, "-details") : undefined
  }, label), children && (0, _react2.jsx)("div", {
    id: "".concat(id, "-details"),
    className: "euiCheckableCard__children"
  }, children)));
};

exports.EuiCheckableCard = EuiCheckableCard;