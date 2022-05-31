"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeLabel = void 0;

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
var EuiRangeLabel = function EuiRangeLabel(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      _ref$side = _ref.side,
      side = _ref$side === void 0 ? 'max' : _ref$side;
  var classes = (0, _classnames.default)('euiRangeLabel', "euiRangeLabel--".concat(side), {
    'euiRangeLabel--isDisabled': disabled
  });
  return (0, _react2.jsx)("label", {
    className: classes
  }, children);
};

exports.EuiRangeLabel = EuiRangeLabel;