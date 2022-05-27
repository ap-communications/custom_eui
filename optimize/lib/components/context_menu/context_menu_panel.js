"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiContextMenuPanel = exports.SIZES = void 0;

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

var _tabbable = _interopRequireDefault(require("tabbable"));

var _common = require("../common");

var _icon = require("../icon");

var _resize_observer = require("../observer/resize_observer");

var _services = require("../../services");

var _context_menu_item = require("./context_menu_item");

var _react2 = require("@emotion/react");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var titleSizeToClassNameMap = {
  s: 'euiContextMenuPanelTitle--small',
  m: null
};
var SIZES = (0, _common.keysOf)(titleSizeToClassNameMap);
exports.SIZES = SIZES;
var transitionDirectionAndTypeToClassNameMap = {
  next: {
    in: 'euiContextMenuPanel-txInLeft',
    out: 'euiContextMenuPanel-txOutLeft'
  },
  previous: {
    in: 'euiContextMenuPanel-txInRight',
    out: 'euiContextMenuPanel-txOutRight'
  }
};

var EuiContextMenuPanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EuiContextMenuPanel, _Component);

  var _super = _createSuper(EuiContextMenuPanel);

  function EuiContextMenuPanel(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EuiContextMenuPanel);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_isMounted", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "backButton", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "content", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "panel", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incrementFocusedItemIndex", function (amount) {
      var nextFocusedItemIndex;

      if (_this.state.focusedItemIndex === undefined) {
        // If this is the beginning of the user's keyboard navigation of the menu, then we'll focus
        // either the first or last item.
        nextFocusedItemIndex = amount < 0 ? _this.state.menuItems.length - 1 : 0;
      } else {
        nextFocusedItemIndex = _this.state.focusedItemIndex + amount;

        if (nextFocusedItemIndex < 0) {
          nextFocusedItemIndex = _this.state.menuItems.length - 1;
        } else if (nextFocusedItemIndex === _this.state.menuItems.length) {
          nextFocusedItemIndex = 0;
        }
      }

      _this.setState({
        focusedItemIndex: nextFocusedItemIndex
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onKeyDown", function (event) {
      // If this panel contains items you can use the left arrow key to go back at any time.
      // But if it doesn't contain items, then you have to focus on the back button specifically,
      // since there could be content inside the panel which requires use of the left arrow key,
      // e.g. text inputs.
      var _this$props = _this.props,
          items = _this$props.items,
          showPreviousPanel = _this$props.showPreviousPanel;

      if (items && items.length || document.activeElement === _this.backButton || document.activeElement === _this.panel) {
        if (event.key === _services.cascadingMenuKeys.ARROW_LEFT) {
          if (showPreviousPanel) {
            event.preventDefault();
            event.stopPropagation();
            showPreviousPanel();

            if (_this.props.onUseKeyboardToNavigate) {
              _this.props.onUseKeyboardToNavigate();
            }
          }
        }
      }

      if (_this.props.items && _this.props.items.length) {
        switch (event.key) {
          case _services.cascadingMenuKeys.TAB:
            // We need to sync up with the user if s/he is tabbing through the items.
            var focusedItemIndex = _this.state.menuItems.indexOf(document.activeElement);

            _this.setState({
              focusedItemIndex: focusedItemIndex >= 0 && focusedItemIndex < _this.state.menuItems.length ? focusedItemIndex : undefined
            });

            break;

          case _services.cascadingMenuKeys.ARROW_UP:
            event.preventDefault();

            _this.incrementFocusedItemIndex(-1);

            if (_this.props.onUseKeyboardToNavigate) {
              _this.props.onUseKeyboardToNavigate();
            }

            break;

          case _services.cascadingMenuKeys.ARROW_DOWN:
            event.preventDefault();

            _this.incrementFocusedItemIndex(1);

            if (_this.props.onUseKeyboardToNavigate) {
              _this.props.onUseKeyboardToNavigate();
            }

            break;

          case _services.cascadingMenuKeys.ARROW_RIGHT:
            if (_this.props.showNextPanel) {
              event.preventDefault();

              _this.props.showNextPanel(_this.state.focusedItemIndex);

              if (_this.props.onUseKeyboardToNavigate) {
                _this.props.onUseKeyboardToNavigate();
              }
            }

            break;

          default:
            break;
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTransitionComplete", function () {
      if (_this.props.onTransitionComplete) {
        _this.props.onTransitionComplete();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "menuItemRef", function (index, node) {
      // There's a weird bug where if you navigate to a panel without items, then this callback
      // is still invoked, so we have to do a truthiness check.
      if (node) {
        // Store all menu items.
        _this.state.menuItems[index] = node;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "panelRef", function (node) {
      _this.panel = node;

      _this.updateHeight();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "contentRef", function (node) {
      _this.content = node;
    });
    _this.state = {
      prevProps: {
        items: _this.props.items
      },
      menuItems: [],
      focusedItemIndex: props.initialFocusedItemIndex,
      currentHeight: undefined
    };
    return _this;
  }

  (0, _createClass2.default)(EuiContextMenuPanel, [{
    key: "updateFocus",
    value: function updateFocus() {
      var _this2 = this;

      // Give positioning time to render before focus is applied. Otherwise page jumps.
      requestAnimationFrame(function () {
        if (!_this2._isMounted) {
          return;
        } // If this panel has lost focus, then none of its content should be focused.


        if (!_this2.props.hasFocus) {
          if (_this2.panel && _this2.panel.contains(document.activeElement)) {
            document.activeElement.blur();
          }

          return;
        } // Setting focus while transitioning causes the animation to glitch, so we have to wait
        // until it's finished before we focus anything.


        if (_this2.props.transitionType) {
          return;
        } // `focusedItemIndex={-1}` specifies that the panel itself should be focused.
        // This should only be used when the panel does not have `item`s
        // and preventing autofocus is desired, which is an uncommon case.


        if (_this2.panel && _this2.state.focusedItemIndex === -1) {
          _this2.panel.focus();

          return;
        } // If there aren't any items then this is probably a form or something.


        if (!_this2.state.menuItems.length) {
          // If we've already focused on something inside the panel, everything's fine.
          if (_this2.panel && _this2.panel.contains(document.activeElement)) {
            return;
          } // Otherwise let's focus the first tabbable item and expedite input from the user.


          if (_this2.content) {
            var tabbableItems = (0, _tabbable.default)(_this2.content);

            if (tabbableItems.length) {
              tabbableItems[0].focus();
            }
          }

          return;
        } // If an item is focused, focus it.


        if (_this2.state.focusedItemIndex !== undefined) {
          _this2.state.menuItems[_this2.state.focusedItemIndex].focus();

          return;
        } // Focus on the panel as a last resort.


        if (_this2.panel && !_this2.panel.contains(document.activeElement)) {
          _this2.panel.focus();
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateFocus();
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "getWatchedPropsForItems",
    value: function getWatchedPropsForItems(items) {
      // This lets us compare prevProps and nextProps among items so we can re-render if our items
      // have changed.
      var watchedItemProps = this.props.watchedItemProps; // Create fingerprint of all item's watched properties

      if (items.length && watchedItemProps && watchedItemProps.length) {
        return JSON.stringify(items.map(function (item) {
          // Create object of item properties and values
          var props = {
            key: item.key
          };
          watchedItemProps.forEach(function (prop) {
            props[prop] = item.props[prop];
          });
          return props;
        }));
      }

      return null;
    }
  }, {
    key: "didItemsChange",
    value: function didItemsChange(prevItems, nextItems) {
      // If the count of items has changed then update
      if (prevItems.length !== nextItems.length) {
        return true;
      } // Check if any watched item properties changed by quick string comparison


      if (this.getWatchedPropsForItems(nextItems) !== this.getWatchedPropsForItems(prevItems)) {
        return true;
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // Prevent calling `this.updateFocus()` below if we don't have to.
      if (nextProps.hasFocus !== this.props.hasFocus) {
        return true;
      }

      if (nextProps.transitionType !== this.props.transitionType) {
        return true;
      }

      if (nextState.focusedItemIndex !== this.state.focusedItemIndex) {
        return true;
      } // **
      // this component should have either items or children,
      // if there are items we can determine via `watchedItemProps` if we should update
      // if there are children we can't know if they have changed so return true
      // **


      if (this.props.items && this.props.items.length > 0 || nextProps.items && nextProps.items.length > 0) {
        if (this.didItemsChange(this.props.items, nextProps.items)) {
          return true;
        }
      } // it's not possible (in any good way) to know if `children` has changed, assume they might have


      if (this.props.children != null) {
        return true;
      }

      return false;
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      var currentHeight = this.panel ? this.panel.clientHeight : 0;

      if (this.state.height !== currentHeight) {
        if (this.props.onHeightChange) {
          this.props.onHeightChange(currentHeight);
          this.setState({
            height: currentHeight
          });
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateFocus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          onClose = _this$props2.onClose,
          title = _this$props2.title,
          onHeightChange = _this$props2.onHeightChange,
          transitionType = _this$props2.transitionType,
          transitionDirection = _this$props2.transitionDirection,
          onTransitionComplete = _this$props2.onTransitionComplete,
          onUseKeyboardToNavigate = _this$props2.onUseKeyboardToNavigate,
          hasFocus = _this$props2.hasFocus,
          items = _this$props2.items,
          watchedItemProps = _this$props2.watchedItemProps,
          initialFocusedItemIndex = _this$props2.initialFocusedItemIndex,
          showNextPanel = _this$props2.showNextPanel,
          showPreviousPanel = _this$props2.showPreviousPanel,
          size = _this$props2.size,
          rest = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "className", "onClose", "title", "onHeightChange", "transitionType", "transitionDirection", "onTransitionComplete", "onUseKeyboardToNavigate", "hasFocus", "items", "watchedItemProps", "initialFocusedItemIndex", "showNextPanel", "showPreviousPanel", "size"]);
      var panelTitle;

      if (title) {
        var titleClasses = (0, _classnames.default)('euiContextMenuPanelTitle', size && titleSizeToClassNameMap[size]);

        if (Boolean(onClose)) {
          panelTitle = (0, _react2.jsx)("button", {
            className: titleClasses,
            type: "button",
            onClick: onClose,
            ref: function ref(node) {
              _this3.backButton = node;
            },
            "data-test-subj": "contextMenuPanelTitleButton"
          }, (0, _react2.jsx)("span", {
            className: "euiContextMenu__itemLayout"
          }, (0, _react2.jsx)(_icon.EuiIcon, {
            type: "arrowLeft",
            size: "m",
            className: "euiContextMenu__icon"
          }), (0, _react2.jsx)("span", {
            className: "euiContextMenu__text"
          }, title)));
        } else {
          panelTitle = (0, _react2.jsx)("div", {
            className: titleClasses
          }, (0, _react2.jsx)("span", {
            className: "euiContextMenu__itemLayout"
          }, title));
        }
      }

      var classes = (0, _classnames.default)('euiContextMenuPanel', className, transitionDirection && transitionType && transitionDirectionAndTypeToClassNameMap[transitionDirection] ? transitionDirectionAndTypeToClassNameMap[transitionDirection][transitionType] : undefined);
      var content = items && items.length ? items.map(function (MenuItem, index) {
        var cloneProps = {
          buttonRef: function buttonRef(node) {
            return _this3.menuItemRef(index, node);
          }
        };

        if (size) {
          cloneProps.size = size;
        }

        return MenuItem.type === _context_menu_item.EuiContextMenuItem ? /*#__PURE__*/(0, _react.cloneElement)(MenuItem, cloneProps) : MenuItem;
      }) : children;
      return (0, _react2.jsx)("div", (0, _extends2.default)({
        ref: this.panelRef,
        className: classes,
        onKeyDown: this.onKeyDown,
        tabIndex: -1,
        onAnimationEnd: this.onTransitionComplete
      }, rest), panelTitle, (0, _react2.jsx)("div", {
        ref: this.contentRef
      }, (0, _react2.jsx)(_resize_observer.EuiResizeObserver, {
        onResize: function onResize() {
          return _this3.updateHeight();
        }
      }, function (resizeRef) {
        return (0, _react2.jsx)("div", {
          ref: resizeRef
        }, content);
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var needsUpdate = false;
      var nextState = {}; // Clear refs to menuItems if we're getting new ones.

      if (nextProps.items !== prevState.prevProps.items) {
        needsUpdate = true;
        nextState.menuItems = [];
        nextState.prevProps = {
          items: nextProps.items
        };
      }

      if (needsUpdate) {
        return nextState;
      }

      return null;
    }
  }]);
  return EuiContextMenuPanel;
}(_react.Component);

exports.EuiContextMenuPanel = EuiContextMenuPanel;
(0, _defineProperty2.default)(EuiContextMenuPanel, "defaultProps", {
  hasFocus: true,
  items: []
});