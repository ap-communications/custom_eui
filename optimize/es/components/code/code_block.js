import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _typeof from "@babel/runtime/helpers/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import React, { forwardRef, useEffect, useMemo, useState, useCallback } from 'react';
import classNames from 'classnames';
import { FixedSizeList } from 'react-window';
import { keys, useCombinedRefs } from '../../services';
import { EuiAutoSizer } from '../auto_sizer';
import { EuiButtonIcon } from '../button';
import { keysOf } from '../common';
import { EuiCopy } from '../copy';
import { EuiFocusTrap } from '../focus_trap';
import { EuiI18n } from '../i18n';
import { useInnerText } from '../inner_text';
import { useMutationObserver } from '../observer/mutation_observer';
import { useResizeObserver } from '../observer/resize_observer';
import { EuiOverlayMask } from '../overlay_mask';
import { DEFAULT_LANGUAGE, checkSupportedLanguage, getHtmlContent, nodeToHtml, highlightByLine } from './utils'; // Based on observed line height for non-virtualized code blocks

import { jsx as ___EmotionJSX } from "@emotion/react";
var fontSizeToRowHeightMap = {
  s: 18,
  m: 21,
  l: 24
};
var fontSizeToClassNameMap = {
  s: 'euiCodeBlock--fontSmall',
  m: 'euiCodeBlock--fontMedium',
  l: 'euiCodeBlock--fontLarge'
};
export var FONT_SIZES = keysOf(fontSizeToClassNameMap);
var paddingSizeToClassNameMap = {
  none: '',
  s: 'euiCodeBlock--paddingSmall',
  m: 'euiCodeBlock--paddingMedium',
  l: 'euiCodeBlock--paddingLarge'
};
export var PADDING_SIZES = keysOf(paddingSizeToClassNameMap); // This exclusive union enforces specific props based on isVirtualized

export var EuiCodeBlock = function EuiCodeBlock(_ref) {
  var _ref$language = _ref.language,
      _language = _ref$language === void 0 ? DEFAULT_LANGUAGE : _ref$language,
      _ref$transparentBackg = _ref.transparentBackground,
      transparentBackground = _ref$transparentBackg === void 0 ? false : _ref$transparentBackg,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'l' : _ref$paddingSize,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 's' : _ref$fontSize,
      _ref$isCopyable = _ref.isCopyable,
      isCopyable = _ref$isCopyable === void 0 ? false : _ref$isCopyable,
      _ref$whiteSpace = _ref.whiteSpace,
      whiteSpace = _ref$whiteSpace === void 0 ? 'pre-wrap' : _ref$whiteSpace,
      children = _ref.children,
      className = _ref.className,
      overflowHeight = _ref.overflowHeight,
      _isVirtualized = _ref.isVirtualized,
      _ref$lineNumbers = _ref.lineNumbers,
      lineNumbers = _ref$lineNumbers === void 0 ? false : _ref$lineNumbers,
      rest = _objectWithoutProperties(_ref, ["language", "transparentBackground", "paddingSize", "fontSize", "isCopyable", "whiteSpace", "children", "className", "overflowHeight", "isVirtualized", "lineNumbers"]);

  var language = useMemo(function () {
    return checkSupportedLanguage(_language);
  }, [_language]);
  var lineNumbersConfig = useMemo(function () {
    var config = _typeof(lineNumbers) === 'object' ? lineNumbers : {};
    return lineNumbers ? _objectSpread({
      start: 1,
      show: true
    }, config) : {
      start: 1,
      show: false
    };
  }, [lineNumbers]); // Used by `FixedSizeList` when `isVirtualized=true` or `children` is parsable

  var data = useMemo(function () {
    if (typeof children !== 'string') {
      return [];
    }

    return highlightByLine(children, language, lineNumbersConfig);
  }, [children, language, lineNumbersConfig]); // Used by `pre` when `isVirtualized=false` or `children` is not parsable

  var content = useMemo(function () {
    return getHtmlContent(data, children);
  }, [data, children]);
  var isVirtualized = useMemo(function () {
    return !!(_isVirtualized && Array.isArray(data));
  }, [_isVirtualized, data]);

  var _useCopy = useCopy({
    isCopyable: isCopyable,
    isVirtualized: isVirtualized,
    children: children
  }),
      innerTextRef = _useCopy.innerTextRef,
      showCopyButton = _useCopy.showCopyButton,
      CopyButton = _useCopy.CopyButton;

  var _useOverflowDetection = useOverflowDetection(),
      setWrapperRef = _useOverflowDetection.setWrapperRef,
      tabIndex = _useOverflowDetection.tabIndex;

  var combinedRef = useCombinedRefs([innerTextRef, setWrapperRef]);

  var _useFullScreen = useFullScreen({
    overflowHeight: overflowHeight
  }),
      showFullScreenButton = _useFullScreen.showFullScreenButton,
      onKeyDown = _useFullScreen.onKeyDown,
      FullScreenButton = _useFullScreen.FullScreenButton,
      FullScreenDisplay = _useFullScreen.FullScreenDisplay; // Classes used in both full-screen and non-full-screen mode


  var wrapperClasses = classNames(className, 'euiCodeBlock', {
    'euiCodeBlock--hasControl': showCopyButton || showFullScreenButton,
    'euiCodeBlock--hasBothControls': showCopyButton && showFullScreenButton,
    'euiCodeBlock--hasLineNumbers': lineNumbersConfig.show
  }); // Classes used in non-full-screen mode only

  var classes = classNames(wrapperClasses, fontSizeToClassNameMap[fontSize], paddingSizeToClassNameMap[paddingSize], {
    'euiCodeBlock--transparentBackground': transparentBackground
  });
  var codeProps = useMemo(function () {
    return _objectSpread({
      className: 'euiCodeBlock__code',
      'data-code-language': language
    }, rest);
  }, [language, rest]);
  var preClasses = classNames('euiCodeBlock__pre', {
    'euiCodeBlock__pre--whiteSpacePre': whiteSpace === 'pre' || isVirtualized,
    'euiCodeBlock__pre--whiteSpacePreWrap': whiteSpace === 'pre-wrap' && !isVirtualized,
    'euiCodeBlock__pre--isVirtualized': isVirtualized
  });
  var preFullscreenProps = useMemo(function () {
    return {
      className: preClasses,
      tabIndex: 0,
      onKeyDown: onKeyDown
    };
  }, [preClasses, onKeyDown]);
  var optionalStyles = {};

  if (overflowHeight) {
    var property = typeof overflowHeight === 'string' ? 'height' : 'maxHeight';
    optionalStyles[property] = overflowHeight;
  }

  var wrapperProps = {
    className: classes,
    style: optionalStyles
  };
  var codeBlockControls;

  if (showCopyButton || showFullScreenButton) {
    codeBlockControls = ___EmotionJSX("div", {
      className: "euiCodeBlock__controls"
    }, ___EmotionJSX(FullScreenButton, null), ___EmotionJSX(CopyButton, null));
  }

  return ___EmotionJSX("div", wrapperProps, isVirtualized ? ___EmotionJSX(VirtualizedCodeBlock, {
    data: data,
    rowHeight: fontSizeToRowHeightMap[fontSize],
    overflowHeight: overflowHeight,
    preProps: preFullscreenProps // Note: the virtualized codeblock always sets a tabIndex of 0
    ,
    codeProps: codeProps
  }) : ___EmotionJSX("pre", {
    ref: combinedRef,
    style: optionalStyles,
    className: preClasses,
    tabIndex: tabIndex
  }, ___EmotionJSX("code", codeProps, content)), codeBlockControls, ___EmotionJSX(FullScreenDisplay, {
    className: wrapperClasses
  }, isVirtualized ? ___EmotionJSX(VirtualizedCodeBlock, {
    data: data,
    rowHeight: fontSizeToRowHeightMap.l,
    preProps: preFullscreenProps,
    codeProps: codeProps
  }) : ___EmotionJSX("pre", preFullscreenProps, ___EmotionJSX("code", codeProps, content)), codeBlockControls));
};
/**
 * Overflow logic
 *
 * Detects whether the code block overflows and returns a tabIndex of 0 if so,
 * which allows keyboard users to use the up/down arrow keys to scroll through
 * the container.
 */

var useOverflowDetection = function useOverflowDetection() {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      wrapperRef = _useState2[0],
      setWrapperRef = _useState2[1];

  var _useState3 = useState(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      tabIndex = _useState4[0],
      setTabIndex = _useState4[1];

  var _useResizeObserver = useResizeObserver(wrapperRef),
      width = _useResizeObserver.width,
      height = _useResizeObserver.height;

  var doesOverflow = function doesOverflow() {
    if (!wrapperRef) return;
    var clientWidth = wrapperRef.clientWidth,
        clientHeight = wrapperRef.clientHeight,
        scrollWidth = wrapperRef.scrollWidth,
        scrollHeight = wrapperRef.scrollHeight;
    var doesOverflow = scrollHeight > clientHeight || scrollWidth > clientWidth;
    setTabIndex(doesOverflow ? 0 : -1);
  };

  useMutationObserver(wrapperRef, doesOverflow, {
    subtree: true,
    childList: true
  });
  useEffect(doesOverflow, [width, height, wrapperRef]);
  return {
    setWrapperRef: setWrapperRef,
    tabIndex: tabIndex
  };
};
/**
 * Copy logic
 */


var useCopy = function useCopy(_ref2) {
  var isCopyable = _ref2.isCopyable,
      isVirtualized = _ref2.isVirtualized,
      children = _ref2.children;

  var _useInnerText = useInnerText(''),
      _useInnerText2 = _slicedToArray(_useInnerText, 2),
      innerTextRef = _useInnerText2[0],
      _innerText = _useInnerText2[1];

  var innerText = useMemo(function () {
    return (_innerText === null || _innerText === void 0 ? void 0 : _innerText.replace(/[\r\n?]{2}|\n\n/g, '\n')) || '';
  }, [_innerText]);
  var textToCopy = isVirtualized ? "".concat(children) : innerText; // Virtualized code blocks do not have inner text

  var showCopyButton = isCopyable && textToCopy;

  var CopyButton = function CopyButton() {
    if (!showCopyButton) return null;
    return ___EmotionJSX("div", {
      className: "euiCodeBlock__copyButton"
    }, ___EmotionJSX(EuiI18n, {
      token: "euiCodeBlock.copyButton",
      default: "Copy"
    }, function (copyButton) {
      return ___EmotionJSX(EuiCopy, {
        textToCopy: textToCopy
      }, function (copy) {
        return ___EmotionJSX(EuiButtonIcon, {
          onClick: copy,
          iconType: "copyClipboard",
          color: "text",
          "aria-label": copyButton
        });
      });
    }));
  };

  return {
    innerTextRef: innerTextRef,
    showCopyButton: showCopyButton,
    CopyButton: CopyButton
  };
};
/**
 * Fullscreen logic
 */


var useFullScreen = function useFullScreen(_ref3) {
  var overflowHeight = _ref3.overflowHeight;

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isFullScreen = _useState6[0],
      setIsFullScreen = _useState6[1];

  var toggleFullScreen = function toggleFullScreen() {
    setIsFullScreen(!isFullScreen);
  };

  var onKeyDown = useCallback(function (event) {
    if (event.key === keys.ESCAPE) {
      event.preventDefault();
      event.stopPropagation();
      setIsFullScreen(false);
    }
  }, []);
  var showFullScreenButton = !!overflowHeight;

  var FullScreenButton = function FullScreenButton() {
    if (!showFullScreenButton) return null;
    return ___EmotionJSX(EuiI18n, {
      tokens: ['euiCodeBlock.fullscreenCollapse', 'euiCodeBlock.fullscreenExpand'],
      defaults: ['Collapse', 'Expand']
    }, function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          fullscreenCollapse = _ref5[0],
          fullscreenExpand = _ref5[1];

      return ___EmotionJSX(EuiButtonIcon, {
        className: "euiCodeBlock__fullScreenButton",
        onClick: toggleFullScreen,
        iconType: isFullScreen ? 'fullScreenExit' : 'fullScreen',
        color: "text",
        "aria-label": isFullScreen ? fullscreenCollapse : fullscreenExpand
      });
    });
  };

  var FullScreenDisplay = function FullScreenDisplay(_ref6) {
    var children = _ref6.children,
        className = _ref6.className;
    if (!isFullScreen) return null; // Force fullscreen to use large font and padding.

    var fullScreenClasses = classNames(className, 'euiCodeBlock--fontLarge', 'euiCodeBlock--paddingLarge', 'euiCodeBlock-isFullScreen'); // Attaches to the body because of EuiOverlayMask's React portal usage.

    return ___EmotionJSX(EuiOverlayMask, null, ___EmotionJSX(EuiFocusTrap, {
      clickOutsideDisables: true
    }, ___EmotionJSX("div", {
      className: fullScreenClasses
    }, children)));
  };

  return {
    showFullScreenButton: showFullScreenButton,
    FullScreenButton: FullScreenButton,
    FullScreenDisplay: FullScreenDisplay,
    onKeyDown: onKeyDown
  };
};
/**
 * Virtualization logic
 */


var ListRow = function ListRow(_ref7) {
  var data = _ref7.data,
      index = _ref7.index,
      style = _ref7.style;
  var row = data[index];
  row.properties.style = style;
  return nodeToHtml(row, index, data, 0);
};

var VirtualizedCodeBlock = function VirtualizedCodeBlock(_ref8) {
  var data = _ref8.data,
      rowHeight = _ref8.rowHeight,
      overflowHeight = _ref8.overflowHeight,
      preProps = _ref8.preProps,
      codeProps = _ref8.codeProps;
  var VirtualizedOuterElement = useMemo(function () {
    return /*#__PURE__*/forwardRef(function (props, ref) {
      return ___EmotionJSX("pre", _extends({}, props, {
        ref: ref
      }, preProps));
    });
  }, [preProps]);
  var VirtualizedInnerElement = useMemo(function () {
    return /*#__PURE__*/forwardRef(function (props, ref) {
      return ___EmotionJSX("code", _extends({}, props, {
        ref: ref
      }, codeProps));
    });
  }, [codeProps]);
  return ___EmotionJSX(EuiAutoSizer, {
    disableHeight: typeof overflowHeight === 'number'
  }, function (_ref9) {
    var height = _ref9.height,
        width = _ref9.width;
    return ___EmotionJSX(FixedSizeList, {
      height: height !== null && height !== void 0 ? height : overflowHeight,
      width: width,
      itemData: data,
      itemSize: rowHeight,
      itemCount: data.length,
      outerElementType: VirtualizedOuterElement,
      innerElementType: VirtualizedInnerElement
    }, ListRow);
  });
};