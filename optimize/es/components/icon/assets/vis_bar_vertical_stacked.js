import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

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

var EuiIconVisBarVerticalStacked = function EuiIconVisBarVerticalStacked(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return ___EmotionJSX("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    "aria-labelledby": titleId
  }, props), title ? ___EmotionJSX("title", {
    id: titleId
  }, title) : null, ___EmotionJSX("path", {
    d: "M14.5 15a.5.5 0 110 1H.5a.5.5 0 110-1h14zm-9-13a.5.5 0 01.5.5L5.999 7H9V4.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v9a.5.5 0 11-1 0V7h-3v6.5a.5.5 0 01-.41.492L9.5 14a.5.5 0 01-.5-.5V10H6v3.5a.5.5 0 01-.992.09L5 13.5V6H2v7.5a.5.5 0 11-1 0v-11a.5.5 0 01.5-.5h4z"
  }));
};

export var icon = EuiIconVisBarVerticalStacked;