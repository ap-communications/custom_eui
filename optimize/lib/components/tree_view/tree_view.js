"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTreeView = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18n = require("../i18n");

var _icon = require("../icon");

var _accessibility = require("../accessibility");

var _text = require("../text");

var _services = require("../../services");

var _inner_text = require("../inner_text");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EuiTreeViewContext = /*#__PURE__*/(0, _react.createContext)('');

function hasAriaLabel(x) {
  return x.hasOwnProperty('aria-label');
}

function getTreeId(propId, contextId, idGenerator) {
  return propId !== null && propId !== void 0 ? propId : contextId === '' ? idGenerator() : contextId;
}

var displayToClassNameMap = {
  default: null,
  compressed: 'euiTreeView--compressed'
};

var EuiTreeView = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiTreeView, _Component);

  var _super = _createSuper(EuiTreeView);

  function EuiTreeView() {
    var _this;

    (0, _classCallCheck2.default)(this, EuiTreeView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "treeIdGenerator", (0, _services.htmlIdGenerator)('euiTreeView'));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isNested", !!_this.context);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      openItems: _this.props.expandByDefault ? _this.props.items.map(function (_ref) {
        var id = _ref.id,
            children = _ref.children;
        return children ? id : null;
      }).filter(function (x) {
        return x != null;
      }) : _this.props.items.map(function (_ref2) {
        var id = _ref2.id,
            children = _ref2.children,
            isExpanded = _ref2.isExpanded;
        return children && isExpanded ? id : null;
      }).filter(function (x) {
        return x != null;
      }),
      activeItem: '',
      treeID: getTreeId(_this.props.id, _this.context, _this.treeIdGenerator),
      expandChildNodes: _this.props.expandByDefault || false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "buttonRef", []);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setButtonRef", function (ref, index) {
      _this.buttonRef[index] = ref;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleNodeClick", function (node) {
      var ignoreCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var index = _this.state.openItems.indexOf(node.id);

      _this.setState({
        expandChildNodes: false
      });

      node.isExpanded = !node.isExpanded;

      if (!ignoreCallback && node.callback !== undefined) {
        node.callback();
      }

      if (_this.isNodeOpen(node)) {
        // if the node is part of openItems[] then remove it
        _this.setState({
          openItems: _this.state.openItems.filter(function (_, i) {
            return i !== index;
          })
        });
      } else {
        // if the node isn't part of openItems[] then add it
        _this.setState(function (prevState) {
          return {
            openItems: [].concat((0, _toConsumableArray2.default)(prevState.openItems), [node.id]),
            activeItem: node.id
          };
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isNodeOpen", function (node) {
      return _this.state.openItems.includes(node.id);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onKeyDown", function (event, node) {
      switch (event.key) {
        case _services.keys.ARROW_DOWN:
          {
            var nodeButtons = Array.from(document.querySelectorAll("[data-test-subj=\"euiTreeViewButton-".concat(_this.state.treeID, "\"]")));
            var currentIndex = nodeButtons.indexOf(event.currentTarget);

            if (currentIndex > -1) {
              var nextButton = nodeButtons[currentIndex + 1];

              if (nextButton) {
                event.preventDefault();
                event.stopPropagation();
                nextButton.focus();
              }
            }

            break;
          }

        case _services.keys.ARROW_UP:
          {
            var _nodeButtons = Array.from(document.querySelectorAll("[data-test-subj=\"euiTreeViewButton-".concat(_this.state.treeID, "\"]")));

            var _currentIndex = _nodeButtons.indexOf(event.currentTarget);

            if (_currentIndex > -1) {
              var prevButton = _nodeButtons[_currentIndex + -1];

              if (prevButton) {
                event.preventDefault();
                event.stopPropagation();
                prevButton.focus();
              }
            }

            break;
          }

        case _services.keys.ARROW_RIGHT:
          {
            if (!_this.isNodeOpen(node)) {
              event.preventDefault();
              event.stopPropagation();

              _this.handleNodeClick(node, true);
            }

            break;
          }

        case _services.keys.ARROW_LEFT:
          {
            if (_this.isNodeOpen(node)) {
              event.preventDefault();
              event.stopPropagation();

              _this.handleNodeClick(node, true);
            }
          }

        default:
          break;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChildrenKeydown", function (event, index) {
      if (event.key === _services.keys.ARROW_LEFT) {
        event.preventDefault();
        event.stopPropagation();

        _this.buttonRef[index].focus();
      }
    });
    return _this;
  }

  (0, _createClass2.default)(EuiTreeView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.id !== prevProps.id) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          treeID: getTreeId(this.props.id, this.context, this.treeIdGenerator)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          items = _this$props.items,
          _this$props$display = _this$props.display,
          display = _this$props$display === void 0 ? 'default' : _this$props$display,
          expandByDefault = _this$props.expandByDefault,
          showExpansionArrows = _this$props.showExpansionArrows,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "items", "display", "expandByDefault", "showExpansionArrows"]); // Computed classNames

      var classes = (0, _classnames.default)('euiTreeView', display ? displayToClassNameMap[display] : null, {
        'euiTreeView--withArrows': showExpansionArrows
      }, className);
      var instructionsId = "".concat(this.state.treeID, "--instruction");
      return (0, _react2.jsx)(EuiTreeViewContext.Provider, {
        value: this.state.treeID
      }, (0, _react2.jsx)(_text.EuiText, {
        size: display === 'compressed' ? 's' : 'm',
        className: "euiTreeView__wrapper"
      }, !this.isNested && (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiTreeView.listNavigationInstructions",
        default: "You can quickly navigate this list using arrow keys."
      }, function (listNavigationInstructions) {
        return (0, _react2.jsx)(_accessibility.EuiScreenReaderOnly, null, (0, _react2.jsx)("p", {
          id: instructionsId
        }, listNavigationInstructions));
      }), (0, _react2.jsx)("ul", (0, _extends2.default)({
        className: classes,
        id: !this.isNested ? this.state.treeID : undefined,
        "aria-describedby": !this.isNested ? instructionsId : undefined
      }, rest), items.map(function (node, index) {
        var buttonId = node.id;

        var wrappingId = _this2.treeIdGenerator(buttonId);

        return (0, _react2.jsx)(_inner_text.EuiInnerText, {
          key: node.id + index,
          fallback: typeof node.label === 'string' ? node.label : ''
        }, function (ref, innerText) {
          return (0, _react2.jsx)(_i18n.EuiI18n, {
            key: node.id + index,
            token: "euiTreeView.ariaLabel",
            default: "{nodeLabel} child of {ariaLabel}",
            values: {
              nodeLabel: innerText,
              ariaLabel: hasAriaLabel(rest) ? rest['aria-label'] : ''
            }
          }, function (ariaLabel) {
            var label = hasAriaLabel(rest) ? {
              'aria-label': ariaLabel
            } : {
              'aria-labelledby': "".concat(buttonId, " ").concat(rest['aria-labelledby'])
            };
            var nodeClasses = (0, _classnames.default)('euiTreeView__node', display ? displayToClassNameMap[display] : null, {
              'euiTreeView__node--expanded': _this2.isNodeOpen(node)
            });
            var nodeButtonClasses = (0, _classnames.default)('euiTreeView__nodeInner', showExpansionArrows && node.children ? 'euiTreeView__nodeInner--withArrows' : null, _this2.state.activeItem === node.id ? 'euiTreeView__node--active' : null, node.className ? node.className : null);
            return (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)("li", {
              className: nodeClasses
            }, (0, _react2.jsx)("button", {
              id: buttonId,
              "aria-controls": wrappingId,
              "aria-expanded": _this2.isNodeOpen(node),
              ref: function ref(_ref3) {
                return _this2.setButtonRef(_ref3, index);
              },
              "data-test-subj": "euiTreeViewButton-".concat(_this2.state.treeID),
              onKeyDown: function onKeyDown(event) {
                return _this2.onKeyDown(event, node);
              },
              onClick: function onClick() {
                return _this2.handleNodeClick(node);
              },
              className: nodeButtonClasses
            }, showExpansionArrows && node.children ? (0, _react2.jsx)(_icon.EuiIcon, {
              className: "euiTreeView__expansionArrow",
              size: display === 'compressed' ? 's' : 'm',
              type: _this2.isNodeOpen(node) ? 'arrowDown' : 'arrowRight'
            }) : null, node.icon && !node.useEmptyIcon ? (0, _react2.jsx)("span", {
              className: "euiTreeView__iconWrapper"
            }, _this2.isNodeOpen(node) && node.iconWhenExpanded ? node.iconWhenExpanded : node.icon) : null, node.useEmptyIcon && !node.icon ? (0, _react2.jsx)("span", {
              className: "euiTreeView__iconPlaceholder"
            }) : null, (0, _react2.jsx)("span", {
              ref: ref,
              className: "euiTreeView__nodeLabel"
            }, node.label)), (0, _react2.jsx)("div", {
              id: wrappingId,
              onKeyDown: function onKeyDown(event) {
                return _this2.onChildrenKeydown(event, index);
              }
            }, node.children && _this2.isNodeOpen(node) ? (0, _react2.jsx)(EuiTreeView, (0, _extends2.default)({
              items: node.children,
              display: display,
              showExpansionArrows: showExpansionArrows,
              expandByDefault: _this2.state.expandChildNodes
            }, label)) : null)));
          });
        });
      }))));
    }
  }]);
  return EuiTreeView;
}(_react.Component);

exports.EuiTreeView = EuiTreeView;
(0, _defineProperty2.default)(EuiTreeView, "contextType", EuiTreeViewContext);