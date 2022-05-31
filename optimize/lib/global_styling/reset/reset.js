"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetStyles = void 0;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
var resetStyles = "\n/* // Adapted from Eric Meyer's reset (http://meyerweb.com/eric/tools/css/reset/, v2.0 | 20110126). */\n\n\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: none;\n  vertical-align: baseline;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\na[href],\nbutton,\n[role='button'] {\n  cursor: pointer;\n}\n\nbutton {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  color: inherit;\n  border-radius: 0;\n  font-size: inherit;\n}\n\ninput {\n  margin: 0;\n  padding: 0;\n}\n\ninput:disabled {\n  opacity: 1; /* required on iOS */\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhr {\n  margin: 0;\n}\n\nfieldset {\n  min-inline-size: auto;\n}\n\n/* Chrome has an issue around RTL languages in SVGs when letter-spacing is negative\n * https://bugs.chromium.org/p/chromium/issues/detail?id=966480\n */\nsvg text {\n  letter-spacing: normal !important;\n}";
exports.resetStyles = resetStyles;