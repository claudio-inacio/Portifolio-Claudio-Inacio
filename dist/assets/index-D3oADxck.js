(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ac={exports:{}},xi={},Dc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.element"),Ap=Symbol.for("react.portal"),Dp=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),Fp=Symbol.for("react.profiler"),Hp=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),Up=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),Vp=Symbol.for("react.memo"),Qp=Symbol.for("react.lazy"),Ws=Symbol.iterator;function Gp(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var bc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fc=Object.assign,Hc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Hc,this.updater=n||bc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bc(){}Bc.prototype=qn.prototype;function Ia(e,t,n){this.props=e,this.context=t,this.refs=Hc,this.updater=n||bc}var La=Ia.prototype=new Bc;La.constructor=Ia;Fc(La,qn.prototype);La.isPureReactComponent=!0;var Vs=Array.isArray,Uc=Object.prototype.hasOwnProperty,Ra={current:null},Wc={key:!0,ref:!0,__self:!0,__source:!0};function Vc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Uc.call(t,r)&&!Wc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Vr,type:e,key:i,ref:l,props:o,_owner:Ra.current}}function Yp(e,t){return{$$typeof:Vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $a(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function Xp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qs=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xp(""+e.key):t.toString(36)}function No(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vr:case Ap:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+el(l,0):r,Vs(o)?(n="",e!=null&&(n=e.replace(Qs,"$&/")+"/"),No(o,t,n,"",function(u){return u})):o!=null&&($a(o)&&(o=Yp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Qs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Vs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+el(i,a);l+=No(i,t,n,s,o)}else if(s=Gp(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+el(i,a++),l+=No(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function io(e,t,n){if(e==null)return e;var r=[],o=0;return No(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Kp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Io={transition:null},Jp={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Io,ReactCurrentOwner:Ra};function Qc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!$a(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=qn;B.Fragment=Dp;B.Profiler=Fp;B.PureComponent=Ia;B.StrictMode=bp;B.Suspense=Wp;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;B.act=Qc;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ra.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Uc.call(t,s)&&!Wc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vr,type:e.type,key:o,ref:i,props:r,_owner:l}};B.createContext=function(e){return e={$$typeof:Bp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hp,_context:e},e.Consumer=e};B.createElement=Vc;B.createFactory=function(e){var t=Vc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Up,render:e}};B.isValidElement=$a;B.lazy=function(e){return{$$typeof:Qp,_payload:{_status:-1,_result:e},_init:Kp}};B.memo=function(e,t){return{$$typeof:Vp,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Io.transition;Io.transition={};try{e()}finally{Io.transition=t}};B.unstable_act=Qc;B.useCallback=function(e,t){return be.current.useCallback(e,t)};B.useContext=function(e){return be.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return be.current.useDeferredValue(e)};B.useEffect=function(e,t){return be.current.useEffect(e,t)};B.useId=function(){return be.current.useId()};B.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return be.current.useMemo(e,t)};B.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};B.useRef=function(e){return be.current.useRef(e)};B.useState=function(e){return be.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return be.current.useTransition()};B.version="18.3.1";Dc.exports=B;var Z=Dc.exports;const We=Mc(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=Z,qp=Symbol.for("react.element"),em=Symbol.for("react.fragment"),tm=Object.prototype.hasOwnProperty,nm=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rm={key:!0,ref:!0,__self:!0,__source:!0};function Gc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)tm.call(t,r)&&!rm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:qp,type:e,key:i,ref:l,props:o,_owner:nm.current}}xi.Fragment=em;xi.jsx=Gc;xi.jsxs=Gc;Ac.exports=xi;var h=Ac.exports,Ll={},Yc={exports:{}},Ze={},Xc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,M){var A=C.length;C.push(M);e:for(;0<A;){var J=A-1>>>1,T=C[J];if(0<o(T,M))C[J]=M,C[A]=T,A=J;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var M=C[0],A=C.pop();if(A!==M){C[0]=A;e:for(var J=0,T=C.length,N=T>>>1;J<N;){var I=2*(J+1)-1,D=C[I],g=I+1,U=C[g];if(0>o(D,A))g<T&&0>o(U,D)?(C[J]=U,C[g]=A,J=g):(C[J]=D,C[I]=A,J=I);else if(g<T&&0>o(U,A))C[J]=U,C[g]=A,J=g;else break e}}return M}function o(C,M){var A=C.sortIndex-M.sortIndex;return A!==0?A:C.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,m=null,v=3,w=!1,x=!1,S=!1,z=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=C)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function y(C){if(S=!1,f(C),!x)if(n(s)!==null)x=!0,_t(k);else{var M=n(u);M!==null&&Me(y,M.startTime-C)}}function k(C,M){x=!1,S&&(S=!1,d(O),O=-1),w=!0;var A=v;try{for(f(M),m=n(s);m!==null&&(!(m.expirationTime>M)||C&&!pe());){var J=m.callback;if(typeof J=="function"){m.callback=null,v=m.priorityLevel;var T=J(m.expirationTime<=M);M=e.unstable_now(),typeof T=="function"?m.callback=T:m===n(s)&&r(s),f(M)}else r(s);m=n(s)}if(m!==null)var N=!0;else{var I=n(u);I!==null&&Me(y,I.startTime-M),N=!1}return N}finally{m=null,v=A,w=!1}}var _=!1,P=null,O=-1,H=5,R=-1;function pe(){return!(e.unstable_now()-R<H)}function ue(){if(P!==null){var C=e.unstable_now();R=C;var M=!0;try{M=P(!0,C)}finally{M?ge():(_=!1,P=null)}}else _=!1}var ge;if(typeof c=="function")ge=function(){c(ue)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,we=ze.port2;ze.port1.onmessage=ue,ge=function(){we.postMessage(null)}}else ge=function(){z(ue,0)};function _t(C){P=C,_||(_=!0,ge())}function Me(C,M){O=z(function(){C(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,_t(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(v){case 1:case 2:case 3:var M=3;break;default:M=v}var A=v;v=M;try{return C()}finally{v=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,M){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=v;v=C;try{return M()}finally{v=A}},e.unstable_scheduleCallback=function(C,M,A){var J=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?J+A:J):A=J,C){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=A+T,C={id:p++,callback:M,priorityLevel:C,startTime:A,expirationTime:T,sortIndex:-1},A>J?(C.sortIndex=A,t(u,C),n(s)===null&&C===n(u)&&(S?(d(O),O=-1):S=!0,Me(y,A-J))):(C.sortIndex=T,t(s,C),x||w||(x=!0,_t(k))),C},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(C){var M=v;return function(){var A=v;v=M;try{return C.apply(this,arguments)}finally{v=A}}}})(Kc);Xc.exports=Kc;var om=Xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=Z,Je=om;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jc=new Set,jr={};function kn(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(jr[e]=t,e=0;e<t.length;e++)Jc.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rl=Object.prototype.hasOwnProperty,lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gs={},Ys={};function am(e){return Rl.call(Ys,e)?!0:Rl.call(Gs,e)?!1:lm.test(e)?Ys[e]=!0:(Gs[e]=!0,!1)}function sm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function um(e,t,n,r){if(t===null||typeof t>"u"||sm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ma=/[\-:]([a-z])/g;function Aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ma,Aa);Oe[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ma,Aa);Oe[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ma,Aa);Oe[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Da(e,t,n,r){var o=Oe.hasOwnProperty(t)?Oe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(um(t,n,o,r)&&(n=null),r||o===null?am(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),ba=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),Fa=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Ha=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),ed=Symbol.for("react.offscreen"),Xs=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,tl;function pr(e){if(tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var nl=!1;function rl(e,t){if(!e||nl)return"";nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pr(e):""}function cm(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pn:return"Fragment";case Cn:return"Portal";case $l:return"Profiler";case ba:return"StrictMode";case Ml:return"Suspense";case Al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qc:return(e.displayName||"Context")+".Consumer";case Zc:return(e._context.displayName||"Context")+".Provider";case Fa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ha:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function td(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fm(e){var t=td(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){e._valueTracker||(e._valueTracker=fm(e))}function nd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=td(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ks(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rd(e,t){t=t.checked,t!=null&&Da(e,"checked",t,!1)}function Fl(e,t){rd(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hl(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Js(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hl(e,t,n){(t!=="number"||Vo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(mr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function od(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?id(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pm=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function ad(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function sd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ad(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var mm=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(mm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function Ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,bn=null,Fn=null;function eu(e){if(e=Yr(e)){if(typeof Gl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=_i(t),Gl(e.stateNode,e.type,t))}}function ud(e){bn?Fn?Fn.push(e):Fn=[e]:bn=e}function cd(){if(bn){var e=bn,t=Fn;if(Fn=bn=null,eu(e),t)for(e=0;e<t.length;e++)eu(t[e])}}function dd(e,t){return e(t)}function fd(){}var ol=!1;function pd(e,t,n){if(ol)return e(t,n);ol=!0;try{return dd(e,t,n)}finally{ol=!1,(bn!==null||Fn!==null)&&(fd(),cd())}}function Or(e,t){var n=e.stateNode;if(n===null)return null;var r=_i(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Yl=!1;if(zt)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Yl=!1}function hm(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var yr=!1,Qo=null,Go=!1,Xl=null,vm={onError:function(e){yr=!0,Qo=e}};function gm(e,t,n,r,o,i,l,a,s){yr=!1,Qo=null,hm.apply(vm,arguments)}function ym(e,t,n,r,o,i,l,a,s){if(gm.apply(this,arguments),yr){if(yr){var u=Qo;yr=!1,Qo=null}else throw Error(E(198));Go||(Go=!0,Xl=u)}}function En(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function md(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tu(e){if(En(e)!==e)throw Error(E(188))}function xm(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return tu(o),e;if(i===r)return tu(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function hd(e){return e=xm(e),e!==null?vd(e):null}function vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vd(e);if(t!==null)return t;e=e.sibling}return null}var gd=Je.unstable_scheduleCallback,nu=Je.unstable_cancelCallback,wm=Je.unstable_shouldYield,Sm=Je.unstable_requestPaint,he=Je.unstable_now,km=Je.unstable_getCurrentPriorityLevel,Ua=Je.unstable_ImmediatePriority,yd=Je.unstable_UserBlockingPriority,Yo=Je.unstable_NormalPriority,Em=Je.unstable_LowPriority,xd=Je.unstable_IdlePriority,wi=null,St=null;function _m(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:jm,Cm=Math.log,Pm=Math.LN2;function jm(e){return e>>>=0,e===0?32:31-(Cm(e)/Pm|0)|0}var uo=64,co=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=hr(a):(i&=l,i!==0&&(r=hr(i)))}else l=n&~o,l!==0?r=hr(l):i!==0&&(r=hr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),o=1<<n,r|=e[n],t&=~o;return r}function Tm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Om(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-mt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Tm(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wd(){var e=uo;return uo<<=1,!(uo&4194240)&&(uo=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function zm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-mt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function Sd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kd,Va,Ed,_d,Cd,Jl=!1,fo=[],Vt=null,Qt=null,Gt=null,zr=new Map,Nr=new Map,Ht=[],Nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ru(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function ar(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Yr(t),t!==null&&Va(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Im(e,t,n,r,o){switch(t){case"focusin":return Vt=ar(Vt,e,t,n,r,o),!0;case"dragenter":return Qt=ar(Qt,e,t,n,r,o),!0;case"mouseover":return Gt=ar(Gt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return zr.set(i,ar(zr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Nr.set(i,ar(Nr.get(i)||null,e,t,n,r,o)),!0}return!1}function Pd(e){var t=cn(e.target);if(t!==null){var n=En(t);if(n!==null){if(t=n.tag,t===13){if(t=md(n),t!==null){e.blockedOn=t,Cd(e.priority,function(){Ed(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=Yr(n),t!==null&&Va(t),e.blockedOn=n,!1;t.shift()}return!0}function ou(e,t,n){Lo(e)&&n.delete(t)}function Lm(){Jl=!1,Vt!==null&&Lo(Vt)&&(Vt=null),Qt!==null&&Lo(Qt)&&(Qt=null),Gt!==null&&Lo(Gt)&&(Gt=null),zr.forEach(ou),Nr.forEach(ou)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Lm)))}function Ir(e){function t(o){return sr(o,e)}if(0<fo.length){sr(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&sr(Vt,e),Qt!==null&&sr(Qt,e),Gt!==null&&sr(Gt,e),zr.forEach(t),Nr.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Pd(n),n.blockedOn===null&&Ht.shift()}var Hn=Rt.ReactCurrentBatchConfig,Ko=!0;function Rm(e,t,n,r){var o=X,i=Hn.transition;Hn.transition=null;try{X=1,Qa(e,t,n,r)}finally{X=o,Hn.transition=i}}function $m(e,t,n,r){var o=X,i=Hn.transition;Hn.transition=null;try{X=4,Qa(e,t,n,r)}finally{X=o,Hn.transition=i}}function Qa(e,t,n,r){if(Ko){var o=Zl(e,t,n,r);if(o===null)hl(e,t,r,Jo,n),ru(e,r);else if(Im(o,e,t,n,r))r.stopPropagation();else if(ru(e,r),t&4&&-1<Nm.indexOf(e)){for(;o!==null;){var i=Yr(o);if(i!==null&&kd(i),i=Zl(e,t,n,r),i===null&&hl(e,t,r,Jo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Jo=null;function Zl(e,t,n,r){if(Jo=null,e=Ba(r),e=cn(e),e!==null)if(t=En(e),t===null)e=null;else if(n=t.tag,n===13){if(e=md(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jo=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(km()){case Ua:return 1;case yd:return 4;case Yo:case Em:return 16;case xd:return 536870912;default:return 16}default:return 16}}var Ut=null,Ga=null,Ro=null;function Td(){if(Ro)return Ro;var e,t=Ga,n=t.length,r,o="value"in Ut?Ut.value:Ut.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Ro=o.slice(e,1<r?1-r:void 0)}function $o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function iu(){return!1}function qe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?po:iu,this.isPropagationStopped=iu,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ya=qe(er),Gr=se({},er,{view:0,detail:0}),Mm=qe(Gr),ll,al,ur,Si=se({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(ll=e.screenX-ur.screenX,al=e.screenY-ur.screenY):al=ll=0,ur=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:al}}),lu=qe(Si),Am=se({},Si,{dataTransfer:0}),Dm=qe(Am),bm=se({},Gr,{relatedTarget:0}),sl=qe(bm),Fm=se({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Hm=qe(Fm),Bm=se({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Um=qe(Bm),Wm=se({},er,{data:0}),au=qe(Wm),Vm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gm[e])?!!t[e]:!1}function Xa(){return Ym}var Xm=se({},Gr,{key:function(e){if(e.key){var t=Vm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xa,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Km=qe(Xm),Jm=se({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=qe(Jm),Zm=se({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xa}),qm=qe(Zm),eh=se({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=qe(eh),nh=se({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rh=qe(nh),oh=[9,13,27,32],Ka=zt&&"CompositionEvent"in window,xr=null;zt&&"documentMode"in document&&(xr=document.documentMode);var ih=zt&&"TextEvent"in window&&!xr,Od=zt&&(!Ka||xr&&8<xr&&11>=xr),uu=" ",cu=!1;function zd(e,t){switch(e){case"keyup":return oh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function lh(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(cu=!0,uu);case"textInput":return e=t.data,e===uu&&cu?null:e;default:return null}}function ah(e,t){if(jn)return e==="compositionend"||!Ka&&zd(e,t)?(e=Td(),Ro=Ga=Ut=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Od&&t.locale!=="ko"?null:t.data;default:return null}}var sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sh[e.type]:t==="textarea"}function Id(e,t,n,r){ud(r),t=Zo(t,"onChange"),0<t.length&&(n=new Ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Lr=null;function uh(e){Ud(e,0)}function ki(e){var t=zn(e);if(nd(t))return e}function ch(e,t){if(e==="change")return t}var Ld=!1;if(zt){var ul;if(zt){var cl="oninput"in document;if(!cl){var fu=document.createElement("div");fu.setAttribute("oninput","return;"),cl=typeof fu.oninput=="function"}ul=cl}else ul=!1;Ld=ul&&(!document.documentMode||9<document.documentMode)}function pu(){wr&&(wr.detachEvent("onpropertychange",Rd),Lr=wr=null)}function Rd(e){if(e.propertyName==="value"&&ki(Lr)){var t=[];Id(t,Lr,e,Ba(e)),pd(uh,t)}}function dh(e,t,n){e==="focusin"?(pu(),wr=t,Lr=n,wr.attachEvent("onpropertychange",Rd)):e==="focusout"&&pu()}function fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Lr)}function ph(e,t){if(e==="click")return ki(t)}function mh(e,t){if(e==="input"||e==="change")return ki(t)}function hh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:hh;function Rr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Rl.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hu(e,t){var n=mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mu(n)}}function $d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Md(){for(var e=window,t=Vo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vo(e.document)}return t}function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vh(e){var t=Md(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$d(n.ownerDocument.documentElement,n)){if(r!==null&&Ja(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=hu(n,i);var l=hu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gh=zt&&"documentMode"in document&&11>=document.documentMode,Tn=null,ql=null,Sr=null,ea=!1;function vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ea||Tn==null||Tn!==Vo(r)||(r=Tn,"selectionStart"in r&&Ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Rr(Sr,r)||(Sr=r,r=Zo(ql,"onSelect"),0<r.length&&(t=new Ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},dl={},Ad={};zt&&(Ad=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Ei(e){if(dl[e])return dl[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ad)return dl[e]=t[n];return e}var Dd=Ei("animationend"),bd=Ei("animationiteration"),Fd=Ei("animationstart"),Hd=Ei("transitionend"),Bd=new Map,gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Bd.set(e,t),kn(t,[e])}for(var fl=0;fl<gu.length;fl++){var pl=gu[fl],yh=pl.toLowerCase(),xh=pl[0].toUpperCase()+pl.slice(1);rn(yh,"on"+xh)}rn(Dd,"onAnimationEnd");rn(bd,"onAnimationIteration");rn(Fd,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(Hd,"onTransitionEnd");Wn("onMouseEnter",["mouseout","mouseover"]);Wn("onMouseLeave",["mouseout","mouseover"]);Wn("onPointerEnter",["pointerout","pointerover"]);Wn("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wh=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function yu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ym(r,t,void 0,e),e.currentTarget=null}function Ud(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;yu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;yu(o,a,u),i=s}}}if(Go)throw e=Xl,Go=!1,Xl=null,e}function ee(e,t){var n=t[ia];n===void 0&&(n=t[ia]=new Set);var r=e+"__bubble";n.has(r)||(Wd(t,e,2,!1),n.add(r))}function ml(e,t,n){var r=0;t&&(r|=4),Wd(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[ho]){e[ho]=!0,Jc.forEach(function(n){n!=="selectionchange"&&(wh.has(n)||ml(n,!1,e),ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,ml("selectionchange",!1,t))}}function Wd(e,t,n,r){switch(jd(t)){case 1:var o=Rm;break;case 4:o=$m;break;default:o=Qa}n=o.bind(null,t,n,e),o=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=cn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}pd(function(){var u=i,p=Ba(n),m=[];e:{var v=Bd.get(e);if(v!==void 0){var w=Ya,x=e;switch(e){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":w=Km;break;case"focusin":x="focus",w=sl;break;case"focusout":x="blur",w=sl;break;case"beforeblur":case"afterblur":w=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=qm;break;case Dd:case bd:case Fd:w=Hm;break;case Hd:w=th;break;case"scroll":w=Mm;break;case"wheel":w=rh;break;case"copy":case"cut":case"paste":w=Um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=su}var S=(t&4)!==0,z=!S&&e==="scroll",d=S?v!==null?v+"Capture":null:v;S=[];for(var c=u,f;c!==null;){f=c;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Or(c,d),y!=null&&S.push(Mr(c,y,f)))),z)break;c=c.return}0<S.length&&(v=new w(v,x,null,n,p),m.push({event:v,listeners:S}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",v&&n!==Ql&&(x=n.relatedTarget||n.fromElement)&&(cn(x)||x[Nt]))break e;if((w||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?cn(x):null,x!==null&&(z=En(x),x!==z||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(S=lu,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=su,y="onPointerLeave",d="onPointerEnter",c="pointer"),z=w==null?v:zn(w),f=x==null?v:zn(x),v=new S(y,c+"leave",w,n,p),v.target=z,v.relatedTarget=f,y=null,cn(p)===u&&(S=new S(d,c+"enter",x,n,p),S.target=f,S.relatedTarget=z,y=S),z=y,w&&x)t:{for(S=w,d=x,c=0,f=S;f;f=_n(f))c++;for(f=0,y=d;y;y=_n(y))f++;for(;0<c-f;)S=_n(S),c--;for(;0<f-c;)d=_n(d),f--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break t;S=_n(S),d=_n(d)}S=null}else S=null;w!==null&&xu(m,v,w,S,!1),x!==null&&z!==null&&xu(m,z,x,S,!0)}}e:{if(v=u?zn(u):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var k=ch;else if(du(v))if(Ld)k=mh;else{k=fh;var _=dh}else(w=v.nodeName)&&w.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=ph);if(k&&(k=k(e,u))){Id(m,k,n,p);break e}_&&_(e,v,u),e==="focusout"&&(_=v._wrapperState)&&_.controlled&&v.type==="number"&&Hl(v,"number",v.value)}switch(_=u?zn(u):window,e){case"focusin":(du(_)||_.contentEditable==="true")&&(Tn=_,ql=u,Sr=null);break;case"focusout":Sr=ql=Tn=null;break;case"mousedown":ea=!0;break;case"contextmenu":case"mouseup":case"dragend":ea=!1,vu(m,n,p);break;case"selectionchange":if(gh)break;case"keydown":case"keyup":vu(m,n,p)}var P;if(Ka)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else jn?zd(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Od&&n.locale!=="ko"&&(jn||O!=="onCompositionStart"?O==="onCompositionEnd"&&jn&&(P=Td()):(Ut=p,Ga="value"in Ut?Ut.value:Ut.textContent,jn=!0)),_=Zo(u,O),0<_.length&&(O=new au(O,e,null,n,p),m.push({event:O,listeners:_}),P?O.data=P:(P=Nd(n),P!==null&&(O.data=P)))),(P=ih?lh(e,n):ah(e,n))&&(u=Zo(u,"onBeforeInput"),0<u.length&&(p=new au("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=P))}Ud(m,t)})}function Mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Or(e,n),i!=null&&r.unshift(Mr(e,i,o)),i=Or(e,t),i!=null&&r.push(Mr(e,i,o))),e=e.return}return r}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Or(n,i),s!=null&&l.unshift(Mr(n,s,a))):o||(s=Or(n,i),s!=null&&l.push(Mr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Sh=/\r\n?/g,kh=/\u0000|\uFFFD/g;function wu(e){return(typeof e=="string"?e:""+e).replace(Sh,`
`).replace(kh,"")}function vo(e,t,n){if(t=wu(t),wu(e)!==t&&n)throw Error(E(425))}function qo(){}var ta=null,na=null;function ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,Eh=typeof clearTimeout=="function"?clearTimeout:void 0,Su=typeof Promise=="function"?Promise:void 0,_h=typeof queueMicrotask=="function"?queueMicrotask:typeof Su<"u"?function(e){return Su.resolve(null).then(e).catch(Ch)}:oa;function Ch(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ir(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),wt="__reactFiber$"+tr,Ar="__reactProps$"+tr,Nt="__reactContainer$"+tr,ia="__reactEvents$"+tr,Ph="__reactListeners$"+tr,jh="__reactHandles$"+tr;function cn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ku(e);e!==null;){if(n=e[wt])return n;e=ku(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){return e=e[wt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function _i(e){return e[Ar]||null}var la=[],Nn=-1;function on(e){return{current:e}}function te(e){0>Nn||(e.current=la[Nn],la[Nn]=null,Nn--)}function q(e,t){Nn++,la[Nn]=e.current,e.current=t}var nn={},$e=on(nn),Ve=on(!1),hn=nn;function Vn(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function ei(){te(Ve),te($e)}function Eu(e,t,n){if($e.current!==nn)throw Error(E(168));q($e,t),q(Ve,n)}function Vd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,dm(e)||"Unknown",o));return se({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,hn=$e.current,q($e,e),q(Ve,Ve.current),!0}function _u(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Vd(e,t,hn),r.__reactInternalMemoizedMergedChildContext=e,te(Ve),te($e),q($e,e)):te(Ve),q(Ve,n)}var Pt=null,Ci=!1,gl=!1;function Qd(e){Pt===null?Pt=[e]:Pt.push(e)}function Th(e){Ci=!0,Qd(e)}function ln(){if(!gl&&Pt!==null){gl=!0;var e=0,t=X;try{var n=Pt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,Ci=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),gd(Ua,ln),o}finally{X=t,gl=!1}}return null}var In=[],Ln=0,ni=null,ri=0,nt=[],rt=0,vn=null,jt=1,Tt="";function sn(e,t){In[Ln++]=ri,In[Ln++]=ni,ni=e,ri=t}function Gd(e,t,n){nt[rt++]=jt,nt[rt++]=Tt,nt[rt++]=vn,vn=e;var r=jt;e=Tt;var o=32-mt(r)-1;r&=~(1<<o),n+=1;var i=32-mt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,jt=1<<32-mt(t)+o|n<<o|r,Tt=i+e}else jt=1<<i|n<<o|r,Tt=e}function Za(e){e.return!==null&&(sn(e,1),Gd(e,1,0))}function qa(e){for(;e===ni;)ni=In[--Ln],In[Ln]=null,ri=In[--Ln],In[Ln]=null;for(;e===vn;)vn=nt[--rt],nt[rt]=null,Tt=nt[--rt],nt[rt]=null,jt=nt[--rt],nt[rt]=null}var Ke=null,Xe=null,re=!1,ft=null;function Yd(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Xe=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:jt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Xe=null,!0):!1;default:return!1}}function aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sa(e){if(re){var t=Xe;if(t){var n=t;if(!Cu(e,t)){if(aa(e))throw Error(E(418));t=Yt(n.nextSibling);var r=Ke;t&&Cu(e,t)?Yd(r,n):(e.flags=e.flags&-4097|2,re=!1,Ke=e)}}else{if(aa(e))throw Error(E(418));e.flags=e.flags&-4097|2,re=!1,Ke=e}}}function Pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function go(e){if(e!==Ke)return!1;if(!re)return Pu(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ra(e.type,e.memoizedProps)),t&&(t=Xe)){if(aa(e))throw Xd(),Error(E(418));for(;t;)Yd(e,t),t=Yt(t.nextSibling)}if(Pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ke?Yt(e.stateNode.nextSibling):null;return!0}function Xd(){for(var e=Xe;e;)e=Yt(e.nextSibling)}function Qn(){Xe=Ke=null,re=!1}function es(e){ft===null?ft=[e]:ft.push(e)}var Oh=Rt.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ju(e){var t=e._init;return t(e._payload)}function Kd(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Zt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,y){return c===null||c.tag!==6?(c=_l(f,d.mode,y),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,y){var k=f.type;return k===Pn?p(d,c,f.props.children,y,f.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===bt&&ju(k)===c.type)?(y=o(c,f.props),y.ref=cr(d,c,f),y.return=d,y):(y=Bo(f.type,f.key,f.props,null,d.mode,y),y.ref=cr(d,c,f),y.return=d,y)}function u(d,c,f,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Cl(f,d.mode,y),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function p(d,c,f,y,k){return c===null||c.tag!==7?(c=mn(f,d.mode,y,k),c.return=d,c):(c=o(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=_l(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lo:return f=Bo(c.type,c.key,c.props,null,d.mode,f),f.ref=cr(d,null,c),f.return=d,f;case Cn:return c=Cl(c,d.mode,f),c.return=d,c;case bt:var y=c._init;return m(d,y(c._payload),f)}if(mr(c)||ir(c))return c=mn(c,d.mode,f,null),c.return=d,c;yo(d,c)}return null}function v(d,c,f,y){var k=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:a(d,c,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case lo:return f.key===k?s(d,c,f,y):null;case Cn:return f.key===k?u(d,c,f,y):null;case bt:return k=f._init,v(d,c,k(f._payload),y)}if(mr(f)||ir(f))return k!==null?null:p(d,c,f,y,null);yo(d,f)}return null}function w(d,c,f,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,a(c,d,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lo:return d=d.get(y.key===null?f:y.key)||null,s(c,d,y,k);case Cn:return d=d.get(y.key===null?f:y.key)||null,u(c,d,y,k);case bt:var _=y._init;return w(d,c,f,_(y._payload),k)}if(mr(y)||ir(y))return d=d.get(f)||null,p(c,d,y,k,null);yo(c,y)}return null}function x(d,c,f,y){for(var k=null,_=null,P=c,O=c=0,H=null;P!==null&&O<f.length;O++){P.index>O?(H=P,P=null):H=P.sibling;var R=v(d,P,f[O],y);if(R===null){P===null&&(P=H);break}e&&P&&R.alternate===null&&t(d,P),c=i(R,c,O),_===null?k=R:_.sibling=R,_=R,P=H}if(O===f.length)return n(d,P),re&&sn(d,O),k;if(P===null){for(;O<f.length;O++)P=m(d,f[O],y),P!==null&&(c=i(P,c,O),_===null?k=P:_.sibling=P,_=P);return re&&sn(d,O),k}for(P=r(d,P);O<f.length;O++)H=w(P,d,O,f[O],y),H!==null&&(e&&H.alternate!==null&&P.delete(H.key===null?O:H.key),c=i(H,c,O),_===null?k=H:_.sibling=H,_=H);return e&&P.forEach(function(pe){return t(d,pe)}),re&&sn(d,O),k}function S(d,c,f,y){var k=ir(f);if(typeof k!="function")throw Error(E(150));if(f=k.call(f),f==null)throw Error(E(151));for(var _=k=null,P=c,O=c=0,H=null,R=f.next();P!==null&&!R.done;O++,R=f.next()){P.index>O?(H=P,P=null):H=P.sibling;var pe=v(d,P,R.value,y);if(pe===null){P===null&&(P=H);break}e&&P&&pe.alternate===null&&t(d,P),c=i(pe,c,O),_===null?k=pe:_.sibling=pe,_=pe,P=H}if(R.done)return n(d,P),re&&sn(d,O),k;if(P===null){for(;!R.done;O++,R=f.next())R=m(d,R.value,y),R!==null&&(c=i(R,c,O),_===null?k=R:_.sibling=R,_=R);return re&&sn(d,O),k}for(P=r(d,P);!R.done;O++,R=f.next())R=w(P,d,O,R.value,y),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?O:R.key),c=i(R,c,O),_===null?k=R:_.sibling=R,_=R);return e&&P.forEach(function(ue){return t(d,ue)}),re&&sn(d,O),k}function z(d,c,f,y){if(typeof f=="object"&&f!==null&&f.type===Pn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case lo:e:{for(var k=f.key,_=c;_!==null;){if(_.key===k){if(k=f.type,k===Pn){if(_.tag===7){n(d,_.sibling),c=o(_,f.props.children),c.return=d,d=c;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===bt&&ju(k)===_.type){n(d,_.sibling),c=o(_,f.props),c.ref=cr(d,_,f),c.return=d,d=c;break e}n(d,_);break}else t(d,_);_=_.sibling}f.type===Pn?(c=mn(f.props.children,d.mode,y,f.key),c.return=d,d=c):(y=Bo(f.type,f.key,f.props,null,d.mode,y),y.ref=cr(d,c,f),y.return=d,d=y)}return l(d);case Cn:e:{for(_=f.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Cl(f,d.mode,y),c.return=d,d=c}return l(d);case bt:return _=f._init,z(d,c,_(f._payload),y)}if(mr(f))return x(d,c,f,y);if(ir(f))return S(d,c,f,y);yo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=_l(f,d.mode,y),c.return=d,d=c),l(d)):n(d,c)}return z}var Gn=Kd(!0),Jd=Kd(!1),oi=on(null),ii=null,Rn=null,ts=null;function ns(){ts=Rn=ii=null}function rs(e){var t=oi.current;te(oi),e._currentValue=t}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){ii=e,ts=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(ts!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(ii===null)throw Error(E(308));Rn=e,ii.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var dn=null;function os(e){dn===null?dn=[e]:dn.push(e)}function Zd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,os(t)):(n.next=o.next,o.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,It(e,n)}return o=r.interleaved,o===null?(t.next=t,os(r)):(t.next=o.next,o.next=t),r.interleaved=t,It(e,n)}function Mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}function Tu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function li(e,t,n,r){var o=e.updateQueue;Ft=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;l=0,p=u=s=null,a=i;do{var v=a.lane,w=a.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,S=a;switch(v=t,w=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){m=x.call(w,m,v);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,v=typeof x=="function"?x.call(w,m,v):x,v==null)break e;m=se({},m,v);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[a]:v.push(a))}else w={eventTime:w,lane:v,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=w,s=m):p=p.next=w,l|=v;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;v=a,a=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);yn|=l,e.lanes=l,e.memoizedState=m}}function Ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Xr={},kt=on(Xr),Dr=on(Xr),br=on(Xr);function fn(e){if(e===Xr)throw Error(E(174));return e}function ls(e,t){switch(q(br,t),q(Dr,e),q(kt,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}te(kt),q(kt,t)}function Yn(){te(kt),te(Dr),te(br)}function ef(e){fn(br.current);var t=fn(kt.current),n=Ul(t,e.type);t!==n&&(q(Dr,e),q(kt,n))}function as(e){Dr.current===e&&(te(kt),te(Dr))}var le=on(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yl=[];function ss(){for(var e=0;e<yl.length;e++)yl[e]._workInProgressVersionPrimary=null;yl.length=0}var Ao=Rt.ReactCurrentDispatcher,xl=Rt.ReactCurrentBatchConfig,gn=0,ae=null,ye=null,Se=null,si=!1,kr=!1,Fr=0,zh=0;function Ie(){throw Error(E(321))}function us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function cs(e,t,n,r,o,i){if(gn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ao.current=e===null||e.memoizedState===null?Rh:$h,e=n(r,o),kr){i=0;do{if(kr=!1,Fr=0,25<=i)throw Error(E(301));i+=1,Se=ye=null,t.updateQueue=null,Ao.current=Mh,e=n(r,o)}while(kr)}if(Ao.current=ui,t=ye!==null&&ye.next!==null,gn=0,Se=ye=ae=null,si=!1,t)throw Error(E(300));return e}function ds(){var e=Fr!==0;return Fr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=e:Se=Se.next=e,Se}function at(){if(ye===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?ae.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(E(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?ae.memoizedState=Se=e:Se=Se.next=e}return Se}function Hr(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=at(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ye,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((gn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,ae.lanes|=p,yn|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,vt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,yn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=at(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);vt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function tf(){}function nf(e,t){var n=ae,r=at(),o=t(),i=!vt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,fs(lf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Br(9,of.bind(null,n,r,o,t),void 0,null),ke===null)throw Error(E(349));gn&30||rf(n,t,o)}return o}function rf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function of(e,t,n,r){t.value=n,t.getSnapshot=r,af(t)&&sf(e)}function lf(e,t,n){return n(function(){af(t)&&sf(e)})}function af(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function sf(e){var t=It(e,1);t!==null&&ht(t,e,1,-1)}function zu(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=Lh.bind(null,ae,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function uf(){return at().memoizedState}function Do(e,t,n,r){var o=yt();ae.flags|=e,o.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function Pi(e,t,n,r){var o=at();r=r===void 0?null:r;var i=void 0;if(ye!==null){var l=ye.memoizedState;if(i=l.destroy,r!==null&&us(r,l.deps)){o.memoizedState=Br(t,n,i,r);return}}ae.flags|=e,o.memoizedState=Br(1|t,n,i,r)}function Nu(e,t){return Do(8390656,8,e,t)}function fs(e,t){return Pi(2048,8,e,t)}function cf(e,t){return Pi(4,2,e,t)}function df(e,t){return Pi(4,4,e,t)}function ff(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pf(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4,4,ff.bind(null,t,e),n)}function ps(){}function mf(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&us(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hf(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&us(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vf(e,t,n){return gn&21?(vt(n,t)||(n=wd(),ae.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function Nh(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=xl.transition;xl.transition={};try{e(!1),t()}finally{X=n,xl.transition=r}}function gf(){return at().memoizedState}function Ih(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yf(e))xf(t,n);else if(n=Zd(e,t,n,r),n!==null){var o=De();ht(n,e,r,o),wf(n,t,r)}}function Lh(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yf(e))xf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,vt(a,l)){var s=t.interleaved;s===null?(o.next=o,os(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Zd(e,t,o,r),n!==null&&(o=De(),ht(n,e,r,o),wf(n,t,r))}}function yf(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function xf(e,t){kr=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wa(e,n)}}var ui={readContext:lt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Rh={readContext:lt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Do(4194308,4,ff.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ih.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:ps,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=Nh.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=yt();if(re){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ke===null)throw Error(E(349));gn&30||rf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Nu(lf.bind(null,r,i,e),[e]),r.flags|=2048,Br(9,of.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yt(),t=ke.identifierPrefix;if(re){var n=Tt,r=jt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$h={readContext:lt,useCallback:mf,useContext:lt,useEffect:fs,useImperativeHandle:pf,useInsertionEffect:cf,useLayoutEffect:df,useMemo:hf,useReducer:wl,useRef:uf,useState:function(){return wl(Hr)},useDebugValue:ps,useDeferredValue:function(e){var t=at();return vf(t,ye.memoizedState,e)},useTransition:function(){var e=wl(Hr)[0],t=at().memoizedState;return[e,t]},useMutableSource:tf,useSyncExternalStore:nf,useId:gf,unstable_isNewReconciler:!1},Mh={readContext:lt,useCallback:mf,useContext:lt,useEffect:fs,useImperativeHandle:pf,useInsertionEffect:cf,useLayoutEffect:df,useMemo:hf,useReducer:Sl,useRef:uf,useState:function(){return Sl(Hr)},useDebugValue:ps,useDeferredValue:function(e){var t=at();return ye===null?t.memoizedState=e:vf(t,ye.memoizedState,e)},useTransition:function(){var e=Sl(Hr)[0],t=at().memoizedState;return[e,t]},useMutableSource:tf,useSyncExternalStore:nf,useId:gf,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ji={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),o=Jt(e),i=Ot(r,o);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(ht(t,e,o,r),Mo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),o=Jt(e),i=Ot(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,o),t!==null&&(ht(t,e,o,r),Mo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=Jt(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xt(e,o,r),t!==null&&(ht(t,e,r,n),Mo(t,e,r))}};function Iu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(o,i):!0}function Sf(e,t,n){var r=!1,o=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=lt(i):(o=Qe(t)?hn:$e.current,r=t.contextTypes,i=(r=r!=null)?Vn(e,o):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ji,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ji.enqueueReplaceState(t,t.state,null)}function da(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},is(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=lt(i):(i=Qe(t)?hn:$e.current,o.context=Vn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ca(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ji.enqueueReplaceState(o,o.state,null),li(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=cm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ah=typeof WeakMap=="function"?WeakMap:Map;function kf(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){di||(di=!0,ka=r),fa(e,t)},n}function Ef(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){fa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){fa(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ah;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Jh.bind(null,e,t,n),t.then(e,e))}function $u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e)}var Dh=Rt.ReactCurrentOwner,Ue=!1;function Ae(e,t,n,r){t.child=e===null?Jd(t,null,n,r):Gn(t,e.child,n,r)}function Au(e,t,n,r,o){n=n.render;var i=t.ref;return Bn(t,o),r=cs(e,t,n,r,i,o),n=ds(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(re&&n&&Za(t),t.flags|=1,Ae(e,t,r,o),t.child)}function Du(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ss(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,_f(e,t,i,r,o)):(e=Bo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(l,r)&&e.ref===t.ref)return Lt(e,t,o)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function _f(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Rr(i,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Lt(e,t,o)}return pa(e,t,n,r,o)}function Cf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Mn,Ye),Ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Mn,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(Mn,Ye),Ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(Mn,Ye),Ye|=r;return Ae(e,t,o,n),t.child}function Pf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pa(e,t,n,r,o){var i=Qe(n)?hn:$e.current;return i=Vn(t,i),Bn(t,o),n=cs(e,t,n,r,i,o),r=ds(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(re&&r&&Za(t),t.flags|=1,Ae(e,t,n,o),t.child)}function bu(e,t,n,r,o){if(Qe(n)){var i=!0;ti(t)}else i=!1;if(Bn(t,o),t.stateNode===null)bo(e,t),Sf(t,n,r),da(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=Qe(n)?hn:$e.current,u=Vn(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Lu(t,l,r,u),Ft=!1;var v=t.memoizedState;l.state=v,li(t,r,l,o),s=t.memoizedState,a!==r||v!==s||Ve.current||Ft?(typeof p=="function"&&(ca(t,n,p,r),s=t.memoizedState),(a=Ft||Iu(t,n,a,r,v,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,qd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ct(t.type,a),l.props=u,m=t.pendingProps,v=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=lt(s):(s=Qe(n)?hn:$e.current,s=Vn(t,s));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||v!==s)&&Lu(t,l,r,s),Ft=!1,v=t.memoizedState,l.state=v,li(t,r,l,o);var x=t.memoizedState;a!==m||v!==x||Ve.current||Ft?(typeof w=="function"&&(ca(t,n,w,r),x=t.memoizedState),(u=Ft||Iu(t,n,u,r,v,x,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return ma(e,t,n,r,i,o)}function ma(e,t,n,r,o,i){Pf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&_u(t,n,!1),Lt(e,t,i);r=t.stateNode,Dh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,a,i)):Ae(e,t,a,i),t.memoizedState=r.state,o&&_u(t,n,!0),t.child}function jf(e){var t=e.stateNode;t.pendingContext?Eu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eu(e,t.context,!1),ls(e,t.containerInfo)}function Fu(e,t,n,r,o){return Qn(),es(o),t.flags|=256,Ae(e,t,n,r),t.child}var ha={dehydrated:null,treeContext:null,retryLane:0};function va(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tf(e,t,n){var r=t.pendingProps,o=le.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(le,o&1),e===null)return sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=zi(l,r,0,null),e=mn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=va(n),t.memoizedState=ha,e):ms(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return bh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Zt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Zt(a,i):(i=mn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?va(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ha,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ms(e,t){return t=zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&es(r),Gn(t,e.child,null,n),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(E(422))),xo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=zi({mode:"visible",children:r.children},o,0,null),i=mn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Gn(t,e.child,null,l),t.child.memoizedState=va(l),t.memoizedState=ha,i);if(!(t.mode&1))return xo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=kl(i,r,void 0),xo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ue||a){if(r=ke,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,It(e,o),ht(r,e,o,-1))}return ws(),r=kl(Error(E(421))),xo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Zh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Xe=Yt(o.nextSibling),Ke=t,re=!0,ft=null,e!==null&&(nt[rt++]=jt,nt[rt++]=Tt,nt[rt++]=vn,jt=e.id,Tt=e.overflow,vn=t),t=ms(t,r.children),t.flags|=4096,t)}function Hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function El(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Of(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ae(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hu(e,n,t);else if(e.tag===19)Hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(le,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),El(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ai(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}El(t,!0,n,null,i);break;case"together":El(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fh(e,t,n){switch(t.tag){case 3:jf(t),Qn();break;case 5:ef(t);break;case 1:Qe(t.type)&&ti(t);break;case 4:ls(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(oi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Tf(e,t,n):(q(le,le.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);q(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Of(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Cf(e,t,n)}return Lt(e,t,n)}var zf,ga,Nf,If;zf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ga=function(){};Nf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,fn(kt.current);var i=null;switch(n){case"input":o=bl(e,o),r=bl(e,r),i=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),i=[];break;case"textarea":o=Bl(e,o),r=Bl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qo)}Wl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ee("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};If=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hh(e,t,n){var r=t.pendingProps;switch(qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Qe(t.type)&&ei(),Le(t),null;case 3:return r=t.stateNode,Yn(),te(Ve),te($e),ss(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Ca(ft),ft=null))),ga(e,t),Le(t),null;case 5:as(t);var o=fn(br.current);if(n=t.type,e!==null&&t.stateNode!=null)Nf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Le(t),null}if(e=fn(kt.current),go(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[wt]=t,r[Ar]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(o=0;o<vr.length;o++)ee(vr[o],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Ks(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":Zs(r,i),ee("invalid",r)}Wl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&vo(r.textContent,a,e),o=["children",""+a]):jr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":ao(r),Js(r,i,!0);break;case"textarea":ao(r),qs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=id(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[wt]=t,e[Ar]=r,zf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vl(n,r),n){case"dialog":ee("cancel",e),ee("close",e),o=r;break;case"iframe":case"object":case"embed":ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<vr.length;o++)ee(vr[o],e);o=r;break;case"source":ee("error",e),o=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=r;break;case"details":ee("toggle",e),o=r;break;case"input":Ks(e,r),o=bl(e,r),ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Zs(e,r),o=Bl(e,r),ee("invalid",e);break;default:o=r}Wl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?sd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ld(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Tr(e,s):typeof s=="number"&&Tr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ee("scroll",e):s!=null&&Da(e,i,s,l))}switch(n){case"input":ao(e),Js(e,r,!1);break;case"textarea":ao(e),qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)If(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=fn(br.current),fn(kt.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(i=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Le(t),null;case 13:if(te(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Xe!==null&&t.mode&1&&!(t.flags&128))Xd(),Qn(),t.flags|=98560,i=!1;else if(i=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[wt]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else ft!==null&&(Ca(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?xe===0&&(xe=3):ws())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Yn(),ga(e,t),e===null&&$r(t.stateNode.containerInfo),Le(t),null;case 10:return rs(t.type._context),Le(t),null;case 17:return Qe(t.type)&&ei(),Le(t),null;case 19:if(te(le),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)dr(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ai(e),l!==null){for(t.flags|=128,dr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&he()>Kn&&(t.flags|=128,r=!0,dr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ai(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!re)return Le(t),null}else 2*he()-i.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,dr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=he(),t.sibling=null,n=le.current,q(le,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return xs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Bh(e,t){switch(qa(t),t.tag){case 1:return Qe(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),te(Ve),te($e),ss(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return as(t),null;case 13:if(te(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(le),null;case 4:return Yn(),null;case 10:return rs(t.type._context),null;case 22:case 23:return xs(),null;case 24:return null;default:return null}}var wo=!1,Re=!1,Uh=typeof WeakSet=="function"?WeakSet:Set,L=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function ya(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Bu=!1;function Wh(e,t){if(ta=Ko,e=Md(),Ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,m=e,v=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)v=m,m=w;for(;;){if(m===e)break t;if(v===n&&++u===o&&(a=l),v===i&&++p===r&&(s=l),(w=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(na={focusedElem:e,selectionRange:n},Ko=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,z=x.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:ct(t.type,S),z);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){fe(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return x=Bu,Bu=!1,x}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ya(t,n,i)}o=o.next}while(o!==r)}}function Ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lf(e){var t=e.alternate;t!==null&&(e.alternate=null,Lf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[Ar],delete t[ia],delete t[Ph],delete t[jh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rf(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qo));else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}function Sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}var je=null,dt=!1;function Mt(e,t,n){for(n=n.child;n!==null;)$f(e,t,n),n=n.sibling}function $f(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(wi,n)}catch{}switch(n.tag){case 5:Re||$n(n,t);case 6:var r=je,o=dt;je=null,Mt(e,t,n),je=r,dt=o,je!==null&&(dt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(dt?(e=je,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),Ir(e)):vl(je,n.stateNode));break;case 4:r=je,o=dt,je=n.stateNode.containerInfo,dt=!0,Mt(e,t,n),je=r,dt=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ya(n,t,l),o=o.next}while(o!==r)}Mt(e,t,n);break;case 1:if(!Re&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Mt(e,t,n),Re=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function Wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Uh),t.forEach(function(r){var o=qh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,dt=!1;break e;case 3:je=a.stateNode.containerInfo,dt=!0;break e;case 4:je=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(je===null)throw Error(E(160));$f(i,l,o),je=null,dt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){fe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mf(t,e),t=t.sibling}function Mf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),gt(e),r&4){try{Er(3,e,e.return),Ti(3,e)}catch(S){fe(e,e.return,S)}try{Er(5,e,e.return)}catch(S){fe(e,e.return,S)}}break;case 1:ut(t,e),gt(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(ut(t,e),gt(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var o=e.stateNode;try{Tr(o,"")}catch(S){fe(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&rd(o,i),Vl(a,l);var u=Vl(a,i);for(l=0;l<s.length;l+=2){var p=s[l],m=s[l+1];p==="style"?sd(o,m):p==="dangerouslySetInnerHTML"?ld(o,m):p==="children"?Tr(o,m):Da(o,p,m,u)}switch(a){case"input":Fl(o,i);break;case"textarea":od(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Dn(o,!!i.multiple,w,!1):v!==!!i.multiple&&(i.defaultValue!=null?Dn(o,!!i.multiple,i.defaultValue,!0):Dn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ar]=i}catch(S){fe(e,e.return,S)}}break;case 6:if(ut(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){fe(e,e.return,S)}}break;case 3:if(ut(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(S){fe(e,e.return,S)}break;case 4:ut(t,e),gt(e);break;case 13:ut(t,e),gt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(gs=he())),r&4&&Wu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||p,ut(t,e),Re=u):ut(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(L=e,p=e.child;p!==null;){for(m=L=p;L!==null;){switch(v=L,w=v.child,v.tag){case 0:case 11:case 14:case 15:Er(4,v,v.return);break;case 1:$n(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(S){fe(r,n,S)}}break;case 5:$n(v,v.return);break;case 22:if(v.memoizedState!==null){Qu(m);continue}}w!==null?(w.return=v,L=w):Qu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ad("display",l))}catch(S){fe(e,e.return,S)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){fe(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ut(t,e),gt(e),r&4&&Wu(e);break;case 21:break;default:ut(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rf(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Tr(o,""),r.flags&=-33);var i=Uu(e);Sa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Uu(e);wa(e,a,l);break;default:throw Error(E(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vh(e,t,n){L=e,Af(e)}function Af(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||wo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Re;a=wo;var u=Re;if(wo=l,(Re=s)&&!u)for(L=o;L!==null;)l=L,s=l.child,l.tag===22&&l.memoizedState!==null?Gu(o):s!==null?(s.return=l,L=s):Gu(o);for(;i!==null;)L=i,Af(i),i=i.sibling;L=o,wo=a,Re=u}Vu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):Vu(e)}}function Vu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Ti(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ou(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ou(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Ir(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Re||t.flags&512&&xa(t)}catch(v){fe(t,t.return,v)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Qu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Gu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ti(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var i=t.return;try{xa(t)}catch(s){fe(t,i,s)}break;case 5:var l=t.return;try{xa(t)}catch(s){fe(t,l,s)}}}catch(s){fe(t,t.return,s)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var Qh=Math.ceil,ci=Rt.ReactCurrentDispatcher,hs=Rt.ReactCurrentOwner,it=Rt.ReactCurrentBatchConfig,W=0,ke=null,ve=null,Te=0,Ye=0,Mn=on(0),xe=0,Ur=null,yn=0,Oi=0,vs=0,_r=null,Be=null,gs=0,Kn=1/0,Ct=null,di=!1,ka=null,Kt=null,So=!1,Wt=null,fi=0,Cr=0,Ea=null,Fo=-1,Ho=0;function De(){return W&6?he():Fo!==-1?Fo:Fo=he()}function Jt(e){return e.mode&1?W&2&&Te!==0?Te&-Te:Oh.transition!==null?(Ho===0&&(Ho=wd()),Ho):(e=X,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e):1}function ht(e,t,n,r){if(50<Cr)throw Cr=0,Ea=null,Error(E(185));Qr(e,n,r),(!(W&2)||e!==ke)&&(e===ke&&(!(W&2)&&(Oi|=n),xe===4&&Bt(e,Te)),Ge(e,r),n===1&&W===0&&!(t.mode&1)&&(Kn=he()+500,Ci&&ln()))}function Ge(e,t){var n=e.callbackNode;Om(e,t);var r=Xo(e,e===ke?Te:0);if(r===0)n!==null&&nu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nu(n),t===1)e.tag===0?Th(Yu.bind(null,e)):Qd(Yu.bind(null,e)),_h(function(){!(W&6)&&ln()}),n=null;else{switch(Sd(r)){case 1:n=Ua;break;case 4:n=yd;break;case 16:n=Yo;break;case 536870912:n=xd;break;default:n=Yo}n=Vf(n,Df.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Df(e,t){if(Fo=-1,Ho=0,W&6)throw Error(E(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Xo(e,e===ke?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pi(e,r);else{t=r;var o=W;W|=2;var i=Ff();(ke!==e||Te!==t)&&(Ct=null,Kn=he()+500,pn(e,t));do try{Xh();break}catch(a){bf(e,a)}while(!0);ns(),ci.current=i,W=o,ve!==null?t=0:(ke=null,Te=0,t=xe)}if(t!==0){if(t===2&&(o=Kl(e),o!==0&&(r=o,t=_a(e,o))),t===1)throw n=Ur,pn(e,0),Bt(e,r),Ge(e,he()),n;if(t===6)Bt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Gh(o)&&(t=pi(e,r),t===2&&(i=Kl(e),i!==0&&(r=i,t=_a(e,i))),t===1))throw n=Ur,pn(e,0),Bt(e,r),Ge(e,he()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:un(e,Be,Ct);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=gs+500-he(),10<t)){if(Xo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=oa(un.bind(null,e,Be,Ct),t);break}un(e,Be,Ct);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-mt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qh(r/1960))-r,10<r){e.timeoutHandle=oa(un.bind(null,e,Be,Ct),r);break}un(e,Be,Ct);break;case 5:un(e,Be,Ct);break;default:throw Error(E(329))}}}return Ge(e,he()),e.callbackNode===n?Df.bind(null,e):null}function _a(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=pi(e,t),e!==2&&(t=Be,Be=n,t!==null&&Ca(t)),e}function Ca(e){Be===null?Be=e:Be.push.apply(Be,e)}function Gh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~vs,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function Yu(e){if(W&6)throw Error(E(327));Un();var t=Xo(e,0);if(!(t&1))return Ge(e,he()),null;var n=pi(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=_a(e,r))}if(n===1)throw n=Ur,pn(e,0),Bt(e,t),Ge(e,he()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Be,Ct),Ge(e,he()),null}function ys(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Kn=he()+500,Ci&&ln())}}function xn(e){Wt!==null&&Wt.tag===0&&!(W&6)&&Un();var t=W;W|=1;var n=it.transition,r=X;try{if(it.transition=null,X=1,e)return e()}finally{X=r,it.transition=n,W=t,!(W&6)&&ln()}}function xs(){Ye=Mn.current,te(Mn)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Eh(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:Yn(),te(Ve),te($e),ss();break;case 5:as(r);break;case 4:Yn();break;case 13:te(le);break;case 19:te(le);break;case 10:rs(r.type._context);break;case 22:case 23:xs()}n=n.return}if(ke=e,ve=e=Zt(e.current,null),Te=Ye=t,xe=0,Ur=null,vs=Oi=yn=0,Be=_r=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}dn=null}return e}function bf(e,t){do{var n=ve;try{if(ns(),Ao.current=ui,si){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}si=!1}if(gn=0,Se=ye=ae=null,kr=!1,Fr=0,hs.current=null,n===null||n.return===null){xe=1,Ur=t,ve=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=$u(l);if(w!==null){w.flags&=-257,Mu(w,l,a,i,t),w.mode&1&&Ru(i,u,t),t=w,s=u;var x=t.updateQueue;if(x===null){var S=new Set;S.add(s),t.updateQueue=S}else x.add(s);break e}else{if(!(t&1)){Ru(i,u,t),ws();break e}s=Error(E(426))}}else if(re&&a.mode&1){var z=$u(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Mu(z,l,a,i,t),es(Xn(s,a));break e}}i=s=Xn(s,a),xe!==4&&(xe=2),_r===null?_r=[i]:_r.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=kf(i,s,t);Tu(i,d);break e;case 1:a=s;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Kt===null||!Kt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Ef(i,a,t);Tu(i,y);break e}}i=i.return}while(i!==null)}Bf(n)}catch(k){t=k,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Ff(){var e=ci.current;return ci.current=ui,e===null?ui:e}function ws(){(xe===0||xe===3||xe===2)&&(xe=4),ke===null||!(yn&268435455)&&!(Oi&268435455)||Bt(ke,Te)}function pi(e,t){var n=W;W|=2;var r=Ff();(ke!==e||Te!==t)&&(Ct=null,pn(e,t));do try{Yh();break}catch(o){bf(e,o)}while(!0);if(ns(),W=n,ci.current=r,ve!==null)throw Error(E(261));return ke=null,Te=0,xe}function Yh(){for(;ve!==null;)Hf(ve)}function Xh(){for(;ve!==null&&!wm();)Hf(ve)}function Hf(e){var t=Wf(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Bf(e):ve=t,hs.current=null}function Bf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bh(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ve=null;return}}else if(n=Hh(n,t,Ye),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);xe===0&&(xe=5)}function un(e,t,n){var r=X,o=it.transition;try{it.transition=null,X=1,Kh(e,t,n,r)}finally{it.transition=o,X=r}return null}function Kh(e,t,n,r){do Un();while(Wt!==null);if(W&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(zm(e,i),e===ke&&(ve=ke=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,Vf(Yo,function(){return Un(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=it.transition,it.transition=null;var l=X;X=1;var a=W;W|=4,hs.current=null,Wh(e,n),Mf(n,e),vh(na),Ko=!!ta,na=ta=null,e.current=n,Vh(n),Sm(),W=a,X=l,it.transition=i}else e.current=n;if(So&&(So=!1,Wt=e,fi=o),i=e.pendingLanes,i===0&&(Kt=null),_m(n.stateNode),Ge(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(di)throw di=!1,e=ka,ka=null,e;return fi&1&&e.tag!==0&&Un(),i=e.pendingLanes,i&1?e===Ea?Cr++:(Cr=0,Ea=e):Cr=0,ln(),null}function Un(){if(Wt!==null){var e=Sd(fi),t=it.transition,n=X;try{if(it.transition=null,X=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,fi=0,W&6)throw Error(E(331));var o=W;for(W|=4,L=e.current;L!==null;){var i=L,l=i.child;if(L.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(L=u;L!==null;){var p=L;switch(p.tag){case 0:case 11:case 15:Er(8,p,i)}var m=p.child;if(m!==null)m.return=p,L=m;else for(;L!==null;){p=L;var v=p.sibling,w=p.return;if(Lf(p),p===u){L=null;break}if(v!==null){v.return=w,L=v;break}L=w}}}var x=i.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var z=S.sibling;S.sibling=null,S=z}while(S!==null)}}L=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Er(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,L=d;break e}L=i.return}}var c=e.current;for(L=c;L!==null;){l=L;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,L=f;else e:for(l=c;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ti(9,a)}}catch(k){fe(a,a.return,k)}if(a===l){L=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,L=y;break e}L=a.return}}if(W=o,ln(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(wi,e)}catch{}r=!0}return r}finally{X=n,it.transition=t}}return!1}function Xu(e,t,n){t=Xn(n,t),t=kf(e,t,1),e=Xt(e,t,1),t=De(),e!==null&&(Qr(e,1,t),Ge(e,t))}function fe(e,t,n){if(e.tag===3)Xu(e,e,n);else for(;t!==null;){if(t.tag===3){Xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=Xn(n,e),e=Ef(t,e,1),t=Xt(t,e,1),e=De(),t!==null&&(Qr(t,1,e),Ge(t,e));break}}t=t.return}}function Jh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Te&n)===n&&(xe===4||xe===3&&(Te&130023424)===Te&&500>he()-gs?pn(e,0):vs|=n),Ge(e,t)}function Uf(e,t){t===0&&(e.mode&1?(t=co,co<<=1,!(co&130023424)&&(co=4194304)):t=1);var n=De();e=It(e,t),e!==null&&(Qr(e,t,n),Ge(e,n))}function Zh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uf(e,n)}function qh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Uf(e,n)}var Wf;Wf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,Fh(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,re&&t.flags&1048576&&Gd(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var o=Vn(t,$e.current);Bn(t,n),o=cs(null,t,r,e,o,n);var i=ds();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(i=!0,ti(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,is(t),o.updater=ji,t.stateNode=o,o._reactInternals=t,da(t,r,e,n),t=ma(null,t,r,!0,i,n)):(t.tag=0,re&&i&&Za(t),Ae(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=tv(r),e=ct(r,e),o){case 0:t=pa(null,t,r,e,n);break e;case 1:t=bu(null,t,r,e,n);break e;case 11:t=Au(null,t,r,e,n);break e;case 14:t=Du(null,t,r,ct(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),pa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),bu(e,t,r,o,n);case 3:e:{if(jf(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,qd(e,t),li(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Xn(Error(E(423)),t),t=Fu(e,t,r,n,o);break e}else if(r!==o){o=Xn(Error(E(424)),t),t=Fu(e,t,r,n,o);break e}else for(Xe=Yt(t.stateNode.containerInfo.firstChild),Ke=t,re=!0,ft=null,n=Jd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===o){t=Lt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return ef(t),e===null&&sa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ra(r,o)?l=null:i!==null&&ra(r,i)&&(t.flags|=32),Pf(e,t),Ae(e,t,l,n),t.child;case 6:return e===null&&sa(t),null;case 13:return Tf(e,t,n);case 4:return ls(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Au(e,t,r,o,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,q(oi,r._currentValue),r._currentValue=l,i!==null)if(vt(i.value,l)){if(i.children===o.children&&!Ve.current){t=Lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ot(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ua(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ua(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ae(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Bn(t,n),o=lt(o),r=r(o),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),Du(e,t,r,o,n);case 15:return _f(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),bo(e,t),t.tag=1,Qe(r)?(e=!0,ti(t)):e=!1,Bn(t,n),Sf(t,r,o),da(t,r,o,n),ma(null,t,r,!0,e,n);case 19:return Of(e,t,n);case 22:return Cf(e,t,n)}throw Error(E(156,t.tag))};function Vf(e,t){return gd(e,t)}function ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new ev(e,t,n,r)}function Ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tv(e){if(typeof e=="function")return Ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fa)return 11;if(e===Ha)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ss(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Pn:return mn(n.children,o,i,t);case ba:l=8,o|=8;break;case $l:return e=ot(12,n,t,o|2),e.elementType=$l,e.lanes=i,e;case Ml:return e=ot(13,n,t,o),e.elementType=Ml,e.lanes=i,e;case Al:return e=ot(19,n,t,o),e.elementType=Al,e.lanes=i,e;case ed:return zi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zc:l=10;break e;case qc:l=9;break e;case Fa:l=11;break e;case Ha:l=14;break e;case bt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=ot(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function mn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function zi(e,t,n,r){return e=ot(22,e,r,t),e.elementType=ed,e.lanes=n,e.stateNode={isHidden:!1},e}function _l(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ks(e,t,n,r,o,i,l,a,s){return e=new nv(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},is(i),e}function rv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qf(e){if(!e)return nn;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Vd(e,n,t)}return t}function Gf(e,t,n,r,o,i,l,a,s){return e=ks(n,r,!0,e,o,i,l,a,s),e.context=Qf(null),n=e.current,r=De(),o=Jt(n),i=Ot(r,o),i.callback=t??null,Xt(n,i,o),e.current.lanes=o,Qr(e,o,r),Ge(e,r),e}function Ni(e,t,n,r){var o=t.current,i=De(),l=Jt(o);return n=Qf(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(o,t,l),e!==null&&(ht(e,o,l,i),Mo(e,o,l)),l}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Es(e,t){Ku(e,t),(e=e.alternate)&&Ku(e,t)}function ov(){return null}var Yf=typeof reportError=="function"?reportError:function(e){console.error(e)};function _s(e){this._internalRoot=e}Ii.prototype.render=_s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ni(e,t,null,null)};Ii.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Ni(null,e,null,null)}),t[Nt]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=_d();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&Pd(e)}};function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function iv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=mi(l);i.call(u)}}var l=Gf(t,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=l,e[Nt]=l.current,$r(e.nodeType===8?e.parentNode:e),xn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=mi(s);a.call(u)}}var s=ks(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=s,e[Nt]=s.current,$r(e.nodeType===8?e.parentNode:e),xn(function(){Ni(t,s,n,r)}),s}function Ri(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=mi(l);a.call(s)}}Ni(t,l,e,o)}else l=iv(n,t,e,o,r);return mi(l)}kd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(Wa(t,n|1),Ge(t,he()),!(W&6)&&(Kn=he()+500,ln()))}break;case 13:xn(function(){var r=It(e,1);if(r!==null){var o=De();ht(r,e,1,o)}}),Es(e,1)}};Va=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=De();ht(t,e,134217728,n)}Es(e,134217728)}};Ed=function(e){if(e.tag===13){var t=Jt(e),n=It(e,t);if(n!==null){var r=De();ht(n,e,t,r)}Es(e,t)}};_d=function(){return X};Cd=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Gl=function(e,t,n){switch(t){case"input":if(Fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_i(r);if(!o)throw Error(E(90));nd(r),Fl(r,o)}}}break;case"textarea":od(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};dd=ys;fd=xn;var lv={usingClientEntryPoint:!1,Events:[Yr,zn,_i,ud,cd,ys]},fr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},av={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hd(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{wi=ko.inject(av),St=ko}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cs(t))throw Error(E(200));return rv(e,t,null,n)};Ze.createRoot=function(e,t){if(!Cs(e))throw Error(E(299));var n=!1,r="",o=Yf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ks(e,1,!1,null,null,n,!1,r,o),e[Nt]=t.current,$r(e.nodeType===8?e.parentNode:e),new _s(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=hd(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return xn(e)};Ze.hydrate=function(e,t,n){if(!Li(t))throw Error(E(200));return Ri(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!Cs(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Yf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Gf(t,null,e,1,n??null,o,!1,i,l),e[Nt]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ii(t)};Ze.render=function(e,t,n){if(!Li(t))throw Error(E(200));return Ri(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!Li(e))throw Error(E(40));return e._reactRootContainer?(xn(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Ze.unstable_batchedUpdates=ys;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Li(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ri(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function Xf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xf)}catch(e){console.error(e)}}Xf(),Yc.exports=Ze;var Kf=Yc.exports,Zu=Kf;Ll.createRoot=Zu.createRoot,Ll.hydrateRoot=Zu.hydrateRoot;var Jf={exports:{}},K={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=typeof Symbol=="function"&&Symbol.for,Ps=Ee?Symbol.for("react.element"):60103,js=Ee?Symbol.for("react.portal"):60106,$i=Ee?Symbol.for("react.fragment"):60107,Mi=Ee?Symbol.for("react.strict_mode"):60108,Ai=Ee?Symbol.for("react.profiler"):60114,Di=Ee?Symbol.for("react.provider"):60109,bi=Ee?Symbol.for("react.context"):60110,Ts=Ee?Symbol.for("react.async_mode"):60111,Fi=Ee?Symbol.for("react.concurrent_mode"):60111,Hi=Ee?Symbol.for("react.forward_ref"):60112,Bi=Ee?Symbol.for("react.suspense"):60113,sv=Ee?Symbol.for("react.suspense_list"):60120,Ui=Ee?Symbol.for("react.memo"):60115,Wi=Ee?Symbol.for("react.lazy"):60116,uv=Ee?Symbol.for("react.block"):60121,cv=Ee?Symbol.for("react.fundamental"):60117,dv=Ee?Symbol.for("react.responder"):60118,fv=Ee?Symbol.for("react.scope"):60119;function et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ps:switch(e=e.type,e){case Ts:case Fi:case $i:case Ai:case Mi:case Bi:return e;default:switch(e=e&&e.$$typeof,e){case bi:case Hi:case Wi:case Ui:case Di:return e;default:return t}}case js:return t}}}function Zf(e){return et(e)===Fi}K.AsyncMode=Ts;K.ConcurrentMode=Fi;K.ContextConsumer=bi;K.ContextProvider=Di;K.Element=Ps;K.ForwardRef=Hi;K.Fragment=$i;K.Lazy=Wi;K.Memo=Ui;K.Portal=js;K.Profiler=Ai;K.StrictMode=Mi;K.Suspense=Bi;K.isAsyncMode=function(e){return Zf(e)||et(e)===Ts};K.isConcurrentMode=Zf;K.isContextConsumer=function(e){return et(e)===bi};K.isContextProvider=function(e){return et(e)===Di};K.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ps};K.isForwardRef=function(e){return et(e)===Hi};K.isFragment=function(e){return et(e)===$i};K.isLazy=function(e){return et(e)===Wi};K.isMemo=function(e){return et(e)===Ui};K.isPortal=function(e){return et(e)===js};K.isProfiler=function(e){return et(e)===Ai};K.isStrictMode=function(e){return et(e)===Mi};K.isSuspense=function(e){return et(e)===Bi};K.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$i||e===Fi||e===Ai||e===Mi||e===Bi||e===sv||typeof e=="object"&&e!==null&&(e.$$typeof===Wi||e.$$typeof===Ui||e.$$typeof===Di||e.$$typeof===bi||e.$$typeof===Hi||e.$$typeof===cv||e.$$typeof===dv||e.$$typeof===fv||e.$$typeof===uv)};K.typeOf=et;Jf.exports=K;var Os=Jf.exports;function pv(e){function t(T,N,I,D,g){for(var U=0,j=0,ce=0,Q=0,Y,F,_e=0,He=0,V,Ne=V=Y=0,G=0,Ce=0,rr=0,Pe=0,ro=I.length,or=ro-1,st,b="",me="",Zi="",qi="",$t;G<ro;){if(F=I.charCodeAt(G),G===or&&j+Q+ce+U!==0&&(j!==0&&(F=j===47?10:47),Q=ce=U=0,ro++,or++),j+Q+ce+U===0){if(G===or&&(0<Ce&&(b=b.replace(v,"")),0<b.trim().length)){switch(F){case 32:case 9:case 59:case 13:case 10:break;default:b+=I.charAt(G)}F=59}switch(F){case 123:for(b=b.trim(),Y=b.charCodeAt(0),V=1,Pe=++G;G<ro;){switch(F=I.charCodeAt(G)){case 123:V++;break;case 125:V--;break;case 47:switch(F=I.charCodeAt(G+1)){case 42:case 47:e:{for(Ne=G+1;Ne<or;++Ne)switch(I.charCodeAt(Ne)){case 47:if(F===42&&I.charCodeAt(Ne-1)===42&&G+2!==Ne){G=Ne+1;break e}break;case 10:if(F===47){G=Ne+1;break e}}G=Ne}}break;case 91:F++;case 40:F++;case 34:case 39:for(;G++<or&&I.charCodeAt(G)!==F;);}if(V===0)break;G++}switch(V=I.substring(Pe,G),Y===0&&(Y=(b=b.replace(m,"").trim()).charCodeAt(0)),Y){case 64:switch(0<Ce&&(b=b.replace(v,"")),F=b.charCodeAt(1),F){case 100:case 109:case 115:case 45:Ce=N;break;default:Ce=_t}if(V=t(N,Ce,V,F,g+1),Pe=V.length,0<C&&(Ce=n(_t,b,rr),$t=a(3,V,Ce,N,ge,ue,Pe,F,g,D),b=Ce.join(""),$t!==void 0&&(Pe=(V=$t.trim()).length)===0&&(F=0,V="")),0<Pe)switch(F){case 115:b=b.replace(_,l);case 100:case 109:case 45:V=b+"{"+V+"}";break;case 107:b=b.replace(c,"$1 $2"),V=b+"{"+V+"}",V=we===1||we===2&&i("@"+V,3)?"@-webkit-"+V+"@"+V:"@"+V;break;default:V=b+V,D===112&&(V=(me+=V,""))}else V="";break;default:V=t(N,n(N,b,rr),V,D,g+1)}Zi+=V,V=rr=Ce=Ne=Y=0,b="",F=I.charCodeAt(++G);break;case 125:case 59:if(b=(0<Ce?b.replace(v,""):b).trim(),1<(Pe=b.length))switch(Ne===0&&(Y=b.charCodeAt(0),Y===45||96<Y&&123>Y)&&(Pe=(b=b.replace(" ",":")).length),0<C&&($t=a(1,b,N,T,ge,ue,me.length,D,g,D))!==void 0&&(Pe=(b=$t.trim()).length)===0&&(b="\0\0"),Y=b.charCodeAt(0),F=b.charCodeAt(1),Y){case 0:break;case 64:if(F===105||F===99){qi+=b+I.charAt(G);break}default:b.charCodeAt(Pe-1)!==58&&(me+=o(b,Y,F,b.charCodeAt(2)))}rr=Ce=Ne=Y=0,b="",F=I.charCodeAt(++G)}}switch(F){case 13:case 10:j===47?j=0:1+Y===0&&D!==107&&0<b.length&&(Ce=1,b+="\0"),0<C*A&&a(0,b,N,T,ge,ue,me.length,D,g,D),ue=1,ge++;break;case 59:case 125:if(j+Q+ce+U===0){ue++;break}default:switch(ue++,st=I.charAt(G),F){case 9:case 32:if(Q+U+j===0)switch(_e){case 44:case 58:case 9:case 32:st="";break;default:F!==32&&(st=" ")}break;case 0:st="\\0";break;case 12:st="\\f";break;case 11:st="\\v";break;case 38:Q+j+U===0&&(Ce=rr=1,st="\f"+st);break;case 108:if(Q+j+U+ze===0&&0<Ne)switch(G-Ne){case 2:_e===112&&I.charCodeAt(G-3)===58&&(ze=_e);case 8:He===111&&(ze=He)}break;case 58:Q+j+U===0&&(Ne=G);break;case 44:j+ce+Q+U===0&&(Ce=1,st+="\r");break;case 34:case 39:j===0&&(Q=Q===F?0:Q===0?F:Q);break;case 91:Q+j+ce===0&&U++;break;case 93:Q+j+ce===0&&U--;break;case 41:Q+j+U===0&&ce--;break;case 40:if(Q+j+U===0){if(Y===0)switch(2*_e+3*He){case 533:break;default:Y=1}ce++}break;case 64:j+ce+Q+U+Ne+V===0&&(V=1);break;case 42:case 47:if(!(0<Q+U+ce))switch(j){case 0:switch(2*F+3*I.charCodeAt(G+1)){case 235:j=47;break;case 220:Pe=G,j=42}break;case 42:F===47&&_e===42&&Pe+2!==G&&(I.charCodeAt(Pe+2)===33&&(me+=I.substring(Pe,G+1)),st="",j=0)}}j===0&&(b+=st)}He=_e,_e=F,G++}if(Pe=me.length,0<Pe){if(Ce=N,0<C&&($t=a(2,me,Ce,T,ge,ue,Pe,D,g,D),$t!==void 0&&(me=$t).length===0))return qi+me+Zi;if(me=Ce.join(",")+"{"+me+"}",we*ze!==0){switch(we!==2||i(me,2)||(ze=0),ze){case 111:me=me.replace(y,":-moz-$1")+me;break;case 112:me=me.replace(f,"::-webkit-input-$1")+me.replace(f,"::-moz-$1")+me.replace(f,":-ms-input-$1")+me}ze=0}}return qi+me+Zi}function n(T,N,I){var D=N.trim().split(z);N=D;var g=D.length,U=T.length;switch(U){case 0:case 1:var j=0;for(T=U===0?"":T[0]+" ";j<g;++j)N[j]=r(T,N[j],I).trim();break;default:var ce=j=0;for(N=[];j<g;++j)for(var Q=0;Q<U;++Q)N[ce++]=r(T[Q]+" ",D[j],I).trim()}return N}function r(T,N,I){var D=N.charCodeAt(0);switch(33>D&&(D=(N=N.trim()).charCodeAt(0)),D){case 38:return N.replace(d,"$1"+T.trim());case 58:return T.trim()+N.replace(d,"$1"+T.trim());default:if(0<1*I&&0<N.indexOf("\f"))return N.replace(d,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+N}function o(T,N,I,D){var g=T+";",U=2*N+3*I+4*D;if(U===944){T=g.indexOf(":",9)+1;var j=g.substring(T,g.length-1).trim();return j=g.substring(0,T).trim()+j+";",we===1||we===2&&i(j,1)?"-webkit-"+j+j:j}if(we===0||we===2&&!i(g,1))return g;switch(U){case 1015:return g.charCodeAt(10)===97?"-webkit-"+g+g:g;case 951:return g.charCodeAt(3)===116?"-webkit-"+g+g:g;case 963:return g.charCodeAt(5)===110?"-webkit-"+g+g:g;case 1009:if(g.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+g+g;case 978:return"-webkit-"+g+"-moz-"+g+g;case 1019:case 983:return"-webkit-"+g+"-moz-"+g+"-ms-"+g+g;case 883:if(g.charCodeAt(8)===45)return"-webkit-"+g+g;if(0<g.indexOf("image-set(",11))return g.replace(pe,"$1-webkit-$2")+g;break;case 932:if(g.charCodeAt(4)===45)switch(g.charCodeAt(5)){case 103:return"-webkit-box-"+g.replace("-grow","")+"-webkit-"+g+"-ms-"+g.replace("grow","positive")+g;case 115:return"-webkit-"+g+"-ms-"+g.replace("shrink","negative")+g;case 98:return"-webkit-"+g+"-ms-"+g.replace("basis","preferred-size")+g}return"-webkit-"+g+"-ms-"+g+g;case 964:return"-webkit-"+g+"-ms-flex-"+g+g;case 1023:if(g.charCodeAt(8)!==99)break;return j=g.substring(g.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+j+"-webkit-"+g+"-ms-flex-pack"+j+g;case 1005:return x.test(g)?g.replace(w,":-webkit-")+g.replace(w,":-moz-")+g:g;case 1e3:switch(j=g.substring(13).trim(),N=j.indexOf("-")+1,j.charCodeAt(0)+j.charCodeAt(N)){case 226:j=g.replace(k,"tb");break;case 232:j=g.replace(k,"tb-rl");break;case 220:j=g.replace(k,"lr");break;default:return g}return"-webkit-"+g+"-ms-"+j+g;case 1017:if(g.indexOf("sticky",9)===-1)break;case 975:switch(N=(g=T).length-10,j=(g.charCodeAt(N)===33?g.substring(0,N):g).substring(T.indexOf(":",7)+1).trim(),U=j.charCodeAt(0)+(j.charCodeAt(7)|0)){case 203:if(111>j.charCodeAt(8))break;case 115:g=g.replace(j,"-webkit-"+j)+";"+g;break;case 207:case 102:g=g.replace(j,"-webkit-"+(102<U?"inline-":"")+"box")+";"+g.replace(j,"-webkit-"+j)+";"+g.replace(j,"-ms-"+j+"box")+";"+g}return g+";";case 938:if(g.charCodeAt(5)===45)switch(g.charCodeAt(6)){case 105:return j=g.replace("-items",""),"-webkit-"+g+"-webkit-box-"+j+"-ms-flex-"+j+g;case 115:return"-webkit-"+g+"-ms-flex-item-"+g.replace(O,"")+g;default:return"-webkit-"+g+"-ms-flex-line-pack"+g.replace("align-content","").replace(O,"")+g}break;case 973:case 989:if(g.charCodeAt(3)!==45||g.charCodeAt(4)===122)break;case 931:case 953:if(R.test(T)===!0)return(j=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?o(T.replace("stretch","fill-available"),N,I,D).replace(":fill-available",":stretch"):g.replace(j,"-webkit-"+j)+g.replace(j,"-moz-"+j.replace("fill-",""))+g;break;case 962:if(g="-webkit-"+g+(g.charCodeAt(5)===102?"-ms-"+g:"")+g,I+D===211&&g.charCodeAt(13)===105&&0<g.indexOf("transform",10))return g.substring(0,g.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+g}return g}function i(T,N){var I=T.indexOf(N===1?":":"{"),D=T.substring(0,N!==3?I:10);return I=T.substring(I+1,T.length-1),M(N!==2?D:D.replace(H,"$1"),I,N)}function l(T,N){var I=o(N,N.charCodeAt(0),N.charCodeAt(1),N.charCodeAt(2));return I!==N+";"?I.replace(P," or ($1)").substring(4):"("+N+")"}function a(T,N,I,D,g,U,j,ce,Q,Y){for(var F=0,_e=N,He;F<C;++F)switch(He=Me[F].call(p,T,_e,I,D,g,U,j,ce,Q,Y)){case void 0:case!1:case!0:case null:break;default:_e=He}if(_e!==N)return _e}function s(T){switch(T){case void 0:case null:C=Me.length=0;break;default:if(typeof T=="function")Me[C++]=T;else if(typeof T=="object")for(var N=0,I=T.length;N<I;++N)s(T[N]);else A=!!T|0}return s}function u(T){return T=T.prefix,T!==void 0&&(M=null,T?typeof T!="function"?we=1:(we=2,M=T):we=0),u}function p(T,N){var I=T;if(33>I.charCodeAt(0)&&(I=I.trim()),J=I,I=[J],0<C){var D=a(-1,N,I,I,ge,ue,0,0,0,0);D!==void 0&&typeof D=="string"&&(N=D)}var g=t(_t,I,N,0,0);return 0<C&&(D=a(-2,g,I,I,ge,ue,g.length,0,0,0),D!==void 0&&(g=D)),J="",ze=0,ue=ge=1,g}var m=/^\0+/g,v=/[\0\r\f]/g,w=/: */g,x=/zoo|gra/,S=/([,: ])(transform)/g,z=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,y=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,O=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,pe=/([^-])(image-set\()/,ue=1,ge=1,ze=0,we=1,_t=[],Me=[],C=0,M=null,A=0,J="";return p.use=s,p.set=u,e!==void 0&&u(e),p}var mv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var vv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,qu=hv(function(e){return vv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),zs=Os,gv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ns={};Ns[zs.ForwardRef]=xv;Ns[zs.Memo]=qf;function ec(e){return zs.isMemo(e)?qf:Ns[e.$$typeof]||gv}var wv=Object.defineProperty,Sv=Object.getOwnPropertyNames,tc=Object.getOwnPropertySymbols,kv=Object.getOwnPropertyDescriptor,Ev=Object.getPrototypeOf,nc=Object.prototype;function ep(e,t,n){if(typeof t!="string"){if(nc){var r=Ev(t);r&&r!==nc&&ep(e,r,n)}var o=Sv(t);tc&&(o=o.concat(tc(t)));for(var i=ec(e),l=ec(t),a=0;a<o.length;++a){var s=o[a];if(!yv[s]&&!(n&&n[s])&&!(l&&l[s])&&!(i&&i[s])){var u=kv(t,s);try{wv(e,s,u)}catch{}}}}return e}var _v=ep;const Cv=Mc(_v);var tt={};function pt(){return(pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var rc=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Pa=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Os.typeOf(e)},hi=Object.freeze([]),qt=Object.freeze({});function Jn(e){return typeof e=="function"}function oc(e){return e.displayName||e.name||"Component"}function Is(e){return e&&typeof e.styledComponentId=="string"}var Zn=typeof process<"u"&&tt!==void 0&&(tt.REACT_APP_SC_ATTR||tt.SC_ATTR)||"data-styled",Ls=typeof window<"u"&&"HTMLElement"in window,Pv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&tt!==void 0&&(tt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&tt.REACT_APP_SC_DISABLE_SPEEDY!==""?tt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&tt.REACT_APP_SC_DISABLE_SPEEDY:tt.SC_DISABLE_SPEEDY!==void 0&&tt.SC_DISABLE_SPEEDY!==""&&tt.SC_DISABLE_SPEEDY!=="false"&&tt.SC_DISABLE_SPEEDY)),jv={};function wn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Tv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&wn(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,p=r.length;u<p;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Uo=new Map,vi=new Map,Pr=1,Eo=function(e){if(Uo.has(e))return Uo.get(e);for(;vi.has(Pr);)Pr++;var t=Pr++;return Uo.set(e,t),vi.set(t,e),t},Ov=function(e){return vi.get(e)},zv=function(e,t){t>=Pr&&(Pr=t+1),Uo.set(e,t),vi.set(t,e)},Nv="style["+Zn+'][data-styled-version="5.3.11"]',Iv=new RegExp("^"+Zn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Lv=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Rv=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(Iv);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(zv(u,s),Lv(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},$v=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},tp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var p=s[u];if(p&&p.nodeType===1&&p.hasAttribute(Zn))return p}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Zn,"active"),r.setAttribute("data-styled-version","5.3.11");var l=$v();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Mv=function(){function e(n){var r=this.element=tp(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var s=i[l];if(s.ownerNode===o)return s}wn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Av=function(){function e(n){var r=this.element=tp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Dv=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ic=Ls,bv={isServer:!Ls,useCSSOMInjection:!Pv},gi=function(){function e(n,r,o){n===void 0&&(n=qt),r===void 0&&(r={}),this.options=pt({},bv,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Ls&&ic&&(ic=!1,function(i){for(var l=document.querySelectorAll(Nv),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Zn)!=="active"&&(Rv(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Eo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(pt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new Dv(l):i?new Mv(l):new Av(l),new Tv(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Eo(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Eo(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Eo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=Ov(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var p=Zn+".g"+l+'[id="'+a+'"]',m="";s!==void 0&&s.forEach(function(v){v.length>0&&(m+=v+",")}),i+=""+u+p+'{content:"'+m+`"}/*!sc*/
`}}}return i}(this)},e}(),Fv=/(a)(d)/gi,lc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ja(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=lc(t%52)+n;return(lc(t%52)+n).replace(Fv,"$1-$2")}var An=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},np=function(e){return An(5381,e)};function rp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Jn(n)&&!Is(n))return!1}return!0}var Hv=np("5.3.11"),Bv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&rp(t),this.componentId=n,this.baseHash=An(Hv,n),this.baseStyle=r,gi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Sn(this.rules,t,n,r).join(""),a=ja(An(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var s=r(l,"."+a,void 0,o);n.insertRules(o,a,s)}i.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,p=An(this.baseHash,r.hash),m="",v=0;v<u;v++){var w=this.rules[v];if(typeof w=="string")m+=w;else if(w){var x=Sn(w,t,n,r),S=Array.isArray(x)?x.join(""):x;p=An(p,S+v),m+=S}}if(m){var z=ja(p>>>0);if(!n.hasNameForId(o,z)){var d=r(m,"."+z,void 0,o);n.insertRules(o,z,d)}i.push(z)}}return i.join(" ")},e}(),Uv=/^\s*\/\/.*$/gm,Wv=[":","[",".","#"];function Vv(e){var t,n,r,o,i=qt,l=i.options,a=l===void 0?qt:l,s=i.plugins,u=s===void 0?hi:s,p=new pv(a),m=[],v=function(S){function z(d){if(d)try{S(d+"}")}catch{}}return function(d,c,f,y,k,_,P,O,H,R){switch(d){case 1:if(H===0&&c.charCodeAt(0)===64)return S(c+";"),"";break;case 2:if(O===0)return c+"/*|*/";break;case 3:switch(O){case 102:case 112:return S(f[0]+c),"";default:return c+(R===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(z)}}}(function(S){m.push(S)}),w=function(S,z,d){return z===0&&Wv.indexOf(d[n.length])!==-1||d.match(o)?S:"."+t};function x(S,z,d,c){c===void 0&&(c="&");var f=S.replace(Uv,""),y=z&&d?d+" "+z+" { "+f+" }":f;return t=c,n=z,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),p(d||!z?"":z,y)}return p.use([].concat(u,[function(S,z,d){S===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,w))},v,function(S){if(S===-2){var z=m;return m=[],z}}])),x.hash=u.length?u.reduce(function(S,z){return z.name||wn(15),An(S,z.name)},5381).toString():"",x}var op=We.createContext();op.Consumer;var ip=We.createContext(),Qv=(ip.Consumer,new gi),Ta=Vv();function lp(){return Z.useContext(op)||Qv}function ap(){return Z.useContext(ip)||Ta}var sp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ta);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return wn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ta),this.name+t.hash},e}(),Gv=/([A-Z])/,Yv=/([A-Z])/g,Xv=/^ms-/,Kv=function(e){return"-"+e.toLowerCase()};function ac(e){return Gv.test(e)?e.replace(Yv,Kv).replace(Xv,"-ms-"):e}var sc=function(e){return e==null||e===!1||e===""};function Sn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=Sn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(sc(e))return"";if(Is(e))return"."+e.styledComponentId;if(Jn(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Sn(s,t,n,r)}var u;return e instanceof sp?n?(e.inject(n,r),e.getName(r)):e:Pa(e)?function p(m,v){var w,x,S=[];for(var z in m)m.hasOwnProperty(z)&&!sc(m[z])&&(Array.isArray(m[z])&&m[z].isCss||Jn(m[z])?S.push(ac(z)+":",m[z],";"):Pa(m[z])?S.push.apply(S,p(m[z],z)):S.push(ac(z)+": "+(w=z,(x=m[z])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||w in mv||w.startsWith("--")?String(x).trim():x+"px")+";"));return v?[v+" {"].concat(S,["}"]):S}(e):e.toString()}var uc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Rs(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Jn(e)||Pa(e)?uc(Sn(rc(hi,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:uc(Sn(rc(e,n)))}var up=function(e,t,n){return n===void 0&&(n=qt),e.theme!==n.theme&&e.theme||t||n.theme},Jv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zv=/(^-|-$)/g;function Pl(e){return e.replace(Jv,"-").replace(Zv,"")}var $s=function(e){return ja(np(e)>>>0)};function _o(e){return typeof e=="string"&&!0}var Oa=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},qv=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function eg(e,t,n){var r=e[n];Oa(t)&&Oa(r)?cp(r,t):e[n]=t}function cp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(Oa(l))for(var a in l)qv(a)&&eg(e,l[a],a)}return e}var Wr=We.createContext();Wr.Consumer;function tg(e){var t=Z.useContext(Wr),n=Z.useMemo(function(){return function(r,o){if(!r)return wn(14);if(Jn(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?wn(8):o?pt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?We.createElement(Wr.Provider,{value:n},e.children):null}var jl={};function dp(e,t,n){var r=Is(e),o=!_o(e),i=t.attrs,l=i===void 0?hi:i,a=t.componentId,s=a===void 0?function(c,f){var y=typeof c!="string"?"sc":Pl(c);jl[y]=(jl[y]||0)+1;var k=y+"-"+$s("5.3.11"+y+jl[y]);return f?f+"-"+k:k}(t.displayName,t.parentComponentId):a,u=t.displayName,p=u===void 0?function(c){return _o(c)?"styled."+c:"Styled("+oc(c)+")"}(e):u,m=t.displayName&&t.componentId?Pl(t.displayName)+"-"+t.componentId:t.componentId||s,v=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(c,f,y){return e.shouldForwardProp(c,f,y)&&t.shouldForwardProp(c,f,y)}:e.shouldForwardProp);var x,S=new Bv(n,m,r?e.componentStyle:void 0),z=S.isStatic&&l.length===0,d=function(c,f){return function(y,k,_,P){var O=y.attrs,H=y.componentStyle,R=y.defaultProps,pe=y.foldedComponentIds,ue=y.shouldForwardProp,ge=y.styledComponentId,ze=y.target,we=function(D,g,U){D===void 0&&(D=qt);var j=pt({},g,{theme:D}),ce={};return U.forEach(function(Q){var Y,F,_e,He=Q;for(Y in Jn(He)&&(He=He(j)),He)j[Y]=ce[Y]=Y==="className"?(F=ce[Y],_e=He[Y],F&&_e?F+" "+_e:F||_e):He[Y]}),[j,ce]}(up(k,Z.useContext(Wr),R)||qt,k,O),_t=we[0],Me=we[1],C=function(D,g,U,j){var ce=lp(),Q=ap(),Y=g?D.generateAndInjectStyles(qt,ce,Q):D.generateAndInjectStyles(U,ce,Q);return Y}(H,P,_t),M=_,A=Me.$as||k.$as||Me.as||k.as||ze,J=_o(A),T=Me!==k?pt({},k,{},Me):k,N={};for(var I in T)I[0]!=="$"&&I!=="as"&&(I==="forwardedAs"?N.as=T[I]:(ue?ue(I,qu,A):!J||qu(I))&&(N[I]=T[I]));return k.style&&Me.style!==k.style&&(N.style=pt({},k.style,{},Me.style)),N.className=Array.prototype.concat(pe,ge,C!==ge?C:null,k.className,Me.className).filter(Boolean).join(" "),N.ref=M,Z.createElement(A,N)}(x,c,f,z)};return d.displayName=p,(x=We.forwardRef(d)).attrs=v,x.componentStyle=S,x.displayName=p,x.shouldForwardProp=w,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):hi,x.styledComponentId=m,x.target=r?e.target:e,x.withComponent=function(c){var f=t.componentId,y=function(_,P){if(_==null)return{};var O,H,R={},pe=Object.keys(_);for(H=0;H<pe.length;H++)O=pe[H],P.indexOf(O)>=0||(R[O]=_[O]);return R}(t,["componentId"]),k=f&&f+"-"+(_o(c)?c:Pl(oc(c)));return dp(c,pt({},y,{attrs:v,componentId:k}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?cp({},e.defaultProps,c):c}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),o&&Cv(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var $=function(e){return function t(n,r,o){if(o===void 0&&(o=qt),!Os.isValidElementType(r))return wn(1,String(r));var i=function(){return n(r,o,Rs.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,pt({},o,{},l))},i.attrs=function(l){return t(n,r,pt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(dp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){$[e]=$(e)});var ng=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=rp(n),gi.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var l=i(Sn(this.rules,r,o,i).join(""),""),a=this.componentId+n;o.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&gi.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function rg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Rs.apply(void 0,[e].concat(n)),i="sc-global-"+$s(JSON.stringify(o)),l=new ng(o,i);function a(u){var p=lp(),m=ap(),v=Z.useContext(Wr),w=Z.useRef(p.allocateGSInstance(i)).current;return p.server&&s(w,u,p,v,m),Z.useLayoutEffect(function(){if(!p.server)return s(w,u,p,v,m),function(){return l.removeStyles(w,p)}},[w,u,p,v,m]),null}function s(u,p,m,v,w){if(l.isStatic)l.renderStyles(u,jv,m,w);else{var x=pt({},p,{theme:up(p,v,a.defaultProps)});l.renderStyles(u,x,m,w)}}return We.memo(a)}function og(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Rs.apply(void 0,[e].concat(n)).join(""),i=$s(o);return new sp(i,o)}const ig=$.div`

`;$.div`
  height: 100vh;
  min-height: 800px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 426px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 30px;
    color: white;
    background-color: #191919;
    img {
      width: 280px;
      height: 280px;
    }
  }
  @media (min-width: 427px) {
    background-color: #191919;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    //background-color: red;
    figure {
      margin-top: -250px;
    }
    img {
      padding-left: 15px;
      width: 200px;
      height: 400px;
      border-radius: 5px;
    }
  }
`;$.div`
  @media (max-width: 426px) {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin-top: 15px;
      width: 300px;
      text-align: center;
    }
  }
  @media (min-width: 427px) {
    text-align: center;
    max-width: 700px;
    width: 100%;
    //min-width: 500px;
    min-height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -250px;
    H2 {
      font-size: 50px;
      color: white;
      padding-bottom: 30px;
    }
    span {
      display: flex;
      color: gray;
      font-size: 20px;

      //background-color: blue;
      flex-wrap: wrap;
    }
  }
`;$.div`
  @media (max-width: 426px) {
    margin-top: 10px;
    border-top: 2px solid white;
    button {
      background-color: transparent;
      color: white;
      margin: 5px;
      border: none;
      padding: 2px 5px 10px 5px;
    }
    button:hover {
      border-bottom: 2px solid #2f1ae8;
      transition: 50ms;
    }
  }

  @media (min-width: 427px) {
    margin-top: 25px;
    background-color: #403637;
    width: 80%;
    height: 50px;
    justify-content: center;
    align-items: center;
    button {
      background-color: transparent;
      color: white;
      margin: 5px;
      border: none;
      padding: 2px 5px 10px 5px;
      margin-left: 25px;
      margin-right: 25px;
      font-size: 15px;
    }
    button:hover {
      border-bottom: 2px solid #2f1ae8;
      transition: 300ms;
      cursor: pointer;
      color: #2f1ae8;
    }
    button:focus {
      border-bottom: 2px solid #2f1ae8;
      transition: 50ms;
    }
  }
`;$.div`
  @media (max-width: 426px) {
    min-height: 120px;
    border-bottom: 2px solid white;
    margin-top: 15px;
    padding-bottom: 15px;
  }
  @media (min-width: 427px) {
    margin-left: 50px;
    max-width: 100%;
    margin-top: 15px;
    min-height: 220px;

    align-items: center;
    ol {
      align-items: flex-start;
      margin-left: 30px;
      max-width: 300px;
      width: 100%;
      color: white;
      // background-color: green;
      max-height: 100%;

      display: flex;
      flex-direction: column;
      li {
        padding: 5px;
        height: 100%;
      }
    }
  }
`;$.div`
  color: white;
  color: white;
  @media (max-width: 426px) {
    display: none;
  }
  @media (min-width: 427px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    align-items: center;

    .projetosTitle {
      padding-top: 10px;
      font-size: 60px;
      color: #2f1ae8;
    }
    .prjectLenguage {
      margin-top: 25px;
      margin-bottom: -10px;
      color: orange;
    }
    h3 {
      padding: 40px 10px 10px 10px;
    }
  }
`;$.div`
  @media (max-width: 426px) {
    display: none;
  }

  @media (min-width: 427px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-left: 10px;
  }
`;$.div`
  @media (max-width: 426px) {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    color: white;
    transition-timing-function: ease;
    transition-duration: 2s;
    transition-delay: 1s;
  }
  @media (min-width: 427px) {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    color: white;
    transition-timing-function: ease;
    transition-duration: 2s;
    transition-delay: 1s;
  }
`;$.div`
 @media (max-width: 426px) {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #191919;
   border-radius: 5px;

   h3 {
     padding: 5px;
   }
   img {
     width: 200px;
     height: 250px;
   }
   div {
     img {
       width: 30px;
       height: 30px;
       margin: 5px;
     }
   }
 }
 @media (min-width: 427px) {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #191919;
   border-radius: 5px;

   h3 {
     padding: 5px;
   }
   img {
     width: 300px;
     height: 350px;
   }
   div {
     img {
       width: 50px;
       height: 50px;
       margin: 5px;
     }
   }
 }
`;$.div`
  color: #0000;
  color: white;
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    align-items: center;

    h2 {
      margin-bottom: 15px;
    }
    h3 {
      padding: 40px 10px 10px 10px;
    }
  }
  @media (min-width: 427px) {
    display: none;
  }
`;$.div`
  @media (max-width: 426px) {
    display: flex;
    flex-direction: row;
    max-width: 210px;
    max-height: 100%;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-left: 10px;
    ::-webkit-scrollbar {
      display: none;
    }
    div {
      margin-right: 10px;
    }
  }
  @media (min-width: 427px) {
    display: none;
  }
`;$.div`
  background-color: #2f1ae8;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 25px;
  text-align: center;
`;const lg=$.div`
position: fixed;
top: 0;
left: 50%;
transform: translateX(-50%);
height: 50px;
box-shadow: 2px 3px 26px 0px rgba(0,0,0,0.33);
width: 80%;         
max-width: 90%;  
display: flex;
align-items: center;
justify-content: space-between;

background-color: #ffffff;
margin: 20px 0;      
border: 2px solid #dcdcdc;
border-radius: 20px;  
z-index: 999;       

  @media (max-width: 499px) {
  padding: 10px;
    .divHamburguer {
      
      display: block;
    }
  }
  @media (min-width: 500px) {
    width: 100vw;
    .divHamburguer {
      display: none;
    }
  }
`;var fp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cc=We.createContext&&We.createContext(fp),en=function(){return en=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},en.apply(this,arguments)},ag=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function pp(e){return e&&e.map(function(t,n){return We.createElement(t.tag,en({key:n},t.attr),pp(t.child))})}function mp(e){return function(t){return We.createElement(sg,en({attr:en({},e.attr)},t),pp(e.child))}}function sg(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=ag(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),We.createElement("svg",en({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:en(en({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&We.createElement("title",null,i),e.children)};return cc!==void 0?We.createElement(cc.Consumer,null,function(n){return t(n)}):t(fp)}var de={},Ms={},Kr={},Jr={},hp="Expected a function",dc=NaN,ug="[object Symbol]",cg=/^\s+|\s+$/g,dg=/^[-+]0x[0-9a-f]+$/i,fg=/^0b[01]+$/i,pg=/^0o[0-7]+$/i,mg=parseInt,hg=typeof oo=="object"&&oo&&oo.Object===Object&&oo,vg=typeof self=="object"&&self&&self.Object===Object&&self,gg=hg||vg||Function("return this")(),yg=Object.prototype,xg=yg.toString,wg=Math.max,Sg=Math.min,Tl=function(){return gg.Date.now()};function kg(e,t,n){var r,o,i,l,a,s,u=0,p=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(hp);t=fc(t)||0,yi(n)&&(p=!!n.leading,m="maxWait"in n,i=m?wg(fc(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v);function w(_){var P=r,O=o;return r=o=void 0,u=_,l=e.apply(O,P),l}function x(_){return u=_,a=setTimeout(d,t),p?w(_):l}function S(_){var P=_-s,O=_-u,H=t-P;return m?Sg(H,i-O):H}function z(_){var P=_-s,O=_-u;return s===void 0||P>=t||P<0||m&&O>=i}function d(){var _=Tl();if(z(_))return c(_);a=setTimeout(d,S(_))}function c(_){return a=void 0,v&&r?w(_):(r=o=void 0,l)}function f(){a!==void 0&&clearTimeout(a),u=0,r=s=o=a=void 0}function y(){return a===void 0?l:c(Tl())}function k(){var _=Tl(),P=z(_);if(r=arguments,o=this,s=_,P){if(a===void 0)return x(s);if(m)return a=setTimeout(d,t),w(s)}return a===void 0&&(a=setTimeout(d,t)),l}return k.cancel=f,k.flush=y,k}function Eg(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(hp);return yi(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),kg(e,t,{leading:r,maxWait:t,trailing:o})}function yi(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function _g(e){return!!e&&typeof e=="object"}function Cg(e){return typeof e=="symbol"||_g(e)&&xg.call(e)==ug}function fc(e){if(typeof e=="number")return e;if(Cg(e))return dc;if(yi(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=yi(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(cg,"");var n=fg.test(e);return n||pg.test(e)?mg(e.slice(2),n?2:8):dg.test(e)?dc:+e}var Pg=Eg,Zr={};Object.defineProperty(Zr,"__esModule",{value:!0});Zr.addPassiveEventListener=function(t,n,r){var o=r.name;o||(o=n,console.warn("Listener must be a named function.")),Wo.has(n)||Wo.set(n,new Set);var i=Wo.get(n);if(!i.has(o)){var l=function(){var a=!1;try{var s=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,s)}catch{}return a}();t.addEventListener(n,r,l?{passive:!0}:!1),i.add(o)}};Zr.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),Wo.get(n).delete(r.name||n)};var Wo=new Map;Object.defineProperty(Jr,"__esModule",{value:!0});var jg=Pg,Tg=Og(jg),pc=Zr;function Og(e){return e&&e.__esModule?e:{default:e}}var zg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,Tg.default)(t,n)},oe={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=zg(function(o){oe.scrollHandler(t)},n);return oe.scrollSpyContainers.push(t),(0,pc.addPassiveEventListener)(t,"scroll",r),function(){(0,pc.removePassiveEventListener)(t,"scroll",r),oe.scrollSpyContainers.splice(oe.scrollSpyContainers.indexOf(t),1)}}return function(){}},isMounted:function(t){return oe.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.scrollY!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.scrollX:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.scrollX!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.scrollY:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=oe.scrollSpyContainers[oe.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(oe.currentPositionX(t),oe.currentPositionY(t))})},addStateHandler:function(t){oe.spySetState.push(t)},addSpyHandler:function(t,n){var r=oe.scrollSpyContainers[oe.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t)},updateStates:function(){oe.spySetState.forEach(function(t){return t()})},unmount:function(t,n){oe.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),oe.spySetState&&oe.spySetState.length&&oe.spySetState.indexOf(t)>-1&&oe.spySetState.splice(oe.spySetState.indexOf(t),1),document.removeEventListener("scroll",oe.scrollHandler)},update:function(){return oe.scrollSpyContainers.forEach(function(t){return oe.scrollHandler(t)})}};Jr.default=oe;var nr={},qr={};Object.defineProperty(qr,"__esModule",{value:!0});var Ng=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",i=window&&window.location,l=o?i.pathname+i.search+o:i.pathname+i.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},Ig=function(){return window.location.hash.replace(/^#/,"")},Lg=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},Rg=function(t){return getComputedStyle(t).position!=="static"},Ol=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},$g=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(Rg(t)){if(n.offsetParent!==t){var o=function(p){return p===t||p===document},i=Ol(n,o),l=i.offsetTop,a=i.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(p){return p===document};return Ol(n,s).offsetTop-Ol(t,s).offsetTop};qr.default={updateHash:Ng,getHash:Ig,filterElementInContainer:Lg,scrollOffset:$g};var Vi={},As={};Object.defineProperty(As,"__esModule",{value:!0});As.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var Ds={};Object.defineProperty(Ds,"__esModule",{value:!0});var Mg=Zr,Ag=["mousedown","wheel","touchmove","keydown"];Ds.default={subscribe:function(t){return typeof document<"u"&&Ag.forEach(function(n){return(0,Mg.addPassiveEventListener)(document,n,t)})}};var eo={};Object.defineProperty(eo,"__esModule",{value:!0});var za={registered:{},scrollEvent:{register:function(t,n){za.registered[t]=n},remove:function(t){za.registered[t]=null}}};eo.default=za;Object.defineProperty(Vi,"__esModule",{value:!0});var Dg=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bg=qr;Qi(bg);var Fg=As,mc=Qi(Fg),Hg=Ds,Bg=Qi(Hg),Ug=eo,xt=Qi(Ug);function Qi(e){return e&&e.__esModule?e:{default:e}}var vp=function(t){return mc.default[t.smooth]||mc.default.defaultEasing},Wg=function(t){return typeof t=="function"?t:function(){return t}},Vg=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Na=function(){return Vg()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),gp=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},yp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},xp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},Qg=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},Gg=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},Yg=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){xt.default.registered.end&&xt.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var i=e.bind(null,t,n);Na.call(window,i);return}xt.default.registered.end&&xt.default.registered.end(o.to,o.target,o.currentPosition)},bs=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},to=function(t,n,r,o){n.data=n.data||gp(),window.clearTimeout(n.data.delayTimeout);var i=function(){n.data.cancel=!0};if(Bg.default.subscribe(i),bs(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?yp(n):xp(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){xt.default.registered.end&&xt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Wg(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var l=vp(n),a=Yg.bind(null,l,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){xt.default.registered.begin&&xt.default.registered.begin(n.data.to,n.data.target),Na.call(window,a)},n.delay);return}xt.default.registered.begin&&xt.default.registered.begin(n.data.to,n.data.target),Na.call(window,a)},Gi=function(t){return t=Dg({},t),t.data=t.data||gp(),t.absolute=!0,t},Xg=function(t){to(0,Gi(t))},Kg=function(t,n){to(t,Gi(n))},Jg=function(t){t=Gi(t),bs(t),to(t.horizontal?Qg(t):Gg(t),t)},Zg=function(t,n){n=Gi(n),bs(n);var r=n.horizontal?yp(n):xp(n);to(t+r,n)};Vi.default={animateTopScroll:to,getAnimationType:vp,scrollToTop:Xg,scrollToBottom:Jg,scrollTo:Kg,scrollMore:Zg};Object.defineProperty(nr,"__esModule",{value:!0});var qg=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e1=qr,t1=Fs(e1),n1=Vi,r1=Fs(n1),o1=eo,Co=Fs(o1);function Fs(e){return e&&e.__esModule?e:{default:e}}var Po={},hc=void 0;nr.default={unmount:function(){Po={}},register:function(t,n){Po[t]=n},unregister:function(t){delete Po[t]},get:function(t){return Po[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return hc=t},getActiveLink:function(){return hc},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=qg({},n,{absolute:!1});var o=n.containerId,i=n.container,l=void 0;o?l=document.getElementById(o):i&&i.nodeType?l=i:l=document,n.absolute=!0;var a=n.horizontal,s=t1.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){Co.default.registered.begin&&Co.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,Co.default.registered.end&&Co.default.registered.end(t,r);return}r1.default.animateTopScroll(s,n,t,r)}};var wp={exports:{}},i1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",l1=i1,a1=l1;function Sp(){}function kp(){}kp.resetWarningCache=Sp;var s1=function(){function e(r,o,i,l,a,s){if(s!==a1){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:kp,resetWarningCache:Sp};return n.PropTypes=n,n};wp.exports=s1();var Yi=wp.exports,Xi={};Object.defineProperty(Xi,"__esModule",{value:!0});var u1=qr,zl=c1(u1);function c1(e){return e&&e.__esModule?e:{default:e}}var d1={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return zl.default.getHash()},changeHash:function(t,n){this.isInitialized()&&zl.default.getHash()!==t&&zl.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Xi.default=d1;Object.defineProperty(Kr,"__esModule",{value:!0});var jo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f1=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p1=Z,vc=no(p1),m1=Jr,To=no(m1),h1=nr,v1=no(h1),g1=Yi,ne=no(g1),y1=Xi,At=no(y1);function no(e){return e&&e.__esModule?e:{default:e}}function x1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function S1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var gc={to:ne.default.string.isRequired,containerId:ne.default.string,container:ne.default.object,activeClass:ne.default.string,activeStyle:ne.default.object,spy:ne.default.bool,horizontal:ne.default.bool,smooth:ne.default.oneOfType([ne.default.bool,ne.default.string]),offset:ne.default.number,delay:ne.default.number,isDynamic:ne.default.bool,onClick:ne.default.func,duration:ne.default.oneOfType([ne.default.number,ne.default.func]),absolute:ne.default.bool,onSetActive:ne.default.func,onSetInactive:ne.default.func,ignoreCancelEvents:ne.default.bool,hashSpy:ne.default.bool,saveHashHistory:ne.default.bool,spyThrottle:ne.default.number};Kr.default=function(e,t){var n=t||v1.default,r=function(i){S1(l,i);function l(a){x1(this,l);var s=w1(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return o.call(s),s.state={active:!1},s.beforeUnmountCallbacks=[],s}return f1(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();if(!To.default.isMounted(s)){var u=To.default.mount(s,this.props.spyThrottle);this.beforeUnmountCallbacks.push(u)}this.props.hashSpy&&(At.default.isMounted()||At.default.mount(n),At.default.mapContainer(this.props.to,s)),To.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){To.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(s){return s()})}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=jo({},this.props.style,this.props.activeStyle):u=jo({},this.props.style);var p=jo({},this.props);for(var m in gc)p.hasOwnProperty(m)&&delete p[m];return p.className=s,p.style=u,p.onClick=this.handleClick,vc.default.createElement(e,p)}}]),l}(vc.default.PureComponent),o=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,jo({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(At.default.isMounted()&&!At.default.isInitialized())){var p=l.props.horizontal,m=l.props.to,v=null,w=void 0,x=void 0;if(p){var S=0,z=0,d=0;if(u.getBoundingClientRect){var c=u.getBoundingClientRect();d=c.left}if(!v||l.props.isDynamic){if(v=n.get(m),!v)return;var f=v.getBoundingClientRect();S=f.left-d+a,z=S+f.width}var y=a-l.props.offset;w=y>=Math.floor(S)&&y<Math.floor(z),x=y<Math.floor(S)||y>=Math.floor(z)}else{var k=0,_=0,P=0;if(u.getBoundingClientRect){var O=u.getBoundingClientRect();P=O.top}if(!v||l.props.isDynamic){if(v=n.get(m),!v)return;var H=v.getBoundingClientRect();k=H.top-P+s,_=k+H.height}var R=s-l.props.offset;w=R>=Math.floor(k)&&R<Math.floor(_),x=R<Math.floor(k)||R>=Math.floor(_)}var pe=n.getActiveLink();if(x){if(m===pe&&n.setActiveLink(void 0),l.props.hashSpy&&At.default.getHash()===m){var ue=l.props.saveHashHistory,ge=ue===void 0?!1:ue;At.default.changeHash("",ge)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(m,v))}if(w&&(pe!==m||l.state.active===!1)){n.setActiveLink(m);var ze=l.props.saveHashHistory,we=ze===void 0?!1:ze;l.props.hashSpy&&At.default.changeHash(m,we),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(m,v))}}}};return r.propTypes=gc,r.defaultProps={offset:0},r};Object.defineProperty(Ms,"__esModule",{value:!0});var k1=Z,yc=Ep(k1),E1=Kr,_1=Ep(E1);function Ep(e){return e&&e.__esModule?e:{default:e}}function C1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function P1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var j1=function(e){P1(t,e);function t(){var n,r,o,i;C1(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return i=(r=(o=xc(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),o),o.render=function(){return yc.default.createElement("a",o.props,o.props.children)},r),xc(o,i)}return t}(yc.default.Component);Ms.default=(0,_1.default)(j1);var Hs={};Object.defineProperty(Hs,"__esModule",{value:!0});var T1=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O1=Z,wc=_p(O1),z1=Kr,N1=_p(z1);function _p(e){return e&&e.__esModule?e:{default:e}}function I1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function R1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var $1=function(e){R1(t,e);function t(){return I1(this,t),L1(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return T1(t,[{key:"render",value:function(){return wc.default.createElement("button",this.props,this.props.children)}}]),t}(wc.default.Component);Hs.default=(0,N1.default)($1);var Bs={},Ki={};Object.defineProperty(Ki,"__esModule",{value:!0});var M1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A1=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D1=Z,Sc=Ji(D1),b1=Kf;Ji(b1);var F1=nr,kc=Ji(F1),H1=Yi,Ec=Ji(H1);function Ji(e){return e&&e.__esModule?e:{default:e}}function B1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function W1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Ki.default=function(e){var t=function(n){W1(r,n);function r(o){B1(this,r);var i=U1(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i.childBindings={domNode:null},i}return A1(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;kc.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){kc.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return Sc.default.createElement(e,M1({},this.props,{parentBindings:this.childBindings}))}}]),r}(Sc.default.Component);return t.propTypes={name:Ec.default.string,id:Ec.default.string},t};Object.defineProperty(Bs,"__esModule",{value:!0});var _c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V1=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Q1=Z,Cc=Us(Q1),G1=Ki,Y1=Us(G1),X1=Yi,Pc=Us(X1);function Us(e){return e&&e.__esModule?e:{default:e}}function K1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J1(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Z1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Cp=function(e){Z1(t,e);function t(){return K1(this,t),J1(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return V1(t,[{key:"render",value:function(){var r=this,o=_c({},this.props);return delete o.name,o.parentBindings&&delete o.parentBindings,Cc.default.createElement("div",_c({},o,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}(Cc.default.Component);Cp.propTypes={name:Pc.default.string,id:Pc.default.string};Bs.default=(0,Y1.default)(Cp);var Nl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jc=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Tc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function zc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Oo=Z,an=Jr,Il=nr,ie=Yi,Dt=Xi,Nc={to:ie.string.isRequired,containerId:ie.string,container:ie.object,activeClass:ie.string,spy:ie.bool,smooth:ie.oneOfType([ie.bool,ie.string]),offset:ie.number,delay:ie.number,isDynamic:ie.bool,onClick:ie.func,duration:ie.oneOfType([ie.number,ie.func]),absolute:ie.bool,onSetActive:ie.func,onSetInactive:ie.func,ignoreCancelEvents:ie.bool,hashSpy:ie.bool,spyThrottle:ie.number},q1={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Il,o=function(l){zc(a,l);function a(s){Tc(this,a);var u=Oc(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(u),u.state={active:!1},u}return jc(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,p=this.props.container;return u?document.getElementById(u):p&&p.nodeType?p:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();an.isMounted(u)||an.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Dt.isMounted()||Dt.mount(r),Dt.mapContainer(this.props.to,u)),this.props.spy&&an.addStateHandler(this.stateHandler),an.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){an.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var p=Nl({},this.props);for(var m in Nc)p.hasOwnProperty(m)&&delete p[m];return p.className=u,p.onClick=this.handleClick,Oo.createElement(t,p)}}]),a}(Oo.Component),i=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,Nl({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(Dt.isMounted()&&!Dt.isInitialized())){var p=a.props.to,m=null,v=0,w=0,x=0;if(u.getBoundingClientRect){var S=u.getBoundingClientRect();x=S.top}if(!m||a.props.isDynamic){if(m=r.get(p),!m)return;var z=m.getBoundingClientRect();v=z.top-x+s,w=v+z.height}var d=s-a.props.offset,c=d>=Math.floor(v)&&d<Math.floor(w),f=d<Math.floor(v)||d>=Math.floor(w),y=r.getActiveLink();if(f)return p===y&&r.setActiveLink(void 0),a.props.hashSpy&&Dt.getHash()===p&&Dt.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),an.updateStates();if(c&&y!==p)return r.setActiveLink(p),a.props.hashSpy&&Dt.changeHash(p),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(p)),an.updateStates()}}};return o.propTypes=Nc,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){zc(o,r);function o(i){Tc(this,o);var l=Oc(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return l.childBindings={domNode:null},l}return jc(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Il.unregister(this.props.name)}},{key:"registerElems",value:function(l){Il.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return Oo.createElement(t,Nl({},this.props,{parentBindings:this.childBindings}))}}]),o}(Oo.Component);return n.propTypes={name:ie.string,id:ie.string},n}},e0=q1;Object.defineProperty(de,"__esModule",{value:!0});de.Helpers=de.ScrollElement=de.ScrollLink=de.animateScroll=de.scrollSpy=de.Events=de.scroller=de.Element=de.Button=Mp=de.Link=void 0;var t0=Ms,Pp=Et(t0),n0=Hs,jp=Et(n0),r0=Bs,Tp=Et(r0),o0=nr,Op=Et(o0),i0=eo,zp=Et(i0),l0=Jr,Np=Et(l0),a0=Vi,Ip=Et(a0),s0=Kr,Lp=Et(s0),u0=Ki,Rp=Et(u0),c0=e0,$p=Et(c0);function Et(e){return e&&e.__esModule?e:{default:e}}var Mp=de.Link=Pp.default;de.Button=jp.default;de.Element=Tp.default;de.scroller=Op.default;de.Events=zp.default;de.scrollSpy=Np.default;de.animateScroll=Ip.default;de.ScrollLink=Lp.default;de.ScrollElement=Rp.default;de.Helpers=$p.default;de.default={Link:Pp.default,Button:jp.default,Element:Tp.default,scroller:Op.default,Events:zp.default,scrollSpy:Np.default,animateScroll:Ip.default,ScrollLink:Lp.default,ScrollElement:Rp.default,Helpers:$p.default};const d0=$.li`
  list-style: none;
  cursor: pointer;
  font-weight: bolder;

  @media (max-width: 426px) {
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    text-align: center;

    .link {
      position: relative;
      color: ${({theme:e})=>e.colors.secondary};
      text-decoration: none;
      display: inline-block;
      padding: 8px;
      border-radius: 5px;
      transition: 0.4s;
      overflow: hidden;
    }

    .link::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: ${({theme:e})=>e.colors.primary};
      transition: width 0.3s ease;
      border-radius: 50px;
    }

    .link:hover {
      color: ${({theme:e})=>e.colors.primary};
    }

    .link:hover::after {
      width: 100%;
    }
  }

  @media (min-width: 427px) {
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
      position: relative;
      width: 100%;
      text-align: center;
      color: ${({theme:e})=>e.colors.secondaryDark};
      font-size: 18px;
      padding: 10px;
      text-decoration: none;
      transition: 0.3s ease;
      display: inline-block;
      overflow: hidden;
    }

    .link::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 3px;
      background-color: ${({theme:e})=>e.colors.primary};
      bottom: 0;
      left: 0;
      transition: width 0.3s ease;
      border-radius: 50px;
    }

    .link:hover {
      transform: translateY(-2px);
      color: ${({theme:e})=>e.colors.primary};
    }

    .link:hover::after {
      width: 100%;
    }
  }
`,f0=({sectionDirection:e="Apresentacao",title:t="Home"})=>h.jsx(d0,{children:h.jsx(Mp,{activeClass:"active",className:"link",to:e,spy:!0,smooth:!0,offset:-70,duration:500,children:t})}),p0=$.div`
  @media (max-width: 500px) {
    display: ${({show:e})=>e?"flex":"none"};
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    border: 2px solid ${({theme:e})=>e.secondaryDark};

    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    opacity: ${({show:e})=>e?1:0};
    transform: ${({show:e})=>e?"translateX(0%)":"translateX(-15%)"};

    position: fixed;
    top: 50px;
    left: 12px;
    width: 150px;
    min-height: 200px;
    padding: 18px;

    border-radius: 8px;
    z-index: 999;

    p {
      font-size: 22px;
      color: ${({theme:e})=>e.secondaryDark};
      align-self: flex-end;
      margin-bottom: 10px;
      cursor: pointer;
      font-weight: bold;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 18px;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          color: ${({theme:e})=>e.secondaryDark};
        }
      }
    }
  }

  /* DESKTOP A PARTIR DE 501PX */
  @media (min-width: 501px) {
    height: 80px;
    align-items: center;
    width: 70%;

    ul {
      display: flex;
      justify-content: center;
      overflow-x: hidden;
      min-width: 100%;
      align-items: center;
      text-align: center;
      height: 100%;
    }

    p {
      display: none;
    }
  }
`,m0=[{sectionDirection:"Apresentacao",title:"Início"},{sectionDirection:"projetos",title:"Projetos"},{sectionDirection:"sobre",title:"Sobre"},{sectionDirection:"contato",title:"Contato"}],h0=({showMenu:e,showClickMenu:t})=>h.jsx(p0,{show:e,children:h.jsx("ul",{children:m0.map(n=>h.jsx(f0,{title:n.title,sectionDirection:n.sectionDirection}))})}),v0=$.div`
  @media (max-width: 426px) {
    display: flex;
    width: 200px;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;

    .icon {
      color: black;
    }
    .icon:hover {
      color: white;
    }
  }

  @media (min-width: 427px) {
    display: flex;
    width: 30%;
    flex-wrap: nowrap;
    justify-content: flex-end;
    a {
      margin: 5px;
      width: 30%;

    }
    div {
      margin: 5px;
      width: 30%;

    }
    .icon {
      color: black;
    }
    .icon:hover {
      color: white;
    }
  }
`,g0=()=>h.jsx(y0,{children:h.jsxs("button",{className:"Btn",children:[h.jsx("span",{className:"svgContainer",children:h.jsx("svg",{fill:"white",className:"svgIcon",viewBox:"0 0 448 512",height:"1.5em",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),h.jsx("span",{className:"BG"})]})}),y0=$.div`
  .Btn {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    /* overflow: hidden; */
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all .3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all .3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }`,x0=()=>h.jsx(w0,{children:h.jsxs("button",{className:"LinkedinBtn",children:[h.jsx("span",{className:"svgContainer",children:h.jsx("svg",{viewBox:"0 0 24 24",height:24,width:24,xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),h.jsx("span",{className:"BG"})]})}),w0=$.div`
  .LinkedinBtn {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .LinkedinBtn .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    letter-spacing: 1px; /* Adjusted letter spacing */
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .LinkedinBtn .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #0077b5;
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .LinkedinBtn:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Added box shadow effect */
  }

  .LinkedinBtn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .LinkedinBtn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }`,S0=()=>h.jsx(k0,{children:h.jsxs("button",{className:"Btn",children:[h.jsx("span",{className:"svgContainer",children:h.jsx("svg",{fill:"white",viewBox:"0 0 496 512",height:"1.6em",children:h.jsx("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})}),h.jsx("span",{className:"BG"})]})}),k0=$.div`
  .Btn {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    /* overflow: hidden; */
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all .3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #181818;
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all .3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
    backdrop-filter: blur(4px);
  }`,E0=({handleClick:e=()=>{}})=>h.jsx(_0,{children:h.jsxs("label",{className:"hamburger",children:[h.jsx("input",{onClick:()=>e(),type:"checkbox"}),h.jsxs("svg",{viewBox:"0 0 32 32",children:[h.jsx("path",{className:"line line-top-bottom",d:"M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"}),h.jsx("path",{className:"line",d:"M7 16 27 16"})]})]})}),_0=$.div`
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    /* The size of the SVG defines the overall size */
    height: 3em;
    /* Define the transition for transforming the SVG */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    /* Define the transition for transforming the Stroke */
    transition:
      stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }`,C0=({handleFunction:e=null})=>h.jsx(P0,{children:h.jsxs("button",{onClick:()=>{console.log({handleFunction:e}),e&&e()},className:"Btn",children:[h.jsx("span",{className:"svgContainer",children:h.jsx("svg",{viewBox:"0 0 448 512",fill:"white",height:"1.6em",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"})})}),h.jsx("span",{className:"BG"})]})}),P0=$.div`
  .Btn {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    /* overflow: hidden; */
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #075e54;
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
    backdrop-filter: blur(4px);
  }
`;function j0(e="+5544998790120",t="Olá Cláudio"){const n=encodeURIComponent(t),r=`https://wa.me/${e}?text=${n}`;window.open(r,"_blank")}const T0=({})=>h.jsxs(v0,{children:[h.jsx("a",{href:"https://www.linkedin.com/in/claudio-in%C3%A1cio-felipe-junior/",target:"_blank",children:h.jsx(x0,{})}),h.jsx("a",{href:"https://github.com/claudio-inacio",target:"_blank",children:h.jsx(S0,{})}),h.jsx("div",{children:h.jsx(C0,{handleFunction:j0})}),h.jsx("a",{href:"https://www.instagram.com/c.inaciio/",target:"_blank",children:h.jsx(g0,{})})]}),O0=({showMenu:e,showClickMenu:t})=>h.jsxs(lg,{children:[h.jsx(h0,{showMenu:e,showClickMenu:t}),h.jsx("div",{className:"divHamburguer",children:h.jsx(E0,{handleClick:t})}),h.jsx(T0,{})]}),z0="/assets/eu-portifolio-removebg-preview-75PK4hRq.png",N0=$.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 200px;
  margin-bottom: 200px;
  align-items: center;
  gap: 30px;

  @media (max-width: 710px) {
    padding: 20px 0;
    flex-direction: column; /* MOBILE → um abaixo do outro */
  }

  @media (min-width: 711px) {
    padding-top: 100px;
    flex-direction: row; /* DESKTOP → lado a lado */
    justify-content: center;
    align-items: start;
     gap: 30px;
  }
`,I0=$.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 400px;

    height: auto;
    border-radius: 50px;
    image-rendering: crisp-edges;
  }
  @media (max-width: 710px) {
    img {
      max-width: 300px;
      width: 70%;
    }
  }
  @media (max-width: 711px) {
    img {
      width: 100%;
    }
  }
`,L0=({image:e})=>h.jsx(I0,{children:h.jsx("img",{src:e,alt:"MInha Imagem Pixelada"})}),R0=({handleDownload:e})=>h.jsx($0,{children:h.jsxs("button",{className:"download-button",onClick:()=>e(),children:[h.jsxs("div",{className:"docs",children:[h.jsxs("svg",{viewBox:"0 0 24 24",width:18,height:18,stroke:"currentColor",strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),h.jsx("polyline",{points:"14 2 14 8 20 8"}),h.jsx("line",{x1:16,y1:13,x2:8,y2:13}),h.jsx("line",{x1:16,y1:17,x2:8,y2:17}),h.jsx("polyline",{points:"10 9 9 9 8 9"})]}),h.jsx("span",{className:"label-normal",children:"Curriculo"}),h.jsx("span",{className:"label-hover",children:"Baixar"})]}),h.jsx("div",{className:"download",children:h.jsxs("svg",{viewBox:"0 0 24 24",width:24,height:24,stroke:"currentColor",strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[h.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),h.jsx("polyline",{points:"7 10 12 15 17 10"}),h.jsx("line",{x1:12,y1:15,x2:12,y2:3})]})})]})}),$0=$.div`
  .download-button {
    padding: 10px;
    position: relative;
    border-width: 0;
    color: ${({theme:e})=>e.colors.white};
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 25px;
    cursor: pointer;
    border-radius: 6px;
    z-index: 1;
  }

  .docs {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    min-height: 24px;
    padding: 0 8px;
    border-radius: 6px;
    background-color: ${({theme:e})=>e.colors.primary};
    transition: all 0.4s ease;
    position: relative;
  }

  .label-normal,
  .label-hover {
    color: #fff;
  }

  .label-normal {
    opacity: 1;
    transition: opacity 0.2s;
  }

  .label-hover {
    opacity: 0;
    position: absolute;
    left: 30px;
    transition: opacity 0.2s;
  }

  .download-button:hover .label-normal {
    opacity: 0;
  }

  .download-button:hover .label-hover {
    opacity: 1;
  }

  .download {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    margin: 0 auto;
    z-index: -1;
    border-radius: 6px;
    transform: translateY(0%);
    background-color: ${({theme:e})=>e.colors.primary};
    border: 1px solid ${({theme:e})=>e.colors.primaryDark};
    transition: all 0.4s ease;
  }

  .download-button:hover .download {
    transform: translateY(100%);
  }
`,M0=$.div`
  box-sizing: border-box;
  max-width: 100%; 
  flex-shrink: 1; 
  overflow: hidden;

  /* MOBILE */
  @media (max-width: 710px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);

    padding: 18px;
    border-radius: 8px;
    width: 100%;
    margin: 0 auto;
    text-align: center;

    h1 {
      color: ${({theme:e})=>e.colors.primary};
      font-size: 22px;
      font-weight: bold;
    }

    span {
      font-size: 14px;
      color: ${({theme:e})=>e.colors.secondaryDark};
      line-height: 1.4;
      max-width: 100%;
    }

    button {
      margin-top: 8px;
      max-width: 100%;
    }
  }

  /* DESKTOP */
  @media (min-width: 711px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
    justify-content: center;
    align-items: flex-start;

    padding: 24px 32px;

    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    border-radius: 10px;

    /* largura adaptável */
    width: clamp(280px, 40vw, 550px);

    h1 {
      color: ${({theme:e})=>e.colors.primary};
      font-weight: bold;
      font-size: clamp(22px, 4vw, 35px);
      max-width: 100%;
    }

    span {
      color: ${({theme:e})=>e.colors.secondaryDark};
      line-height: 1.5;
      font-size: clamp(14px, 1.6vw, 18px);
      max-width: 100%;
    }

    button {
      padding: 12px 22px;
      background: ${({theme:e})=>e.colors.primary};
      border-radius: 8px;
      color: white;
      font-weight: bold;
      font-size: clamp(14px, 1.6vw, 18px);
      transition: 0.2s;
      cursor: pointer;
      max-width: 100%;

      &:hover {
        background: ${({theme:e})=>e.colors.primaryDark};
      }
    }
  }
`,A0=({})=>{const e=()=>{window.open("https://drive.google.com/file/d/1AIi2e7pMWo-0Yd7SYMixwIJQXAQ7G2yc/view?usp=sharing","_blank")};return h.jsxs(M0,{children:[h.jsxs("h1",{children:["<Hello World! />",h.jsx("br",{}),"Me chamo Claudio Inácio!"]}),h.jsxs("span",{children:["Desenvolvedor FRONT-END! ",h.jsx("br",{}),"Construo interfaces rápidas, modernas e fáceis de usar — transformando processos burocráticos em experiências simples e inteligentes 🚀"]}),h.jsx(R0,{handleDownload:e})]})},D0=({showMenu:e,showClickMenu:t})=>h.jsxs(N0,{id:"Apresentacao",children:[h.jsx(A0,{}),h.jsx(L0,{image:z0})]}),b0=$.div`
  width: 100px;
  height: 100px;
  border-radius: 14px;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.2s ease;
  cursor: default;

  &:hover {
    transform: translateY(-4px);
    border-color: #6a7dfc;
    cursor: pointer;
    box-shadow: 0 0 12px #6a7dfc40;
  }
  &:hover span.tooltip {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -10px);
  }

  /* MOBILE */
  @media (max-width: 710px) {
    width: 70px;
    height: 70px;
  }
`,F0=$.div`
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 710px) {
    font-size: 32px;
  }

  i {
    font-size: inherit;
  }
`,H0=$.span`
  font-size: 0.9rem;
  font-weight: 800;
  color: #595959;

  @media (max-width: 710px) {
    font-size: 0.75rem;
  }
`,B0=$.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 6px 10px;
  background-color: #b3b3b3;
  color: #fff;
  font-size: 0.75rem;
  border-radius: 6px;
  opacity: 0;
  visibility: hidden;
  transition: 0.25s ease;
  white-space: nowrap;
  pointer-events: none;
`,U0=({onMouseLeave:e,onMouseEnter:t,icon:n,name:r,exibeName:o=!1,description:i})=>h.jsxs(b0,{id:`technologi-item-liste${r}`,title:r,onMouseEnter:t,onMouseLeave:e,children:[h.jsx(F0,{children:n}),h.jsx(B0,{className:"tooltip",children:i}),o&&h.jsx(H0,{children:r})]}),W0=og`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`,V0=$.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;

  .carousel-track {
    display: flex;
    gap: 20px;
    animation: ${W0} 30s linear infinite;
    animation-play-state: running;
  }

  h2 {
    color: ${({theme:e})=>e.colors.primary};
    font-weight: bold;
    font-size: clamp(22px, 4vw, 35px);
    max-width: 100%;
  }

  @media (max-width: 710px) {
    h2 {
      color: ${({theme:e})=>e.colors.primary};
      font-size: 22px;
      font-weight: bold;
    }

    .carousel-track {
      gap: 30px;
      animation-duration: 15s;
    }
  }
`,Ic=[{name:"HTML-5",exibeName:!1,icon:h.jsx("i",{class:"devicon-html5-plain-wordmark colored"}),description:"Linguagem base para estruturar páginas web e conteúdo visual."},{name:"CSS-3",exibeName:!1,icon:h.jsx("i",{class:"devicon-css3-plain-wordmark colored"}),description:"Responsável por estilos, layout, responsividade e animações."},{name:"JAVA SCRIPT",exibeName:!1,icon:h.jsx("i",{class:"devicon-javascript-plain colored"}),description:"Linguagem que adiciona interatividade e lógica às páginas web."},{name:"TYPE SCRIPT",exibeName:!1,icon:h.jsx("i",{class:"devicon-typescript-plain colored"}),description:"Superset do JavaScript com tipagem estática e maior segurança."},{name:"REACT",exibeName:!1,icon:h.jsx("i",{class:"devicon-react-original-wordmark colored"}),description:"Biblioteca para criar interfaces modernas, reativas e escaláveis."},{name:"REACT-ROUTER",exibeName:!1,icon:h.jsx("i",{class:"devicon-reactrouter-plain-wordmark colored"}),description:"Gerencia rotas e navegação em aplicações React single-page."},{name:"TAILWIND-CSS",exibeName:!1,icon:h.jsx("i",{class:"devicon-tailwindcss-plain-wordmark colored"}),description:"Framework de CSS utilitário para criação rápida de interfaces."},{name:"NEXT-JS",exibeName:!1,icon:h.jsx("i",{class:"devicon-nextjs-original-wordmark colored"}),description:"Framework React com SSR, performance e otimização automáticos."},{name:"SASS",exibeName:!1,icon:h.jsx("i",{class:"devicon-sass-original colored"}),description:"Pré-processador CSS com variáveis, mixins e organização avançada."},{name:"STYLED COMPONENTS",exibeName:!1,icon:h.jsx("i",{class:"devicon-styledcomponents-plain colored"}),description:"Estilização de componentes React usando CSS dentro do JavaScript."},{name:"REDUX",exibeName:!0,icon:h.jsx("i",{class:"devicon-redux-original colored"}),description:"Gerenciador de estado previsível para aplicações React complexas."},{name:"AXIOS",exibeName:!1,icon:h.jsx("i",{class:"devicon-axios-plain-wordmark colored"}),description:"Cliente HTTP usado para consumir APIs com suporte a promessas."},{name:"POSTMAN",exibeName:!0,icon:h.jsx("i",{class:"devicon-postman-plain colored"}),description:"Ferramenta para testar e documentar APIs de forma simples e rápida."},{name:"NGROK",exibeName:!1,icon:h.jsx("i",{class:"devicon-ngrok-original colored"}),description:"Cria túneis seguros que expõem servidores locais à internet."}],Q0=()=>{const e=Z.useRef(null),t=()=>{e.current&&(e.current.style.animationPlayState="paused")},n=()=>{e.current&&(e.current.style.animationPlayState="running")};return h.jsx(V0,{id:"projetos",children:h.jsx("div",{className:"carousel-track",ref:e,children:[...Ic,...Ic].map((r,o)=>h.jsx(U0,{icon:r.icon,description:r.description,exibeName:r.exibeName,name:r.name,onMouseEnter:t,onMouseLeave:n},o))})})},G0=$.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  h2 {
    color: ${({theme:e})=>e.colors.primary};
    font-weight: bold;
    font-size: clamp(22px, 4vw, 35px);
    max-width: 100%;
  }


  @media (max-width: 710px) {
    flex-direction: column;
    h2 {
      color: ${({theme:e})=>e.colors.primary};
      font-weight: bold;
      font-size: clamp(22px, 4vw, 35px);
      max-width: 100%;
    }
  }

  @media (min-width: 711px) {
    h2 {
      color: ${({theme:e})=>e.colors.primary};
      font-weight: bold;
      font-size: clamp(22px, 4vw, 35px);
      max-width: 100%;
    }
    justify-content: center;

    padding-left: 50px;
    padding-rigth: 100px;
  }
`,Y0=$.div`

  display: flex;
  flex-direction: row;

`,X0="/assets/background-image-3-CpTA_kfN.png",K0="/assets/hamburgueria-project-vUDcxfOn.png",J0="/assets/instagram-projetct-portifolio-BfKB8Szp.png",Z0="/assets/lista-de-frutas-projeto-MNv9nQsP.png",q0="/assets/gabriel-do-cel-project-DXGOivt4.png",ey="/assets/portifolio-project-DyTXDMwm.png",ty="/assets/curriculo-projeto-DmcsJt9_.png",ny="/assets/project-pedra-papel-tesoura-fFIj84v2.png",ry="/assets/ecommerce-project-CrsQM8dM.png",oy="/assets/jogo-genius-projeto-BvqmGSza.png",Lc=({color:e="#00ad54",text:t="Ver projeto",linkReference:n,icon:r})=>h.jsx(iy,{style:{"--clr":e},children:h.jsxs("button",{onClick:()=>window.open(n,"_blank"),className:"button",children:[h.jsx("span",{className:"button-decor"}),h.jsxs("div",{className:"button-content",children:[h.jsx("div",{className:"button__icon",children:r||h.jsxs("svg",{viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:24,children:[h.jsx("circle",{opacity:"0.5",cx:25,cy:25,r:23,fill:"url(#grad)"}),h.jsx("path",{fill:"#fff",fillRule:"evenodd",clipRule:"evenodd",d:`M34.42 15.93c.382-1.145-.706-2.234-1.851-1.852l-18.568 
                    6.189c-1.186.395-1.362 2-.29 2.644l5.12 3.072a1.464 1.464 
                    0 001.733-.167l5.394-4.854a1.464 1.464 0 011.958 
                    2.177l-5.154 4.638a1.464 1.464 0 00-.276 
                    1.841l3.101 5.17c.644 1.072 2.25.896 
                    2.645-.29L34.42 15.93z`}),h.jsx("defs",{children:h.jsxs("linearGradient",{id:"grad",x1:"25",y1:"2",x2:"25",y2:"48",gradientUnits:"userSpaceOnUse",children:[h.jsx("stop",{stopColor:"#fff",stopOpacity:"0.8"}),h.jsx("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0"})]})})]})}),h.jsx("span",{className:"button__text",children:t})]})]})}),iy=$.div`
  --clr: #00ad54;

  .button {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
    background: #ffffff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .button-decor {
    position: absolute;
    inset: 0;
    background: var(--clr);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 0;
  }

  .button-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    z-index: 1;
  }

  .button__icon {
    width: 35px;
    height: 40px;
    background: var(--clr);
    display: grid;
    place-items: center;
  }

  .button__text {
    padding: 1px 1.5rem 1px;
    padding-left: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
    transition: color 0.2s ease;
  }

  .button:hover .button__text {
    color: #fff;
  }

  .button:hover .button-decor {
    transform: translateX(0);
  }
`,ly=$.div`  
  display: flex;
  justify-content: space-between;
  padding: 10px;

  /* Empurra os botões para o final do card */
  margin-top: auto;

  .btn {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    border-radius: 10px;
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    transition: 0.2s ease;
  }

  .demo {
    background: #007bff;
  }

  .demo:hover {
    background: #006ae0;
  }

  .code {
    background: #222;
  }

  .code:hover {
    background: #111;
  }

  @media (max-width: 710px) {
    padding: 12px;

    .btn {
      font-size: 0.85rem;
      padding: 9px 0;
    }
  }
`;function ay(e){return mp({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function sy(e){return mp({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}}]})(e)}const uy=({demoUrl:e,codeUrl:t})=>h.jsxs(ly,{children:[t&&h.jsx(Lc,{linkReference:t,text:"Ver Código",icon:h.jsx(ay,{}),color:"linear-gradient(135deg, #f2f2f2, #c9c9c9)"}),e&&h.jsx(Lc,{linkReference:e,icon:h.jsx(sy,{}),color:"linear-gradient(135deg, #f2f2f2, #c9c9c9)"})]}),cy=$.div`
  width: 100%;
  height: 170px;
  position: relative;
  border-radius: 14px 14px 0 0;
  overflow: hidden;

  background-image: url(${e=>e.background});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  .overlay {
    position: absolute;
    inset: 0;    
    z-index: 1;
  }

  .main-image {
    position: relative;
    z-index: 2;
    width: 100%;          
    max-width: 340px;   
    border-radius: 14px;
    object-fit: cover;
    box-shadow: 0 10px 25px rgba(0,0,0,0.38);

    transition: transform 0.25s ease;
  }

  @media (max-width: 710px) {
    height: 170px;
    .main-image {
      width: 100%;       
      max-width: 300px;  
    }
  }

  @media (min-width: 711px) {
    height: 170px;       

    .main-image {
      width: 100%;              
    }
  }
`,dy=({backgroundImage:e,mainImage:t})=>h.jsxs(cy,{background:e,children:[h.jsx("div",{className:"overlay"}),h.jsx("img",{src:t,alt:"project main",className:"main-image"})]}),fy=$.div`
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
       color: ${({theme:e})=>e.colors.primary};
    margin: 0;
  }

  p {
    font-size: 0.92rem;
    color: #555;
    line-height: 1.35;
    margin: 0;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tech {
    background: #f0f0f0;
    padding: 8px 10px;
    border-radius: 10px;
    font-size: 0.78rem;
    color: #333;
    font-weight: 500;
  }

  @media (max-width: 710px) {
    padding: 12px;
    
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }

    .tech {
      font-size: 0.72rem;
      padding: 4px 8px;
    }
  }
`,py=({title:e,description:t,technologies:n})=>h.jsxs(fy,{children:[h.jsx("h3",{children:e}),h.jsx("p",{children:t}),h.jsx("div",{className:"tech-list",children:n==null?void 0:n.map((r,o)=>h.jsx("span",{className:"tech",children:r},`tech-tecnologi-${r}-${o}`))})]}),my=$.div`
  width: 100%;
  max-width: 300px;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden; 
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 22px rgba(0,0,0,0.12);
  }

  @media (max-width: 710px) {
    max-width: 100%;
        max-width: 300px;
    border-radius: 12px;
  }

  @media (min-width: 711px) {
    max-width: 300px;
    border-radius: 14px;
  }
`,hy=({projectData:e,backgroundImage:t})=>h.jsxs(my,{children:[h.jsx(dy,{mainImage:e==null?void 0:e.image,backgroundImage:t}),h.jsx(py,{data:e,title:e.title,technologies:e.technologies,description:e.description}),h.jsx(uy,{codeUrl:e.codeUrl,demoUrl:e.demoUrl})]}),vy=$.div`
  width: 100%;
  display: grid;
  gap: 20px;
  padding: 40px 40px;
  max-width: 1200px;
  margin: 0 auto;


  grid-template-columns: 1fr;

  @media (min-width: 700px) {

    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1300px) {

    grid-template-columns: repeat(3, 1fr);
  }
`,gy=({children:e})=>h.jsx(vy,{children:e}),yy=({message:e})=>h.jsx(xy,{children:h.jsxs("div",{className:"tooltip",children:[h.jsx("div",{className:"icon",children:"i"}),h.jsx("div",{className:"tooltiptext",children:e})]})}),xy=$.div`
  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-family: "Arial", sans-serif;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .tooltiptext {
    visibility: hidden;
    width: 300px;
    background-color: #333;
    color: #fff;
    text-align: left;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;

    bottom: calc(100% + 8px); /* acima do ícone */
    right: 0; /* alinhado à direita do ícone */

    opacity: 0;
    transition: opacity 0.3s;
  }

  /* Setinha apontando para o ícone (para baixo) */
  .tooltiptext::after {
    content: "";
    position: absolute;

    top: 100%; 
    right: 10px; 

    border-width: 7px;
    border-style: solid;
    border-color: #504d4dff transparent transparent transparent;
  }

  .tooltip .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
  }
`,wy=[{title:"MEU PORTIFÓLIO",technologies:["HTML","CSS","REACTJS","STYLED-COMPONENTS"],description:"Esse portifolio também foi desenvolvido com React juntamente com Styled-Components... Caso tenha interesse o código esta disponivel :)",demoUrl:null,codeUrl:"https://github.com/claudio-inacio/Portifolio-Claudio-Inacio",image:ey},{title:"GABRIEL DO CELL",technologies:["HTML","CSS","REACTJS","SASS"],description:"Landing Page desenvolvida como catálogo para facilitar a exibição dos produtos disponíveis para os clientes da Gabriel do Cell. (As imagens dos produtos são ilustrativas, utilizadas apenas para composição do portfólio.)",demoUrl:"https://gabirel-do-cell.vercel.app/#my_products",codeUrl:"https://github.com/claudio-inacio/hamburgueria-react",image:q0},{title:"BURGUER HERO",technologies:["HTML","CSS","REACTJS"],description:"Case de estudo, colocando em pratica conceitos importantes de ReactJs, como componentização, estados, redux, manipulação de listas, entre outros... O projeto simula um pedido de delivery até o pagamento.",demoUrl:"https://hamburgueria-react-gamma.vercel.app/",codeUrl:"https://github.com/claudio-inacio/gabirel-do-cell/tree/master",image:K0},{title:"LISTA DE PRODUTOS",technologies:["HTML","CSS","JAVASCRIPT"],description:"Case de estudo utilizando alguns conceitos mais aprofundados de JavaScript, aqui o usuário pode inserir e remover produtos do carrinho.",demoUrl:"https://lista-de-produtos-six.vercel.app/",codeUrl:"https://github.com/claudio-inacio/lista-de-produtos",image:Z0},{title:"PEDRA, PAPEL, TESOURA.",technologies:["HTML","CSS","JAVASCRIPT"],description:"Um jogo desenvolvido com o objetivo de colocar em prática conceitos básicos de JavaScript, trabalhando lógica, eventos e interações visuais. O projeto simula as escolhas de pedra, papel e tesoura, determinando o vencedor conforme as regras clássicas.",demoUrl:"https://jogo-pedra-papel-tesoura-sable.vercel.app/",codeUrl:"https://github.com/claudio-inacio/jogo-pedra-papel-tesoura",image:ny},{title:"JOGO GÊNIUS",technologies:["HTML","CSS","JAVASCRIPT"],description:"Um jogo desenvolvido com o objetivo de por em pratica conceitos basicos de JavaScript. trabalhando lógica, eventos e interações visuais. O projeto simula as sequências de cores clássicas do jogo.",demoUrl:"https://jogo-da-memoria-mu-olive.vercel.app/",codeUrl:"https://github.com/claudio-inacio/jogo-da-memoria",image:oy},{title:"E-COMMERCE",technologies:["HTML","CSS"],description:"Case de estudo moldando o layout de um ecommerce visando melhorar as tecnicas de HTML e CSS, com botões e inputs ainda não acionaveis.",demoUrl:"https://ecommerce-html-css-peach.vercel.app/#",codeUrl:"https://github.com/claudio-inacio/ecommerce-html-css",image:ry},{title:"INSTAGRAM",technologies:["HTML","CSS"],description:"Case de estudo recriando a página inicial do Instagram usando apenas HTML e CSS, com foco em boas práticas de semântica e estilização.",demoUrl:"https://rede-social-html-css.vercel.app/",codeUrl:"https://github.com/claudio-inacio/rede-social-html-css",image:J0},{title:"CURRICULO",technologies:["HTML","CSS"],description:"Case de estudo simples. Meu primeiro projeto desenvolvido, buscando conhecer as TAGS semanticas e alinhamentos em CSS.",demoUrl:"https://curriculum-html-css.vercel.app/",codeUrl:"https://github.com/claudio-inacio/curriculum-html-css",image:ty}],Sy=({showMenu:e,showClickMenu:t})=>h.jsxs(G0,{children:[h.jsxs(Y0,{children:[h.jsx("h2",{children:"Projetos"}),h.jsx(yy,{message:"Algumas das tecnologias mencionadas acima não estão presentes nos meus projetos pessoais, porém fazem parte do meu dia a dia no trabalho."})]}),h.jsx(gy,{children:wy.map(n=>h.jsx(hy,{projectData:n,backgroundImage:X0},n.id))})]}),ky=$.section`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px 24px 60px;
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (min-width: 768px) {
    padding: 40px 0;
    padding: 20px 24px 60px;
    gap: 32px;
  }
`,Ey=$.h2`
  font-size: 1.9rem;
  font-weight: 700;
  text-align: center;
  color: ${({theme:e})=>e.colors.primary};
`,Rc=$.h3`
  font-size: 1.4rem;
  margin-top: 12px;
  color: ${({theme:e})=>e.colors.black};
  font-weight: 600;
`,_y=$.p`
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  color: ${({theme:e})=>e.colors.black};
`,Cy=$.div`
  padding: 14px 16px;
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.cardBg};
  border: 1px solid ${({theme:e})=>e.colors.cardBorder};
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Py=$.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.black};
`,jy=$.p`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.black};
`,$c=$.p`
  font-size: 0.93rem;
  line-height: 1.4;
  color: ${({theme:e})=>e.colors.black};
`;function zo({company:e,role:t,period:n,description:r}){return h.jsxs(Cy,{children:[h.jsx(Py,{children:e}),t&&h.jsx(jy,{children:t}),n&&h.jsxs($c,{children:["📅 ",n]}),r==null?void 0:r.map((o,i)=>h.jsxs($c,{children:["• ",o]},i))]})}function Ty(){return h.jsxs(ky,{id:"sobre",children:[h.jsx(Ey,{children:"Sobre Mim"}),h.jsxs(_y,{children:["Desenvolvedor Front-End com quase ",h.jsx("b",{children:"3 anos"})," de experiência, sendo ",h.jsx("b",{children:"2 anos como Júnior "})," e ",h.jsx("b",{children:" 7 meses como Pleno"}),", sempre atuando com React.",h.jsx("br",{}),h.jsx("br",{}),"Atualmente desenvolvo interfaces e ferramentas que automatizam processos e aumentam a produtividade de empresas do segmento de crédito consignado.",h.jsx("br",{}),h.jsx("br",{}),"Sou apaixonado por criar soluções funcionais, escaláveis e centradas na experiencia do usuário, priorizando sempre a praticidade das ferramentas desenvolvidas."]}),h.jsx(Rc,{children:"Experiência Profissional"}),h.jsx(zo,{company:"Nosso Consignado",role:"Desenvolvedor Front-End - PLENO",period:"Atual",description:["Desenvolvimento e manutenção de ferramentas utilizando React, Tailwind, Redux e Context.","Participação em reuniões de planejamento e definição de prazos.","Criação de interfaces e funcionalidades que aumentam a produtividade e reduzem processos manuais."]}),h.jsx(zo,{company:"DB1 Global Software",role:"Analista de Implantação — Anymarket",description:["Contato inicial com clientes para alinhamento de expectativas e explicação do produto.","Gerenciamento das atividades da equipe de implantação.","Comunicação direta com diferentes setores para garantir evolução do projeto."]}),h.jsx(Rc,{children:"Formação"}),h.jsx(zo,{company:"KENZIE ACADEMY — Escola de Programação",role:"Desenvolvimento Front-End"}),h.jsx(zo,{company:"UNIPAR — Universidade Paranaense",role:"Sistemas de Informação"})]})}const Oy=()=>{Z.useRef(null),Z.useRef(null),Z.useRef(null);const[e,t]=Z.useState(!0),[n,r]=Z.useState(!1),[o,i]=Z.useState(!1),[l,a]=Z.useState(!1),s=()=>{a(!l)};return h.jsxs(ig,{children:[h.jsx(O0,{showClickMenu:s,showMenu:l}),h.jsx(D0,{}),h.jsx(Q0,{}),h.jsx(Sy,{}),h.jsx(Ty,{})]})},zy={colors:{bgPrimary:"#F5F5F5",primary:"#483D8B",primaryLight:"#675bb5",primaryDark:"#2f295d",secondary:"#808080",secondaryLight:"#b3b3b3",secondaryDark:"#595959",white:"#ffffff",black:"#000000",background:"#0e0b17",surface:"#1b152a",success:"#2ecc71",warning:"#f1c40f",error:"#e74c3c",glassBg:"rgba(255, 255, 255, 0.08)",glassBorder:"rgba(255, 255, 255, 0.25)",glassBlur:"12px"}},Ny=rg`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme:e})=>e.colors.bgPrimary};
    color: ${({theme:e})=>e.colors.white};
    overflow-x: hidden;
    font-family: sans-serif;
  }
`;function Iy(){return h.jsxs(tg,{theme:zy,children:[h.jsx(Ny,{}),h.jsx(Oy,{})]})}Ll.createRoot(document.getElementById("root")).render(h.jsx(We.StrictMode,{children:h.jsx(Iy,{})}));
