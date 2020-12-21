/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1053:function(e,t,n){"use strict";n.r(t);n(554);var r=n(351),o=n(349);var c=function(){return(c=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e}).apply(this,arguments)};function l(e,t,n,r){return new(n||(n=Promise))((function(o,c){function l(e){try{d(r.next(e))}catch(e){c(e)}}function f(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,f)}d((r=r.apply(e,t||[])).next())}))}function f(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}function d(e){var s="function"==typeof Symbol&&Symbol.iterator,t=s&&e[s],i=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c}var v,y,w=n(708),m=n(336),k=((v={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',v["only-available-in-window"]="This method is available in a Window context.",v["only-available-in-sw"]="This method is available in a service worker context.",v["permission-default"]="The notification permission was not granted and dismissed instead.",v["permission-blocked"]="The notification permission was not granted and blocked instead.",v["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",v["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",v["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",v["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",v["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",v["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",v["token-update-no-token"]="FCM returned no token when updating the user to push.",v["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",v["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",v["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",v["invalid-vapid-key"]="The public VAPID key must be a string.",v["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",v),S=new o.b("messaging","Messaging",k),M="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";function T(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,function(){for(var e=[],i=0;i<arguments.length;i++)e=e.concat(h(arguments[i]));return e}(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function K(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(y||(y={}));function O(e){return l(this,void 0,void 0,(function(){var t,n,r=this;return f(this,(function(o){switch(o.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=o.sent(),!t.map((function(e){return e.name})).includes("fcm_token_details_db"))return[2,null];o.label=2;case 2:return n=null,[4,Object(w.openDb)("fcm_token_details_db",5,(function(t){return l(r,void 0,void 0,(function(){var r,o,c,l;return f(this,(function(f){switch(f.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains("fcm_token_object_Store")?[4,(r=t.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2];case 1:return o=f.sent(),[4,r.clear()];case 2:if(f.sent(),!o)return[2];if(2===t.oldVersion){if(!(c=o).auth||!c.p256dh||!c.endpoint)return[2];n={token:c.fcmToken,createTime:null!==(l=c.createTime)&&void 0!==l?l:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"==typeof c.vapidKey?c.vapidKey:T(c.vapidKey)}}}else 3===t.oldVersion?n={token:(c=o).fcmToken,createTime:c.createTime,subscriptionOptions:{auth:T(c.auth),p256dh:T(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:T(c.vapidKey)}}:4===t.oldVersion&&(n={token:(c=o).fcmToken,createTime:c.createTime,subscriptionOptions:{auth:T(c.auth),p256dh:T(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:T(c.vapidKey)}});return[2]}}))}))}))];case 3:return o.sent().close(),[4,Object(w.deleteDb)("fcm_token_details_db")];case 4:return o.sent(),[4,Object(w.deleteDb)("fcm_vapid_details_db")];case 5:return o.sent(),[4,Object(w.deleteDb)("undefined")];case 6:return o.sent(),[2,I(n)?n:null]}}))}))}function I(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}var C="firebase-messaging-store",D=null;function P(){return D||(D=Object(w.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(C)}}))),D}function _(e){return l(this,void 0,void 0,(function(){var t,n,r;return f(this,(function(o){switch(o.label){case 0:return t=N(e),[4,P()];case 1:return[4,o.sent().transaction(C).objectStore(C).get(t)];case 2:return(n=o.sent())?[2,n]:[3,3];case 3:return[4,O(e.appConfig.senderId)];case 4:return(r=o.sent())?[4,j(e,r)]:[3,6];case 5:return o.sent(),[2,r];case 6:return[2]}}))}))}function j(e,t){return l(this,void 0,void 0,(function(){var n,r,o;return f(this,(function(c){switch(c.label){case 0:return n=N(e),[4,P()];case 1:return r=c.sent(),[4,(o=r.transaction(C,"readwrite")).objectStore(C).put(t,n)];case 2:return c.sent(),[4,o.complete];case 3:return c.sent(),[2,t]}}))}))}function E(e){return l(this,void 0,void 0,(function(){var t,n,r;return f(this,(function(o){switch(o.label){case 0:return t=N(e),[4,P()];case 1:return n=o.sent(),[4,(r=n.transaction(C,"readwrite")).objectStore(C).delete(t)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function N(e){return e.appConfig.appId}function R(e,t){return l(this,void 0,void 0,(function(){var n,body,r,o,c,l;return f(this,(function(f){switch(f.label){case 0:return[4,H(e)];case 1:n=f.sent(),body=U(t),r={method:"POST",headers:n,body:JSON.stringify(body)},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(W(e.appConfig),r)];case 3:return[4,f.sent().json()];case 4:return o=f.sent(),[3,6];case 5:throw c=f.sent(),S.create("token-subscribe-failed",{errorInfo:c});case 6:if(o.error)throw l=o.error.message,S.create("token-subscribe-failed",{errorInfo:l});if(!o.token)throw S.create("token-subscribe-no-token");return[2,o.token]}}))}))}function x(e,t){return l(this,void 0,void 0,(function(){var n,body,r,o,c,l;return f(this,(function(f){switch(f.label){case 0:return[4,H(e)];case 1:n=f.sent(),body=U(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(body)},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(W(e.appConfig)+"/"+t.token,r)];case 3:return[4,f.sent().json()];case 4:return o=f.sent(),[3,6];case 5:throw c=f.sent(),S.create("token-update-failed",{errorInfo:c});case 6:if(o.error)throw l=o.error.message,S.create("token-update-failed",{errorInfo:l});if(!o.token)throw S.create("token-update-no-token");return[2,o.token]}}))}))}function A(e,t){return l(this,void 0,void 0,(function(){var n,r,o,c,l;return f(this,(function(f){switch(f.label){case 0:return[4,H(e)];case 1:n=f.sent(),r={method:"DELETE",headers:n},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(W(e.appConfig)+"/"+t,r)];case 3:return[4,f.sent().json()];case 4:if((o=f.sent()).error)throw c=o.error.message,S.create("token-unsubscribe-failed",{errorInfo:c});return[3,6];case 5:throw l=f.sent(),S.create("token-unsubscribe-failed",{errorInfo:l});case 6:return[2]}}))}))}function W(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function H(e){var t=e.appConfig,n=e.installations;return l(this,void 0,void 0,(function(){var e;return f(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function U(e){var t=e.p256dh,n=e.auth,r=e.endpoint,o=e.vapidKey,body={web:{endpoint:r,auth:n,p256dh:t}};return o!==M&&(body.web.applicationPubKey=o),body}function V(e,t,n){return l(this,void 0,void 0,(function(){var r,o,c,l;return f(this,(function(f){switch(f.label){case 0:if("granted"!==Notification.permission)throw S.create("permission-blocked");return[4,G(t,n)];case 1:return r=f.sent(),[4,_(e)];case 2:return o=f.sent(),c={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:T(r.getKey("auth")),p256dh:T(r.getKey("p256dh"))},o?[3,3]:[2,L(e,c)];case 3:if(d=o.subscriptionOptions,v=(h=c).vapidKey===d.vapidKey,y=h.endpoint===d.endpoint,w=h.auth===d.auth,m=h.p256dh===d.p256dh,v&&y&&w&&m)return[3,8];f.label=4;case 4:return f.trys.push([4,6,,7]),[4,A(e,o.token)];case 5:return f.sent(),[3,7];case 6:return l=f.sent(),console.warn(l),[3,7];case 7:return[2,L(e,c)];case 8:return Date.now()>=o.createTime+6048e5?[2,F({token:o.token,createTime:Date.now(),subscriptionOptions:c},e,t)]:[2,o.token];case 9:return[2]}var d,h,v,y,w,m}))}))}function B(e,t){return l(this,void 0,void 0,(function(){var n,r;return f(this,(function(o){switch(o.label){case 0:return[4,_(e)];case 1:return(n=o.sent())?[4,A(e,n.token)]:[3,4];case 2:return o.sent(),[4,E(e)];case 3:o.sent(),o.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(r=o.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function F(e,t,n){return l(this,void 0,void 0,(function(){var r,o,l;return f(this,(function(f){switch(f.label){case 0:return f.trys.push([0,3,,5]),[4,x(t,e)];case 1:return r=f.sent(),o=c(c({},e),{token:r,createTime:Date.now()}),[4,j(t,o)];case 2:return f.sent(),[2,r];case 3:return l=f.sent(),[4,B(t,n)];case 4:throw f.sent(),l;case 5:return[2]}}))}))}function L(e,t){return l(this,void 0,void 0,(function(){var n,r;return f(this,(function(o){switch(o.label){case 0:return[4,R(e,t)];case 1:return n=o.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,j(e,r)];case 2:return o.sent(),[2,r.token]}}))}))}function G(e,t){return l(this,void 0,void 0,(function(){var n;return f(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:K(t)})]}}))}))}function J(data){return"object"==typeof data&&!!data&&"google.c.a.c_id"in data}function $(e){return new Promise((function(t){setTimeout(t,e)}))}var z=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!=typeof e)throw S.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return l(this,void 0,void 0,(function(){var n;return f(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,_(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:M,r.label=2;case 2:return[2,V(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return B(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw S.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw S.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw S.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw S.create("only-available-in-window")},e.prototype.onMessage=function(){throw S.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw S.create("only-available-in-window")},e.prototype.onPush=function(e){return l(this,void 0,void 0,(function(){var t,n,r,o;return f(this,(function(c){switch(c.label){case 0:return(t=function(e){var data=e.data;if(!data)return null;try{return data.json()}catch(e){return null}}(e))?[4,Z()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=c.sent())?[2,Y(n,t)]:(r=!1,t.notification?[4,ee(Q(t))]:[3,3]);case 2:c.sent(),r=!0,c.label=3;case 3:return!0===r&&!1===this.isOnBackgroundMessageUsed?[2]:(this.bgMessageHandler&&(o=function(e){var t={from:e.from,collapseKey:e.collapse_key};return function(e,t){if(!t.notification)return;e.notification={};var title=t.notification.title;title&&(e.notification.title=title);var body=t.notification.body;body&&(e.notification.body=body);var image=t.notification.image;image&&(e.notification.image=image)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){if(!t.fcmOptions)return;e.fcmOptions={};var link=t.fcmOptions.link;link&&(e.fcmOptions.link=link);var n=t.fcmOptions.analytics_label;n&&(e.fcmOptions.analyticsLabel=n)}(t,e),t}(t),"function"==typeof this.bgMessageHandler?this.bgMessageHandler(o):this.bgMessageHandler.next(o)),[4,$(1e3)]);case 4:return c.sent(),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return l(this,void 0,void 0,(function(){var r;return f(this,(function(o){switch(o.label){case 0:return e.newSubscription?[3,2]:[4,B(this.firebaseDependencies,self.registration)];case 1:return o.sent(),[2];case 2:return[4,_(this.firebaseDependencies)];case 3:return r=o.sent(),[4,B(this.firebaseDependencies,self.registration)];case 4:return o.sent(),[4,V(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:M)];case 5:return o.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return l(this,void 0,void 0,(function(){var r,link,o,c,l;return f(this,(function(f){switch(f.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(link=function(e){var t,n,r,link=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(link)return link;return J(e.data)?self.location.origin:null}(r))?(o=new URL(link,self.location.href),c=new URL(self.location.origin),o.host!==c.host?[2]:[4,X(o)]):[2]):[2];case 1:return(l=f.sent())?[3,4]:[4,self.clients.openWindow(link)];case 2:return l=f.sent(),[4,$(3e3)];case 3:return f.sent(),[3,6];case 4:return[4,l.focus()];case 5:l=f.sent(),f.label=6;case 6:return l?(r.messageType=y.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,[2,l.postMessage(r)]):[2]}}))}))},e}();function Q(e){var t,n=c({},e.notification);return n.data=((t={}).FCM_MSG=e,t),n}function X(e){return l(this,void 0,void 0,(function(){var t,n,r,o,c,l,h;return f(this,(function(f){switch(f.label){case 0:return[4,Z()];case 1:t=f.sent();try{for(n=d(t),r=n.next();!r.done;r=n.next())if(o=r.value,c=new URL(o.url,self.location.href),e.host===c.host)return[2,o]}catch(e){l={error:e}}finally{try{r&&!r.done&&(h=n.return)&&h.call(n)}finally{if(l)throw l.error}}return[2,null]}}))}))}function Y(e,t){var n,r;t.isFirebaseMessaging=!0,t.messageType=y.PUSH_RECEIVED;try{for(var o=d(e),c=o.next();!c.done;c=o.next()){c.value.postMessage(t)}}catch(e){n={error:e}}finally{try{c&&!c.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function Z(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function ee(e){var t,n=e.actions,r=Notification.maxActions;return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}var te=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return l(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:return(t=e.data).isFirebaseMessaging?(this.onMessageCallback&&t.messageType===y.PUSH_RECEIVED&&("function"==typeof this.onMessageCallback?this.onMessageCallback(function(e){return delete e.messageType,delete e.isFirebaseMessaging,e}(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),J(n=t.data)&&"1"===n["google.c.a.e"]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return l(this,void 0,void 0,(function(){return f(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw S.create("permission-blocked");return[4,this.updateVapidKey(null==e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null==e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,V(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return l(this,void 0,void 0,(function(){return f(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=M),[2]}))}))},e.prototype.updateSwReg=function(e){return l(this,void 0,void 0,(function(){return f(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw S.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return l(this,void 0,void 0,(function(){var e,t;return f(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),S.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return l(this,void 0,void 0,(function(){return f(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,B(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return l(this,void 0,void 0,(function(){var e;return f(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?S.create("permission-blocked"):S.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw S.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw S.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw S.create("invalid-sw-registration");if(this.swRegistration)throw S.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw S.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw S.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,data){return l(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:return t=function(e){switch(e){case y.NOTIFICATION_CLICKED:return"notification_open";case y.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return n.sent().logEvent(t,{message_id:data["google.c.a.c_id"],message_name:data["google.c.a.c_l"],message_time:data["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function ne(e){return S.create("missing-app-config-values",{valueName:e})}var re={isSupported:ie};function ie(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}m.a.INTERNAL.registerComponent(new r.a("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw ne("App Configuration Object");if(!e.name)throw ne("App Name");var r=e.options;try{for(var o=d(["projectId","apiKey","appId","messagingSenderId"]),c=o.next();!c.done;c=o.next()){var l=c.value;if(!r[l])throw ne(l)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!ie())throw S.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new z(n):new te(n)}),"PUBLIC").setServiceProps(re))}}]);