function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { useEffect, useState, useContext } from 'react';
import { IS_JEST_ENVIRONMENT } from '../../../test';
import { useUpdateEffect, useForceRender } from '../../../services';
import { useResizeObserver } from '../../observer/resize_observer';
import { DataGridSortingContext } from './sorting';
export var useFinalGridDimensions = function useFinalGridDimensions(_ref) {
  var unconstrainedHeight = _ref.unconstrainedHeight,
      unconstrainedWidth = _ref.unconstrainedWidth,
      wrapperDimensions = _ref.wrapperDimensions,
      wrapperRef = _ref.wrapperRef,
      isFullScreen = _ref.isFullScreen,
      rowCount = _ref.rowCount;

  // Used if the grid needs to scroll
  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1]; // Tracking full screen height separately is necessary to correctly restore the grid back to non-full-screen height


  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      fullScreenHeight = _useState6[0],
      setFullScreenHeight = _useState6[1]; // Set the wrapper height on load, whenever the grid wrapper resizes, and whenever rowCount changes


  useEffect(function () {
    var boundingRect = wrapperRef.current.getBoundingClientRect();

    if (isFullScreen) {
      setFullScreenHeight(boundingRect.height);
    } else {
      if (boundingRect.height !== unconstrainedHeight) {
        setHeight(boundingRect.height);
      }
    }

    if (boundingRect.width !== unconstrainedWidth) {
      setWidth(boundingRect.width);
    }
  }, [// Effects that should cause recalculations
  rowCount, isFullScreen, wrapperDimensions, // Dependencies
  wrapperRef, unconstrainedHeight, unconstrainedWidth]);
  var finalHeight = isFullScreen ? fullScreenHeight : height || unconstrainedHeight;
  var finalWidth = width || unconstrainedWidth;
  return IS_JEST_ENVIRONMENT ? {
    finalHeight: Number.MAX_SAFE_INTEGER,
    finalWidth: Number.MAX_SAFE_INTEGER
  } : {
    finalHeight: finalHeight,
    finalWidth: finalWidth
  };
};
/**
 * Computes the unconstrained (total possible) height of a grid
 */

export var useUnconstrainedHeight = function useUnconstrainedHeight(_ref2) {
  var _outerGridRef$current, _outerGridRef$current2, _outerGridRef$current3, _outerGridRef$current4;

  var rowHeightUtils = _ref2.rowHeightUtils,
      startRow = _ref2.startRow,
      endRow = _ref2.endRow,
      rowHeightsOptions = _ref2.rowHeightsOptions,
      defaultRowHeight = _ref2.defaultRowHeight,
      headerRowHeight = _ref2.headerRowHeight,
      footerRowHeight = _ref2.footerRowHeight,
      outerGridRef = _ref2.outerGridRef,
      innerGridRef = _ref2.innerGridRef;

  var _useContext = useContext(DataGridSortingContext),
      getCorrectRowIndex = _useContext.getCorrectRowIndex; // when a row height is updated, force a re-render of the grid body to update the unconstrained height


  var forceRender = useForceRender();
  useEffect(function () {
    rowHeightUtils.setRerenderGridBody(forceRender);
  }, [rowHeightUtils, forceRender]);
  var knownHeight = 0; // tracks the pixel height of rows we know the size of

  var knownRowCount = 0; // how many rows we know the size of

  for (var i = startRow; i < endRow; i++) {
    var correctRowIndex = getCorrectRowIndex(i); // map visible row to logical row
    // lookup the height configuration of this row

    var rowHeightOption = rowHeightUtils.getRowHeightOption(correctRowIndex, rowHeightsOptions);

    if (rowHeightOption) {
      // this row's height is known
      knownRowCount++;
      knownHeight += rowHeightUtils.getCalculatedHeight(rowHeightOption, defaultRowHeight, correctRowIndex, rowHeightUtils.isRowHeightOverride(correctRowIndex, rowHeightsOptions));
    }
  } // how many rows to provide space for on the screen


  var rowCountToAffordFor = endRow - startRow; // watch the inner element for a change to its width
  // which may cause the horizontal scrollbar to be added or removed

  var _useResizeObserver = useResizeObserver(innerGridRef.current, 'width'),
      innerWidth = _useResizeObserver.width;

  useUpdateEffect(forceRender, [innerWidth]); // https://stackoverflow.com/a/5038256

  var hasHorizontalScroll = ((_outerGridRef$current = (_outerGridRef$current2 = outerGridRef.current) === null || _outerGridRef$current2 === void 0 ? void 0 : _outerGridRef$current2.scrollWidth) !== null && _outerGridRef$current !== void 0 ? _outerGridRef$current : 0) > ((_outerGridRef$current3 = (_outerGridRef$current4 = outerGridRef.current) === null || _outerGridRef$current4 === void 0 ? void 0 : _outerGridRef$current4.clientWidth) !== null && _outerGridRef$current3 !== void 0 ? _outerGridRef$current3 : 0); // https://stackoverflow.com/a/24797425

  var scrollbarHeight = hasHorizontalScroll ? outerGridRef.current.offsetHeight - outerGridRef.current.clientHeight : 0;
  var unconstrainedHeight = defaultRowHeight * (rowCountToAffordFor - knownRowCount) + // guess how much space is required for unknown rows
  knownHeight + // computed pixel height of the known rows
  headerRowHeight + // account for header
  footerRowHeight + // account for footer
  scrollbarHeight; // account for horizontal scrollbar

  return unconstrainedHeight;
};
/**
 * Returns the size of the cell container minus the scroll bar width.
 * To do so, this hook is listening for size changes of the container itself,
 * as well as pagination changes to make sure every update is caught.
 *
 * This is necessary because there is no callback/event fired by the browser
 * indicating the scroll bar state has changed.
 * @param resizeRef the wrapper element containging the data grid
 * @param pageSize the currently applied page size
 */

export var useVirtualizeContainerWidth = function useVirtualizeContainerWidth(virtualizeContainer, gridWidth, pageSize) {
  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      virtualizeContainerWidth = _useState8[0],
      setVirtualizeContainerWidth = _useState8[1];

  useResizeObserver(virtualizeContainer); // re-render data grid on size changes

  var forceRender = useForceRender();
  useUpdateEffect(forceRender, [gridWidth, forceRender]);
  useEffect(function () {
    if (virtualizeContainer === null || virtualizeContainer === void 0 ? void 0 : virtualizeContainer.clientWidth) {
      setVirtualizeContainerWidth(virtualizeContainer.clientWidth);
    }
  }, [virtualizeContainer === null || virtualizeContainer === void 0 ? void 0 : virtualizeContainer.clientWidth]);
  useEffect(function () {
    // wait for layout to settle, then measure virtualize container
    setTimeout(function () {
      if (virtualizeContainer === null || virtualizeContainer === void 0 ? void 0 : virtualizeContainer.clientWidth) {
        var containerWidth = virtualizeContainer.clientWidth;
        setVirtualizeContainerWidth(containerWidth);
      }
    }, 100);
  }, [pageSize, virtualizeContainer]); // Use clientWidth of the virtualization container to take scroll bar into account
  // If that's not possible, fall back to the width of the wrapper element

  return virtualizeContainerWidth || gridWidth;
};