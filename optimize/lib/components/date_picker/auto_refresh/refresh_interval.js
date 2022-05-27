"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRefreshInterval = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _i18n = require("../../i18n");

var _common = require("../../common");

var _flex = require("../../flex");

var _form = require("../../form");

var _services = require("../../../services");

var _accessibility = require("../../accessibility");

var _time_units = require("../super_date_picker/time_units");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var refreshUnitsOptions = (0, _common.keysOf)(_time_units.timeUnits).filter(function (timeUnit) {
  return timeUnit === 'h' || timeUnit === 'm' || timeUnit === 's';
}).map(function (timeUnit) {
  return {
    value: timeUnit,
    text: _time_units.timeUnitsPlural[timeUnit]
  };
});
var MILLISECONDS_IN_SECOND = 1000;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;

function fromMilliseconds(milliseconds) {
  var round = function round(value) {
    return parseFloat(value.toFixed(2));
  };

  if (milliseconds > MILLISECONDS_IN_HOUR) {
    return {
      units: 'h',
      value: round(milliseconds / MILLISECONDS_IN_HOUR)
    };
  }

  if (milliseconds > MILLISECONDS_IN_MINUTE) {
    return {
      units: 'm',
      value: round(milliseconds / MILLISECONDS_IN_MINUTE)
    };
  }

  return {
    units: 's',
    value: round(milliseconds / MILLISECONDS_IN_SECOND)
  };
}

function toMilliseconds(units, value) {
  switch (units) {
    case 'h':
      return Math.round(value * MILLISECONDS_IN_HOUR);

    case 'm':
      return Math.round(value * MILLISECONDS_IN_MINUTE);

    case 's':
    default:
      return Math.round(value * MILLISECONDS_IN_SECOND);
  }
}

var EuiRefreshInterval = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiRefreshInterval, _Component);

  var _super = _createSuper(EuiRefreshInterval);

  function EuiRefreshInterval() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiRefreshInterval);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", fromMilliseconds(_this.props.refreshInterval || 0));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "generateId", (0, _services.htmlIdGenerator)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "legendId", _this.generateId());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "refreshSelectionId", _this.generateId());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onValueChange", function (event) {
      var sanitizedValue = parseFloat(event.target.value);

      _this.setState({
        value: isNaN(sanitizedValue) ? '' : sanitizedValue
      }, _this.applyRefreshInterval);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onUnitsChange", function (event) {
      _this.setState({
        units: event.target.value
      }, _this.applyRefreshInterval);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "startRefresh", function () {
      var onRefreshChange = _this.props.onRefreshChange;
      var _this$state = _this.state,
          value = _this$state.value,
          units = _this$state.units;

      if (value !== '' && value > 0 && onRefreshChange !== undefined) {
        onRefreshChange({
          refreshInterval: toMilliseconds(units, value),
          isPaused: false
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleKeyDown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter') {
        _this.startRefresh();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "applyRefreshInterval", function () {
      var _this$props = _this.props,
          onRefreshChange = _this$props.onRefreshChange,
          isPaused = _this$props.isPaused;
      var _this$state2 = _this.state,
          units = _this$state2.units,
          value = _this$state2.value;

      if (value === '') {
        return;
      }

      if (!onRefreshChange) {
        return;
      }

      var refreshInterval = toMilliseconds(units, value);
      onRefreshChange({
        refreshInterval: refreshInterval,
        isPaused: refreshInterval <= 0 ? true : !!isPaused
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleRefresh", function () {
      var _this$props2 = _this.props,
          onRefreshChange = _this$props2.onRefreshChange,
          isPaused = _this$props2.isPaused;
      var _this$state3 = _this.state,
          units = _this$state3.units,
          value = _this$state3.value;

      if (!onRefreshChange || value === '') {
        return;
      }

      onRefreshChange({
        refreshInterval: toMilliseconds(units, value),
        isPaused: !isPaused
      });
    });
    return _this;
  }

  (0, _createClass2.default)(EuiRefreshInterval, [{
    key: "render",
    value: function render() {
      var isPaused = this.props.isPaused;
      var _this$state4 = this.state,
          value = _this$state4.value,
          units = _this$state4.units;
      var options = refreshUnitsOptions.find(function (_ref2) {
        var value = _ref2.value;
        return value === units;
      });
      var optionText = options ? options.text : '';
      var fullDescription = isPaused ? (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiRefreshInterval.fullDescriptionOff",
        default: "Refresh is off, interval set to {optionValue} {optionText}.",
        values: {
          optionValue: value,
          optionText: optionText
        }
      }) : (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiRefreshInterval.fullDescriptionOn",
        default: "Refresh is on, interval set to {optionValue} {optionText}.",
        values: {
          optionValue: value,
          optionText: optionText
        }
      });
      return (0, _react2.jsx)("fieldset", null, (0, _react2.jsx)(_flex.EuiFlexGroup, {
        alignItems: "center",
        gutterSize: "s",
        responsive: false,
        wrap: true
      }, (0, _react2.jsx)(_flex.EuiFlexItem, {
        grow: false
      }, (0, _react2.jsx)(_form.EuiSwitch, {
        "data-test-subj": "superDatePickerToggleRefreshButton",
        "aria-describedby": this.refreshSelectionId,
        checked: !isPaused,
        onChange: this.toggleRefresh,
        compressed: true,
        label: (0, _react2.jsx)(_form.EuiFormLabel, {
          type: "legend",
          id: this.legendId
        }, (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiRefreshInterval.legend",
          default: "Refresh every"
        }))
      })), (0, _react2.jsx)(_flex.EuiFlexItem, {
        style: {
          minWidth: 60
        }
      }, (0, _react2.jsx)(_form.EuiFieldNumber, {
        compressed: true,
        fullWidth: true,
        value: value,
        onChange: this.onValueChange,
        onKeyDown: this.handleKeyDown,
        isInvalid: !isPaused && (value === '' || value <= 0),
        disabled: isPaused,
        "aria-label": "Refresh interval value",
        "aria-describedby": "".concat(this.refreshSelectionId, " ").concat(this.legendId),
        "data-test-subj": "superDatePickerRefreshIntervalInput"
      })), (0, _react2.jsx)(_flex.EuiFlexItem, {
        style: {
          minWidth: 100
        },
        grow: 2
      }, (0, _react2.jsx)(_form.EuiSelect, {
        compressed: true,
        fullWidth: true,
        "aria-label": "Refresh interval units",
        "aria-describedby": "".concat(this.refreshSelectionId, " ").concat(this.legendId),
        value: units,
        disabled: isPaused,
        options: refreshUnitsOptions,
        onChange: this.onUnitsChange,
        onKeyDown: this.handleKeyDown,
        "data-test-subj": "superDatePickerRefreshIntervalUnitsSelect"
      }))), (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("p", {
        id: this.refreshSelectionId
      }, fullDescription)));
    }
  }]);
  return EuiRefreshInterval;
}(_react.Component);

exports.EuiRefreshInterval = EuiRefreshInterval;
(0, _defineProperty2.default)(EuiRefreshInterval, "defaultProps", {
  isPaused: true,
  refreshInterval: 1000
});