"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiAbsoluteTab = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _date_picker = require("../../date_picker");

var _form = require("../../../form");

var _to_case = require("../../../../services/string/to_case");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiAbsoluteTab = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiAbsoluteTab, _Component);

  var _super = _createSuper(EuiAbsoluteTab);

  function EuiAbsoluteTab(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EuiAbsoluteTab);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (date, event) {
      var onChange = _this.props.onChange;

      if (date === null) {
        return;
      }

      onChange(date.toISOString(), event);
      var valueAsMoment = (0, _moment.default)(date);

      _this.setState({
        valueAsMoment: valueAsMoment,
        textInputValue: valueAsMoment.format(_this.props.dateFormat),
        isTextInvalid: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleTextChange", function (event) {
      var onChange = _this.props.onChange;
      var valueAsMoment = (0, _moment.default)(event.target.value, _this.props.dateFormat, true);
      var dateIsValid = valueAsMoment.isValid();

      if (dateIsValid) {
        onChange(valueAsMoment.toISOString(), event);
      }

      _this.setState({
        textInputValue: event.target.value,
        isTextInvalid: !dateIsValid,
        valueAsMoment: dateIsValid ? valueAsMoment : null
      });
    });
    var sentenceCasedPosition = (0, _to_case.toSentenceCase)(props.position);

    var parsedValue = _datemath.default.parse(props.value, {
      roundUp: props.roundUp
    });

    var _valueAsMoment = parsedValue && parsedValue.isValid() ? parsedValue : (0, _moment.default)();

    var textInputValue = _valueAsMoment.locale(_this.props.locale || 'en').format(_this.props.dateFormat);

    _this.state = {
      isTextInvalid: false,
      sentenceCasedPosition: sentenceCasedPosition,
      textInputValue: textInputValue,
      valueAsMoment: _valueAsMoment
    };
    return _this;
  }

  (0, _createClass2.default)(EuiAbsoluteTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dateFormat = _this$props.dateFormat,
          timeFormat = _this$props.timeFormat,
          locale = _this$props.locale,
          utcOffset = _this$props.utcOffset;
      var _this$state = this.state,
          valueAsMoment = _this$state.valueAsMoment,
          isTextInvalid = _this$state.isTextInvalid,
          textInputValue = _this$state.textInputValue,
          sentenceCasedPosition = _this$state.sentenceCasedPosition;
      return (0, _react2.jsx)("div", null, (0, _react2.jsx)(_date_picker.EuiDatePicker, {
        inline: true,
        showTimeSelect: true,
        shadow: false,
        selected: valueAsMoment,
        onChange: this.handleChange,
        dateFormat: dateFormat,
        timeFormat: timeFormat,
        locale: locale,
        utcOffset: utcOffset
      }), (0, _react2.jsx)(_form.EuiFormRow, {
        className: "euiSuperDatePicker__absoluteDateFormRow",
        isInvalid: isTextInvalid,
        error: isTextInvalid ? "Expected format ".concat(dateFormat) : undefined
      }, (0, _react2.jsx)(_form.EuiFieldText, {
        compressed: true,
        isInvalid: isTextInvalid,
        value: textInputValue,
        onChange: this.handleTextChange,
        "data-test-subj": 'superDatePickerAbsoluteDateInput',
        prepend: (0, _react2.jsx)(_form.EuiFormLabel, null, sentenceCasedPosition, " date")
      })));
    }
  }]);
  return EuiAbsoluteTab;
}(_react.Component);

exports.EuiAbsoluteTab = EuiAbsoluteTab;