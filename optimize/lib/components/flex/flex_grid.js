"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFlexGrid = exports.COLUMNS = exports.GUTTER_SIZES = exports.DIRECTIONS = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var directionToClassNameMap = {
  row: null,
  column: 'euiFlexGrid--directionColumn'
};
var DIRECTIONS = (0, _common.keysOf)(directionToClassNameMap);
exports.DIRECTIONS = DIRECTIONS;
var gutterSizeToClassNameMap = {
  none: 'euiFlexGrid--gutterNone',
  s: 'euiFlexGrid--gutterSmall',
  m: 'euiFlexGrid--gutterMedium',
  l: 'euiFlexGrid--gutterLarge',
  xl: 'euiFlexGrid--gutterXLarge'
};
var GUTTER_SIZES = (0, _common.keysOf)(gutterSizeToClassNameMap);
exports.GUTTER_SIZES = GUTTER_SIZES;
var columnsToClassNameMap = {
  0: 'euiFlexGrid--wrap',
  1: 'euiFlexGrid--single',
  2: 'euiFlexGrid--halves',
  3: 'euiFlexGrid--thirds',
  4: 'euiFlexGrid--fourths'
};
var COLUMNS = Object.keys(columnsToClassNameMap).map(function (columns) {
  return parseInt(columns, 10);
});
exports.COLUMNS = COLUMNS;

var EuiFlexGrid = function EuiFlexGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$gutterSize = _ref.gutterSize,
      gutterSize = _ref$gutterSize === void 0 ? 'l' : _ref$gutterSize,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? 0 : _ref$columns,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "gutterSize", "direction", "responsive", "columns", "component"]);
  var classes = (0, _classnames.default)('euiFlexGrid', gutterSize ? gutterSizeToClassNameMap[gutterSize] : undefined, columns != null ? columnsToClassNameMap[columns] : undefined, direction ? directionToClassNameMap[direction] : undefined, {
    'euiFlexGrid--responsive': responsive
  }, className);
  return (// @ts-ignore difficult to verify `rest` applies to `Component`
    (0, _react2.jsx)(Component, (0, _extends2.default)({
      className: classes
    }, rest), children)
  );
};

exports.EuiFlexGrid = EuiFlexGrid;