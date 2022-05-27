"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSearchBox = void 0;

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

var _form = require("../form");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiSearchBox = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiSearchBox, _Component);

  var _super = _createSuper(EuiSearchBox);

  function EuiSearchBox() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiSearchBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputElement", null);
    return _this;
  }

  (0, _createClass2.default)(EuiSearchBox, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.query !== this.props.query && this.inputElement != null) {
        this.inputElement.value = this.props.query;
        this.inputElement.dispatchEvent(new Event('change'));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          query = _this$props.query,
          incremental = _this$props.incremental,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["query", "incremental"]);
      var ariaLabel;

      if (incremental) {
        ariaLabel = 'This is a search bar. As you type, the results lower in the page will automatically filter.';
      } else {
        ariaLabel = 'This is a search bar. After typing your query, hit enter to filter the results lower in the page.';
      }

      return (0, _react2.jsx)(_form.EuiFieldSearch, (0, _extends2.default)({
        inputRef: function inputRef(input) {
          return _this2.inputElement = input;
        },
        fullWidth: true,
        defaultValue: query,
        incremental: incremental,
        "aria-label": ariaLabel
      }, rest));
    }
  }]);
  return EuiSearchBox;
}(_react.Component);

exports.EuiSearchBox = EuiSearchBox;
(0, _defineProperty2.default)(EuiSearchBox, "defaultProps", {
  placeholder: 'Search...',
  incremental: false
});