"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInnerText = useInnerText;
exports.EuiInnerText = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function useInnerText(innerTextFallback) {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      ref = _useState2[0],
      setRef = _useState2[1];

  var _useState3 = (0, _react.useState)(innerTextFallback),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      innerText = _useState4[0],
      setInnerText = _useState4[1];

  var updateInnerText = (0, _react.useCallback)(function (node) {
    if (!node) return;
    setInnerText( // Check for `innerText` implementation rather than a simple OR check
    // because in real cases the result of `innerText` could correctly be `null`
    // while the result of `textContent` could correctly be non-`null` due to
    // differing reliance on browser layout calculations.
    // We prefer the result of `innerText`, if available.
    'innerText' in node ? node.innerText : node.textContent || innerTextFallback);
  }, [innerTextFallback]);
  (0, _react.useEffect)(function () {
    var observer = new MutationObserver(function (mutationsList) {
      if (mutationsList.length) updateInnerText(ref);
    });

    if (ref) {
      updateInnerText(ref);
      observer.observe(ref, {
        characterData: true,
        subtree: true,
        childList: true
      });
    }

    return function () {
      observer.disconnect();
    };
  }, [ref, updateInnerText]);
  return [setRef, innerText];
}

var EuiInnerText = function EuiInnerText(_ref) {
  var children = _ref.children,
      fallback = _ref.fallback;

  var _useInnerText = useInnerText(fallback),
      _useInnerText2 = (0, _slicedToArray2.default)(_useInnerText, 2),
      ref = _useInnerText2[0],
      innerText = _useInnerText2[1];

  return children(ref, innerText);
};

exports.EuiInnerText = EuiInnerText;