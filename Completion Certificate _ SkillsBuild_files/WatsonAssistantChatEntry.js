﻿!function(t){"use strict";function e(t,e){return t===e||t!=t&&e!=e}function n(t,n){for(var o=t.length;o--;)if(e(t[o][0],n))return o;return-1}var o=Array.prototype.splice;function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}r.prototype.clear=function(){this.__data__=[],this.size=0},r.prototype.delete=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)},r.prototype.get=function(t){var e=this.__data__,o=n(e,t);return o<0?void 0:e[o][1]},r.prototype.has=function(t){return n(this.__data__,t)>-1},r.prototype.set=function(t,e){var o=this.__data__,r=n(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};var a="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,s=a||i||Function("return this")(),c=s.Symbol,u=Object.prototype,E=u.hasOwnProperty,l=u.toString,d=c?c.toStringTag:void 0;var _=Object.prototype.toString;var p="[object Null]",f="[object Undefined]",T=c?c.toStringTag:void 0;function O(t){return null==t?void 0===t?f:p:T&&T in Object(t)?function(t){var e=E.call(t,d),n=t[d];try{t[d]=void 0;var o=!0}catch(t){}var r=l.call(t);return o&&(e?t[d]=n:delete t[d]),r}(t):function(t){return _.call(t)}(t)}function I(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var h="[object AsyncFunction]",A="[object Function]",R="[object GeneratorFunction]",N="[object Proxy]";function S(t){if(!I(t))return!1;var e=O(t);return e==A||e==R||e==h||e==N}var b,g=s["__core-js_shared__"],y=(b=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"";var v=Function.prototype.toString;function w(t){if(null!=t){try{return v.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var m=/^\[object .+?Constructor\]$/,C=Function.prototype,D=Object.prototype,L=C.toString,P=D.hasOwnProperty,j=RegExp("^"+L.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function U(t){return!(!I(t)||(e=t,y&&y in e))&&(S(t)?j:m).test(w(t));var e}function M(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return U(n)?n:void 0}var F=M(s,"Map"),G=M(Object,"create");var B=Object.prototype.hasOwnProperty;var x=Object.prototype.hasOwnProperty;function W(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function H(t,e){var n,o,r=t.__data__;return("string"==(o=typeof(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?r["string"==typeof e?"string":"hash"]:r.map}function $(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}W.prototype.clear=function(){this.__data__=G?G(null):{},this.size=0},W.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},W.prototype.get=function(t){var e=this.__data__;if(G){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return B.call(e,t)?e[t]:void 0},W.prototype.has=function(t){var e=this.__data__;return G?void 0!==e[t]:x.call(e,t)},W.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=G&&void 0===e?"__lodash_hash_undefined__":e,this},$.prototype.clear=function(){this.size=0,this.__data__={hash:new W,map:new(F||r),string:new W}},$.prototype.delete=function(t){var e=H(this,t).delete(t);return this.size-=e?1:0,e},$.prototype.get=function(t){return H(this,t).get(t)},$.prototype.has=function(t){return H(this,t).has(t)},$.prototype.set=function(t,e){var n=H(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this};function Y(t){var e=this.__data__=new r(t);this.size=e.size}Y.prototype.clear=function(){this.__data__=new r,this.size=0},Y.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Y.prototype.get=function(t){return this.__data__.get(t)},Y.prototype.has=function(t){return this.__data__.has(t)},Y.prototype.set=function(t,e){var n=this.__data__;if(n instanceof r){var o=n.__data__;if(!F||o.length<199)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new $(o)}return n.set(t,e),this.size=n.size,this};var k=function(){try{var t=M(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();function V(t,e,n){"__proto__"==e&&k?k(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Q=Object.prototype.hasOwnProperty;function z(t,n,o){var r=t[n];Q.call(t,n)&&e(r,o)&&(void 0!==o||n in t)||V(t,n,o)}function K(t){return null!=t&&"object"==typeof t}function X(t){return K(t)&&"[object Arguments]"==O(t)}var q=Object.prototype,J=q.hasOwnProperty,Z=q.propertyIsEnumerable,tt=X(function(){return arguments}())?X:function(t){return K(t)&&J.call(t,"callee")&&!Z.call(t,"callee")},et=Array.isArray;var nt="object"==typeof t&&t&&!t.nodeType&&t,ot=nt&&"object"==typeof module&&module&&!module.nodeType&&module,rt=ot&&ot.exports===nt?s.Buffer:void 0,at=(rt?rt.isBuffer:void 0)||function(){return!1},it=9007199254740991,st=/^(?:0|[1-9]\d*)$/;function ct(t,e){var n=typeof t;return!!(e=null==e?it:e)&&("number"==n||"symbol"!=n&&st.test(t))&&t>-1&&t%1==0&&t<e}var ut=9007199254740991;function Et(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=ut}var lt={};function dt(t){return function(e){return t(e)}}lt["[object Float32Array]"]=lt["[object Float64Array]"]=lt["[object Int8Array]"]=lt["[object Int16Array]"]=lt["[object Int32Array]"]=lt["[object Uint8Array]"]=lt["[object Uint8ClampedArray]"]=lt["[object Uint16Array]"]=lt["[object Uint32Array]"]=!0,lt["[object Arguments]"]=lt["[object Array]"]=lt["[object ArrayBuffer]"]=lt["[object Boolean]"]=lt["[object DataView]"]=lt["[object Date]"]=lt["[object Error]"]=lt["[object Function]"]=lt["[object Map]"]=lt["[object Number]"]=lt["[object Object]"]=lt["[object RegExp]"]=lt["[object Set]"]=lt["[object String]"]=lt["[object WeakMap]"]=!1;var _t="object"==typeof t&&t&&!t.nodeType&&t,pt=_t&&"object"==typeof module&&module&&!module.nodeType&&module,ft=pt&&pt.exports===_t&&a.process,Tt=function(){try{var t=pt&&pt.require&&pt.require("util").types;return t||ft&&ft.binding&&ft.binding("util")}catch(t){}}(),Ot=Tt&&Tt.isTypedArray,It=Ot?dt(Ot):function(t){return K(t)&&Et(t.length)&&!!lt[O(t)]},ht=Object.prototype.hasOwnProperty;function At(t,e){var n=et(t),o=!n&&tt(t),r=!n&&!o&&at(t),a=!n&&!o&&!r&&It(t),i=n||o||r||a,s=i?function(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o}(t.length,String):[],c=s.length;for(var u in t)!e&&!ht.call(t,u)||i&&("length"==u||r&&("offset"==u||"parent"==u)||a&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||ct(u,c))||s.push(u);return s}var Rt=Object.prototype;function Nt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Rt)}function St(t,e){return function(n){return t(e(n))}}var bt=St(Object.keys,Object),gt=Object.prototype.hasOwnProperty;function yt(t){return null!=t&&Et(t.length)&&!S(t)}function vt(t){return yt(t)?At(t):function(t){if(!Nt(t))return bt(t);var e=[];for(var n in Object(t))gt.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}var wt=Object.prototype.hasOwnProperty;function mt(t){if(!I(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=Nt(t),n=[];for(var o in t)("constructor"!=o||!e&&wt.call(t,o))&&n.push(o);return n}function Ct(t){return yt(t)?At(t,!0):mt(t)}var Dt="object"==typeof t&&t&&!t.nodeType&&t,Lt=Dt&&"object"==typeof module&&module&&!module.nodeType&&module,Pt=Lt&&Lt.exports===Dt?s.Buffer:void 0,jt=Pt?Pt.allocUnsafe:void 0;function Ut(t,e){if(e)return t.slice();var n=t.length,o=jt?jt(n):new t.constructor(n);return t.copy(o),o}var Mt=Object.prototype.propertyIsEnumerable,Ft=Object.getOwnPropertySymbols,Gt=Ft?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,o=null==t?0:t.length,r=0,a=[];++n<o;){var i=t[n];e(i,n,t)&&(a[r++]=i)}return a}(Ft(t),(function(e){return Mt.call(t,e)})))}:function(){return[]};var Bt=St(Object.getPrototypeOf,Object);function xt(t){return function(t,e,n){var o=e(t);return et(t)?o:function(t,e){for(var n=-1,o=e.length,r=t.length;++n<o;)t[r+n]=e[n];return t}(o,n(t))}(t,vt,Gt)}var Wt=M(s,"DataView"),Ht=M(s,"Promise"),$t=M(s,"Set"),Yt=M(s,"WeakMap"),kt="[object Map]",Vt="[object Promise]",Qt="[object Set]",zt="[object WeakMap]",Kt="[object DataView]",Xt=w(Wt),qt=w(F),Jt=w(Ht),Zt=w($t),te=w(Yt),ee=O;(Wt&&ee(new Wt(new ArrayBuffer(1)))!=Kt||F&&ee(new F)!=kt||Ht&&ee(Ht.resolve())!=Vt||$t&&ee(new $t)!=Qt||Yt&&ee(new Yt)!=zt)&&(ee=function(t){var e=O(t),n="[object Object]"==e?t.constructor:void 0,o=n?w(n):"";if(o)switch(o){case Xt:return Kt;case qt:return kt;case Jt:return Vt;case Zt:return Qt;case te:return zt}return e});var ne=Object.prototype.hasOwnProperty;var oe=s.Uint8Array;function re(t){var e=new t.constructor(t.byteLength);return new oe(e).set(new oe(t)),e}var ae=/\w*$/;var ie=c?c.prototype:void 0,se=ie?ie.valueOf:void 0;function ce(t,e){var n=e?re(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var ue="[object Boolean]",Ee="[object Date]",le="[object Map]",de="[object Number]",_e="[object RegExp]",pe="[object Set]",fe="[object String]",Te="[object Symbol]",Oe="[object ArrayBuffer]",Ie="[object DataView]",he="[object Float32Array]",Ae="[object Float64Array]",Re="[object Int8Array]",Ne="[object Int16Array]",Se="[object Int32Array]",be="[object Uint8Array]",ge="[object Uint8ClampedArray]",ye="[object Uint16Array]",ve="[object Uint32Array]";function we(t,e,n){var o,r,a,i,s,c=t.constructor;switch(e){case Oe:return re(t);case ue:case Ee:return new c(+t);case Ie:return s=re((i=t).buffer),new i.constructor(s,i.byteOffset,i.byteLength);case he:case Ae:case Re:case Ne:case Se:case be:case ge:case ye:case ve:return ce(t,n);case le:return new c;case de:case fe:return new c(t);case _e:return(a=new(r=t).constructor(r.source,ae.exec(r))).lastIndex=r.lastIndex,a;case pe:return new c;case Te:return o=t,se?Object(se.call(o)):{}}}var me=Object.create,Ce=function(){function t(){}return function(e){if(!I(e))return{};if(me)return me(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function De(t){return"function"!=typeof t.constructor||Nt(t)?{}:Ce(Bt(t))}var Le=Tt&&Tt.isMap,Pe=Le?dt(Le):function(t){return K(t)&&"[object Map]"==ee(t)};var je=Tt&&Tt.isSet,Ue=je?dt(je):function(t){return K(t)&&"[object Set]"==ee(t)},Me=1,Fe="[object Arguments]",Ge="[object Function]",Be="[object GeneratorFunction]",xe="[object Object]",We={};function He(t,e,n,o,r,a){var i,s=e&Me;if(void 0!==i)return i;if(!I(t))return t;var c=et(t);if(c)i=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&ne.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(t);else{var u=ee(t),E=u==Ge||u==Be;if(at(t))return Ut(t,s);if(u==xe||u==Fe||E&&!r)i=E?{}:De(t);else{if(!We[u])return r?t:{};i=we(t,u,s)}}a||(a=new Y);var l=a.get(t);if(l)return l;a.set(t,i),Ue(t)?t.forEach((function(o){i.add(He(o,e,n,o,t,a))})):Pe(t)&&t.forEach((function(o,r){i.set(r,He(o,e,n,r,t,a))}));var d=c?void 0:xt(t);return function(t,e){for(var n=-1,o=null==t?0:t.length;++n<o&&!1!==e(t[n],n,t););}(d||t,(function(o,r){d&&(o=t[r=o]),z(i,r,He(o,e,n,r,t,a))})),i}We[Fe]=We["[object Array]"]=We["[object ArrayBuffer]"]=We["[object DataView]"]=We["[object Boolean]"]=We["[object Date]"]=We["[object Float32Array]"]=We["[object Float64Array]"]=We["[object Int8Array]"]=We["[object Int16Array]"]=We["[object Int32Array]"]=We["[object Map]"]=We["[object Number]"]=We[xe]=We["[object RegExp]"]=We["[object Set]"]=We["[object String]"]=We["[object Symbol]"]=We["[object Uint8Array]"]=We["[object Uint8ClampedArray]"]=We["[object Uint16Array]"]=We["[object Uint32Array]"]=!0,We["[object Error]"]=We[Ge]=We["[object WeakMap]"]=!1;var $e=1,Ye=4;function ke(t,n,o){(void 0!==o&&!e(t[n],o)||void 0===o&&!(n in t))&&V(t,n,o)}var Ve=function(t,e,n){for(var o=-1,r=Object(t),a=n(t),i=a.length;i--;){var s=a[++o];if(!1===e(r[s],s,r))break}return t};var Qe="[object Object]",ze=Function.prototype,Ke=Object.prototype,Xe=ze.toString,qe=Ke.hasOwnProperty,Je=Xe.call(Object);function Ze(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}function tn(t){return function(t,e,n,o){var r=!n;n||(n={});for(var a=-1,i=e.length;++a<i;){var s=e[a],c=void 0;void 0===c&&(c=t[s]),r?V(n,s,c):z(n,s,c)}return n}(t,Ct(t))}function en(t,e,n,o,r,a,i){var s=Ze(t,n),c=Ze(e,n),u=i.get(c);if(u)ke(t,n,u);else{var E,l=a?a(s,c,n+"",t,e,i):void 0,d=void 0===l;if(d){var _=et(c),p=!_&&at(c),f=!_&&!p&&It(c);l=c,_||p||f?et(s)?l=s:K(E=s)&&yt(E)?l=function(t,e){var n=-1,o=t.length;for(e||(e=Array(o));++n<o;)e[n]=t[n];return e}(s):p?(d=!1,l=Ut(c,!0)):f?(d=!1,l=ce(c,!0)):l=[]:function(t){if(!K(t)||O(t)!=Qe)return!1;var e=Bt(t);if(null===e)return!0;var n=qe.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Xe.call(n)==Je}(c)||tt(c)?(l=s,tt(s)?l=tn(s):I(s)&&!S(s)||(l=De(c))):d=!1}d&&(i.set(c,l),r(l,c,o,a,i),i.delete(c)),ke(t,n,l)}}function nn(t,e,n,o,r){t!==e&&Ve(e,(function(a,i){if(r||(r=new Y),I(a))en(t,e,i,n,nn,o,r);else{var s=o?o(Ze(t,i),a,i+"",t,e,r):void 0;void 0===s&&(s=a),ke(t,i,s)}}),Ct)}function on(t){return t}var rn=Math.max;var an=k?function(t,e){return k(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:on,sn=Date.now;var cn,un,En,ln=(cn=an,un=0,En=0,function(){var t=sn(),e=16-(t-En);if(En=t,e>0){if(++un>=800)return arguments[0]}else un=0;return cn.apply(void 0,arguments)});function dn(t,e){return ln(function(t,e,n){return e=rn(void 0===e?t.length-1:e,0),function(){for(var o=arguments,r=-1,a=rn(o.length-e,0),i=Array(a);++r<a;)i[r]=o[e+r];r=-1;for(var s=Array(e+1);++r<e;)s[r]=o[r];return s[e]=n(i),function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(t,this,s)}}(t,e,on),t+"")}var _n,pn,fn=(_n=function(t,e,n){nn(t,e,n)},dn((function(t,n){var o=-1,r=n.length,a=r>1?n[r-1]:void 0,i=r>2?n[2]:void 0;for(a=_n.length>3&&"function"==typeof a?(r--,a):void 0,i&&function(t,n,o){if(!I(o))return!1;var r=typeof n;return!!("number"==r?yt(o)&&ct(n,o.length):"string"==r&&n in o)&&e(o[n],t)}(n[0],n[1],i)&&(a=r<3?void 0:a,r=1),t=Object(t);++o<r;){var s=n[o];s&&_n(t,s,o,a)}return t})));!function(t){t[t.CONTINUE=100]="CONTINUE",t[t.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",t[t.PROCESSING=102]="PROCESSING",t[t.EARLY_HINTS=103]="EARLY_HINTS",t[t.OK=200]="OK",t[t.CREATED=201]="CREATED",t[t.ACCEPTED=202]="ACCEPTED",t[t.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",t[t.NO_CONTENT=204]="NO_CONTENT",t[t.RESET_CONTENT=205]="RESET_CONTENT",t[t.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",t[t.MULTI_STATUS=207]="MULTI_STATUS",t[t.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",t[t.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",t[t.MOVED_TEMPORARILY=302]="MOVED_TEMPORARILY",t[t.SEE_OTHER=303]="SEE_OTHER",t[t.NOT_MODIFIED=304]="NOT_MODIFIED",t[t.USE_PROXY=305]="USE_PROXY",t[t.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",t[t.PERMANENT_REDIRECT=308]="PERMANENT_REDIRECT",t[t.BAD_REQUEST=400]="BAD_REQUEST",t[t.UNAUTHORIZED=401]="UNAUTHORIZED",t[t.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",t[t.FORBIDDEN=403]="FORBIDDEN",t[t.NOT_FOUND=404]="NOT_FOUND",t[t.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",t[t.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",t[t.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",t[t.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",t[t.CONFLICT=409]="CONFLICT",t[t.GONE=410]="GONE",t[t.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",t[t.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",t[t.REQUEST_TOO_LONG=413]="REQUEST_TOO_LONG",t[t.REQUEST_URI_TOO_LONG=414]="REQUEST_URI_TOO_LONG",t[t.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",t[t.REQUESTED_RANGE_NOT_SATISFIABLE=416]="REQUESTED_RANGE_NOT_SATISFIABLE",t[t.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",t[t.IM_A_TEAPOT=418]="IM_A_TEAPOT",t[t.INSUFFICIENT_SPACE_ON_RESOURCE=419]="INSUFFICIENT_SPACE_ON_RESOURCE",t[t.METHOD_FAILURE=420]="METHOD_FAILURE",t[t.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST",t[t.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",t[t.LOCKED=423]="LOCKED",t[t.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",t[t.UPGRADE_REQUIRED=426]="UPGRADE_REQUIRED",t[t.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",t[t.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",t[t.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",t[t.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",t[t.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",t[t.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",t[t.BAD_GATEWAY=502]="BAD_GATEWAY",t[t.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",t[t.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",t[t.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",t[t.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",t[t.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED"}(pn||(pn={}));var Tn,On,In,hn,An,Rn,Nn,Sn,bn,gn,yn,vn,wn,mn,Cn="8.7.0",Dn="https://web-chat.global.assistant.watson.appdomain.cloud";async function Ln(t){await new Promise((e=>{setTimeout(e,t)}))}!function(t){t.COMPLETE="complete",t.EDIT="edit",t.UPLOADING="uploading",t.SUCCESS="success"}(Tn||(Tn={})),function(t){t.LAUNCHER="launcher",t.MAIN_WINDOW="mainWindow",t.TOUR="tour"}(On||(On={})),function(t){t.DESKTOP="desktop",t.MOBILE="mobile"}(In||(In={})),function(t){t.CLOSE="close",t.MINIMIZE="minimize",t.SIDE_PANEL_LEFT="side-panel-left",t.SIDE_PANEL_RIGHT="side-panel-right"}(hn||(hn={})),function(t){t.LEFT="left",t.RIGHT="right"}(An||(An={})),function(t){t.WHITE="white",t.G10="g10",t.G90="g90",t.G100="g100"}(Rn||(Rn={})),function(t){t.ROUND="round",t.SQUARE="square"}(Nn||(Nn={})),function(t){t.INITIAL_CONFIG="INITIAL_CONFIG",t.OPEN_CONFIG="OPEN_CONFIG",t.MESSAGE_COMMUNICATION="MESSAGE_COMMUNICATION",t.RENDER="RENDER",t.IDENTITY_TOKEN="IDENTITY_TOKEN",t.MCSP_IDENTITY_TOKEN="MCSP_IDENTITY_TOKEN",t.INTEGRATION_ERROR="INTEGRATION_ERROR",t.AGENT_APP_EXPIRED_SESSION="AGENT_APP_EXPIRED_SESSION",t.HYDRATION="HYDRATION",t.PREVIEW_LINK_SECURITY="PREVIEW_LINK_SECURITY"}(Sn||(Sn={})),function(t){t.FAILED="FAILED",t.NO_SKILL="NO_SKILL",t.THROTTLED="THROTTLED",t.AGENT_APP_EXPIRED_SESSION="AGENT_APP_EXPIRED_SESSION"}(bn||(bn={})),function(t){t.NARROW="narrow",t.STANDARD="standard",t.WIDE="wide"}(gn||(gn={})),function(t){t[t.CLOSED=1]="CLOSED",t[t.OPEN_STRIKE=2]="OPEN_STRIKE",t[t.OPEN_FULL=3]="OPEN_FULL"}(yn||(yn={})),function(t){t[t.ALTERNATE_RESPONSES=1]="ALTERNATE_RESPONSES",t[t.CONTACT_OPTIONS=2]="CONTACT_OPTIONS",t[t.STARTERS=3]="STARTERS"}(vn||(vn={})),function(t){t.AI_TOOLTIP_AFTER_DESCRIPTION_ELEMENT="aiTooltipAfterDescriptionElement",t.WELCOME_NODE_BEFORE_ELEMENT="welcomeNodeBeforeElement",t.HEADER_BOTTOM_ELEMENT="headerBottomElement",t.BEFORE_INPUT_ELEMENT="beforeInputElement",t.HOME_SCREEN_BEFORE_INPUT_ELEMENT="homeScreenBeforeInputElement",t.HOME_SCREEN_AFTER_STARTERS_ELEMENT="homeScreenAfterStartersElement",t.HOME_SCREEN_HEADER_BOTTOM_ELEMENT="homeScreenHeaderBottomElement"}(wn||(wn={})),function(t){t.MESSAGE="message",t.HOME_SCREEN="homeScreen"}(mn||(mn={}));const Pn="[Chat]";var jn;!function(t){t.PRIMARY="primary",t.ACCENT="accent"}(jn||(jn={}));let Un=!1;try{process?.env.JEST_WORKER_ID&&(Un=!0)}catch(t){}function Mn(t,...e){console.error(`${Pn} ${t}`,...e)}function Fn(t,...e){console.debug(`${Pn} ${t}`,...e)}function Gn(t,...e){console.warn(`${Pn} ${t}`,...e)}async function Bn(t){try{if(t)return await t.text()}catch(t){Mn("Error getting fetch text",t)}}async function xn(t){try{if(t)return function(t,e,n){const o=new Promise(((t,o)=>{setTimeout((()=>{o(n)}),e)}));return Promise.race([t,o])}(t.text(),2e3,"Getting response text")}catch(t){Mn("Error getting fetch text",t)}}function Wn(){window.watsonAssistantChatSharedConfig=window.watsonAssistantChatSharedConfig||{},window.watsonAssistantChatSharedConfig.namespaces=window.watsonAssistantChatSharedConfig.namespaces||[],window.watsonAssistantChatSharedConfig.loadScriptPromises=window.watsonAssistantChatSharedConfig.loadScriptPromises||{}}function Hn(){return window.watsonAssistantChatSharedConfig}function $n(t){return t?t.trim():""}function Yn(t,e){Wn();const n=$n(t);if(Hn().namespaces.includes(n)){Mn(`You have multiple web chats attempting to use the same namespace. (${n||"No namespace provided"})`)}else!function(t){Wn();const e=$n(t),{namespaces:n}=Hn();n.push(e)}(t)}var kn,Vn,Qn,zn,Kn;!function(t){t.WHITE="cds--white",t.G10="cds--g10",t.G90="cds--g90",t.G100="cds--g100"}(kn||(kn={})),function(t){t.PRIMARY="primary",t.SECONDARY="secondary",t.DANGER="danger",t.GHOST="ghost",t.DANGER_PRIMARY="danger--primary",t.DANGER_GHOST="danger--ghost",t.DANGER_TERTIARY="danger--tertiary",t.TERTIARY="tertiary"}(Vn||(Vn={})),function(t){t.SMALL="sm",t.MEDIUM="md",t.LARGE="lg",t.XLARGE="xl",t.XXLARGE="2xl"}(Qn||(Qn={})),function(t){t.START="start",t.CENTER="center",t.END="end"}(zn||(zn={})),function(t){t.TEXT_NOTIFICATION="text_notification"}(Kn||(Kn={}));function Xn(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((e=>{!Object.prototype.hasOwnProperty.call(t,e)||null===t[e]||"object"!=typeof t[e]&&"function"!=typeof t[e]||Object.isFrozen(t[e])||Xn(t[e])})),t}function qn(t){Wn();const e=t.clientVersion||Cn,{requestedVersion:n}=Hn();if(n){if(n!==e)return!0}else!function(t){window.watsonAssistantChatSharedConfig.requestedVersion=t}(e);return!1}const Jn={config:{mobile:{title:"",time_to_expand:15e3,new_expand_time:!1,time_to_reduce:1e4,notification_type:Kn.TEXT_NOTIFICATION},desktop:{title:"",new_expand_time:!1,time_to_expand:15e3,notification_type:Kn.TEXT_NOTIFICATION}}};Xn(Jn);const Zn={title:null,hideBackButton:!1,hidePanelHeader:!1,disableAnimation:!1};Xn(Zn);Xn({isOpen:!1,panelID:"wac-default-panel",options:Zn});Xn({isOpen:!1,messageItem:null});Xn({isOpen:!1,citationItem:null,relatedSearchResult:null});const to={config:{is_on:!1},isOpen:!1,showBanner:!0};Xn(to);Xn({activeTourStepItems:null});Xn({isOpen:!1,localMessageItem:null,isMessageForInput:!1});const eo={showButton:!1,allowCollapse:!1,panelState:yn.CLOSED,config:{is_on:!1},contactItem:null,starters:null,suggestionListItems:null,showSearchSection:!1,searchResults:null,searchResultsLoading:!1,searchResultsText:null};Xn(eo);const no={launcher:!1,mainWindow:!1,tour:!1};Xn(no);Xn({launcher:!0,mainWindow:!1,tour:!1});Xn({mainWindow:!0,launcher:!1,tour:!1});Xn({tour:!0,mainWindow:!1,launcher:!1});Xn({chatState:{version:Cn,sessionID:null,sessionStartedTimestamp:null,updateHistoryUserDefinedCount:{},disclaimersAccepted:{},homeScreenState:{isHomeScreenOpen:!1,showBackToBot:!1},hasSentNonWelcomeMessage:!1,suggestionsPersistedState:{numStrikes:0,selectedIndex:-1,selectedSection:null},persistedTourState:{activeTourID:null,activeTourCurrentStepIndex:null},agentState:{isConnected:!1,isSuspended:!1,agentProfiles:{}}},launcherState:{wasLoadedFromBrowser:!1,version:Cn,viewState:no,activeTour:!1,showUnreadIndicator:!1,mobileLauncherIsExtended:!1,mobileLauncherWasReduced:!1,mobileLauncherDisableBounce:!1,desktopLauncherIsExpanded:!1,desktopLauncherWasMinimized:!1,bounceTurn:1,hasSentNonWelcomeMessage:!1}});const oo={localMessageIDs:[],messageIDs:[],isTypingCounter:0,isLoadingCounter:0,isScrollAnchored:!1};Xn(oo);Xn({allMessageItemsByID:{},allMessagesByID:{},botMessageState:{...oo}});Xn({isConnecting:!1,isReconnecting:!1,numUnreadMessages:0,fileUploadInProgress:!1,showScreenShareRequest:!1,isScreenSharing:!1,isAgentTyping:!1,inputState:{fieldVisible:!0,isReadonly:!1,files:[],allowFileUploads:!1,allowMultipleFileUploads:!1,allowedFileUploadTypes:null,stopStreamingButtonState:{currentStreamID:null,isVisible:!1,isDisabled:!1}}});Xn({carbonTheme:Rn.G10,useAITheme:!1,corners:Nn.ROUND});Xn({carbon_theme:Rn.G10,use_ai_theme:!1});Xn({enabled:!1});Xn({is_on:!1});var ro,ao,io,so,co;Xn({showFrame:!0,hasContentMaxWidth:!1}),function(t){t.APP="app",t.ASSISTANT="assistant"}(ro||(ro={})),function(t){t.WEB_CHAT_SETTINGS="web-chat-settings",t.ASSISTANT_PREVIEW="assistant-preview",t.PREVIEW_LINK="preview-link",t.ACTIONS="actions",t.SEARCH="search",t.ANALYTICS="analytics"}(ao||(ao={})),function(t){t.ERROR_MISSING="error",t.WARN_MISSING="warning",t.PREVIEW="preview"}(io||(io={})),function(t){t.DESKTOP="desktop",t.MOBILE="mobile"}(so||(so={})),function(t){t.NONE="none",t.SOLID="solid",t.TOP_CORNER_OUT="top_corner_out",t.BOTTOM_UP="bottom_up"}(co||(co={}));class uo extends Error{}uo.prototype.name="InvalidTokenError";const Eo="token provided is malformed",lo="Authorization header provided but does not follow JWT format",_o="token expired";var po;!function(t){t[t.MISCELLANEOUS=1]="MISCELLANEOUS",t[t.LOCAL_MESSAGE=2]="LOCAL_MESSAGE",t[t.MESSAGE=3]="MESSAGE",t[t.COMPONENT=4]="COMPONENT",t[t.USER=6]="USER",t[t.DEVICE_ID=8]="DEVICE_ID",t[t.FILE=9]="FILE"}(po||(po={}));const fo={dev:"integrations.us-south.assistant.dev.watson.appdomain.cloud",staging:"integrations.us-south.assistant.test.watson.appdomain.cloud","us-south":"integrations.us-south.assistant.watson.appdomain.cloud","us-east":"integrations.us-east.assistant.watson.appdomain.cloud","jp-tok":"integrations.jp-tok.assistant.watson.appdomain.cloud","au-syd":"integrations.au-syd.assistant.watson.appdomain.cloud","eu-gb":"integrations.eu-gb.assistant.watson.appdomain.cloud","eu-de":"integrations.eu-de.assistant.watson.appdomain.cloud","kr-seo":"integrations.kr-seo.assistant.watson.appdomain.cloud","aws-dev":"integrations.aws-us-east-1.assistant.dev.watson.appdomain.cloud","aws-staging":"integrations.aws-us-east-1.assistant.test.watson.appdomain.cloud","aws-us-east-1":"integrations.aws-us-east-1.assistant.watson.appdomain.cloud","aws-preprod":"integrations.aws-us-east-1.assistant.preprod.watson.appdomain.cloud","aws-eu-central-1":"integrations.aws-eu-central-1.assistant.watson.appdomain.cloud","aws-ap-southeast-1":"integrations.aws-ap-southeast-1.assistant.watson.appdomain.cloud","wxo-dev":"integrations.us-south.assistant-builder.dev.watson.appdomain.cloud","wxo-staging":"integrations.us-south.assistant-builder.test.watson.appdomain.cloud","wxo-us-south":"integrations.us-south.assistant-builder.watson.appdomain.cloud","wxo-us-east":"integrations.us-east.assistant-builder.watson.appdomain.cloud","wxo-eu-gb":"integrations.eu-gb.assistant-builder.watson.appdomain.cloud","wxo-ca-tor":"integrations.ca-tor.assistant-builder.watson.appdomain.cloud","wxo-eu-de":"integrations.eu-de.assistant-builder.watson.appdomain.cloud","wxo-jp-tok":"integrations.jp-tok.assistant-builder.watson.appdomain.cloud","wxo-au-syd":"integrations.au-syd.assistant-builder.watson.appdomain.cloud"};const To={openChatByDefault:!1,showLauncher:!0,shouldTakeFocusIfOpensAutomatically:!0,agentAppConfig:{is_on:!1},servers:{},serviceDesk:{},messaging:{copyPreviousContextOnRequest:!0},__ibm__:{isTrackingEnabled:!0,logTrackObjects:!1,connectToAgentBehavior:io.ERROR_MISSING,enableFeatures:{}},wxo:{}},Oo="chat";function Io(t){const e=function(t){return fo[t.region]}(t);return`${t.servers?.assistantURLPrefix||`https://${e}`}/${t.subscriptionID||"public"}`}function ho(t,e){const n=t.__ibm__?.customInitConfigURL;if(n)return n;const o=function(t,e){let n=null;if(t.cloudPrivateHostURL){const e=Oo;n=`${t.cloudPrivateHostURL.replace(/\/?$/,"/")}v1/${e}/${t.integrationID}`}return n}(t);if(o)return`${o}/config?type=init`;const r=Io(t),a="?type=init";return t.agentAppConfig?.is_on?`${r}/agentapp/${t.integrationID}/config${a}`:`${r}/chat/${t.integrationID}/config${a}`}async function Ao(t,e,n,o){const r=await e(t,o);if(!r.ok){if(r.status===pn.TOO_MANY_REQUESTS)return null;const t=await Bn(r);if(function(t,e,n){return t===pn.FORBIDDEN&&e||t===pn.BAD_REQUEST&&n?.includes(Eo)||t===pn.BAD_REQUEST&&n?.includes(lo)||t===pn.UNAUTHORIZED&&n?.includes(_o)}(r.status,n,t))return r;throw r}return r}async function Ro(t,e,n){if(t.servers?.skipConfig)return{botName:"watsonx Assistant"};const o=ho(t);let r;try{r=await async function(t,e,n){let o=1;for(;o-1<=e.length;){try{return await t(o)}catch(t){if(o-1===e.length)throw Mn(`The operation "${n}" failed after ${o} attempts and will not be retried.`,t),t;{const r=e[o-1];Mn(`The operation "${n}" failed after ${o} attempts will be retried in ${r}ms.`,t),await Ln(r)}}o++}throw new Error(`Unexpected retry state for operation "${n}".`)}((()=>Ao(o,n,!1,undefined)),[100,1e3,2e3,5e3],"fetch init config")}catch(t){if(e)throw e({errorType:Sn.INITIAL_CONFIG,message:"The init configuration data could not be loaded.",errorCode:t?.status||void 0,otherData:await xn(t)}),new Error(`${Pn} The init configuration data could not be loaded.`)}if(!r)throw new Error(`${Pn} The init configuration data could not be loaded.`);const a=await Bn(r);if(!r.ok){const n=`The configuration for integrationID "${t.integrationID}" requires a valid identityToken. The chat widget will not be displayed.`;throw e&&e({errorType:Sn.INITIAL_CONFIG,message:"The init configuration data could not be loaded (JWT retry).",errorCode:r.status||void 0,otherData:a}),Mn(n),new Error(`${Pn}  ${n}`)}const i=a?JSON.parse(a):{};if(i.botName=i.botName||"watsonx Assistant",t.__ibm__?.toolingType===ao.PREVIEW_LINK&&i.authorization?.is_on)throw e&&e({errorType:Sn.PREVIEW_LINK_SECURITY,message:"Web chat security is enabled which is not supported by the preview link."}),new Error(`${Pn} Web chat security is enabled which is not supported by the preview link.`);return i}function No(){return t=window.fetch.bind(window),async(...e)=>{const n=await t(...e),o=n.text.bind(n);let r=So;return n.text=async()=>(r===So&&(r=await o()),r),n.json=async()=>{const t=await n.text();return JSON.parse(t)},n};var t}const So={};let bo;function go(t){try{if(t){const e=window.sessionStorage?.getItem("IBM_WAC_CONFIG_OVERRIDE");if(e){const n=JSON.parse(e);Gn("Applying local config override",n),fn(t,n)}}}catch(t){Mn("Error trying to apply session overrides",t)}}async function yo(t){go(t),t?.debug&&Fn("[WatsonAssistantChatEntry] Called loadWatsonAssistantChat()",t);return wo(await vo(t,No(),bo))}async function vo(t,e,n,o,r,a){const i=Date.now();let s=He(t,$e|Ye);s?.debug&&Fn("[ChatEntry] Called instantiateWidget",s),"https:"!==document.location.protocol&&Gn('Your page is not running with "https"; your data will not be sent  securely.'),"CSS1Compat"!==document.compatMode&&Gn('Your page is running in quirks mode; you may experience layout issues with the chat. Add "<!DOCTYPE html>" to the page to run in standards mode.'),function(t,e){const{integrationID:n,region:o,namespace:r,__ibm__:a=To.__ibm__,messaging:i}=t;if(!a.customMessageURL&&!i?.customSendMessage){if("string"!=typeof(s=n)||null===s.match(/^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i))throw new Error(`${Pn} The value of integrationID "${n}" is not a valid ID.`);if(!o)throw new Error(`${Pn} You failed to provide a region in your config object.`);if(!fo[o])throw new Error(`${Pn} The region "${o}" you provided in your config object is not a valid region.`)}if(qn(t))throw new Error(`${Pn} You cannot load web chats of different versions on the same page.`);var s;Yn(r)}(s);const{element:c,onLoad:u,onError:E,...l}=s;l.__ibm__?.skipConfig&&(Gn("IBM skipConfig is deprecated. Use servers.skipConfig."),l.servers=l.servers||{},l.servers.skipConfig=!0),l.__ibm__?.overrideRemoteInitConfig&&(Gn("IBM overrideRemoteInitConfig is deprecated. Use servers.initConfig."),l.servers=l.servers||{},l.servers.initConfig=l.__ibm__.overrideRemoteInitConfig);const[d,_]=await Promise.all([Ro(l,E,e),n(l)]);return new _(l,d,c,{loadVersion:"CarbonChatEntry",onError:E,fetch:e,loadStartTime:i,asCarbonChat:o,renderOverride:r,localInstall:a})}function wo(t){return new Promise(((e,n)=>{const o=function(){t.start().then(e,n)};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",o):o()}))}var mo,Co,Do,Lo,Po,jo;t.MessageInputType=void 0,(mo=t.MessageInputType||(t.MessageInputType={})).TEXT="text",mo.EVENT="event",mo.SKILL_COMPLETE="skill_complete",t.MessageResponseTypes=void 0,(Co=t.MessageResponseTypes||(t.MessageResponseTypes={})).TEXT="text",Co.OPTION="option",Co.CONNECT_TO_AGENT="connect_to_agent",Co.IMAGE="image",Co.PAUSE="pause",Co.USER_DEFINED="user_defined",Co.IFRAME="iframe",Co.VIDEO="video",Co.AUDIO="audio",Co.DATE="date",Co.TABLE="table",Co.INLINE_ERROR="inline_error",Co.CARD="card",Co.CAROUSEL="carousel",Co.BUTTON="button",Co.GRID="grid",t.OptionItemPreference=void 0,(Do=t.OptionItemPreference||(t.OptionItemPreference={})).DROPDOWN="dropdown",Do.BUTTON="button",t.IFrameItemDisplayOption=void 0,(Lo=t.IFrameItemDisplayOption||(t.IFrameItemDisplayOption={})).INLINE="inline",Lo.PANEL="panel",function(t){t.DEFAULT="default",t.SECONDARY="secondary",t.TERTIARY="tertiary",t.DANGER="danger",t.LINK="link"}(Po||(Po={})),function(t){t.POST_BACK="post_back",t.CUSTOM_EVENT="custom_event",t.SHOW_PANEL="show_panel",t.URL="url"}(jo||(jo={})),function(t){bo=t;const e=window.watsonAssistantChatOptions;go(e);const n=e?.debug;n&&Fn("[WatsonAssistantChatEntry] Starting."),e?e.onLoad?(n&&Fn("[WatsonAssistantChatEntry] Using publicConfig.onLoad."),function(){const t=window.watsonAssistantChatOptions;t?.debug&&Fn("[WatsonAssistantChatEntry] Called loadWatsonAssistantChatWithOnLoad",t);const e=t.onLoad;vo(t,No(),bo).then((t=>wo(t))).then(e)}()):n&&Gn("[WatsonAssistantChatEntry] No onLoad found in public config."):n&&Fn("[WatsonAssistantChatEntry] No window.watsonAssistantChatOptions found."),window.loadWatsonAssistantChat=yo}((async function(t){const e=function(t){return t.__ibm__?.useExactVersion?t.clientVersion:Cn}(t),{loadScriptPromises:n}=Hn();return n[Cn]?n[Cn]:(n[Cn]=function(){let t,e;const n=new Promise(((n,o)=>{t=n,e=o}));return n.doResolve=e=>{n.isResolved=!0,n.isComplete=!0,t(e)},n.doReject=t=>{n.isRejected=!0,n.isComplete=!0,e(t)},n.isResolved=!1,n.isRejected=!1,n.isComplete=!1,n}(),new Promise(((o,r)=>{const a=function(t){return t?.cloudPrivateHostURL?`${t.cloudPrivateHostURL.replace(/\/?$/,"/")}static/webchat`:t?.servers?.webChatScriptPrefix?t?.servers?.webChatScriptPrefix:Dn}(t),i=`${a}/versions/${e}`,s=document.createElement("script");s.onload=async()=>{const t=await n[Cn];o(t)},s.onerror=t=>{r(t)},s.src=`${i}/chat.js`,document.head.appendChild(s)})))}))}({});
//# sourceMappingURL=WatsonAssistantChatEntry.js.map
