var __wpo = {"assets":{"main":["./main.52f17de1e2fbf7f4dd9b.bundle.js","./polyfills.0886a496c9c14dc8d549.bundle.js","./assets/html/cache-loader.html","./assets/icon/apple-touch-icon-114x114.png","./assets/icon/apple-touch-icon-120x120.png","./assets/icon/apple-touch-icon-152x152.png","./assets/icon/apple-touch-icon-144x144.png","./assets/icon/apple-touch-icon-57x57.png","./assets/icon/apple-touch-icon-60x60.png","./assets/icon/apple-touch-icon-72x72.png","./assets/icon/apple-touch-icon-76x76.png","./assets/icon/code.txt","./assets/icon/favicon-128.png","./assets/icon/favicon-16x16.png","./assets/icon/favicon-196x196.png","./assets/icon/favicon-32x32.png","./assets/icon/favicon-96x96.png","./assets/icon/favicon.ico","./assets/icon/mstile-144x144.png","./assets/icon/mstile-150x150.png","./assets/icon/mstile-310x150.png","./assets/icon/mstile-70x70.png","./assets/img/pwc_logo.png","./assets/icon/mstile-310x310.png","./assets/settings.json","./oauth-resp.html","./"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"2dfadc05a5e99e419e6490ebe9a6f751cef6dabf":"./main.52f17de1e2fbf7f4dd9b.bundle.js","5322ac70c8fbf4ef75cc4b5b206c2f8ddd8a433f":"./polyfills.0886a496c9c14dc8d549.bundle.js","f53292259db5e0e863c3396dd14d70880d72164a":"./assets/html/cache-loader.html","84fb676af4130a2281f0509bc4cc91dbefc1808b":"./assets/icon/apple-touch-icon-114x114.png","ea39d526ba532fd7a90a4119ad4815e8c86815f2":"./assets/icon/apple-touch-icon-120x120.png","362579fe042ac674b6af7d55840b6918459aafcf":"./assets/icon/apple-touch-icon-152x152.png","28696eb442393fabe68340467f290df7685baa8e":"./assets/icon/mstile-144x144.png","6c0571819edddd4a7d2f75be289c7524ab4abebe":"./assets/icon/apple-touch-icon-57x57.png","4c661d5659593ceec8d6d0ad623e7dda716b197f":"./assets/icon/apple-touch-icon-60x60.png","a231331a9060ccf9fc1b4a80013485d6664d1e7d":"./assets/icon/apple-touch-icon-72x72.png","1b9b58212722f544dcd721be34e2316a4faa0fcd":"./assets/icon/apple-touch-icon-76x76.png","af070b5ca0c51ff9b7eb32e5340c3d2641aa3ad9":"./assets/icon/code.txt","86b2431b0a98f10d8b7155d4af8098d6cc163174":"./assets/icon/mstile-70x70.png","6251d94ffa73e20f6bdaefa803bb0d9bc9b4cf3c":"./assets/icon/favicon-16x16.png","115d90f04fd06e002224a58552c05d29f691586e":"./assets/icon/favicon-196x196.png","ad47bf04fa33dfe648cf0239c476997bb85ad80e":"./assets/icon/favicon-32x32.png","57c61cd0d8cb01a2582d80415726c3a86b6201a8":"./assets/icon/favicon-96x96.png","9ea4e23e0993e9b52b11460faa855d5b80a33ca1":"./assets/icon/favicon.ico","eb3897f19018e15a47e311825e74f908efc75782":"./assets/icon/mstile-150x150.png","5b1131e5bec0db788ff87950db12dee3de876d22":"./assets/icon/mstile-310x150.png","7a69267548c9d7e1c7d9af91b68ef882c9961f9a":"./assets/img/pwc_logo.png","df594bc53b191a648126035e38cd593820853710":"./assets/icon/mstile-310x310.png","aa6f968618cf5190d299f1b29ddb4ffa4634b6e7":"./assets/settings.json","21391bd1a2271e17badae9f12b7f9b1feabf0ba5":"./oauth-resp.html","944d67a11421d8d747799c8ffdf28b287f067aeb":"./"},"strategy":"changed","responseStrategy":"cache-first","version":"2017-7-27 20:11:45","name":"webpack-offline","pluginVersion":"4.8.3","relativePaths":true};

(function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)})([function(e,n,t){"use strict";function r(e,n){return caches.match(e,{cacheName:n}).then(function(t){return a()?t:c(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function o(e,n){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(n)}function i(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function a(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function c(e){return a(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function s(e){return Object.keys(e).reduce(function(n,t){return n[t]=e[t],n},{})}function u(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}if(function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);return o?void o.push(Promise.resolve(n)):(o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function e(){var n=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=n?e():(t.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}(),void 0===f)var f=!1;(function(e,n){function t(){if(!R.additional.length)return Promise.resolve();f&&console.log("[SW]:","Caching additional");var e=void 0;return e="changed"===b?l("additional"):a("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function a(n){var t=R[n];return caches.open(E).then(function(n){return w(n,t,{bust:e.version,request:e.prefetchRequest})}).then(function(){u("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function l(n){return d().then(function(t){if(!t)return a(n);var r=t[0],o=t[1],i=t[2],c=i.hashmap,s=i.version;if(!i.hashmap||s===e.version)return a(n);var f=Object.keys(c).map(function(e){return c[e]}),l=o.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),h=R[n],d=[],p=h.filter(function(e){return-1===l.indexOf(e)||-1===f.indexOf(e)});Object.keys(W).forEach(function(e){var n=W[e];if(-1!==h.indexOf(n)&&-1===p.indexOf(n)&&-1===d.indexOf(n)){var t=c[e];t&&-1!==l.indexOf(t)?d.push([t,n]):p.push(n)}}),u("Changed assets: "+n,p),u("Moved assets: "+n,d);var v=Promise.all(d.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(E).then(function(n){var t=v.then(function(e){return Promise.all(e.map(function(e){return n.put(e[0],e[1])}))});return Promise.all([t,w(n,p,{bust:e.version,request:e.prefetchRequest})])})})}function h(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(P)&&0!==e.indexOf(E))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function d(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(P)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(j,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function p(){return caches.open(E).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:W}));return n.put(new URL(j,location).toString(),t)})}function v(e,n,t){return r(t,E).then(function(r){return r?(f&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(f&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&function(){var t=r.clone(),o=caches.open(E).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(o)}(),r):(f&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r)})})}function g(e,n,t){return fetch(e.request).then(function(e){if(e.ok)return f&&console.log("[SW]:","URL ["+n+"] from network"),e;throw new Error("Response is not ok")}).catch(function(){return f&&console.log("[SW]:","URL ["+n+"] from cache if possible"),r(t,E)})}function m(e){return e.catch(function(){}).then(function(e){var n=e&&e.ok,t=e&&"opaqueredirect"===e.type;return n||t&&!F?e:(f&&console.log("[SW]:","Loading navigation fallback ["+C+"] from cache"),r(C,E))})}function w(e,n,t){var r=!1!==t.allowLoaders,i=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(n.map(function(e){return i&&(e=o(e,i)),fetch(e,a).then(c)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(y(n[o],t)),e.put(n[o],t)});return i.length?function(){var r=s(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return n.length&&(o=o.concat(w(e,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function y(e,n){var t=Object.keys(U).map(function(t){if(-1!==U[t].indexOf(e)&&O[t])return O[t](n.clone())}).filter(function(e){return!!e});return Promise.all(t).then(function(e){return[].concat.apply([],e)})}function x(e){var n=e.url,t=new URL(n),r=void 0;r="navigate"===e.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<k.length;o++){var i=k[o];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var a=void 0;if((a="function"==typeof i.match?i.match(t,e):n.replace(i.match,i.to))&&a!==n)return a}}}var O=n.loaders,k=n.cacheMaps,b=e.strategy,S=e.responseStrategy,R=e.assets,U=e.loaders||{},W=e.hashesMap,L=e.externals,P=e.name,q=e.version,E=P+":"+q,j="__offline_webpack__data";(function(){Object.keys(R).forEach(function(e){R[e]=R[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===L.indexOf(e)&&(n.search=""),n.toString()})}),Object.keys(U).forEach(function(e){U[e]=U[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===L.indexOf(e)&&(n.search=""),n.toString()})}),W=Object.keys(W).reduce(function(e,n){var t=new URL(W[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),L=L.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()})})();var _=[].concat(R.main,R.additional,R.optional),C=e.navigateFallbackURL,F=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===b?l("main"):a("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=t();n=n.then(p),n=n.then(h),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),e.waitUntil(n)}),self.addEventListener("fetch",function(e){var n=new URL(e.request.url);n.hash="";var t=n.toString();-1===L.indexOf(t)&&(n.search="",t=n.toString());var r="GET"===e.request.method,o=-1!==_.indexOf(t),a=t;if(!o){var c=x(e.request);c&&(a=c,o=!0)}if(!o&&r&&C&&i(e.request))return void e.respondWith(m(fetch(e.request)));if(!o||!r)return void(n.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&e.respondWith(fetch(e.request)));var s=void 0;s="network-first"===S?g(e,t,a):v(e,t,a),C&&i(e.request)&&(s=m(s)),e.respondWith(s)}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})})(__wpo,{loaders:{},cacheMaps:[]}),e.exports=t(1)},function(e,n){}]);