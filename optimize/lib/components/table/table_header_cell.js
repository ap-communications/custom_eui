"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableHeaderCell = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accessibility = require("../accessibility");

var _icon = require("../icon");

var _utils = require("./utils");

var _inner_text = require("../inner_text");

var _services = require("../../services");

var _i18n = require("../i18n");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var CellContents = function CellContents(_ref) {
  var className = _ref.className,
      description = _ref.description,
      children = _ref.children,
      isSorted = _ref.isSorted,
      isSortAscending = _ref.isSortAscending,
      showSortMsg = _ref.showSortMsg;
  return (0, _react2.jsx)("span", {
    className: className
  }, (0, _react2.jsx)(_inner_text.EuiInnerText, null, function (ref, innerText) {
    return (0, _react2.jsx)(_i18n.EuiI18n, {
      token: "euiTableHeaderCell.titleTextWithDesc",
      default: "{innerText}; {description}",
      values: {
        innerText: innerText,
        description: description
      }
    }, function (titleTextWithDesc) {
      return (0, _react2.jsx)("span", {
        title: description ? titleTextWithDesc : innerText,
        ref: ref,
        className: "euiTableCellContent__text"
      }, children);
    });
  }), description && (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("span", null, description)), showSortMsg && isSorted && (0, _react2.jsx)(_icon.EuiIcon, {
    className: "euiTableSortIcon",
    type: isSortAscending ? 'sortUp' : 'sortDown',
    size: "m"
  }));
};

var EuiTableHeaderCell = function EuiTableHeaderCell(_ref2) {
  var children = _ref2.children,
      _ref2$align = _ref2.align,
      align = _ref2$align === void 0 ? _services.LEFT_ALIGNMENT : _ref2$align,
      onSort = _ref2.onSort,
      isSorted = _ref2.isSorted,
      isSortAscending = _ref2.isSortAscending,
      className = _ref2.className,
      scope = _ref2.scope,
      _ref2$mobileOptions = _ref2.mobileOptions,
      mobileOptions = _ref2$mobileOptions === void 0 ? {
    show: true
  } : _ref2$mobileOptions,
      width = _ref2.width,
      style = _ref2.style,
      readOnly = _ref2.readOnly,
      description = _ref2.description,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["children", "align", "onSort", "isSorted", "isSortAscending", "className", "scope", "mobileOptions", "width", "style", "readOnly", "description"]);
  var classes = (0, _classnames.default)('euiTableHeaderCell', className, {
    'euiTableHeaderCell--hideForDesktop': mobileOptions.only,
    'euiTableHeaderCell--hideForMobile': !mobileOptions.show
  });
  var contentClasses = (0, _classnames.default)('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': align === _services.RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': align === _services.CENTER_ALIGNMENT
  });
  var styleObj = (0, _utils.resolveWidthAsStyle)(style, width);
  var CellComponent = children ? 'th' : 'td';
  var cellScope = CellComponent === 'th' ? scope !== null && scope !== void 0 ? scope : 'col' : undefined; // `scope` is only valid on `th` elements

  if (onSort || isSorted) {
    var buttonClasses = (0, _classnames.default)('euiTableHeaderButton', {
      'euiTableHeaderButton-isSorted': isSorted
    });
    var ariaSortValue = 'none';

    if (isSorted) {
      ariaSortValue = isSortAscending ? 'ascending' : 'descending';
    }

    var cellContents = (0, _react2.jsx)(CellContents, {
      className: contentClasses,
      description: description,
      showSortMsg: true,
      children: children,
      isSorted: isSorted,
      isSortAscending: isSortAscending
    });
    return (0, _react2.jsx)(CellComponent, (0, _extends2.default)({
      className: classes,
      scope: cellScope,
      role: "columnheader",
      "aria-sort": ariaSortValue,
      "aria-live": "polite",
      style: styleObj
    }, rest), onSort && !readOnly ? (0, _react2.jsx)("button", {
      type: "button",
      className: buttonClasses,
      onClick: onSort,
      "data-test-subj": "tableHeaderSortButton"
    }, cellContents) : cellContents);
  }

  return (0, _react2.jsx)(CellComponent, (0, _extends2.default)({
    className: classes,
    scope: cellScope,
    role: "columnheader",
    style: styleObj
  }, rest), (0, _react2.jsx)(CellContents, {
    className: contentClasses,
    description: description,
    showSortMsg: false,
    children: children,
    isSorted: isSorted,
    isSortAscending: isSortAscending
  }));
};

exports.EuiTableHeaderCell = EuiTableHeaderCell;