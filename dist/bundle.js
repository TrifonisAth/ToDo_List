/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #154c79;\r\n  color: whitesmoke;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 6vh;\r\n}\r\n\r\n#logo {\r\n  width: 3rem;\r\n  justify-items: center;\r\n  background-color: #ffccee;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n#menu {\r\n  width: 5rem;\r\n  height: 5rem;\r\n}\r\n\r\nh1 > span {\r\n  color: #ffcc00;\r\n}\r\n\r\n.home > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.projects > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.side-logo {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  align-self: center;\r\n  background-color: lightgoldenrodyellow;\r\n  margin: 1rem 0.7rem 1rem 2rem;\r\n}\r\n\r\n.project-dot {\r\n  background-color: #711f30;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.container-small {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.side-panel {\r\n  padding-left: 1rem;\r\n  background-color: #711f30;\r\n  flex: 1 1 300px;\r\n  min-width: 300px;\r\n  max-width: 400px;\r\n}\r\n\r\n#add {\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.content {\r\n  min-width: 400px;\r\n  width: 70vw;\r\n  min-height: 94vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1;\r\n  background-color: #033c59;\r\n  padding: 2rem;\r\n}\r\n\r\n.content > * {\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#content-title {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  padding: 1rem 1.7rem;\r\n}\r\n\r\n.title {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected {\r\n  background-color: #118f55;\r\n}\r\n\r\n.home > *:hover,\r\n.projects > *:hover {\r\n  background-color: gray;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  padding: 0.9rem;\r\n  border-radius: 0.5rem;\r\n  width: 5.7rem;\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  margin: 0.6rem;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\ninput {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.prompt {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n}\r\n\r\n.green {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected-tab {\r\n  font-weight: 700;\r\n  font-size: 1.15rem;\r\n  background-color: #184f35;\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.project > p {\r\n  flex-grow: 1;\r\n}\r\n\r\n.settings {\r\n  width: 2rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.options-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 6rem;\r\n  padding: 0.2rem 1rem;\r\n  background-color: darkcyan;\r\n  position: absolute;\r\n  right: 6rem;\r\n  top: -4rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.options-panel > * {\r\n  margin: 0.2rem 0;\r\n  padding: 0.5rem 0.3rem;\r\n  width: 100%;\r\n}\r\n\r\n.options-panel > *:hover {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.add-task {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.add-task:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n#add-task {\r\n  border-radius: 1rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  background-color: #444444;\r\n  max-width: 700px;\r\n}\r\n\r\nform > .buttons {\r\n  align-self: center;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\nbutton {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 0.2rem solid white;\r\n  margin: 1rem;\r\n  padding: 0.8rem;\r\n}\r\n\r\n.task > * {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.top {\r\n  height: 30%;\r\n}\r\n\r\n.top > .task-name {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  color: #ffcc00;\r\n}\r\n.group {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.group > * {\r\n  margin: 0 0.5rem;\r\n}\r\n\r\n.task img {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  font-size: 2rem;\r\n  justify-self: flex-start;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #154c79;\r\n  color: whitesmoke;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 6vh;\r\n}\r\n\r\n#logo {\r\n  width: 3rem;\r\n  justify-items: center;\r\n  background-color: #ffccee;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n#menu {\r\n  width: 5rem;\r\n  height: 5rem;\r\n}\r\n\r\nh1 > span {\r\n  color: #ffcc00;\r\n}\r\n\r\n.home > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.projects > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.side-logo {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  align-self: center;\r\n  background-color: lightgoldenrodyellow;\r\n  margin: 1rem 0.7rem 1rem 2rem;\r\n}\r\n\r\n.project-dot {\r\n  background-color: #711f30;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.container-small {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.side-panel {\r\n  padding-left: 1rem;\r\n  background-color: #711f30;\r\n  flex: 1 1 300px;\r\n  min-width: 300px;\r\n  max-width: 400px;\r\n}\r\n\r\n#add {\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.content {\r\n  min-width: 400px;\r\n  width: 70vw;\r\n  min-height: 94vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1;\r\n  background-color: #033c59;\r\n  padding: 2rem;\r\n}\r\n\r\n.content > * {\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#content-title {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  padding: 1rem 1.7rem;\r\n}\r\n\r\n.title {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected {\r\n  background-color: #118f55;\r\n}\r\n\r\n.home > *:hover,\r\n.projects > *:hover {\r\n  background-color: gray;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  padding: 0.9rem;\r\n  border-radius: 0.5rem;\r\n  width: 5.7rem;\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  margin: 0.6rem;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\ninput {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.prompt {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n}\r\n\r\n.green {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected-tab {\r\n  font-weight: 700;\r\n  font-size: 1.15rem;\r\n  background-color: #184f35;\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.project > p {\r\n  flex-grow: 1;\r\n}\r\n\r\n.settings {\r\n  width: 2rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.options-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 6rem;\r\n  padding: 0.2rem 1rem;\r\n  background-color: darkcyan;\r\n  position: absolute;\r\n  right: 6rem;\r\n  top: -4rem;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.options-panel > * {\r\n  margin: 0.2rem 0;\r\n  padding: 0.5rem 0.3rem;\r\n  width: 100%;\r\n}\r\n\r\n.options-panel > *:hover {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.add-task {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.add-task:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n#add-task {\r\n  border-radius: 1rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  background-color: #444444;\r\n  max-width: 700px;\r\n}\r\n\r\nform > .buttons {\r\n  align-self: center;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\nbutton {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 0.2rem solid white;\r\n  margin: 1rem;\r\n  padding: 0.8rem;\r\n}\r\n\r\n.task > * {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.top {\r\n  height: 30%;\r\n}\r\n\r\n.top > .task-name {\r\n  font-size: 1.3rem;\r\n  font-weight: 600;\r\n  color: #ffcc00;\r\n}\r\n.group {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.group > * {\r\n  margin: 0 0.5rem;\r\n}\r\n\r\n.task img {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  margin: 0.5rem;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  font-size: 2rem;\r\n  justify-self: flex-start;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/style.css */ "./src/style.css?1315"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ "./src/index.js?dfde"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/menu.png */ "./src/menu.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/allTasks.png */ "./src/allTasks.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/today.png */ "./src/today.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/7days.png */ "./src/7days.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../src/important.png */ "./src/important.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../src/add.png */ "./src/add.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\r\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" defer><" + "/script>\r\n    <title>Todo List</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"container\">\r\n      <header>\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"menu\" id=\"menu\" />\r\n        <h1>JUST <span>ToDo </span>IT.</h1>\r\n        <div><div></div></div>\r\n      </header>\r\n      <div class=\"container-small\">\r\n        <div class=\"side-panel\">\r\n          <h2 id=\"home-title\">Home</h2>\r\n          <div class=\"home\">\r\n            <div class=\"all-tasks home-tab selected-tab\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n                alt=\"all tasks\"\r\n                class=\"side-logo\"\r\n              />\r\n              <p>All Tasks</p>\r\n            </div>\r\n            <div class=\"today-tasks home-tab\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"today tasks\" class=\"side-logo\" />\r\n              <p>Today</p>\r\n            </div>\r\n            <div class=\"next-week home-tab\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next week\" class=\"side-logo\" />\r\n              <p>Next Week</p>\r\n            </div>\r\n            <div class=\"important home-tab\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                alt=\"important\"\r\n                class=\"side-logo\"\r\n              />\r\n              <p>Important</p>\r\n            </div>\r\n          </div>\r\n          <h2 id=\"projects-title\">Projects</h2>\r\n          <div class=\"projects\">\r\n            <div class=\"add-project\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"add\" class=\"side-logo\" id=\"add\" />\r\n              <p id=\"add-project\">Add Project</p>\r\n            </div>\r\n            <div class=\"project-prompt prompt hidden\">\r\n              <input\r\n                type=\"text\"\r\n                placeholder=\"Project Name\"\r\n                name=\"project\"\r\n                id=\"project\"\r\n                maxlength=\"20\"\r\n                autocomplete=\"off\"\r\n              />\r\n              <div class=\"buttons\">\r\n                <button class=\"green-btn green\">Add</button\r\n                ><button class=\"red-btn red\">Cancel</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"rename-prompt prompt hidden\">\r\n              <input\r\n                type=\"text\"\r\n                placeholder=\"Project Name\"\r\n                name=\"rename\"\r\n                id=\"rename\"\r\n                maxlength=\"20\"\r\n                autocomplete=\"off\"\r\n              />\r\n              <div class=\"buttons\">\r\n                <button class=\"rename-btn green\">Rename</button\r\n                ><button class=\"cancel-btn red\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"title\">\r\n            <p id=\"content-title\"></p>\r\n          </div>\r\n          <div class=\"add-task hidden\">\r\n            <img\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n              alt=\"add-task\"\r\n              id=\"add-task\"\r\n              class=\"side-logo\"\r\n            />\r\n            <p class=\"add-task-para\">Add Task</p>\r\n          </div>\r\n          <form class=\"hidden\">\r\n            <p class=\"task-title\">Title:</p>\r\n            <input\r\n              type=\"text\"\r\n              placeholder=\"What to do?\"\r\n              maxlength=\"30\"\r\n              id=\"task-name\"\r\n              required\r\n            />\r\n            <p class=\"task-title\">Details (optional):</p>\r\n            <input\r\n              type=\"text\"\r\n              placeholder=\"Some datails about the task\"\r\n              maxlength=\"30\"\r\n              id=\"task-details\"\r\n            />\r\n            <p class=\"task-title\">Date:</p>\r\n            <input type=\"date\" maxlength=\"30\" id=\"task-date\" required />\r\n            <div class=\"buttons\">\r\n              <button class=\"green\" type=\"button\" id=\"task-add-btn\">Add</button\r\n              ><button class=\"red\" type=\"button\" id=\"task-cancel-btn\">\r\n                Cancel\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css?7163":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/style.css?1315":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57011448dc08b9372b5e.css";

/***/ }),

/***/ "./src/7days.png":
/*!***********************!*\
  !*** ./src/7days.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9026f17fb65f9ea2b822.png";

/***/ }),

/***/ "./src/add.png":
/*!*********************!*\
  !*** ./src/add.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d2ab575ab1c167f52fa.png";

/***/ }),

/***/ "./src/allTasks.png":
/*!**************************!*\
  !*** ./src/allTasks.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "202ade8350acd8bdbba6.png";

/***/ }),

/***/ "./src/dot.png":
/*!*********************!*\
  !*** ./src/dot.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9be5ea21b818dac399e.png";

/***/ }),

/***/ "./src/important.png":
/*!***************************!*\
  !*** ./src/important.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3b6f3786341b86cd5da.png";

/***/ }),

/***/ "./src/index.js?dfde":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a46f6bf8dc660d29f49c.js";

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bac27c2e769e4d722df3.png";

/***/ }),

/***/ "./src/settings.png":
/*!**************************!*\
  !*** ./src/settings.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "061da0c908d46b6d6897.png";

/***/ }),

/***/ "./src/star.png":
/*!**********************!*\
  !*** ./src/star.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fab0cf8aaa093a93ae1.png";

/***/ }),

/***/ "./src/today.png":
/*!***********************!*\
  !*** ./src/today.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51deb4f2580f0f0aa69d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css?7163");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _settings_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.png */ "./src/settings.png");
/* harmony import */ var _dot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dot.png */ "./src/dot.png");
/* harmony import */ var _star_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./star.png */ "./src/star.png");
/* harmony import */ var _important_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./important.png */ "./src/important.png");







Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  const value = this.getItem(key);
  return value && JSON.parse(value);
};

// Set value to 0 or sessionStorage saved, if it exists.
let currentId = sessionStorage.getObject("currentId") || 0;
// Set value to empty array or sessionStorage saved, if it exists.
let projects = sessionStorage.getObject("projectsList") || [];

let currenTaskId = sessionStorage.getObject("currentTaskId") || 0;

function updateSessionStorageProjectList() {
  sessionStorage.setObject("projectsList", projects);
}

function updateSessionStorageId() {
  sessionStorage.setItem("currentId", currentId);
}

function updateLocalTaskId() {
  sessionStorage.setItem("currentTaskId", currenTaskId);
}

/////////////////////////////////////

function addProject(project) {
  projects.push(project);
}

function removeProject(id) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id == id) {
      projects.splice(i, 1);
      break;
    }
  }
}

function findProject(projectName) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name === projectName) return projects[i];
  }
}

function findProjectById(pid) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id == pid) return projects[i];
  }
}

const projectRenamer = (oldName, newName) => {
  findProject(oldName).name = newName;
};

class Project {
  constructor(name) {
    this.name = name;
    this.id = currentId++;
    this.taskList = [];
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  setName(newName) {
    this.name = newName;
  }

  addTask(taskName, details, date) {
    const task = new Task(taskName, details, date);
    this.taskList.push(task);
  }

  renameProject(newName) {
    this.name = newName;
  }

  removeTask(taskIndex) {
    this.taskList.splice(taskIndex, 1);
  }

  getTasks() {
    return this.taskList;
  }
}

class Task {
  constructor(name, details, date) {
    this.name = name;
    this.details = details;
    this.date = date;
    this.important = false;
  }

  edit(name, details, date) {
    this.name = name;
    this.details = details;
    this.date = date;
  }

  getName() {
    return this.name;
  }

  getDetails() {
    return this.details;
  }

  getDate() {
    return this.date;
  }

  toggleImportant() {
    this.important = !this.important;
  }

  getImportant() {
    return this.important;
  }
}

////////////////////

const addBtn = document.querySelector(".add-project");
const projectsTab = document.querySelector(".projects");
const content = document.querySelector(".content");
const contentTitle = document.getElementById("content-title");
const sideBtn = document.querySelector(".side-panel");
const menuBtn = document.getElementById("menu");
const tabs = document.querySelectorAll(".home-tab");
const allTasksTab = document.querySelector(".all-tasks");
const todayTasksTab = document.querySelector(".today-tasks");
const nextWeekTasksTab = document.querySelector(".next-week");
const importantTasksTab = document.querySelector(".important");
const projectPrompt = document.querySelector(".project-prompt");
const promptInput = projectPrompt.querySelector("input");
const promptRedBtn = projectPrompt.querySelector(".red-btn");
const promptGreenBtn = projectPrompt.querySelector(".green-btn");
const renamePrompt = document.querySelector(".rename-prompt");
const renameInput = renamePrompt.querySelector("input");
const renameGreenBtn = renamePrompt.querySelector(".rename-btn");
const renameRedBtn = renamePrompt.querySelector(".cancel-btn");
const openTaskPrompt = document.querySelector(".add-task");
const formTask = document.querySelector("form");
const taskNameInput = document.getElementById("task-name");
const taskDetailsInput = document.getElementById("task-details");
const taskDateInput = document.getElementById("task-date");
const taskAddBtn = document.getElementById("task-add-btn");
const taskCancelBtn = document.getElementById("task-cancel-btn");

let currentTab = allTasksTab;
contentDisplay(currentTab);
let openDialog = null;
let openRename = null;
tabs[0].onclick = () => changeTab(allTasksTab);
tabs[1].onclick = () => changeTab(todayTasksTab);
tabs[2].onclick = () => changeTab(nextWeekTasksTab);
tabs[3].onclick = () => changeTab(importantTasksTab);

let inputProject; // Check if it is needed or not.
// Menu sandwich button.
menuBtn.onclick = showMenu;
// Click Add project, action.
addBtn.onclick = () => {
  projectPrompt.classList.remove("hidden");
  promptInput.focus();
};
promptRedBtn.onclick = hideProjectPrompt;

promptGreenBtn.onclick = createProject;
renameGreenBtn.onclick = renameProject;
renameRedBtn.onclick = cancelRename;
openTaskPrompt.onclick = clickOpenTaskPrompt;
taskAddBtn.onclick = createTask;
taskCancelBtn.onclick = cancelTaskPrompt;

document.addEventListener("click", (e) => {
  if (openDialog === null) return;
  // Click outside of dialog should close the dialog.
  if (!openDialog.contains(e.target)) removeDialog(openDialog);
});

function createProject() {
  addProject(new Project(promptInput.value));
  hideProjectPrompt();
  updateSessionStorageId();
  updateSessionStorageProjectList();
  loadProjects("single");
}

function hideProjectPrompt() {
  projectPrompt.classList.add("hidden");
  promptInput.value = "";
}

loadProjects();

// Load the projects into html.
function loadProjects(arg) {
  for (let i = 0; i < projects.length; i++) {
    // If arg === 'single' load only the last project.
    if (arg === "single") i = projects.length - 1;
    const proj = projects[i];
    const div = document.createElement("div");
    div.dataset.id = proj.id; // Bug here!
    div.classList.add("project");
    const dot = new Image();
    dot.src = _dot_png__WEBPACK_IMPORTED_MODULE_3__;
    dot.alt = "dot";
    dot.setAttribute("class", "side-logo project-dot");
    div.insertAdjacentElement("afterbegin", dot);
    const p = document.createElement("p");
    p.textContent = proj["name"];
    p.classList.add("project-name");
    div.appendChild(p);
    const settings = new Image();
    settings.src = _settings_png__WEBPACK_IMPORTED_MODULE_2__;
    settings.alt = "settings";
    settings.setAttribute("class", "settings");
    div.insertAdjacentElement("beforeend", settings);
    div.lastElementChild.addEventListener("click", (e) =>
      settingsClicked(div, e)
    );
    div.onclick = () => changeTab(div);
    projectsTab.appendChild(div);
    // Exit loop after 1 rep, if arg === 'single'
    if (arg === "single") break;
  }
}

function contentDisplay(tab) {
  tab.classList.add("selected-tab");
  // The 2nd element is always a <p> with the tab's title.
  contentTitle.textContent = tab.children[1].textContent;
  clearContent(); // Test maybe bugs here.
}

// Show/Hide menu.
function showMenu() {
  sideBtn.classList.toggle("hidden");
}

function changeTab(selectedTab, bool) {
  if (selectedTab === currentTab && !bool) return;
  currentTab.classList.remove("selected-tab");
  currentTab = selectedTab;
  contentDisplay(currentTab);
  if (selectedTab.classList.contains("project")) {
    taskDisplay();
  } else openTaskPrompt.classList.add("hidden");
}

function settingsClicked(project, e) {
  // Click diffrent project settings => close previous settings.
  if (openDialog !== null && openDialog !== project) removeDialog(openDialog);
  // Click the same settings again.
  if (openDialog === project) return;
  openDialog = project;
  const options = document.createElement("div");
  options.classList.add("options-panel");
  const renameProjectPara = document.createElement("p");
  renameProjectPara.textContent = "Rename";
  renameProjectPara.addEventListener("click", () => editProjectName(project));
  const deleteProjectPara = document.createElement("p");
  deleteProjectPara.textContent = "Delete";
  deleteProjectPara.addEventListener("click", () => deleteProject(project));
  options.appendChild(renameProjectPara);
  options.appendChild(deleteProjectPara);
  options.onblur = () => {
    console.log("focusout");
    removeDialog(project);
  };
  project.appendChild(options);
}

function deleteProject(project) {
  removeProject(project.dataset.id);
  // Clear projectTab and reload projects.
  clearProjectTab();
  loadProjects();
  updateSessionStorageProjectList();
  openDialog = null;
  changeTab(todayTasksTab, true);
  project.onclick = null;
}

function clearProjectTab() {
  while (projectsTab.children.length > 3) {
    projectsTab.removeChild(projectsTab.lastChild);
  }
}

function editProjectName(project) {
  removeDialog(project);
  if (openRename !== project && openRename !== null) {
    openRename.classList.remove("hidden");
  }
  openRename = project;
  const projectName = project.children[1].textContent;
  project.classList.add("hidden"); // Remove hidden class in final steps!! -----
  renamePrompt.classList.remove("hidden");
  renameInput.value = projectName;
  renameInput.focus();

  openDialog = null;
}

function removeDialog(el) {
  el.removeChild(el.lastElementChild);
  openDialog = null;
}

function renameProject() {
  // Update data.
  projectRenamer(openRename.children[1].textContent, renameInput.value);
  updateSessionStorageProjectList();
  // Update html content.
  openRename.children[1].textContent = renameInput.value;
  cancelRename();
}

function cancelRename() {
  openRename.classList.remove("hidden");
  renamePrompt.classList.add("hidden");
  openRename = null;
}

function taskDisplay() {
  openTaskPrompt.classList.remove("hidden");
  const project = findProjectById(currentTab.dataset.id);
  taskLoaderProject(project.taskList);
}

function taskLoaderProject(taskList) {
  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    const div = document.createElement("div");
    const top = document.createElement("div");
    const group = document.createElement("div");
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    group.classList.add("group");
    top.classList.add("top");
    const bottom = document.createElement("div");
    bottom.classList.add("bottom");
    const taskNamePara = document.createElement("p");
    taskNamePara.textContent = task.taskName;
    taskNamePara.classList.add("task-name");
    const taskDetailsPara = document.createElement("p");
    taskDetailsPara.classList.add("task-details");
    taskDetailsPara.textContent = task.taskDetails;
    const taskDatePara = document.createElement("p");
    taskDatePara.textContent = task.taskDate || "no due date";
    taskDatePara.classList.add("task-date");
    const img = new Image();
    img.src = task.isImportant ? _important_png__WEBPACK_IMPORTED_MODULE_5__ : _star_png__WEBPACK_IMPORTED_MODULE_4__;
    img.alt = "icon";
    img.setAttribute("class", "star"); // change it to task logo class
    const img2 = new Image();
    img2.src = _settings_png__WEBPACK_IMPORTED_MODULE_2__;
    img2.alt = "settings";
    img2.setAttribute("class", "sets");
    top.appendChild(check);
    top.appendChild(taskNamePara);
    group.appendChild(taskDatePara);
    group.appendChild(img);
    group.appendChild(img2);
    div.classList.add("task");
    top.appendChild(group);
    div.appendChild(top);
    bottom.appendChild(taskDetailsPara);
    div.appendChild(bottom);
    content.appendChild(div);
  }
}

// Open task form.
function clickOpenTaskPrompt() {
  formTask.classList.remove("hidden");
}

function createTask() {
  // NOTE: the task gets created in the last selected project.
  const project = findProjectById(currentTab.dataset.id);
  const task = {
    taskName: taskNameInput.value,
    taskDetails: taskDetailsInput.value,
    taskDate: taskDateInput.value,
    isImportant: false,
    isCompleted: false,
    taskId: currenTaskId++,
  };
  project.taskList.push(task);
  updateLocalTaskId();
  updateSessionStorageProjectList();
  cancelTaskPrompt();
  clearContent(); // Testing needed
  taskDisplay(); // Testing needed.
}

// Hide task form and clear input fields.
function cancelTaskPrompt() {
  formTask.classList.add("hidden");
  taskNameInput.value = "";
  taskDetailsInput.value = "";
  taskDateInput.value = "";
}

function clearContent() {
  while (content.children.length > 3) {
    content.removeChild(content.lastChild);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FB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O0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxjQUFjLHFDQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJDQUFHLEdBQUcsc0NBQVc7QUFDbEQ7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxlQUFlLDBDQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU0Yzc5O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNnZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtZW51IHtcXHJcXG4gIHdpZHRoOiA1cmVtO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMSA+IHNwYW4ge1xcclxcbiAgY29sb3I6ICNmZmNjMDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lID4gKiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzID4gKiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtbG9nbyB7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcclxcbiAgbWFyZ2luOiAxcmVtIDAuN3JlbSAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRvdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzExZjMwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXNtYWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLXBhbmVsIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTFmMzA7XFxyXFxuICBmbGV4OiAxIDEgMzAwcHg7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxyXFxuICB3aWR0aDogNzB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDk0dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzM2M1OTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50ID4gKiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExOGY1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMThmNTU7XFxyXFxufVxcclxcblxcclxcbi5ob21lID4gKjpob3ZlcixcXHJcXG4ucHJvamVjdHMgPiAqOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjlyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICB3aWR0aDogNS43cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBtYXJnaW46IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9tcHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5yZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExOGY1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkLXRhYiB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NGYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgPiBwIHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNldHRpbmdzIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucy1wYW5lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA2cmVtO1xcclxcbiAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiA2cmVtO1xcclxcbiAgdG9wOiAtNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zLXBhbmVsID4gKiB7XFxyXFxuICBtYXJnaW46IDAuMnJlbSAwO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDAuM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucy1wYW5lbCA+ICo6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiAuYnV0dG9ucyB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgPiAqIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wIHtcXHJcXG4gIGhlaWdodDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wID4gLnRhc2stbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogI2ZmY2MwMDtcXHJcXG59XFxyXFxuLmdyb3VwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvdXAgPiAqIHtcXHJcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrIGltZyB7XFxyXFxuICB3aWR0aDogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0Qyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTRjNzk7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA2dmg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2NlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUge1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbmgxID4gc3BhbiB7XFxyXFxuICBjb2xvcjogI2ZmY2MwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgPiAqIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgPiAqIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1sb2dvIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XFxyXFxuICBtYXJnaW46IDFyZW0gMC43cmVtIDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZG90IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTFmMzA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItc21hbGwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtcGFuZWwge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxMWYzMDtcXHJcXG4gIGZsZXg6IDEgMSAzMDBweDtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gIHdpZHRoOiA3MHZ3O1xcclxcbiAgbWluLWhlaWdodDogOTR2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMzYzU5O1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiAqIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMXJlbSAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE4ZjU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExOGY1NTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgPiAqOmhvdmVyLFxcclxcbi5wcm9qZWN0cyA+ICo6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuOXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA1LjdyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIG1hcmdpbjogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21wdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5ncmVlbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE4ZjU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQtdGFiIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg0ZjM1O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCA+IHAge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3Mge1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zLXBhbmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtjeWFuO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDZyZW07XFxyXFxuICB0b3A6IC00cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMtcGFuZWwgPiAqIHtcXHJcXG4gIG1hcmdpbjogMC4ycmVtIDA7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMC4zcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zLXBhbmVsID4gKjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2sge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xcclxcbiAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IC5idXR0b25zIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHdoaXRlO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayA+ICoge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b3Age1xcclxcbiAgaGVpZ2h0OiAzMCU7XFxyXFxufVxcclxcblxcclxcbi50b3AgPiAudGFzay1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjZmZjYzAwO1xcclxcbn1cXHJcXG4uZ3JvdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncm91cCA+ICoge1xcclxcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaW1nIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9zdHlsZS5jc3NcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2luZGV4LmpzXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL21lbnUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2FsbFRhc2tzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL3NyYy90b2RheS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvN2RheXMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltcG9ydGFudC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYWRkLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuICA8aGVhZD5cXHJcXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxyXFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXHJcXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxyXFxuICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIC8+XFxyXFxuICAgIDxcIiArIFwic2NyaXB0IHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGRlZmVyPjxcIiArIFwiL3NjcmlwdD5cXHJcXG4gICAgPHRpdGxlPlRvZG8gTGlzdDwvdGl0bGU+XFxyXFxuICA8L2hlYWQ+XFxyXFxuICA8Ym9keT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICA8aGVhZGVyPlxcclxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcIm1lbnVcXFwiIGlkPVxcXCJtZW51XFxcIiAvPlxcclxcbiAgICAgICAgPGgxPkpVU1QgPHNwYW4+VG9EbyA8L3NwYW4+SVQuPC9oMT5cXHJcXG4gICAgICAgIDxkaXY+PGRpdj48L2Rpdj48L2Rpdj5cXHJcXG4gICAgICA8L2hlYWRlcj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc21hbGxcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2lkZS1wYW5lbFxcXCI+XFxyXFxuICAgICAgICAgIDxoMiBpZD1cXFwiaG9tZS10aXRsZVxcXCI+SG9tZTwvaDI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvbWVcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsbC10YXNrcyBob21lLXRhYiBzZWxlY3RlZC10YWJcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGltZ1xcclxcbiAgICAgICAgICAgICAgICBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhbHQ9XFxcImFsbCB0YXNrc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInNpZGUtbG9nb1xcXCJcXHJcXG4gICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICA8cD5BbGwgVGFza3M8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kYXktdGFza3MgaG9tZS10YWJcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyArIFwiXFxcIiBhbHQ9XFxcInRvZGF5IHRhc2tzXFxcIiBjbGFzcz1cXFwic2lkZS1sb2dvXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgPHA+VG9kYXk8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmV4dC13ZWVrIGhvbWUtdGFiXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCIgYWx0PVxcXCJuZXh0IHdlZWtcXFwiIGNsYXNzPVxcXCJzaWRlLWxvZ29cXFwiIC8+XFxyXFxuICAgICAgICAgICAgICA8cD5OZXh0IFdlZWs8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1wb3J0YW50IGhvbWUtdGFiXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWdcXHJcXG4gICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYWx0PVxcXCJpbXBvcnRhbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzaWRlLWxvZ29cXFwiXFxyXFxuICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgPHA+SW1wb3J0YW50PC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGgyIGlkPVxcXCJwcm9qZWN0cy10aXRsZVxcXCI+UHJvamVjdHM8L2gyPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWRkLXByb2plY3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfN19fXyArIFwiXFxcIiBhbHQ9XFxcImFkZFxcXCIgY2xhc3M9XFxcInNpZGUtbG9nb1xcXCIgaWQ9XFxcImFkZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgIDxwIGlkPVxcXCJhZGQtcHJvamVjdFxcXCI+QWRkIFByb2plY3Q8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1wcm9tcHQgcHJvbXB0IGhpZGRlblxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW5wdXRcXHJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlByb2plY3QgTmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgbmFtZT1cXFwicHJvamVjdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcInByb2plY3RcXFwiXFxyXFxuICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cXFwiMjBcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcclxcbiAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJncmVlbi1idG4gZ3JlZW5cXFwiPkFkZDwvYnV0dG9uXFxyXFxuICAgICAgICAgICAgICAgID48YnV0dG9uIGNsYXNzPVxcXCJyZWQtYnRuIHJlZFxcXCI+Q2FuY2VsPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZW5hbWUtcHJvbXB0IHByb21wdCBoaWRkZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGlucHV0XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJQcm9qZWN0IE5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcInJlbmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcInJlbmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVxcXCIyMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiXFxyXFxuICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInJlbmFtZS1idG4gZ3JlZW5cXFwiPlJlbmFtZTwvYnV0dG9uXFxyXFxuICAgICAgICAgICAgICAgID48YnV0dG9uIGNsYXNzPVxcXCJjYW5jZWwtYnRuIHJlZFxcXCI+Q2FuY2VsPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHAgaWQ9XFxcImNvbnRlbnQtdGl0bGVcXFwiPjwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFkZC10YXNrIGhpZGRlblxcXCI+XFxyXFxuICAgICAgICAgICAgPGltZ1xcclxcbiAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiYWRkLXRhc2tcXFwiXFxyXFxuICAgICAgICAgICAgICBpZD1cXFwiYWRkLXRhc2tcXFwiXFxyXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2lkZS1sb2dvXFxcIlxcclxcbiAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImFkZC10YXNrLXBhcmFcXFwiPkFkZCBUYXNrPC9wPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGZvcm0gY2xhc3M9XFxcImhpZGRlblxcXCI+XFxyXFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcInRhc2stdGl0bGVcXFwiPlRpdGxlOjwvcD5cXHJcXG4gICAgICAgICAgICA8aW5wdXRcXHJcXG4gICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiV2hhdCB0byBkbz9cXFwiXFxyXFxuICAgICAgICAgICAgICBtYXhsZW5ndGg9XFxcIjMwXFxcIlxcclxcbiAgICAgICAgICAgICAgaWQ9XFxcInRhc2stbmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgIHJlcXVpcmVkXFxyXFxuICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGFzay10aXRsZVxcXCI+RGV0YWlscyAob3B0aW9uYWwpOjwvcD5cXHJcXG4gICAgICAgICAgICA8aW5wdXRcXHJcXG4gICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU29tZSBkYXRhaWxzIGFib3V0IHRoZSB0YXNrXFxcIlxcclxcbiAgICAgICAgICAgICAgbWF4bGVuZ3RoPVxcXCIzMFxcXCJcXHJcXG4gICAgICAgICAgICAgIGlkPVxcXCJ0YXNrLWRldGFpbHNcXFwiXFxyXFxuICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidGFzay10aXRsZVxcXCI+RGF0ZTo8L3A+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIG1heGxlbmd0aD1cXFwiMzBcXFwiIGlkPVxcXCJ0YXNrLWRhdGVcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJncmVlblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwidGFzay1hZGQtYnRuXFxcIj5BZGQ8L2J1dHRvblxcclxcbiAgICAgICAgICAgICAgPjxidXR0b24gY2xhc3M9XFxcInJlZFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwidGFzay1jYW5jZWwtYnRuXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgQ2FuY2VsXFxyXFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9mb3JtPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9ib2R5PlxcclxcbjwvaHRtbD5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2luZGV4Lmh0bWxcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzLnBuZ1wiO1xyXG5pbXBvcnQgRG90IGZyb20gXCIuL2RvdC5wbmdcIjtcclxuaW1wb3J0IFVuaW1wb3J0YW50IGZyb20gXCIuL3N0YXIucG5nXCI7XHJcbmltcG9ydCBGYXYgZnJvbSBcIi4vaW1wb3J0YW50LnBuZ1wiO1xyXG5cclxuU3RvcmFnZS5wcm90b3R5cGUuc2V0T2JqZWN0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG59O1xyXG5cclxuU3RvcmFnZS5wcm90b3R5cGUuZ2V0T2JqZWN0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRJdGVtKGtleSk7XHJcbiAgcmV0dXJuIHZhbHVlICYmIEpTT04ucGFyc2UodmFsdWUpO1xyXG59O1xyXG5cclxuLy8gU2V0IHZhbHVlIHRvIDAgb3Igc2Vzc2lvblN0b3JhZ2Ugc2F2ZWQsIGlmIGl0IGV4aXN0cy5cclxubGV0IGN1cnJlbnRJZCA9IHNlc3Npb25TdG9yYWdlLmdldE9iamVjdChcImN1cnJlbnRJZFwiKSB8fCAwO1xyXG4vLyBTZXQgdmFsdWUgdG8gZW1wdHkgYXJyYXkgb3Igc2Vzc2lvblN0b3JhZ2Ugc2F2ZWQsIGlmIGl0IGV4aXN0cy5cclxubGV0IHByb2plY3RzID0gc2Vzc2lvblN0b3JhZ2UuZ2V0T2JqZWN0KFwicHJvamVjdHNMaXN0XCIpIHx8IFtdO1xyXG5cclxubGV0IGN1cnJlblRhc2tJZCA9IHNlc3Npb25TdG9yYWdlLmdldE9iamVjdChcImN1cnJlbnRUYXNrSWRcIikgfHwgMDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNlc3Npb25TdG9yYWdlUHJvamVjdExpc3QoKSB7XHJcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0T2JqZWN0KFwicHJvamVjdHNMaXN0XCIsIHByb2plY3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2Vzc2lvblN0b3JhZ2VJZCgpIHtcclxuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudElkXCIsIGN1cnJlbnRJZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsVGFza0lkKCkge1xyXG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50VGFza0lkXCIsIGN1cnJlblRhc2tJZCk7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaWQpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocHJvamVjdHNbaV0uaWQgPT0gaWQpIHtcclxuICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHByb2plY3RzW2ldLm5hbWUgPT09IHByb2plY3ROYW1lKSByZXR1cm4gcHJvamVjdHNbaV07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvamVjdEJ5SWQocGlkKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHByb2plY3RzW2ldLmlkID09IHBpZCkgcmV0dXJuIHByb2plY3RzW2ldO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcHJvamVjdFJlbmFtZXIgPSAob2xkTmFtZSwgbmV3TmFtZSkgPT4ge1xyXG4gIGZpbmRQcm9qZWN0KG9sZE5hbWUpLm5hbWUgPSBuZXdOYW1lO1xyXG59O1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaWQgPSBjdXJyZW50SWQrKztcclxuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZDtcclxuICB9XHJcblxyXG4gIHNldE5hbWUobmV3TmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFza05hbWUsIGRldGFpbHMsIGRhdGUpIHtcclxuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrTmFtZSwgZGV0YWlscywgZGF0ZSk7XHJcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfVxyXG5cclxuICByZW5hbWVQcm9qZWN0KG5ld05hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUYXNrKHRhc2tJbmRleCkge1xyXG4gICAgdGhpcy50YXNrTGlzdC5zcGxpY2UodGFza0luZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza0xpc3Q7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXRhaWxzLCBkYXRlKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLmltcG9ydGFudCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZWRpdChuYW1lLCBkZXRhaWxzLCBkYXRlKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIGdldERldGFpbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGU7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVJbXBvcnRhbnQoKSB7XHJcbiAgICB0aGlzLmltcG9ydGFudCA9ICF0aGlzLmltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGdldEltcG9ydGFudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBwcm9qZWN0c1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbmNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC10aXRsZVwiKTtcclxuY29uc3Qgc2lkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZS1wYW5lbFwiKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZS10YWJcIik7XHJcbmNvbnN0IGFsbFRhc2tzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtdGFza3NcIik7XHJcbmNvbnN0IHRvZGF5VGFza3NUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LXRhc2tzXCIpO1xyXG5jb25zdCBuZXh0V2Vla1Rhc2tzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXh0LXdlZWtcIik7XHJcbmNvbnN0IGltcG9ydGFudFRhc2tzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbXBvcnRhbnRcIik7XHJcbmNvbnN0IHByb2plY3RQcm9tcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcHJvbXB0XCIpO1xyXG5jb25zdCBwcm9tcHRJbnB1dCA9IHByb2plY3RQcm9tcHQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG5jb25zdCBwcm9tcHRSZWRCdG4gPSBwcm9qZWN0UHJvbXB0LnF1ZXJ5U2VsZWN0b3IoXCIucmVkLWJ0blwiKTtcclxuY29uc3QgcHJvbXB0R3JlZW5CdG4gPSBwcm9qZWN0UHJvbXB0LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZW4tYnRuXCIpO1xyXG5jb25zdCByZW5hbWVQcm9tcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlbmFtZS1wcm9tcHRcIik7XHJcbmNvbnN0IHJlbmFtZUlucHV0ID0gcmVuYW1lUHJvbXB0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuY29uc3QgcmVuYW1lR3JlZW5CdG4gPSByZW5hbWVQcm9tcHQucXVlcnlTZWxlY3RvcihcIi5yZW5hbWUtYnRuXCIpO1xyXG5jb25zdCByZW5hbWVSZWRCdG4gPSByZW5hbWVQcm9tcHQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYnRuXCIpO1xyXG5jb25zdCBvcGVuVGFza1Byb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XHJcbmNvbnN0IGZvcm1UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbmNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKTtcclxuY29uc3QgdGFza0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXRhaWxzXCIpO1xyXG5jb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIik7XHJcbmNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stYWRkLWJ0blwiKTtcclxuY29uc3QgdGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1jYW5jZWwtYnRuXCIpO1xyXG5cclxubGV0IGN1cnJlbnRUYWIgPSBhbGxUYXNrc1RhYjtcclxuY29udGVudERpc3BsYXkoY3VycmVudFRhYik7XHJcbmxldCBvcGVuRGlhbG9nID0gbnVsbDtcclxubGV0IG9wZW5SZW5hbWUgPSBudWxsO1xyXG50YWJzWzBdLm9uY2xpY2sgPSAoKSA9PiBjaGFuZ2VUYWIoYWxsVGFza3NUYWIpO1xyXG50YWJzWzFdLm9uY2xpY2sgPSAoKSA9PiBjaGFuZ2VUYWIodG9kYXlUYXNrc1RhYik7XHJcbnRhYnNbMl0ub25jbGljayA9ICgpID0+IGNoYW5nZVRhYihuZXh0V2Vla1Rhc2tzVGFiKTtcclxudGFic1szXS5vbmNsaWNrID0gKCkgPT4gY2hhbmdlVGFiKGltcG9ydGFudFRhc2tzVGFiKTtcclxuXHJcbmxldCBpbnB1dFByb2plY3Q7IC8vIENoZWNrIGlmIGl0IGlzIG5lZWRlZCBvciBub3QuXHJcbi8vIE1lbnUgc2FuZHdpY2ggYnV0dG9uLlxyXG5tZW51QnRuLm9uY2xpY2sgPSBzaG93TWVudTtcclxuLy8gQ2xpY2sgQWRkIHByb2plY3QsIGFjdGlvbi5cclxuYWRkQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgcHJvamVjdFByb21wdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIHByb21wdElucHV0LmZvY3VzKCk7XHJcbn07XHJcbnByb21wdFJlZEJ0bi5vbmNsaWNrID0gaGlkZVByb2plY3RQcm9tcHQ7XHJcblxyXG5wcm9tcHRHcmVlbkJ0bi5vbmNsaWNrID0gY3JlYXRlUHJvamVjdDtcclxucmVuYW1lR3JlZW5CdG4ub25jbGljayA9IHJlbmFtZVByb2plY3Q7XHJcbnJlbmFtZVJlZEJ0bi5vbmNsaWNrID0gY2FuY2VsUmVuYW1lO1xyXG5vcGVuVGFza1Byb21wdC5vbmNsaWNrID0gY2xpY2tPcGVuVGFza1Byb21wdDtcclxudGFza0FkZEJ0bi5vbmNsaWNrID0gY3JlYXRlVGFzaztcclxudGFza0NhbmNlbEJ0bi5vbmNsaWNrID0gY2FuY2VsVGFza1Byb21wdDtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChvcGVuRGlhbG9nID09PSBudWxsKSByZXR1cm47XHJcbiAgLy8gQ2xpY2sgb3V0c2lkZSBvZiBkaWFsb2cgc2hvdWxkIGNsb3NlIHRoZSBkaWFsb2cuXHJcbiAgaWYgKCFvcGVuRGlhbG9nLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmVtb3ZlRGlhbG9nKG9wZW5EaWFsb2cpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XHJcbiAgYWRkUHJvamVjdChuZXcgUHJvamVjdChwcm9tcHRJbnB1dC52YWx1ZSkpO1xyXG4gIGhpZGVQcm9qZWN0UHJvbXB0KCk7XHJcbiAgdXBkYXRlU2Vzc2lvblN0b3JhZ2VJZCgpO1xyXG4gIHVwZGF0ZVNlc3Npb25TdG9yYWdlUHJvamVjdExpc3QoKTtcclxuICBsb2FkUHJvamVjdHMoXCJzaW5nbGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVQcm9qZWN0UHJvbXB0KCkge1xyXG4gIHByb2plY3RQcm9tcHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBwcm9tcHRJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmxvYWRQcm9qZWN0cygpO1xyXG5cclxuLy8gTG9hZCB0aGUgcHJvamVjdHMgaW50byBodG1sLlxyXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoYXJnKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gSWYgYXJnID09PSAnc2luZ2xlJyBsb2FkIG9ubHkgdGhlIGxhc3QgcHJvamVjdC5cclxuICAgIGlmIChhcmcgPT09IFwic2luZ2xlXCIpIGkgPSBwcm9qZWN0cy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgcHJvaiA9IHByb2plY3RzW2ldO1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5kYXRhc2V0LmlkID0gcHJvai5pZDsgLy8gQnVnIGhlcmUhXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICBjb25zdCBkb3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGRvdC5zcmMgPSBEb3Q7XHJcbiAgICBkb3QuYWx0ID0gXCJkb3RcIjtcclxuICAgIGRvdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGUtbG9nbyBwcm9qZWN0LWRvdFwiKTtcclxuICAgIGRpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGRvdCk7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gcHJvaltcIm5hbWVcIl07XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgc2V0dGluZ3Muc3JjID0gU2V0dGluZ3M7XHJcbiAgICBzZXR0aW5ncy5hbHQgPSBcInNldHRpbmdzXCI7XHJcbiAgICBzZXR0aW5ncy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNldHRpbmdzXCIpO1xyXG4gICAgZGl2Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBzZXR0aW5ncyk7XHJcbiAgICBkaXYubGFzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XHJcbiAgICAgIHNldHRpbmdzQ2xpY2tlZChkaXYsIGUpXHJcbiAgICApO1xyXG4gICAgZGl2Lm9uY2xpY2sgPSAoKSA9PiBjaGFuZ2VUYWIoZGl2KTtcclxuICAgIHByb2plY3RzVGFiLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAvLyBFeGl0IGxvb3AgYWZ0ZXIgMSByZXAsIGlmIGFyZyA9PT0gJ3NpbmdsZSdcclxuICAgIGlmIChhcmcgPT09IFwic2luZ2xlXCIpIGJyZWFrO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udGVudERpc3BsYXkodGFiKSB7XHJcbiAgdGFiLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC10YWJcIik7XHJcbiAgLy8gVGhlIDJuZCBlbGVtZW50IGlzIGFsd2F5cyBhIDxwPiB3aXRoIHRoZSB0YWIncyB0aXRsZS5cclxuICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSB0YWIuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XHJcbiAgY2xlYXJDb250ZW50KCk7IC8vIFRlc3QgbWF5YmUgYnVncyBoZXJlLlxyXG59XHJcblxyXG4vLyBTaG93L0hpZGUgbWVudS5cclxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XHJcbiAgc2lkZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUYWIoc2VsZWN0ZWRUYWIsIGJvb2wpIHtcclxuICBpZiAoc2VsZWN0ZWRUYWIgPT09IGN1cnJlbnRUYWIgJiYgIWJvb2wpIHJldHVybjtcclxuICBjdXJyZW50VGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC10YWJcIik7XHJcbiAgY3VycmVudFRhYiA9IHNlbGVjdGVkVGFiO1xyXG4gIGNvbnRlbnREaXNwbGF5KGN1cnJlbnRUYWIpO1xyXG4gIGlmIChzZWxlY3RlZFRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0XCIpKSB7XHJcbiAgICB0YXNrRGlzcGxheSgpO1xyXG4gIH0gZWxzZSBvcGVuVGFza1Byb21wdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5nc0NsaWNrZWQocHJvamVjdCwgZSkge1xyXG4gIC8vIENsaWNrIGRpZmZyZW50IHByb2plY3Qgc2V0dGluZ3MgPT4gY2xvc2UgcHJldmlvdXMgc2V0dGluZ3MuXHJcbiAgaWYgKG9wZW5EaWFsb2cgIT09IG51bGwgJiYgb3BlbkRpYWxvZyAhPT0gcHJvamVjdCkgcmVtb3ZlRGlhbG9nKG9wZW5EaWFsb2cpO1xyXG4gIC8vIENsaWNrIHRoZSBzYW1lIHNldHRpbmdzIGFnYWluLlxyXG4gIGlmIChvcGVuRGlhbG9nID09PSBwcm9qZWN0KSByZXR1cm47XHJcbiAgb3BlbkRpYWxvZyA9IHByb2plY3Q7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwib3B0aW9ucy1wYW5lbFwiKTtcclxuICBjb25zdCByZW5hbWVQcm9qZWN0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHJlbmFtZVByb2plY3RQYXJhLnRleHRDb250ZW50ID0gXCJSZW5hbWVcIjtcclxuICByZW5hbWVQcm9qZWN0UGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZWRpdFByb2plY3ROYW1lKHByb2plY3QpKTtcclxuICBjb25zdCBkZWxldGVQcm9qZWN0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGRlbGV0ZVByb2plY3RQYXJhLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICBkZWxldGVQcm9qZWN0UGFyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGVsZXRlUHJvamVjdChwcm9qZWN0KSk7XHJcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChyZW5hbWVQcm9qZWN0UGFyYSk7XHJcbiAgb3B0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0UGFyYSk7XHJcbiAgb3B0aW9ucy5vbmJsdXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZvY3Vzb3V0XCIpO1xyXG4gICAgcmVtb3ZlRGlhbG9nKHByb2plY3QpO1xyXG4gIH07XHJcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgcmVtb3ZlUHJvamVjdChwcm9qZWN0LmRhdGFzZXQuaWQpO1xyXG4gIC8vIENsZWFyIHByb2plY3RUYWIgYW5kIHJlbG9hZCBwcm9qZWN0cy5cclxuICBjbGVhclByb2plY3RUYWIoKTtcclxuICBsb2FkUHJvamVjdHMoKTtcclxuICB1cGRhdGVTZXNzaW9uU3RvcmFnZVByb2plY3RMaXN0KCk7XHJcbiAgb3BlbkRpYWxvZyA9IG51bGw7XHJcbiAgY2hhbmdlVGFiKHRvZGF5VGFza3NUYWIsIHRydWUpO1xyXG4gIHByb2plY3Qub25jbGljayA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUHJvamVjdFRhYigpIHtcclxuICB3aGlsZSAocHJvamVjdHNUYWIuY2hpbGRyZW4ubGVuZ3RoID4gMykge1xyXG4gICAgcHJvamVjdHNUYWIucmVtb3ZlQ2hpbGQocHJvamVjdHNUYWIubGFzdENoaWxkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZShwcm9qZWN0KSB7XHJcbiAgcmVtb3ZlRGlhbG9nKHByb2plY3QpO1xyXG4gIGlmIChvcGVuUmVuYW1lICE9PSBwcm9qZWN0ICYmIG9wZW5SZW5hbWUgIT09IG51bGwpIHtcclxuICAgIG9wZW5SZW5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICB9XHJcbiAgb3BlblJlbmFtZSA9IHByb2plY3Q7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTsgLy8gUmVtb3ZlIGhpZGRlbiBjbGFzcyBpbiBmaW5hbCBzdGVwcyEhIC0tLS0tXHJcbiAgcmVuYW1lUHJvbXB0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgcmVuYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0TmFtZTtcclxuICByZW5hbWVJbnB1dC5mb2N1cygpO1xyXG5cclxuICBvcGVuRGlhbG9nID0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGlhbG9nKGVsKSB7XHJcbiAgZWwucmVtb3ZlQ2hpbGQoZWwubGFzdEVsZW1lbnRDaGlsZCk7XHJcbiAgb3BlbkRpYWxvZyA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmFtZVByb2plY3QoKSB7XHJcbiAgLy8gVXBkYXRlIGRhdGEuXHJcbiAgcHJvamVjdFJlbmFtZXIob3BlblJlbmFtZS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCwgcmVuYW1lSW5wdXQudmFsdWUpO1xyXG4gIHVwZGF0ZVNlc3Npb25TdG9yYWdlUHJvamVjdExpc3QoKTtcclxuICAvLyBVcGRhdGUgaHRtbCBjb250ZW50LlxyXG4gIG9wZW5SZW5hbWUuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSByZW5hbWVJbnB1dC52YWx1ZTtcclxuICBjYW5jZWxSZW5hbWUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsUmVuYW1lKCkge1xyXG4gIG9wZW5SZW5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICByZW5hbWVQcm9tcHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBvcGVuUmVuYW1lID0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0Rpc3BsYXkoKSB7XHJcbiAgb3BlblRhc2tQcm9tcHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3RCeUlkKGN1cnJlbnRUYWIuZGF0YXNldC5pZCk7XHJcbiAgdGFza0xvYWRlclByb2plY3QocHJvamVjdC50YXNrTGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tMb2FkZXJQcm9qZWN0KHRhc2tMaXN0KSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgdGFzayA9IHRhc2tMaXN0W2ldO1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoXCJncm91cFwiKTtcclxuICAgIHRvcC5jbGFzc0xpc3QuYWRkKFwidG9wXCIpO1xyXG4gICAgY29uc3QgYm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJvdHRvbS5jbGFzc0xpc3QuYWRkKFwiYm90dG9tXCIpO1xyXG4gICAgY29uc3QgdGFza05hbWVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrTmFtZVBhcmEudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tOYW1lO1xyXG4gICAgdGFza05hbWVQYXJhLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XHJcbiAgICBjb25zdCB0YXNrRGV0YWlsc1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEZXRhaWxzUGFyYS5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXRhaWxzXCIpO1xyXG4gICAgdGFza0RldGFpbHNQYXJhLnRleHRDb250ZW50ID0gdGFzay50YXNrRGV0YWlscztcclxuICAgIGNvbnN0IHRhc2tEYXRlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0RhdGVQYXJhLnRleHRDb250ZW50ID0gdGFzay50YXNrRGF0ZSB8fCBcIm5vIGR1ZSBkYXRlXCI7XHJcbiAgICB0YXNrRGF0ZVBhcmEuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKTtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLnNyYyA9IHRhc2suaXNJbXBvcnRhbnQgPyBGYXYgOiBVbmltcG9ydGFudDtcclxuICAgIGltZy5hbHQgPSBcImljb25cIjtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN0YXJcIik7IC8vIGNoYW5nZSBpdCB0byB0YXNrIGxvZ28gY2xhc3NcclxuICAgIGNvbnN0IGltZzIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZzIuc3JjID0gU2V0dGluZ3M7XHJcbiAgICBpbWcyLmFsdCA9IFwic2V0dGluZ3NcIjtcclxuICAgIGltZzIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZXRzXCIpO1xyXG4gICAgdG9wLmFwcGVuZENoaWxkKGNoZWNrKTtcclxuICAgIHRvcC5hcHBlbmRDaGlsZCh0YXNrTmFtZVBhcmEpO1xyXG4gICAgZ3JvdXAuYXBwZW5kQ2hpbGQodGFza0RhdGVQYXJhKTtcclxuICAgIGdyb3VwLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBncm91cC5hcHBlbmRDaGlsZChpbWcyKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICAgIHRvcC5hcHBlbmRDaGlsZChncm91cCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodG9wKTtcclxuICAgIGJvdHRvbS5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc1BhcmEpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGJvdHRvbSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBPcGVuIHRhc2sgZm9ybS5cclxuZnVuY3Rpb24gY2xpY2tPcGVuVGFza1Byb21wdCgpIHtcclxuICBmb3JtVGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xyXG4gIC8vIE5PVEU6IHRoZSB0YXNrIGdldHMgY3JlYXRlZCBpbiB0aGUgbGFzdCBzZWxlY3RlZCBwcm9qZWN0LlxyXG4gIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdEJ5SWQoY3VycmVudFRhYi5kYXRhc2V0LmlkKTtcclxuICBjb25zdCB0YXNrID0ge1xyXG4gICAgdGFza05hbWU6IHRhc2tOYW1lSW5wdXQudmFsdWUsXHJcbiAgICB0YXNrRGV0YWlsczogdGFza0RldGFpbHNJbnB1dC52YWx1ZSxcclxuICAgIHRhc2tEYXRlOiB0YXNrRGF0ZUlucHV0LnZhbHVlLFxyXG4gICAgaXNJbXBvcnRhbnQ6IGZhbHNlLFxyXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgdGFza0lkOiBjdXJyZW5UYXNrSWQrKyxcclxuICB9O1xyXG4gIHByb2plY3QudGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB1cGRhdGVMb2NhbFRhc2tJZCgpO1xyXG4gIHVwZGF0ZVNlc3Npb25TdG9yYWdlUHJvamVjdExpc3QoKTtcclxuICBjYW5jZWxUYXNrUHJvbXB0KCk7XHJcbiAgY2xlYXJDb250ZW50KCk7IC8vIFRlc3RpbmcgbmVlZGVkXHJcbiAgdGFza0Rpc3BsYXkoKTsgLy8gVGVzdGluZyBuZWVkZWQuXHJcbn1cclxuXHJcbi8vIEhpZGUgdGFzayBmb3JtIGFuZCBjbGVhciBpbnB1dCBmaWVsZHMuXHJcbmZ1bmN0aW9uIGNhbmNlbFRhc2tQcm9tcHQoKSB7XHJcbiAgZm9ybVRhc2suY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICB0YXNrTmFtZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICB0YXNrRGV0YWlsc0lucHV0LnZhbHVlID0gXCJcIjtcclxuICB0YXNrRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xyXG4gIHdoaWxlIChjb250ZW50LmNoaWxkcmVuLmxlbmd0aCA+IDMpIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=