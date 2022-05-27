"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableRow = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiTableRow = function EuiTableRow(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      hasActions = _ref.hasActions,
      isExpandedRow = _ref.isExpandedRow,
      isExpandable = _ref.isExpandable,
      onClick = _ref.onClick,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "isSelected", "isSelectable", "hasActions", "isExpandedRow", "isExpandable", "onClick"]);
  var classes = (0, _classnames.default)('euiTableRow', className, {
    'euiTableRow-isSelectable': isSelectable,
    'euiTableRow-isSelected': isSelected,
    'euiTableRow-hasActions': hasActions,
    'euiTableRow-isExpandedRow': isExpandedRow,
    'euiTableRow-isExpandable': isExpandable,
    'euiTableRow-isClickable': onClick
  });

  if (!onClick) {
    return (0, _react2.jsx)("tr", (0, _extends2.default)({
      className: classes
    }, rest), children);
  }

  var onKeyDown = function onKeyDown(event) {
    // Prevent a scroll from occurring if the user has hit space.
    if (event.key === _services.keys.SPACE) event.preventDefault();
  };

  var onKeyUp = function onKeyUp(event) {
    // Support keyboard accessibility by emulating mouse click on ENTER or SPACE keypress.
    if (event.key === _services.keys.ENTER || event.key === _services.keys.SPACE) {
      onClick(event);
    }
  };

  return (0, _react2.jsx)("tr", (0, _extends2.default)({
    className: classes,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    tabIndex: 0
  }, rest), children);
};

exports.EuiTableRow = EuiTableRow;