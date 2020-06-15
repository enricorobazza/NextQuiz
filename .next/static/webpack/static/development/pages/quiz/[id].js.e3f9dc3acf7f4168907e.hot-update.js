webpackHotUpdate("static/development/pages/quiz/[id].js",{

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"question\":\"Desde o início da quarenta você:\",\"answers\":[{\"text\":\"Fiquei preocupado com a situação e estou aguardando o desenrolar dos fatos\",\"value\":0},{\"text\":\"Procurei me informar sobre a pandemia e estou decidindo o que fazer\",\"value\":50},{\"text\":\"Procurei me informar e já tomei algumas decisões para minimizar os impactos\",\"value\":100}]},{\"question\":\"Sobre as ações trabalhistas implementadas pelos Governos:\",\"answers\":[{\"text\":\"Ouvi algo a respeito, mas não sei exatamente do que se trata\",\"value\":0},{\"text\":\"Tomei conhecimento das ações mas não sei como aproveitá-las\",\"value\":50},{\"text\":\"Tomei conhecimento das ações e já estou utilizando os benefícios\",\"value\":100}]},{\"question\":\"Sobre as ações de crédito anunciadas pelos Governos:\",\"answers\":[{\"text\":\"Ouvi algo a respeito, mas não sei exatamente do que se trata\",\"value\":0},{\"text\":\"Tomei conhecimento das ações mas não sei como aproveitá-las\",\"value\":50},{\"text\":\"Tomei conhecimento das ações e já estou acionando o que foi disponibilizado\",\"value\":100}]},{\"question\":\"Em relação aos custos da sua empresa, quando a quarentena começou, você:\",\"answers\":[{\"text\":\"Não tomei nenhuma iniciativa específica\",\"value\":0},{\"text\":\"Fiquei apreensivo, reduzi ou cancelei as compras junto a fornecedores\",\"value\":50},{\"text\":\"Cancelei as compras, renegociei contratos e cortei custos.\",\"value\":100}]},{\"question\":\"Em relação às vendas durante a quarentena:\",\"answers\":[{\"text\":\"Tive que fechar o negócio por decreto do governo e não tenho alternativa para vender.\",\"value\":0},{\"text\":\"Tive que fechar o negócio por decreto do governo mas estou vendendo de outra forma\",\"value\":50},{\"text\":\"Tive que fechar o negócio por decreto do governo mas implantei outro canal de venda.\",\"value\":100},{\"text\":\"Não tive que fechar o negócio, mas as vendas/atendimento caíram muito neste período\",\"value\":0},{\"text\":\"Não tive que fechar o negócio, mas estou estudando implantar outros canais de venda/atendimento\",\"value\":50},{\"text\":\"Não tive que fechar o negócio, mas implantei outro canal de venda/atendimento\",\"value\":100}]},{\"question\":\"Assim que acabar a quarentena:\",\"answers\":[{\"text\":\"Certamente estarei endividado e com risco de fechar as portas\",\"value\":0},{\"text\":\"Estarei endividado, mas terei mantido parte dos clientes e funcionários\",\"value\":50},{\"text\":\"Terei ampliado minhas alternativas de operação por outros canais e ações.\",\"value\":100}]},{\"question\":\"Após a quarentena você acredita que:\",\"answers\":[{\"text\":\"O mercado estará ainda pior do que antes da crise\",\"value\":0},{\"text\":\"O mercado não será o mesmo e a retomada será lenta\",\"value\":50},{\"text\":\"O mercado estará mais agressivo mas terá boas oportunidades de atuação e crescimento\",\"value\":100}]}]");

/***/ }),

/***/ "./pages/quiz/[id].js":
/*!****************************!*\
  !*** ./pages/quiz/[id].js ***!
  \****************************/
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
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./data.json", 1);

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
//# sourceMappingURL=[id].js.e3f9dc3acf7f4168907e.hot-update.js.map