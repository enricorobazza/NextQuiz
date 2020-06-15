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

/***/ "./config/next-quiz-firebase-adminsdk-koo19-836b931bc6.json":
/*!******************************************************************!*\
  !*** ./config/next-quiz-firebase-adminsdk-koo19-836b931bc6.json ***!
  \******************************************************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"next-quiz\",\"private_key_id\":\"836b931bc65332f6717947c30515c684c70be43a\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCsbGn1M/znnzWw\\nzX+NQCkYeo4n27bM9xHzUS6FHTCOz9HkF72G7uziJyD/zY1fY6P/5ptXOONSEjCC\\nhhs7+vd7TzXMX7NJh2y+oYk+tsPHxS26HcNH2261efEloQqt1l6aUA4c4z6BZp7M\\nXPng250UAwsmLqlYsvW18dq4ZTJ5S5hR5CeAA6/VUWCYRAvt76xnBHgQ/5zYJAIV\\nJtRhWVzW7YK96zH7CDg4gWLpsq94cqC3dsTOUVGCdeYn/oxwDVL/BPMAvpYI+kaH\\nUGphDxb24y8sx6GaJzK4HZPTel6jJIP8BsKhrW+VgyGFUOtSxuLozk2cWN4qskeL\\n55ytNGxnAgMBAAECggEAHs7oR9XYNJKwBz1Qsy5pqWQMjnalvQ3QeUdiJorGqF3d\\nxQGw7bE3RllzfgF+ZzLolMrhqr4RcBKr9EZ+C0OWgMPweuoGoPa/qXg3i6sgZEuJ\\nFh5HTEmbCHYXbn/N5q3NDYmMXAEGpBxv91gNle3nrTG2BkaEH8MqQC5MxHHgiOd7\\ntCjTRprr16f+W8GJGs1+zNEpQWGO2YHTvApP1XiAJlBZT0vfmmYkQ5FCT3AGr4hS\\nZSxh6d9GxqL2udcO8eUNpVdgeYaZNgSG9IWjT8+aFJ3B32sEjMXDzlR21KuHAj5D\\nMIwOYTdS2+8c3/TsTK5Kzq5gpGoyPWlHSfGFbI/20QKBgQDhsJB57XxGYMY5irB7\\nXYlmfgmGqpT7HKaSLMqIizveAb+p4JZkyDMc8Ud2Wpf4eOta463QfhF1adKNPWjU\\n5eQQRnhi+IBdNPmZaDt9YeaYY1IDiWVdBFpWU7igHvp/VOvUTfNEx4ifuPi+hwJ+\\ndBW/yCYCxMp4uzva3t5uxilCAwKBgQDDlIEeb0idj5FyyYuWlynbLLVgqf63s7FE\\nDlrmW/0a0dhgU8B48BKRKaLRp2g7y6aJWNybJ/RKrKWtuNUZPY7XBZEziaP+ZntB\\nUgzXMNoDcmJ2mRbjvhszT+HYF0M8LctvIG3Y8ZYCjZOunIBwa442po5V4v5QSCp2\\nOYBLoe4wzQKBgDh0vI9jkvTf/HYkdWVGzrouyR9AyKfQUPK79aYWflFYyqMqJTTs\\nx6xzxtaabu2fAfDoh3BiOOfQIvVl6TVolJZlqnPHigTG3bE8W7VPqilwnvF3iz2r\\nexWhN8wGM89qZNvk6/fGmiyqTr8KcttDGrWw0aFbrPJqk9x6Z9X6CBQVAoGAb8IH\\nOiXq/6XPPiFu80EzuLtGdZMOK1ix/aqaRLHh4pZwpzKUdEbyxSJemKCpjimj4y30\\n+XAORzF6htdsZbzoR3Q18ZZAMJnM6pmBHuIaYgfVveFi1AaIsnx+GCXK1LNyYPDN\\n9D6wMotGDWv+dL7xB8eK5AcOvT9PjDj1V8KTQi0CgYBxQlJ0+GT8ixAdX7EBivYr\\nS8620GfJAdnTOsIXD7V44vIGGnz3aWMS4XNuZgmk3cgNVmVp6nAldgTJlgY7vw2j\\nkn6OHRmi7gkhYBAfv08G5gyHOqwG0cqBomSMuLdVOUc4J72MA/HMxBp4F2O40UCf\\nP5G67mDi4oSvHgaYYF70XA==\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-koo19@next-quiz.iam.gserviceaccount.com\",\"client_id\":\"108601353113298290530\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-koo19%40next-quiz.iam.gserviceaccount.com\"}");

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
/* harmony import */ var _repository_quiz_quizRepository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../repository/quiz/quizRepository */ "./repository/quiz/quizRepository.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // import dataJSON from '../../data.json';
// import resultsJSON from '../../results.json';



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
  results,
  color,
  title
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
    color: color
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    className: "card"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
    gutterBottom: true
  }, title), __jsx("hr", null), __jsx("p", {
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
  const quiz = await _repository_quiz_quizRepository__WEBPACK_IMPORTED_MODULE_7__["default"].getQuiz(id);

  if (!quiz) {
    console.log('Quiz não existe!!!');
    return {
      props: {
        data: {},
        results: {}
      }
    };
  }

  let shuffledData = [...quiz.questions];
  shuffledData.map(question => {
    let shuffledQuestion = _objectSpread({}, question);

    shuffledQuestion.answers = shuffledQuestion.answers.shuffle();
    return shuffledQuestion;
  });
  return {
    props: {
      data: shuffledData,
      color: quiz.color,
      results: quiz.results,
      title: quiz.title
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

/***/ "./repository/index.js":
/*!*****************************!*\
  !*** ./repository/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_next_quiz_firebase_adminsdk_koo19_836b931bc6_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/next-quiz-firebase-adminsdk-koo19-836b931bc6.json */ "./config/next-quiz-firebase-adminsdk-koo19-836b931bc6.json");
var _config_next_quiz_firebase_adminsdk_koo19_836b931bc6_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/next-quiz-firebase-adminsdk-koo19-836b931bc6.json */ "./config/next-quiz-firebase-adminsdk-koo19-836b931bc6.json", 1);


let db = null;

const getInstance = () => {
  try {
    firebase_admin__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]({
      credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0__["credential"].cert(_config_next_quiz_firebase_adminsdk_koo19_836b931bc6_json__WEBPACK_IMPORTED_MODULE_1__),
      databaseURL: 'https://next-quiz.firebaseio.com'
    });
  } catch (error) {
    if (!/already exists/u.test(error.message)) {
      // eslint-disable-next-line no-console
      console.error('Firebase admin initialization error', error.stack);
      return null;
    }
  }

  return firebase_admin__WEBPACK_IMPORTED_MODULE_0__["firestore"]();
};

/* harmony default export */ __webpack_exports__["default"] = (getInstance);

/***/ }),

/***/ "./repository/quiz/quizRepository.js":
/*!*******************************************!*\
  !*** ./repository/quiz/quizRepository.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../repository */ "./repository/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ref = Object(_repository__WEBPACK_IMPORTED_MODULE_0__["default"])().collection('quiz');

const getQuiz = async id => {
  const quiz = await ref.doc(id).get();
  let retQuiz;

  if (quiz.exists) {
    retQuiz = _objectSpread({}, quiz.data(), {
      questions: []
    });
    const questions = await ref.doc(id).collection('questions').get();
    const answersPromises = [];
    questions.forEach(doc => {
      answersPromises.push(doc.ref.collection('answers').get());
      retQuiz.questions.push(doc.data());
    });
    const answersResp = await Promise.all(answersPromises);
    answersResp.forEach((answers, index) => {
      retQuiz.questions[index].answers = [];
      answers.forEach(answer => {
        retQuiz.questions[index].answers.push(answer.data());
      });
    });
  }

  return retQuiz;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getQuiz
});

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

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

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