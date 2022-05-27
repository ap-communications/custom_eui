"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiModal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _button = require("../button");

var _focus_trap = require("../focus_trap");

var _overlay_mask = require("../overlay_mask");

var _i18n = require("../i18n");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var EuiModal = function EuiModal(_ref) {
  var className = _ref.className,
      children = _ref.children,
      initialFocus = _ref.initialFocus,
      onClose = _ref.onClose,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? true : _ref$maxWidth,
      style = _ref.style,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "initialFocus", "onClose", "maxWidth", "style"]);

  var onKeyDown = function onKeyDown(event) {
    if (event.key === _services.keys.ESCAPE) {
      event.preventDefault();
      event.stopPropagation();
      onClose(event);
    }
  };

  var newStyle;
  var widthClassName;

  if (maxWidth === true) {
    widthClassName = 'euiModal--maxWidth-default';
  } else if (maxWidth !== false) {
    var value = typeof maxWidth === 'number' ? "".concat(maxWidth, "px") : maxWidth;
    newStyle = _objectSpread(_objectSpread({}, style), {}, {
      maxWidth: value
    });
  }

  var classes = (0, _classnames.default)('euiModal', widthClassName, className);
  return (0, _react2.jsx)(_overlay_mask.EuiOverlayMask, null, (0, _react2.jsx)(_focus_trap.EuiFocusTrap, {
    initialFocus: initialFocus
  }, (0, _react2.jsx)("div", (0, _extends2.default)({
    className: classes,
    onKeyDown: onKeyDown,
    tabIndex: 0,
    style: newStyle || style
  }, rest), (0, _react2.jsx)(_i18n.EuiI18n, {
    token: "euiModal.closeModal",
    default: "Closes this modal window"
  }, function (closeModal) {
    return (0, _react2.jsx)(_button.EuiButtonIcon, {
      iconType: "cross",
      onClick: onClose,
      className: "euiModal__closeIcon",
      color: "text",
      "aria-label": closeModal
    });
  }), (0, _react2.jsx)("div", {
    className: "euiModal__flex"
  }, children))));
};

exports.EuiModal = EuiModal;