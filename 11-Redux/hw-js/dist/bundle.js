(()=>{var t={894:(t,r,e)=>{"use strict";function n(t){return function(r){var e=r.dispatch,n=r.getState;return function(r){return function(o){return"function"==typeof o?o(e,n,t):r(o)}}}}e.d(r,{Z:()=>i});var o=n();o.withExtraArgument=n;const i=o},857:(t,r,e)=>{"use strict";function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){n(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function c(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}e.r(r),e.d(r,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>v,bindActionCreators:()=>E,combineReducers:()=>y,compose:()=>O,createStore:()=>s,legacy_createStore:()=>d});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(t){if("object"!=typeof t||null===t)return!1;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}function s(t,r,e){var n;if("function"==typeof r&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof r&&void 0===e&&(e=r,r=void 0),void 0!==e){if("function"!=typeof e)throw new Error(c(1));return e(s)(t,r)}if("function"!=typeof t)throw new Error(c(2));var o=t,i=r,f=[],d=f,y=!1;function l(){d===f&&(d=f.slice())}function E(){if(y)throw new Error(c(3));return i}function O(t){if("function"!=typeof t)throw new Error(c(4));if(y)throw new Error(c(5));var r=!0;return l(),d.push(t),function(){if(r){if(y)throw new Error(c(6));r=!1,l();var e=d.indexOf(t);d.splice(e,1),f=null}}}function v(t){if(!p(t))throw new Error(c(7));if(void 0===t.type)throw new Error(c(8));if(y)throw new Error(c(9));try{y=!0,i=o(i,t)}finally{y=!1}for(var r=f=d,e=0;e<r.length;e++)(0,r[e])();return t}function b(t){if("function"!=typeof t)throw new Error(c(10));o=t,v({type:a.REPLACE})}function h(){var t,r=O;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(c(11));function e(){t.next&&t.next(E())}return e(),{unsubscribe:r(e)}}})[u]=function(){return this},t}return v({type:a.INIT}),(n={dispatch:v,subscribe:O,getState:E,replaceReducer:b})[u]=h,n}var d=s;function y(t){for(var r=Object.keys(t),e={},n=0;n<r.length;n++){var o=r[n];"function"==typeof t[o]&&(e[o]=t[o])}var i,u=Object.keys(e);try{!function(t){Object.keys(t).forEach((function(r){var e=t[r];if(void 0===e(void 0,{type:a.INIT}))throw new Error(c(12));if(void 0===e(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(e)}catch(t){i=t}return function(t,r){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=e[a],s=t[a],d=p(s,r);if(void 0===d)throw r&&r.type,new Error(c(14));o[a]=d,n=n||d!==s}return(n=n||u.length!==Object.keys(t).length)?o:t}}function l(t,r){return function(){return r(t.apply(this,arguments))}}function E(t,r){if("function"==typeof t)return l(t,r);if("object"!=typeof t||null===t)throw new Error(c(16));var e={};for(var n in t){var o=t[n];"function"==typeof o&&(e[n]=l(o,r))}return e}function O(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return 0===r.length?function(t){return t}:1===r.length?r[0]:r.reduce((function(t,r){return function(){return t(r.apply(void 0,arguments))}}))}function v(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(t){return function(){var e=t.apply(void 0,arguments),n=function(){throw new Error(c(15))},o={getState:e.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=r.map((function(t){return t(o)}));return n=O.apply(void 0,u)(e.dispatch),i(i({},e),{},{dispatch:n})}}}},883:t=>{t.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO",INCREMENTO_IMPAR:"INCREMENTO_IMPAR",INCREMENTO_ASYNC:"INCREMENTO_ASYNC"}},518:(t,r,e)=>{const{INCREMENTO:n,DECREMENTO:o,INCREMENTO_IMPAR:i}=e(883),c=()=>({type:n});t.exports={incremento:c,decremento:()=>({type:o}),incrementoImpar:()=>({type:i}),incrementoAsync:()=>t=>{setTimeout((()=>t(c())),1500)}}},616:(t,r,e)=>{const{INCREMENTO:n,DECREMENTO:o,INCREMENTO_IMPAR:i}=e(883),c={contador:0};t.exports=function(t=c,r){switch(r.type){case n:return{contador:t.contador+1};case o:return{contador:t.contador-1};case i:return t.contador%2==1?{contador:t.contador+1}:t;default:return t}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{createStore:t,applyMiddleware:r}=e(857),n=e(894).Z,o=e(616),{incremento:i,decremento:c,incrementoImpar:u,incrementoAsync:f}=e(518);var a=t(o,r(n)),p=document.getElementById("valor");function s(){const{contador:t}=a.getState();p.innerHTML=t}s(),a.subscribe(s),document.getElementById("incremento").onclick=()=>a.dispatch(i()),document.getElementById("decremento").onclick=()=>a.dispatch(c()),document.getElementById("incrementoImpar").onclick=()=>a.dispatch(u()),document.getElementById("incrementoAsync").onclick=()=>a.dispatch(f())})()})();