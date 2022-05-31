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