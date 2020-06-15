module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./pages/quiz/styles.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.json */ "./data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ "./data.json", 1);
/* harmony import */ var _results_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../results.json */ "./results.json");
var _results_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../results.json */ "./results.json", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











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

const Quiz = ({
  data,
  results
}) => {
  const {
    0: currentQuestion,
    1: setCurrentQuestion
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);
  const {
    0: answers,
    1: setAnswers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValue(answers[currentQuestion] || -1);
  }, [currentQuestion]);

  const setCurrentAnswer = () => {
    let newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const getFinalValue = () => {
    let sum = 0;
    data.forEach((question, index) => {
      if (answers[index] && answers[index] >= 0) sum += question.answers[answers[index]].value;
    });
    return sum;
  };

  const handleChange = value => {
    setCurrentAnswer();

    if (value >= data.length) {
      console.log(answers);
      const media = getFinalValue() / data.length;
      if (media < 36) setResult(results[0]);else if (media < 71) setResult(results[1]);else setResult(results[2]);
      return;
    }

    setCurrentQuestion(value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "/pages/quiz/styles.css"
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Background"], {
    color: "#456"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    className: "card"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
    gutterBottom: true
  }, "Que tipo de empreendedor \xE9 voc\xEA durante a crise?"), __jsx("hr", null), __jsx("p", {
    id: "question"
  }), __jsx("form", {
    id: "answers",
    action: "#"
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["CardActions"], null, result && __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: result
    }
  }), !result && data && __jsx("form", {
    action: "#"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["QuestionTitle"], null, data[currentQuestion].question), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    component: "fieldset"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["RadioGroup"], {
    "aria-label": "answer",
    name: "answer",
    onChange: event => {
      setValue(event.target.value);
    },
    value: value
  }, data[currentQuestion].answers.map((answer, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    key: index,
    value: `${index}`,
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      color: "primary"
    }),
    label: answer.text
  })))))), !result && __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], null, __jsx("hr", null), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: () => {
      handleChange(currentQuestion + 1);
    },
    variant: "contained",
    color: "primary",
    className: 'button'
  }, currentQuestion === data.length - 1 ? 'Finalizar e Visualizar Resultado' : 'Próxima Pergunta'), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["Pagination"], {
    page: currentQuestion + 1,
    color: "primary",
    style: {
      marginTop: 40
    },
    count: data.length,
    onChange: (event, value) => {
      handleChange(value - 1);
    }
  })))));
};

async function getServerSideProps(context) {
  const {
    id
  } = context.query;
  console.log(id);
  let shuffledData = [..._data_json__WEBPACK_IMPORTED_MODULE_7__];
  shuffledData.map(question => {
    let shuffledQuestion = _objectSpread({}, question);

    shuffledQuestion.answers = shuffledQuestion.answers.shuffle();
    return shuffledQuestion;
  });
  return {
    props: {
      data: shuffledData,
      results: _results_json__WEBPACK_IMPORTED_MODULE_8__
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(Quiz));

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const Button = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["withStyles"])({
  root: {
    backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["blueGrey"][800],
    color: 'white',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["blueGrey"][900]
    }
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"]);
const Card = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["withStyles"])({
  root: {
    padding: 60,
    width: '50%',
    display: 'inline-block'
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"]);
const CardTitle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["withStyles"])({
  root: {
    fontSize: '24px',
    fontWeight: 300
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"]);
const QuestionTitle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["withStyles"])({
  root: {
    fontSize: '17px',
    color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["blueGrey"][900],
    marginBottom: 10
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"]);
const CardActions = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["withStyles"])({
  root: {
    display: 'block'
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardActions"]);
const CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "styles__CardFooter",
  componentId: "sc-1kdpgpy-0"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
const Background = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "styles__Background",
  componentId: "sc-1kdpgpy-1"
})(["background-color:", ";width:100vw;min-height:100vh;display:flex;justify-content:center;align-items:center;"], props => props.color || _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["blue"][300]);

/***/ }),

/***/ "./results.json":
/*!**********************!*\
  !*** ./results.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"<center><img width='150px' height='150px' src='https://image.flaticon.com/icons/svg/597/597601.svg' /></center><br />A crise vai te transformar em <b>VÍTIMA</b>.<br /><br />A crise é grave e irá impactar o seu negócio. Porém, o empreendedor deve tomar atitudes e decisões rápidas para enfrentar os desafios. Ficar parado, sem se informar e buscar alternativa vai apenas ampliar o problema. Como o Sebrae pode te ajudar neste momento:  <br /><br /> O Sebrae SP criou um <b>KIT DE ENFRENTAMENTO</b>, com conteúdos, ferramentas e consultorias gratuitas com nossos especialistas.Acesse agora no nosso site <a class='link' href='http://www.sebraesp.com.br'>www.sebraesp.com.br</a> e não deixe que a crise te transforme em uma vítima.\",\"<center><img width='150px' height='150px' src='https://image.flaticon.com/icons/svg/544/544548.svg' /></center><br />Você pode ser o <b>SALVADOR</b> do seu negócio.<br /><br /> A crise é grave e irá impactar o seu negócio. Mas, você precisa e pode melhorar sua atitude frente a crise, entendendo melhor o cenário, as oportunidades e tomando as melhores decisões neste momento. Como o Sebrae pode te ajudar neste momento:<br /><br /> O Sebrae SP criou um <b>KIT DE ENFRENTAMENTO</b>, com conteúdos, ferramentas e consultorias gratuitas com nossos especialistas. Acesse agora no nosso site <a class='link' href='http://www.sebraesp.com.br'>www.sebraesp.com.br</a> e amplie suas armas para lutar nesta crise.\",\"<center><img width='150px' height='150px' src='https://image.flaticon.com/icons/svg/562/562842.svg' /></center><br />Você é um empreendedor <b>GUERREIRO</b>, parabéns!<br /><br /> Apesar da grave crise, você tomou as atitudes necessárias, se informou sobre o cenário e identificou oportunidades. Não baixe a guarda e continue enfrentando este momento com consciência e atitude. Como o Sebrae pode te ajudar neste momento: <br /><br /> O Sebrae SP criou um <b>KIT DE ENFRENTAMENTO</b>, com conteúdos, ferramentas e consultorias gratuitas com nossos especialistas. Acesse agora no nosso site <a class='link' href='http://www.sebraesp.com.br'>www.sebraesp.com.br</a> e mantenha-se diferenciado neste momento.\"]");

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/quiz/[id].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/enricorobazza/Documents/Trabalho/Quiz/pages/quiz/[id].js */"./pages/quiz/[id].js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab":
/*!***********************************!*\
  !*** external "@material-ui/lab" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map