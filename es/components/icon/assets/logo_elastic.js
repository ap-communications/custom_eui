function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js
import * as React from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";

var EuiIconLogoElastic = function EuiIconLogoElastic(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return ___EmotionJSX("svg", _extends({
    "data-type": "logoElastic",
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    fill: "none",
    viewBox: "0 0 32 32",
    "aria-labelledby": titleId
  }, props), title ? ___EmotionJSX("title", {
    id: titleId
  }, title) : null, ___EmotionJSX("image", {
    id: "image0",
    width: "32",
    height: "32",
    x: "0",
    y: "0",
    href: "data:image/png;base64,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"
  }));
};

export var icon = EuiIconLogoElastic;