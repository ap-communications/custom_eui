"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopoverPositionFromAnchorPosition = getPopoverPositionFromAnchorPosition;
exports.getPopoverAlignFromAnchorPosition = getPopoverAlignFromAnchorPosition;
exports.EuiPopover = exports.DISPLAY = exports.ANCHOR_POSITIONS = exports.popoverAnchorPosition = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tabbable = _interopRequireDefault(require("tabbable"));

var _focus_trap = require("../focus_trap");

var _services = require("../../services");

var _accessibility = require("../accessibility");

var _panel = require("../panel");

var _portal = require("../portal");

var _mutation_observer = require("../observer/mutation_observer");

var _popover = require("../../services/popover");

var _i18n = require("../i18n");

var _outside_click_detector = require("../outside_click_detector");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var popoverAnchorPosition = ['upCenter', 'upLeft', 'upRight', 'downCenter', 'downLeft', 'downRight', 'leftCenter', 'leftUp', 'leftDown', 'rightCenter', 'rightUp', 'rightDown'];
exports.popoverAnchorPosition = popoverAnchorPosition;
var anchorPositionToPopoverPositionMap = {
  up: 'top',
  right: 'right',
  down: 'bottom',
  left: 'left'
};

function getPopoverPositionFromAnchorPosition(anchorPosition) {
  // maps the anchor position to the matching popover position
  // e.g. "upLeft" -> "top", "downRight" -> "bottom"
  // extract the first positional word from anchorPosition:
  // starts at the beginning (" ^ ") of anchorPosition and
  // captures all of the characters (" (.*?) ") until the
  // first capital letter (" [A-Z] ") is encountered
  var _ref = anchorPosition.match(/^(.*?)[A-Z]/),
      _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      primaryPosition = _ref2[1];

  return anchorPositionToPopoverPositionMap[primaryPosition];
}

function getPopoverAlignFromAnchorPosition(anchorPosition) {
  // maps the gravity to the matching popover position
  // e.g. "upLeft" -> "left", "rightDown" -> "bottom"
  // extract the second positional word from anchorPosition:
  // starts a capture group at the first capital letter
  // and includes everything after it
  var _ref3 = anchorPosition.match(/([A-Z].*)/),
      _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
      align = _ref4[1]; // this performs two tasks:
  // 1. normalizes the align position by lowercasing it
  // 2. `center` doesn't exist in the lookup map which converts it to `undefined` meaning no align


  return anchorPositionToPopoverPositionMap[align.toLowerCase()];
}

var anchorPositionToClassNameMap = {
  upCenter: 'euiPopover--anchorUpCenter',
  upLeft: 'euiPopover--anchorUpLeft',
  upRight: 'euiPopover--anchorUpRight',
  downCenter: 'euiPopover--anchorDownCenter',
  downLeft: 'euiPopover--anchorDownLeft',
  downRight: 'euiPopover--anchorDownRight',
  leftCenter: 'euiPopover--anchorLeftCenter',
  leftUp: 'euiPopover--anchorLeftUp',
  leftDown: 'euiPopover--anchorLeftDown',
  rightCenter: 'euiPopover--anchorRightCenter',
  rightUp: 'euiPopover--anchorRightUp',
  rightDown: 'euiPopover--anchorRightDown'
};
var ANCHOR_POSITIONS = Object.keys(anchorPositionToClassNameMap);
exports.ANCHOR_POSITIONS = ANCHOR_POSITIONS;
var displayToClassNameMap = {
  inlineBlock: undefined,
  block: 'euiPopover--displayBlock'
};
var DISPLAY = Object.keys(displayToClassNameMap);
exports.DISPLAY = DISPLAY;
var DEFAULT_POPOVER_STYLES = {
  top: 50,
  left: 50
};

function getElementFromInitialFocus(initialFocus) {
  var initialFocusType = (0, _typeof2.default)(initialFocus);

  if (initialFocusType === 'string') {
    return document.querySelector(initialFocus);
  }

  if (initialFocusType === 'function') {
    return initialFocus();
  }

  return initialFocus;
}

var returnFocusConfig = {
  preventScroll: true
};

var EuiPopover = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiPopover, _Component);

  var _super = _createSuper(EuiPopover);

  (0, _createClass2.default)(EuiPopover, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevProps.isOpen && !nextProps.isOpen) {
        return {
          prevProps: {
            isOpen: nextProps.isOpen
          },
          isClosing: true,
          isOpening: false
        };
      }

      if (prevState.prevProps.isOpen !== nextProps.isOpen) {
        return {
          prevProps: {
            isOpen: nextProps.isOpen
          }
        };
      }

      return null;
    }
  }]);

  function EuiPopover(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EuiPopover);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "respositionTimeout", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closingTransitionTimeout", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closingTransitionAnimationFrame", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updateFocusAnimationFrame", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "button", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "panel", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasSetInitialFocus", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "descriptionId", (0, _services.htmlIdGenerator)()());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closePopover", function () {
      if (_this.props.isOpen) {
        _this.props.closePopover();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onEscapeKey", function (event) {
      if (_this.props.isOpen) {
        event.preventDefault();
        event.stopPropagation();

        _this.closePopover();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onKeyDown", function (event) {
      if (event.key === _services.cascadingMenuKeys.ESCAPE) {
        _this.onEscapeKey(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickOutside", function (event) {
      // only close the popover if the event source isn't the anchor button
      // otherwise, it is up to the anchor to toggle the popover's open status
      if (_this.button && _this.button.contains(event.target) === false) {
        _this.closePopover();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOpenPopover", function () {
      clearTimeout(_this.closingTransitionTimeout);

      if (_this.closingTransitionAnimationFrame) {
        cancelAnimationFrame(_this.closingTransitionAnimationFrame);
      } // We need to set this state a beat after the render takes place, so that the CSS
      // transition can take effect.


      _this.closingTransitionAnimationFrame = window.requestAnimationFrame(function () {
        _this.setState({
          isOpening: true
        });
      }); // for each child element of `this.panel`, find any transition duration we should wait for before stabilizing

      var _Array$prototype$slic = Array.prototype.slice.call(_this.panel ? [_this.panel].concat((0, _toConsumableArray2.default)(Array.from(_this.panel.children))) : []).reduce(function (_ref5, element) {
        var durationMatch = _ref5.durationMatch,
            delayMatch = _ref5.delayMatch;
        var transitionTimings = (0, _services.getTransitionTimings)(element);
        return {
          durationMatch: Math.max(durationMatch, transitionTimings.durationMatch),
          delayMatch: Math.max(delayMatch, transitionTimings.delayMatch)
        };
      }, {
        durationMatch: 0,
        delayMatch: 0
      }),
          durationMatch = _Array$prototype$slic.durationMatch,
          delayMatch = _Array$prototype$slic.delayMatch;

      clearTimeout(_this.respositionTimeout);
      _this.respositionTimeout = window.setTimeout(function () {
        _this.setState({
          isOpenStable: true
        }, function () {
          _this.positionPopoverFixed();

          _this.updateFocus();
        });
      }, durationMatch + delayMatch);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMutation", function (records) {
      var waitDuration = (0, _services.getWaitDuration)(records);

      _this.positionPopoverFixed();

      (0, _services.performOnFrame)(waitDuration, _this.positionPopoverFixed);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "positionPopover", function (allowEnforcePosition) {
      if (_this.button == null || _this.panel == null) return;
      var _ref6 = _this.props,
          anchorPosition = _ref6.anchorPosition;
      var position = getPopoverPositionFromAnchorPosition(anchorPosition);
      var forcePosition = undefined;

      if (allowEnforcePosition && _this.state.isOpenStable && _this.state.openPosition != null) {
        position = _this.state.openPosition;
        forcePosition = true;
      }

      var _findPopoverPosition = (0, _popover.findPopoverPosition)({
        container: _this.props.container,
        position: position,
        forcePosition: forcePosition,
        align: getPopoverAlignFromAnchorPosition(anchorPosition),
        anchor: _this.button,
        popover: _this.panel,
        offset: !_this.props.attachToAnchor && _this.props.hasArrow ? 16 + (_this.props.offset || 0) : 8 + (_this.props.offset || 0),
        arrowConfig: {
          arrowWidth: 24,
          arrowBuffer: 10
        },
        returnBoundingBox: _this.props.attachToAnchor,
        buffer: _this.props.buffer
      }),
          top = _findPopoverPosition.top,
          left = _findPopoverPosition.left,
          foundPosition = _findPopoverPosition.position,
          arrow = _findPopoverPosition.arrow,
          anchorBoundingBox = _findPopoverPosition.anchorBoundingBox; // the popover's z-index must inherit from the button
      // this keeps a button's popover under a flyout that would cover the button
      // but a popover triggered inside a flyout will appear over that flyout


      var zIndexProp = _this.props.zIndex;
      var zIndex = zIndexProp == null ? (0, _popover.getElementZIndex)(_this.button, _this.panel) + 2000 : zIndexProp;

      var popoverStyles = _objectSpread(_objectSpread({}, _this.props.panelStyle), {}, {
        top: top,
        left: _this.props.attachToAnchor && anchorBoundingBox ? anchorBoundingBox.left : left,
        zIndex: zIndex
      });

      var willRenderArrow = !_this.props.attachToAnchor && _this.props.hasArrow;
      var arrowStyles = willRenderArrow ? arrow : undefined;
      var arrowPosition = foundPosition;

      _this.setState({
        popoverStyles: popoverStyles,
        arrowStyles: arrowStyles,
        arrowPosition: arrowPosition,
        openPosition: foundPosition
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "positionPopoverFixed", function () {
      _this.positionPopover(true);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "positionPopoverFluid", function () {
      _this.positionPopover(false);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "panelRef", function (node) {
      _this.panel = node;
      _this.props.panelRef && _this.props.panelRef(node);

      if (node == null) {
        // panel has unmounted, restore the state defaults
        _this.setState({
          popoverStyles: DEFAULT_POPOVER_STYLES,
          arrowStyles: {},
          arrowPosition: null,
          openPosition: null,
          isOpenStable: false
        });

        window.removeEventListener('resize', _this.positionPopoverFluid);
      } else {
        // panel is coming into existence
        _this.positionPopoverFluid();

        window.addEventListener('resize', _this.positionPopoverFluid);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "buttonRef", function (node) {
      _this.button = node;
      _this.props.buttonRef && _this.props.buttonRef(node);
    });
    _this.state = {
      prevProps: {
        isOpen: props.isOpen
      },
      suppressingPopover: props.isOpen,
      // only suppress if created with isOpen=true
      isClosing: false,
      isOpening: false,
      popoverStyles: DEFAULT_POPOVER_STYLES,
      arrowStyles: {},
      arrowPosition: null,
      openPosition: null,
      // once a stable position has been found, keep the contents on that side
      isOpenStable: false // wait for any initial opening transitions to finish before marking as stable

    };
    return _this;
  }

  (0, _createClass2.default)(EuiPopover, [{
    key: "updateFocus",
    value: function updateFocus() {
      var _this2 = this;

      // Wait for the DOM to update.
      this.updateFocusAnimationFrame = window.requestAnimationFrame(function () {
        if (!_this2.props.ownFocus || !_this2.panel || _this2.props.initialFocus === false) {
          return;
        } // If we've already focused on something inside the panel, everything's fine.


        if (_this2.hasSetInitialFocus && _this2.panel.contains(document.activeElement)) {
          return;
        } // Otherwise let's focus the first tabbable item and expedite input from the user.


        var focusTarget;

        if (_this2.props.initialFocus != null) {
          focusTarget = getElementFromInitialFocus(_this2.props.initialFocus);
        } else {
          var tabbableItems = (0, _tabbable.default)(_this2.panel);

          if (tabbableItems.length) {
            focusTarget = tabbableItems[0];
          }
        } // there's a race condition between the popover content becoming visible and this function call
        // if the element isn't visible yet (due to css styling) then it can't accept focus
        // so wait for another render and try again


        if (focusTarget == null) {
          // there isn't a focus target, one of two reasons:
          // #1 is the whole panel hidden? If so, schedule another check
          // #2 panel is visible but no tabbables exist, move focus to the panel
          var panelVisibility = window.getComputedStyle(_this2.panel).opacity;

          if (panelVisibility === '0') {
            // #1
            _this2.updateFocus();
          } else {
            // #2
            focusTarget = _this2.panel;
          }
        } else {
          // found an element to focus, but is it visible?
          var visibility = window.getComputedStyle(focusTarget).visibility;

          if (visibility === 'hidden') {
            // not visible, check again next render frame
            _this2.updateFocus();
          }
        }

        if (focusTarget != null) {
          _this2.hasSetInitialFocus = true;
          focusTarget.focus();
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.state.suppressingPopover) {
        // component was created with isOpen=true; now that it's mounted
        // stop suppressing and start opening
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          suppressingPopover: false,
          isOpening: true
        }, function () {
          _this3.onOpenPopover();
        });
      }

      if (this.props.repositionOnScroll) {
        window.addEventListener('scroll', this.positionPopoverFixed, true);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this4 = this;

      // The popover is being opened.
      if (!prevProps.isOpen && this.props.isOpen) {
        this.onOpenPopover();
      } // update scroll listener


      if (prevProps.repositionOnScroll !== this.props.repositionOnScroll) {
        if (this.props.repositionOnScroll) {
          window.addEventListener('scroll', this.positionPopoverFixed, true);
        } else {
          window.removeEventListener('scroll', this.positionPopoverFixed, true);
        }
      } // The popover is being closed.


      if (prevProps.isOpen && !this.props.isOpen) {
        // If the user has just closed the popover, queue up the removal of the content after the
        // transition is complete.
        this.closingTransitionTimeout = window.setTimeout(function () {
          _this4.hasSetInitialFocus = false;

          _this4.setState({
            isClosing: false
          });
        }, 250);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.positionPopoverFixed, true);
      clearTimeout(this.respositionTimeout);
      clearTimeout(this.closingTransitionTimeout);
      cancelAnimationFrame(this.closingTransitionAnimationFrame);
      cancelAnimationFrame(this.updateFocusAnimationFrame);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          anchorClassName = _this$props.anchorClassName,
          anchorPosition = _this$props.anchorPosition,
          button = _this$props.button,
          buttonRef = _this$props.buttonRef,
          insert = _this$props.insert,
          isOpen = _this$props.isOpen,
          ownFocus = _this$props.ownFocus,
          children = _this$props.children,
          className = _this$props.className,
          closePopover = _this$props.closePopover,
          panelClassName = _this$props.panelClassName,
          panelPaddingSize = _this$props.panelPaddingSize,
          panelProps = _this$props.panelProps,
          panelRef = _this$props.panelRef,
          panelStyle = _this$props.panelStyle,
          popoverRef = _this$props.popoverRef,
          hasArrow = _this$props.hasArrow,
          arrowChildren = _this$props.arrowChildren,
          repositionOnScroll = _this$props.repositionOnScroll,
          zIndex = _this$props.zIndex,
          initialFocus = _this$props.initialFocus,
          attachToAnchor = _this$props.attachToAnchor,
          display = _this$props.display,
          onTrapDeactivation = _this$props.onTrapDeactivation,
          buffer = _this$props.buffer,
          ariaLabel = _this$props['aria-label'],
          ariaLabelledBy = _this$props['aria-labelledby'],
          container = _this$props.container,
          focusTrapProps = _this$props.focusTrapProps,
          tabIndexProp = _this$props.tabIndex,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["anchorClassName", "anchorPosition", "button", "buttonRef", "insert", "isOpen", "ownFocus", "children", "className", "closePopover", "panelClassName", "panelPaddingSize", "panelProps", "panelRef", "panelStyle", "popoverRef", "hasArrow", "arrowChildren", "repositionOnScroll", "zIndex", "initialFocus", "attachToAnchor", "display", "onTrapDeactivation", "buffer", "aria-label", "aria-labelledby", "container", "focusTrapProps", "tabIndex"]);
      var classes = (0, _classnames.default)('euiPopover', anchorPosition ? anchorPositionToClassNameMap[anchorPosition] : null, display ? displayToClassNameMap[display] : null, {
        'euiPopover-isOpen': this.state.isOpening
      }, className);
      var anchorClasses = (0, _classnames.default)('euiPopover__anchor', anchorClassName);
      var panelClasses = (0, _classnames.default)('euiPopover__panel', "euiPopover__panel--".concat(this.state.arrowPosition), {
        'euiPopover__panel-isOpen': this.state.isOpening
      }, {
        'euiPopover__panel-noArrow': !hasArrow || attachToAnchor
      }, {
        'euiPopover__panel-isAttached': attachToAnchor
      }, panelClassName, panelProps === null || panelProps === void 0 ? void 0 : panelProps.className);
      var panel;

      if (!this.state.suppressingPopover && (isOpen || this.state.isClosing)) {
        var tabIndex = tabIndexProp;

        var _initialFocus;

        var ariaDescribedby;
        var ariaLive;

        if (ownFocus) {
          tabIndex = tabIndexProp !== null && tabIndexProp !== void 0 ? tabIndexProp : 0;
          ariaLive = 'off';

          _initialFocus = function _initialFocus() {
            return _this5.panel;
          };
        } else {
          ariaLive = 'assertive';
        }

        var focusTrapScreenReaderText;

        if (ownFocus) {
          ariaDescribedby = this.descriptionId;
          focusTrapScreenReaderText = (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("p", {
            id: this.descriptionId
          }, (0, _react2.jsx)(_i18n.EuiI18n, {
            token: "euiPopover.screenReaderAnnouncement",
            default: "You are in a dialog. To close this dialog, hit escape."
          })));
        }

        var arrowClassNames = (0, _classnames.default)('euiPopover__panelArrow', "euiPopover__panelArrow--".concat(this.state.arrowPosition));
        var returnFocus = this.state.isOpenStable ? returnFocusConfig : false;
        panel = (0, _react2.jsx)(_portal.EuiPortal, {
          insert: insert
        }, (0, _react2.jsx)(_focus_trap.EuiFocusTrap, (0, _extends2.default)({
          clickOutsideDisables: true
        }, focusTrapProps, {
          returnFocus: returnFocus // Ignore temporary state of indecisive focus
          ,
          initialFocus: _initialFocus,
          onDeactivation: onTrapDeactivation,
          onClickOutside: this.onClickOutside,
          onEscapeKey: this.onEscapeKey,
          disabled: !ownFocus || !this.state.isOpenStable || this.state.isClosing
        }), (0, _react2.jsx)(_panel.EuiPanel, (0, _extends2.default)({}, panelProps, {
          panelRef: this.panelRef,
          className: panelClasses,
          hasShadow: false,
          paddingSize: panelPaddingSize,
          tabIndex: tabIndex,
          "aria-live": ariaLive,
          role: "dialog",
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledBy,
          "aria-modal": "true",
          "aria-describedby": ariaDescribedby,
          style: _objectSpread(_objectSpread({}, this.state.popoverStyles), {}, {
            // Adding `will-change` to reduce risk of a blurry animation in Chrome 86+
            willChange: !this.state.isOpenStable ? 'transform, opacity' : undefined
          })
        }), (0, _react2.jsx)("div", {
          className: arrowClassNames,
          style: this.state.arrowStyles
        }, arrowChildren), focusTrapScreenReaderText, (0, _react2.jsx)(_mutation_observer.EuiMutationObserver, {
          observerOptions: {
            attributes: true,
            // element attribute changes
            childList: true,
            // added/removed elements
            characterData: true,
            // text changes
            subtree: true // watch all child elements

          },
          onMutation: this.onMutation
        }, function (mutationRef) {
          return (0, _react2.jsx)("div", {
            ref: mutationRef
          }, children);
        }))));
      } // react-focus-on and relataed do not register outside click detection
      // when disabled, so we still need to conditionally check for that ourselves


      if (ownFocus) {
        return (0, _react2.jsx)("div", (0, _extends2.default)({
          className: classes,
          ref: popoverRef
        }, rest), (0, _react2.jsx)("div", {
          className: anchorClasses,
          ref: this.buttonRef
        }, button instanceof HTMLElement ? null : button), panel);
      } else {
        return (0, _react2.jsx)(_outside_click_detector.EuiOutsideClickDetector, {
          onOutsideClick: this.closePopover
        }, (0, _react2.jsx)("div", (0, _extends2.default)({
          className: classes,
          ref: popoverRef,
          onKeyDown: this.onKeyDown
        }, rest), (0, _react2.jsx)("div", {
          className: anchorClasses,
          ref: this.buttonRef
        }, button instanceof HTMLElement ? null : button), panel));
      }
    }
  }]);
  return EuiPopover;
}(_react.Component);

exports.EuiPopover = EuiPopover;
(0, _defineProperty2.default)(EuiPopover, "defaultProps", {
  isOpen: false,
  ownFocus: true,
  anchorPosition: 'downCenter',
  panelPaddingSize: 'm',
  hasArrow: true,
  display: 'inlineBlock'
});