"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFieldSearch = void 0;

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

var _browser = require("../../../services/browser");

var _services = require("../../../services");

var _form_control_layout = require("../form_control_layout");

var _validatable_control = require("../validatable_control");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var isSearchSupported = false;

var EuiFieldSearch = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiFieldSearch, _Component);

  var _super = _createSuper(EuiFieldSearch);

  function EuiFieldSearch() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiFieldSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      value: _this.props.value || (_this.props.defaultValue ? "".concat(_this.props.defaultValue) : '')
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "inputElement", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cleanups", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClear", function () {
      // clear the field's value
      // 1. React doesn't listen for `change` events, instead it maps `input` events to `change`
      // 2. React only fires the mapped `change` event if the element's value has changed
      // 3. An input's value is, in addition to other methods, tracked by intercepting element.value = '...'
      //
      // So we have to go below the element's value setter to avoid React intercepting it,
      // only then will React treat the value as different and fire its `change` event
      //
      // https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js
      var nativeInputValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
      var nativeInputValueSetter = nativeInputValue ? nativeInputValue.set : undefined;

      if (nativeInputValueSetter) {
        nativeInputValueSetter.call(_this.inputElement, '');
      } // dispatch input event, with IE11 support/fallback


      var event;

      if ('Event' in window && typeof Event === 'function') {
        event = new Event('input', {
          bubbles: true,
          cancelable: false
        });
      } else {
        // IE11
        event = document.createEvent('Event');
        event.initEvent('input', true, false);
      }

      if (_this.inputElement) {
        if (event) {
          _this.inputElement.dispatchEvent(event);
        } // set focus on the search field


        _this.inputElement.focus();

        _this.inputElement.dispatchEvent(new Event('change'));
      }

      _this.setState({
        value: ''
      });

      var _this$props = _this.props,
          incremental = _this$props.incremental,
          onSearch = _this$props.onSearch;

      if (onSearch && incremental) {
        onSearch('');
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setRef", function (inputElement) {
      _this.inputElement = inputElement;

      if (_this.props.inputRef) {
        _this.props.inputRef(inputElement);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onKeyUp", function (event, incremental, onSearch) {
      _this.setState({
        value: event.target.value
      });

      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(event);

        if (event.defaultPrevented) {
          return;
        }
      }

      if (onSearch && (event.key !== _services.keys.ENTER && incremental || event.key === _services.keys.ENTER && !isSearchSupported)) {
        onSearch(event.target.value);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(EuiFieldSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.inputElement) return;
      isSearchSupported = _browser.Browser.isEventSupported('search', this.inputElement);

      if (isSearchSupported) {
        var onSearch = function onSearch(event) {
          if (_this2.props.onSearch) {
            if (!event || !event.target || event.defaultPrevented) return;

            _this2.props.onSearch(event.target.value);
          }
        };

        this.inputElement.addEventListener('search', onSearch);
        this.cleanups.push(function () {
          if (!_this2.inputElement) return;

          _this2.inputElement.removeEventListener('search', onSearch);
        });
      }

      var onChange = function onChange(event) {
        if (event.target && event.target.value !== _this2.state.value) {
          _this2.setState({
            value: event.target.value
          });

          if (_this2.props.onSearch) {
            _this2.props.onSearch(event.target.value);
          }
        }
      };

      this.inputElement.addEventListener('change', onChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanups.forEach(function (cleanup) {
        return cleanup();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          id = _this$props2.id,
          name = _this$props2.name,
          placeholder = _this$props2.placeholder,
          isInvalid = _this$props2.isInvalid,
          fullWidth = _this$props2.fullWidth,
          isLoading = _this$props2.isLoading,
          inputRef = _this$props2.inputRef,
          incremental = _this$props2.incremental,
          compressed = _this$props2.compressed,
          onSearch = _this$props2.onSearch,
          isClearable = _this$props2.isClearable,
          append = _this$props2.append,
          prepend = _this$props2.prepend,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, ["className", "id", "name", "placeholder", "isInvalid", "fullWidth", "isLoading", "inputRef", "incremental", "compressed", "onSearch", "isClearable", "append", "prepend"]);
      var value = this.props.value;
      if (typeof this.props.value !== 'string') value = this.state.value;
      var classes = (0, _classnames.default)('euiFieldSearch', {
        'euiFieldSearch--fullWidth': fullWidth,
        'euiFieldSearch--compressed': compressed,
        'euiFieldSearch--inGroup': prepend || append,
        'euiFieldSearch-isLoading': isLoading,
        'euiFieldSearch-isClearable': isClearable && value
      }, className);
      return (0, _react2.jsx)(_form_control_layout.EuiFormControlLayout, {
        icon: "search",
        fullWidth: fullWidth,
        isLoading: isLoading,
        clear: isClearable && value && !rest.readOnly && !rest.disabled ? {
          onClick: this.onClear
        } : undefined,
        compressed: compressed,
        append: append,
        prepend: prepend
      }, (0, _react2.jsx)(_validatable_control.EuiValidatableControl, {
        isInvalid: isInvalid
      }, (0, _react2.jsx)("input", (0, _extends2.default)({
        type: "search",
        id: id,
        name: name,
        placeholder: placeholder,
        className: classes,
        onKeyUp: function onKeyUp(e) {
          return _this3.onKeyUp(e, incremental, onSearch);
        },
        ref: this.setRef
      }, rest))));
    }
  }]);
  return EuiFieldSearch;
}(_react.Component);

exports.EuiFieldSearch = EuiFieldSearch;
(0, _defineProperty2.default)(EuiFieldSearch, "defaultProps", {
  fullWidth: false,
  isLoading: false,
  incremental: false,
  compressed: false,
  isClearable: true
});