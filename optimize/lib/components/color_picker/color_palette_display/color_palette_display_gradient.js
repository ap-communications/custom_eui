"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiColorPaletteDisplayGradient = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../utils");

var _screen_reader = require("../../accessibility/screen_reader");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var EuiColorPaletteDisplayGradient = function EuiColorPaletteDisplayGradient(_ref) {
  var palette = _ref.palette,
      title = _ref.title,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["palette", "title", "style"]);
  var gradient = (0, _utils.getLinearGradient)(palette);
  return (0, _react2.jsx)(_react.default.Fragment, null, title && (0, _react2.jsx)(_screen_reader.EuiScreenReaderOnly, null, (0, _react2.jsx)("span", null, title)), (0, _react2.jsx)("span", (0, _extends2.default)({
    // aria-hidden="true" is to ensure color blocks are ignored by screen readers,
    // and the only accessible text for options is the EuiScreenReaderOnly {title}
    "aria-hidden": "true",
    style: _objectSpread(_objectSpread({}, style), {}, {
      background: gradient
    })
  }, rest)));
};

exports.EuiColorPaletteDisplayGradient = EuiColorPaletteDisplayGradient;