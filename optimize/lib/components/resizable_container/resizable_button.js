"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.euiResizableButtonWithControls = euiResizableButtonWithControls;
exports.EuiResizableButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18n = require("../i18n");

var _services = require("../../services");

var _context = require("./context");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiResizableButton = function EuiResizableButton(_ref) {
  var isHorizontal = _ref.isHorizontal,
      className = _ref.className,
      id = _ref.id,
      registration = _ref.registration,
      disabled = _ref.disabled,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["isHorizontal", "className", "id", "registration", "disabled", "onFocus", "onBlur"]);
  var resizerId = (0, _services.useGeneratedHtmlId)({
    prefix: 'resizable-button',
    conditionalId: id
  });

  var _useEuiResizableConta = (0, _context.useEuiResizableContainerContext)(),
      _useEuiResizableConta2 = _useEuiResizableConta.registry;

  _useEuiResizableConta2 = _useEuiResizableConta2 === void 0 ? {
    resizers: {}
  } : _useEuiResizableConta2;
  var resizers = _useEuiResizableConta2.resizers;
  var isDisabled = (0, _react.useMemo)(function () {
    return disabled || resizers[resizerId] && resizers[resizerId].isDisabled;
  }, [resizers, resizerId, disabled]);
  var classes = (0, _classnames.default)('euiResizableButton', {
    'euiResizableButton--vertical': !isHorizontal,
    'euiResizableButton--horizontal': isHorizontal,
    'euiResizableButton--disabled': isDisabled
  }, className);
  var previousRef = (0, _react.useRef)();
  var onRef = (0, _react.useCallback)(function (ref) {
    if (!registration) return;

    if (ref) {
      previousRef.current = ref;
      registration.register({
        id: resizerId,
        ref: ref,
        isFocused: false,
        isDisabled: disabled || false
      });
    } else {
      if (previousRef.current != null) {
        registration.deregister(resizerId);
        previousRef.current = undefined;
      }
    }
  }, [registration, resizerId, disabled]);

  var setFocus = function setFocus(e) {
    return e.currentTarget.focus();
  };

  var handleFocus = function handleFocus() {
    onFocus && onFocus(resizerId);
  };

  return (0, _react2.jsx)(_i18n.EuiI18n, {
    tokens: ['euiResizableButton.horizontalResizerAriaLabel', 'euiResizableButton.verticalResizerAriaLabel'],
    defaults: ['Press left or right to adjust panels size', 'Press up or down to adjust panels size']
  }, function (_ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        horizontalResizerAriaLabel = _ref3[0],
        verticalResizerAriaLabel = _ref3[1];

    return (0, _react2.jsx)("button", (0, _extends2.default)({
      id: resizerId,
      ref: onRef,
      "aria-label": isHorizontal ? horizontalResizerAriaLabel : verticalResizerAriaLabel,
      className: classes,
      "data-test-subj": "euiResizableButton",
      type: "button",
      onClick: setFocus,
      onFocus: handleFocus,
      onBlur: onBlur,
      disabled: isDisabled
    }, rest));
  });
};

exports.EuiResizableButton = EuiResizableButton;

function euiResizableButtonWithControls(controls) {
  return function (props) {
    return (0, _react2.jsx)(EuiResizableButton, (0, _extends2.default)({}, controls, props));
  };
}