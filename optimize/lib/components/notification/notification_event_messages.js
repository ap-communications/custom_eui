"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiNotificationEventMessages = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _accordion = require("../accordion");

var _services = require("../../services");

var _i18n = require("../i18n");

var _text = require("../text");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var EuiNotificationEventMessages = function EuiNotificationEventMessages(_ref) {
  var messages = _ref.messages,
      eventName = _ref.eventName;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var messagesLength = messages.length;
  var accordionId = (0, _services.useGeneratedHtmlId)({
    prefix: 'euiNotificationEventMessagesAccordion'
  });
  var accordionButtonText = (0, _i18n.useEuiI18n)('euiNotificationEventMessages.accordionButtonText', '+ {messagesLength} more', {
    messagesLength: messagesLength - 1
  });
  var accordionAriaLabelButtonText = (0, _i18n.useEuiI18n)('euiNotificationEventMessages.accordionAriaLabelButtonText', '+ {messagesLength} messages for {eventName}', {
    messagesLength: messagesLength - 1,
    eventName: eventName
  });
  var accordionHideText = (0, _i18n.useEuiI18n)('euiNotificationEventMessages.accordionHideText', 'hide');
  var buttonContentText = isOpen ? "".concat(accordionButtonText, " (").concat(accordionHideText, ")") : accordionButtonText;
  return (0, _react2.jsx)("div", {
    className: "euiNotificationEventMessages"
  }, messages && messagesLength === 1 ? (0, _react2.jsx)(_text.EuiText, {
    size: "s",
    color: "subdued"
  }, (0, _react2.jsx)("p", null, messages)) : (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_text.EuiText, {
    size: "s",
    color: "subdued"
  }, (0, _react2.jsx)("p", null, messages[0])), (0, _react2.jsx)(_accordion.EuiAccordion, {
    onToggle: setIsOpen,
    buttonProps: {
      'aria-label': accordionAriaLabelButtonText
    },
    id: accordionId,
    className: "euiNotificationEventMessages__accordion",
    buttonContent: buttonContentText,
    buttonClassName: "euiNotificationEventMessages__accordionButton",
    arrowDisplay: "none"
  }, (0, _react2.jsx)("div", {
    className: "euiNotificationEventMessages__accordionContent"
  }, messages.map(function (notification, index) {
    return (0, _react2.jsx)(_text.EuiText, {
      size: "s",
      key: index,
      color: "subdued"
    }, (0, _react2.jsx)("p", null, notification));
  }).slice(1)))));
};

exports.EuiNotificationEventMessages = EuiNotificationEventMessages;