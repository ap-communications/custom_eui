"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSuperUpdateButton = void 0;

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

var _button = require("../../button");

var _i18n = require("../../i18n");

var _tool_tip = require("../../tool_tip");

var _responsive2 = require("../../responsive");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiSuperUpdateButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiSuperUpdateButton, _Component);

  var _super = _createSuper(EuiSuperUpdateButton);

  function EuiSuperUpdateButton() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiSuperUpdateButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_isMounted", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "tooltipTimeout", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "tooltip", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setTootipRef", function (node) {
      _this.tooltip = node;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "showTooltip", function () {
      if (!_this._isMounted || !_this.tooltip) {
        return;
      }

      _this.tooltip.showToolTip();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hideTooltip", function () {
      if (!_this._isMounted || !_this.tooltip) {
        return;
      }

      _this.tooltip.hideToolTip();
    });
    return _this;
  }

  (0, _createClass2.default)(EuiSuperUpdateButton, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.props.showTooltip && this.props.needsUpdate && !this.props.isDisabled && !this.props.isLoading) {
        this.showTooltip();
        this.tooltipTimeout = setTimeout(function () {
          _this2.hideTooltip();
        }, 2000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          needsUpdate = _this$props.needsUpdate,
          isLoading = _this$props.isLoading,
          isDisabled = _this$props.isDisabled,
          onClick = _this$props.onClick,
          toolTipProps = _this$props.toolTipProps,
          showTooltip = _this$props.showTooltip,
          iconOnly = _this$props.iconOnly,
          _responsive = _this$props.responsive,
          restTextProps = _this$props.textProps,
          fill = _this$props.fill,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "needsUpdate", "isLoading", "isDisabled", "onClick", "toolTipProps", "showTooltip", "iconOnly", "responsive", "textProps", "fill"]); // Force responsive for "all" if `iconOnly = true`

      var responsive = iconOnly ? 'all' : _responsive;
      var classes = (0, _classnames.default)('euiSuperUpdateButton', className);
      var buttonText = (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiSuperUpdateButton.refreshButtonLabel",
        default: "Refresh"
      });

      if (needsUpdate || isLoading) {
        buttonText = isLoading ? (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiSuperUpdateButton.updatingButtonLabel",
          default: "Updating"
        }) : (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiSuperUpdateButton.updateButtonLabel",
          default: "Update"
        });
      }

      var tooltipContent;

      if (isDisabled) {
        tooltipContent = (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiSuperUpdateButton.cannotUpdateTooltip",
          default: "Cannot update"
        });
      } else if (needsUpdate && !isLoading) {
        tooltipContent = (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiSuperUpdateButton.clickToApplyTooltip",
          default: "Click to apply"
        });
      }

      var sharedButtonProps = {
        color: needsUpdate || isLoading ? 'success' : 'primary',
        iconType: needsUpdate || isLoading ? 'kqlFunction' : 'refresh',
        isDisabled: isDisabled,
        onClick: onClick,
        isLoading: isLoading
      };
      return (0, _react2.jsx)(_tool_tip.EuiToolTip, (0, _extends2.default)({
        ref: this.setTootipRef,
        content: tooltipContent,
        position: "bottom"
      }, toolTipProps), (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_responsive2.EuiShowFor, {
        sizes: responsive || 'none'
      }, (0, _react2.jsx)(_button.EuiButton, (0, _extends2.default)({
        className: classes,
        minWidth: 0
      }, sharedButtonProps, {
        fill: fill,
        textProps: _objectSpread(_objectSpread({}, restTextProps), {}, {
          className: (0, _classnames.default)('euiScreenReaderOnly', restTextProps === null || restTextProps === void 0 ? void 0 : restTextProps.className)
        })
      }, rest), buttonText)), (0, _react2.jsx)(_responsive2.EuiHideFor, {
        sizes: responsive || 'none'
      }, (0, _react2.jsx)(_button.EuiButton, (0, _extends2.default)({
        className: classes,
        minWidth: 118
      }, sharedButtonProps, {
        fill: fill,
        textProps: restTextProps
      }, rest), buttonText))));
    }
  }]);
  return EuiSuperUpdateButton;
}(_react.Component);

exports.EuiSuperUpdateButton = EuiSuperUpdateButton;
(0, _defineProperty2.default)(EuiSuperUpdateButton, "defaultProps", {
  needsUpdate: false,
  isLoading: false,
  isDisabled: false,
  showTooltip: false,
  responsive: ['xs', 's'],
  fill: true
});