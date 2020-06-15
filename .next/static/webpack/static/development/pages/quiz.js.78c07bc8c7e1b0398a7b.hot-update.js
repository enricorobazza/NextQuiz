webpackHotUpdate("static/development/pages/quiz.js",{

/***/ "./pages/quiz/index.js":
/*!*****************************!*\
  !*** ./pages/quiz/index.js ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./pages/quiz/styles.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








Array.prototype.shuffle = function () {
  var i = this.length,
      j,
      temp;
  if (i == 0) return this;

  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }

  return this;
};

var Quiz = function Quiz(_ref) {
  var data = _ref.data,
      results = _ref.results;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentQuestion = _useState[0],
      setCurrentQuestion = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      answers = _useState3[0],
      setAnswers = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      result = _useState4[0],
      setResult = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setValue(answers[currentQuestion] || -1);
  }, [currentQuestion]);

  var setCurrentAnswer = function setCurrentAnswer() {
    var newAnswers = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(answers);

    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  var getFinalValue = function getFinalValue() {
    var sum = 0;
    data.forEach(function (question, index) {
      if (answers[index] && answers[index] >= 0) sum += question.answers[answers[index]].value;
    });
    return sum;
  };

  var handleChange = function handleChange(value) {
    setCurrentAnswer();

    if (value >= data.length) {
      console.log(answers);
      var media = getFinalValue() / data.length;
      if (media < 36) setResult(results[0]);else if (media < 71) setResult(results[1]);else setResult(results[2]);
      return;
    }

    setCurrentQuestion(value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "/pages/quiz/styles.css"
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["Background"], {
    color: "#456"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    className: "card"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
    gutterBottom: true
  }, "Que tipo de empreendedor \xE9 voc\xEA durante a crise?"), __jsx("hr", null), __jsx("p", {
    id: "question"
  }), __jsx("form", {
    id: "answers",
    action: "#"
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["CardActions"], null, result && __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: result
    }
  }), !result && data && __jsx("form", {
    action: "#"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["QuestionTitle"], null, data[currentQuestion].question), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    component: "fieldset"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"], {
    "aria-label": "answer",
    name: "answer",
    onChange: function onChange(event) {
      setValue(event.target.value);
    },
    value: value
  }, data[currentQuestion].answers.map(function (answer, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
      key: index,
      value: "".concat(index),
      control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
        color: "primary"
      }),
      label: answer.text
    });
  }))))), !result && __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], null, __jsx("hr", null), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: function onClick() {
      handleChange(currentQuestion + 1);
    },
    variant: "contained",
    color: "primary",
    className: 'button'
  }, currentQuestion === data.length - 1 ? 'Finalizar e Visualizar Resultado' : 'Próxima Pergunta'), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["Pagination"], {
    page: currentQuestion + 1,
    color: "primary",
    style: {
      marginTop: 40
    },
    count: data.length,
    onChange: function onChange(event, value) {
      handleChange(value - 1);
    }
  })))));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withTheme"])(Quiz));

/***/ })

})
//# sourceMappingURL=quiz.js.78c07bc8c7e1b0398a7b.hot-update.js.map