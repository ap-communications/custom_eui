"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiImage = exports.SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _overlay_mask = require("../overlay_mask");

var _icon = require("../icon");

var _i18n = require("../i18n");

var _focus_trap = require("../focus_trap");

var _services = require("../../services");

var _inner_text = require("../inner_text");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var sizeToClassNameMap = {
  s: 'euiImage--small',
  m: 'euiImage--medium',
  l: 'euiImage--large',
  xl: 'euiImage--xlarge',
  fullWidth: 'euiImage--fullWidth',
  original: 'euiImage--original'
};
var marginToClassNameMap = {
  s: 'euiImage--marginSmall',
  m: 'euiImage--marginMedium',
  l: 'euiImage--marginLarge',
  xl: 'euiImage--marginXlarge'
};
var floatToClassNameMap = {
  left: 'euiImage--floatLeft',
  right: 'euiImage--floatRight'
};
var SIZES = Object.keys(sizeToClassNameMap);
exports.SIZES = SIZES;
var fullScreenIconColorMap = {
  light: 'ghost',
  dark: 'default'
};

var EuiImage = function EuiImage(_ref) {
  var className = _ref.className,
      url = _ref.url,
      src = _ref.src,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'original' : _ref$size,
      caption = _ref.caption,
      hasShadow = _ref.hasShadow,
      allowFullScreen = _ref.allowFullScreen,
      _ref$fullScreenIconCo = _ref.fullScreenIconColor,
      fullScreenIconColor = _ref$fullScreenIconCo === void 0 ? 'light' : _ref$fullScreenIconCo,
      alt = _ref.alt,
      style = _ref.style,
      float = _ref.float,
      margin = _ref.margin,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "url", "src", "size", "caption", "hasShadow", "allowFullScreen", "fullScreenIconColor", "alt", "style", "float", "margin"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isFullScreenActive = _useState2[0],
      setIsFullScreenActive = _useState2[1];

  var onKeyDown = function onKeyDown(event) {
    if (event.key === _services.keys.ESCAPE) {
      event.preventDefault();
      event.stopPropagation();
      closeFullScreen();
    }
  };

  var closeFullScreen = function closeFullScreen() {
    setIsFullScreenActive(false);
  };

  var openFullScreen = function openFullScreen() {
    setIsFullScreenActive(true);
  };

  var customStyle = _objectSpread({}, style);

  var classes = (0, _classnames.default)('euiImage', {
    'euiImage--hasShadow': hasShadow,
    'euiImage--allowFullScreen': allowFullScreen
  }, margin ? marginToClassNameMap[margin] : null, float ? floatToClassNameMap[float] : null, className);

  if (typeof size === 'string' && SIZES.includes(size)) {
    classes = "".concat(classes, " ").concat(sizeToClassNameMap[size]);
  } else {
    classes = "".concat(classes);
    customStyle.maxWidth = size;
    customStyle.maxHeight = size; // Set width back to auto to ensure aspect ratio is kept

    customStyle.width = 'auto';
  }

  var allowFullScreenButtonClasses = 'euiImage__button'; // when the button is not custom we need it to go full width
  // to match the parent '.euiImage' width except when the size is original

  if (typeof size === 'string' && size !== 'original' && SIZES.includes(size)) {
    allowFullScreenButtonClasses = "".concat(allowFullScreenButtonClasses, " euiImage__button--fullWidth");
  } else {
    allowFullScreenButtonClasses = "".concat(allowFullScreenButtonClasses);
  }

  var _useInnerText = (0, _inner_text.useInnerText)(),
      _useInnerText2 = (0, _slicedToArray2.default)(_useInnerText, 2),
      optionalCaptionRef = _useInnerText2[0],
      optionalCaptionText = _useInnerText2[1];

  var optionalCaption;

  if (caption) {
    optionalCaption = (0, _react2.jsx)("figcaption", {
      ref: optionalCaptionRef,
      className: "euiImage__caption"
    }, caption);
  }

  var allowFullScreenIcon = (0, _react2.jsx)(_icon.EuiIcon, {
    type: "fullScreen",
    color: fullScreenIconColorMap[fullScreenIconColor],
    className: "euiImage__icon"
  });
  var fullScreenDisplay = (0, _react2.jsx)(_overlay_mask.EuiOverlayMask, {
    "data-test-subj": "fullScreenOverlayMask",
    onClick: closeFullScreen
  }, (0, _react2.jsx)(_focus_trap.EuiFocusTrap, {
    clickOutsideDisables: true
  }, (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)("figure", {
    className: "euiImage euiImage-isFullScreen",
    "aria-label": optionalCaptionText
  }, (0, _react2.jsx)("button", {
    type: "button",
    "aria-label": (0, _i18n.useEuiI18n)('euiImage.closeImage', 'Close full screen {alt} image', {
      alt: alt
    }),
    className: "euiImage__button",
    "data-test-subj": "deactivateFullScreenButton",
    onClick: closeFullScreen,
    onKeyDown: onKeyDown
  }, (0, _react2.jsx)("img", (0, _extends2.default)({
    src: src || url,
    alt: alt,
    className: "euiImage-isFullScreen__img"
  }, rest))), optionalCaption), (0, _react2.jsx)(_icon.EuiIcon, {
    type: "cross",
    color: "default",
    className: "euiImage-isFullScreenCloseIcon"
  }))));
  var fullscreenLabel = (0, _i18n.useEuiI18n)('euiImage.openImage', 'Open full screen {alt} image', {
    alt: alt
  });

  if (allowFullScreen) {
    return (0, _react2.jsx)("figure", {
      className: classes,
      "aria-label": optionalCaptionText
    }, (0, _react2.jsx)("button", {
      type: "button",
      "aria-label": fullscreenLabel,
      className: allowFullScreenButtonClasses,
      "data-test-subj": "activateFullScreenButton",
      onClick: openFullScreen
    }, (0, _react2.jsx)("img", (0, _extends2.default)({
      style: customStyle,
      src: src || url,
      alt: alt,
      className: "euiImage__img"
    }, rest)), allowFullScreenIcon), isFullScreenActive && fullScreenDisplay, optionalCaption);
  } else {
    return (0, _react2.jsx)("figure", {
      className: classes,
      "aria-label": optionalCaptionText
    }, (0, _react2.jsx)("img", (0, _extends2.default)({
      style: customStyle,
      src: src || url,
      className: "euiImage__img",
      alt: alt
    }, rest)), optionalCaption);
  }
};

exports.EuiImage = EuiImage;