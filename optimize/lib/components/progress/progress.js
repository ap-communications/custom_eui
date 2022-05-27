"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiProgress = exports.POSITIONS = exports.COLORS = exports.SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18n = require("../i18n");

var _inner_text = require("../inner_text");

var _common = require("../common");

var _predicate = require("../../services/predicate");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var sizeToClassNameMap = {
  xs: 'euiProgress--xs',
  s: 'euiProgress--s',
  m: 'euiProgress--m',
  l: 'euiProgress--l'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;
var colorToClassNameMap = {
  primary: 'euiProgress--primary',
  success: 'euiProgress--success',
  warning: 'euiProgress--warning',
  danger: 'euiProgress--danger',
  subdued: 'euiProgress--subdued',
  accent: 'euiProgress--accent',
  vis0: 'euiProgress--vis0',
  vis1: 'euiProgress--vis1',
  vis2: 'euiProgress--vis2',
  vis3: 'euiProgress--vis3',
  vis4: 'euiProgress--vis4',
  vis5: 'euiProgress--vis5',
  vis6: 'euiProgress--vis6',
  vis7: 'euiProgress--vis7',
  vis8: 'euiProgress--vis8',
  vis9: 'euiProgress--vis9'
};
var COLORS = (0, _common.keysOf)(colorToClassNameMap);
exports.COLORS = COLORS;

function isNamedColor(name) {
  return colorToClassNameMap.hasOwnProperty(name);
}

var dataColorToClassNameMap = {
  primary: 'euiProgress__data--primary',
  success: 'euiProgress__data--success',
  warning: 'euiProgress__data--warning',
  danger: 'euiProgress__data--danger',
  subdued: 'euiProgress__data--subdued',
  accent: 'euiProgress__data--accent',
  vis0: 'euiProgress__data--vis0',
  vis1: 'euiProgress__data--vis1',
  vis2: 'euiProgress__data--vis2',
  vis3: 'euiProgress__data--vis3',
  vis4: 'euiProgress__data--vis4',
  vis5: 'euiProgress__data--vis5',
  vis6: 'euiProgress__data--vis6',
  vis7: 'euiProgress__data--vis7',
  vis8: 'euiProgress__data--vis8',
  vis9: 'euiProgress__data--vis9'
};
var positionsToClassNameMap = {
  fixed: 'euiProgress--fixed',
  absolute: 'euiProgress--absolute',
  static: ''
};
var POSITIONS = (0, _common.keysOf)(positionsToClassNameMap);
exports.POSITIONS = POSITIONS;

var EuiProgress = function EuiProgress(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'success' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'static' : _ref$position,
      max = _ref.max,
      _ref$valueText = _ref.valueText,
      valueText = _ref$valueText === void 0 ? false : _ref$valueText,
      label = _ref.label,
      value = _ref.value,
      labelProps = _ref.labelProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "color", "size", "position", "max", "valueText", "label", "value", "labelProps"]);
  var determinate = !(0, _predicate.isNil)(max);
  var colorClass = null;
  var dataColorClass = null;
  var optionalCustomStyles = null;

  if (color) {
    if (isNamedColor(color)) {
      colorClass = colorToClassNameMap[color];
      dataColorClass = dataColorToClassNameMap[color];
    } else {
      optionalCustomStyles = {
        color: color
      };
      colorClass = 'euiProgress--customColor';
    }
  }

  var classes = (0, _classnames.default)('euiProgress', {
    'euiProgress--indeterminate': !determinate,
    'euiProgress--native': determinate
  }, sizeToClassNameMap[size], colorClass, positionsToClassNameMap[position], className);
  var dataClasses = (0, _classnames.default)('euiProgress__data', {
    'euiProgress__data--l': size === 'l'
  }, dataColorClass);
  var labelClasses = (0, _classnames.default)('euiProgress__label', labelProps && labelProps.className);
  var valueRender;

  if (valueText === true) {
    // valueText is true
    valueRender = (0, _react2.jsx)(_i18n.EuiI18n, {
      token: "euiProgress.valueText",
      default: "{value}%",
      values: {
        value: value
      }
    });
  } else if (valueText) {
    // valueText exists
    valueRender = valueText;
  } // Because of a Firefox animation issue, indeterminate progress needs to not use <progress />.
  // See https://css-tricks.com/html5-progress-element/


  if (determinate) {
    return (0, _react2.jsx)(_react.Fragment, null, label || valueText ? (0, _react2.jsx)("div", {
      className: dataClasses
    }, label && (0, _react2.jsx)(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return (0, _react2.jsx)("span", (0, _extends2.default)({
        title: innerText,
        ref: ref
      }, labelProps, {
        className: labelClasses
      }), label);
    }), valueRender && (0, _react2.jsx)(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return (0, _react2.jsx)("span", {
        title: innerText,
        ref: ref,
        style: optionalCustomStyles,
        className: "euiProgress__valueText"
      }, valueRender);
    })) : undefined, (0, _react2.jsx)("progress", (0, _extends2.default)({
      className: classes,
      style: optionalCustomStyles,
      max: max,
      value: value,
      "aria-hidden": label && valueText ? true : false
    }, rest)));
  } else {
    return (0, _react2.jsx)("div", (0, _extends2.default)({
      style: optionalCustomStyles,
      className: classes
    }, rest));
  }
};

exports.EuiProgress = EuiProgress;