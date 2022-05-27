"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldValueToggleGroupFilter = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _filter_group = require("../../filter_group");

var _query = require("../query");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FieldValueToggleGroupFilter = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(FieldValueToggleGroupFilter, _Component);

  var _super = _createSuper(FieldValueToggleGroupFilter);

  function FieldValueToggleGroupFilter() {
    (0, _classCallCheck2.default)(this, FieldValueToggleGroupFilter);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FieldValueToggleGroupFilter, [{
    key: "resolveDisplay",
    value: function resolveDisplay(config, query, item) {
      var clause = query.getSimpleFieldClause(config.field, item.value);

      if (clause) {
        if (_query.Query.isMust(clause)) {
          return {
            active: true,
            name: item.name
          };
        }

        return {
          active: true,
          name: item.negatedName ? item.negatedName : "Not ".concat(item.name)
        };
      }

      return {
        active: false,
        name: item.name
      };
    }
  }, {
    key: "valueChanged",
    value: function valueChanged(item, active) {
      var field = this.props.config.field;
      var value = item.value,
          operator = item.operator;
      var query = active ? this.props.query.removeSimpleFieldClauses(field) : this.props.query.removeSimpleFieldClauses(field).addSimpleFieldValue(field, value, true, operator);
      this.props.onChange(query);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          config = _this$props.config,
          query = _this$props.query;
      return config.items.map(function (item, index) {
        var _this$resolveDisplay = _this.resolveDisplay(config, query, item),
            active = _this$resolveDisplay.active,
            name = _this$resolveDisplay.name;

        var onClick = function onClick() {
          _this.valueChanged(item, active);
        };

        var key = "field_value_toggle_filter_item_".concat(index);
        var isLastItem = index === config.items.length - 1;
        return (0, _react2.jsx)(_filter_group.EuiFilterButton, {
          key: key,
          onClick: onClick,
          hasActiveFilters: active,
          noDivider: !isLastItem,
          "aria-pressed": !!active,
          withNext: !isLastItem
        }, name);
      });
    }
  }]);
  return FieldValueToggleGroupFilter;
}(_react.Component);

exports.FieldValueToggleGroupFilter = FieldValueToggleGroupFilter;