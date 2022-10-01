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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #154c79;\r\n  color: whitesmoke;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 6vh;\r\n}\r\n\r\n#logo {\r\n  width: 3rem;\r\n  justify-items: center;\r\n  background-color: #ffccee;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n#menu {\r\n  width: 5rem;\r\n  height: 5rem;\r\n}\r\n\r\nh1 > span {\r\n  color: #ffcc00;\r\n}\r\n\r\n.home > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.projects > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.side-logo {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  align-self: center;\r\n  background-color: lightgoldenrodyellow;\r\n  margin: 1rem 0.7rem 1rem 2rem;\r\n}\r\n\r\n.project-dot {\r\n  background-color: #711f30;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.container-small {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.side-panel {\r\n  padding-left: 1rem;\r\n  background-color: #711f30;\r\n  flex: 1 1 300px;\r\n  min-width: 300px;\r\n  max-width: 400px;\r\n}\r\n\r\n#add {\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.content {\r\n  min-width: 400px;\r\n  width: 70vw;\r\n  min-height: 94vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1;\r\n  background-color: #033c59;\r\n  padding: 2rem;\r\n}\r\n\r\n.content > * {\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#content-title {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  padding: 1rem 1.7rem;\r\n}\r\n\r\n.title {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected {\r\n  background-color: #118f55;\r\n}\r\n\r\n.home > *:hover,\r\n.projects > *:hover {\r\n  background-color: gray;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  padding: 0.9rem;\r\n  border-radius: 0.5rem;\r\n  width: 5.7rem;\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  margin: 0.6rem;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\ninput {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.prompt {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n}\r\n\r\n.green {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected-tab {\r\n  font-weight: 700;\r\n  font-size: 1.15rem;\r\n  background-color: #184f35;\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.project > p {\r\n  flex-grow: 1;\r\n}\r\n\r\n.settings {\r\n  width: 2rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.options-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 6rem;\r\n  padding: 0.2rem 1rem;\r\n  background-color: #444444;\r\n  position: absolute;\r\n  right: 6rem;\r\n  top: -4rem;\r\n}\r\n\r\n.options-panel > *:hover {\r\n  background-color: black;\r\n  color: goldenrod;\r\n}\r\n\r\n.add-task {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#add-task {\r\n  border-radius: 1rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  background-color: #444444;\r\n  max-width: 700px;\r\n}\r\n\r\nform > .buttons {\r\n  align-self: center;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\nbutton {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;AACA;EACE,yCAAyC;EACzC,yBAAyB;EACzB,iBAAiB;EACjB,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,sCAAsC;EACtC,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,OAAO;EACP,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":["html {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #154c79;\r\n  color: whitesmoke;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 6vh;\r\n}\r\n\r\n#logo {\r\n  width: 3rem;\r\n  justify-items: center;\r\n  background-color: #ffccee;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n#menu {\r\n  width: 5rem;\r\n  height: 5rem;\r\n}\r\n\r\nh1 > span {\r\n  color: #ffcc00;\r\n}\r\n\r\n.home > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.projects > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.side-logo {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  align-self: center;\r\n  background-color: lightgoldenrodyellow;\r\n  margin: 1rem 0.7rem 1rem 2rem;\r\n}\r\n\r\n.project-dot {\r\n  background-color: #711f30;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.container-small {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.side-panel {\r\n  padding-left: 1rem;\r\n  background-color: #711f30;\r\n  flex: 1 1 300px;\r\n  min-width: 300px;\r\n  max-width: 400px;\r\n}\r\n\r\n#add {\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.content {\r\n  min-width: 400px;\r\n  width: 70vw;\r\n  min-height: 94vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1;\r\n  background-color: #033c59;\r\n  padding: 2rem;\r\n}\r\n\r\n.content > * {\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#content-title {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  padding: 1rem 1.7rem;\r\n}\r\n\r\n.title {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected {\r\n  background-color: #118f55;\r\n}\r\n\r\n.home > *:hover,\r\n.projects > *:hover {\r\n  background-color: gray;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  padding: 0.9rem;\r\n  border-radius: 0.5rem;\r\n  width: 5.7rem;\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  margin: 0.6rem;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\ninput {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.prompt {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n}\r\n\r\n.green {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected-tab {\r\n  font-weight: 700;\r\n  font-size: 1.15rem;\r\n  background-color: #184f35;\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.project > p {\r\n  flex-grow: 1;\r\n}\r\n\r\n.settings {\r\n  width: 2rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.options-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 6rem;\r\n  padding: 0.2rem 1rem;\r\n  background-color: #444444;\r\n  position: absolute;\r\n  right: 6rem;\r\n  top: -4rem;\r\n}\r\n\r\n.options-panel > *:hover {\r\n  background-color: black;\r\n  color: goldenrod;\r\n}\r\n\r\n.add-task {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#add-task {\r\n  border-radius: 1rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  background-color: #444444;\r\n  max-width: 700px;\r\n}\r\n\r\nform > .buttons {\r\n  align-self: center;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\nbutton {\r\n  display: inline-flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\r\n    <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" defer><" + "/script>\r\n    <title>Todo List</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"container\">\r\n      <header>\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"menu\" id=\"menu\" />\r\n        <h1>JUST <span>ToDo </span>IT.</h1>\r\n        <div><div></div></div>\r\n      </header>\r\n      <div class=\"container-small\">\r\n        <div class=\"side-panel\">\r\n          <h2 id=\"home-title\">Home</h2>\r\n          <div class=\"home\">\r\n            <div class=\"all-tasks home-tab selected-tab\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n                alt=\"all tasks\"\r\n                class=\"side-logo\"\r\n              />\r\n              <p>All Tasks</p>\r\n            </div>\r\n            <div class=\"today-tasks home-tab\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"today tasks\" class=\"side-logo\" />\r\n              <p>Today</p>\r\n            </div>\r\n            <div class=\"next-week home-tab\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"next week\" class=\"side-logo\" />\r\n              <p>Next Week</p>\r\n            </div>\r\n            <div class=\"important home-tab\">\r\n              <img\r\n                src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n                alt=\"important\"\r\n                class=\"side-logo\"\r\n              />\r\n              <p>Important</p>\r\n            </div>\r\n          </div>\r\n          <h2 id=\"projects-title\">Projects</h2>\r\n          <div class=\"projects\">\r\n            <div class=\"add-project\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"add\" class=\"side-logo\" id=\"add\" />\r\n              <p id=\"add-project\">Add Project</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"title\">\r\n            <p id=\"content-title\">Content Title</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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

module.exports = __webpack_require__.p + "56d5665426b4a542dd7b.js";

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





Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  const value = this.getItem(key);
  return value && JSON.parse(value);
};

// Set value to 0 or localStorage saved, if it exists.
let currentId = localStorage.getObject("currentId") || 0;
// Set value to empty array or localStorage saved, if it exists.
let projects = localStorage.getObject("projectsList") || [];

function updateLocalStorageProjectList() {
  localStorage.setObject("projectsList", projects);
}

function updateLocalStorageId() {
  localStorage.setItem("currentId", currentId);
}

/////////////////////////////////////

function addProject(project) {
  projects.push(project);
}

function removeProject(projectIndex) {
  projects.splice(projectIndex, 1);
}

function findProject(projectName) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].getName() === projectName) return projects[i];
  }
}

const projectRenamer = (oldName, newName) => {
  findProject(oldName).setName(newName);
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
promptRedBtn.onclick = () => {
  projectPrompt.classList.add("hidden");
  promptInput.value = "";
};

promptGreenBtn.onclick = createProject;
renameGreenBtn.onclick = renameProject;
renameRedBtn.onclick = cancelRename;

document.addEventListener("click", (e) => {
  if (openDialog === null) return;
  // Click outside of dialog should close the dialog.
  if (!openDialog.contains(e.target)) removeDialog(openDialog);
});

function createProject() {
  addProject(new Project(promptInput.value));
  projectPrompt.classList.add("hidden");
  promptInput.value = "";
  updateLocalStorageId();
  updateLocalStorageProjectList();
  loadProjects("single");
}
// loadProjects();

// Load the projects into html.
function loadProjects(arg) {
  for (let i = 0; i < projects.length; i++) {
    // If arg === 'single' load only the last project.
    if (arg === "single") i = projects.length - 1;
    const proj = projects[i];
    const div = document.createElement("div");
    div.classList.add("project");
    const dot = new Image();
    dot.src = _dot_png__WEBPACK_IMPORTED_MODULE_3__;
    dot.alt = "dot";
    dot.setAttribute("class", "side-logo project-dot");
    div.insertAdjacentElement("afterbegin", dot);
    const p = document.createElement("p");
    p.textContent = proj.getName();
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
  console.log(projects);
}

function contentDisplay(tab) {
  tab.classList.add("selected-tab");
  // The 2nd element is always a <p> with the tab's title.
  contentTitle.textContent = tab.children[1].textContent;
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
  for (let i = 3; i < projectsTab.children.length; i++) {
    if (projectsTab.children[i].classList.contains("selected-tab")) {
      projectsTab.removeChild(projectsTab.children[i]);
      // There are 3 children that are not projects themselves. The project index inside the array is i - 3.
      // Update data.
      removeProject(i - 3);
      console.log(projects);
    }
  }
  openDialog = null;
  changeTab(todayTasksTab, true);
  project.onclick = null;
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
  // Update html content.
  openRename.children[1].textContent = renameInput.value;
  cancelRename();
}

function cancelRename() {
  openRename.classList.remove("hidden");
  renamePrompt.classList.add("hidden");
  openRename = null;
}

function taskLoader(projectName) {
  const project = findProject(projectname);
  const tasks = project.getTasks();
  for (task of tasks) {
    const div = document.createElement("div");
    const taskNamePara = document.createElement("p");
    const taskDetailsPara = document.createElement("p");
    const taskDatePara = document.createElement("p");
    const favoriteImg = document.createElement("img");
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUNBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQ0FBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUNBQWlDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTRjNzk7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA2dmg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiAzcmVtO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2NlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUge1xcclxcbiAgd2lkdGg6IDVyZW07XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbmgxID4gc3BhbiB7XFxyXFxuICBjb2xvcjogI2ZmY2MwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgPiAqIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgPiAqIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1sb2dvIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XFxyXFxuICBtYXJnaW46IDFyZW0gMC43cmVtIDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZG90IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTFmMzA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItc21hbGwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtcGFuZWwge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxMWYzMDtcXHJcXG4gIGZsZXg6IDEgMSAzMDBweDtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gIHdpZHRoOiA3MHZ3O1xcclxcbiAgbWluLWhlaWdodDogOTR2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMzYzU5O1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiAqIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMXJlbSAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE4ZjU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExOGY1NTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgPiAqOmhvdmVyLFxcclxcbi5wcm9qZWN0cyA+ICo6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuOXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA1LjdyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIG1hcmdpbjogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb21wdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5ncmVlbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE4ZjU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQtdGFiIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg0ZjM1O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCA+IHAge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0dGluZ3Mge1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zLXBhbmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogNnJlbTtcXHJcXG4gIHRvcDogLTRyZW07XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zLXBhbmVsID4gKjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiBnb2xkZW5yb2Q7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXRhc2sge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xcclxcbiAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IC5idXR0b25zIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NGM3OTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDZ2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2VlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudSB7XFxyXFxuICB3aWR0aDogNXJlbTtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEgPiBzcGFuIHtcXHJcXG4gIGNvbG9yOiAjZmZjYzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSA+ICoge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyA+ICoge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWxvZ28ge1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcXHJcXG4gIG1hcmdpbjogMXJlbSAwLjdyZW0gMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kb3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxMWYzMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1zbWFsbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1wYW5lbCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzExZjMwO1xcclxcbiAgZmxleDogMSAxIDMwMHB4O1xcclxcbiAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDcwdnc7XFxyXFxuICBtaW4taGVpZ2h0OiA5NHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzNjNTk7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+ICoge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMThmNTU7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE4ZjU1O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSA+ICo6aG92ZXIsXFxyXFxuLnByb2plY3RzID4gKjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgcGFkZGluZzogMC45cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgd2lkdGg6IDUuN3JlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgbWFyZ2luOiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvbXB0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyZWVuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMThmNTU7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC10YWIge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODRmMzU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0ID4gcCB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5zZXR0aW5ncyB7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMtcGFuZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiA2cmVtO1xcclxcbiAgdG9wOiAtNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMtcGFuZWwgPiAqOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgY29sb3I6IGdvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gLmJ1dHRvbnMge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvc3R5bGUuY3NzXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbmRleC5qc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9tZW51LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9hbGxUYXNrcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvdG9kYXkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vc3JjLzdkYXlzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL3NyYy9pbXBvcnRhbnQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2FkZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgPGhlYWQ+XFxyXFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcclxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxyXFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcclxcbiAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiAvPlxcclxcbiAgICA8XCIgKyBcInNjcmlwdCBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBkZWZlcj48XCIgKyBcIi9zY3JpcHQ+XFxyXFxuICAgIDx0aXRsZT5Ub2RvIExpc3Q8L3RpdGxlPlxcclxcbiAgPC9oZWFkPlxcclxcbiAgPGJvZHk+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgPGhlYWRlcj5cXHJcXG4gICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJtZW51XFxcIiBpZD1cXFwibWVudVxcXCIgLz5cXHJcXG4gICAgICAgIDxoMT5KVVNUIDxzcGFuPlRvRG8gPC9zcGFuPklULjwvaDE+XFxyXFxuICAgICAgICA8ZGl2PjxkaXY+PC9kaXY+PC9kaXY+XFxyXFxuICAgICAgPC9oZWFkZXI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXNtYWxsXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNpZGUtcGFuZWxcXFwiPlxcclxcbiAgICAgICAgICA8aDIgaWQ9XFxcImhvbWUtdGl0bGVcXFwiPkhvbWU8L2gyPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob21lXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGwtdGFza3MgaG9tZS10YWIgc2VsZWN0ZWQtdGFiXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWdcXHJcXG4gICAgICAgICAgICAgICAgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgYWx0PVxcXCJhbGwgdGFza3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJzaWRlLWxvZ29cXFwiXFxyXFxuICAgICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICAgICAgPHA+QWxsIFRhc2tzPC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvZGF5LXRhc2tzIGhvbWUtdGFiXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJ0b2RheSB0YXNrc1xcXCIgY2xhc3M9XFxcInNpZGUtbG9nb1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgIDxwPlRvZGF5PC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5leHQtd2VlayBob21lLXRhYlxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiIGFsdD1cXFwibmV4dCB3ZWVrXFxcIiBjbGFzcz1cXFwic2lkZS1sb2dvXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgPHA+TmV4dCBXZWVrPC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltcG9ydGFudCBob21lLXRhYlxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aW1nXFxyXFxuICAgICAgICAgICAgICAgIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGFsdD1cXFwiaW1wb3J0YW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2lkZS1sb2dvXFxcIlxcclxcbiAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgIDxwPkltcG9ydGFudDwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxoMiBpZD1cXFwicHJvamVjdHMtdGl0bGVcXFwiPlByb2plY3RzPC9oMj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdHNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFkZC1wcm9qZWN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gKyBcIlxcXCIgYWx0PVxcXCJhZGRcXFwiIGNsYXNzPVxcXCJzaWRlLWxvZ29cXFwiIGlkPVxcXCJhZGRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICA8cCBpZD1cXFwiYWRkLXByb2plY3RcXFwiPkFkZCBQcm9qZWN0PC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8cCBpZD1cXFwiY29udGVudC10aXRsZVxcXCI+Q29udGVudCBUaXRsZTwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2JvZHk+XFxyXFxuPC9odG1sPlxcclxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguaHRtbFwiO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MucG5nXCI7XHJcbmltcG9ydCBEb3QgZnJvbSBcIi4vZG90LnBuZ1wiO1xyXG5cclxuU3RvcmFnZS5wcm90b3R5cGUuc2V0T2JqZWN0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG59O1xyXG5cclxuU3RvcmFnZS5wcm90b3R5cGUuZ2V0T2JqZWN0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRJdGVtKGtleSk7XHJcbiAgcmV0dXJuIHZhbHVlICYmIEpTT04ucGFyc2UodmFsdWUpO1xyXG59O1xyXG5cclxuLy8gU2V0IHZhbHVlIHRvIDAgb3IgbG9jYWxTdG9yYWdlIHNhdmVkLCBpZiBpdCBleGlzdHMuXHJcbmxldCBjdXJyZW50SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqZWN0KFwiY3VycmVudElkXCIpIHx8IDA7XHJcbi8vIFNldCB2YWx1ZSB0byBlbXB0eSBhcnJheSBvciBsb2NhbFN0b3JhZ2Ugc2F2ZWQsIGlmIGl0IGV4aXN0cy5cclxubGV0IHByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldE9iamVjdChcInByb2plY3RzTGlzdFwiKSB8fCBbXTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZVByb2plY3RMaXN0KCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRPYmplY3QoXCJwcm9qZWN0c0xpc3RcIiwgcHJvamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2VJZCgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRJZFwiLCBjdXJyZW50SWQpO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RJbmRleCkge1xyXG4gIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChwcm9qZWN0c1tpXS5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKSByZXR1cm4gcHJvamVjdHNbaV07XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0UmVuYW1lciA9IChvbGROYW1lLCBuZXdOYW1lKSA9PiB7XHJcbiAgZmluZFByb2plY3Qob2xkTmFtZSkuc2V0TmFtZShuZXdOYW1lKTtcclxufTtcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmlkID0gY3VycmVudElkKys7XHJcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIGdldElkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgfVxyXG5cclxuICBzZXROYW1lKG5ld05hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2tOYW1lLCBkZXRhaWxzLCBkYXRlKSB7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUsIGRldGFpbHMsIGRhdGUpO1xyXG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH1cclxuXHJcbiAgcmVuYW1lUHJvamVjdChuZXdOYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVGFzayh0YXNrSW5kZXgpIHtcclxuICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgZGV0YWlscywgZGF0ZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgdGhpcy5pbXBvcnRhbnQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGVkaXQobmFtZSwgZGV0YWlscywgZGF0ZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXREZXRhaWxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV0YWlscztcclxuICB9XHJcblxyXG4gIGdldERhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW1wb3J0YW50KCkge1xyXG4gICAgdGhpcy5pbXBvcnRhbnQgPSAhdGhpcy5pbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRJbXBvcnRhbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcclxuY29uc3QgcHJvamVjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xyXG5jb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtdGl0bGVcIik7XHJcbmNvbnN0IHNpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtcGFuZWxcIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvbWUtdGFiXCIpO1xyXG5jb25zdCBhbGxUYXNrc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXRhc2tzXCIpO1xyXG5jb25zdCB0b2RheVRhc2tzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS10YXNrc1wiKTtcclxuY29uc3QgbmV4dFdlZWtUYXNrc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dC13ZWVrXCIpO1xyXG5jb25zdCBpbXBvcnRhbnRUYXNrc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1wb3J0YW50XCIpO1xyXG5jb25zdCBwcm9qZWN0UHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXByb21wdFwiKTtcclxuY29uc3QgcHJvbXB0SW5wdXQgPSBwcm9qZWN0UHJvbXB0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuY29uc3QgcHJvbXB0UmVkQnRuID0gcHJvamVjdFByb21wdC5xdWVyeVNlbGVjdG9yKFwiLnJlZC1idG5cIik7XHJcbmNvbnN0IHByb21wdEdyZWVuQnRuID0gcHJvamVjdFByb21wdC5xdWVyeVNlbGVjdG9yKFwiLmdyZWVuLWJ0blwiKTtcclxuY29uc3QgcmVuYW1lUHJvbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZW5hbWUtcHJvbXB0XCIpO1xyXG5jb25zdCByZW5hbWVJbnB1dCA9IHJlbmFtZVByb21wdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbmNvbnN0IHJlbmFtZUdyZWVuQnRuID0gcmVuYW1lUHJvbXB0LnF1ZXJ5U2VsZWN0b3IoXCIucmVuYW1lLWJ0blwiKTtcclxuY29uc3QgcmVuYW1lUmVkQnRuID0gcmVuYW1lUHJvbXB0LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKTtcclxuXHJcbmxldCBjdXJyZW50VGFiID0gYWxsVGFza3NUYWI7XHJcbmNvbnRlbnREaXNwbGF5KGN1cnJlbnRUYWIpO1xyXG5sZXQgb3BlbkRpYWxvZyA9IG51bGw7XHJcbmxldCBvcGVuUmVuYW1lID0gbnVsbDtcclxudGFic1swXS5vbmNsaWNrID0gKCkgPT4gY2hhbmdlVGFiKGFsbFRhc2tzVGFiKTtcclxudGFic1sxXS5vbmNsaWNrID0gKCkgPT4gY2hhbmdlVGFiKHRvZGF5VGFza3NUYWIpO1xyXG50YWJzWzJdLm9uY2xpY2sgPSAoKSA9PiBjaGFuZ2VUYWIobmV4dFdlZWtUYXNrc1RhYik7XHJcbnRhYnNbM10ub25jbGljayA9ICgpID0+IGNoYW5nZVRhYihpbXBvcnRhbnRUYXNrc1RhYik7XHJcblxyXG5sZXQgaW5wdXRQcm9qZWN0OyAvLyBDaGVjayBpZiBpdCBpcyBuZWVkZWQgb3Igbm90LlxyXG4vLyBNZW51IHNhbmR3aWNoIGJ1dHRvbi5cclxubWVudUJ0bi5vbmNsaWNrID0gc2hvd01lbnU7XHJcbi8vIENsaWNrIEFkZCBwcm9qZWN0LCBhY3Rpb24uXHJcbmFkZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gIHByb2plY3RQcm9tcHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBwcm9tcHRJbnB1dC5mb2N1cygpO1xyXG59O1xyXG5wcm9tcHRSZWRCdG4ub25jbGljayA9ICgpID0+IHtcclxuICBwcm9qZWN0UHJvbXB0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgcHJvbXB0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG59O1xyXG5cclxucHJvbXB0R3JlZW5CdG4ub25jbGljayA9IGNyZWF0ZVByb2plY3Q7XHJcbnJlbmFtZUdyZWVuQnRuLm9uY2xpY2sgPSByZW5hbWVQcm9qZWN0O1xyXG5yZW5hbWVSZWRCdG4ub25jbGljayA9IGNhbmNlbFJlbmFtZTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChvcGVuRGlhbG9nID09PSBudWxsKSByZXR1cm47XHJcbiAgLy8gQ2xpY2sgb3V0c2lkZSBvZiBkaWFsb2cgc2hvdWxkIGNsb3NlIHRoZSBkaWFsb2cuXHJcbiAgaWYgKCFvcGVuRGlhbG9nLmNvbnRhaW5zKGUudGFyZ2V0KSkgcmVtb3ZlRGlhbG9nKG9wZW5EaWFsb2cpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XHJcbiAgYWRkUHJvamVjdChuZXcgUHJvamVjdChwcm9tcHRJbnB1dC52YWx1ZSkpO1xyXG4gIHByb2plY3RQcm9tcHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBwcm9tcHRJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgdXBkYXRlTG9jYWxTdG9yYWdlSWQoKTtcclxuICB1cGRhdGVMb2NhbFN0b3JhZ2VQcm9qZWN0TGlzdCgpO1xyXG4gIGxvYWRQcm9qZWN0cyhcInNpbmdsZVwiKTtcclxufVxyXG4vLyBsb2FkUHJvamVjdHMoKTtcclxuXHJcbi8vIExvYWQgdGhlIHByb2plY3RzIGludG8gaHRtbC5cclxuZnVuY3Rpb24gbG9hZFByb2plY3RzKGFyZykge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIElmIGFyZyA9PT0gJ3NpbmdsZScgbG9hZCBvbmx5IHRoZSBsYXN0IHByb2plY3QuXHJcbiAgICBpZiAoYXJnID09PSBcInNpbmdsZVwiKSBpID0gcHJvamVjdHMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IHByb2ogPSBwcm9qZWN0c1tpXTtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICBjb25zdCBkb3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGRvdC5zcmMgPSBEb3Q7XHJcbiAgICBkb3QuYWx0ID0gXCJkb3RcIjtcclxuICAgIGRvdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGUtbG9nbyBwcm9qZWN0LWRvdFwiKTtcclxuICAgIGRpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGRvdCk7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gcHJvai5nZXROYW1lKCk7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgc2V0dGluZ3Muc3JjID0gU2V0dGluZ3M7XHJcbiAgICBzZXR0aW5ncy5hbHQgPSBcInNldHRpbmdzXCI7XHJcbiAgICBzZXR0aW5ncy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNldHRpbmdzXCIpO1xyXG4gICAgZGl2Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBzZXR0aW5ncyk7XHJcbiAgICBkaXYubGFzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XHJcbiAgICAgIHNldHRpbmdzQ2xpY2tlZChkaXYsIGUpXHJcbiAgICApO1xyXG4gICAgZGl2Lm9uY2xpY2sgPSAoKSA9PiBjaGFuZ2VUYWIoZGl2KTtcclxuICAgIHByb2plY3RzVGFiLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAvLyBFeGl0IGxvb3AgYWZ0ZXIgMSByZXAsIGlmIGFyZyA9PT0gJ3NpbmdsZSdcclxuICAgIGlmIChhcmcgPT09IFwic2luZ2xlXCIpIGJyZWFrO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRlbnREaXNwbGF5KHRhYikge1xyXG4gIHRhYi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtdGFiXCIpO1xyXG4gIC8vIFRoZSAybmQgZWxlbWVudCBpcyBhbHdheXMgYSA8cD4gd2l0aCB0aGUgdGFiJ3MgdGl0bGUuXHJcbiAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gdGFiLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG59XHJcblxyXG4vLyBTaG93L0hpZGUgbWVudS5cclxuZnVuY3Rpb24gc2hvd01lbnUoKSB7XHJcbiAgc2lkZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUYWIoc2VsZWN0ZWRUYWIsIGJvb2wpIHtcclxuICBpZiAoc2VsZWN0ZWRUYWIgPT09IGN1cnJlbnRUYWIgJiYgIWJvb2wpIHJldHVybjtcclxuICBjdXJyZW50VGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC10YWJcIik7XHJcbiAgY3VycmVudFRhYiA9IHNlbGVjdGVkVGFiO1xyXG4gIGNvbnRlbnREaXNwbGF5KGN1cnJlbnRUYWIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5nc0NsaWNrZWQocHJvamVjdCwgZSkge1xyXG4gIC8vIENsaWNrIGRpZmZyZW50IHByb2plY3Qgc2V0dGluZ3MgPT4gY2xvc2UgcHJldmlvdXMgc2V0dGluZ3MuXHJcbiAgaWYgKG9wZW5EaWFsb2cgIT09IG51bGwgJiYgb3BlbkRpYWxvZyAhPT0gcHJvamVjdCkgcmVtb3ZlRGlhbG9nKG9wZW5EaWFsb2cpO1xyXG4gIC8vIENsaWNrIHRoZSBzYW1lIHNldHRpbmdzIGFnYWluLlxyXG4gIGlmIChvcGVuRGlhbG9nID09PSBwcm9qZWN0KSByZXR1cm47XHJcbiAgb3BlbkRpYWxvZyA9IHByb2plY3Q7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbnMtcGFuZWxcIik7XHJcbiAgY29uc3QgcmVuYW1lUHJvamVjdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICByZW5hbWVQcm9qZWN0UGFyYS50ZXh0Q29udGVudCA9IFwiUmVuYW1lXCI7XHJcbiAgcmVuYW1lUHJvamVjdFBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGVkaXRQcm9qZWN0TmFtZShwcm9qZWN0KSk7XHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkZWxldGVQcm9qZWN0UGFyYS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcbiAgZGVsZXRlUHJvamVjdFBhcmEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGRlbGV0ZVByb2plY3QocHJvamVjdCkpO1xyXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQocmVuYW1lUHJvamVjdFBhcmEpO1xyXG4gIG9wdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdFBhcmEpO1xyXG4gIG9wdGlvbnMub25ibHVyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJmb2N1c291dFwiKTtcclxuICAgIHJlbW92ZURpYWxvZyhwcm9qZWN0KTtcclxuICB9O1xyXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xyXG4gIGZvciAobGV0IGkgPSAzOyBpIDwgcHJvamVjdHNUYWIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChwcm9qZWN0c1RhYi5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC10YWJcIikpIHtcclxuICAgICAgcHJvamVjdHNUYWIucmVtb3ZlQ2hpbGQocHJvamVjdHNUYWIuY2hpbGRyZW5baV0pO1xyXG4gICAgICAvLyBUaGVyZSBhcmUgMyBjaGlsZHJlbiB0aGF0IGFyZSBub3QgcHJvamVjdHMgdGhlbXNlbHZlcy4gVGhlIHByb2plY3QgaW5kZXggaW5zaWRlIHRoZSBhcnJheSBpcyBpIC0gMy5cclxuICAgICAgLy8gVXBkYXRlIGRhdGEuXHJcbiAgICAgIHJlbW92ZVByb2plY3QoaSAtIDMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9wZW5EaWFsb2cgPSBudWxsO1xyXG4gIGNoYW5nZVRhYih0b2RheVRhc2tzVGFiLCB0cnVlKTtcclxuICBwcm9qZWN0Lm9uY2xpY2sgPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWUocHJvamVjdCkge1xyXG4gIHJlbW92ZURpYWxvZyhwcm9qZWN0KTtcclxuICBpZiAob3BlblJlbmFtZSAhPT0gcHJvamVjdCAmJiBvcGVuUmVuYW1lICE9PSBudWxsKSB7XHJcbiAgICBvcGVuUmVuYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgfVxyXG4gIG9wZW5SZW5hbWUgPSBwcm9qZWN0O1xyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcclxuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7IC8vIFJlbW92ZSBoaWRkZW4gY2xhc3MgaW4gZmluYWwgc3RlcHMhISAtLS0tLVxyXG4gIHJlbmFtZVByb21wdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIHJlbmFtZUlucHV0LnZhbHVlID0gcHJvamVjdE5hbWU7XHJcbiAgcmVuYW1lSW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgb3BlbkRpYWxvZyA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURpYWxvZyhlbCkge1xyXG4gIGVsLnJlbW92ZUNoaWxkKGVsLmxhc3RFbGVtZW50Q2hpbGQpO1xyXG4gIG9wZW5EaWFsb2cgPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5hbWVQcm9qZWN0KCkge1xyXG4gIC8vIFVwZGF0ZSBkYXRhLlxyXG4gIHByb2plY3RSZW5hbWVyKG9wZW5SZW5hbWUuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQsIHJlbmFtZUlucHV0LnZhbHVlKTtcclxuICAvLyBVcGRhdGUgaHRtbCBjb250ZW50LlxyXG4gIG9wZW5SZW5hbWUuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSByZW5hbWVJbnB1dC52YWx1ZTtcclxuICBjYW5jZWxSZW5hbWUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsUmVuYW1lKCkge1xyXG4gIG9wZW5SZW5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICByZW5hbWVQcm9tcHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBvcGVuUmVuYW1lID0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0xvYWRlcihwcm9qZWN0TmFtZSkge1xyXG4gIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0bmFtZSk7XHJcbiAgY29uc3QgdGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XHJcbiAgZm9yICh0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGFza05hbWVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCB0YXNrRGV0YWlsc1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHRhc2tEYXRlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgZmF2b3JpdGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=