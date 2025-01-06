"use strict";var f=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var c=f(function(z,o){
var l=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-abs/dist');function x(a,n,u){var v,e,i,r;if(a<=0)return NaN;if(a===1||u===0)return s(n[0]);for(u<0?e=(1-a)*u:e=0,r=0;r<a&&(i=n[e],i!==i);r++)e+=u;if(r===a)return NaN;for(v=s(i),r+=1,r;r<a;r++)e+=u,i=s(n[e]),!l(i)&&i<v&&(v=i);return v}o.exports=x
});var m=f(function(A,b){
var O=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function R(a,n,u,v){var e,i,r,t;if(a<=0)return NaN;if(a===1||u===0)return n[v];for(i=v,t=0;t<a&&(r=n[i],r!==r);t++)i+=u;if(t===a)return NaN;for(e=q(r),t+=1,t;t<a;t++)i+=u,r=q(n[i]),!O(r)&&r<e&&(e=r);return e}b.exports=R
});var k=f(function(B,y){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),h=m();g(p,"ndarray",h);y.exports=p
});var j=k();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
