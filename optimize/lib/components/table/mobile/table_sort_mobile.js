"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableSortMobile = void 0;

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

var _button_empty = require("../../button/button_empty");

var _popover = require("../../popover");

var _context_menu = require("../../context_menu");

var _i18n = require("../../i18n");

var _table_sort_mobile_item = require("./table_sort_mobile_item");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiTableSortMobile = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiTableSortMobile, _Component);

  var _super = _createSuper(EuiTableSortMobile);

  function EuiTableSortMobile() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiTableSortMobile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      isPopoverOpen: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onButtonClick", function () {
      _this.setState({
        isPopoverOpen: !_this.state.isPopoverOpen
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closePopover", function () {
      _this.setState({
        isPopoverOpen: false
      });
    });
    return _this;
  }

  (0, _createClass2.default)(EuiTableSortMobile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          anchorPosition = _this$props.anchorPosition,
          items = _this$props.items,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "anchorPosition", "items"]);
      var classes = (0, _classnames.default)('euiTableSortMobile', className);
      var mobileSortButton = (0, _react2.jsx)(_button_empty.EuiButtonEmpty, {
        iconType: "arrowDown",
        iconSide: "right",
        onClick: this.onButtonClick.bind(this),
        flush: "right",
        size: "xs"
      }, (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiTableSortMobile.sorting",
        default: "Sorting"
      }));
      var mobileSortPopover = (0, _react2.jsx)(_popover.EuiPopover, (0, _extends2.default)({
        button: mobileSortButton,
        isOpen: this.state.isPopoverOpen,
        closePopover: this.closePopover,
        anchorPosition: anchorPosition || 'downRight',
        panelPaddingSize: "none"
      }, rest), (0, _react2.jsx)(_context_menu.EuiContextMenuPanel, {
        style: {
          minWidth: 200
        },
        items: items && items.length ? items.map(function (item) {
          return (0, _react2.jsx)(_table_sort_mobile_item.EuiTableSortMobileItem, {
            key: item.key,
            onSort: item.onSort,
            isSorted: item.isSorted,
            isSortAscending: item.isSortAscending
          }, item.name);
        }) : undefined,
        watchedItemProps: ['isSorted', 'isSortAscending']
      }));
      return (0, _react2.jsx)("div", {
        className: classes
      }, mobileSortPopover);
    }
  }]);
  return EuiTableSortMobile;
}(_react.Component);

exports.EuiTableSortMobile = EuiTableSortMobile;