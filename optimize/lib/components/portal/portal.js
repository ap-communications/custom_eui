"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPortal = exports.INSERT_POSITIONS = exports.insertPositions = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _reactDom = require("react-dom");

var _common = require("../common");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var insertPositions = {
  after: 'afterend',
  before: 'beforebegin'
};
exports.insertPositions = insertPositions;
var INSERT_POSITIONS = (0, _common.keysOf)(insertPositions);
exports.INSERT_POSITIONS = INSERT_POSITIONS;

var EuiPortal = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiPortal, _Component);

  var _super = _createSuper(EuiPortal);

  function EuiPortal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EuiPortal);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "portalNode", void 0);
    var insert = _this.props.insert;
    _this.portalNode = document.createElement('div');

    if (insert == null) {
      // no insertion defined, append to body
      document.body.appendChild(_this.portalNode);
    } else {
      // inserting before or after an element
      var sibling = insert.sibling,
          position = insert.position;
      sibling.insertAdjacentElement(insertPositions[position], _this.portalNode);
    }

    return _this;
  }

  (0, _createClass2.default)(EuiPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePortalRef(this.portalNode);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.portalNode.parentNode) {
        this.portalNode.parentNode.removeChild(this.portalNode);
      }

      this.updatePortalRef(null);
    }
  }, {
    key: "updatePortalRef",
    value: function updatePortalRef(ref) {
      if (this.props.portalRef) {
        this.props.portalRef(ref);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _reactDom.createPortal)(this.props.children, this.portalNode);
    }
  }]);
  return EuiPortal;
}(_react.Component);

exports.EuiPortal = EuiPortal;