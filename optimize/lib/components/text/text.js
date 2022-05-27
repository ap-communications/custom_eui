"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiText = exports.TEXT_SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _text_color = require("./text_color");

var _text_align = require("./text_align");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var textSizeToClassNameMap = {
  xs: 'euiText--extraSmall',
  s: 'euiText--small',
  m: 'euiText--medium',
  relative: 'euiText--relative'
};
var TEXT_SIZES = (0, _common.keysOf)(textSizeToClassNameMap);
exports.TEXT_SIZES = TEXT_SIZES;

var EuiText = function EuiText(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      color = _ref.color,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? true : _ref$grow,
      textAlign = _ref.textAlign,
      children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["size", "color", "grow", "textAlign", "children", "className"]);
  var classes = (0, _classnames.default)('euiText', textSizeToClassNameMap[size], className, {
    'euiText--constrainedWidth': !grow
  });
  var optionallyAlteredText;

  if (color) {
    optionallyAlteredText = (0, _react2.jsx)(_text_color.EuiTextColor, {
      color: color,
      component: "div"
    }, children);
  }

  if (textAlign) {
    optionallyAlteredText = (0, _react2.jsx)(_text_align.EuiTextAlign, {
      textAlign: textAlign
    }, optionallyAlteredText || children);
  }

  return (0, _react2.jsx)("div", (0, _extends2.default)({
    className: classes
  }, rest), optionallyAlteredText || children);
};

exports.EuiText = EuiText;