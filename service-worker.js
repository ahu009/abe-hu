"use strict";var precacheConfig=[["/abe-hu/index.html","f65f0c4f92424346c040fbdc633936c5"],["/abe-hu/static/css/main.95aaf39b.css","681b85646abb234156b08f68239156ca"],["/abe-hu/static/js/main.07625d90.js","bb9634c1dd3825d7813a3cd2da505fed"],["/abe-hu/static/media/Abe_Hu_Resume.75c9749f.pdf","75c9749f816ab662732bdfea60962b39"],["/abe-hu/static/media/About.20e8049d.scss","20e8049da6602bf6ef43bd17d5c73394"],["/abe-hu/static/media/AboutMe.c288edda.scss","c288eddacf29ec7bf07a70958536f119"],["/abe-hu/static/media/App.9cfa4519.scss","9cfa45199691de70159d4135954a90a4"],["/abe-hu/static/media/CS120B.649768f6.png","649768f6042f6956c0f7396bf6009ad0"],["/abe-hu/static/media/Experience.7786d109.scss","7786d1090b088d4a0a16a60c2c171551"],["/abe-hu/static/media/InfoDisplay.81152678.scss","8115267854ab1a8fc1d1a069bef86555"],["/abe-hu/static/media/Name.fa0b447c.scss","fa0b447ccf156f95bf48ebeb9c36b2bd"],["/abe-hu/static/media/NavBar.51099ccc.scss","51099cccd078c8b6d0a41679ec18e0a4"],["/abe-hu/static/media/NavItems.679cbfca.scss","679cbfcaf45a0a75f80b0b1f61d08b35"],["/abe-hu/static/media/Picture.9cf8f245.scss","9cf8f2450b7400ce7bcb3dddb4b4f1dd"],["/abe-hu/static/media/PostPin.f58c61f8.png","f58c61f8886a62caceb4e8f29a092400"],["/abe-hu/static/media/Projects.9b2f39a5.scss","9b2f39a51a6aa026c074214626645401"],["/abe-hu/static/media/SI.bca613d5.jpg","bca613d5a7c191abc0c24d6b25b5b761"],["/abe-hu/static/media/Skills.88501509.scss","88501509294deb7abc5fca706e47adf4"],["/abe-hu/static/media/SocialMedia.042984e6.scss","042984e6faaf4111d608c8e3a04a4bd3"],["/abe-hu/static/media/asdf.ac1ea006.jpg","ac1ea0067f21cf19844541372fd50f35"],["/abe-hu/static/media/idtech.f1de29a8.png","f1de29a8f083b9da7afa747f267d264e"],["/abe-hu/static/media/marklogic.2d47d0ef.png","2d47d0ef1b065bf0cd1f2243487f4dce"],["/abe-hu/static/media/nebula.f71856cf.png","f71856cfa08382a6779fc2898bc49295"],["/abe-hu/static/media/test.05e54777.jpg","05e54777f34310e62ac6250b739f9bc7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var s="/abe-hu/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});