"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCheckbox = exports.TYPES = void 0;

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

var _common = require("../../common");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var typeToClassNameMap = {
  inList: 'euiCheckbox--inList'
};
var TYPES = (0, _common.keysOf)(typeToClassNameMap);
exports.TYPES = TYPES;

var EuiCheckbox = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiCheckbox, _Component);

  var _super = _createSuper(EuiCheckbox);

  function EuiCheckbox() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiCheckbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputRef", undefined);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setInputRef", function (input) {
      _this.inputRef = input;

      if (_this.props.inputRef) {
        _this.props.inputRef(input);
      }

      _this.invalidateIndeterminate();
    });
    return _this;
  }

  (0, _createClass2.default)(EuiCheckbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.invalidateIndeterminate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.invalidateIndeterminate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          id = _this$props.id,
          checked = _this$props.checked,
          label = _this$props.label,
          onChange = _this$props.onChange,
          type = _this$props.type,
          disabled = _this$props.disabled,
          compressed = _this$props.compressed,
          indeterminate = _this$props.indeterminate,
          inputRef = _this$props.inputRef,
          labelProps = _this$props.labelProps,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "id", "checked", "label", "onChange", "type", "disabled", "compressed", "indeterminate", "inputRef", "labelProps"]);
      var classes = (0, _classnames.default)('euiCheckbox', type && typeToClassNameMap[type], {
        'euiCheckbox--noLabel': !label,
        'euiCheckbox--compressed': compressed
      }, className);
      var labelClasses = (0, _classnames.default)('euiCheckbox__label', labelProps === null || labelProps === void 0 ? void 0 : labelProps.className);
      var optionalLabel;

      if (label) {
        optionalLabel = (0, _react2.jsx)("label", (0, _extends2.default)({}, labelProps, {
          className: labelClasses,
          htmlFor: id
        }), label);
      }

      return (0, _react2.jsx)("div", {
        className: classes
      }, (0, _react2.jsx)("input", (0, _extends2.default)({
        className: "euiCheckbox__input",
        type: "checkbox",
        id: id,
        checked: checked,
        onChange: onChange,
        disabled: disabled,
        ref: this.setInputRef
      }, rest)), (0, _react2.jsx)("div", {
        className: "euiCheckbox__square"
      }), optionalLabel);
    }
  }, {
    key: "invalidateIndeterminate",
    value: function invalidateIndeterminate() {
      if (this.inputRef) {
        this.inputRef.indeterminate = this.props.indeterminate;
      }
    }
  }]);
  return EuiCheckbox;
}(_react.Component);

exports.EuiCheckbox = EuiCheckbox;
(0, _defineProperty2.default)(EuiCheckbox, "defaultProps", {
  checked: false,
  disabled: false,
  indeterminate: false,
  compressed: false
});