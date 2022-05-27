"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LEVEL_COLORS", {
  enumerable: true,
  get: function get() {
    return _range_levels.LEVEL_COLORS;
  }
});
exports.EuiRangeTrack = void 0;

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

var _range = _interopRequireDefault(require("lodash/range"));

var _services = require("../../../services");

var _range_levels = require("./range_levels");

var _range_ticks = require("./range_ticks");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiRangeTrack = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiRangeTrack, _Component);

  var _super = _createSuper(EuiRangeTrack);

  function EuiRangeTrack() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiRangeTrack);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "validateValueIsInStep", function (value) {
      if (value < _this.props.min) {
        throw new Error("The value of ".concat(value, " is lower than the min value of ").concat(_this.props.min, "."));
      }

      if (value > _this.props.max) {
        throw new Error("The value of ".concat(value, " is higher than the max value of ").concat(_this.props.max, "."));
      } // Error out if the value doesn't line up with the sequence of steps


      if (!(0, _services.isEvenlyDivisibleBy)(value - _this.props.min, _this.props.step !== undefined ? _this.props.step : 1)) {
        throw new Error("The value of ".concat(value, " is not included in the possible sequence provided by the step of ").concat(_this.props.step, "."));
      } // Return the value if nothing fails


      return value;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "calculateSequence", function (min, max, interval) {
      // Loop from min to max, creating adding values at each interval
      var sequence = (0, _range.default)(min, max, interval); // range is non-inclusive of max, so make it inclusive

      if (max % interval === 0 && !sequence.includes(max)) {
        sequence.push(max);
      }

      return sequence;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "calculateTicks", function (min, max, step, tickInterval, customTicks) {
      var ticks;

      if (customTicks) {
        // If custom values were passed, use those for the sequence
        // But make sure they align with the possible sequence
        ticks = customTicks.map(function (tick) {
          return _this.validateValueIsInStep(tick.value);
        });
      } else {
        // If a custom interval was passed, use those for the sequence
        // But make sure they align with the possible sequence
        var interval = tickInterval || step;

        var tickSequence = _this.calculateSequence(min, max, interval);

        ticks = tickSequence.map(function (tick) {
          return _this.validateValueIsInStep(tick);
        });
      } // Error out if there are too many ticks to render


      if (ticks.length > 20) {
        throw new Error("The number of ticks to render is too high (".concat(ticks.length, "), reduce the interval."));
      }

      return ticks;
    });
    return _this;
  }

  (0, _createClass2.default)(EuiRangeTrack, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          max = _this$props.max,
          min = _this$props.min,
          step = _this$props.step,
          showTicks = _this$props.showTicks,
          tickInterval = _this$props.tickInterval,
          ticks = _this$props.ticks,
          levels = _this$props.levels,
          onChange = _this$props.onChange,
          value = _this$props.value,
          compressed = _this$props.compressed,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "disabled", "max", "min", "step", "showTicks", "tickInterval", "ticks", "levels", "onChange", "value", "compressed"]); // TODO: Move these to only re-calculate if no-value props have changed

      this.validateValueIsInStep(max);
      var tickSequence = showTicks === true && this.calculateTicks(min, max, step, tickInterval, ticks);
      var trackClasses = (0, _classnames.default)('euiRangeTrack', {
        'euiRangeTrack--disabled': disabled,
        'euiRangeTrack--hasLevels': levels && !!levels.length,
        'euiRangeTrack--hasTicks': tickSequence || ticks,
        'euiRangeTrack--compressed': compressed
      });
      return (0, _react2.jsx)("div", (0, _extends2.default)({
        className: trackClasses
      }, rest), levels && !!levels.length && (0, _react2.jsx)(_range_levels.EuiRangeLevels, {
        compressed: compressed,
        levels: levels,
        max: max,
        min: min,
        showTicks: showTicks
      }), tickSequence && (0, _react2.jsx)(_range_ticks.EuiRangeTicks, {
        disabled: disabled,
        compressed: compressed,
        onChange: onChange,
        ticks: ticks,
        tickSequence: tickSequence,
        value: value,
        min: min,
        max: max,
        interval: tickInterval || step
      }), children);
    }
  }]);
  return EuiRangeTrack;
}(_react.Component);

exports.EuiRangeTrack = EuiRangeTrack;