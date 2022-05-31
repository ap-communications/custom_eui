"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiBottomBar = exports.POSITIONS = exports.paddingSizeToClassNameMap = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _services = require("../../services");

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

var _resize_observer = require("../observer/resize_observer");

var _portal = require("../portal");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Exported for testing
var paddingSizeToClassNameMap = {
  none: null,
  s: 'euiBottomBar--paddingSmall',
  m: 'euiBottomBar--paddingMedium',
  l: 'euiBottomBar--paddingLarge'
};
exports.paddingSizeToClassNameMap = paddingSizeToClassNameMap;
var POSITIONS = ['static', 'fixed', 'sticky'];
exports.POSITIONS = POSITIONS;
var EuiBottomBar = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'fixed' : _ref$position,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'm' : _ref$paddingSize,
      _ref$affordForDisplac = _ref.affordForDisplacement,
      affordForDisplacement = _ref$affordForDisplac === void 0 ? true : _ref$affordForDisplac,
      children = _ref.children,
      className = _ref.className,
      bodyClassName = _ref.bodyClassName,
      landmarkHeading = _ref.landmarkHeading,
      _ref$usePortal = _ref.usePortal,
      usePortal = _ref$usePortal === void 0 ? true : _ref$usePortal,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? 0 : _ref$right,
      _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? 0 : _ref$bottom,
      top = _ref.top,
      style = _ref.style,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["position", "paddingSize", "affordForDisplacement", "children", "className", "bodyClassName", "landmarkHeading", "usePortal", "left", "right", "bottom", "top", "style"]);
  // Force some props if `fixed` position, but not if the user has supplied these
  affordForDisplacement = position !== 'fixed' ? false : affordForDisplacement;
  usePortal = position !== 'fixed' ? false : usePortal;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      resizeRef = _useState2[0],
      setResizeRef = _useState2[1];

  var setRef = (0, _services.useCombinedRefs)([setResizeRef, ref]); // TODO: Allow this hooke to be conditional

  var dimensions = (0, _resize_observer.useResizeObserver)(resizeRef);
  (0, _react.useEffect)(function () {
    if (affordForDisplacement && usePortal) {
      document.body.style.paddingBottom = "".concat(dimensions.height, "px");
    }

    if (bodyClassName) {
      document.body.classList.add(bodyClassName);
    }

    return function () {
      if (affordForDisplacement && usePortal) {
        document.body.style.paddingBottom = '';
      }

      if (bodyClassName) {
        document.body.classList.remove(bodyClassName);
      }
    };
  }, [affordForDisplacement, usePortal, dimensions, bodyClassName]);
  var classes = (0, _classnames.default)('euiBottomBar', "euiBottomBar--".concat(position), paddingSizeToClassNameMap[paddingSize], className);

  var newStyle = _objectSpread({
    left: left,
    right: right,
    bottom: bottom,
    top: top
  }, style);

  var bar = (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_i18n.EuiI18n, {
    token: "euiBottomBar.screenReaderHeading",
    default: "Page level controls"
  }, function (screenReaderHeading) {
    return (// Though it would be better to use aria-labelledby than aria-label and not repeat the same string twice
      // A bug in voiceover won't list some landmarks in the rotor without an aria-label
      (0, _react2.jsx)("section", (0, _extends2.default)({
        "aria-label": landmarkHeading ? landmarkHeading : screenReaderHeading,
        className: classes,
        ref: setRef,
        style: newStyle
      }, rest), (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("h2", null, landmarkHeading ? landmarkHeading : screenReaderHeading)), children)
    );
  }), (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("p", {
    "aria-live": "assertive"
  }, landmarkHeading ? (0, _react2.jsx)(_i18n.EuiI18n, {
    token: "euiBottomBar.customScreenReaderAnnouncement",
    default: "There is a new region landmark called {landmarkHeading} with page level controls at the end of the document.",
    values: {
      landmarkHeading: landmarkHeading
    }
  }) : (0, _react2.jsx)(_i18n.EuiI18n, {
    token: "euiBottomBar.screenReaderAnnouncement",
    default: "There is a new region landmark with page level controls at the end of the document."
  }))));
  return usePortal ? (0, _react2.jsx)(_portal.EuiPortal, null, bar) : bar;
});
exports.EuiBottomBar = EuiBottomBar;
EuiBottomBar.displayName = 'EuiBottomBar';