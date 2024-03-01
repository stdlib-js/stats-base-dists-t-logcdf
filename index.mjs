// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betainc@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-half@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function a(t,d){var a,l;return e(t)||e(d)||d<=0?NaN:0===t?m:(l=d>2*(a=i(t,2))?s(a/(d+a),.5,d/2,!0,!0)/2:s(d/(d+a),d/2,.5,!0,!1)/2,t>0?n(-l):r(l))}function l(t){return e(t)||t<=0?d(NaN):function(d){var a,l;if(e(d))return NaN;if(0===d)return m;a=i(d,2),l=t>2*a?s(a/(t+a),.5,t/2,!0,!0)/2:s(t/(t+a),t/2,.5,!0,!1)/2;return d>0?n(-l):r(l)}}t(a,"factory",l);export{a as default,l as factory};
//# sourceMappingURL=index.mjs.map
