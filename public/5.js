webpackJsonp([5],{

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(15)
/* script */
var __vue_script__ = __webpack_require__(230)
/* template */
var __vue_template__ = __webpack_require__(231)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\TestComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b0ceddb8", Component.options)
  } else {
    hotAPI.reload("data-v-b0ceddb8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      radio: '1'
    };
  }
});

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-radio",
        {
          staticClass: "radio",
          attrs: { label: "1" },
          model: {
            value: _vm.radio,
            callback: function($$v) {
              _vm.radio = $$v
            },
            expression: "radio"
          }
        },
        [_vm._v("备选项")]
      ),
      _vm._v(" "),
      _c(
        "el-radio",
        {
          staticClass: "radio",
          attrs: { label: "2" },
          model: {
            value: _vm.radio,
            callback: function($$v) {
              _vm.radio = $$v
            },
            expression: "radio"
          }
        },
        [_vm._v("备选项")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b0ceddb8", module.exports)
  }
}

/***/ })

});