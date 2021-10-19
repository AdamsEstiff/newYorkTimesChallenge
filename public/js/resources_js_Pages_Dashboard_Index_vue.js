"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Dashboard_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
  //aca esta la informacion que traigo de bases de datos
  props: ['notices'],
  data: function data() {
    return {
      //por aqui los datos por asi llamarlos, "locales"
      news: [],
      search: ''
    };
  },
  //aca el area para los metodos
  methods: {
    //aca el metodo searching que se activa cada vez alguien teclea algo en el input search
    searching: function searching() {
      var _this = this;

      //lo que hace es filtrar el array notice, lo que se digite en search, metiendolo en el array new y si no hay nada, pues elimina dicho array
      if (this.search.length > 0) {
        //aca filtra a notices, y lo mete en news
        this.news = this.notices.filter(function (data) {
          return !_this.search || data.title.toLowerCase().includes(_this.search.toLowerCase());
        });
      } else {
        //aca se elimina los datos de news para hacer una nueva busqueda limpia
        this.news = [];
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=48cd2f5e& */ "./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=48cd2f5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    "el-row",
    { attrs: { gutter: 24 } },
    [
      _c("el-col", { attrs: { span: 12 } }, [
        _c("a", { attrs: { href: "https://www.nytimes.com" } }, [
          _c("img", {
            attrs: {
              src:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/The_New_York_Times_Logo.svg/512px-The_New_York_Times_Logo.svg.png"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c(
        "el-col",
        { attrs: { span: 12 } },
        [
          _c("el-col", { staticClass: "button-position", attrs: { span: 6 } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search"
                }
              ],
              staticClass:
                "mt-1 el-input el-input__inner my-input el-icon-search",
              attrs: {
                id: "search",
                placeholder: "Buscar",
                icon: "el-icon-search"
              },
              domProps: { value: _vm.search },
              on: {
                keyup: _vm.searching,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                }
              }
            })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-col",
        { attrs: { span: 24 } },
        [
          _vm.search.length === 0
            ? _c(
                "el-card",
                { staticClass: "mb-1" },
                _vm._l(_vm.notices, function(notice) {
                  return _c(
                    "span",
                    [
                      _c(
                        "el-col",
                        {
                          attrs: {
                            span: 8,
                            xl: 8,
                            lg: 8,
                            ms: 12,
                            sm: 24,
                            xs: 24
                          }
                        },
                        [
                          _c(
                            "el-card",
                            { staticClass: "notice_card mt-1 mb-1" },
                            [
                              _c(
                                "div",
                                { attrs: { slot: "header" }, slot: "header" },
                                [
                                  notice.image.length === 0
                                    ? _c("span", [
                                        _c("img", {
                                          staticClass: "image",
                                          attrs: {
                                            src:
                                              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"
                                          }
                                        })
                                      ])
                                    : _c("span", [
                                        _c("img", {
                                          staticClass: "image",
                                          attrs: { src: notice.image }
                                        })
                                      ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("h1", { staticClass: "title" }, [
                                _vm._v(_vm._s(notice.title))
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "abstract" }, [
                                _vm._v(_vm._s(notice.abstract))
                              ]),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "button-position mb-2",
                                  attrs: { href: notice.url }
                                },
                                [
                                  _c(
                                    "el-button",
                                    { attrs: { icon: "el-icon-edit" } },
                                    [_vm._v("Leer más")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                0
              )
            : _c("el-card", { staticClass: "mb-1" }, [
                _vm.news.length !== 0
                  ? _c(
                      "span",
                      _vm._l(_vm.news, function(notice) {
                        return _c(
                          "span",
                          [
                            _c(
                              "el-col",
                              {
                                attrs: {
                                  span: 8,
                                  xl: 8,
                                  lg: 8,
                                  ms: 12,
                                  sm: 24,
                                  xs: 24
                                }
                              },
                              [
                                _c(
                                  "el-card",
                                  { staticClass: "notice_card mt-1 mb-2" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        attrs: { slot: "header" },
                                        slot: "header"
                                      },
                                      [
                                        notice.image.length === 0
                                          ? _c("span", [
                                              _c("img", {
                                                staticClass: "image",
                                                attrs: {
                                                  src:
                                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"
                                                }
                                              })
                                            ])
                                          : _c("span", [
                                              _c("img", {
                                                staticClass: "image",
                                                attrs: { src: notice.image }
                                              })
                                            ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("h1", { staticClass: "title" }, [
                                      _vm._v(_vm._s(notice.title))
                                    ]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "abstract" }, [
                                      _vm._v(_vm._s(notice.abstract))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass: "button-position mb-1",
                                        attrs: { href: notice.url }
                                      },
                                      [
                                        _c(
                                          "el-button",
                                          { attrs: { icon: "el-icon-edit" } },
                                          [_vm._v("Leer más")]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      0
                    )
                  : _c(
                      "span",
                      [
                        _c(
                          "el-row",
                          { attrs: { span: 24, gutter: 24 } },
                          [
                            _c("el-col", { attrs: { span: 24 } }, [
                              _c("h1", { staticClass: "mt-2 mb-2 nofound" }, [
                                _vm._v("No se encontraron datos que coincidan")
                              ])
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
              ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);