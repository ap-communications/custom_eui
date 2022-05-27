import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import classnames from 'classnames';
import React, { useContext, useState } from 'react';
import { useGeneratedHtmlId } from '../../../../services/accessibility';
import { EuiScreenReaderOnly } from '../../../accessibility';
import { useEuiI18n } from '../../../i18n';
import { EuiIcon } from '../../../icon';
import { EuiListGroup } from '../../../list_group';
import { EuiPopover } from '../../../popover';
import { DataGridSortingContext } from '../../utils/sorting';
import { DataGridFocusContext } from '../../utils/focus';
import { getColumnActions } from './column_actions';
import { EuiDataGridColumnResizer } from './data_grid_column_resizer';
import { EuiDataGridHeaderCellWrapper } from './data_grid_header_cell_wrapper';
import { jsx as ___EmotionJSX } from "@emotion/react";
export var EuiDataGridHeaderCell = function EuiDataGridHeaderCell(_ref) {
  var column = _ref.column,
      index = _ref.index,
      columns = _ref.columns,
      columnWidths = _ref.columnWidths,
      schema = _ref.schema,
      schemaDetectors = _ref.schemaDetectors,
      defaultColumnWidth = _ref.defaultColumnWidth,
      setColumnWidth = _ref.setColumnWidth,
      setVisibleColumns = _ref.setVisibleColumns,
      switchColumnPos = _ref.switchColumnPos,
      headerIsInteractive = _ref.headerIsInteractive;
  var id = column.id,
      display = column.display,
      displayAsText = column.displayAsText;
  var width = columnWidths[id] || defaultColumnWidth;
  var columnType = schema[id] ? schema[id].columnType : null;
  var classes = classnames(_defineProperty({}, "euiDataGridHeaderCell--".concat(columnType), columnType));
  var actionButtonAriaLabel = useEuiI18n('euiDataGridHeaderCell.headerActions', 'Header actions');
  var ariaProps = {};
  var screenReaderId = useGeneratedHtmlId();

  var _useContext = useContext(DataGridFocusContext),
      setFocusedCell = _useContext.setFocusedCell,
      focusFirstVisibleInteractiveCell = _useContext.focusFirstVisibleInteractiveCell;

  var _useContext2 = useContext(DataGridSortingContext),
      sorting = _useContext2.sorting;

  var sortString;

  if (sorting) {
    var sortedColumnIds = new Set(sorting.columns.map(function (_ref2) {
      var id = _ref2.id;
      return id;
    }));

    if (sortedColumnIds.has(id)) {
      if (sorting.columns.length === 1) {
        var sortDirection = sorting.columns[0].direction;
        var sortValue = 'other';

        if (sortDirection === 'asc') {
          sortValue = 'ascending';
        }

        if (sortDirection === 'desc') {
          sortValue = 'descending';
        }

        ariaProps['aria-sort'] = sortValue;
      } else {
        sortString = sorting.columns.map(function (col) {
          return "Sorted by ".concat(col.id, " ").concat(col.direction);
        }).join(' then ');
        ariaProps['aria-describedby'] = screenReaderId;
      }
    }
  }

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPopoverOpen = _useState2[0],
      setIsPopoverOpen = _useState2[1];

  var columnActions = getColumnActions({
    column: column,
    columns: columns,
    schema: schema,
    schemaDetectors: schemaDetectors,
    setVisibleColumns: setVisibleColumns,
    focusFirstVisibleInteractiveCell: focusFirstVisibleInteractiveCell,
    setIsPopoverOpen: setIsPopoverOpen,
    sorting: sorting,
    switchColumnPos: switchColumnPos,
    setFocusedCell: setFocusedCell
  });
  var showColumnActions = columnActions && columnActions.length > 0;
  var sortedColumn = sorting === null || sorting === void 0 ? void 0 : sorting.columns.find(function (col) {
    return col.id === id;
  });
  var sortingArrow = sortedColumn ? ___EmotionJSX(EuiIcon, {
    type: sortedColumn.direction === 'asc' ? 'sortUp' : 'sortDown',
    color: "text",
    className: "euiDataGridHeaderCell__sortingArrow",
    "data-test-subj": "dataGridHeaderCellSortingIcon-".concat(id)
  }) : null;
  return ___EmotionJSX(EuiDataGridHeaderCellWrapper, _extends({
    id: id,
    index: index,
    width: width,
    headerIsInteractive: headerIsInteractive,
    className: classes
  }, ariaProps), column.isResizable !== false && width != null ? ___EmotionJSX(EuiDataGridColumnResizer, {
    columnId: id,
    columnWidth: width,
    setColumnWidth: setColumnWidth
  }) : null, sortString && ___EmotionJSX(EuiScreenReaderOnly, null, ___EmotionJSX("div", {
    id: screenReaderId
  }, sortString)), !showColumnActions ? ___EmotionJSX(React.Fragment, null, sortingArrow, ___EmotionJSX("div", {
    className: "euiDataGridHeaderCell__content"
  }, display || displayAsText || id)) : ___EmotionJSX(EuiPopover, {
    anchorClassName: "euiDataGridHeaderCell__anchor",
    panelPaddingSize: "none",
    offset: 7,
    button: ___EmotionJSX("button", {
      className: "euiDataGridHeaderCell__button",
      onClick: function onClick() {
        setFocusedCell([index, -1]);
        setIsPopoverOpen(function (isPopoverOpen) {
          return !isPopoverOpen;
        });
      }
    }, sortingArrow, ___EmotionJSX("div", {
      className: "euiDataGridHeaderCell__content"
    }, display || displayAsText || id), ___EmotionJSX(EuiIcon, {
      className: "euiDataGridHeaderCell__icon",
      type: "arrowDown",
      size: "s",
      color: "text",
      "aria-label": actionButtonAriaLabel,
      "data-test-subj": "dataGridHeaderCellActionButton-".concat(id)
    })),
    isOpen: isPopoverOpen,
    closePopover: function closePopover() {
      return setIsPopoverOpen(false);
    }
  }, ___EmotionJSX("div", null, ___EmotionJSX(EuiListGroup, {
    listItems: columnActions,
    gutterSize: "none",
    "data-test-subj": "dataGridHeaderCellActionGroup-".concat(id)
  }))));
};