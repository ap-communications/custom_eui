import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { saturate, shade, tint } from '../../services/color';
import { computed } from '../../services/theme/utils';
import { makeDisabledContrastColor, makeHighContrastColor } from '../../services/color/contrast';
/*
 * TYPES
 */

/**
 * Top 5 colors
 */

/*
 * LIGHT THEME
 * Only split up in the light theme to access the keys by section in the docs
 */
export var brand_colors = {
  primary: '#006BB4',
  accent: '#DD0A73',
  success: '#017D73',
  warning: '#F5A700',
  danger: '#BD271E'
};
export var brand_text_colors = {
  primaryText: computed(makeHighContrastColor('colors.primary')),
  accentText: computed(makeHighContrastColor('colors.accent')),
  successText: computed(makeHighContrastColor('colors.success')),
  warningText: computed(makeHighContrastColor('colors.warning')),
  dangerText: computed(makeHighContrastColor('colors.danger'))
};
export var shade_colors = {
  emptyShade: '#FFF',
  lightestShade: '#F5F7FA',
  lightShade: '#D3DAE6',
  mediumShade: '#98A2B3',
  darkShade: '#69707D',
  darkestShade: '#343741',
  fullShade: '#000'
};
export var special_colors = {
  body: computed(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        lightestShade = _ref2[0];

    return tint(lightestShade, 0.5);
  }, ['colors.lightestShade']),
  highlight: '#FFFCDD',
  disabled: computed(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        darkestShade = _ref4[0];

    return tint(darkestShade, 0.7);
  }, ['colors.darkestShade']),
  disabledText: computed(makeDisabledContrastColor('colors.disabled')),
  shadow: computed(function (_ref5) {
    var colors = _ref5.colors;
    return shade(saturate(colors.mediumShade, 0.25), 0.5);
  })
};
export var text_colors = {
  text: computed(makeHighContrastColor('colors.darkestShade')),
  title: computed(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 1),
        _ref7$ = _ref7[0],
        text = _ref7$.text,
        body = _ref7$.body;

    return makeHighContrastColor(shade(text, 0.5))(body);
  }, ['colors']),
  subdued: computed(makeHighContrastColor('colors.mediumShade')),
  link: computed(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 1),
        primaryText = _ref9[0];

    return primaryText;
  }, ['colors.primaryText'])
};
export var light_colors = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, brand_colors), shade_colors), special_colors), brand_text_colors), text_colors);
/*
 * DARK THEME
 */

export var dark_shades = {
  emptyShade: '#1D1E24',
  lightestShade: '#25262E',
  lightShade: '#343741',
  mediumShade: '#535966',
  darkShade: '#98A2B3',
  darkestShade: '#D4DAE5',
  fullShade: '#FFF'
};
export var dark_colors = _objectSpread(_objectSpread(_objectSpread({
  // Brand
  primary: '#1BA9F5',
  accent: '#F990C0',
  success: '#7DE2D1',
  warning: '#FFCE7A',
  danger: '#F66'
}, dark_shades), {}, {
  // Special
  body: computed(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 1),
        lightestShade = _ref11[0];

    return shade(lightestShade, 0.45);
  }, ['colors.lightestShade']),
  highlight: '#2E2D25',
  disabled: computed(function (_ref12) {
    var _ref13 = _slicedToArray(_ref12, 1),
        darkestShade = _ref13[0];

    return tint(darkestShade, 0.7);
  }, ['colors.darkestShade']),
  disabledText: computed(makeDisabledContrastColor('colors.disabled')),
  shadow: computed(function (_ref14) {
    var colors = _ref14.colors;
    return shade(saturate(colors.mediumShade, 0.25), 0.5);
  })
}, brand_text_colors), {}, {
  // Text
  text: '#DFE5EF',
  title: computed(function (_ref15) {
    var _ref16 = _slicedToArray(_ref15, 1),
        text = _ref16[0];

    return text;
  }, ['colors.text']),
  subdued: computed(makeHighContrastColor('colors.mediumShade')),
  link: computed(function (_ref17) {
    var _ref18 = _slicedToArray(_ref17, 1),
        primaryText = _ref18[0];

    return primaryText;
  }, ['colors.primaryText'])
});
/*
 * FULL
 */

export var colors = {
  ghost: '#FFF',
  ink: '#000',
  LIGHT: light_colors,
  DARK: dark_colors
};