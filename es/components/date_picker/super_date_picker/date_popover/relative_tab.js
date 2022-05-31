function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";
import dateMath from '@elastic/datemath';
import { toSentenceCase } from '../../../../services/string/to_case';
import { htmlIdGenerator } from '../../../../services';
import { EuiFlexGroup, EuiFlexItem } from '../../../flex';
import { EuiForm, EuiFormRow, EuiSelect, EuiFieldNumber, EuiFieldText, EuiSwitch, EuiFormLabel } from '../../../form';
import { EuiSpacer } from '../../../spacer';
import { timeUnits } from '../time_units';
import { relativeOptions } from '../relative_options';
import { parseRelativeParts, toRelativeStringFromParts } from '../relative_utils';
import { EuiScreenReaderOnly } from '../../../accessibility';
import { EuiI18n } from '../../../i18n';
import { INVALID_DATE } from '../date_modes';
import { EuiPopoverFooter } from '../../../popover';
import { jsx as ___EmotionJSX } from "@emotion/react";
export var EuiRelativeTab = /*#__PURE__*/function (_Component) {
  _inherits(EuiRelativeTab, _Component);

  var _super = _createSuper(EuiRelativeTab);

  function EuiRelativeTab() {
    var _this;

    _classCallCheck(this, EuiRelativeTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", _objectSpread(_objectSpread({}, parseRelativeParts(_this.props.value)), {}, {
      sentenceCasedPosition: toSentenceCase(_this.props.position)
    }));

    _defineProperty(_assertThisInitialized(_this), "relativeDateInputNumberDescriptionId", htmlIdGenerator()());

    _defineProperty(_assertThisInitialized(_this), "onCountChange", function (event) {
      var sanitizedValue = parseInt(event.target.value, 10);

      _this.setState({
        count: isNaN(sanitizedValue) ? undefined : sanitizedValue
      }, _this.handleChange);
    });

    _defineProperty(_assertThisInitialized(_this), "onUnitChange", function (event) {
      _this.setState({
        unit: event.target.value
      }, _this.handleChange);
    });

    _defineProperty(_assertThisInitialized(_this), "onRoundChange", function (event) {
      _this.setState({
        round: event.target.checked
      }, _this.handleChange);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      var _this$state = _this.state,
          count = _this$state.count,
          round = _this$state.round,
          roundUnit = _this$state.roundUnit,
          unit = _this$state.unit;
      var onChange = _this.props.onChange;

      if (count === undefined || count < 0) {
        return;
      }

      var date = toRelativeStringFromParts({
        count: count,
        round: round,
        roundUnit: roundUnit,
        unit: unit
      });
      onChange(date);
    });

    return _this;
  }

  _createClass(EuiRelativeTab, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          count = _this$state2.count,
          unit = _this$state2.unit;
      var invalidDate = this.props.value === INVALID_DATE;
      var invalidValue = count === undefined || count < 0;
      var isInvalid = invalidValue || invalidDate;
      var parsedValue = dateMath.parse(this.props.value, {
        roundUp: this.props.roundUp
      });
      var formattedValue = isInvalid || !parsedValue || !parsedValue.isValid() ? '' : parsedValue.locale(this.props.locale || 'en').format(this.props.dateFormat);

      var getErrorMessage = function getErrorMessage(_ref) {
        var numberInputError = _ref.numberInputError,
            dateInputError = _ref.dateInputError;
        if (invalidValue) return numberInputError;
        if (invalidDate) return dateInputError;
        return null;
      };

      return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(EuiForm, {
        className: "euiDatePopoverContent__padded"
      }, ___EmotionJSX(EuiFlexGroup, {
        gutterSize: "s",
        responsive: false
      }, ___EmotionJSX(EuiFlexItem, null, ___EmotionJSX(EuiI18n, {
        tokens: ['euiRelativeTab.numberInputError', 'euiRelativeTab.numberInputLabel', 'euiRelativeTab.dateInputError'],
        defaults: ['Must be >= 0', 'Time span amount', 'Must be a valid range']
      }, function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 3),
            numberInputError = _ref3[0],
            numberInputLabel = _ref3[1],
            dateInputError = _ref3[2];

        return ___EmotionJSX(EuiFormRow, {
          isInvalid: isInvalid,
          error: getErrorMessage({
            numberInputError: numberInputError,
            dateInputError: dateInputError
          })
        }, ___EmotionJSX(EuiFieldNumber, {
          compressed: true,
          "aria-label": numberInputLabel,
          "aria-describedby": _this2.relativeDateInputNumberDescriptionId,
          "data-test-subj": 'superDatePickerRelativeDateInputNumber',
          value: count,
          onChange: _this2.onCountChange,
          isInvalid: isInvalid
        }));
      })), ___EmotionJSX(EuiFlexItem, null, ___EmotionJSX(EuiI18n, {
        token: "euiRelativeTab.unitInputLabel",
        default: "Relative time span"
      }, function (unitInputLabel) {
        return ___EmotionJSX(EuiSelect, {
          compressed: true,
          "aria-label": unitInputLabel,
          "data-test-subj": 'superDatePickerRelativeDateInputUnitSelector',
          value: unit,
          options: relativeOptions,
          onChange: _this2.onUnitChange
        });
      }))), ___EmotionJSX(EuiSpacer, {
        size: "s"
      }), ___EmotionJSX(EuiFieldText, {
        compressed: true,
        value: formattedValue,
        readOnly: true,
        prepend: ___EmotionJSX(EuiFormLabel, null, ___EmotionJSX(EuiI18n, {
          token: "euiRelativeTab.relativeDate",
          default: "{position} date",
          values: {
            position: this.state.sentenceCasedPosition
          }
        }))
      }), ___EmotionJSX(EuiScreenReaderOnly, null, ___EmotionJSX("p", {
        id: this.relativeDateInputNumberDescriptionId
      }, ___EmotionJSX(EuiI18n, {
        token: "euiRelativeTab.fullDescription",
        default: "The unit is changeable. Currently set to {unit}.",
        values: {
          unit: unit
        }
      })))), ___EmotionJSX(EuiPopoverFooter, {
        paddingSize: "s"
      }, ___EmotionJSX(EuiI18n, {
        token: "euiRelativeTab.roundingLabel",
        default: "Round to the {unit}",
        values: {
          unit: timeUnits[unit.substring(0, 1)]
        }
      }, function (roundingLabel) {
        return ___EmotionJSX(EuiSwitch, {
          "data-test-subj": 'superDatePickerRelativeDateRoundSwitch',
          label: roundingLabel,
          checked: _this2.state.round,
          onChange: _this2.onRoundChange
        });
      })));
    }
  }]);

  return EuiRelativeTab;
}(Component);
EuiRelativeTab.propTypes = {
  dateFormat: PropTypes.string.isRequired,
  locale: PropTypes.any,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  roundUp: PropTypes.bool,
  position: PropTypes.oneOf(["start", "end"]).isRequired
};