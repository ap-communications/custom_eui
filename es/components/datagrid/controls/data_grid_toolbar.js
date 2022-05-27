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
import React, { useEffect } from 'react';
import { EuiToolTip } from '../../tool_tip';
import { EuiButtonIcon } from '../../button';
import { useEuiI18n } from '../../i18n';
import { IS_JEST_ENVIRONMENT } from '../../../test'; // When below this number the grid only shows the full screen button

import { jsx as ___EmotionJSX } from "@emotion/react";
var MINIMUM_WIDTH_FOR_GRID_CONTROLS = 479; // When data grid is full screen, we add a class to the body to remove the extra scrollbar

var GRID_IS_FULLSCREEN_CLASSNAME = 'euiDataGrid__restrictBody';
export var EuiDataGridToolbar = function EuiDataGridToolbar(_ref) {
  var gridWidth = _ref.gridWidth,
      _ref$minSizeForContro = _ref.minSizeForControls,
      minSizeForControls = _ref$minSizeForContro === void 0 ? MINIMUM_WIDTH_FOR_GRID_CONTROLS : _ref$minSizeForContro,
      toolbarVisibility = _ref.toolbarVisibility,
      isFullScreen = _ref.isFullScreen,
      controlBtnClasses = _ref.controlBtnClasses,
      displaySelector = _ref.displaySelector,
      columnSelector = _ref.columnSelector,
      columnSorting = _ref.columnSorting,
      setIsFullScreen = _ref.setIsFullScreen;

  var _useEuiI18n = useEuiI18n(['euiDataGridToolbar.fullScreenButton', 'euiDataGridToolbar.fullScreenButtonActive'], ['Full screen', 'Exit full screen']),
      _useEuiI18n2 = _slicedToArray(_useEuiI18n, 2),
      fullScreenButton = _useEuiI18n2[0],
      fullScreenButtonActive = _useEuiI18n2[1]; // Enables/disables grid controls based on available width


  var hasRoomForGridControls = IS_JEST_ENVIRONMENT ? true : gridWidth > minSizeForControls || isFullScreen;
  useEffect(function () {
    // When data grid is full screen, we add a class to the body to remove the extra scrollbar and stay above any fixed headers
    if (isFullScreen) {
      document.body.classList.add(GRID_IS_FULLSCREEN_CLASSNAME);
      return function () {
        document.body.classList.remove(GRID_IS_FULLSCREEN_CLASSNAME);
      };
    }
  }, [isFullScreen]);

  var fullScreenSelector = ___EmotionJSX(EuiToolTip, {
    content: isFullScreen ? ___EmotionJSX(React.Fragment, null, fullScreenButtonActive, " (", ___EmotionJSX("kbd", null, "esc"), ")") : fullScreenButton,
    delay: "long"
  }, ___EmotionJSX(EuiButtonIcon, {
    size: "xs",
    iconType: isFullScreen ? 'fullScreenExit' : 'fullScreen',
    color: "text",
    className: controlBtnClasses,
    "data-test-subj": "dataGridFullScreenButton",
    onClick: function onClick() {
      return setIsFullScreen(!isFullScreen);
    },
    "aria-label": isFullScreen ? fullScreenButtonActive : fullScreenButton
  }));

  return ___EmotionJSX("div", {
    className: "euiDataGrid__controls",
    "data-test-sub": "dataGridControls"
  }, hasRoomForGridControls && ___EmotionJSX("div", {
    className: "euiDataGrid__leftControls"
  }, renderAdditionalControls(toolbarVisibility, 'left.prepend'), checkOrDefaultToolBarDisplayOptions(toolbarVisibility, 'showColumnSelector') ? columnSelector : null, checkOrDefaultToolBarDisplayOptions(toolbarVisibility, 'showSortSelector') ? columnSorting : null, renderAdditionalControls(toolbarVisibility, 'left.append')), ___EmotionJSX("div", {
    className: "euiDataGrid__rightControls"
  }, renderAdditionalControls(toolbarVisibility, 'right'), checkOrDefaultToolBarDisplayOptions(toolbarVisibility, 'showDisplaySelector') ? displaySelector : null, checkOrDefaultToolBarDisplayOptions(toolbarVisibility, 'showFullScreenSelector') ? fullScreenSelector : null));
};
/**
 * Toolbar utilities
 */
// Typeguards to see if toolbarVisibility has a certain boolean property assigned
// If not, just set it to true and assume it's OK to show

function objectHasKey(object, key) {
  return object.hasOwnProperty(key);
}

export function checkOrDefaultToolBarDisplayOptions(arg, option) {
  if (arg === undefined) {
    return true;
  } else if (typeof arg === 'boolean') {
    return arg;
  } else if (objectHasKey(arg, option)) {
    return arg[option];
  } else {
    return true;
  }
}
export function renderAdditionalControls(toolbarVisibility, position) {
  var _additionalControlsOb;

  if (typeof toolbarVisibility === 'boolean') return null;

  var _ref2 = toolbarVisibility || {},
      additionalControls = _ref2.additionalControls;

  if (!additionalControls) return null; // Typescript is having obj issues, so we need to force cast to EuiDataGridToolBarAdditionalControlsOptions here

  var additionalControlsObj = (additionalControls === null || additionalControls === void 0 ? void 0 : additionalControls.constructor) === Object ? additionalControls : {}; // Typescript workarounds continued

  var leftPositionObj = ((_additionalControlsOb = additionalControlsObj.left) === null || _additionalControlsOb === void 0 ? void 0 : _additionalControlsOb.constructor) === Object ? additionalControlsObj.left : {};

  if (position === 'right') {
    if (additionalControlsObj === null || additionalControlsObj === void 0 ? void 0 : additionalControlsObj.right) {
      return additionalControlsObj.right;
    }
  } else if (position === 'left.prepend') {
    if (leftPositionObj === null || leftPositionObj === void 0 ? void 0 : leftPositionObj.prepend) {
      return leftPositionObj.prepend;
    }
  } else if (position === 'left.append') {
    if (leftPositionObj === null || leftPositionObj === void 0 ? void 0 : leftPositionObj.append) {
      return leftPositionObj.append;
    }

    if ( /*#__PURE__*/React.isValidElement(additionalControlsObj === null || additionalControlsObj === void 0 ? void 0 : additionalControlsObj.left)) {
      // If the consumer passed a single ReactNode to `additionalControls.left`, default to the left append position
      return additionalControlsObj.left;
    }

    if ( /*#__PURE__*/React.isValidElement(additionalControls)) {
      // API backwards compatability: if the consumer passed a single ReactNode to `additionalControls`, default to the the left append position
      return additionalControls;
    }
  }

  return null;
}
/**
 * Utility helper for selectors/controls that allow nested options
 * (e.g. column selector, display selector)
 */

export function getNestedObjectOptions(controlOption, objectKey) {
  var _controlOption$object;

  // If the config is a boolean, nested options follow that boolean
  if (controlOption === false || controlOption === true) return controlOption; // If config is not defined, default to enabled

  if (controlOption == null) return true; // Otherwise, type should be an object of boolean values - dive into it and return the value

  return !!((_controlOption$object = controlOption[objectKey]) !== null && _controlOption$object !== void 0 ? _controlOption$object : true);
}