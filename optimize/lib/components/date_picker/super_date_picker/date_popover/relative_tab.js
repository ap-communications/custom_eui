"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRelativeTab = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _to_case = require("../../../../services/string/to_case");

var _services = require("../../../../services");

var _flex = require("../../../flex");

var _form = require("../../../form");

var _spacer = require("../../../spacer");

var _time_units = require("../time_units");

var _relative_options = require("../relative_options");

var _relative_utils = require("../relative_utils");

var _accessibility = require("../../../accessibility");

var _i18n = require("../../../i18n");

var _date_modes = require("../date_modes");

var _popover = require("../../../popover");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiRelativeTab = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiRelativeTab, _Component);

  var _super = _createSuper(EuiRelativeTab);

  function EuiRelativeTab() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiRelativeTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", _objectSpread(_objectSpread({}, (0, _relative_utils.parseRelativeParts)(_this.props.value)), {}, {
      sentenceCasedPosition: (0, _to_case.toSentenceCase)(_this.props.position)
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "relativeDateInputNumberDescriptionId", (0, _services.htmlIdGenerator)()());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCountChange", function (event) {
      var sanitizedValue = parseInt(event.target.value, 10);

      _this.setState({
        count: isNaN(sanitizedValue) ? undefined : sanitizedValue
      }, _this.handleChange);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onUnitChange", function (event) {
      _this.setState({
        unit: event.target.value
      }, _this.handleChange);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onRoundChange", function (event) {
      _this.setState({
        round: event.target.checked
      }, _this.handleChange);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function () {
      var _this$state = _this.state,
          count = _this$state.count,
          round = _this$state.round,
          roundUnit = _this$state.roundUnit,
          unit = _this$state.unit;
      var onChange = _this.props.onChange;

      if (count === undefined || count < 0) {
        return;
      }

      var date = (0, _relative_utils.toRelativeStringFromParts)({
        count: count,
        round: round,
        roundUnit: roundUnit,
        unit: unit
      });
      onChange(date);
    });
    return _this;
  }

  (0, _createClass2.default)(EuiRelativeTab, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          count = _this$state2.count,
          unit = _this$state2.unit;
      var invalidDate = this.props.value === _date_modes.INVALID_DATE;
      var invalidValue = count === undefined || count < 0;
      var isInvalid = invalidValue || invalidDate;

      var parsedValue = _datemath.default.parse(this.props.value, {
        roundUp: this.props.roundUp
      });

      var formattedValue = isInvalid || !parsedValue || !parsedValue.isValid() ? '' : parsedValue.locale(this.props.locale || 'en').format(this.props.dateFormat);

      var getErrorMessage = function getErrorMessage(_ref) {
        var numberInputError = _ref.numberInputError,
            dateInputError = _ref.dateInputError;
        if (invalidValue) return numberInputError;
        if (invalidDate) return dateInputError;
        return null;
      };

      return (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_form.EuiForm, {
        className: "euiDatePopoverContent__padded"
      }, (0, _react2.jsx)(_flex.EuiFlexGroup, {
        gutterSize: "s",
        responsive: false
      }, (0, _react2.jsx)(_flex.EuiFlexItem, null, (0, _react2.jsx)(_i18n.EuiI18n, {
        tokens: ['euiRelativeTab.numberInputError', 'euiRelativeTab.numberInputLabel', 'euiRelativeTab.dateInputError'],
        defaults: ['Must be >= 0', 'Time span amount', 'Must be a valid range']
      }, function (_ref2) {
        var _ref3 = (0, _slicedToArray2.default)(_ref2, 3),
            numberInputError = _ref3[0],
            numberInputLabel = _ref3[1],
            dateInputError = _ref3[2];

        return (0, _react2.jsx)(_form.EuiFormRow, {
          isInvalid: isInvalid,
          error: getErrorMessage({
            numberInputError: numberInputError,
            dateInputError: dateInputError
          })
        }, (0, _react2.jsx)(_form.EuiFieldNumber, {
          compressed: true,
          "aria-label": numberInputLabel,
          "aria-describedby": _this2.relativeDateInputNumberDescriptionId,
          "data-test-subj": 'superDatePickerRelativeDateInputNumber',
          value: count,
          onChange: _this2.onCountChange,
          isInvalid: isInvalid
        }));
      })), (0, _react2.jsx)(_flex.EuiFlexItem, null, (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiRelativeTab.unitInputLabel",
        default: "Relative time span"
      }, function (unitInputLabel) {
        return (0, _react2.jsx)(_form.EuiSelect, {
          compressed: true,
          "aria-label": unitInputLabel,
          "data-test-subj": 'superDatePickerRelativeDateInputUnitSelector',
          value: unit,
          options: _relative_options.relativeOptions,
          onChange: _this2.onUnitChange
        });
      }))), (0, _react2.jsx)(_spacer.EuiSpacer, {
        size: "s"
      }), (0, _react2.jsx)(_form.EuiFieldText, {
        compressed: true,
        value: formattedValue,
        readOnly: true,
        prepend: (0, _react2.jsx)(_form.EuiFormLabel, null, (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiRelativeTab.relativeDate",
          default: "{position} date",
          values: {
            position: this.state.sentenceCasedPosition
          }
        }))
      }), (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("p", {
        id: this.relativeDateInputNumberDescriptionId
      }, (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiRelativeTab.fullDescription",
        default: "The unit is changeable. Currently set to {unit}.",
        values: {
          unit: unit
        }
      })))), (0, _react2.jsx)(_popover.EuiPopoverFooter, {
        paddingSize: "s"
      }, (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiRelativeTab.roundingLabel",
        default: "Round to the {unit}",
        values: {
          unit: _time_units.timeUnits[unit.substring(0, 1)]
        }
      }, function (roundingLabel) {
        return (0, _react2.jsx)(_form.EuiSwitch, {
          "data-test-subj": 'superDatePickerRelativeDateRoundSwitch',
          label: roundingLabel,
          checked: _this2.state.round,
          onChange: _this2.onRoundChange
        });
      })));
    }
  }]);
  return EuiRelativeTab;
}(_react.Component);

exports.EuiRelativeTab = EuiRelativeTab;