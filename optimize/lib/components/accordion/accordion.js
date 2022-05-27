"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiAccordion = exports.PADDING_SIZES = void 0;

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

var _loading = require("../loading");

var _resize_observer = require("../observer/resize_observer");

var _i18n = require("../i18n");

var _services = require("../../services");

var _button = require("../button");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var paddingSizeToClassNameMap = {
  none: '',
  xs: 'euiAccordion__padding--xs',
  s: 'euiAccordion__padding--s',
  m: 'euiAccordion__padding--m',
  l: 'euiAccordion__padding--l',
  xl: 'euiAccordion__padding--xl'
};
var PADDING_SIZES = (0, _common.keysOf)(paddingSizeToClassNameMap);
exports.PADDING_SIZES = PADDING_SIZES;

var EuiAccordion = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiAccordion, _Component);

  var _super = _createSuper(EuiAccordion);

  function EuiAccordion() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiAccordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "childContent", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "childWrapper", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isOpen: _this.props.forceState ? _this.props.forceState === 'open' : _this.props.initialIsOpen
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setChildContentHeight", function () {
      var forceState = _this.props.forceState;
      requestAnimationFrame(function () {
        var height = _this.childContent && (forceState ? forceState === 'open' : _this.state.isOpen) ? _this.childContent.clientHeight : 0;
        _this.childWrapper && _this.childWrapper.setAttribute('style', "height: ".concat(height, "px"));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onToggle", function () {
      var forceState = _this.props.forceState;

      if (forceState) {
        _this.props.onToggle && _this.props.onToggle(forceState === 'open' ? false : true);
      } else {
        _this.setState(function (prevState) {
          return {
            isOpen: !prevState.isOpen
          };
        }, function () {
          if (_this.state.isOpen && _this.childWrapper) {
            _this.childWrapper.focus();
          }

          _this.props.onToggle && _this.props.onToggle(_this.state.isOpen);
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setChildContentRef", function (node) {
      _this.childContent = node;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "generatedId", (0, _services.htmlIdGenerator)()());
    return _this;
  }

  (0, _createClass2.default)(EuiAccordion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setChildContentHeight();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setChildContentHeight();
    }
  }, {
    key: "render",
    value: function render() {
      var _buttonProps$id,
          _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          buttonContent = _this$props.buttonContent,
          className = _this$props.className,
          id = _this$props.id,
          _this$props$element = _this$props.element,
          Element = _this$props$element === void 0 ? 'div' : _this$props$element,
          buttonClassName = _this$props.buttonClassName,
          buttonContentClassName = _this$props.buttonContentClassName,
          extraAction = _this$props.extraAction,
          paddingSize = _this$props.paddingSize,
          initialIsOpen = _this$props.initialIsOpen,
          arrowDisplay = _this$props.arrowDisplay,
          forceState = _this$props.forceState,
          isLoading = _this$props.isLoading,
          isLoadingMessage = _this$props.isLoadingMessage,
          buttonProps = _this$props.buttonProps,
          _this$props$buttonEle = _this$props.buttonElement,
          _ButtonElement = _this$props$buttonEle === void 0 ? 'button' : _this$props$buttonEle,
          arrowProps = _this$props.arrowProps,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "buttonContent", "className", "id", "element", "buttonClassName", "buttonContentClassName", "extraAction", "paddingSize", "initialIsOpen", "arrowDisplay", "forceState", "isLoading", "isLoadingMessage", "buttonProps", "buttonElement", "arrowProps"]);

      var isOpen = forceState ? forceState === 'open' : this.state.isOpen; // Force button element to be a legend if the element is a fieldset

      var ButtonElement = Element === 'fieldset' ? 'legend' : _ButtonElement;
      var buttonElementIsFocusable = ButtonElement === 'button'; // Force visibility of arrow button if button element is not focusable

      var _arrowDisplay = arrowDisplay === 'none' && !buttonElementIsFocusable ? 'left' : arrowDisplay;

      var classes = (0, _classnames.default)('euiAccordion', {
        'euiAccordion-isOpen': isOpen
      }, className);
      var paddingClass = paddingSize ? (0, _classnames.default)(paddingSizeToClassNameMap[paddingSize]) : undefined;
      var childrenClasses = (0, _classnames.default)(paddingClass, {
        'euiAccordion__children-isLoading': isLoading
      });
      var buttonClasses = (0, _classnames.default)('euiAccordion__button', buttonClassName, buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className);
      var buttonContentClasses = (0, _classnames.default)('euiAccordion__buttonContent', buttonContentClassName);
      var iconButtonClasses = (0, _classnames.default)('euiAccordion__iconButton', {
        'euiAccordion__iconButton-isOpen': isOpen,
        'euiAccordion__iconButton--right': _arrowDisplay === 'right'
      }, arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.className);
      var iconButton;
      var buttonId = (_buttonProps$id = buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.id) !== null && _buttonProps$id !== void 0 ? _buttonProps$id : this.generatedId;

      if (_arrowDisplay !== 'none') {
        iconButton = (0, _react2.jsx)(_button.EuiButtonIcon, (0, _extends2.default)({
          color: "text"
        }, arrowProps, {
          className: iconButtonClasses,
          iconType: "arrowRight",
          onClick: this.onToggle,
          "aria-controls": id,
          "aria-expanded": isOpen,
          "aria-labelledby": buttonId,
          tabIndex: buttonElementIsFocusable ? -1 : 0
        }));
      }

      var optionalAction = null;

      if (extraAction) {
        optionalAction = (0, _react2.jsx)("div", {
          className: "euiAccordion__optionalAction"
        }, isLoading ? (0, _react2.jsx)(_loading.EuiLoadingSpinner, null) : extraAction);
      }

      var childrenContent;

      if (isLoading && isLoadingMessage) {
        childrenContent = (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_loading.EuiLoadingSpinner, {
          className: "euiAccordion__spinner"
        }), (0, _react2.jsx)("span", null, isLoadingMessage && isLoadingMessage !== true ? isLoadingMessage : (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiAccordion.isLoading",
          default: "Loading"
        })));
      } else {
        childrenContent = children;
      }

      var button = (0, _react2.jsx)(ButtonElement, (0, _extends2.default)({}, buttonProps, {
        id: buttonId,
        className: buttonClasses,
        "aria-controls": id,
        "aria-expanded": isOpen,
        onClick: this.onToggle,
        type: ButtonElement === 'button' ? 'button' : undefined
      }), (0, _react2.jsx)("span", {
        className: buttonContentClasses
      }, buttonContent));
      return (0, _react2.jsx)(Element, (0, _extends2.default)({
        className: classes
      }, rest), (0, _react2.jsx)("div", {
        className: "euiAccordion__triggerWrapper"
      }, _arrowDisplay === 'left' && iconButton, button, optionalAction, _arrowDisplay === 'right' && iconButton), (0, _react2.jsx)("div", {
        className: "euiAccordion__childWrapper",
        ref: function ref(node) {
          _this2.childWrapper = node;
        },
        tabIndex: -1,
        role: "region",
        "aria-labelledby": buttonId,
        id: id
      }, (0, _react2.jsx)(_resize_observer.EuiResizeObserver, {
        onResize: this.setChildContentHeight
      }, function (resizeRef) {
        return (0, _react2.jsx)("div", {
          ref: function ref(_ref) {
            _this2.setChildContentRef(_ref);

            resizeRef(_ref);
          }
        }, (0, _react2.jsx)("div", {
          className: childrenClasses
        }, childrenContent));
      })));
    }
  }]);
  return EuiAccordion;
}(_react.Component);

exports.EuiAccordion = EuiAccordion;
(0, _defineProperty2.default)(EuiAccordion, "defaultProps", {
  initialIsOpen: false,
  paddingSize: 'none',
  arrowDisplay: 'left',
  isLoading: false,
  isLoadingMessage: false,
  element: 'div',
  buttonElement: 'button'
});