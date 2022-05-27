"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBox = void 0;

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

var _services = require("../../services");

var _portal = require("../portal");

var _combo_box_options_list = require("./combo_box_options_list");

var _matching_options = require("./matching_options");

var _combo_box_input = require("./combo_box_input/combo_box_input");

var _popover = require("../../services/popover");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var initialSearchValue = '';

var EuiComboBox = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiComboBox, _Component);

  var _super = _createSuper(EuiComboBox);

  function EuiComboBox() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiComboBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      activeOptionIndex: -1,
      hasFocus: false,
      isListOpen: false,
      listElement: null,
      listPosition: 'bottom',
      listZIndex: undefined,
      matchingOptions: (0, _matching_options.getMatchingOptions)(_this.props.options, _this.props.selectedOptions, initialSearchValue, _this.props.async, Boolean(_this.props.singleSelection), _this.props.sortMatchesBy),
      searchValue: initialSearchValue,
      width: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_isMounted", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "rootId", (0, _services.htmlIdGenerator)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "comboBoxRefInstance", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "comboBoxRefCallback", function (ref) {
      // IE11 doesn't support the `relatedTarget` event property for blur events
      // but does add it for focusout. React doesn't support `onFocusOut` so here we are.
      if (_this.comboBoxRefInstance) {
        _this.comboBoxRefInstance.removeEventListener('focusout', _this.onContainerBlur);
      }

      _this.comboBoxRefInstance = ref;

      if (_this.comboBoxRefInstance) {
        _this.comboBoxRefInstance.addEventListener('focusout', _this.onContainerBlur);

        var comboBoxBounds = _this.comboBoxRefInstance.getBoundingClientRect();

        _this.setState({
          width: comboBoxBounds.width
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "autoSizeInputRefInstance", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "autoSizeInputRefCallback", function (ref) {
      _this.autoSizeInputRefInstance = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "searchInputRefInstance", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "searchInputRefCallback", function (ref) {
      _this.searchInputRefInstance = ref;
      if (_this.props.inputRef) _this.props.inputRef(ref);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listRefInstance", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listRefCallback", function (ref) {
      if (_this.comboBoxRefInstance) {
        // find the zIndex of the combobox relative to the page body
        // and use that to depth-position the list box
        // adds an extra `100` to provide some defense around neighboring elements' positioning
        var listZIndex = (0, _popover.getElementZIndex)(_this.comboBoxRefInstance, document.body) + 100;

        _this.setState({
          listZIndex: listZIndex
        });
      }

      _this.listRefInstance = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleButtonRefInstance", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleButtonRefCallback", function (ref) {
      _this.toggleButtonRefInstance = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "optionsRefInstances", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "optionRefCallback", function (index, ref) {
      _this.optionsRefInstances[index] = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "openList", function () {
      _this.setState({
        isListOpen: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeList", function (event) {
      if (event && event.target === _this.searchInputRefInstance) {
        // really long search values / custom entries triggers a scroll event on the input
        // which the EuiComboBoxOptionsList passes through here
        return;
      }

      _this.clearActiveOption();

      _this.setState({
        listZIndex: undefined,
        isListOpen: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updatePosition", function () {
      var listElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.listElement;

      if (!_this._isMounted) {
        return;
      }

      if (!_this.state.isListOpen) {
        return;
      }

      if (!listElement) {
        return;
      } // it's possible that updateListPosition is called when listElement is becoming visible, but isn't yet


      var listElementBounds = listElement.getBoundingClientRect();

      if (listElementBounds.width === 0 || listElementBounds.height === 0) {
        return;
      }

      if (!_this.comboBoxRefInstance) {
        return;
      }

      var comboBoxBounds = _this.comboBoxRefInstance.getBoundingClientRect();

      var _ref = (0, _services.findPopoverPosition)({
        allowCrossAxis: false,
        anchor: _this.comboBoxRefInstance,
        popover: listElement,
        position: 'bottom'
      }),
          position = _ref.position,
          top = _ref.top;

      if (_this.listRefInstance) {
        _this.listRefInstance.style.top = "".concat(top, "px"); // listElement doesn't have its width set until after updating the position
        // which means the popover service won't know about the correct width
        // however, we already know where to position the element

        _this.listRefInstance.style.left = "".concat(comboBoxBounds.left + window.pageXOffset, "px");
        _this.listRefInstance.style.width = "".concat(comboBoxBounds.width, "px");
      } // Cache for future calls.


      _this.setState({
        listElement: listElement,
        listPosition: position,
        width: comboBoxBounds.width
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incrementActiveOptionIndex", function (amount) {
      // If there are no options available, do nothing.
      if (!_this.state.matchingOptions.length) {
        return;
      }

      _this.setState(function (_ref2) {
        var activeOptionIndex = _ref2.activeOptionIndex,
            matchingOptions = _ref2.matchingOptions;
        var nextActiveOptionIndex;

        if (activeOptionIndex < 0) {
          // If this is the beginning of the user's keyboard navigation of the menu, then we'll focus
          // either the first or last item.
          nextActiveOptionIndex = amount < 0 ? matchingOptions.length - 1 : 0;
        } else {
          nextActiveOptionIndex = activeOptionIndex + amount;

          if (nextActiveOptionIndex < 0) {
            nextActiveOptionIndex = matchingOptions.length - 1;
          } else if (nextActiveOptionIndex === matchingOptions.length) {
            nextActiveOptionIndex = 0;
          }
        } // Group titles are included in option list but are not selectable
        // Skip group title options


        var direction = amount > 0 ? 1 : -1;

        while (matchingOptions[nextActiveOptionIndex].isGroupLabelOption) {
          nextActiveOptionIndex = nextActiveOptionIndex + direction;

          if (nextActiveOptionIndex < 0) {
            nextActiveOptionIndex = matchingOptions.length - 1;
          } else if (nextActiveOptionIndex === matchingOptions.length) {
            nextActiveOptionIndex = 0;
          }
        }

        return {
          activeOptionIndex: nextActiveOptionIndex
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasActiveOption", function () {
      return _this.state.activeOptionIndex > -1 && _this.state.activeOptionIndex < _this.state.matchingOptions.length;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearActiveOption", function () {
      _this.setState({
        activeOptionIndex: -1
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearSearchValue", function () {
      _this.onSearchChange('');
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeLastOption", function () {
      if (!_this.props.selectedOptions.length) {
        return;
      } // Backspace will be used to delete the input, not a pill.


      if (_this.state.searchValue.length) {
        return;
      } // Delete last pill.


      _this.onRemoveOption(_this.props.selectedOptions[_this.props.selectedOptions.length - 1]);

      if (Boolean(_this.props.singleSelection) && !_this.state.isListOpen) {
        _this.openList();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addCustomOption", function (isContainerBlur, searchValue) {
      var _this$props = _this.props,
          onCreateOption = _this$props.onCreateOption,
          options = _this$props.options,
          selectedOptions = _this$props.selectedOptions,
          singleSelection = _this$props.singleSelection;
      var matchingOptions = _this.state.matchingOptions;

      if (_this.doesSearchMatchOnlyOption()) {
        _this.onAddOption(matchingOptions[0], isContainerBlur);

        return;
      }

      if (!onCreateOption) {
        return;
      } // Don't bother trying to create an option if the user hasn't typed anything.


      if (!searchValue) {
        return;
      } // Don't create the value if it's already been selected.


      if ((0, _matching_options.getSelectedOptionForSearchValue)(searchValue, selectedOptions)) {
        return;
      } // Add new custom pill if this is custom input, even if it partially matches an option.


      var isOptionCreated = onCreateOption(searchValue, (0, _matching_options.flattenOptionGroups)(options)); // Expect the consumer to be explicit in rejecting a custom option.

      if (isOptionCreated === false) {
        return;
      }

      _this.clearSearchValue();

      if (Boolean(singleSelection)) {
        // Adding a custom option to a single select that does not appear in the list of options
        _this.closeList();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "doesSearchMatchOnlyOption", function () {
      var searchValue = _this.state.searchValue;

      if (_this.state.matchingOptions.length !== 1) {
        return false;
      }

      return _this.state.matchingOptions[0].label.toLowerCase() === searchValue.toLowerCase();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "areAllOptionsSelected", function () {
      var _this$props2 = _this.props,
          options = _this$props2.options,
          selectedOptions = _this$props2.selectedOptions,
          async = _this$props2.async; // Assume if this is async then there could be infinite options.

      if (async) {
        return false;
      }

      var flattenOptions = (0, _matching_options.flattenOptionGroups)(options).map(function (option) {
        return _objectSpread(_objectSpread({}, option), {}, {
          label: option.label.trim().toLowerCase()
        });
      });
      var numberOfSelectedOptions = 0;
      selectedOptions.forEach(function (_ref3) {
        var label = _ref3.label;
        var trimmedLabel = label.trim().toLowerCase();
        if (flattenOptions.findIndex(function (option) {
          return option.label === trimmedLabel;
        }) !== -1) numberOfSelectedOptions += 1;
      });
      return flattenOptions.length === numberOfSelectedOptions;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onComboBoxFocus", function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.openList();

      _this.setState({
        hasFocus: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setCustomOptions", function (isContainerBlur) {
      var searchValue = _this.state.searchValue;
      var delimiter = _this.props.delimiter;

      if (delimiter) {
        searchValue.split(delimiter).forEach(function (option) {
          if (option.length > 0) _this.addCustomOption(isContainerBlur, option);
        });
      } else {
        _this.addCustomOption(isContainerBlur, searchValue);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onContainerBlur", function (event) {
      // close the options list, unless the use clicked on an option

      /**
       * FireFox returns `relatedTarget` as `null` for security reasons, but provides a proprietary `explicitOriginalTarget`.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/explicitOriginalTarget
       */
      var focusEvent = event;
      var relatedTarget = focusEvent.relatedTarget || focusEvent.explicitOriginalTarget;

      var focusedInOptionsList = relatedTarget && _this.listRefInstance && _this.listRefInstance.contains(relatedTarget);

      var focusedInInput = relatedTarget && _this.comboBoxRefInstance && _this.comboBoxRefInstance.contains(relatedTarget);

      if (!focusedInOptionsList && !focusedInInput) {
        _this.closeList();

        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }

        _this.setState({
          hasFocus: false
        }); // If the user tabs away or changes focus to another element, take whatever input they've
        // typed and convert it into a pill, to prevent the combo box from looking like a text input.


        if (!_this.hasActiveOption()) {
          _this.setCustomOptions(true);
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onKeyDown", function (event) {
      if (_this.props.isDisabled) return;

      switch (event.key) {
        case _services.keys.ARROW_UP:
          event.preventDefault();
          event.stopPropagation();

          if (_this.state.isListOpen) {
            _this.incrementActiveOptionIndex(-1);
          } else {
            _this.openList();
          }

          break;

        case _services.keys.ARROW_DOWN:
          event.preventDefault();
          event.stopPropagation();

          if (_this.state.isListOpen) {
            _this.incrementActiveOptionIndex(1);
          } else {
            _this.openList();
          }

          break;

        case _services.keys.BACKSPACE:
          event.stopPropagation();

          _this.removeLastOption();

          break;

        case _services.keys.ESCAPE:
          if (_this.state.isListOpen) {
            event.preventDefault();
            event.stopPropagation();

            _this.closeList();
          }

          break;

        case _services.keys.ENTER:
          event.preventDefault();
          event.stopPropagation();

          if (_this.hasActiveOption()) {
            _this.onAddOption(_this.state.matchingOptions[_this.state.activeOptionIndex]);
          } else {
            _this.setCustomOptions(false);
          }

          break;

        case _services.keys.TAB:
          // Disallow tabbing when the user is navigating the options.
          if (_this.hasActiveOption() && _this.state.isListOpen) {
            event.preventDefault();
            event.stopPropagation();
          }

          break;

        default:
          if (_this.props.onKeyDown) {
            _this.props.onKeyDown(event);
          }

      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOptionEnterKey", function (option) {
      _this.onAddOption(option);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOptionClick", function (option) {
      _this.onAddOption(option);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onAddOption", function (addedOption, isContainerBlur) {
      if (addedOption.disabled) {
        return;
      }

      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          selectedOptions = _this$props3.selectedOptions,
          singleSelectionProp = _this$props3.singleSelection;
      var singleSelection = Boolean(singleSelectionProp);
      var changeOptions = singleSelection ? [addedOption] : selectedOptions.concat(addedOption);

      if (onChange) {
        onChange(changeOptions);
      }

      _this.clearSearchValue();

      _this.clearActiveOption();

      if (!isContainerBlur) {
        if (_this.searchInputRefInstance) {
          _this.searchInputRefInstance.focus();
        }
      }

      if (singleSelection) {
        requestAnimationFrame(function () {
          return _this.closeList();
        });
      } else {
        _this.setState({
          activeOptionIndex: _this.state.matchingOptions.indexOf(addedOption)
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onRemoveOption", function (removedOption) {
      var _this$props4 = _this.props,
          onChange = _this$props4.onChange,
          selectedOptions = _this$props4.selectedOptions;

      if (onChange) {
        onChange(selectedOptions.filter(function (option) {
          return option !== removedOption;
        }));
      }

      _this.clearActiveOption();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearSelectedOptions", function () {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange([]);
      } // Clicking the clear button will also cause it to disappear. This would result in focus
      // shifting unexpectedly to the body element so we set it to the input which is more reasonable,


      if (_this.searchInputRefInstance) {
        _this.searchInputRefInstance.focus();
      }

      if (!_this.state.isListOpen) {
        _this.openList();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onComboBoxClick", function () {
      // When the user clicks anywhere on the box, enter the interaction state.
      if (_this.searchInputRefInstance) {
        _this.searchInputRefInstance.focus();
      } // If the user does this from a state in which an option has focus, then we need to reset it or clear it.


      if (Boolean(_this.props.singleSelection) && _this.props.selectedOptions.length === 1) {
        var selectedOptionIndex = _this.state.matchingOptions.findIndex(function (option) {
          return option.label === _this.props.selectedOptions[0].label && option.key === _this.props.selectedOptions[0].key;
        });

        _this.setState({
          activeOptionIndex: selectedOptionIndex
        });
      } else {
        _this.clearActiveOption();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOpenListClick", function () {
      if (_this.searchInputRefInstance) {
        _this.searchInputRefInstance.focus();
      }

      if (!_this.state.isListOpen) {
        _this.openList();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onOptionListScroll", function () {
      if (_this.searchInputRefInstance) {
        _this.searchInputRefInstance.focus();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onCloseListClick", function () {
      _this.closeList();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSearchChange", function (searchValue) {
      var _this$props5 = _this.props,
          onSearchChange = _this$props5.onSearchChange,
          delimiter = _this$props5.delimiter;

      if (onSearchChange) {
        var _hasMatchingOptions = _this.state.matchingOptions.length > 0;

        onSearchChange(searchValue, _hasMatchingOptions);
      }

      _this.setState({
        searchValue: searchValue
      }, function () {
        if (searchValue && _this.state.isListOpen === false) _this.openList();
      });

      if (delimiter && searchValue.endsWith(delimiter)) {
        _this.setCustomOptions(false);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updateMatchingOptionsIfDifferent", function (newMatchingOptions) {
      var _this$state = _this.state,
          matchingOptions = _this$state.matchingOptions,
          activeOptionIndex = _this$state.activeOptionIndex;
      var _this$props6 = _this.props,
          singleSelection = _this$props6.singleSelection,
          selectedOptions = _this$props6.selectedOptions;
      var areOptionsDifferent = false;

      if (matchingOptions.length !== newMatchingOptions.length) {
        areOptionsDifferent = true;
      } else {
        for (var i = 0; i < matchingOptions.length; i++) {
          if (matchingOptions[i].label !== newMatchingOptions[i].label) {
            areOptionsDifferent = true;
            break;
          }
        }
      }

      if (areOptionsDifferent) {
        _this.optionsRefInstances = [];
        var nextActiveOptionIndex = activeOptionIndex; // ensure that the currently selected single option is active if it is in the matchingOptions

        if (Boolean(singleSelection) && selectedOptions.length === 1) {
          if (newMatchingOptions.includes(selectedOptions[0])) {
            nextActiveOptionIndex = newMatchingOptions.indexOf(selectedOptions[0]);
          }
        }

        _this.setState({
          matchingOptions: newMatchingOptions,
          activeOptionIndex: nextActiveOptionIndex
        });

        if (!newMatchingOptions.length) {
          // Prevent endless setState -> componentWillUpdate -> setState loop.
          if (_this.hasActiveOption()) {
            _this.clearActiveOption();
          }
        }
      }
    });
    return _this;
  }

  (0, _createClass2.default)(EuiComboBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._isMounted = true; // TODO: This will need to be called once the actual stylesheet loads.

      setTimeout(function () {
        if (_this2.autoSizeInputRefInstance) {
          _this2.autoSizeInputRefInstance.copyInputStyles();
        }
      }, 100);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props7 = this.props,
          options = _this$props7.options,
          selectedOptions = _this$props7.selectedOptions,
          singleSelection = _this$props7.singleSelection,
          sortMatchesBy = _this$props7.sortMatchesBy;
      var searchValue = this.state.searchValue; // React 16.3 has a bug (fixed in 16.4) where getDerivedStateFromProps
      // isn't called after a state change, and we track `searchValue` in state
      // instead we need to react to a change in searchValue here

      this.updateMatchingOptionsIfDifferent((0, _matching_options.getMatchingOptions)(options, selectedOptions, searchValue, this.props.async, Boolean(singleSelection), sortMatchesBy));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          dataTestSubj = _this$props8['data-test-subj'],
          async = _this$props8.async,
          className = _this$props8.className,
          compressed = _this$props8.compressed,
          customOptionText = _this$props8.customOptionText,
          fullWidth = _this$props8.fullWidth,
          id = _this$props8.id,
          inputRef = _this$props8.inputRef,
          isClearable = _this$props8.isClearable,
          isDisabled = _this$props8.isDisabled,
          isInvalid = _this$props8.isInvalid,
          isLoading = _this$props8.isLoading,
          noSuggestions = _this$props8.noSuggestions,
          onBlur = _this$props8.onBlur,
          onChange = _this$props8.onChange,
          onCreateOption = _this$props8.onCreateOption,
          onSearchChange = _this$props8.onSearchChange,
          options = _this$props8.options,
          placeholder = _this$props8.placeholder,
          renderOption = _this$props8.renderOption,
          rowHeight = _this$props8.rowHeight,
          selectedOptions = _this$props8.selectedOptions,
          singleSelection = _this$props8.singleSelection,
          prepend = _this$props8.prepend,
          sortMatchesBy = _this$props8.sortMatchesBy,
          delimiter = _this$props8.delimiter,
          append = _this$props8.append,
          autoFocus = _this$props8.autoFocus,
          ariaLabel = _this$props8['aria-label'],
          ariaLabelledby = _this$props8['aria-labelledby'],
          rest = (0, _objectWithoutProperties2.default)(_this$props8, ["data-test-subj", "async", "className", "compressed", "customOptionText", "fullWidth", "id", "inputRef", "isClearable", "isDisabled", "isInvalid", "isLoading", "noSuggestions", "onBlur", "onChange", "onCreateOption", "onSearchChange", "options", "placeholder", "renderOption", "rowHeight", "selectedOptions", "singleSelection", "prepend", "sortMatchesBy", "delimiter", "append", "autoFocus", "aria-label", "aria-labelledby"]);
      var _this$state2 = this.state,
          activeOptionIndex = _this$state2.activeOptionIndex,
          hasFocus = _this$state2.hasFocus,
          isListOpen = _this$state2.isListOpen,
          listPosition = _this$state2.listPosition,
          searchValue = _this$state2.searchValue,
          width = _this$state2.width,
          matchingOptions = _this$state2.matchingOptions; // Make sure we have a valid ID if users don't pass one as a prop

      var inputId = id !== null && id !== void 0 ? id : this.rootId('_eui-combobox-id'); // Visually indicate the combobox is in an invalid state if it has lost focus but there is text entered in the input.
      // When custom options are disabled and the user leaves the combo box after entering text that does not match any
      // options, this tells the user that they've entered invalid input.

      var markAsInvalid = isInvalid || (hasFocus === false || isListOpen === false) && searchValue;
      var classes = (0, _classnames.default)('euiComboBox', className, {
        'euiComboBox--compressed': compressed,
        'euiComboBox--fullWidth': fullWidth,
        'euiComboBox--prepended': prepend,
        'euiComboBox--appended': append,
        'euiComboBox-isDisabled': isDisabled,
        'euiComboBox-isInvalid': markAsInvalid,
        'euiComboBox-isOpen': isListOpen
      });
      var value = selectedOptions.map(function (selectedOption) {
        return selectedOption.label;
      }).join(', ');
      var optionsList;

      if (!noSuggestions && isListOpen) {
        var optionsListDataTestSubj = dataTestSubj ? "".concat(dataTestSubj, "-optionsList") : undefined;
        optionsList = (0, _react2.jsx)(_portal.EuiPortal, null, (0, _react2.jsx)(_combo_box_options_list.EuiComboBoxOptionsList, {
          zIndex: this.state.listZIndex,
          activeOptionIndex: this.state.activeOptionIndex,
          areAllOptionsSelected: this.areAllOptionsSelected(),
          customOptionText: customOptionText,
          "data-test-subj": optionsListDataTestSubj,
          fullWidth: fullWidth,
          isLoading: isLoading,
          listRef: this.listRefCallback,
          matchingOptions: matchingOptions,
          onCloseList: this.closeList,
          onCreateOption: onCreateOption,
          onOptionClick: this.onOptionClick,
          onOptionEnterKey: this.onOptionEnterKey,
          onScroll: this.onOptionListScroll,
          optionRef: this.optionRefCallback,
          options: options,
          position: listPosition,
          singleSelection: singleSelection,
          renderOption: renderOption,
          rootId: this.rootId,
          rowHeight: rowHeight,
          scrollToIndex: activeOptionIndex,
          searchValue: searchValue,
          selectedOptions: selectedOptions,
          updatePosition: this.updatePosition,
          width: width,
          delimiter: delimiter,
          getSelectedOptionForSearchValue: _matching_options.getSelectedOptionForSearchValue
        }));
      }

      return (
        /**
         * Re: jsx-a11y/interactive-supports-focus
         * Focus is managed and is placed on the textbox element (`EuiComboBoxInput`)
         *
         * Re: jsx-a11y/role-has-required-aria-props
         * Expansion is managed and required `aria-controls` prop is placed on the textbox element (`EuiComboBoxInput`)
         *
         * Reference for both: https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#combobox,
         * which verifies that this implementation follows the spec.
         */
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        (0, _react2.jsx)("div", (0, _extends2.default)({}, rest, {
          "aria-expanded": isListOpen,
          "aria-haspopup": "listbox",
          className: classes,
          "data-test-subj": dataTestSubj,
          onKeyDown: this.onKeyDown,
          ref: this.comboBoxRefCallback,
          role: "combobox"
        }), (0, _react2.jsx)(_combo_box_input.EuiComboBoxInput, {
          autoSizeInputRef: this.autoSizeInputRefCallback,
          compressed: compressed,
          focusedOptionId: this.hasActiveOption() ? this.rootId("_option-".concat(this.state.activeOptionIndex)) : undefined,
          fullWidth: fullWidth,
          hasSelectedOptions: selectedOptions.length > 0,
          id: inputId,
          inputRef: this.searchInputRefCallback,
          isDisabled: isDisabled,
          isListOpen: isListOpen,
          noIcon: !!noSuggestions,
          onChange: this.onSearchChange,
          onClear: isClearable && !isDisabled ? this.clearSelectedOptions : undefined,
          onClick: this.onComboBoxClick,
          onCloseListClick: this.onCloseListClick,
          onFocus: this.onComboBoxFocus,
          onOpenListClick: this.onOpenListClick,
          onRemoveOption: this.onRemoveOption,
          placeholder: placeholder,
          rootId: this.rootId,
          searchValue: searchValue,
          selectedOptions: selectedOptions,
          singleSelection: singleSelection,
          toggleButtonRef: this.toggleButtonRefCallback,
          updatePosition: this.updatePosition,
          value: value,
          append: singleSelection ? append : undefined,
          prepend: singleSelection ? prepend : undefined,
          isLoading: isLoading,
          autoFocus: autoFocus,
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledby
        }), optionsList)
      );
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var options = nextProps.options,
          selectedOptions = nextProps.selectedOptions,
          singleSelection = nextProps.singleSelection,
          sortMatchesBy = nextProps.sortMatchesBy;
      var activeOptionIndex = prevState.activeOptionIndex,
          searchValue = prevState.searchValue; // Calculate and cache the options which match the searchValue, because we use this information
      // in multiple places and it would be expensive to calculate repeatedly.

      var matchingOptions = (0, _matching_options.getMatchingOptions)(options, selectedOptions, searchValue, nextProps.async, Boolean(singleSelection), sortMatchesBy);
      var stateUpdate = {
        matchingOptions: matchingOptions
      };

      if (activeOptionIndex >= matchingOptions.length) {
        stateUpdate.activeOptionIndex = -1;
      }

      return stateUpdate;
    }
  }]);
  return EuiComboBox;
}(_react.Component);

exports.EuiComboBox = EuiComboBox;
(0, _defineProperty2.default)(EuiComboBox, "defaultProps", {
  async: false,
  compressed: false,
  fullWidth: false,
  isClearable: true,
  options: [],
  selectedOptions: [],
  singleSelection: false,
  prepend: undefined,
  append: undefined,
  sortMatchesBy: 'none'
});