"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiLoadingContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiLoadingContent = function EuiLoadingContent(_ref) {
  var _ref$lines = _ref.lines,
      lines = _ref$lines === void 0 ? 3 : _ref$lines,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["lines", "className"]);
  var classes = (0, _classnames.default)('euiLoadingContent', className);
  var lineElements = [];

  for (var i = 0; i < lines; i++) {
    lineElements.push((0, _react2.jsx)("span", {
      key: i,
      className: "euiLoadingContent__singleLine"
    }, (0, _react2.jsx)("span", {
      className: "euiLoadingContent__singleLineBackground"
    })));
  }

  return (0, _react2.jsx)("span", (0, _extends2.default)({
    className: classes
  }, rest), lineElements);
};

exports.EuiLoadingContent = EuiLoadingContent;