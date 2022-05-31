"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiToolTip = exports.POSITIONS = void 0;

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

var _portal = require("../portal");

var _tool_tip_popover = require("./tool_tip_popover");

var _react2 = require("../../services/react");

var _services = require("../../services");

var _resize_observer = require("../observer/resize_observer");

var _react3 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var positionsToClassNameMap = {
  top: 'euiToolTip--top',
  right: 'euiToolTip--right',
  bottom: 'euiToolTip--bottom',
  left: 'euiToolTip--left'
};
var POSITIONS = (0, _common.keysOf)(positionsToClassNameMap);
exports.POSITIONS = POSITIONS;
var delayToMsMap = {
  regular: 250,
  long: 250 * 5
};
var displayToClassNameMap = {
  inlineBlock: undefined,
  block: 'euiToolTipAnchor--displayBlock'
};
var DEFAULT_TOOLTIP_STYLES = {
  // position the tooltip content near the top-left
  // corner of the window so it can't create scrollbars
  // 50,50 because who knows what negative margins, padding, etc
  top: 50,
  left: 50,
  // just in case, avoid any potential flicker by hiding
  // the tooltip before it is positioned
  opacity: 0,
  // prevent accidental mouse interaction while positioning
  visibility: 'hidden'
};

var EuiToolTip = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiToolTip, _Component);

  var _super = _createSuper(EuiToolTip);

  function EuiToolTip() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiToolTip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_isMounted", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "anchor", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "popover", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "timeoutId", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      visible: false,
      hasFocus: false,
      calculatedPosition: _this.props.position,
      toolTipStyles: DEFAULT_TOOLTIP_STYLES,
      arrowStyles: undefined,
      id: _this.props.id || (0, _services.htmlIdGenerator)()()
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearAnimationTimeout", function () {
      if (_this.timeoutId) {
        _this.timeoutId = clearTimeout(_this.timeoutId);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "testAnchor", function () {
      // when the tooltip is visible, this checks if the anchor is still part of document
      // this fixes when the react root is removed from the dom without unmounting
      // https://github.com/elastic/eui/issues/1105
      if (document.body.contains(_this.anchor) === false) {
        // the anchor is no longer part of `document`
        _this.hideToolTip();
      } else {
        if (_this.state.visible) {
          // if still visible, keep checking
          requestAnimationFrame(_this.testAnchor);
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setPopoverRef", function (ref) {
      _this.popover = ref; // if the popover has been unmounted, clear
      // any previous knowledge about its size

      if (ref == null) {
        _this.setState({
          toolTipStyles: DEFAULT_TOOLTIP_STYLES,
          arrowStyles: undefined
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showToolTip", function () {
      if (!_this.timeoutId) {
        _this.timeoutId = setTimeout(function () {
          (0, _react2.enqueueStateChange)(function () {
            return _this.setState({
              visible: true
            });
          });
        }, delayToMsMap[_this.props.delay]);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "positionToolTip", function () {
      var requestedPosition = _this.props.position;

      if (!_this.anchor || !_this.popover) {
        return;
      }

      var _findPopoverPosition = (0, _services.findPopoverPosition)({
        anchor: _this.anchor,
        popover: _this.popover,
        position: requestedPosition,
        offset: 16,
        // offset popover 16px from the anchor
        arrowConfig: {
          arrowWidth: 12,
          arrowBuffer: 4
        }
      }),
          position = _findPopoverPosition.position,
          left = _findPopoverPosition.left,
          top = _findPopoverPosition.top,
          arrow = _findPopoverPosition.arrow; // If encroaching the right edge of the window:
      // When `props.content` changes and is longer than `prevProps.content`, the tooltip width remains and
      // the resizeObserver callback will fire twice (once for vertical resize caused by text line wrapping,
      // once for a subsequent position correction) and cause a flash rerender and reposition.
      // To prevent this, we can orient from the right so that text line wrapping does not occur, negating
      // the second resizeObserver callback call.


      var windowWidth = document.documentElement.clientWidth || window.innerWidth;
      var useRightValue = windowWidth / 2 < left;
      var toolTipStyles = {
        top: top,
        left: useRightValue ? 'auto' : left,
        right: useRightValue ? windowWidth - left - _this.popover.offsetWidth : 'auto'
      };

      _this.setState({
        visible: true,
        calculatedPosition: position,
        toolTipStyles: toolTipStyles,
        arrowStyles: arrow
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hideToolTip", function () {
      _this.clearAnimationTimeout();

      (0, _react2.enqueueStateChange)(function () {
        if (_this._isMounted) {
          _this.setState({
            visible: false
          });
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFocus", function () {
      _this.setState({
        hasFocus: true
      });

      _this.showToolTip();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBlur", function () {
      _this.setState({
        hasFocus: false
      });

      _this.hideToolTip();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMouseOut", function (event) {
      // Prevent mousing over children from hiding the tooltip by testing for whether the mouse has
      // left the anchor for a non-child.
      if (_this.anchor === event.relatedTarget || _this.anchor != null && !_this.anchor.contains(event.relatedTarget)) {
        if (!_this.state.hasFocus) {
          _this.hideToolTip();
        }
      }

      if (_this.props.onMouseOut) {
        _this.props.onMouseOut(event);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(EuiToolTip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearAnimationTimeout();
      this._isMounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.visible === false && this.state.visible === true) {
        requestAnimationFrame(this.testAnchor);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          anchorClassName = _this$props.anchorClassName,
          content = _this$props.content,
          title = _this$props.title,
          delay = _this$props.delay,
          display = _this$props.display,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "anchorClassName", "content", "title", "delay", "display"]);
      var _this$state = this.state,
          arrowStyles = _this$state.arrowStyles,
          id = _this$state.id,
          toolTipStyles = _this$state.toolTipStyles,
          visible = _this$state.visible;
      var classes = (0, _classnames.default)('euiToolTip', positionsToClassNameMap[this.state.calculatedPosition], className);
      var anchorClasses = (0, _classnames.default)('euiToolTipAnchor', display ? displayToClassNameMap[display] : null, anchorClassName);
      var tooltip;

      if (visible && (content || title)) {
        tooltip = (0, _react3.jsx)(_portal.EuiPortal, null, (0, _react3.jsx)(_tool_tip_popover.EuiToolTipPopover, (0, _extends2.default)({
          className: classes,
          style: toolTipStyles,
          positionToolTip: this.positionToolTip,
          popoverRef: this.setPopoverRef,
          title: title,
          id: id,
          role: "tooltip"
        }, rest), (0, _react3.jsx)("div", {
          style: arrowStyles,
          className: "euiToolTip__arrow"
        }), (0, _react3.jsx)(_resize_observer.EuiResizeObserver, {
          onResize: this.positionToolTip
        }, function (resizeRef) {
          return (0, _react3.jsx)("div", {
            ref: resizeRef
          }, content);
        })));
      }

      var anchor = // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      (0, _react3.jsx)("span", {
        ref: function ref(anchor) {
          return _this2.anchor = anchor;
        },
        className: anchorClasses,
        onMouseOver: this.showToolTip,
        onMouseOut: this.onMouseOut
      }, /*#__PURE__*/(0, _react.cloneElement)(children, _objectSpread({
        onFocus: function onFocus(e) {
          _this2.onFocus();

          children.props.onFocus && children.props.onFocus(e);
        },
        onBlur: function onBlur(e) {
          _this2.onBlur();

          children.props.onBlur && children.props.onBlur(e);
        }
      }, visible && {
        'aria-describedby': this.state.id
      })));
      return (0, _react3.jsx)(_react.Fragment, null, anchor, tooltip);
    }
  }]);
  return EuiToolTip;
}(_react.Component);

exports.EuiToolTip = EuiToolTip;
(0, _defineProperty2.default)(EuiToolTip, "defaultProps", {
  position: 'top',
  delay: 'regular',
  display: 'inlineBlock'
});