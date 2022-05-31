import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
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
import classNames from 'classnames';
import React, { useMemo, useRef, useState } from 'react';
import { useGeneratedHtmlId, keys } from '../../services';
import { EuiFocusTrap } from '../focus_trap';
import { EuiI18n, useEuiI18n } from '../i18n';
import { useMutationObserver } from '../observer/mutation_observer';
import { useResizeObserver } from '../observer/resize_observer';
import { EuiDataGridBody } from './body';
import { useDataGridColumnSelector, useDataGridColumnSorting, useDataGridDisplaySelector, startingStyles, checkOrDefaultToolBarDisplayOptions, EuiDataGridToolbar } from './controls';
import { DataGridSortingContext, useSorting } from './utils/sorting';
import { DataGridFocusContext, useFocus, createKeyDownHandler, preventTabbing } from './utils/focus';
import { useInMemoryValues, EuiDataGridInMemoryRenderer } from './utils/in_memory';
import { useHeaderIsInteractive } from './body/header/header_is_interactive';
import { providedPopoverContents } from './body/popover_utils';
import { computeVisibleRows } from './utils/row_count';
import { EuiDataGridPaginationRenderer } from './utils/data_grid_pagination';
import { schemaDetectors as providedSchemaDetectors, useMergedSchema } from './utils/data_grid_schema';
import { jsx as ___EmotionJSX } from "@emotion/react";
// Each gridStyle object above sets a specific CSS select to .euiGrid
var fontSizesToClassMap = {
  s: 'euiDataGrid--fontSizeSmall',
  m: '',
  l: 'euiDataGrid--fontSizeLarge'
};
var headerToClassMap = {
  shade: 'euiDataGrid--headerShade',
  underline: 'euiDataGrid--headerUnderline'
};
var footerToClassMap = {
  shade: 'euiDataGrid--footerShade',
  overline: 'euiDataGrid--footerOverline',
  striped: ''
};
var rowHoverToClassMap = {
  highlight: 'euiDataGrid--rowHoverHighlight',
  none: ''
};
var bordersToClassMap = {
  all: 'euiDataGrid--bordersAll',
  horizontal: 'euiDataGrid--bordersHorizontal',
  none: 'euiDataGrid--bordersNone'
};
var cellPaddingsToClassMap = {
  s: 'euiDataGrid--paddingSmall',
  m: '',
  l: 'euiDataGrid--paddingLarge'
};
export var EuiDataGrid = function EuiDataGrid(props) {
  var _gridItemsRendered$cu;

  var _props$leadingControl = props.leadingControlColumns,
      leadingControlColumns = _props$leadingControl === void 0 ? [] : _props$leadingControl,
      _props$trailingContro = props.trailingControlColumns,
      trailingControlColumns = _props$trailingContro === void 0 ? [] : _props$trailingContro,
      columns = props.columns,
      columnVisibility = props.columnVisibility,
      schemaDetectors = props.schemaDetectors,
      rowCount = props.rowCount,
      renderCellValue = props.renderCellValue,
      renderFooterCellValue = props.renderFooterCellValue,
      className = props.className,
      gridStyle = props.gridStyle,
      _props$toolbarVisibil = props.toolbarVisibility,
      toolbarVisibility = _props$toolbarVisibil === void 0 ? true : _props$toolbarVisibil,
      pagination = props.pagination,
      sorting = props.sorting,
      inMemory = props.inMemory,
      popoverContents = props.popoverContents,
      onColumnResize = props.onColumnResize,
      minSizeForControls = props.minSizeForControls,
      height = props.height,
      width = props.width,
      _rowHeightsOptions = props.rowHeightsOptions,
      virtualizationOptions = props.virtualizationOptions,
      rest = _objectWithoutProperties(props, ["leadingControlColumns", "trailingControlColumns", "columns", "columnVisibility", "schemaDetectors", "rowCount", "renderCellValue", "renderFooterCellValue", "className", "gridStyle", "toolbarVisibility", "pagination", "sorting", "inMemory", "popoverContents", "onColumnResize", "minSizeForControls", "height", "width", "rowHeightsOptions", "virtualizationOptions"]);
  /**
   * Merge consumer settings with defaults
   */


  var gridStyleWithDefaults = useMemo(function () {
    return _objectSpread(_objectSpread({}, startingStyles), gridStyle);
  }, [gridStyle]);
  var mergedPopoverContents = useMemo(function () {
    return _objectSpread(_objectSpread({}, providedPopoverContents), popoverContents);
  }, [popoverContents]);

  var _useInMemoryValues = useInMemoryValues(inMemory, rowCount),
      _useInMemoryValues2 = _slicedToArray(_useInMemoryValues, 2),
      inMemoryValues = _useInMemoryValues2[0],
      onCellRender = _useInMemoryValues2[1];

  var allSchemaDetectors = useMemo(function () {
    return [].concat(_toConsumableArray(providedSchemaDetectors), _toConsumableArray(schemaDetectors || []));
  }, [schemaDetectors]);
  var mergedSchema = useMergedSchema({
    columns: columns,
    inMemory: inMemory,
    inMemoryValues: inMemoryValues,
    schemaDetectors: allSchemaDetectors,
    autoDetectSchema: inMemory != null
  });
  /**
   * Grid refs & observers
   */
  // Outermost wrapper div
  // this ref needs to be managed by a state, to cause a re-render after mount
  // and passing the mounted element to the resize observer

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      resizeRef = _useState2[0],
      setResizeRef = _useState2[1];

  var _useResizeObserver = useResizeObserver(resizeRef, 'width'),
      gridWidth = _useResizeObserver.width; // Wrapper div around EuiDataGridBody


  var contentRef = useRef(null);
  useMutationObserver(contentRef.current, preventTabbing, {
    subtree: true,
    childList: true
  }); // Imperative handler passed back by react-window - we're setting this at
  // the top datagrid level to make passing it to other children & utils easier

  var gridRef = useRef(null);
  var gridItemsRendered = useRef(null);
  /**
   * Display
   */

  var displayValues = useMemo(function () {
    return columns.reduce(function (acc, column) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, column.id, column.displayAsText || column.id));
    }, {});
  }, [columns]);

  var _useDataGridDisplaySe = useDataGridDisplaySelector(checkOrDefaultToolBarDisplayOptions(toolbarVisibility, 'showDisplaySelector'), gridStyleWithDefaults, _rowHeightsOptions),
      _useDataGridDisplaySe2 = _slicedToArray(_useDataGridDisplaySe, 3),
      displaySelector = _useDataGridDisplaySe2[0],
      gridStyles = _useDataGridDisplaySe2[1],
      rowHeightsOptions = _useDataGridDisplaySe2[2];
  /**
   * Column order & visibility
   */


  var _useDataGridColumnSel = useDataGridColumnSelector(columns, columnVisibility, checkOrDefaultToolBarDisplayOptions(toolbarVisibility, 'showColumnSelector'), displayValues),
      _useDataGridColumnSel2 = _slicedToArray(_useDataGridColumnSel, 4),
      columnSelector = _useDataGridColumnSel2[0],
      orderedVisibleColumns = _useDataGridColumnSel2[1],
      setVisibleColumns = _useDataGridColumnSel2[2],
      switchColumnPos = _useDataGridColumnSel2[3];

  var visibleColCount = useMemo(function () {
    return orderedVisibleColumns.length + leadingControlColumns.length + trailingControlColumns.length;
  }, [orderedVisibleColumns, leadingControlColumns, trailingControlColumns]);
  var visibleRows = useMemo(function () {
    return computeVisibleRows({
      pagination: pagination,
      rowCount: rowCount
    });
  }, [pagination, rowCount]);
  var visibleRowCount = visibleRows.visibleRowCount;
  /**
   * Sorting
   */

  var columnSorting = useDataGridColumnSorting(orderedVisibleColumns, sorting, mergedSchema, allSchemaDetectors, displayValues);
  var sortingContext = useSorting({
    sorting: sorting,
    inMemory: inMemory,
    inMemoryValues: inMemoryValues,
    schema: mergedSchema,
    schemaDetectors: allSchemaDetectors,
    startRow: visibleRows.startRow
  });
  /**
   * Focus
   */

  var _useHeaderIsInteracti = useHeaderIsInteractive(contentRef.current),
      headerIsInteractive = _useHeaderIsInteracti.headerIsInteractive,
      handleHeaderMutation = _useHeaderIsInteracti.handleHeaderMutation;

  var _useFocus = useFocus({
    headerIsInteractive: headerIsInteractive,
    gridItemsRendered: gridItemsRendered
  }),
      wrappingDivFocusProps = _useFocus.focusProps,
      focusContext = _objectWithoutProperties(_useFocus, ["focusProps"]);
  /**
   * Toolbar & full-screen
   */


  var showToolbar = !!toolbarVisibility;

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFullScreen = _useState4[0],
      setIsFullScreen = _useState4[1];

  var handleGridKeyDown = function handleGridKeyDown(event) {
    switch (event.key) {
      case keys.ESCAPE:
        if (isFullScreen) {
          event.preventDefault();
          setIsFullScreen(false);
        }

        break;
    }
  };
  /**
   * Classes
   */


  var classes = classNames('euiDataGrid', fontSizesToClassMap[gridStyles.fontSize], bordersToClassMap[gridStyles.border], headerToClassMap[gridStyles.header], footerToClassMap[gridStyles.footer], rowHoverToClassMap[gridStyles.rowHover], cellPaddingsToClassMap[gridStyles.cellPadding], {
    'euiDataGrid--stripes': gridStyles.stripes
  }, {
    'euiDataGrid--stickyFooter': gridStyles.footer && gridStyles.stickyFooter
  }, {
    'euiDataGrid--fullScreen': isFullScreen
  }, {
    'euiDataGrid--noControls': !toolbarVisibility
  }, className);
  var controlBtnClasses = classNames('euiDataGrid__controlBtn', {
    'euiDataGrid__controlBtn--active': isFullScreen
  });
  /**
   * Accessibility
   */

  var gridId = useGeneratedHtmlId();
  var interactiveCellId = useGeneratedHtmlId();
  var ariaLabelledById = useGeneratedHtmlId();
  var ariaLabel = useEuiI18n('euiDataGrid.ariaLabel', '{label}; Page {page} of {pageCount}.', {
    label: rest['aria-label'],
    page: pagination ? pagination.pageIndex + 1 : 0,
    pageCount: pagination ? Math.ceil(rowCount / pagination.pageSize) : 0
  });
  var ariaLabelledBy = useEuiI18n('euiDataGrid.ariaLabelledBy', 'Page {page} of {pageCount}.', {
    page: pagination ? pagination.pageIndex + 1 : 0,
    pageCount: pagination ? Math.ceil(rowCount / pagination.pageSize) : 0
  }); // extract aria-label and/or aria-labelledby from `rest`

  var gridAriaProps = {};

  if ('aria-label' in rest) {
    gridAriaProps['aria-label'] = pagination ? ariaLabel : rest['aria-label'];
    delete rest['aria-label'];
  }

  if ('aria-labelledby' in rest) {
    gridAriaProps['aria-labelledby'] = "".concat(rest['aria-labelledby'], " ").concat(pagination ? ariaLabelledById : '');
    delete rest['aria-labelledby'];
  }

  return ___EmotionJSX(DataGridFocusContext.Provider, {
    value: focusContext
  }, ___EmotionJSX(DataGridSortingContext.Provider, {
    value: sortingContext
  }, ___EmotionJSX(EuiFocusTrap, {
    disabled: !isFullScreen,
    className: "euiDataGrid__focusWrap"
  }, ___EmotionJSX("div", _extends({
    className: classes,
    onKeyDown: handleGridKeyDown,
    style: isFullScreen ? undefined : {
      width: width,
      height: height
    },
    ref: setResizeRef
  }, rest), showToolbar && ___EmotionJSX(EuiDataGridToolbar, {
    gridWidth: gridWidth,
    minSizeForControls: minSizeForControls,
    toolbarVisibility: toolbarVisibility,
    displaySelector: displaySelector,
    isFullScreen: isFullScreen,
    setIsFullScreen: setIsFullScreen,
    controlBtnClasses: controlBtnClasses,
    columnSelector: columnSelector,
    columnSorting: columnSorting
  }), inMemory ? ___EmotionJSX(EuiDataGridInMemoryRenderer, {
    inMemory: inMemory,
    renderCellValue: renderCellValue,
    columns: columns,
    rowCount: inMemory.level === 'enhancements' ? // if `inMemory.level === enhancements` then we can only be sure the pagination's pageSize is available in memory
    (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) || rowCount : // otherwise, all of the data is present and usable
    rowCount,
    onCellRender: onCellRender
  }) : null, ___EmotionJSX("div", _extends({
    // eslint-disable-line jsx-a11y/interactive-supports-focus
    ref: contentRef,
    onKeyDown: createKeyDownHandler({
      gridElement: contentRef.current,
      visibleColCount: visibleColCount,
      visibleRowCount: visibleRowCount,
      visibleRowStartIndex: ((_gridItemsRendered$cu = gridItemsRendered.current) === null || _gridItemsRendered$cu === void 0 ? void 0 : _gridItemsRendered$cu.visibleRowStartIndex) || 0,
      rowCount: rowCount,
      pagination: pagination,
      hasFooter: !!renderFooterCellValue,
      headerIsInteractive: headerIsInteractive,
      focusContext: focusContext
    }),
    "data-test-subj": "euiDataGridBody",
    className: "euiDataGrid__content",
    role: "grid",
    id: gridId
  }, wrappingDivFocusProps, gridAriaProps), ___EmotionJSX(EuiDataGridBody, {
    columns: orderedVisibleColumns,
    visibleColCount: visibleColCount,
    leadingControlColumns: leadingControlColumns,
    schema: mergedSchema,
    trailingControlColumns: trailingControlColumns,
    setVisibleColumns: setVisibleColumns,
    switchColumnPos: switchColumnPos,
    onColumnResize: onColumnResize,
    headerIsInteractive: headerIsInteractive,
    handleHeaderMutation: handleHeaderMutation,
    schemaDetectors: allSchemaDetectors,
    popoverContents: mergedPopoverContents,
    pagination: pagination,
    renderCellValue: renderCellValue,
    renderFooterCellValue: renderFooterCellValue,
    rowCount: rowCount,
    visibleRows: visibleRows,
    interactiveCellId: interactiveCellId,
    rowHeightsOptions: rowHeightsOptions,
    virtualizationOptions: virtualizationOptions || {},
    isFullScreen: isFullScreen,
    gridStyles: gridStyles,
    gridWidth: gridWidth,
    gridRef: gridRef,
    gridItemsRendered: gridItemsRendered,
    wrapperRef: contentRef
  })), pagination && props['aria-labelledby'] && ___EmotionJSX("p", {
    id: ariaLabelledById,
    hidden: true
  }, ariaLabelledBy), pagination && ___EmotionJSX(EuiDataGridPaginationRenderer, _extends({}, pagination, {
    rowCount: rowCount,
    controls: gridId,
    "aria-label": props['aria-label']
  })), ___EmotionJSX("p", {
    id: interactiveCellId,
    hidden: true
  }, ___EmotionJSX(EuiI18n, {
    token: "euiDataGrid.screenReaderNotice",
    default: "Cell contains interactive content."
  }))))));
};