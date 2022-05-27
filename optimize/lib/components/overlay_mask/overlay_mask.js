"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiOverlayMask = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _react2 = require("@emotion/react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * NOTE: We can't test this component because Enzyme doesn't support rendering
 * into portals.
 */
var EuiOverlayMask = function EuiOverlayMask(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      _ref$headerZindexLoca = _ref.headerZindexLocation,
      headerZindexLocation = _ref$headerZindexLoca === void 0 ? 'above' : _ref$headerZindexLoca,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "onClick", "headerZindexLocation"]);
  var overlayMaskNode = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isPortalTargetReady = _useState2[0],
      setIsPortalTargetReady = _useState2[1];

  (0, _react.useEffect)(function () {
    document.body.classList.add('euiBody-hasOverlayMask');
    return function () {
      document.body.classList.remove('euiBody-hasOverlayMask');
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (typeof document !== 'undefined') {
      overlayMaskNode.current = document.createElement('div');
    }
  }, []);
  (0, _react.useEffect)(function () {
    var portalTarget = overlayMaskNode.current;

    if (portalTarget) {
      document.body.appendChild(portalTarget);
    }

    setIsPortalTargetReady(true);
    return function () {
      if (portalTarget) {
        document.body.removeChild(portalTarget);
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (!overlayMaskNode.current) return;
    (0, _common.keysOf)(rest).forEach(function (key) {
      if (typeof rest[key] !== 'string') {
        throw new Error("Unhandled property type. EuiOverlayMask property ".concat(key, " is not a string."));
      }

      if (overlayMaskNode.current) {
        overlayMaskNode.current.setAttribute(key, rest[key]);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  (0, _react.useEffect)(function () {
    if (!overlayMaskNode.current) return;
    overlayMaskNode.current.className = (0, _classnames.default)('euiOverlayMask', "euiOverlayMask--".concat(headerZindexLocation, "Header"), className);
  }, [className, headerZindexLocation]);
  (0, _react.useEffect)(function () {
    if (!overlayMaskNode.current || !onClick) return;
    var portalTarget = overlayMaskNode.current;

    var listener = function listener(e) {
      if (e.target === overlayMaskNode.current) {
        onClick();
      }
    };

    overlayMaskNode.current.addEventListener('click', listener);
    return function () {
      if (portalTarget && onClick) {
        portalTarget.removeEventListener('click', listener);
      }
    };
  }, [onClick]);
  return isPortalTargetReady ? (0, _react2.jsx)(_react.default.Fragment, null, /*#__PURE__*/(0, _reactDom.createPortal)(children, overlayMaskNode.current)) : null;
};

exports.EuiOverlayMask = EuiOverlayMask;