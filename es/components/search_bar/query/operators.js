function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { dateFormat, dateGranularity } from './date_format';
import { isDateValue } from './date_value';
import { isArray, isBoolean, isNumber, isString, isDateLike, isNil } from '../../../services/predicate';
import moment from 'moment';
var utc = moment.utc;

var resolveValueAsDate = function resolveValueAsDate(value) {
  if (moment.isMoment(value)) {
    return value;
  }

  if (moment.isDate(value) || isNumber(value)) {
    return moment(value);
  }

  return dateFormat.parse(String(value));
};

var defaultEqOptions = {
  ignoreCase: true
};
export var eq = function eq(fieldValue, clauseValue) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  options = _objectSpread(_objectSpread({}, defaultEqOptions), options);

  if (isNil(fieldValue) || isNil(clauseValue)) {
    return fieldValue === clauseValue;
  }

  if (isBoolean(fieldValue)) {
    return clauseValue === fieldValue;
  }

  if (isArray(fieldValue)) {
    if (fieldValue.length > 0) {
      return fieldValue.some(function (item) {
        return eq(item, clauseValue, options);
      });
    } else {
      return eq('', clauseValue, options);
    }
  }

  if (isDateValue(clauseValue)) {
    var dateFieldValue = resolveValueAsDate(fieldValue);

    if (clauseValue.granularity) {
      return clauseValue.granularity.isSame(dateFieldValue, clauseValue.resolve());
    }

    return dateFieldValue.isSame(clauseValue.resolve());
  }

  if (isString(fieldValue)) {
    if (options.exactMatch === true) {
      return options.ignoreCase ? fieldValue.toLowerCase() === clauseValue.toString().toLowerCase() : fieldValue === clauseValue.toString();
    } else {
      return options.ignoreCase ? fieldValue.toLowerCase().includes(clauseValue.toString().toLowerCase()) : fieldValue.includes(clauseValue.toString());
    }
  }

  if (isNumber(fieldValue)) {
    clauseValue = Number(clauseValue);
    return fieldValue === clauseValue;
  }

  if (isDateLike(fieldValue)) {
    var date = resolveValueAsDate(clauseValue);

    if (!date.isValid()) {
      return false;
    }

    var granularity = dateGranularity(date);

    if (!granularity) {
      return utc(fieldValue).isSame(date);
    }

    return granularity.isSame(fieldValue, date);
  }

  return false; // unknown value type
};
export var exact = function exact(fieldValue, clauseValue) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return eq(fieldValue, clauseValue, _objectSpread(_objectSpread({}, options), {}, {
    exactMatch: true
  }));
};

var greaterThen = function greaterThen(fieldValue, clauseValue) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (isDateValue(clauseValue)) {
    var clauseDateValue = clauseValue.resolve();
    var fieldValueAsMomentInput = fieldValue;

    if (!clauseValue.granularity) {
      return inclusive ? utc(fieldValueAsMomentInput).isSameOrAfter(clauseDateValue) : utc(fieldValueAsMomentInput).isAfter(clauseDateValue);
    }

    if (inclusive) {
      return utc(fieldValueAsMomentInput).isSameOrAfter(clauseValue.granularity.start(clauseDateValue));
    }

    return utc(fieldValueAsMomentInput).isSameOrAfter(clauseValue.granularity.startOfNext(clauseDateValue));
  }

  if (isString(fieldValue)) {
    var str = String(clauseValue);
    return inclusive ? fieldValue >= str : fieldValue > str;
  }

  if (isNumber(fieldValue)) {
    var number = Number(clauseValue);
    return inclusive ? fieldValue >= number : fieldValue > number;
  }

  if (isDateLike(fieldValue)) {
    var date = resolveValueAsDate(clauseValue);
    var granularity = dateGranularity(date);

    if (!granularity) {
      return inclusive ? utc(fieldValue).isSameOrAfter(date) : utc(fieldValue).isAfter(date);
    }

    if (inclusive) {
      return utc(fieldValue).isSameOrAfter(granularity.start(date));
    }

    return utc(fieldValue).isSameOrAfter(granularity.startOfNext(date));
  }

  if (isArray(fieldValue)) {
    return fieldValue.every(function (item) {
      return greaterThen(item, clauseValue, inclusive);
    });
  }

  return false; // unsupported value type
};

export var gt = function gt(fieldValue, clauseValue) {
  if (isNil(fieldValue) || isNil(clauseValue)) {
    return false;
  }

  return greaterThen(fieldValue, clauseValue);
};
export var gte = function gte(fieldValue, clauseValue) {
  if (isNil(fieldValue) || isNil(clauseValue)) {
    return fieldValue === clauseValue;
  }

  return greaterThen(fieldValue, clauseValue, true);
};
export var lt = function lt(fieldValue, clauseValue) {
  if (isNil(fieldValue) || isNil(clauseValue)) {
    return false;
  }

  return !greaterThen(fieldValue, clauseValue, true);
};
export var lte = function lte(fieldValue, clauseValue) {
  if (isNil(fieldValue) || isNil(clauseValue)) {
    return fieldValue === clauseValue;
  }

  return !greaterThen(fieldValue, clauseValue);
};