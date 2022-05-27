"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBoxInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactInputAutosize = _interopRequireDefault(require("react-input-autosize"));

var _accessibility = require("../../accessibility");

var _form_control_layout = require("../../form/form_control_layout");

var _combo_box_pill = require("./combo_box_pill");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiComboBoxInput = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiComboBoxInput, _Component);

  var _super = _createSuper(EuiComboBoxInput);

  function EuiComboBoxInput() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiComboBoxInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      hasFocus: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updatePosition", function () {
      // Wait a beat for the DOM to update, since we depend on DOM elements' bounds.
      requestAnimationFrame(function () {
        _this.props.updatePosition();
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFocus", function (event) {
      _this.props.onFocus(event);

      _this.setState({
        hasFocus: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onBlur", function (event) {
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.setState({
        hasFocus: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputOnChange", function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          searchValue = _this$props.searchValue;

      if (onChange) {
        onChange(event.target.value);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputRefCallback", function (ref) {
      var autoSizeInputRef = _this.props.autoSizeInputRef;

      if (autoSizeInputRef) {
        autoSizeInputRef(ref);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(EuiComboBoxInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var searchValue = prevProps.searchValue; // We need to update the position of everything if the user enters enough input to change
      // the size of the input.

      if (searchValue !== this.props.searchValue) {
        this.updatePosition();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          compressed = _this$props2.compressed,
          focusedOptionId = _this$props2.focusedOptionId,
          fullWidth = _this$props2.fullWidth,
          hasSelectedOptions = _this$props2.hasSelectedOptions,
          id = _this$props2.id,
          inputRef = _this$props2.inputRef,
          isDisabled = _this$props2.isDisabled,
          isListOpen = _this$props2.isListOpen,
          noIcon = _this$props2.noIcon,
          onClear = _this$props2.onClear,
          onClick = _this$props2.onClick,
          onCloseListClick = _this$props2.onCloseListClick,
          onOpenListClick = _this$props2.onOpenListClick,
          onRemoveOption = _this$props2.onRemoveOption,
          placeholder = _this$props2.placeholder,
          rootId = _this$props2.rootId,
          searchValue = _this$props2.searchValue,
          selectedOptions = _this$props2.selectedOptions,
          singleSelectionProp = _this$props2.singleSelection,
          toggleButtonRef = _this$props2.toggleButtonRef,
          value = _this$props2.value,
          prepend = _this$props2.prepend,
          append = _this$props2.append,
          isLoading = _this$props2.isLoading,
          autoFocus = _this$props2.autoFocus,
          ariaLabel = _this$props2['aria-label'],
          ariaLabelledby = _this$props2['aria-labelledby'];
      var singleSelection = Boolean(singleSelectionProp);
      var asPlainText = singleSelectionProp && (0, _typeof2.default)(singleSelectionProp) === 'object' && singleSelectionProp.asPlainText || false;
      var pills = selectedOptions ? selectedOptions.map(function (option) {
        var key = option.key,
            label = option.label,
            color = option.color,
            onClick = option.onClick,
            rest = (0, _objectWithoutProperties2.default)(option, ["key", "label", "color", "onClick"]);
        var pillOnClose = isDisabled || singleSelection || onClick ? undefined : onRemoveOption;
        return (0, _react2.jsx)(_combo_box_pill.EuiComboBoxPill, (0, _extends2.default)({
          option: option,
          onClose: pillOnClose,
          key: key !== null && key !== void 0 ? key : label.toLowerCase(),
          color: color,
          onClick: onClick,
          onClickAriaLabel: onClick ? 'Change' : undefined,
          asPlainText: asPlainText
        }, rest), label);
      }) : null;
      var removeOptionMessage;
      var removeOptionMessageId;

      if (this.state.hasFocus) {
        var readPlaceholder = placeholder ? "".concat(placeholder, ".") : '';
        var removeOptionMessageContent = "Combo box. Selected. ".concat(searchValue ? "".concat(searchValue, ". Selected. ") : '').concat(selectedOptions && selectedOptions.length > 0 ? "".concat(value, ". Press Backspace to delete ").concat(selectedOptions[selectedOptions.length - 1].label, ". ") : '', "Combo box input. ").concat(readPlaceholder, " Type some text or, to display a list of choices, press Down Arrow. ") + 'To exit the list of choices, press Escape.';
        removeOptionMessageId = rootId('removeOptionMessage'); // aria-live="assertive" will read this message aloud immediately once it enters the DOM.
        // We'll render to the DOM when the input gains focus and remove it when the input loses focus.
        // We'll use aria-hidden to prevent default aria information from being read by the screen
        // reader.

        removeOptionMessage = (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("span", {
          "aria-live": "assertive",
          id: removeOptionMessageId
        }, removeOptionMessageContent));
      }

      var placeholderMessage;

      if (placeholder && selectedOptions && !selectedOptions.length && !searchValue) {
        placeholderMessage = (0, _react2.jsx)("p", {
          className: "euiComboBoxPlaceholder"
        }, placeholder);
      }

      var clickProps = {};

      if (!isDisabled && onClear && hasSelectedOptions) {
        clickProps.clear = {
          'data-test-subj': 'comboBoxClearButton',
          onClick: onClear
        };
      }

      var icon;

      if (!noIcon) {
        icon = {
          'aria-label': isListOpen ? 'Close list of options' : 'Open list of options',
          'data-test-subj': 'comboBoxToggleListButton',
          disabled: isDisabled,
          onClick: isListOpen && !isDisabled ? onCloseListClick : onOpenListClick,
          ref: toggleButtonRef,
          side: 'right',
          type: 'arrowDown'
        };
      }

      var wrapClasses = (0, _classnames.default)('euiComboBox__inputWrap', {
        'euiComboBox__inputWrap--compressed': compressed,
        'euiComboBox__inputWrap--fullWidth': fullWidth,
        'euiComboBox__inputWrap--noWrap': singleSelection,
        'euiComboBox__inputWrap-isLoading': isLoading,
        'euiComboBox__inputWrap-isClearable': onClear,
        'euiComboBox__inputWrap--inGroup': prepend || append
      });
      return (0, _react2.jsx)(_form_control_layout.EuiFormControlLayout, (0, _extends2.default)({
        icon: icon
      }, clickProps, {
        inputId: id,
        isLoading: isLoading,
        compressed: compressed,
        fullWidth: fullWidth,
        prepend: prepend,
        append: append
      }), (0, _react2.jsx)("div", {
        className: wrapClasses,
        "data-test-subj": "comboBoxInput",
        onClick: onClick,
        tabIndex: -1 // becomes onBlur event's relatedTarget, otherwise relatedTarget is null when clicking on this div

      }, !singleSelection || !searchValue ? pills : null, placeholderMessage, (0, _react2.jsx)(_reactInputAutosize.default, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        "aria-activedescendant": focusedOptionId,
        "aria-controls": isListOpen ? rootId('listbox') : '',
        className: "euiComboBox__input",
        "data-test-subj": "comboBoxSearchInput",
        disabled: isDisabled,
        id: id,
        inputRef: inputRef,
        onBlur: this.onBlur,
        onChange: this.inputOnChange,
        onFocus: this.onFocus,
        ref: this.inputRefCallback,
        role: "textbox",
        style: {
          fontSize: 14
        },
        value: searchValue,
        autoFocus: autoFocus
      }), removeOptionMessage));
    }
  }]);
  return EuiComboBoxInput;
}(_react.Component);

exports.EuiComboBoxInput = EuiComboBoxInput;