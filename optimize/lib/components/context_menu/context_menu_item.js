"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiContextMenuItem = exports.LAYOUT_ALIGN = exports.SIZES = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _icon = require("../icon");

var _tool_tip = require("../tool_tip");

var _services = require("../../services");

var _href_validator = require("../../services/security/href_validator");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var sizeToClassNameMap = {
  s: 'euiContextMenuItem--small',
  m: null
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;
var layoutAlignToClassNames = {
  center: null,
  top: 'euiContextMenu__itemLayout--top',
  bottom: 'euiContextMenu__itemLayout--bottom'
};
var LAYOUT_ALIGN = (0, _common.keysOf)(layoutAlignToClassNames);
exports.LAYOUT_ALIGN = LAYOUT_ALIGN;

var EuiContextMenuItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiContextMenuItem, _Component);

  var _super = _createSuper(EuiContextMenuItem);

  function EuiContextMenuItem() {
    (0, _classCallCheck2.default)(this, EuiContextMenuItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(EuiContextMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          hasPanel = _this$props.hasPanel,
          icon = _this$props.icon,
          buttonRef = _this$props.buttonRef,
          _disabled = _this$props.disabled,
          _this$props$layoutAli = _this$props.layoutAlign,
          layoutAlign = _this$props$layoutAli === void 0 ? 'center' : _this$props$layoutAli,
          toolTipTitle = _this$props.toolTipTitle,
          toolTipContent = _this$props.toolTipContent,
          _this$props$toolTipPo = _this$props.toolTipPosition,
          toolTipPosition = _this$props$toolTipPo === void 0 ? 'right' : _this$props$toolTipPo,
          href = _this$props.href,
          target = _this$props.target,
          rel = _this$props.rel,
          size = _this$props.size,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "hasPanel", "icon", "buttonRef", "disabled", "layoutAlign", "toolTipTitle", "toolTipContent", "toolTipPosition", "href", "target", "rel", "size"]);
      var iconInstance;
      var isHrefValid = !href || (0, _href_validator.validateHref)(href);
      var disabled = _disabled || !isHrefValid;

      if (icon) {
        switch ((0, _typeof2.default)(icon)) {
          case 'string':
            iconInstance = (0, _react2.jsx)(_icon.EuiIcon, {
              type: icon,
              size: "m",
              className: "euiContextMenu__icon",
              color: "inherit" // forces the icon to inherit its parent color

            });
            break;

          default:
            // Assume it's already an instance of an icon.
            iconInstance = /*#__PURE__*/(0, _react.cloneElement)(icon, {
              className: 'euiContextMenu__icon'
            });
        }
      }

      var arrow;

      if (hasPanel) {
        arrow = (0, _react2.jsx)(_icon.EuiIcon, {
          type: "arrowRight",
          size: "m",
          className: "euiContextMenu__arrow"
        });
      }

      var classes = (0, _classnames.default)('euiContextMenuItem', size && sizeToClassNameMap[size], className, {
        'euiContextMenuItem-isDisabled': disabled
      });
      var layoutClasses = (0, _classnames.default)('euiContextMenu__itemLayout', layoutAlignToClassNames[layoutAlign]);
      var buttonInner = (0, _react2.jsx)("span", {
        className: layoutClasses
      }, iconInstance, (0, _react2.jsx)("span", {
        className: "euiContextMenuItem__text"
      }, children), arrow);
      var button; // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
      // this is a button and piggyback off its disabled styles.

      if (href && !disabled) {
        var secureRel = (0, _services.getSecureRelForTarget)({
          href: href,
          target: target,
          rel: rel
        });
        button = (0, _react2.jsx)("a", (0, _extends2.default)({
          className: classes,
          href: href,
          target: target,
          rel: secureRel,
          ref: buttonRef
        }, rest), buttonInner);
      } else {
        button = (0, _react2.jsx)("button", (0, _extends2.default)({
          disabled: disabled,
          className: classes,
          type: "button",
          ref: buttonRef
        }, rest), buttonInner);
      }

      if (toolTipContent) {
        return (0, _react2.jsx)(_tool_tip.EuiToolTip, {
          title: toolTipTitle ? toolTipTitle : null,
          content: toolTipContent,
          anchorClassName: "eui-displayBlock",
          position: toolTipPosition
        }, button);
      } else {
        return button;
      }
    }
  }]);
  return EuiContextMenuItem;
}(_react.Component);

exports.EuiContextMenuItem = EuiContextMenuItem;