"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableFooterCell = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _utils = require("./utils");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiTableFooterCell = function EuiTableFooterCell(_ref) {
  var children = _ref.children,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? _services.LEFT_ALIGNMENT : _ref$align,
      className = _ref.className,
      width = _ref.width,
      style = _ref.style,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "align", "className", "width", "style"]);
  var classes = (0, _classnames.default)('euiTableFooterCell', className);
  var contentClasses = (0, _classnames.default)('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': align === _services.RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': align === _services.CENTER_ALIGNMENT
  });
  var styleObj = (0, _utils.resolveWidthAsStyle)(style, width);
  return (0, _react2.jsx)("td", (0, _extends2.default)({
    className: classes,
    style: styleObj
  }, rest), (0, _react2.jsx)("div", {
    className: contentClasses
  }, (0, _react2.jsx)("span", {
    className: "euiTableCellContent__text"
  }, children)));
};

exports.EuiTableFooterCell = EuiTableFooterCell;