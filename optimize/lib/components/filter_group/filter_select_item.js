"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFilterSelectItem = void 0;

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

var _flex = require("../flex");

var _icon = require("../icon");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var resolveIconAndColor = function resolveIconAndColor(checked) {
  if (!checked) {
    return {
      icon: 'empty'
    };
  }

  return checked === 'on' ? {
    icon: 'check',
    color: 'text'
  } : {
    icon: 'cross',
    color: 'text'
  };
};

var EuiFilterSelectItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiFilterSelectItem, _Component);

  var _super = _createSuper(EuiFilterSelectItem);

  function EuiFilterSelectItem() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiFilterSelectItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "buttonRef", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      hasFocus: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "focus", function () {
      if (_this.buttonRef) {
        _this.buttonRef.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasFocus", function () {
      return _this.state.hasFocus;
    });
    return _this;
  }

  (0, _createClass2.default)(EuiFilterSelectItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disabled = _this$props.disabled,
          checked = _this$props.checked,
          isFocused = _this$props.isFocused,
          showIcons = _this$props.showIcons,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "disabled", "checked", "isFocused", "showIcons"]);
      var classes = (0, _classnames.default)('euiFilterSelectItem', {
        'euiFilterSelectItem-isFocused': isFocused
      }, className);
      var iconNode;

      if (showIcons) {
        var _resolveIconAndColor = resolveIconAndColor(checked),
            icon = _resolveIconAndColor.icon,
            color = _resolveIconAndColor.color;

        iconNode = (0, _react2.jsx)(_flex.EuiFlexItem, {
          grow: false
        }, (0, _react2.jsx)(_icon.EuiIcon, {
          color: color,
          type: icon
        }));
      }

      return (0, _react2.jsx)("button", (0, _extends2.default)({
        ref: function ref(_ref) {
          return _this2.buttonRef = _ref;
        },
        role: "option",
        type: "button",
        "aria-selected": isFocused,
        className: classes,
        disabled: disabled,
        "aria-disabled": disabled
      }, rest), (0, _react2.jsx)(_flex.EuiFlexGroup, {
        alignItems: "center",
        gutterSize: "s",
        component: "span",
        responsive: false
      }, iconNode, (0, _react2.jsx)(_flex.EuiFlexItem, {
        className: "euiFilterSelectItem__content",
        component: "span"
      }, children)));
    }
  }]);
  return EuiFilterSelectItem;
}(_react.Component);

exports.EuiFilterSelectItem = EuiFilterSelectItem;
(0, _defineProperty2.default)(EuiFilterSelectItem, "defaultProps", {
  showIcons: true
});