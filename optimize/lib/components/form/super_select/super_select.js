"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSuperSelect = void 0;

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

var _accessibility = require("../../accessibility");

var _services = require("../../../services");

var _super_select_control = require("./super_select_control");

var _popover = require("../../popover");

var _context_menu = require("../../context_menu");

var _i18n = require("../../i18n");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ShiftDirection;

(function (ShiftDirection) {
  ShiftDirection["BACK"] = "back";
  ShiftDirection["FORWARD"] = "forward";
})(ShiftDirection || (ShiftDirection = {}));

var EuiSuperSelect = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiSuperSelect, _Component);

  var _super = _createSuper(EuiSuperSelect);

  function EuiSuperSelect() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiSuperSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "itemNodes", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_isMounted", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "describedById", (0, _services.htmlIdGenerator)('euiSuperSelect_')('_screenreaderDescribeId'));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "labelledById", (0, _services.htmlIdGenerator)('euiSuperSelect_')('_screenreaderLabelId'));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isPopoverOpen: _this.props.isOpen || false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setItemNode", function (node, index) {
      _this.itemNodes[index] = node;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "openPopover", function () {
      _this.setState({
        isPopoverOpen: true
      });

      var focusSelected = function focusSelected() {
        var indexOfSelected = _this.props.options.reduce(function (indexOfSelected, option, index) {
          if (indexOfSelected != null) return indexOfSelected;
          if (option == null) return null;
          return option.value === _this.props.valueOfSelected ? index : null;
        }, null);

        requestAnimationFrame(function () {
          if (!_this._isMounted) {
            return;
          }

          if (_this.props.valueOfSelected != null) {
            if (indexOfSelected != null) {
              _this.focusItemAt(indexOfSelected);
            } else {
              focusSelected();
            }
          } else {
            var firstFocusableOption = _this.props.options.findIndex(function (_ref) {
              var disabled = _ref.disabled;
              return disabled !== true;
            });

            _this.focusItemAt(firstFocusableOption);
          }

          if (_this.props.onFocus) {
            _this.props.onFocus();
          }
        });
      };

      requestAnimationFrame(focusSelected);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closePopover", function () {
      _this.setState({
        isPopoverOpen: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "itemClicked", function (value) {
      _this.closePopover();

      if (_this.props.onChange) {
        _this.props.onChange(value);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelectKeyDown", function (event) {
      if (event.key === _services.keys.ARROW_UP || event.key === _services.keys.ARROW_DOWN) {
        event.preventDefault();
        event.stopPropagation();

        _this.openPopover();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onItemKeyDown", function (event) {
      switch (event.key) {
        case _services.keys.ESCAPE:
          // close the popover and prevent ancestors from handling
          event.preventDefault();
          event.stopPropagation();

          _this.closePopover();

          break;

        case _services.keys.TAB:
          // no-op
          event.preventDefault();
          event.stopPropagation();
          break;

        case _services.keys.ARROW_UP:
          event.preventDefault();
          event.stopPropagation();

          _this.shiftFocus(ShiftDirection.BACK);

          break;

        case _services.keys.ARROW_DOWN:
          event.preventDefault();
          event.stopPropagation();

          _this.shiftFocus(ShiftDirection.FORWARD);

          break;
      }
    });
    return _this;
  }

  (0, _createClass2.default)(EuiSuperSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;

      if (this.props.isOpen) {
        this.openPopover();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "focusItemAt",
    value: function focusItemAt(index) {
      var targetElement = this.itemNodes[index];

      if (targetElement != null) {
        targetElement.focus();
      }
    }
  }, {
    key: "shiftFocus",
    value: function shiftFocus(direction) {
      var currentIndex = this.itemNodes.indexOf(document.activeElement);
      var targetElementIndex;

      if (currentIndex === -1) {
        // somehow the select options has lost focus
        targetElementIndex = 0;
      } else {
        if (direction === ShiftDirection.BACK) {
          targetElementIndex = currentIndex === 0 ? this.itemNodes.length - 1 : currentIndex - 1;
        } else {
          targetElementIndex = currentIndex === this.itemNodes.length - 1 ? 0 : currentIndex + 1;
        }
      }

      this.focusItemAt(targetElementIndex);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          options = _this$props.options,
          valueOfSelected = _this$props.valueOfSelected,
          onChange = _this$props.onChange,
          isOpen = _this$props.isOpen,
          isInvalid = _this$props.isInvalid,
          hasDividers = _this$props.hasDividers,
          itemClassName = _this$props.itemClassName,
          itemLayoutAlign = _this$props.itemLayoutAlign,
          fullWidth = _this$props.fullWidth,
          popoverProps = _this$props.popoverProps,
          compressed = _this$props.compressed,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "options", "valueOfSelected", "onChange", "isOpen", "isInvalid", "hasDividers", "itemClassName", "itemLayoutAlign", "fullWidth", "popoverProps", "compressed"]);
      var popoverClasses = (0, _classnames.default)('euiSuperSelect', popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.className);
      var buttonClasses = (0, _classnames.default)({
        'euiSuperSelect--isOpen__button': this.state.isPopoverOpen
      }, className);
      var itemClasses = (0, _classnames.default)('euiSuperSelect__item', {
        'euiSuperSelect__item--hasDividers': hasDividers
      }, itemClassName);
      var button = (0, _react2.jsx)(_super_select_control.EuiSuperSelectControl, (0, _extends2.default)({
        screenReaderId: this.labelledById,
        options: options,
        value: valueOfSelected,
        onClick: this.state.isPopoverOpen ? this.closePopover : this.openPopover,
        onKeyDown: this.onSelectKeyDown,
        className: buttonClasses,
        fullWidth: fullWidth,
        isInvalid: isInvalid,
        compressed: compressed
      }, rest));
      var items = options.map(function (option, index) {
        var value = option.value,
            dropdownDisplay = option.dropdownDisplay,
            inputDisplay = option.inputDisplay,
            optionRest = (0, _objectWithoutProperties2.default)(option, ["value", "dropdownDisplay", "inputDisplay"]);
        return (0, _react2.jsx)(_context_menu.EuiContextMenuItem, (0, _extends2.default)({
          key: index,
          className: itemClasses,
          icon: valueOfSelected === value ? 'check' : 'empty',
          onClick: function onClick() {
            return _this2.itemClicked(value);
          },
          onKeyDown: _this2.onItemKeyDown,
          layoutAlign: itemLayoutAlign,
          buttonRef: function buttonRef(node) {
            return _this2.setItemNode(node, index);
          },
          role: "option",
          id: value,
          "aria-selected": valueOfSelected === value
        }, optionRest), dropdownDisplay || inputDisplay);
      });
      return (0, _react2.jsx)(_popover.EuiInputPopover, (0, _extends2.default)({
        closePopover: this.closePopover,
        panelPaddingSize: "none"
      }, popoverProps, {
        className: popoverClasses,
        isOpen: isOpen || this.state.isPopoverOpen,
        input: button,
        fullWidth: fullWidth
      }), (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("p", {
        id: this.describedById
      }, (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiSuperSelect.screenReaderAnnouncement",
        default: "You are in a form selector and must select a single option. Use the up and down keys to navigate or escape to close."
      }))), (0, _react2.jsx)("div", {
        "aria-labelledby": this.labelledById,
        "aria-describedby": this.describedById,
        className: "euiSuperSelect__listbox",
        role: "listbox",
        "aria-activedescendant": valueOfSelected,
        tabIndex: 0
      }, items));
    }
  }]);
  return EuiSuperSelect;
}(_react.Component);

exports.EuiSuperSelect = EuiSuperSelect;
(0, _defineProperty2.default)(EuiSuperSelect, "defaultProps", {
  hasDividers: false,
  fullWidth: false,
  compressed: false,
  isInvalid: false,
  isLoading: false
});