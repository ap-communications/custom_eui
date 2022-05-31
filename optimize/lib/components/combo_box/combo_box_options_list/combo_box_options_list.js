"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBoxOptionsList = void 0;

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

var _reactWindow = require("react-window");

var _flex = require("../../flex");

var _highlight = require("../../highlight");

var _panel = require("../../panel");

var _text = require("../../text");

var _loading = require("../../loading");

var _combo_box_title = require("./combo_box_title");

var _i18n = require("../../i18n");

var _filter_select_item = require("../../filter_group/filter_select_item");

var _badge = require("../../badge/");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var OPTION_CONTENT_CLASSNAME = 'euiComboBoxOption__content';
var hitEnterBadge = (0, _react2.jsx)(_badge.EuiBadge, {
  className: "euiComboBoxOption__enterBadge",
  color: "hollow",
  iconType: "returnKey",
  "aria-hidden": "true"
});

var EuiComboBoxOptionsList = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiComboBoxOptionsList, _Component);

  var _super = _createSuper(EuiComboBoxOptionsList);

  function EuiComboBoxOptionsList() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiComboBoxOptionsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listRefInstance", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listRef", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listBoxRef", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updatePosition", function () {
      // Wait a beat for the DOM to update, since we depend on DOM elements' bounds.
      requestAnimationFrame(function () {
        _this.props.updatePosition(_this.listRefInstance);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeListOnScroll", function (event) {
      // Close the list when a scroll event happens, but not if the scroll happened in the options list.
      // This mirrors Firefox's approach of auto-closing `select` elements onscroll.
      if (_this.listRefInstance && event.target && _this.listRefInstance.contains(event.target) === false) {
        _this.props.onCloseList(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "listRefCallback", function (ref) {
      _this.props.listRef(ref);

      _this.listRefInstance = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setListRef", function (ref) {
      _this.listRef = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setListBoxRef", function (ref) {
      _this.listBoxRef = ref;

      if (ref) {
        ref.setAttribute('id', _this.props.rootId('listbox'));
        ref.setAttribute('role', 'listBox');
        ref.setAttribute('tabIndex', '0');
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "ListRow", function (_ref) {
      var _option$key;

      var data = _ref.data,
          index = _ref.index,
          style = _ref.style;
      var option = data[index];
      var key = option.key,
          isGroupLabelOption = option.isGroupLabelOption,
          label = option.label,
          value = option.value,
          rest = (0, _objectWithoutProperties2.default)(option, ["key", "isGroupLabelOption", "label", "value"]);
      var _this$props = _this.props,
          singleSelection = _this$props.singleSelection,
          selectedOptions = _this$props.selectedOptions,
          onOptionClick = _this$props.onOptionClick,
          optionRef = _this$props.optionRef,
          activeOptionIndex = _this$props.activeOptionIndex,
          renderOption = _this$props.renderOption,
          searchValue = _this$props.searchValue,
          rootId = _this$props.rootId;

      if (isGroupLabelOption) {
        return (0, _react2.jsx)("div", {
          key: key !== null && key !== void 0 ? key : label.toLowerCase(),
          style: style
        }, (0, _react2.jsx)(_combo_box_title.EuiComboBoxTitle, null, label));
      }

      var checked = undefined;

      if (singleSelection && selectedOptions.length && selectedOptions[0].label === label && selectedOptions[0].key === key) {
        checked = 'on';
      }

      var optionIsFocused = activeOptionIndex === index;
      var optionIsDisabled = option.hasOwnProperty('disabled') && option.disabled === true;
      return (0, _react2.jsx)(_filter_select_item.EuiFilterSelectItem, (0, _extends2.default)({
        style: style,
        key: (_option$key = option.key) !== null && _option$key !== void 0 ? _option$key : option.label.toLowerCase(),
        onClick: function onClick() {
          if (onOptionClick) {
            onOptionClick(option);
          }
        },
        ref: optionRef.bind((0, _assertThisInitialized2.default)(_this), index),
        isFocused: optionIsFocused,
        checked: checked,
        showIcons: singleSelection ? true : false,
        id: rootId("_option-".concat(index)),
        title: label
      }, rest), (0, _react2.jsx)("span", {
        className: "euiComboBoxOption__contentWrapper"
      }, renderOption ? (0, _react2.jsx)("span", {
        className: OPTION_CONTENT_CLASSNAME
      }, renderOption(option, searchValue, 'euiComboBoxOption__renderOption')) : (0, _react2.jsx)(_highlight.EuiHighlight, {
        search: searchValue,
        className: OPTION_CONTENT_CLASSNAME
      }, label), optionIsFocused && !optionIsDisabled ? hitEnterBadge : null));
    });
    return _this;
  }

  (0, _createClass2.default)(EuiComboBoxOptionsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Wait a frame, otherwise moving focus from one combo box to another will result in the class
      // being removed from the body.
      requestAnimationFrame(function () {
        document.body.classList.add('euiBody-hasPortalContent');
      });
      this.updatePosition();
      window.addEventListener('resize', this.updatePosition); // Firefox will trigger a scroll event in many common situations when the options list div is appended
      // to the DOM; in testing it was always within 100ms, but setting a timeout here for 500ms to be safe

      setTimeout(function () {
        window.addEventListener('scroll', _this2.closeListOnScroll, {
          passive: true,
          // for better performance as we won't call preventDefault
          capture: true // scroll events don't bubble, they must be captured instead

        });
      }, 500);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var options = prevProps.options,
          selectedOptions = prevProps.selectedOptions,
          searchValue = prevProps.searchValue; // We don't compare matchingOptions because that will result in a loop.

      if (searchValue !== this.props.searchValue || options !== this.props.options || selectedOptions !== this.props.selectedOptions) {
        this.updatePosition();
      }

      if (this.listRef && typeof this.props.activeOptionIndex !== 'undefined' && this.props.activeOptionIndex !== prevProps.activeOptionIndex) {
        this.listRef.scrollToItem(this.props.activeOptionIndex, 'auto');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.classList.remove('euiBody-hasPortalContent');
      window.removeEventListener('resize', this.updatePosition);
      window.removeEventListener('scroll', this.closeListOnScroll, {
        capture: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          dataTestSubj = _this$props2['data-test-subj'],
          activeOptionIndex = _this$props2.activeOptionIndex,
          areAllOptionsSelected = _this$props2.areAllOptionsSelected,
          customOptionText = _this$props2.customOptionText,
          fullWidth = _this$props2.fullWidth,
          getSelectedOptionForSearchValue = _this$props2.getSelectedOptionForSearchValue,
          isLoading = _this$props2.isLoading,
          listRef = _this$props2.listRef,
          matchingOptions = _this$props2.matchingOptions,
          onCloseList = _this$props2.onCloseList,
          onCreateOption = _this$props2.onCreateOption,
          onOptionClick = _this$props2.onOptionClick,
          onOptionEnterKey = _this$props2.onOptionEnterKey,
          onScroll = _this$props2.onScroll,
          optionRef = _this$props2.optionRef,
          options = _this$props2.options,
          _this$props2$position = _this$props2.position,
          position = _this$props2$position === void 0 ? 'bottom' : _this$props2$position,
          renderOption = _this$props2.renderOption,
          rootId = _this$props2.rootId,
          rowHeight = _this$props2.rowHeight,
          scrollToIndex = _this$props2.scrollToIndex,
          searchValue = _this$props2.searchValue,
          selectedOptions = _this$props2.selectedOptions,
          singleSelection = _this$props2.singleSelection,
          updatePosition = _this$props2.updatePosition,
          width = _this$props2.width,
          delimiter = _this$props2.delimiter,
          zIndex = _this$props2.zIndex,
          style = _this$props2.style,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, ["data-test-subj", "activeOptionIndex", "areAllOptionsSelected", "customOptionText", "fullWidth", "getSelectedOptionForSearchValue", "isLoading", "listRef", "matchingOptions", "onCloseList", "onCreateOption", "onOptionClick", "onOptionEnterKey", "onScroll", "optionRef", "options", "position", "renderOption", "rootId", "rowHeight", "scrollToIndex", "searchValue", "selectedOptions", "singleSelection", "updatePosition", "width", "delimiter", "zIndex", "style"]);
      var emptyStateContent;

      if (isLoading) {
        emptyStateContent = (0, _react2.jsx)(_flex.EuiFlexGroup, {
          gutterSize: "s",
          justifyContent: "center"
        }, (0, _react2.jsx)(_flex.EuiFlexItem, {
          grow: false
        }, (0, _react2.jsx)(_loading.EuiLoadingSpinner, {
          size: "m"
        })), (0, _react2.jsx)(_flex.EuiFlexItem, {
          grow: false
        }, (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiComboBoxOptionsList.loadingOptions",
          default: "Loading options"
        })));
      } else if (searchValue && matchingOptions && matchingOptions.length === 0) {
        if (onCreateOption && getSelectedOptionForSearchValue) {
          if (delimiter && searchValue.includes(delimiter)) {
            emptyStateContent = (0, _react2.jsx)("div", {
              className: "euiComboBoxOption__contentWrapper"
            }, (0, _react2.jsx)("p", {
              className: "euiComboBoxOption__emptyStateText"
            }, (0, _react2.jsx)(_i18n.EuiI18n, {
              token: "euiComboBoxOptionsList.delimiterMessage",
              default: "Add each item separated by {delimiter}",
              values: {
                delimiter: (0, _react2.jsx)("strong", null, delimiter)
              }
            })), hitEnterBadge);
          } else {
            var selectedOptionForValue = getSelectedOptionForSearchValue(searchValue, selectedOptions);

            if (selectedOptionForValue) {
              // Disallow duplicate custom options.
              emptyStateContent = (0, _react2.jsx)("p", null, (0, _react2.jsx)(_i18n.EuiI18n, {
                token: "euiComboBoxOptionsList.alreadyAdded",
                default: "{label} has already been added",
                values: {
                  label: (0, _react2.jsx)("strong", null, selectedOptionForValue.label)
                }
              }));
            } else {
              var highlightSearchValue = function highlightSearchValue(text, searchValue) {
                var reg = new RegExp(/(\{searchValue})/, 'gi');
                var parts = text.split(reg);
                return (0, _react2.jsx)("p", {
                  className: "euiComboBoxOption__emptyStateText"
                }, parts.map(function (part, idx) {
                  return part.match(reg) ? (0, _react2.jsx)("strong", {
                    key: idx
                  }, searchValue) : part;
                }));
              };

              emptyStateContent = (0, _react2.jsx)("div", {
                className: "euiComboBoxOption__contentWrapper"
              }, customOptionText ? highlightSearchValue(customOptionText, searchValue) : (0, _react2.jsx)("p", {
                className: "euiComboBoxOption__emptyStateText"
              }, (0, _react2.jsx)(_i18n.EuiI18n, {
                token: "euiComboBoxOptionsList.createCustomOption",
                default: "Add {searchValue} as a custom option",
                values: {
                  searchValue: (0, _react2.jsx)("strong", null, searchValue)
                }
              })), hitEnterBadge);
            }
          }
        } else {
          emptyStateContent = (0, _react2.jsx)("p", null, (0, _react2.jsx)(_i18n.EuiI18n, {
            token: "euiComboBoxOptionsList.noMatchingOptions",
            default: "{searchValue} doesn't match any options",
            values: {
              searchValue: (0, _react2.jsx)("strong", null, searchValue)
            }
          }));
        }
      } else if (!options.length) {
        emptyStateContent = (0, _react2.jsx)("p", null, (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiComboBoxOptionsList.noAvailableOptions",
          default: "There aren't any options available"
        }));
      } else if (areAllOptionsSelected) {
        emptyStateContent = (0, _react2.jsx)("p", null, (0, _react2.jsx)(_i18n.EuiI18n, {
          token: "euiComboBoxOptionsList.allOptionsSelected",
          default: "You've selected all available options"
        }));
      }

      var emptyState = emptyStateContent ? (0, _react2.jsx)(_text.EuiText, {
        size: "xs",
        className: "euiComboBoxOptionsList__empty"
      }, emptyStateContent) : undefined;
      var numVisibleOptions = matchingOptions.length < 7 ? matchingOptions.length : 7;
      var height = numVisibleOptions * (rowHeight + 1); // Add one for the border
      // bounded by max-height of euiComboBoxOptionsList__rowWrap

      var boundedHeight = height > 200 ? 200 : height;
      var optionsList = (0, _react2.jsx)(_reactWindow.FixedSizeList, {
        height: boundedHeight,
        onScroll: onScroll,
        itemCount: matchingOptions.length,
        itemSize: rowHeight,
        itemData: matchingOptions,
        ref: this.setListRef,
        innerRef: this.setListBoxRef,
        width: width
      }, this.ListRow);
      /**
       * Reusing the EuiPopover__panel classes to help with consistency/maintenance.
       * But this should really be converted to user the popover component.
       */

      var classes = (0, _classnames.default)('euiComboBoxOptionsList', 'euiPopover__panel', 'euiPopover__panel-isAttached', 'euiPopover__panel-noArrow', 'euiPopover__panel-isOpen', "euiPopover__panel--".concat(position));
      return (0, _react2.jsx)(_panel.EuiPanel, (0, _extends2.default)({
        paddingSize: "none",
        hasShadow: false,
        className: classes,
        panelRef: this.listRefCallback,
        "data-test-subj": "comboBoxOptionsList ".concat(dataTestSubj),
        style: _objectSpread(_objectSpread({}, style), {}, {
          zIndex: zIndex
        })
      }, rest), (0, _react2.jsx)("div", {
        className: "euiComboBoxOptionsList__rowWrap"
      }, emptyState || optionsList));
    }
  }]);
  return EuiComboBoxOptionsList;
}(_react.Component);

exports.EuiComboBoxOptionsList = EuiComboBoxOptionsList;
(0, _defineProperty2.default)(EuiComboBoxOptionsList, "defaultProps", {
  'data-test-subj': '',
  rowHeight: 29 // row height of default option renderer

});