"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiErrorBoundary = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _title = require("../title");

var _code = require("../code");

var _i18n = require("../i18n");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiErrorBoundary = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiErrorBoundary, _Component);

  var _super = _createSuper(EuiErrorBoundary);

  function EuiErrorBoundary(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EuiErrorBoundary);
    _this = _super.call(this, props);
    var errorState = {
      hasError: false,
      error: undefined
    };
    _this.state = errorState;
    return _this;
  }

  (0, _createClass2.default)(EuiErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(_ref) {
      var message = _ref.message,
          stack = _ref.stack;
      // Display fallback UI
      // Only Chrome includes the `message` property as part of `stack`.
      // For consistency, rebuild the full error text from the Error subparts.
      var idx = (stack === null || stack === void 0 ? void 0 : stack.indexOf(message)) || -1;
      var stackStr = idx > -1 ? stack === null || stack === void 0 ? void 0 : stack.substr(idx + message.length + 1) : stack;
      var error = "Error: ".concat(message, "\n").concat(stackStr);
      this.setState({
        hasError: true,
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _dataTestSubj = _this$props['data-test-subj'],
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "data-test-subj"]);
      var dataTestSubj = (0, _classnames.default)('euiErrorBoundary', _dataTestSubj);

      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (0, _react2.jsx)("div", (0, _extends2.default)({
          className: "euiErrorBoundary",
          "data-test-subj": dataTestSubj
        }, rest), (0, _react2.jsx)(_code.EuiCodeBlock, null, (0, _react2.jsx)(_title.EuiTitle, {
          size: "xs"
        }, (0, _react2.jsx)("p", null, (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiErrorBoundary.error",
          default: "Error"
        }))), this.state.error));
      }

      return children;
    }
  }]);
  return EuiErrorBoundary;
}(_react.Component);

exports.EuiErrorBoundary = EuiErrorBoundary;