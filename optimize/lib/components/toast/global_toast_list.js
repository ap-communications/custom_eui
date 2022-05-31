"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiGlobalToastList = exports.TOAST_FADE_OUT_MS = exports.SIDES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _time = require("../../services/time");

var _global_toast_list_item = require("./global_toast_list_item");

var _toast = require("./toast");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var sideToClassNameMap = {
  left: 'euiGlobalToastList--left',
  right: 'euiGlobalToastList--right'
};
var SIDES = (0, _common.keysOf)(sideToClassNameMap);
exports.SIDES = SIDES;
var TOAST_FADE_OUT_MS = 250;
exports.TOAST_FADE_OUT_MS = TOAST_FADE_OUT_MS;

var EuiGlobalToastList = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiGlobalToastList, _Component);

  var _super = _createSuper(EuiGlobalToastList);

  function EuiGlobalToastList() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiGlobalToastList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      toastIdToDismissedMap: {}
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dismissTimeoutIds", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toastIdToTimerMap", {});
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isScrollingToBottom", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isScrolledToBottom", true);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isUserInteracting", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isScrollingAnimationFrame", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "startScrollingAnimationFrame", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listElement", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseEnter", function () {
      // Stop scrolling to bottom if we're in mid-scroll, because the user wants to interact with
      // the list.
      _this.isScrollingToBottom = false;
      _this.isUserInteracting = true; // Don't let toasts dismiss themselves while the user is interacting with them.

      for (var _toastId in _this.toastIdToTimerMap) {
        if (_this.toastIdToTimerMap.hasOwnProperty(_toastId)) {
          var timer = _this.toastIdToTimerMap[_toastId];
          timer.pause();
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseLeave", function () {
      _this.isUserInteracting = false;

      for (var _toastId2 in _this.toastIdToTimerMap) {
        if (_this.toastIdToTimerMap.hasOwnProperty(_toastId2)) {
          var timer = _this.toastIdToTimerMap[_toastId2];
          timer.resume();
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onScroll", function () {
      if (_this.listElement) {
        _this.isScrolledToBottom = _this.listElement.scrollHeight - _this.listElement.scrollTop === _this.listElement.clientHeight;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "scheduleAllToastsForDismissal", function () {
      _this.props.toasts.forEach(function (toast) {
        if (!_this.toastIdToTimerMap[toast.id]) {
          _this.scheduleToastForDismissal(toast);
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "scheduleToastForDismissal", function (toast) {
      // Start fading the toast out once its lifetime elapses.
      _this.toastIdToTimerMap[toast.id] = new _time.Timer(_this.dismissToast.bind((0, _assertThisInitialized2.default)(_this), toast), toast.toastLifeTimeMs != null ? toast.toastLifeTimeMs : _this.props.toastLifeTimeMs);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dismissToast", function (toast) {
      // Remove the toast after it's done fading out.
      _this.dismissTimeoutIds.push(window.setTimeout(function () {
        // Because this is wrapped in a setTimeout, and because React does not guarantee when
        // state updates happen, it is possible to double-dismiss a toast
        // including by double-clicking the "x" button on the toast
        // so, first check to make sure we haven't already dismissed this toast
        if (_this.toastIdToTimerMap.hasOwnProperty(toast.id)) {
          _this.props.dismissToast.apply((0, _assertThisInitialized2.default)(_this), [toast]);

          _this.toastIdToTimerMap[toast.id].clear();

          delete _this.toastIdToTimerMap[toast.id];

          _this.setState(function (prevState) {
            var toastIdToDismissedMap = _objectSpread({}, prevState.toastIdToDismissedMap);

            delete toastIdToDismissedMap[toast.id];
            return {
              toastIdToDismissedMap: toastIdToDismissedMap
            };
          });
        }
      }, TOAST_FADE_OUT_MS));

      _this.setState(function (prevState) {
        var toastIdToDismissedMap = _objectSpread(_objectSpread({}, prevState.toastIdToDismissedMap), {}, (0, _defineProperty2.default)({}, toast.id, true));

        return {
          toastIdToDismissedMap: toastIdToDismissedMap
        };
      });
    });
    return _this;
  }

  (0, _createClass2.default)(EuiGlobalToastList, [{
    key: "startScrollingToBottom",
    value: function startScrollingToBottom() {
      var _this2 = this;

      this.isScrollingToBottom = true;

      var scrollToBottom = function scrollToBottom() {
        // Although we cancel the requestAnimationFrame in componentWillUnmount,
        // it's possible for this.listElement to become null in the meantime
        if (!_this2.listElement) {
          return;
        }

        var position = _this2.listElement.scrollTop;
        var destination = _this2.listElement.scrollHeight - _this2.listElement.clientHeight;
        var distanceToDestination = destination - position;

        if (distanceToDestination < 5) {
          _this2.listElement.scrollTop = destination;
          _this2.isScrollingToBottom = false;
          _this2.isScrolledToBottom = true;
          return;
        }

        _this2.listElement.scrollTop = position + distanceToDestination * 0.25;

        if (_this2.isScrollingToBottom) {
          _this2.isScrollingAnimationFrame = window.requestAnimationFrame(scrollToBottom);
        }
      };

      this.startScrollingAnimationFrame = window.requestAnimationFrame(scrollToBottom);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.listElement) {
        this.listElement.addEventListener('scroll', this.onScroll);
        this.listElement.addEventListener('mouseenter', this.onMouseEnter);
        this.listElement.addEventListener('mouseleave', this.onMouseLeave);
      }

      this.scheduleAllToastsForDismissal();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.scheduleAllToastsForDismissal();

      if (!this.isUserInteracting) {
        // If the user has scrolled up the toast list then we don't want to annoy them by scrolling
        // all the way back to the bottom.
        if (this.isScrolledToBottom) {
          if (prevProps.toasts.length < this.props.toasts.length) {
            this.startScrollingToBottom();
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isScrollingAnimationFrame !== 0) {
        window.cancelAnimationFrame(this.isScrollingAnimationFrame);
      }

      if (this.startScrollingAnimationFrame !== 0) {
        window.cancelAnimationFrame(this.startScrollingAnimationFrame);
      }

      if (this.listElement) {
        this.listElement.removeEventListener('scroll', this.onScroll);
        this.listElement.removeEventListener('mouseenter', this.onMouseEnter);
        this.listElement.removeEventListener('mouseleave', this.onMouseLeave);
      }

      this.dismissTimeoutIds.forEach(clearTimeout);

      for (var _toastId3 in this.toastIdToTimerMap) {
        if (this.toastIdToTimerMap.hasOwnProperty(_toastId3)) {
          var timer = this.toastIdToTimerMap[_toastId3];
          timer.clear();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          toasts = _this$props.toasts,
          dismissToast = _this$props.dismissToast,
          toastLifeTimeMs = _this$props.toastLifeTimeMs,
          side = _this$props.side,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "toasts", "dismissToast", "toastLifeTimeMs", "side"]);
      var renderedToasts = toasts.map(function (toast) {
        var text = toast.text,
            toastLifeTimeMs = toast.toastLifeTimeMs,
            rest = (0, _objectWithoutProperties2.default)(toast, ["text", "toastLifeTimeMs"]);
        return (0, _react2.jsx)(_global_toast_list_item.EuiGlobalToastListItem, {
          key: toast.id,
          isDismissed: _this3.state.toastIdToDismissedMap[toast.id]
        }, (0, _react2.jsx)(_toast.EuiToast, (0, _extends2.default)({
          onClose: _this3.dismissToast.bind(_this3, toast),
          onFocus: _this3.onMouseEnter,
          onBlur: _this3.onMouseLeave
        }, rest), text));
      });
      var classes = (0, _classnames.default)('euiGlobalToastList', side ? sideToClassNameMap[side] : null, className);
      return (0, _react2.jsx)("div", (0, _extends2.default)({
        "aria-live": "polite",
        role: "region",
        ref: function ref(element) {
          _this3.listElement = element;
        },
        className: classes
      }, rest), renderedToasts);
    }
  }]);
  return EuiGlobalToastList;
}(_react.Component);

exports.EuiGlobalToastList = EuiGlobalToastList;
(0, _defineProperty2.default)(EuiGlobalToastList, "defaultProps", {
  toasts: [],
  side: 'right'
});