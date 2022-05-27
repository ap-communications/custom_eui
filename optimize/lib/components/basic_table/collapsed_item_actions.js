"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsedItemActions = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _predicate = require("../../services/predicate");

var _context_menu = require("../context_menu");

var _popover = require("../popover");

var _button = require("../button");

var _tool_tip = require("../tool_tip");

var _i18n = require("../i18n");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function actionIsCustomItemAction(action) {
  return action.hasOwnProperty('render');
}

var CollapsedItemActions = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(CollapsedItemActions, _Component);

  var _super = _createSuper(CollapsedItemActions);

  function CollapsedItemActions() {
    var _this;

    (0, _classCallCheck2.default)(this, CollapsedItemActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "popoverDiv", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      popoverOpen: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "togglePopover", function () {
      _this.setState(function (prevState) {
        return {
          popoverOpen: !prevState.popoverOpen
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closePopover", function () {
      _this.setState({
        popoverOpen: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onPopoverBlur", function () {
      // you must be asking... WTF? I know... but this timeout is
      // required to make sure we process the onBlur events after the initial
      // event cycle. Reference:
      // https://medium.com/@jessebeach/dealing-with-focus-and-blur-in-a-composite-widget-in-react-90d3c3b49a9b
      window.requestAnimationFrame(function () {
        if (!_this.popoverDiv.contains(document.activeElement) && _this.props.onBlur) {
          _this.props.onBlur();
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "registerPopoverDiv", function (popoverDiv) {
      if (!_this.popoverDiv) {
        _this.popoverDiv = popoverDiv;

        _this.popoverDiv.addEventListener('focusout', _this.onPopoverBlur);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClickItem", function (onClickAction) {
      _this.closePopover();

      if (onClickAction) {
        onClickAction();
      }
    });
    return _this;
  }

  (0, _createClass2.default)(CollapsedItemActions, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.popoverDiv) {
        this.popoverDiv.removeEventListener('focusout', this.onPopoverBlur);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          actions = _this$props.actions,
          itemId = _this$props.itemId,
          item = _this$props.item,
          actionEnabled = _this$props.actionEnabled,
          onFocus = _this$props.onFocus,
          className = _this$props.className;
      var isOpen = this.state.popoverOpen;
      var allDisabled = true;
      var controls = actions.reduce(function (controls, action, index) {
        var key = "action_".concat(itemId, "_").concat(index);
        var available = action.available ? action.available(item) : true;

        if (!available) {
          return controls;
        }

        var enabled = actionEnabled(action);
        allDisabled = allDisabled && !enabled;

        if (actionIsCustomItemAction(action)) {
          var customAction = action;
          var actionControl = customAction.render(item, enabled);
          var actionControlOnClick = actionControl && actionControl.props && actionControl.props.onClick;
          controls.push((0, _react2.jsx)(_context_menu.EuiContextMenuItem, {
            key: key,
            onClick: function onClick() {
              return _this2.onClickItem(actionControlOnClick ? function () {
                return actionControlOnClick(item);
              } : undefined);
            }
          }, actionControl));
        } else {
          var _onClick = action.onClick,
              name = action.name,
              href = action.href,
              target = action.target,
              dataTestSubj = action['data-test-subj'];
          var buttonIcon = action.icon;
          var icon;

          if (buttonIcon) {
            icon = (0, _predicate.isString)(buttonIcon) ? buttonIcon : buttonIcon(item);
          }

          var buttonContent = typeof name === 'function' ? name(item) : name;
          controls.push((0, _react2.jsx)(_context_menu.EuiContextMenuItem, {
            key: key,
            disabled: !enabled,
            href: href,
            target: target,
            icon: icon,
            "data-test-subj": dataTestSubj,
            onClick: function onClick() {
              return _this2.onClickItem(_onClick ? function () {
                return _onClick(item);
              } : undefined);
            }
          }, buttonContent));
        }

        return controls;
      }, []);
      var popoverButton = (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiCollapsedItemActions.allActions",
        default: "All actions"
      }, function (allActions) {
        return (0, _react2.jsx)(_button.EuiButtonIcon, {
          className: className,
          "aria-label": allActions,
          iconType: "boxesHorizontal",
          color: "text",
          isDisabled: allDisabled,
          onClick: _this2.togglePopover.bind(_this2),
          onFocus: onFocus,
          "data-test-subj": "euiCollapsedItemActionsButton"
        });
      });
      var withTooltip = !allDisabled && (0, _react2.jsx)(_i18n.EuiI18n, {
        token: "euiCollapsedItemActions.allActions",
        default: "All actions"
      }, function (allActions) {
        return (0, _react2.jsx)(_tool_tip.EuiToolTip, {
          content: allActions,
          delay: "long"
        }, popoverButton);
      });
      return (0, _react2.jsx)(_popover.EuiPopover, {
        className: className,
        popoverRef: this.registerPopoverDiv,
        id: "".concat(itemId, "-actions"),
        isOpen: isOpen,
        button: withTooltip || popoverButton,
        closePopover: this.closePopover,
        panelPaddingSize: "none",
        anchorPosition: "leftCenter"
      }, (0, _react2.jsx)(_context_menu.EuiContextMenuPanel, {
        items: controls
      }));
    }
  }]);
  return CollapsedItemActions;
}(_react.Component);

exports.CollapsedItemActions = CollapsedItemActions;