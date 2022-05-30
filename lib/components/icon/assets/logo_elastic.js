"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = void 0;

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiIconLogoElastic = function EuiIconLogoElastic(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return (0, _react2.jsx)("svg", _extends({
    "data-type": "logoElastic",
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    fill: "none",
    viewBox: "0 0 32 32",
    "aria-labelledby": titleId
  }, props), title ? (0, _react2.jsx)("title", {
    id: titleId
  }, title) : null, (0, _react2.jsx)("image", {
    id: "image0",
    width: "32",
    height: "32",
    x: "0",
    y: "0",
    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZNJREFUeNrsVj1OwzAYNRXM/OyI9AbpQjdoF1aaG9ATFE+MLWMlJOgJaEemlhMQRiZyg1piYqKcoLwPfUhWRBu7tiNViqUnp43l9/y+H0eIbR1zpQ4IrvvsWBB2MF0CLSDKvVZACtzWo0h5E8AnvAZ6gOlpx4CEkIWTAD7xowWxPjKgCxGZi4ClY3jJgUZRSHY32HQGPPOzYIcoNzo5t+j5Chj4coDsbK+KLdZHHLLWXy6cPX1KEvZx0xz7EJCCvG1QLSRCgHzCgkhYAyL+zYdagBYhQf6K+YV/J6vIgwjgEP32BD75bN36EA4Itr0PfB0P35YEX1VgUy1Sq4r9sgX0uRrI/lGpOUDleHq4N+E8oD7wjhDcl+IA3x3Tu4sjmrvcB3rcuJz7gOJGpNY0oikQa38/YL301YqJYA6ijO391t6dsN35ERdtukkIYpON2bGkaFEtYBkmJt8EIQRQeOom3wK2Icg4m8+1G08/MRGPQJzaqLURsMDmg1zJxbaE3vqAduk4jVBJWAmoBGyPgGr8CDAADEiNSND9wzcAAAAASUVORK5CYII="
  }));
};

var icon = EuiIconLogoElastic;
exports.icon = icon;