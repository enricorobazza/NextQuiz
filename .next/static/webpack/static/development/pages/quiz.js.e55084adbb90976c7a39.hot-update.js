webpackHotUpdate("static/development/pages/quiz.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/quiz/styles.js":
/*!******************************!*\
  !*** ./pages/quiz/styles.js ***!
  \******************************/
/*! exports provided: Button, Card, CardTitle, QuestionTitle, CardActions, CardFooter, Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTitle", function() { return QuestionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardActions", function() { return CardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return CardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: ", ";\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Button = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  root: {
    backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["blueGrey"][800],
    color: 'white',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["blueGrey"][900]
    }
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"]);
var Card = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  root: {
    padding: 60,
    width: '50%',
    display: 'inline-block'
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"]);
var CardTitle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  root: {
    fontSize: '24px',
    fontWeight: 300
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"]);
var QuestionTitle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  root: {
    fontSize: '17px',
    color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["blueGrey"][900],
    marginBottom: 10
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"]);
var CardActions = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  root: {
    display: 'block'
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"]);
var CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "styles__CardFooter",
  componentId: "sc-1kdpgpy-0"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
var Background = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])({
  color: color
}).div(_templateObject(), _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["blue"][color]);

/***/ })

})
//# sourceMappingURL=quiz.js.e55084adbb90976c7a39.hot-update.js.map