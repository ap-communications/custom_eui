import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import React, { Component } from 'react';
import { EuiButtonEmpty } from '../../button';
import { EuiContextMenuItem, EuiContextMenuPanel } from '../../context_menu';
import { EuiFlexGroup, EuiFlexItem } from '../../flex';
import { EuiPagination } from '../../pagination';
import { EuiPopover } from '../../popover';
import { EuiI18n } from '../../i18n';
import { jsx as ___EmotionJSX } from "@emotion/react";
export var EuiTablePagination = /*#__PURE__*/function (_Component) {
  _inherits(EuiTablePagination, _Component);

  var _super = _createSuper(EuiTablePagination);

  function EuiTablePagination() {
    var _this;

    _classCallCheck(this, EuiTablePagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isPopoverOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      _this.setState({
        isPopoverOpen: !_this.state.isPopoverOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closePopover", function () {
      _this.setState({
        isPopoverOpen: false
      });
    });

    return _this;
  }

  _createClass(EuiTablePagination, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activePage = _this$props.activePage,
          _this$props$itemsPerP = _this$props.itemsPerPage,
          itemsPerPage = _this$props$itemsPerP === void 0 ? 50 : _this$props$itemsPerP,
          _this$props$itemsPerP2 = _this$props.itemsPerPageOptions,
          itemsPerPageOptions = _this$props$itemsPerP2 === void 0 ? [10, 20, 50, 100] : _this$props$itemsPerP2,
          _this$props$hidePerPa = _this$props.hidePerPageOptions,
          hidePerPageOptions = _this$props$hidePerPa === void 0 ? false : _this$props$hidePerPa,
          _this$props$onChangeI = _this$props.onChangeItemsPerPage,
          onChangeItemsPerPage = _this$props$onChangeI === void 0 ? function () {} : _this$props$onChangeI,
          onChangePage = _this$props.onChangePage,
          pageCount = _this$props.pageCount,
          rest = _objectWithoutProperties(_this$props, ["activePage", "itemsPerPage", "itemsPerPageOptions", "hidePerPageOptions", "onChangeItemsPerPage", "onChangePage", "pageCount"]);

      var button = ___EmotionJSX(EuiButtonEmpty, {
        size: "xs",
        color: "text",
        iconType: "arrowDown",
        iconSide: "right",
        "data-test-subj": "tablePaginationPopoverButton",
        onClick: this.onButtonClick
      }, ___EmotionJSX(EuiI18n, {
        token: "euiTablePagination.rowsPerPage",
        default: "Rows per page"
      }), ": ", itemsPerPage);

      var items = itemsPerPageOptions.map(function (itemsPerPageOption) {
        return ___EmotionJSX(EuiContextMenuItem, {
          key: itemsPerPageOption,
          icon: itemsPerPageOption === itemsPerPage ? 'check' : 'empty',
          onClick: function onClick() {
            _this2.closePopover();

            onChangeItemsPerPage(itemsPerPageOption);
          },
          "data-test-subj": "tablePagination-".concat(itemsPerPageOption, "-rows")
        }, ___EmotionJSX(EuiI18n, {
          token: "euiTablePagination.rowsPerPageOption",
          values: {
            rowsPerPage: itemsPerPageOption
          },
          default: "{rowsPerPage} rows"
        }));
      });

      var itemsPerPagePopover = ___EmotionJSX(EuiPopover, {
        button: button,
        isOpen: this.state.isPopoverOpen,
        closePopover: this.closePopover,
        panelPaddingSize: "none",
        anchorPosition: "upRight"
      }, ___EmotionJSX(EuiContextMenuPanel, {
        items: items
      }));

      return ___EmotionJSX(EuiFlexGroup, {
        justifyContent: "spaceBetween",
        alignItems: "center",
        responsive: false,
        gutterSize: "s",
        className: "eui-xScroll"
      }, ___EmotionJSX(EuiFlexItem, {
        grow: false
      }, hidePerPageOptions ? null : itemsPerPagePopover), ___EmotionJSX(EuiFlexItem, {
        grow: false
      }, ___EmotionJSX(EuiPagination, _extends({
        pageCount: pageCount,
        activePage: activePage,
        onPageClick: onChangePage
      }, rest))));
    }
  }]);

  return EuiTablePagination;
}(Component);