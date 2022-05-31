"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiResizableContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _resize_observer = require("../observer/resize_observer");

var _context = require("./context");

var _resizable_button = require("./resizable_button");

var _resizable_panel = require("./resizable_panel");

var _helpers = require("./helpers");

var _react2 = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var containerDirections = {
  vertical: 'vertical',
  horizontal: 'horizontal'
};
var initialState = {
  isDragging: false,
  currentResizerPos: -1,
  prevPanelId: null,
  nextPanelId: null,
  containerSize: 1,
  panels: {},
  resizers: {}
};

var EuiResizableContainer = function EuiResizableContainer(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
      children = _ref.children,
      className = _ref.className,
      onPanelWidthChange = _ref.onPanelWidthChange,
      onToggleCollapsed = _ref.onToggleCollapsed,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["direction", "children", "className", "onPanelWidthChange", "onToggleCollapsed"]);
  var containerRef = (0, _react.useRef)(null);
  var isHorizontal = direction === containerDirections.horizontal;
  var classes = (0, _classnames.default)('euiResizableContainer', {
    'euiResizableContainer--vertical': !isHorizontal,
    'euiResizableContainer--horizontal': isHorizontal
  }, className);

  var _useContainerCallback = (0, _helpers.useContainerCallbacks)({
    initialState: _objectSpread(_objectSpread({}, initialState), {}, {
      isHorizontal: isHorizontal
    }),
    containerRef: containerRef,
    onPanelWidthChange: onPanelWidthChange
  }),
      _useContainerCallback2 = (0, _slicedToArray2.default)(_useContainerCallback, 2),
      actions = _useContainerCallback2[0],
      reducerState = _useContainerCallback2[1];

  var containerSize = (0, _resize_observer.useResizeObserver)(containerRef.current, isHorizontal ? 'width' : 'height');
  var initialize = (0, _react.useCallback)(function () {
    actions.initContainer(isHorizontal);
  }, [actions, isHorizontal]);
  (0, _react.useEffect)(function () {
    if (containerSize.width > 0 && containerSize.height > 0) {
      initialize();
    }
  }, [initialize, containerSize]);
  var onMouseDown = (0, _react.useCallback)(function (event) {
    var currentTarget = event.currentTarget;
    var prevPanel = currentTarget.previousElementSibling;
    var nextPanel = currentTarget.nextElementSibling;
    if (!prevPanel || !nextPanel) return;
    var prevPanelId = prevPanel.id;
    var nextPanelId = nextPanel.id;
    var position = (0, _helpers.getPosition)(event, isHorizontal);
    actions.dragStart({
      position: position,
      prevPanelId: prevPanelId,
      nextPanelId: nextPanelId
    });
  }, [actions, isHorizontal]);
  var onMouseMove = (0, _react.useCallback)(function (event) {
    if (!reducerState.prevPanelId || !reducerState.nextPanelId || !reducerState.isDragging) return;
    var position = (0, _helpers.getPosition)(event, isHorizontal);
    actions.dragMove({
      position: position,
      prevPanelId: reducerState.prevPanelId,
      nextPanelId: reducerState.nextPanelId
    });
  }, [actions, isHorizontal, reducerState.prevPanelId, reducerState.nextPanelId, reducerState.isDragging]);
  var onKeyDown = (0, _react.useCallback)(function (event) {
    var key = event.key,
        currentTarget = event.currentTarget;
    var shouldResizeHorizontalPanel = isHorizontal && (key === _services.keys.ARROW_LEFT || key === _services.keys.ARROW_RIGHT);
    var shouldResizeVerticalPanel = !isHorizontal && (key === _services.keys.ARROW_UP || key === _services.keys.ARROW_DOWN);
    var prevPanelId = currentTarget.previousElementSibling.id;
    var nextPanelId = currentTarget.nextElementSibling.id;
    var direction;

    if (key === _services.keys.ARROW_DOWN || key === _services.keys.ARROW_RIGHT) {
      direction = 'forward';
    }

    if (key === _services.keys.ARROW_UP || key === _services.keys.ARROW_LEFT) {
      direction = 'backward';
    }

    if (direction === 'forward' || direction === 'backward' && (shouldResizeHorizontalPanel || shouldResizeVerticalPanel) && prevPanelId && nextPanelId) {
      event.preventDefault();
      actions.keyMove({
        direction: direction,
        prevPanelId: prevPanelId,
        nextPanelId: nextPanelId
      });
    }
  }, [actions, isHorizontal]);
  var onMouseUp = (0, _react.useCallback)(function () {
    actions.reset();
  }, [actions]); // eslint-disable-next-line react-hooks/exhaustive-deps

  var EuiResizableButton = (0, _react.useCallback)((0, _resizable_button.euiResizableButtonWithControls)({
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown,
    onTouchStart: onMouseDown,
    onFocus: actions.resizerFocus,
    onBlur: actions.resizerBlur,
    isHorizontal: isHorizontal,
    registration: {
      register: actions.registerResizer,
      deregister: actions.deregisterResizer
    }
  }), [actions, isHorizontal]); // eslint-disable-next-line react-hooks/exhaustive-deps

  var EuiResizablePanel = (0, _react.useCallback)((0, _resizable_panel.euiResizablePanelWithControls)({
    isHorizontal: isHorizontal,
    registration: {
      register: actions.registerPanel,
      deregister: actions.deregisterPanel
    },
    onToggleCollapsed: onToggleCollapsed,
    onToggleCollapsedInternal: actions.togglePanel
  }), [actions, isHorizontal]);

  var render = function render() {
    var DEFAULT = 'custom';
    var content = children(EuiResizablePanel, EuiResizableButton, {
      togglePanel: actions.togglePanel
    });
    var modes = /*#__PURE__*/_react.default.isValidElement(content) ? content.props.children.map(function (el) {
      return (0, _resizable_panel.getModeType)(el.props.mode) || DEFAULT;
    }) : null;

    if (modes && (['collapsible', 'main'].every(function (i) {
      return modes.includes(i);
    }) || modes.every(function (i) {
      return i === DEFAULT;
    }))) {
      return content;
    } else {
      throw new Error('Both `collapsible` and `main` mode panels are required.');
    }
  };

  return (0, _react2.jsx)(_context.EuiResizableContainerContextProvider, {
    registry: {
      panels: reducerState.panels,
      resizers: reducerState.resizers
    }
  }, (0, _react2.jsx)("div", (0, _extends2.default)({
    className: classes,
    ref: containerRef,
    onMouseMove: reducerState.isDragging ? onMouseMove : undefined,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseUp,
    onTouchMove: onMouseMove,
    onTouchEnd: onMouseUp
  }, rest), render()));
};

exports.EuiResizableContainer = EuiResizableContainer;