"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiConfirmModal = exports.CANCEL_BUTTON = exports.CONFIRM_BUTTON = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _modal = require("./modal");

var _modal_footer = require("./modal_footer");

var _modal_header = require("./modal_header");

var _modal_header_title = require("./modal_header_title");

var _modal_body = require("./modal_body");

var _button = require("../button");

var _text = require("../text");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var CONFIRM_BUTTON = 'confirm';
exports.CONFIRM_BUTTON = CONFIRM_BUTTON;
var CANCEL_BUTTON = 'cancel';
exports.CANCEL_BUTTON = CANCEL_BUTTON;

var EuiConfirmModal = function EuiConfirmModal(_ref) {
  var children = _ref.children,
      title = _ref.title,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      cancelButtonText = _ref.cancelButtonText,
      confirmButtonText = _ref.confirmButtonText,
      confirmButtonDisabled = _ref.confirmButtonDisabled,
      className = _ref.className,
      _ref$buttonColor = _ref.buttonColor,
      buttonColor = _ref$buttonColor === void 0 ? 'primary' : _ref$buttonColor,
      defaultFocusedButton = _ref.defaultFocusedButton,
      isLoading = _ref.isLoading,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "title", "onCancel", "onConfirm", "cancelButtonText", "confirmButtonText", "confirmButtonDisabled", "className", "buttonColor", "defaultFocusedButton", "isLoading"]);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      cancelButton = _useState2[0],
      setCancelButton = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      confirmButton = _useState4[0],
      setConfirmButton = _useState4[1];

  (0, _react.useEffect)(function () {
    // We have to do this instead of using `autoFocus` because React's polyfill for auto-focusing
    // elements conflicts with the focus-trap logic we have on EuiModal.
    // Wait a beat for the focus-trap to complete, and then set focus to the right button. Check that
    // the buttons exist first, because it's possible the modal has been closed already.
    requestAnimationFrame(function () {
      if (defaultFocusedButton === CANCEL_BUTTON && cancelButton) {
        cancelButton.focus();
      } else if (defaultFocusedButton === CONFIRM_BUTTON && confirmButton) {
        confirmButton.focus();
      }
    });
  });

  var confirmRef = function confirmRef(node) {
    return setConfirmButton(node);
  };

  var cancelRef = function cancelRef(node) {
    return setCancelButton(node);
  };

  var classes = (0, _classnames.default)('euiModal--confirmation', className);
  var modalTitle;

  if (title) {
    modalTitle = (0, _react2.jsx)(_modal_header.EuiModalHeader, null, (0, _react2.jsx)(_modal_header_title.EuiModalHeaderTitle, {
      "data-test-subj": "confirmModalTitleText"
    }, title));
  }

  var message;

  if (typeof children === 'string' && children.length > 0) {
    message = (0, _react2.jsx)("p", null, children);
  } else {
    message = children;
  }

  return (0, _react2.jsx)(_modal.EuiModal, (0, _extends2.default)({
    className: classes,
    onClose: onCancel
  }, rest), modalTitle, message && (0, _react2.jsx)(_modal_body.EuiModalBody, null, (0, _react2.jsx)(_text.EuiText, {
    "data-test-subj": "confirmModalBodyText"
  }, message)), (0, _react2.jsx)(_modal_footer.EuiModalFooter, null, (0, _react2.jsx)(_button.EuiButtonEmpty, {
    "data-test-subj": "confirmModalCancelButton",
    onClick: onCancel,
    buttonRef: cancelRef
  }, cancelButtonText), (0, _react2.jsx)(_button.EuiButton, {
    "data-test-subj": "confirmModalConfirmButton",
    onClick: onConfirm,
    isLoading: isLoading,
    fill: true,
    buttonRef: confirmRef,
    color: buttonColor,
    isDisabled: confirmButtonDisabled
  }, confirmButtonText)));
};

exports.EuiConfirmModal = EuiConfirmModal;