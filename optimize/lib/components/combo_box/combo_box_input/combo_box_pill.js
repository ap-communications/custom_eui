"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBoxPill = void 0;

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

var _badge = require("../../badge");

var _i18n = require("../../i18n");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiComboBoxPill = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiComboBoxPill, _Component);

  var _super = _createSuper(EuiComboBoxPill);

  function EuiComboBoxPill() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiComboBoxPill);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCloseButtonClick", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          option = _this$props.option;

      if (onClose) {
        onClose(option);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(EuiComboBoxPill, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          asPlainText = _this$props2.asPlainText,
          children = _this$props2.children,
          className = _this$props2.className,
          color = _this$props2.color,
          onClick = _this$props2.onClick,
          onClickAriaLabel = _this$props2.onClickAriaLabel,
          onClose = _this$props2.onClose,
          option = _this$props2.option,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, ["asPlainText", "children", "className", "color", "onClick", "onClickAriaLabel", "onClose", "option"]);
      var classes = (0, _classnames.default)('euiComboBoxPill', {
        'euiComboBoxPill--plainText': asPlainText
      }, className);
      var onClickProps = onClick && onClickAriaLabel ? {
        onClick: onClick,
        onClickAriaLabel: onClickAriaLabel
      } : {};

      if (onClose) {
        return (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiComboBoxPill.removeSelection",
          default: "Remove {children} from selection in this group",
          values: {
            children: children
          }
        }, function (removeSelection) {
          return (0, _react2.jsx)(_badge.EuiBadge, (0, _extends2.default)({
            className: classes,
            closeButtonProps: {
              tabIndex: -1
            },
            color: color,
            iconOnClick: _this2.onCloseButtonClick,
            iconOnClickAriaLabel: removeSelection,
            iconSide: "right",
            iconType: "cross",
            title: children
          }, onClickProps, rest), children);
        });
      }

      if (asPlainText) {
        return (0, _react2.jsx)("span", (0, _extends2.default)({
          className: classes
        }, rest), children);
      }

      return (0, _react2.jsx)(_badge.EuiBadge, (0, _extends2.default)({
        className: classes,
        color: color,
        title: children
      }, rest, onClickProps), children);
    }
  }]);
  return EuiComboBoxPill;
}(_react.Component);

exports.EuiComboBoxPill = EuiComboBoxPill;
(0, _defineProperty2.default)(EuiComboBoxPill, "defaultProps", {
  color: 'hollow'
});