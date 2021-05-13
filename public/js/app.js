(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-meta */ "./node_modules/vue-meta/dist/vue-meta.esm.js");
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! portal-vue */ "./node_modules/portal-vue/dist/portal-vue.common.js");
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js");
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");









vue__WEBPACK_IMPORTED_MODULE_7__.default.prototype.$route = route;
vue__WEBPACK_IMPORTED_MODULE_7__.default.use(vue_meta__WEBPACK_IMPORTED_MODULE_1__.default);
vue__WEBPACK_IMPORTED_MODULE_7__.default.use(portal_vue__WEBPACK_IMPORTED_MODULE_2__.default);
vue__WEBPACK_IMPORTED_MODULE_7__.default.use((v_click_outside__WEBPACK_IMPORTED_MODULE_3___default()));
vue__WEBPACK_IMPORTED_MODULE_7__.default.use(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_6__.plugin);
vue__WEBPACK_IMPORTED_MODULE_7__.default.directive("frag", vue_frag__WEBPACK_IMPORTED_MODULE_0__.default);
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_5__.InertiaProgress.init();
var el = document.getElementById("app");
new vue__WEBPACK_IMPORTED_MODULE_7__.default({
  render: function render(h) {
    return h(_inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_6__.App, {
      props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: function resolveComponent(name) {
          return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name)).then(function (module) {
            return module["default"];
          });
        }
      }
    });
  },
  data: {
    width: window.innerWidth,
    height: window.innerHeight,
    href: window.location.href,
    uri: window.location.pathname
  },
  mounted: function mounted() {
    var _this = this;

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__.Inertia.on("navigate", function (event) {
      _this.href = window.location.href;
      _this.uri = window.location.pathname;
    });
    document.addEventListener("resize", this.onResize);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize: function onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  }
}).$mount(el);

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/css/app.scss":
/*!********************************!*\
  !*** ./resources/css/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/Iniciar": [
		"./resources/js/Pages/Auth/Iniciar.vue",
		"css/app",
		"/js/vendor",
		"resources_js_Pages_Auth_Iniciar_vue"
	],
	"./Auth/Iniciar.vue": [
		"./resources/js/Pages/Auth/Iniciar.vue",
		"css/app",
		"/js/vendor",
		"resources_js_Pages_Auth_Iniciar_vue"
	],
	"./Espais/Index": [
		"./resources/js/Pages/Espais/Index.vue",
		"css/app",
		"/js/vendor",
		"resources_js_Pages_Espais_Index_vue"
	],
	"./Espais/Index.vue": [
		"./resources/js/Pages/Espais/Index.vue",
		"css/app",
		"/js/vendor",
		"resources_js_Pages_Espais_Index_vue"
	],
	"./Espais/Show": [
		"./resources/js/Pages/Espais/Show.vue",
		"css/app",
		"/js/vendor",
		"resources_js_Pages_Espais_Show_vue"
	],
	"./Espais/Show.vue": [
		"./resources/js/Pages/Espais/Show.vue",
		"css/app",
		"/js/vendor",
		"resources_js_Pages_Espais_Show_vue"
	],
	"./Inici/Index": [
		"./resources/js/Pages/Inici/Index.vue",
		"css/app",
		"/js/vendor",
		"resources_js_Pages_Inici_Index_vue"
	],
	"./Inici/Index.vue": [
		"./resources/js/Pages/Inici/Index.vue",
		"css/app",
		"/js/vendor",
		"resources_js_Pages_Inici_Index_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);