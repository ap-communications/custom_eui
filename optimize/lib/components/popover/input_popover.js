"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiInputPopover = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tabbable = _interopRequireDefault(require("tabbable"));

var _focus_trap = require("../focus_trap");

var _popover = require("./popover");

var _resize_observer = require("../observer/resize_observer");

var _services = require("../../services");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiInputPopover = function EuiInputPopover(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$disableFocusTrap = _ref.disableFocusTrap,
      disableFocusTrap = _ref$disableFocusTrap === void 0 ? false : _ref$disableFocusTrap,
      input = _ref.input,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      onPanelResize = _ref.onPanelResize,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "disableFocusTrap", "input", "fullWidth", "onPanelResize"]);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputEl = _useState2[0],
      setInputEl = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      inputElWidth = _useState4[0],
      setInputElWidth = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      panelEl = _useState6[0],
      setPanelEl = _useState6[1];

  var inputRef = function inputRef(node) {
    return setInputEl(node);
  };

  var panelRef = function panelRef(node) {
    return setPanelEl(node);
  };

  var setPanelWidth = (0, _react.useCallback)(function (width) {
    if (panelEl && (!!inputElWidth || !!width)) {
      var newWidth = !!width ? width : inputElWidth;
      panelEl.style.width = "".concat(newWidth, "px");

      if (onPanelResize) {
        onPanelResize(newWidth);
      }
    }
  }, [panelEl, inputElWidth, onPanelResize]);
  var onResize = (0, _react.useCallback)(function () {
    if (inputEl) {
      var _width = inputEl.getBoundingClientRect().width;
      setInputElWidth(_width);
      setPanelWidth(_width);
    }
  }, [inputEl, setPanelWidth]);
  (0, _react.useEffect)(function () {
    onResize();
  }, [onResize]);
  (0, _react.useEffect)(function () {
    setPanelWidth();
  }, [setPanelWidth]);

  var onKeyDown = function onKeyDown(event) {
    if (panelEl && event.key === _services.cascadingMenuKeys.TAB) {
      var tabbableItems = (0, _tabbable.default)(panelEl).filter(function (el) {
        return Array.from(el.attributes).map(function (el) {
          return el.name;
        }).indexOf('data-focus-guard') < 0;
      });

      if (disableFocusTrap || tabbableItems.length && tabbableItems[tabbableItems.length - 1] === document.activeElement) {
        props.closePopover();
      }
    }
  };

  var classes = (0, _classnames.default)('euiInputPopover', {
    'euiInputPopover--fullWidth': fullWidth
  }, className);
  return (0, _react2.jsx)(_popover.EuiPopover, (0, _extends2.default)({
    ownFocus: false,
    button: (0, _react2.jsx)(_resize_observer.EuiResizeObserver, {
      onResize: onResize
    }, function (resizeRef) {
      return (0, _react2.jsx)("div", {
        ref: resizeRef
      }, input);
    }),
    buttonRef: inputRef,
    panelRef: panelRef,
    className: classes
  }, props), (0, _react2.jsx)(_focus_trap.EuiFocusTrap, {
    clickOutsideDisables: true,
    disabled: disableFocusTrap
  }, (0, _react2.jsx)("div", {
    onKeyDown: onKeyDown
  }, children)));
};

exports.EuiInputPopover = EuiInputPopover;
EuiInputPopover.defaultProps = {
  anchorPosition: 'downLeft',
  attachToAnchor: true,
  display: 'block',
  panelPaddingSize: 's'
};