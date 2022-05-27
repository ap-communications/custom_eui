"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiLink = exports.COLORS = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

var _i18n = require("../i18n");

var _common = require("../common");

var _services = require("../../services");

var _accessibility = require("../accessibility");

var _href_validator = require("../../services/security/href_validator");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var colorsToClassNameMap = {
  primary: 'euiLink--primary',
  subdued: 'euiLink--subdued',
  success: 'euiLink--success',
  accent: 'euiLink--accent',
  danger: 'euiLink--danger',
  warning: 'euiLink--warning',
  ghost: 'euiLink--ghost',
  text: 'euiLink--text'
};
var COLORS = (0, _common.keysOf)(colorsToClassNameMap);
exports.COLORS = COLORS;
var EuiLink = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      className = _ref.className,
      href = _ref.href,
      external = _ref.external,
      target = _ref.target,
      rel = _ref.rel,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      onClick = _ref.onClick,
      _disabled = _ref.disabled,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "color", "className", "href", "external", "target", "rel", "type", "onClick", "disabled"]);
  var isHrefValid = !href || (0, _href_validator.validateHref)(href);
  var disabled = _disabled || !isHrefValid;
  var externalLinkIcon = (0, _react2.jsx)(_icon.EuiIcon, {
    "aria-label": (0, _i18n.useEuiI18n)('euiLink.external.ariaLabel', 'External link'),
    size: "s",
    className: "euiLink__externalIcon",
    type: "popout"
  });
  var newTargetScreenreaderText = (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("span", null, (0, _react2.jsx)(_i18n.EuiI18n, {
    token: "euiLink.newTarget.screenReaderOnlyText",
    default: "(opens in a new tab or window)"
  })));

  if (href === undefined || !isHrefValid) {
    var buttonProps = _objectSpread({
      className: (0, _classnames.default)('euiLink', disabled ? 'euiLink-disabled' : colorsToClassNameMap[color], className),
      type: type,
      onClick: onClick,
      disabled: disabled
    }, rest);

    return (0, _react2.jsx)("button", (0, _extends2.default)({
      ref: ref
    }, buttonProps), children);
  }

  var secureRel = (0, _services.getSecureRelForTarget)({
    href: href,
    target: target,
    rel: rel
  });

  var anchorProps = _objectSpread({
    className: (0, _classnames.default)('euiLink', colorsToClassNameMap[color], className),
    href: href,
    target: target,
    rel: secureRel,
    onClick: onClick
  }, rest);

  var showExternalLinkIcon = target === '_blank' && external !== false || external === true;
  return (0, _react2.jsx)("a", (0, _extends2.default)({
    ref: ref
  }, anchorProps), children, showExternalLinkIcon && externalLinkIcon, target === '_blank' && newTargetScreenreaderText);
});
exports.EuiLink = EuiLink;
EuiLink.displayName = 'EuiLink';