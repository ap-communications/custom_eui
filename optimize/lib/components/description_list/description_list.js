"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDescriptionList = exports.TEXT_STYLES = exports.ALIGNMENTS = exports.TYPES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _description_list_title = require("./description_list_title");

var _description_list_description = require("./description_list_description");

var _common = require("../common");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var typesToClassNameMap = {
  row: 'euiDescriptionList--row',
  inline: 'euiDescriptionList--inline',
  column: 'euiDescriptionList--column',
  responsiveColumn: 'euiDescriptionList--responsiveColumn'
};
var TYPES = (0, _common.keysOf)(typesToClassNameMap);
exports.TYPES = TYPES;
var alignmentsToClassNameMap = {
  center: 'euiDescriptionList--center',
  left: ''
};
var ALIGNMENTS = (0, _common.keysOf)(alignmentsToClassNameMap);
exports.ALIGNMENTS = ALIGNMENTS;
var textStylesToClassNameMap = {
  normal: '',
  reverse: 'euiDescriptionList--reverse'
};
var TEXT_STYLES = (0, _common.keysOf)(textStylesToClassNameMap);
exports.TEXT_STYLES = TEXT_STYLES;

var EuiDescriptionList = function EuiDescriptionList(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      children = _ref.children,
      className = _ref.className,
      _ref$compressed = _ref.compressed,
      compressed = _ref$compressed === void 0 ? false : _ref$compressed,
      descriptionProps = _ref.descriptionProps,
      listItems = _ref.listItems,
      _ref$textStyle = _ref.textStyle,
      textStyle = _ref$textStyle === void 0 ? 'normal' : _ref$textStyle,
      titleProps = _ref.titleProps,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'row' : _ref$type,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["align", "children", "className", "compressed", "descriptionProps", "listItems", "textStyle", "titleProps", "type"]);
  var classes = (0, _classnames.default)('euiDescriptionList', type ? typesToClassNameMap[type] : undefined, align ? alignmentsToClassNameMap[align] : undefined, textStyle ? textStylesToClassNameMap[textStyle] : undefined, {
    'euiDescriptionList--compressed': compressed
  }, className);
  var childrenOrListItems = null;

  if (listItems) {
    childrenOrListItems = listItems.map(function (item, index) {
      return [(0, _react2.jsx)(_description_list_title.EuiDescriptionListTitle, (0, _extends2.default)({
        key: "title-".concat(index)
      }, titleProps), item.title), (0, _react2.jsx)(_description_list_description.EuiDescriptionListDescription, (0, _extends2.default)({
        key: "description-".concat(index)
      }, descriptionProps), item.description)];
    });
  } else {
    childrenOrListItems = children;
  }

  return (0, _react2.jsx)("dl", (0, _extends2.default)({
    className: classes
  }, rest), childrenOrListItems);
};

exports.EuiDescriptionList = EuiDescriptionList;