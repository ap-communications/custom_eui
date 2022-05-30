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
    href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZNJREFUeNrsVj1OwzAYNRXM/OyI9AbpQjdoF1aaG9ATFE+MLWMlJOgJaEemlhMQRiZyg1piYqKcoLwPfUhWRBu7tiNViqUnp43l9/y+H0eIbR1zpQ4IrvvsWBB2MF0CLSDKvVZACtzWo0h5E8AnvAZ6gOlpx4CEkIWTAD7xowWxPjKgCxGZi4ClY3jJgUZRSHY32HQGPPOzYIcoNzo5t+j5Chj4coDsbK+KLdZHHLLWXy6cPX1KEvZx0xz7EJCCvG1QLSRCgHzCgkhYAyL+zYdagBYhQf6K+YV/J6vIgwjgEP32BD75bN36EA4Itr0PfB0P35YEX1VgUy1Sq4r9sgX0uRrI/lGpOUDleHq4N+E8oD7wjhDcl+IA3x3Tu4sjmrvcB3rcuJz7gOJGpNY0oikQa38/YL301YqJYA6ijO391t6dsN35ERdtukkIYpON2bGkaFEtYBkmJt8EIQRQeOom3wK2Icg4m8+1G08/MRGPQJzaqLURsMDmg1zJxbaE3vqAduk4jVBJWAmoBGyPgGr8CDAADEiNSND9wzcAAAAASUVORK5CYII="
  }));
};

export var icon = EuiIconLogoElastic;