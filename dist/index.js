"use strict";var c=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var y=c(function(D,m){
var g=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function j(a,e,n,o){var t,u,v,i,r,s;if(t=e.data,u=e.accessors[0],a===1||n===0)return f(u(t,o));for(i=o,s=0;s<a&&(r=u(t,i),r!==r);s++)i+=n;if(s===a)return NaN;for(v=f(r),s+=1,s;s<a;s++)i+=n,r=f(u(t,i)),!g(r)&&r<v&&(v=r);return v}m.exports=j
});var b=c(function(E,p){
var O=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist'),P=require('@stdlib/array-base-arraylike2object/dist'),R=y();function d(a,e,n,o){var t,u,v,i,r;if(a<=0)return NaN;if(v=P(e),v.accessorProtocol)return R(a,v,n,o);if(a===1||n===0)return q(e[o]);for(u=o,r=0;r<a&&(i=e[u],i!==i);r++)u+=n;if(r===a)return NaN;for(t=q(i),r+=1,r;r<a;r++)u+=n,i=q(e[u]),!O(i)&&i<t&&(t=i);return t}p.exports=d
});var l=c(function(F,k){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=b();function z(a,e,n){return w(a,e,n,h(a,n))}k.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=l(),B=b();A(x,"ndarray",B);module.exports=x;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
