"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRange = void 0;

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

var _number = require("../../../services/number");

var _popover = require("../../popover");

var _accessibility = require("../../../services/accessibility");

var _range_highlight = require("./range_highlight");

var _range_input = require("./range_input");

var _range_label = require("./range_label");

var _range_slider = require("./range_slider");

var _range_tooltip = require("./range_tooltip");

var _range_track = require("./range_track");

var _range_wrapper = require("./range_wrapper");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiRange = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiRange, _Component);

  var _super = _createSuper(EuiRange);

  function EuiRange() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiRange);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "preventPopoverClose", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      id: _this.props.id || (0, _accessibility.htmlIdGenerator)()(),
      isPopoverOpen: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOnChange", function (e) {
      var isValid = (0, _number.isWithinRange)(_this.props.min, _this.props.max, e.currentTarget.value);

      if (_this.props.onChange) {
        _this.props.onChange(e, isValid);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInputFocus", function (e) {
      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }

      _this.setState({
        isPopoverOpen: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInputBlur", function (e) {
      return setTimeout(function () {
        // Safari does not recognize any focus-related eventing for input[type=range]
        // making it impossible to capture its state using active/focus/relatedTarget
        // Instead, a prevention flag is set on mousedown, with a waiting period here.
        // Mousedown is viable because in the popover case, it is inaccessible via keyboard (intentionally)
        if (_this.preventPopoverClose) {
          _this.preventPopoverClose = false;
          return;
        }

        if (_this.props.onBlur) {
          _this.props.onBlur(e);
        }

        _this.closePopover();
      }, 200);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closePopover", function () {
      _this.preventPopoverClose = false;

      _this.setState({
        isPopoverOpen: false
      });
    });
    return _this;
  }

  (0, _createClass2.default)(EuiRange, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          compressed = _this$props.compressed,
          disabled = _this$props.disabled,
          fullWidth = _this$props.fullWidth,
          isLoading = _this$props.isLoading,
          readOnly = _this$props.readOnly,
          propsId = _this$props.id,
          max = _this$props.max,
          min = _this$props.min,
          name = _this$props.name,
          step = _this$props.step,
          showLabels = _this$props.showLabels,
          showInput = _this$props.showInput,
          showTicks = _this$props.showTicks,
          tickInterval = _this$props.tickInterval,
          ticks = _this$props.ticks,
          levels = _this$props.levels,
          showRange = _this$props.showRange,
          showValue = _this$props.showValue,
          valueAppend = _this$props.valueAppend,
          valuePrepend = _this$props.valuePrepend,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          value = _this$props.value,
          style = _this$props.style,
          tabIndex = _this$props.tabIndex,
          isInvalid = _this$props.isInvalid,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "compressed", "disabled", "fullWidth", "isLoading", "readOnly", "id", "max", "min", "name", "step", "showLabels", "showInput", "showTicks", "tickInterval", "ticks", "levels", "showRange", "showValue", "valueAppend", "valuePrepend", "onBlur", "onChange", "onFocus", "value", "style", "tabIndex", "isInvalid"]);
      var id = this.state.id;
      var digitTolerance = Math.max(String(min).length, String(max).length);
      var showInputOnly = showInput === 'inputWithPopover';
      var canShowDropdown = showInputOnly && !readOnly && !disabled;
      var theInput = !!showInput ? (0, _react2.jsx)(_range_input.EuiRangeInput, (0, _extends2.default)({
        id: id,
        min: min,
        max: max,
        digitTolerance: digitTolerance,
        step: step,
        value: value,
        readOnly: readOnly,
        disabled: disabled,
        compressed: compressed,
        onChange: this.handleOnChange,
        name: name,
        onFocus: canShowDropdown ? this.onInputFocus : onFocus,
        onBlur: canShowDropdown ? this.onInputBlur : onBlur,
        fullWidth: showInputOnly && fullWidth,
        isLoading: showInputOnly && isLoading,
        isInvalid: isInvalid,
        autoSize: !showInputOnly
      }, rest)) : null;
      var classes = (0, _classnames.default)('euiRange', {
        'euiRange--hasInput': showInput
      }, className);
      var theRange = (0, _react2.jsx)(_range_wrapper.EuiRangeWrapper, {
        className: classes,
        fullWidth: fullWidth,
        compressed: compressed
      }, showLabels && (0, _react2.jsx)(_range_label.EuiRangeLabel, {
        side: "min",
        disabled: disabled
      }, min), (0, _react2.jsx)(_range_track.EuiRangeTrack, {
        disabled: disabled,
        compressed: compressed,
        max: max,
        min: min,
        step: step,
        showTicks: showTicks,
        tickInterval: tickInterval,
        ticks: ticks,
        levels: levels,
        onChange: this.handleOnChange,
        value: value,
        "aria-hidden": showInput === true
      }, (0, _react2.jsx)(_range_slider.EuiRangeSlider, (0, _extends2.default)({
        id: showInput ? undefined : id // Attach id only to the input if there is one
        ,
        name: name,
        min: min,
        max: max,
        step: step,
        value: value,
        disabled: disabled,
        compressed: compressed,
        onChange: this.handleOnChange,
        style: style,
        showTicks: showTicks,
        showRange: showRange,
        tabIndex: showInput ? -1 : tabIndex,
        onMouseDown: showInputOnly ? function () {
          return _this2.preventPopoverClose = true;
        } : undefined,
        onFocus: showInput === true ? undefined : onFocus,
        onBlur: showInputOnly ? this.onInputBlur : onBlur,
        "aria-hidden": showInput === true ? true : false
      }, rest)), showRange && this.isValid && (0, _react2.jsx)(_range_highlight.EuiRangeHighlight, {
        compressed: compressed,
        showTicks: showTicks,
        min: Number(min),
        max: Number(max),
        lowerValue: Number(min),
        upperValue: Number(value)
      }), showValue && !!String(value).length && (0, _react2.jsx)(_range_tooltip.EuiRangeTooltip, {
        compressed: compressed,
        value: value,
        max: max,
        min: min,
        name: name,
        showTicks: showTicks,
        valuePrepend: valuePrepend,
        valueAppend: valueAppend
      })), showLabels && (0, _react2.jsx)(_range_label.EuiRangeLabel, {
        side: "max",
        disabled: disabled
      }, max), showInput && !showInputOnly && (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)("div", {
        className: showTicks || ticks ? 'euiRange__slimHorizontalSpacer' : 'euiRange__horizontalSpacer'
      }), theInput));
      var thePopover = showInputOnly ? (0, _react2.jsx)(_popover.EuiInputPopover, {
        className: "euiRange__popover",
        input: theInput // `showInputOnly` confirms existence
        ,
        fullWidth: fullWidth,
        isOpen: this.state.isPopoverOpen,
        closePopover: this.closePopover,
        disableFocusTrap: true
      }, theRange) : undefined;
      return thePopover ? thePopover : theRange;
    }
  }, {
    key: "isValid",
    get: function get() {
      return (0, _number.isWithinRange)(this.props.min, this.props.max, this.props.value || '');
    }
  }]);
  return EuiRange;
}(_react.Component);

exports.EuiRange = EuiRange;
(0, _defineProperty2.default)(EuiRange, "defaultProps", {
  min: 0,
  max: 100,
  step: 1,
  fullWidth: false,
  compressed: false,
  isLoading: false,
  showLabels: false,
  showInput: false,
  showRange: false,
  showTicks: false,
  showValue: false,
  levels: []
});