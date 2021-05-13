(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Iniciar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Pages/Auth/Iniciar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Pages/Auth/Iniciar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Translation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Translation.vue */ "./resources/js/Shared/Translation.vue");
/* harmony import */ var _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Layout.vue */ "./resources/js/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Translation: _Shared_Translation_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  layout: _Shared_Layout_vue__WEBPACK_IMPORTED_MODULE_1__.default,
  data: function data() {
    return {
      form: this.$inertia.form({
        email: "",
        contrasenya: ""
      })
    };
  },
  mounted: function mounted() {
    console.log(this.$inertia);
  },
  methods: {
    submit: function submit() {
      this.form.post(this.$route("login.intent"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/FlashMessage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/FlashMessage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      success: true
    };
  },
  mounted: function mounted() {
    if (this.flash.success) {
      this.success = true;
    } else {
      this.success = false;
    }
  },
  computed: {
    flash: function flash() {
      return this.$page.props.flash;
    },
    flashMsg: function flashMsg() {
      return this.flash.success || this.flash.error;
    },
    success: function success() {
      if (this.flash.success) {
        return true;
      } else {
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Translation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Translation.vue */ "./resources/js/Shared/Translation.vue");
/* harmony import */ var _Shared_CustomLink_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/CustomLink.vue */ "./resources/js/Shared/CustomLink.vue");
/* harmony import */ var _FlashMessage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlashMessage.vue */ "./resources/js/Shared/FlashMessage.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Translation: _Shared_Translation_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    CustomLink: _Shared_CustomLink_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    FlashMessage: _FlashMessage_vue__WEBPACK_IMPORTED_MODULE_2__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Translation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Translation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _translations_cat_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations/cat.json */ "./resources/js/Shared/translations/cat.json");
/* harmony import */ var _translations_esp_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations/esp.json */ "./resources/js/Shared/translations/esp.json");
/* harmony import */ var _translations_eng_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/eng.json */ "./resources/js/Shared/translations/eng.json");
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: String
  },
  computed: {
    text: function text() {
      var lang = this.$page.props.lang;

      if (lang === "cat") {
        return _translations_cat_json__WEBPACK_IMPORTED_MODULE_0__[this.value] || "N/A";
      }

      if (lang === "esp") {
        return _translations_esp_json__WEBPACK_IMPORTED_MODULE_1__[this.value] || "N/A";
      }

      if (lang === "eng") {
        return _translations_eng_json__WEBPACK_IMPORTED_MODULE_2__[this.value] || "N/A";
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/assets/logo.png":
/*!**************************************!*\
  !*** ./resources/js/assets/logo.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/logo.png?08065934e0f75240000e50469d70b902");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Pages/Auth/Iniciar.vue?vue&type=style&index=0&id=004fa39d&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Pages/Auth/Iniciar.vue?vue&type=style&index=0&id=004fa39d&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/FlashMessage.vue?vue&type=style&index=0&id=0eb6645a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/FlashMessage.vue?vue&type=style&index=0&id=0eb6645a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages/Auth/Iniciar.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Auth/Iniciar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Iniciar_vue_vue_type_template_id_004fa39d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Iniciar.vue?vue&type=template&id=004fa39d&scoped=true& */ "./resources/js/Pages/Auth/Iniciar.vue?vue&type=template&id=004fa39d&scoped=true&");
/* harmony import */ var _Iniciar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Iniciar.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Iniciar.vue?vue&type=script&lang=js&");
/* harmony import */ var _Iniciar_vue_vue_type_style_index_0_id_004fa39d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Iniciar.vue?vue&type=style&index=0&id=004fa39d&lang=scss&scoped=true& */ "./resources/js/Pages/Auth/Iniciar.vue?vue&type=style&index=0&id=004fa39d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Iniciar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Iniciar_vue_vue_type_template_id_004fa39d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Iniciar_vue_vue_type_template_id_004fa39d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "004fa39d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Iniciar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/CustomLink.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/CustomLink.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomLink_vue_vue_type_template_id_572539e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomLink.vue?vue&type=template&id=572539e7& */ "./resources/js/Shared/CustomLink.vue?vue&type=template&id=572539e7&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _CustomLink_vue_vue_type_template_id_572539e7___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomLink_vue_vue_type_template_id_572539e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/CustomLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/FlashMessage.vue":
/*!**********************************************!*\
  !*** ./resources/js/Shared/FlashMessage.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FlashMessage_vue_vue_type_template_id_0eb6645a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=template&id=0eb6645a&scoped=true& */ "./resources/js/Shared/FlashMessage.vue?vue&type=template&id=0eb6645a&scoped=true&");
/* harmony import */ var _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=script&lang=js& */ "./resources/js/Shared/FlashMessage.vue?vue&type=script&lang=js&");
/* harmony import */ var _FlashMessage_vue_vue_type_style_index_0_id_0eb6645a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlashMessage.vue?vue&type=style&index=0&id=0eb6645a&lang=scss&scoped=true& */ "./resources/js/Shared/FlashMessage.vue?vue&type=style&index=0&id=0eb6645a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FlashMessage_vue_vue_type_template_id_0eb6645a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FlashMessage_vue_vue_type_template_id_0eb6645a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0eb6645a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/FlashMessage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086&scoped=true& */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _Layout_vue_vue_type_style_index_0_id_6bf30086_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&id=6bf30086&lang=scss&scoped=true& */ "./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Layout_vue_vue_type_template_id_6bf30086_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_6bf30086_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6bf30086",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Translation.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/Translation.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Translation_vue_vue_type_template_id_2531b0f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translation.vue?vue&type=template&id=2531b0f6& */ "./resources/js/Shared/Translation.vue?vue&type=template&id=2531b0f6&");
/* harmony import */ var _Translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Translation.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Translation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Translation_vue_vue_type_template_id_2531b0f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Translation_vue_vue_type_template_id_2531b0f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Translation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Iniciar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Iniciar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Iniciar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../../node_modules/vue-svg-inline-loader/src/index.js!./Iniciar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Pages/Auth/Iniciar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Iniciar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Shared/FlashMessage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/FlashMessage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/vue-svg-inline-loader/src/index.js!./FlashMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/FlashMessage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_FlashMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/vue-svg-inline-loader/src/index.js!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Shared/Translation.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/Translation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/vue-svg-inline-loader/src/index.js!./Translation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Translation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Iniciar.vue?vue&type=style&index=0&id=004fa39d&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Iniciar.vue?vue&type=style&index=0&id=004fa39d&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Iniciar_vue_vue_type_style_index_0_id_004fa39d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../../node_modules/vue-svg-inline-loader/src/index.js!./Iniciar.vue?vue&type=style&index=0&id=004fa39d&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Pages/Auth/Iniciar.vue?vue&type=style&index=0&id=004fa39d&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Shared/FlashMessage.vue?vue&type=style&index=0&id=0eb6645a&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Shared/FlashMessage.vue?vue&type=style&index=0&id=0eb6645a&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_FlashMessage_vue_vue_type_style_index_0_id_0eb6645a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/vue-svg-inline-loader/src/index.js!./FlashMessage.vue?vue&type=style&index=0&id=0eb6645a&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/FlashMessage.vue?vue&type=style&index=0&id=0eb6645a&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Layout_vue_vue_type_style_index_0_id_6bf30086_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/vue-svg-inline-loader/src/index.js!./Layout.vue?vue&type=style&index=0&id=6bf30086&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Layout.vue?vue&type=style&index=0&id=6bf30086&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Auth/Iniciar.vue?vue&type=template&id=004fa39d&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Iniciar.vue?vue&type=template&id=004fa39d&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Iniciar_vue_vue_type_template_id_004fa39d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Iniciar_vue_vue_type_template_id_004fa39d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Iniciar_vue_vue_type_template_id_004fa39d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../../node_modules/vue-svg-inline-loader/src/index.js!./Iniciar.vue?vue&type=template&id=004fa39d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Pages/Auth/Iniciar.vue?vue&type=template&id=004fa39d&scoped=true&");


/***/ }),

/***/ "./resources/js/Shared/CustomLink.vue?vue&type=template&id=572539e7&":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/CustomLink.vue?vue&type=template&id=572539e7& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_CustomLink_vue_vue_type_template_id_572539e7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_CustomLink_vue_vue_type_template_id_572539e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_CustomLink_vue_vue_type_template_id_572539e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/vue-svg-inline-loader/src/index.js!./CustomLink.vue?vue&type=template&id=572539e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/CustomLink.vue?vue&type=template&id=572539e7&");


/***/ }),

/***/ "./resources/js/Shared/FlashMessage.vue?vue&type=template&id=0eb6645a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Shared/FlashMessage.vue?vue&type=template&id=0eb6645a&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_FlashMessage_vue_vue_type_template_id_0eb6645a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_FlashMessage_vue_vue_type_template_id_0eb6645a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_FlashMessage_vue_vue_type_template_id_0eb6645a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/vue-svg-inline-loader/src/index.js!./FlashMessage.vue?vue&type=template&id=0eb6645a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/FlashMessage.vue?vue&type=template&id=0eb6645a&scoped=true&");


/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Layout_vue_vue_type_template_id_6bf30086_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Layout_vue_vue_type_template_id_6bf30086_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Layout_vue_vue_type_template_id_6bf30086_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/vue-svg-inline-loader/src/index.js!./Layout.vue?vue&type=template&id=6bf30086&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&");


/***/ }),

/***/ "./resources/js/Shared/Translation.vue?vue&type=template&id=2531b0f6&":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/Translation.vue?vue&type=template&id=2531b0f6& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Translation_vue_vue_type_template_id_2531b0f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Translation_vue_vue_type_template_id_2531b0f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Translation_vue_vue_type_template_id_2531b0f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/vue-svg-inline-loader/src/index.js!./Translation.vue?vue&type=template&id=2531b0f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Translation.vue?vue&type=template&id=2531b0f6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Pages/Auth/Iniciar.vue?vue&type=template&id=004fa39d&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Pages/Auth/Iniciar.vue?vue&type=template&id=004fa39d&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page" }, [
    _c("div", { staticClass: "inner" }, [
      _c("h1", [_c("translation", { attrs: { value: "iniciar-sessio" } })], 1),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c("div", { staticClass: "input-group" }, [
            _c("label", { attrs: { for: "login-email" } }, [_vm._v("Email")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.email,
                  expression: "form.email"
                }
              ],
              attrs: { type: "text", id: "login-email" },
              domProps: { value: _vm.form.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "email", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c(
              "label",
              { attrs: { for: "login-contrasenya" } },
              [_c("translation", { attrs: { value: "contrasenya" } })],
              1
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.contrasenya,
                  expression: "form.contrasenya"
                }
              ],
              attrs: { type: "password", id: "login-contrasenya" },
              domProps: { value: _vm.form.contrasenya },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "contrasenya", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            { attrs: { type: "submit" } },
            [_c("translation", { attrs: { value: "iniciar-sessio" } })],
            1
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/CustomLink.vue?vue&type=template&id=572539e7&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/CustomLink.vue?vue&type=template&id=572539e7& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "inertia-link",
    _vm._b({}, "inertia-link", _vm.$attrs, false),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/FlashMessage.vue?vue&type=template&id=0eb6645a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/FlashMessage.vue?vue&type=template&id=0eb6645a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.flashMsg
    ? _c("div", { staticClass: "flash-container" }, [
        _c(
          "div",
          {
            staticClass: "flash",
            class: { success: _vm.success, error: !_vm.success }
          },
          [_vm._v("\n    " + _vm._s(_vm.flashMsg) + "\n  ")]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page" },
    [
      _c("header", [
        _c("div", { staticClass: "left" }, [
          _c("div", { staticClass: "logo" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! @/assets/logo.png */ "./resources/js/assets/logo.png").default, alt: "logo" }
            })
          ]),
          _vm._v(" "),
          _c(
            "nav",
            [
              _c(
                "custom-link",
                { attrs: { href: _vm.$route("home") } },
                [_c("translation", { attrs: { value: "inici" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "custom-link",
                { attrs: { href: _vm.$route("espais.index") } },
                [_c("translation", { attrs: { value: "espais" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "custom-link",
                { attrs: { href: _vm.$route("lang.change", { abbr: "eng" }) } },
                [_vm._v("\n          English\n        ")]
              ),
              _vm._v(" "),
              _c(
                "custom-link",
                { attrs: { href: _vm.$route("lang.change", { abbr: "cat" }) } },
                [_vm._v("\n          Catala\n        ")]
              ),
              _vm._v(" "),
              _c(
                "custom-link",
                { attrs: { href: _vm.$route("lang.change", { abbr: "esp" }) } },
                [_vm._v("\n          Espanyol\n        ")]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "right" },
          [
            _vm.$page.props.user
              ? _c("div", { staticClass: "userInfo" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$page.props.user.nom) +
                      " " +
                      _vm._s(_vm.$page.props.user.llinatges) +
                      "\n      "
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.$page.props.user
              ? _c(
                  "custom-link",
                  { attrs: { href: _vm.$route("login") } },
                  [_c("translation", { attrs: { value: "iniciar-sessio" } })],
                  1
                )
              : _c(
                  "custom-link",
                  { attrs: { href: _vm.$route("logout") } },
                  [_c("translation", { attrs: { value: "tancar-sessio" } })],
                  1
                )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("flash-message"),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Translation.vue?vue&type=template&id=2531b0f6&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-svg-inline-loader/src/index.js!./resources/js/Shared/Translation.vue?vue&type=template&id=2531b0f6& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { directives: [{ name: "frag", rawName: "v-frag" }] }, [
    _vm._v(_vm._s(_vm.text))
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Shared/translations/cat.json":
/*!***************************************************!*\
  !*** ./resources/js/Shared/translations/cat.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"inici":"Inici","espais":"Espais","ver":"Veure","email":"Correu electronic","contrasenya":"Contrasenya","iniciar-sessio":"Iniciar Sessió","tancar-sessio":"Tancar Sessió"}');

/***/ }),

/***/ "./resources/js/Shared/translations/eng.json":
/*!***************************************************!*\
  !*** ./resources/js/Shared/translations/eng.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"inici":"Home","espais":"Spaces","ver":"View","email":"Email","contrasenya":"Password","iniciar-sessio":"Login","tancar-sessio":"Logout"}');

/***/ }),

/***/ "./resources/js/Shared/translations/esp.json":
/*!***************************************************!*\
  !*** ./resources/js/Shared/translations/esp.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"inici":"Inicio","espais":"Espacios","ver":"Ver","email":"Correo electronico","contrasenya":"Contraseña","iniciar-sessio":"Iniciar Sessión","tancar-sessio":"Cerrar Sessión"}');

/***/ })

}]);