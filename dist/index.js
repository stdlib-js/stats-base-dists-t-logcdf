"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=n(function(h,s){
var f=require('@stdlib/math-base-special-betainc/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-log1p/dist'),y=require('@stdlib/math-base-special-pow/dist'),L=require('@stdlib/math-base-special-ln/dist'),d=require('@stdlib/constants-float64-ln-half/dist');function F(r,e){var a,u,i;return o(r)||o(e)||e<=0?NaN:r===0?d:(a=y(r,2),e>2*a?(i=a/(e+a),u=f(i,.5,e/2,!0,!0)/2):(i=e/(e+a),u=f(i,e/2,.5,!0,!1)/2),r>0?g(-u):L(u))}s.exports=F
});var v=n(function(j,p){
var b=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-special-betainc/dist'),l=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-log1p/dist'),z=require('@stdlib/math-base-special-pow/dist'),A=require('@stdlib/math-base-special-ln/dist'),H=require('@stdlib/constants-float64-ln-half/dist');function _(r){if(l(r)||r<=0)return b(NaN);return e;function e(a){var u,i,t;return l(a)?NaN:a===0?H:(u=z(a,2),r>2*u?(t=u/(r+u),i=c(t,.5,r/2,!0,!0)/2):(t=r/(r+u),i=c(t,r/2,.5,!0,!1)/2),a>0?w(-i):A(i))}}p.exports=_
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=q(),O=v();m(N,"factory",O);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
