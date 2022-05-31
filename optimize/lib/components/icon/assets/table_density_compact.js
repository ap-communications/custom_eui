"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js
var EuiIconTableDensityCompact = function EuiIconTableDensityCompact(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = (0, _objectWithoutProperties2.default)(_ref, ["title", "titleId"]);
  return (0, _react2.jsx)("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    "aria-labelledby": titleId
  }, props), title ? (0, _react2.jsx)("title", {
    id: titleId
  }, title) : null, (0, _react2.jsx)("path", {
    d: "M16 3v11a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12a2 2 0 012 2v1zm-1 0V2a1 1 0 00-1-1H2a1 1 0 00-1 1v1h14zm0 1H1v10a1 1 0 001 1h12a1 1 0 001-1V4zM4.496 7a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm5.218 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 8 6 7.776 6 7.5s.128-.5.286-.5h3.428zM4.496 5a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm5.218 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 6 6 5.776 6 5.5s.128-.5.286-.5h3.428zM4.496 9a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm5.218 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 10 6 9.776 6 9.5s.128-.5.286-.5h3.428zm-5.218 2a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm5.218 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 12 6 11.776 6 11.5s.128-.5.286-.5h3.428zm-5.218 2a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm9-6a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm0-2a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm0 4a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm0 2a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm0 2a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm-3.782 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 14 6 13.776 6 13.5s.128-.5.286-.5h3.428z"
  }));
};

var icon = EuiIconTableDensityCompact;
exports.icon = icon;