/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#test-img-0001 {\n  animation: spin 3s infinite;\n  margin: 25% 50%; }\n\n@keyframes spin {\n  0% {\n    transform: rotateZ(0deg) scale(1); }\n  50% {\n    transform: rotateZ(180deg) scale(2); }\n  100% {\n    transform: rotateZ(360deg) scale(1); } }\n\n#content {\n  position: relative;\n  min-width: 280px;\n  min-height: 92vh;\n  background-size: cover;\n  background: url(\"https://images.unsplash.com/photo-1554679665-f5537f187268?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80\");\n  padding: 2.5%;\n  margin: 2.5% 2.5% 2.5% 2.5%; }\n\n.btn-drawer {\n  position: relative;\n  text-align: center;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  width: 66.666%;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.027); }\n  .btn-drawer div {\n    background-color: rgba(0, 0, 0, 0.314);\n    border-top-left-radius: 10px;\n    margin: 0px;\n    border-top-right-radius: 10px;\n    color: #5b5b5b;\n    position: relative;\n    padding: 0 0 5px 0;\n    display: inline;\n    border-left: 1px solid rgba(255, 255, 255, 0.127);\n    border-right: 1px solid rgba(255, 255, 255, 0.127); }\n  .btn-drawer .test {\n    color: #fafafa;\n    width: 16.666%;\n    background-color: white;\n    height: 1px;\n    bottom: -5px;\n    border-radius: 10px;\n    position: absolute;\n    left: calc(33% * 1/4 + 10px); }\n  .btn-drawer .test.s1 {\n    animation: slide1 .25s forwards; }\n  .btn-drawer .test.s0 {\n    animation: slide0 .25s forwards; }\n  .btn-drawer .test.s2 {\n    animation: slide2 .25s forwards; }\n\n@keyframes slide1 {\n  0% { }\n  50% {\n    outline: 1px solid rgba(219, 157, 41, 0.682); }\n  100% {\n    left: calc(33% * 5/4 + 0px);\n    outline: 0px solid orange; } }\n\n@keyframes slide0 {\n  0% { }\n  5% { }\n  50% {\n    outline: 1px solid rgba(219, 157, 41, 0.682);\n    background-color: rgba(255, 255, 255, 0);\n    border: 0px; }\n  100% {\n    left: calc(33% * 1/4 + 0px);\n    outline: 0px solid orange;\n    background-color: white; } }\n\n@keyframes slide2 {\n  0% { }\n  50% {\n    outline: 1px solid rgba(219, 157, 41, 0.682); }\n  100% {\n    left: calc(33% * 9/4 + 0px);\n    outline: 0px solid orange; } }\n  .btn-drawer p {\n    padding: 0;\n    margin: 0;\n    background-color: rgba(0, 0, 0, 0); }\n  .btn-drawer .selected {\n    z-index: 120;\n    background-color: rgba(200, 200, 200, 0.662);\n    color: black; }\n    .btn-drawer .selected p {\n      transform: scale(1.1); }\n  .btn-drawer .unselected {\n    z-index: 100; }\n    .btn-drawer .unselected p {\n      transform: translateY(5px); }\n    .btn-drawer .unselected:hover {\n      animation: lighten 1s forwards;\n      cursor: pointer; }\n    .btn-drawer .unselected:hover p {\n      animation: textJump 1s forwards; }\n\n@keyframes lighten {\n  0% { }\n  100% {\n    background-color: rgba(49, 49, 49, 0.662); } }\n\n@keyframes textJump {\n  0% { }\n  100% {\n    transform: translateY(0px);\n    transform: scale(1.1);\n    color: rgba(221, 221, 221, 0.745); } }\n\n#box-content {\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.35);\n  min-height: 90vh;\n  padding: 0;\n  margin: 0;\n  color: white;\n  text-align: center;\n  overflow: hidden; }\n\n.hours {\n  position: absolute;\n  bottom: 10px;\n  padding: 2px;\n  right: 10px;\n  border: 1px solid white;\n  clip-path: polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%); }\n\n.pageOne {\n  background-color: rgba(255, 255, 255, 0.889) !important;\n  overflow: hidden; }\n  .pageOne h1, .pageOne h3 {\n    color: black; }\n  .pageOne hr {\n    margin: 1%; }\n\n.rows-wrapper {\n  display: grid;\n  grid-template-columns: 33.33% 33.33% 33.33%; }\n\n.row {\n  display: inline-block;\n  height: 100%;\n  color: black;\n  text-align: left;\n  position: relative;\n  text-align: center;\n  padding-bottom: 10px; }\n  .row div {\n    display: inline-block;\n    min-width: 100%;\n    text-align: center; }\n  .row .price {\n    text-align: center;\n    display: inline-block;\n    margin-bottom: .5rem;\n    font-weight: 600;\n    color: #7d7d7d; }\n  .row hr {\n    width: 25%;\n    margin: 0% auto;\n    background-color: #333333; }\n  .row h3 {\n    margin: 0;\n    margin-bottom: 2%; }\n  .row p {\n    font-size: .75rem;\n    margin: 1% 0% 0 10%;\n    text-align: left;\n    width: 80%;\n    text-align: center;\n    padding: 0;\n    font-weight: 500; }\n\n.red {\n  color: red; }\n\n#box-content.pageTwo {\n  background-color: rgba(0, 0, 0, 0.91); }\n  #box-content.pageTwo hr {\n    border-radius: 10px;\n    width: 50%;\n    background-color: white; }\n  #box-content.pageTwo img {\n    width: 25%;\n    height: auto;\n    display: inline-block;\n    margin: 2.5%; }\n\nbody, html {\n  min-height: 100%;\n  min-width: 100%;\n  margin: 0;\n  padding: 0;\n  min-height: 600px;\n  user-select: none; }\n\n.hidden {\n  visibility: hidden; }\n\n.fancy {\n  margin-top: 15%;\n  font-size: 3rem; }\n\n.dot {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  margin: 25% auto;\n  background-color: white;\n  border-radius: 100px; }\n\n.d1 {\n  margin-left: 5px;\n  animation: roll1 0.8s infinite; }\n\n.d2 {\n  animation: roll2 0.8s infinite;\n  margin-left: 5px; }\n\n.d0 {\n  animation: roll0 0.8s infinite;\n  margin-left: 5px; }\n\n@keyframes roll1 {\n  0% {\n    transform: translateX(0px) scale(0.75); }\n  50% {\n    transform: translateX(15px) scale(0.75); }\n  100% {\n    transform: translateX(0px) scale(0.75); } }\n\n@keyframes roll2 {\n  0% {\n    transform: translateX(0px) scale(0.5); }\n  50% {\n    transform: translateX(30px) scale(1); }\n  100% {\n    transform: translateX(0px) scale(0.5); } }\n\n@keyframes roll0 {\n  50% {\n    transform: translateX(7.5px) scale(0.5); }\n  100% {\n    transform: translateX(0px) scale(1); } }\n\n@media screen and (min-width: 800px) {\n  #content {\n    min-height: 84vh; }\n  #box-content {\n    min-height: 82vh; }\n  .btn-drawer {\n    width: 50%; } }\n", "",{"version":3,"sources":["webpack://./src/css/styles.scss"],"names":[],"mappings":"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","sourcesContent":["$load-anim-time:.8s;\n\n\n#test-img-0001 {\n    animation: spin 3s infinite;\n    margin: 25% 50%;\n    @keyframes spin {\n        0% {\n            transform: rotateZ(0deg) scale(1);\n        }\n        50% {\n            transform: rotateZ(180deg) scale(2)\n        }\n        100% {\n            transform: rotateZ(360deg) scale(1)\n        }\n    }\n}\n\n#content{\n\n    position: relative;\n    min-width: 280px;\n    min-height:92vh;\n    background-size: cover;\n    background: url(\"https://images.unsplash.com/photo-1554679665-f5537f187268?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80\");\n    padding: 2.5%;\n    margin: 2.5% 2.5% 2.5% 2.5%;\n}\n\n\n.btn-drawer{\n    position: relative;\n    text-align: center;\n    display: grid;\n    grid-template-columns:auto auto auto;\n    width:66.666%;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.027);\n\n\n    div{\n\n        background-color: rgba(0, 0, 0, 0.314);\n        // background-color: rgba(0, 0, 0, 0.214);\n        border-top-left-radius: 10px;\n        margin:0px;\n        border-top-right-radius: 10px;\n        color:rgb(91, 91, 91);\n\n        position: relative;\n        padding:0 0 5px 0;\n        display: inline;\n        border-left: 1px solid rgba(255, 255, 255, .127);\n        border-right: 1px solid rgba(255, 255, 255, .127);\n\n\n        \n\n    }\n\n\n    .test{\n        color:rgb(250, 250, 250);\n        width:16.666%;\n        background-color: rgb(255, 255, 255);\n        height:1px;\n        bottom:-5px;\n        border-radius: 10px;\n        position: absolute;\n        left: calc(33% * 1/4 + 10px);\n\n    }\n\n    .test.s1{\n        animation:  slide1 .25s forwards;\n    }\n    .test.s0{\n        animation:  slide0 .25s forwards;\n    }\n    .test.s2{\n        animation:  slide2 .25s forwards;\n    }\n\n\n\n    @keyframes slide1 {\n        0%{\n            \n\n        }\n        50%{\n            outline: 1px solid rgba(219, 157, 41, 0.682);\n           \n        }\n        100%{\n            left:calc(33% * 5/4 + 0px);\n            outline:0px solid orange;\n        }\n\n        \n    }\n\n    @keyframes slide0 {\n        0%{\n            \n\n        }\n        5%{\n           // background-color: rgba(255, 255, 255,0);\n        }\n        50%{\n            outline: 1px solid rgba(219, 157, 41, 0.682);\n            background-color: rgba(255, 255, 255,0);\n            border:0px;\n           \n        }\n        100%{\n            left:calc(33% * 1/4 + 0px);\n            outline:0px solid orange;\n            background-color: rgba(255, 255, 255,1);\n        }\n\n        \n    }\n    @keyframes slide2 {\n        0%{\n            \n\n        }\n        50%{\n            outline: 1px solid rgba(219, 157, 41, 0.682);\n           \n        }\n        100%{\n            left:calc(33% * 9/4 + 0px);\n            outline:0px solid orange;\n        }\n\n        \n    }\n\n\n\n\n    p{\n        padding:0;\n        margin: 0;\n        background-color: rgba(0, 0, 0, 0);\n       \n    }\n    .selected{\n        z-index:120;\n        background-color:rgba(200, 200, 200, 0.662);\n        color:black;\n    \n        p{\n            transform: scale(1.1);\n        }\n    }\n\n    .unselected{\n        z-index:100;\n        p{\n            transform: translateY(5px);\n        }\n        \n        &:hover{\n            animation: lighten 1s forwards ;\n            cursor: pointer;\n\n        }\n        \n        &:hover p{\n            animation: textJump 1s forwards ;\n\n            // text-decoration: underline white;\n\n        }\n       \n        \n       \n    }\n\n    @keyframes lighten {\n\n        0%{\n\n        }\n\n        100%{\n            background-color: rgba(49, 49, 49, 0.662);\n        }\n        \n    }\n\n    @keyframes textJump {\n\n        0%{\n            \n        }\n        100%{\n            transform: translateY(0px);\n            transform: scale(1.1);\n            color: rgba(221, 221, 221, 0.745);\n        }\n        \n    }\n\n    \n}\n\n#box-content{\n    position:relative;\n    background-color:rgba(0, 0, 0,.35);\n    min-height:90vh;\n    \n    padding:0;\n    margin: 0;\n    color:white;\n    text-align:center;\n    overflow: hidden;\n}\n\n\n.hours{\n    position: absolute;\n    bottom:10px;\n    padding: 2px;\n    right:10px;\n    border: 1px solid white;\n    clip-path: polygon(\n    0 10%,\n    10% 0,\n    90% 0,\n    100% 10%,\n    100% 90%,\n    90% 100%,\n    10% 100%,\n    0% 90%,\n    0% 10%\n  )\n}\n\n.pageOne{\n    background-color:rgba(255, 255, 255, 0.889) !important;\n    overflow: hidden;\n    h1,h3{\n        color:black;\n    }\n    hr{\n        margin:1%;\n    }\n}\n\n.rows-wrapper{\n    display: grid;\n    grid-template-columns: 33.33% 33.33% 33.33%;\n}\n\n    .row{\n        display: inline-block;\n        height:100%;\n        color:black;\n        text-align: left;\n        position: relative;\n        text-align:  center;\n        padding-bottom: 10px;\n        div{\n            display: inline-block;\n            min-width:100%;\n            text-align: center;\n        }\n        .price{\n            text-align: center;\n            display: inline-block;\n            margin-bottom: .5rem;\n            font-weight: 600;\n            color: rgb(125, 125, 125);\n        }\n        hr{\n            width:25%;\n            margin: 0% auto;\n            background-color: rgb(51, 51, 51);\n \n        }\n        h3{\n            margin:0;\n            margin-bottom:2%;\n        }\n        p{\n            font-size: .75rem;\n            margin:1% 0% 0 10%;\n            text-align: left;\n            width:80%;\n            text-align: center;\n            padding:0;\n            font-weight: 500;\n        }\n        \n\n    }\n\n\n.red{\n    color:red;\n}\n\n\n#box-content{\n&.pageTwo{\n    background-color: rgba(0, 0, 0, 0.91);\n    hr{\n        border-radius: 10px;\n        width:50%;\n        background-color: white;\n    }\n    img{\n        width:25%;\n        height:auto;\n        display: inline-block;\n        margin:2.5%;\n\n    }\n}\n\n}\n\n\nbody,html{\n    min-height:100%;\n    min-width:100%;\n    margin:0;\n    padding:0;\n    min-height:600px;\n    user-select:none;\n}\n\n.hidden{\n    visibility: hidden;\n}\n\n\n\n\n.fancy{\n\n    margin-top:15%;\n    font-size: 3rem;\n    \n\n}\n\n.dot{\n    display: inline-block;\n    width:25px;\n    height:25px;\n    margin: 25% auto;\n    background-color: white;\n    border-radius: 100px;\n    \n}\n.d1{\n    margin-left:5px;\n    \nanimation: roll1 $load-anim-time infinite;\n}\n.d2{\n   animation: roll2 $load-anim-time infinite;\n   margin-left:5px;\n    }\n    .d0{\n        animation: roll0 $load-anim-time infinite;\n        margin-left:5px;\n        }\n\n@keyframes roll1 {\n    0%{\n        transform: translateX(0px) scale(.75);\n    }\n    50%{\n        transform: translateX(15px) scale(.75);\n    }\n    100%{\n        transform: translateX(0px) scale(.75);\n        \n    }\n    \n}\n@keyframes roll2 {\n    0%{\n        transform: translateX(0px) scale(.5);\n    }\n    50%{\n        transform: translateX(30px) scale(1);\n    }\n    100%{\n        transform: translateX(0px) scale(.5);\n    }\n    \n}\n@keyframes roll0 {\n    50%{\n        transform: translateX(7.5px) scale(.50);\n    }\n    100%{\n        transform: translateX(0px) scale(1);\n    }\n    \n}\n\n\n@media screen and(min-width:800px) {\n\n    #content{\n        min-height: 84vh;\n    }\n    #box-content{\n        min-height: 82vh;\n    }\n    .btn-drawer{\n        width:50%;\n    }\n    \n    \n}\n\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
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

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/first_page.ts":
/*!***************************!*\
  !*** ./src/first_page.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageOne)
/* harmony export */ });
function pageOne() {
    var entree = /** @class */ (function () {
        function entree(name, price, description) {
            this.name = name;
            this.price = price;
            this.description = description.substr(0, 120);
        }
        entree.prototype.getName = function () { return this.name; };
        entree.prototype.getPrice = function () { return this.price; };
        entree.prototype.getDescr = function () { return this.description; };
        return entree;
    }());
    var entrees = /** @class */ (function () {
        function entrees(name, entrees) {
            if (entrees === void 0) { entrees = []; }
            this.name = name;
            this.entrees = entrees;
        }
        entrees.prototype.addEntree = function (entree) {
            this.entrees.push(entree);
        };
        entrees.prototype.newEntree = function (name, price, description) {
            this.entrees.push(new entree(name, price, description));
        };
        return entrees;
    }());
    var pastas_data = [
        new entree("Chicken Parmesian", 18, "Tender chicken with a brilliantly coated parmesian crust"),
        new entree("Chicken Alfredo", 19, "Tender chunks of chicken with smoky pieces of sausage in a rich and delicious homemade Cajun-flavored Alfredo sauce"),
        new entree("Seafood Pasta", 23, "Creamy,rich pasta featuring shrimp, prawns and salmon"),
        new entree("Classic Spaghetti & Meatballs", 18, "Five meatballs on spaghetti, crushed tomato marinara and parmesan")
    ];
    var apps_data = [
        new entree("Stuffed Mushroom", 12, "Hand-breaded crispy fried mushrooms oozing with garlic cream cheese"),
        new entree("Bruschetta", 14, "The flavor combination with the tomatoes and cream cheese is perfection"),
        new entree("Calamari", 18, "Patagonian Calamari Served with a choice of lemon butter, garlic butter"),
        new entree("Fried Zuchini", 13, "Delicious,crunchy, dip-able fried zuchini")
    ];
    var soups_data = [
        new entree("Minestrone", 11, "a hearty Italian vegetable soup made with tomato-y broth and pasta"),
        new entree("Italian Halibut", 9.50, "vegetable broth soup seasoned with traditional Italian herb"),
        new entree("Chicken Gnocchi", 10, "creamy soup that tastes like heaven is filled with celery, carrots, chicken and gnocchis"),
        new entree("Basil Tomatoe Soup", 10, "fresh basil and tomatoe soup")
    ];
    var salads_data = [
        new entree("Insalata di rinforzo", 12, "a traditional Italian salad originating from Naples. It consists of a mix of pickled and fresh vegetables"),
        new entree("Insalata di riso", 13, "Italian salad filled with healthy ingredients such as rice, tomatoes, tuna, peas, bell peppers, mushrooms, mozzarella, and pine nuts"),
        new entree("Panzanella", 12, "moistened bread, with the addition of tomatoes, onions, or basil, and a dressing of vinegar and olive oil"),
        new entree("Caprese", 14, "The perfect combination of ripe, sun-kissed tomatoes, creamy mozzarella and fresh basil")
    ];
    var entrees_data = [
        new entree("Italian Fiesta Pizza", 20, "an Italian fiesta pizza, cheese, tomatoe"),
        new entree("Italian Roast Beef", 21, "boneless beef bottom roast encrusted with italian seasoning and roasted to perfection"),
        new entree("Pork Chops Italiano", 24, "Flavorful, tender pork chops with Italian pizzazz"),
        new entree("Pollo Scaloppine", 21, "tilipia,capers and mushrooms in a reduced red wine "),
        new entree("Mushroom Risotto", 21, "Delicious mushroom risotto made with vegetable broth, cream "),
        new entree("Prune and Olive Chicken", 22, "A taste of the Mediterranean in one delicious baked chicken dish "),
    ];
    //creation of all elements
    var content_box = document.querySelector("#box-content");
    var title = document.createElement("h1");
    var hr = document.createElement("hr");
    var row1 = document.createElement("div");
    var pastasTitle = document.createElement("h3");
    var hrr1 = document.createElement("hr");
    var appetizerTitle = document.createElement("h3");
    var hrr2 = document.createElement("hr");
    var row2 = document.createElement("div");
    var soupTitle = document.createElement("h3");
    var hrr3 = document.createElement("hr");
    var saladTitle = document.createElement("h3");
    var hrr4 = document.createElement("hr");
    var entreesTitle = document.createElement("h3");
    var hrr5 = document.createElement("hr");
    var row3 = document.createElement("div");
    var rows_wrapper = document.createElement("div");
    while (content_box.lastChild) {
        content_box.removeChild(content_box.lastChild);
    }
    content_box.classList.add("pageOne");
    rows_wrapper.classList.add("rows-wrapper");
    row1.classList.add("row");
    row2.classList.add("row");
    row3.classList.add("row");
    row1.id = "row1";
    row2.id = "row2";
    row3.id = "row3";
    title.textContent = "Menu";
    pastasTitle.textContent = "Pastas";
    appetizerTitle.textContent = "Appetizers";
    soupTitle.textContent = "Soups";
    saladTitle.textContent = "Salad";
    entreesTitle.textContent = "Entrees";
    row1.appendChild(appetizerTitle);
    row1.appendChild(hrr1);
    apps_data.forEach(function (data, index) { return setEntrees(row1, data, index); });
    row1.appendChild(pastasTitle);
    row1.appendChild(hrr2);
    pastas_data.forEach(function (data, index) { return setEntrees(row1, data, index); });
    row2.appendChild(soupTitle);
    row2.appendChild(hrr3);
    soups_data.forEach(function (data, index) { return setEntrees(row2, data, index); });
    row2.appendChild(saladTitle);
    row2.appendChild(hrr4);
    salads_data.forEach(function (data, index) { return setEntrees(row2, data, index); });
    row3.appendChild(entreesTitle);
    row3.appendChild(hrr5);
    entrees_data.forEach(function (data, index) { return setEntrees(row3, data, index); });
    content_box.append(title);
    content_box.append(hr);
    rows_wrapper.append(row1);
    rows_wrapper.append(row2);
    rows_wrapper.append(row3);
    content_box.append(rows_wrapper);
    function setEntrees(row, item, index) {
        var entreeDiv = document.createElement("div");
        var nameDiv = document.createElement("div");
        var priceDiv = document.createElement("div");
        var descrDiv = document.createElement("p");
        descrDiv.textContent = item.getDescr();
        nameDiv.textContent = item.getName();
        priceDiv.textContent = "" + item.getPrice().toPrecision(3);
        priceDiv.classList.add("price");
        entreeDiv.appendChild(nameDiv);
        entreeDiv.appendChild(descrDiv);
        entreeDiv.appendChild(priceDiv);
        entreeDiv.id = row.id + "-" + index;
        row.appendChild(entreeDiv);
    }
}


/***/ }),

/***/ "./src/second_page.ts":
/*!****************************!*\
  !*** ./src/second_page.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageTwo)
/* harmony export */ });
/* harmony import */ var _assets_images_newFood1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/newFood1.jpg */ "./src/assets/images/newFood1.jpg");
/* harmony import */ var _assets_images_newFood2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/newFood2.jpg */ "./src/assets/images/newFood2.jpg");
/* harmony import */ var _assets_images_newFood3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/newFood3.jpg */ "./src/assets/images/newFood3.jpg");
/* harmony import */ var _assets_images_newFood4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/newFood4.jpg */ "./src/assets/images/newFood4.jpg");
/* harmony import */ var _assets_images_newFood5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/newFood5.jpg */ "./src/assets/images/newFood5.jpg");
/* harmony import */ var _assets_images_newFood6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/newFood6.jpg */ "./src/assets/images/newFood6.jpg");






function pageTwo(loaded) {
    if (loaded === void 0) { loaded = 0; }
    var content_box = document.querySelector("#box-content");
    var wrapper = document.createElement("div");
    content_box.classList.add("pageTwo");
    wrapper.classList.add("photo-wrapper");
    setTitle("Gallery");
    var img1 = new Image();
    img1.src = _assets_images_newFood1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    var img2 = new Image();
    img2.src = _assets_images_newFood2_jpg__WEBPACK_IMPORTED_MODULE_1__;
    var img3 = new Image();
    img3.src = _assets_images_newFood3_jpg__WEBPACK_IMPORTED_MODULE_2__;
    var img4 = new Image();
    img4.src = _assets_images_newFood4_jpg__WEBPACK_IMPORTED_MODULE_3__;
    var img5 = new Image();
    img5.src = _assets_images_newFood5_jpg__WEBPACK_IMPORTED_MODULE_4__;
    var img6 = new Image();
    img6.src = _assets_images_newFood6_jpg__WEBPACK_IMPORTED_MODULE_5__;
    function setTitle(text) {
        var title = document.createElement("h1");
        var hr = document.createElement("hr");
        title.textContent = text;
        content_box.append(title);
        content_box.append(hr);
    }
    var loaderWrapper = /** @class */ (function () {
        function loaderWrapper(val) {
            if (val === void 0) { val = 0; }
            this.imgs = [];
            this.set = function (v) {
                this.value = v;
                if (this.value >= 6) {
                    var sorted_1 = this.imgs.sort(function (a, b) { return a[1] < b[1]; })
                        .map(function (img) { return img[0]; });
                    if (!loaded) {
                        setTimeout(function () {
                            while (content_box.lastChild) {
                                content_box.removeChild(content_box.lastChild);
                            }
                            setTitle("Gallery");
                            sorted_1.forEach(function (ele) { return wrapper.appendChild(ele); });
                            content_box.appendChild(wrapper);
                        }, 800);
                    }
                    else {
                        while (content_box.lastChild) {
                            content_box.removeChild(content_box.lastChild);
                        }
                        setTitle("Gallery");
                        sorted_1.forEach(function (ele) { return wrapper.appendChild(ele); });
                        content_box.appendChild(wrapper);
                    }
                }
            };
            this.get = function () {
                return this.value;
            };
            this.add = function (img, order) {
                this.imgs.push([img, order]);
                this.set(this.value + 1);
            };
            this.value = val;
            for (var i = 0; i < 3; i++) {
                var dot = document.createElement("div");
                dot.classList.add("dot");
                dot.classList.add("d" + i);
                content_box.appendChild(dot);
            }
        }
        return loaderWrapper;
    }());
    var k = new loaderWrapper();
    img1.onload = function () { k.add(img1, 1); };
    img2.onload = function () { k.add(img2, 2); };
    img3.onload = function () { k.add(img3, 3); };
    img4.onload = function () { k.add(img4, 4); };
    img5.onload = function () { k.add(img5, 5); };
    img6.onload = function () { k.add(img6, 6); };
}


/***/ }),

/***/ "./src/assets/images/newFood1.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/newFood1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7ed6561ff533a15f771.jpg";

/***/ }),

/***/ "./src/assets/images/newFood2.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/newFood2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "764f7a509f0982e02ed4.jpg";

/***/ }),

/***/ "./src/assets/images/newFood3.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/newFood3.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6ef37ed28cdd20c3ed2.jpg";

/***/ }),

/***/ "./src/assets/images/newFood4.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/newFood4.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4c866f7ce261d63b86e.jpg";

/***/ }),

/***/ "./src/assets/images/newFood5.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/newFood5.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e3c3444cbb1ee9bc30a.jpg";

/***/ }),

/***/ "./src/assets/images/newFood6.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/newFood6.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bcec2789048c7dfd920.jpg";

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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _first_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first_page */ "./src/first_page.ts");
/* harmony import */ var _second_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second_page */ "./src/second_page.ts");



var func = function () {
    function makeHtmlElement(eleType, eleSource, option) {
        if (option === void 0) { option = {}; }
        var newEle = document.createElement(eleType);
        if (option.id) {
            newEle.id = option.id;
        }
        if (option.classes) {
            option.classes.forEach(function (child) { return newEle.classList.add(child); });
        }
        if (option.text) {
            newEle.innerText = option.text;
        }
        if (option.click) {
            newEle.onclick = function () { return option.click(); };
        }
        if (option.hover) {
            newEle.onmouseover = function () { return option.hover(); };
        }
        if (option.children) {
            option.children.forEach(function (child) { return makeHtmlElement(child[0], newEle, child[1]); });
        }
        eleSource.appendChild(newEle);
        return newEle;
    }
    var incr = 0;
    var _curPage = 0;
    var content = document.createElement("div");
    var box_content = document.createElement("div");
    var button_drawer = document.createElement("div");
    var menuBtn = document.createElement("div");
    var menuBtnHr = document.createElement("hr");
    var menuBtnText = document.createElement("p");
    var homeBtn = document.createElement("div");
    var homeBtnText = document.createElement("p");
    var galleryBtn = document.createElement("div");
    var galleryBtnText = document.createElement("p");
    homeBtn.classList.add("selected");
    menuBtn.classList.add("unselected");
    galleryBtn.classList.add("unselected");
    button_drawer.classList.add("btn-drawer");
    menuBtnHr.classList.add("test");
    content.id = "content";
    box_content.id = "box-content";
    menuBtnText.textContent = "Menu";
    galleryBtnText.textContent = "Gallery";
    homeBtnText.textContent = "Home";
    menuBtn.onclick = function () { return toPage(1); };
    homeBtn.onclick = function () { return toPage(0); };
    galleryBtn.onclick = function () { return toPage(2); };
    menuBtn.appendChild(menuBtnText);
    homeBtn.appendChild(homeBtnText);
    galleryBtn.appendChild(galleryBtnText);
    button_drawer.append(homeBtn);
    button_drawer.append(menuBtn);
    button_drawer.append(galleryBtn);
    button_drawer.append(menuBtnHr);
    content.appendChild(button_drawer);
    home();
    menuBtnHr.style.left = "calc(33% * " + (0 * 4 + 1) + "/4 + " + 0 + "px)";
    function home() {
        var box_content_title = document.createElement("h1");
        var box_content_phrase = document.createElement("h3");
        var hours = document.createElement("div");
        var weeekdays = document.createElement("h3");
        var weeekends = document.createElement("h3");
        box_content_phrase.classList.add("fancy");
        hours.classList.add("hours");
        weeekdays.textContent = "12:00pm - 11:00pm Mon-Fri";
        weeekends.textContent = "9:00am - 10:00pm Sat-Sun";
        box_content_title.textContent = "";
        box_content_phrase.textContent = "ORTAGGIO PASERNI";
        hours.appendChild(weeekdays);
        hours.appendChild(weeekends);
        box_content.appendChild(box_content_title);
        box_content.appendChild(box_content_phrase);
        box_content.appendChild(hours);
        content.appendChild(box_content);
        document.body.appendChild(content);
    }
    function removeBoxContentClasses() {
        box_content.classList.remove("pageOne");
        box_content.classList.remove("pageTwo");
    }
    function moveMenuBtnSlider(nextPage) {
        menuBtnHr.style.left = "calc(33% * " + (_curPage * 4 + 1) + "/4 + " + _curPage * 20 + "px)";
        menuBtnHr.classList.remove("s0");
        menuBtnHr.classList.remove("s1");
        menuBtnHr.classList.remove("s2");
        menuBtnHr.classList.add("s" + nextPage);
    }
    function unSelectAllTabs() {
        menuBtn.classList.remove("selected");
        homeBtn.classList.remove("selected");
        galleryBtn.classList.remove("selected");
        menuBtn.classList.add("unselected");
        homeBtn.classList.add("unselected");
        galleryBtn.classList.add("unselected");
    }
    function showSelectedTab(nextPage) {
        unSelectAllTabs();
        switch (nextPage) {
            case 0:
                homeBtn.classList.add("selected");
                homeBtn.classList.remove("unselected");
                return;
            case 1:
                menuBtn.classList.add("selected");
                menuBtn.classList.remove("unselected");
                return;
            case 2:
                galleryBtn.classList.add("selected");
                galleryBtn.classList.remove("unselected");
                return;
        }
    }
    function toPage(page) {
        if (page === _curPage) {
            return;
        }
        removeBoxContentClasses();
        removeContent();
        showSelectedTab(page);
        moveMenuBtnSlider(page);
        _curPage = page;
        if (page === 1) {
            (0,_first_page__WEBPACK_IMPORTED_MODULE_1__.default)();
        }
        if (page === 0) {
            home();
        }
        if (page === 2) {
            (0,_second_page__WEBPACK_IMPORTED_MODULE_2__.default)(incr++);
        }
    }
    function removeContent() {
        var box_content = document.querySelector("#box-content");
        while (box_content.lastChild) {
            box_content.removeChild(box_content.lastChild);
        }
    }
    function toPage0() {
        removeContent();
        showSelectedTab(0);
        moveMenuBtnSlider(0);
        _curPage = 0;
        home();
    }
};
func();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL1Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzcz83YjJmIiwid2VicGFjazovL1Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9maXJzdF9wYWdlLnRzIiwid2VicGFjazovL1Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zZWNvbmRfcGFnZS50cyIsIndlYnBhY2s6Ly9SZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMERBQTBELGdDQUFnQyxvQkFBb0IsRUFBRSxxQkFBcUIsUUFBUSx3Q0FBd0MsRUFBRSxTQUFTLDBDQUEwQyxFQUFFLFVBQVUsMENBQTBDLEVBQUUsRUFBRSxjQUFjLHVCQUF1QixxQkFBcUIscUJBQXFCLDJCQUEyQixvTEFBb0wsa0JBQWtCLGdDQUFnQyxFQUFFLGlCQUFpQix1QkFBdUIsdUJBQXVCLGtCQUFrQiwwQ0FBMEMsbUJBQW1CLHdEQUF3RCxFQUFFLHFCQUFxQiw2Q0FBNkMsbUNBQW1DLGtCQUFrQixvQ0FBb0MscUJBQXFCLHlCQUF5Qix5QkFBeUIsc0JBQXNCLHdEQUF3RCx5REFBeUQsRUFBRSx1QkFBdUIscUJBQXFCLHFCQUFxQiw4QkFBOEIsa0JBQWtCLG1CQUFtQiwwQkFBMEIseUJBQXlCLG1DQUFtQyxFQUFFLDBCQUEwQixzQ0FBc0MsRUFBRSwwQkFBMEIsc0NBQXNDLEVBQUUsMEJBQTBCLHNDQUFzQyxFQUFFLHVCQUF1QixRQUFRLEVBQUUsU0FBUyxtREFBbUQsRUFBRSxVQUFVLGtDQUFrQyxnQ0FBZ0MsRUFBRSxFQUFFLHVCQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsbURBQW1ELCtDQUErQyxrQkFBa0IsRUFBRSxVQUFV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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQsbUNBQW1DLGtCQUFrQjtBQUNyRCxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjdGVzdC1pbWctMDAwMSB7XFxuICBhbmltYXRpb246IHNwaW4gM3MgaW5maW5pdGU7XFxuICBtYXJnaW46IDI1JSA1MCU7IH1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZykgc2NhbGUoMSk7IH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHNjYWxlKDIpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZykgc2NhbGUoMSk7IH0gfVxcblxcbiNjb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMjgwcHg7XFxuICBtaW4taGVpZ2h0OiA5MnZoO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTQ2Nzk2NjUtZjU1MzdmMTg3MjY4P2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz05MzQmcT04MFxcXCIpO1xcbiAgcGFkZGluZzogMi41JTtcXG4gIG1hcmdpbjogMi41JSAyLjUlIDIuNSUgMi41JTsgfVxcblxcbi5idG4tZHJhd2VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgd2lkdGg6IDY2LjY2NiU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyNyk7IH1cXG4gIC5idG4tZHJhd2VyIGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMTQpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiAjNWI1YjViO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDAgMCA1cHggMDtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMjcpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTI3KTsgfVxcbiAgLmJ0bi1kcmF3ZXIgLnRlc3Qge1xcbiAgICBjb2xvcjogI2ZhZmFmYTtcXG4gICAgd2lkdGg6IDE2LjY2NiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IGNhbGMoMzMlICogMS80ICsgMTBweCk7IH1cXG4gIC5idG4tZHJhd2VyIC50ZXN0LnMxIHtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZTEgLjI1cyBmb3J3YXJkczsgfVxcbiAgLmJ0bi1kcmF3ZXIgLnRlc3QuczAge1xcbiAgICBhbmltYXRpb246IHNsaWRlMCAuMjVzIGZvcndhcmRzOyB9XFxuICAuYnRuLWRyYXdlciAudGVzdC5zMiB7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUyIC4yNXMgZm9yd2FyZHM7IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlMSB7XFxuICAwJSB7IH1cXG4gIDUwJSB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDIxOSwgMTU3LCA0MSwgMC42ODIpOyB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogY2FsYygzMyUgKiA1LzQgKyAwcHgpO1xcbiAgICBvdXRsaW5lOiAwcHggc29saWQgb3JhbmdlOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlMCB7XFxuICAwJSB7IH1cXG4gIDUlIHsgfVxcbiAgNTAlIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjE5LCAxNTcsIDQxLCAwLjY4Mik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgIGJvcmRlcjogMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogY2FsYygzMyUgKiAxLzQgKyAwcHgpO1xcbiAgICBvdXRsaW5lOiAwcHggc29saWQgb3JhbmdlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzbGlkZTIge1xcbiAgMCUgeyB9XFxuICA1MCUge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgyMTksIDE1NywgNDEsIDAuNjgyKTsgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IGNhbGMoMzMlICogOS80ICsgMHB4KTtcXG4gICAgb3V0bGluZTogMHB4IHNvbGlkIG9yYW5nZTsgfSB9XFxuICAuYnRuLWRyYXdlciBwIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApOyB9XFxuICAuYnRuLWRyYXdlciAuc2VsZWN0ZWQge1xcbiAgICB6LWluZGV4OiAxMjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC42NjIpO1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgLmJ0bi1kcmF3ZXIgLnNlbGVjdGVkIHAge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgLmJ0bi1kcmF3ZXIgLnVuc2VsZWN0ZWQge1xcbiAgICB6LWluZGV4OiAxMDA7IH1cXG4gICAgLmJ0bi1kcmF3ZXIgLnVuc2VsZWN0ZWQgcCB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7IH1cXG4gICAgLmJ0bi1kcmF3ZXIgLnVuc2VsZWN0ZWQ6aG92ZXIge1xcbiAgICAgIGFuaW1hdGlvbjogbGlnaHRlbiAxcyBmb3J3YXJkcztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmJ0bi1kcmF3ZXIgLnVuc2VsZWN0ZWQ6aG92ZXIgcCB7XFxuICAgICAgYW5pbWF0aW9uOiB0ZXh0SnVtcCAxcyBmb3J3YXJkczsgfVxcblxcbkBrZXlmcmFtZXMgbGlnaHRlbiB7XFxuICAwJSB7IH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA0OSwgNDksIDAuNjYyKTsgfSB9XFxuXFxuQGtleWZyYW1lcyB0ZXh0SnVtcCB7XFxuICAwJSB7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjc0NSk7IH0gfVxcblxcbiNib3gtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmhvdXJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxMCUsIDEwJSAwLCA5MCUgMCwgMTAwJSAxMCUsIDEwMCUgOTAlLCA5MCUgMTAwJSwgMTAlIDEwMCUsIDAlIDkwJSwgMCUgMTAlKTsgfVxcblxcbi5wYWdlT25lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODkpICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAucGFnZU9uZSBoMSwgLnBhZ2VPbmUgaDMge1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG4gIC5wYWdlT25lIGhyIHtcXG4gICAgbWFyZ2luOiAxJTsgfVxcblxcbi5yb3dzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMuMzMlIDMzLjMzJSAzMy4zMyU7IH1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxcbiAgLnJvdyBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAucm93IC5wcmljZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7IH1cXG4gIC5yb3cgaHIge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBtYXJnaW46IDAlIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7IH1cXG4gIC5yb3cgaDMge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIlOyB9XFxuICAucm93IHAge1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgbWFyZ2luOiAxJSAwJSAwIDEwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuLnJlZCB7XFxuICBjb2xvcjogcmVkOyB9XFxuXFxuI2JveC1jb250ZW50LnBhZ2VUd28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkxKTsgfVxcbiAgI2JveC1jb250ZW50LnBhZ2VUd28gaHIge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgI2JveC1jb250ZW50LnBhZ2VUd28gaW1nIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbjogMi41JTsgfVxcblxcbmJvZHksIGh0bWwge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG5cXG4uZmFuY3kge1xcbiAgbWFyZ2luLXRvcDogMTUlO1xcbiAgZm9udC1zaXplOiAzcmVtOyB9XFxuXFxuLmRvdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogMjUlIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4OyB9XFxuXFxuLmQxIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBhbmltYXRpb246IHJvbGwxIDAuOHMgaW5maW5pdGU7IH1cXG5cXG4uZDIge1xcbiAgYW5pbWF0aW9uOiByb2xsMiAwLjhzIGluZmluaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDsgfVxcblxcbi5kMCB7XFxuICBhbmltYXRpb246IHJvbGwwIDAuOHMgaW5maW5pdGU7XFxuICBtYXJnaW4tbGVmdDogNXB4OyB9XFxuXFxuQGtleWZyYW1lcyByb2xsMSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNzUpOyB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCkgc2NhbGUoMC43NSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjc1KTsgfSB9XFxuXFxuQGtleWZyYW1lcyByb2xsMiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNSk7IH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSBzY2FsZSgxKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgcm9sbDAge1xcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDcuNXB4KSBzY2FsZSgwLjUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMSk7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDg0dmg7IH1cXG4gICNib3gtY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDgydmg7IH1cXG4gIC5idG4tZHJhd2VyIHtcXG4gICAgd2lkdGg6IDUwJTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNJLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7O0FBQ2Y7RUFDSTtJQUNJLGlDQUFpQyxFQUFBO0VBRXJDO0lBQ0ksbUNBQW1DLEVBQUE7RUFFdkM7SUFDSSxtQ0FBbUMsRUFBQSxFQUFBOztBQUsvQztFQUVJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixzQkFBc0I7RUFDdEIsNktBQTZLO0VBQzdLLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQ0FBb0M7RUFDcEMsY0FBYTtFQUNiLG1EQUFtRCxFQUFBO0VBTnZEO0lBV1Esc0NBQXNDO0lBRXRDLDRCQUE0QjtJQUM1QixXQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGNBQXFCO0lBRXJCLGtCQUFrQjtJQUNsQixrQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlEQUFnRDtJQUNoRCxrREFBaUQsRUFBQTtFQXRCekQ7SUErQlEsY0FBd0I7SUFDeEIsY0FBYTtJQUNiLHVCQUFvQztJQUNwQyxXQUFVO0lBQ1YsWUFBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNEJBQTRCLEVBQUE7RUF0Q3BDO0lBMkNRLCtCQUFnQyxFQUFBO0VBM0N4QztJQThDUSwrQkFBZ0MsRUFBQTtFQTlDeEM7SUFpRFEsK0JBQWdDLEVBQUE7O0FBS3BDO0VBQ0ksS0FBRTtFQUlGO0lBQ0ksNENBQTRD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O0VBRTFDO0lBQ0ksc0NBQXFDLEVBQUEsRUFBQTs7QUFLN0M7RUFDSTtJQUNJLHFDQUFvQyxFQUFBO0VBRXhDO0lBQ0ksb0NBQW9DLEVBQUE7RUFFeEM7SUFDSSxxQ0FBb0MsRUFBQSxFQUFBOztBQUk1QztFQUNJO0lBQ0ksdUNBQXVDLEVBQUE7RUFFM0M7SUFDSSxtQ0FBbUMsRUFBQSxFQUFBOztBQU0zQztFQUVJO0lBQ0ksZ0JBQWdCLEVBQUE7RUFFcEI7SUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtJQUNJLFVBQVMsRUFBQSxFQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRsb2FkLWFuaW0tdGltZTouOHM7XFxuXFxuXFxuI3Rlc3QtaW1nLTAwMDEge1xcbiAgICBhbmltYXRpb246IHNwaW4gM3MgaW5maW5pdGU7XFxuICAgIG1hcmdpbjogMjUlIDUwJTtcXG4gICAgQGtleWZyYW1lcyBzcGluIHtcXG4gICAgICAgIDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZykgc2NhbGUoMSk7XFxuICAgICAgICB9XFxuICAgICAgICA1MCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHNjYWxlKDIpXFxuICAgICAgICB9XFxuICAgICAgICAxMDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKSBzY2FsZSgxKVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbiNjb250ZW50e1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi13aWR0aDogMjgwcHg7XFxuICAgIG1pbi1oZWlnaHQ6OTJ2aDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1NDY3OTY2NS1mNTUzN2YxODcyNjg/aXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTkzNCZxPTgwXFxcIik7XFxuICAgIHBhZGRpbmc6IDIuNSU7XFxuICAgIG1hcmdpbjogMi41JSAyLjUlIDIuNSUgMi41JTtcXG59XFxuXFxuXFxuLmJ0bi1kcmF3ZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBhdXRvIGF1dG87XFxuICAgIHdpZHRoOjY2LjY2NiU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI3KTtcXG5cXG5cXG4gICAgZGl2e1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNCk7XFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjE0KTtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBtYXJnaW46MHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBjb2xvcjpyZ2IoOTEsIDkxLCA5MSk7XFxuXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBwYWRkaW5nOjAgMCA1cHggMDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTI3KTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEyNyk7XFxuXFxuXFxuICAgICAgICBcXG5cXG4gICAgfVxcblxcblxcbiAgICAudGVzdHtcXG4gICAgICAgIGNvbG9yOnJnYigyNTAsIDI1MCwgMjUwKTtcXG4gICAgICAgIHdpZHRoOjE2LjY2NiU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgICAgICBoZWlnaHQ6MXB4O1xcbiAgICAgICAgYm90dG9tOi01cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogY2FsYygzMyUgKiAxLzQgKyAxMHB4KTtcXG5cXG4gICAgfVxcblxcbiAgICAudGVzdC5zMXtcXG4gICAgICAgIGFuaW1hdGlvbjogIHNsaWRlMSAuMjVzIGZvcndhcmRzO1xcbiAgICB9XFxuICAgIC50ZXN0LnMwe1xcbiAgICAgICAgYW5pbWF0aW9uOiAgc2xpZGUwIC4yNXMgZm9yd2FyZHM7XFxuICAgIH1cXG4gICAgLnRlc3QuczJ7XFxuICAgICAgICBhbmltYXRpb246ICBzbGlkZTIgLjI1cyBmb3J3YXJkcztcXG4gICAgfVxcblxcblxcblxcbiAgICBAa2V5ZnJhbWVzIHNsaWRlMSB7XFxuICAgICAgICAwJXtcXG4gICAgICAgICAgICBcXG5cXG4gICAgICAgIH1cXG4gICAgICAgIDUwJXtcXG4gICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgyMTksIDE1NywgNDEsIDAuNjgyKTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBsZWZ0OmNhbGMoMzMlICogNS80ICsgMHB4KTtcXG4gICAgICAgICAgICBvdXRsaW5lOjBweCBzb2xpZCBvcmFuZ2U7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIHNsaWRlMCB7XFxuICAgICAgICAwJXtcXG4gICAgICAgICAgICBcXG5cXG4gICAgICAgIH1cXG4gICAgICAgIDUle1xcbiAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LDApO1xcbiAgICAgICAgfVxcbiAgICAgICAgNTAle1xcbiAgICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDIxOSwgMTU3LCA0MSwgMC42ODIpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwwKTtcXG4gICAgICAgICAgICBib3JkZXI6MHB4O1xcbiAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAxMDAle1xcbiAgICAgICAgICAgIGxlZnQ6Y2FsYygzMyUgKiAxLzQgKyAwcHgpO1xcbiAgICAgICAgICAgIG91dGxpbmU6MHB4IHNvbGlkIG9yYW5nZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsMSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBcXG4gICAgfVxcbiAgICBAa2V5ZnJhbWVzIHNsaWRlMiB7XFxuICAgICAgICAwJXtcXG4gICAgICAgICAgICBcXG5cXG4gICAgICAgIH1cXG4gICAgICAgIDUwJXtcXG4gICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgyMTksIDE1NywgNDEsIDAuNjgyKTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBsZWZ0OmNhbGMoMzMlICogOS80ICsgMHB4KTtcXG4gICAgICAgICAgICBvdXRsaW5lOjBweCBzb2xpZCBvcmFuZ2U7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBcXG4gICAgfVxcblxcblxcblxcblxcbiAgICBwe1xcbiAgICAgICAgcGFkZGluZzowO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgXFxuICAgIH1cXG4gICAgLnNlbGVjdGVke1xcbiAgICAgICAgei1pbmRleDoxMjA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjAwLCAyMDAsIDIwMCwgMC42NjIpO1xcbiAgICAgICAgY29sb3I6YmxhY2s7XFxuICAgIFxcbiAgICAgICAgcHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnVuc2VsZWN0ZWR7XFxuICAgICAgICB6LWluZGV4OjEwMDtcXG4gICAgICAgIHB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBsaWdodGVuIDFzIGZvcndhcmRzIDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICY6aG92ZXIgcHtcXG4gICAgICAgICAgICBhbmltYXRpb246IHRleHRKdW1wIDFzIGZvcndhcmRzIDtcXG5cXG4gICAgICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB3aGl0ZTtcXG5cXG4gICAgICAgIH1cXG4gICAgICAgXFxuICAgICAgICBcXG4gICAgICAgXFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBsaWdodGVuIHtcXG5cXG4gICAgICAgIDAle1xcblxcbiAgICAgICAgfVxcblxcbiAgICAgICAgMTAwJXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA0OSwgNDksIDAuNjYyKTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgdGV4dEp1bXAge1xcblxcbiAgICAgICAgMCV7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAxMDAle1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjc0NSk7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBcXG59XFxuXFxuI2JveC1jb250ZW50e1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsLjM1KTtcXG4gICAgbWluLWhlaWdodDo5MHZoO1xcbiAgICBcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuXFxuLmhvdXJze1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbToxMHB4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHJpZ2h0OjEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDAgMTAlLFxcbiAgICAxMCUgMCxcXG4gICAgOTAlIDAsXFxuICAgIDEwMCUgMTAlLFxcbiAgICAxMDAlIDkwJSxcXG4gICAgOTAlIDEwMCUsXFxuICAgIDEwJSAxMDAlLFxcbiAgICAwJSA5MCUsXFxuICAgIDAlIDEwJVxcbiAgKVxcbn1cXG5cXG4ucGFnZU9uZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg5KSAhaW1wb3J0YW50O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoMSxoM3tcXG4gICAgICAgIGNvbG9yOmJsYWNrO1xcbiAgICB9XFxuICAgIGhye1xcbiAgICAgICAgbWFyZ2luOjElO1xcbiAgICB9XFxufVxcblxcbi5yb3dzLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMuMzMlIDMzLjMzJSAzMy4zMyU7XFxufVxcblxcbiAgICAucm93e1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgICAgICBjb2xvcjpibGFjaztcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0ZXh0LWFsaWduOiAgY2VudGVyO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDoxMDAlO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgIC5wcmljZXtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgY29sb3I6IHJnYigxMjUsIDEyNSwgMTI1KTtcXG4gICAgICAgIH1cXG4gICAgICAgIGhye1xcbiAgICAgICAgICAgIHdpZHRoOjI1JTtcXG4gICAgICAgICAgICBtYXJnaW46IDAlIGF1dG87XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xcbiBcXG4gICAgICAgIH1cXG4gICAgICAgIGgze1xcbiAgICAgICAgICAgIG1hcmdpbjowO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MiU7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjoxJSAwJSAwIDEwJTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIHdpZHRoOjgwJTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzowO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICB9XFxuICAgICAgICBcXG5cXG4gICAgfVxcblxcblxcbi5yZWR7XFxuICAgIGNvbG9yOnJlZDtcXG59XFxuXFxuXFxuI2JveC1jb250ZW50e1xcbiYucGFnZVR3b3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkxKTtcXG4gICAgaHJ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgd2lkdGg6NTAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgaW1ne1xcbiAgICAgICAgd2lkdGg6MjUlO1xcbiAgICAgICAgaGVpZ2h0OmF1dG87XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW46Mi41JTtcXG5cXG4gICAgfVxcbn1cXG5cXG59XFxuXFxuXFxuYm9keSxodG1se1xcbiAgICBtaW4taGVpZ2h0OjEwMCU7XFxuICAgIG1pbi13aWR0aDoxMDAlO1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtaW4taGVpZ2h0OjYwMHB4O1xcbiAgICB1c2VyLXNlbGVjdDpub25lO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcblxcblxcblxcbi5mYW5jeXtcXG5cXG4gICAgbWFyZ2luLXRvcDoxNSU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgXFxuXFxufVxcblxcbi5kb3R7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6MjVweDtcXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIG1hcmdpbjogMjUlIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgXFxufVxcbi5kMXtcXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xcbiAgICBcXG5hbmltYXRpb246IHJvbGwxICRsb2FkLWFuaW0tdGltZSBpbmZpbml0ZTtcXG59XFxuLmQye1xcbiAgIGFuaW1hdGlvbjogcm9sbDIgJGxvYWQtYW5pbS10aW1lIGluZmluaXRlO1xcbiAgIG1hcmdpbi1sZWZ0OjVweDtcXG4gICAgfVxcbiAgICAuZDB7XFxuICAgICAgICBhbmltYXRpb246IHJvbGwwICRsb2FkLWFuaW0tdGltZSBpbmZpbml0ZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcXG4gICAgICAgIH1cXG5cXG5Aa2V5ZnJhbWVzIHJvbGwxIHtcXG4gICAgMCV7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSguNzUpO1xcbiAgICB9XFxuICAgIDUwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KSBzY2FsZSguNzUpO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSguNzUpO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgXFxufVxcbkBrZXlmcmFtZXMgcm9sbDIge1xcbiAgICAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKC41KTtcXG4gICAgfVxcbiAgICA1MCV7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgMTAwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKC41KTtcXG4gICAgfVxcbiAgICBcXG59XFxuQGtleWZyYW1lcyByb2xsMCB7XFxuICAgIDUwJXtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3LjVweCkgc2NhbGUoLjUwKTtcXG4gICAgfVxcbiAgICAxMDAle1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgXFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDo4MDBweCkge1xcblxcbiAgICAjY29udGVudHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDg0dmg7XFxuICAgIH1cXG4gICAgI2JveC1jb250ZW50e1xcbiAgICAgICAgbWluLWhlaWdodDogODJ2aDtcXG4gICAgfVxcbiAgICAuYnRuLWRyYXdlcntcXG4gICAgICAgIHdpZHRoOjUwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VPbmUoKSB7XHJcbiAgICB2YXIgZW50cmVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGVudHJlZShuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24uc3Vic3RyKDAsIDEyMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVudHJlZS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfTtcclxuICAgICAgICBlbnRyZWUucHJvdG90eXBlLmdldFByaWNlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5wcmljZTsgfTtcclxuICAgICAgICBlbnRyZWUucHJvdG90eXBlLmdldERlc2NyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjsgfTtcclxuICAgICAgICByZXR1cm4gZW50cmVlO1xyXG4gICAgfSgpKTtcclxuICAgIHZhciBlbnRyZWVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGVudHJlZXMobmFtZSwgZW50cmVlcykge1xyXG4gICAgICAgICAgICBpZiAoZW50cmVlcyA9PT0gdm9pZCAwKSB7IGVudHJlZXMgPSBbXTsgfVxyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmVudHJlZXMgPSBlbnRyZWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbnRyZWVzLnByb3RvdHlwZS5hZGRFbnRyZWUgPSBmdW5jdGlvbiAoZW50cmVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50cmVlcy5wdXNoKGVudHJlZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlbnRyZWVzLnByb3RvdHlwZS5uZXdFbnRyZWUgPSBmdW5jdGlvbiAobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50cmVlcy5wdXNoKG5ldyBlbnRyZWUobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZW50cmVlcztcclxuICAgIH0oKSk7XHJcbiAgICB2YXIgcGFzdGFzX2RhdGEgPSBbXHJcbiAgICAgICAgbmV3IGVudHJlZShcIkNoaWNrZW4gUGFybWVzaWFuXCIsIDE4LCBcIlRlbmRlciBjaGlja2VuIHdpdGggYSBicmlsbGlhbnRseSBjb2F0ZWQgcGFybWVzaWFuIGNydXN0XCIpLFxyXG4gICAgICAgIG5ldyBlbnRyZWUoXCJDaGlja2VuIEFsZnJlZG9cIiwgMTksIFwiVGVuZGVyIGNodW5rcyBvZiBjaGlja2VuIHdpdGggc21va3kgcGllY2VzIG9mIHNhdXNhZ2UgaW4gYSByaWNoIGFuZCBkZWxpY2lvdXMgaG9tZW1hZGUgQ2FqdW4tZmxhdm9yZWQgQWxmcmVkbyBzYXVjZVwiKSxcclxuICAgICAgICBuZXcgZW50cmVlKFwiU2VhZm9vZCBQYXN0YVwiLCAyMywgXCJDcmVhbXkscmljaCBwYXN0YSBmZWF0dXJpbmcgc2hyaW1wLCBwcmF3bnMgYW5kIHNhbG1vblwiKSxcclxuICAgICAgICBuZXcgZW50cmVlKFwiQ2xhc3NpYyBTcGFnaGV0dGkgJiBNZWF0YmFsbHNcIiwgMTgsIFwiRml2ZSBtZWF0YmFsbHMgb24gc3BhZ2hldHRpLCBjcnVzaGVkIHRvbWF0byBtYXJpbmFyYSBhbmQgcGFybWVzYW5cIilcclxuICAgIF07XHJcbiAgICB2YXIgYXBwc19kYXRhID0gW1xyXG4gICAgICAgIG5ldyBlbnRyZWUoXCJTdHVmZmVkIE11c2hyb29tXCIsIDEyLCBcIkhhbmQtYnJlYWRlZCBjcmlzcHkgZnJpZWQgbXVzaHJvb21zIG9vemluZyB3aXRoIGdhcmxpYyBjcmVhbSBjaGVlc2VcIiksXHJcbiAgICAgICAgbmV3IGVudHJlZShcIkJydXNjaGV0dGFcIiwgMTQsIFwiVGhlIGZsYXZvciBjb21iaW5hdGlvbiB3aXRoIHRoZSB0b21hdG9lcyBhbmQgY3JlYW0gY2hlZXNlIGlzIHBlcmZlY3Rpb25cIiksXHJcbiAgICAgICAgbmV3IGVudHJlZShcIkNhbGFtYXJpXCIsIDE4LCBcIlBhdGFnb25pYW4gQ2FsYW1hcmkgU2VydmVkIHdpdGggYSBjaG9pY2Ugb2YgbGVtb24gYnV0dGVyLCBnYXJsaWMgYnV0dGVyXCIpLFxyXG4gICAgICAgIG5ldyBlbnRyZWUoXCJGcmllZCBadWNoaW5pXCIsIDEzLCBcIkRlbGljaW91cyxjcnVuY2h5LCBkaXAtYWJsZSBmcmllZCB6dWNoaW5pXCIpXHJcbiAgICBdO1xyXG4gICAgdmFyIHNvdXBzX2RhdGEgPSBbXHJcbiAgICAgICAgbmV3IGVudHJlZShcIk1pbmVzdHJvbmVcIiwgMTEsIFwiYSBoZWFydHkgSXRhbGlhbiB2ZWdldGFibGUgc291cCBtYWRlIHdpdGggdG9tYXRvLXkgYnJvdGggYW5kIHBhc3RhXCIpLFxyXG4gICAgICAgIG5ldyBlbnRyZWUoXCJJdGFsaWFuIEhhbGlidXRcIiwgOS41MCwgXCJ2ZWdldGFibGUgYnJvdGggc291cCBzZWFzb25lZCB3aXRoIHRyYWRpdGlvbmFsIEl0YWxpYW4gaGVyYlwiKSxcclxuICAgICAgICBuZXcgZW50cmVlKFwiQ2hpY2tlbiBHbm9jY2hpXCIsIDEwLCBcImNyZWFteSBzb3VwIHRoYXQgdGFzdGVzIGxpa2UgaGVhdmVuIGlzIGZpbGxlZCB3aXRoIGNlbGVyeSwgY2Fycm90cywgY2hpY2tlbiBhbmQgZ25vY2NoaXNcIiksXHJcbiAgICAgICAgbmV3IGVudHJlZShcIkJhc2lsIFRvbWF0b2UgU291cFwiLCAxMCwgXCJmcmVzaCBiYXNpbCBhbmQgdG9tYXRvZSBzb3VwXCIpXHJcbiAgICBdO1xyXG4gICAgdmFyIHNhbGFkc19kYXRhID0gW1xyXG4gICAgICAgIG5ldyBlbnRyZWUoXCJJbnNhbGF0YSBkaSByaW5mb3J6b1wiLCAxMiwgXCJhIHRyYWRpdGlvbmFsIEl0YWxpYW4gc2FsYWQgb3JpZ2luYXRpbmcgZnJvbSBOYXBsZXMuIEl0IGNvbnNpc3RzIG9mIGEgbWl4IG9mIHBpY2tsZWQgYW5kIGZyZXNoIHZlZ2V0YWJsZXNcIiksXHJcbiAgICAgICAgbmV3IGVudHJlZShcIkluc2FsYXRhIGRpIHJpc29cIiwgMTMsIFwiSXRhbGlhbiBzYWxhZCBmaWxsZWQgd2l0aCBoZWFsdGh5IGluZ3JlZGllbnRzIHN1Y2ggYXMgcmljZSwgdG9tYXRvZXMsIHR1bmEsIHBlYXMsIGJlbGwgcGVwcGVycywgbXVzaHJvb21zLCBtb3p6YXJlbGxhLCBhbmQgcGluZSBudXRzXCIpLFxyXG4gICAgICAgIG5ldyBlbnRyZWUoXCJQYW56YW5lbGxhXCIsIDEyLCBcIm1vaXN0ZW5lZCBicmVhZCwgd2l0aCB0aGUgYWRkaXRpb24gb2YgdG9tYXRvZXMsIG9uaW9ucywgb3IgYmFzaWwsIGFuZCBhIGRyZXNzaW5nIG9mIHZpbmVnYXIgYW5kIG9saXZlIG9pbFwiKSxcclxuICAgICAgICBuZXcgZW50cmVlKFwiQ2FwcmVzZVwiLCAxNCwgXCJUaGUgcGVyZmVjdCBjb21iaW5hdGlvbiBvZiByaXBlLCBzdW4ta2lzc2VkIHRvbWF0b2VzLCBjcmVhbXkgbW96emFyZWxsYSBhbmQgZnJlc2ggYmFzaWxcIilcclxuICAgIF07XHJcbiAgICB2YXIgZW50cmVlc19kYXRhID0gW1xyXG4gICAgICAgIG5ldyBlbnRyZWUoXCJJdGFsaWFuIEZpZXN0YSBQaXp6YVwiLCAyMCwgXCJhbiBJdGFsaWFuIGZpZXN0YSBwaXp6YSwgY2hlZXNlLCB0b21hdG9lXCIpLFxyXG4gICAgICAgIG5ldyBlbnRyZWUoXCJJdGFsaWFuIFJvYXN0IEJlZWZcIiwgMjEsIFwiYm9uZWxlc3MgYmVlZiBib3R0b20gcm9hc3QgZW5jcnVzdGVkIHdpdGggaXRhbGlhbiBzZWFzb25pbmcgYW5kIHJvYXN0ZWQgdG8gcGVyZmVjdGlvblwiKSxcclxuICAgICAgICBuZXcgZW50cmVlKFwiUG9yayBDaG9wcyBJdGFsaWFub1wiLCAyNCwgXCJGbGF2b3JmdWwsIHRlbmRlciBwb3JrIGNob3BzIHdpdGggSXRhbGlhbiBwaXp6YXp6XCIpLFxyXG4gICAgICAgIG5ldyBlbnRyZWUoXCJQb2xsbyBTY2Fsb3BwaW5lXCIsIDIxLCBcInRpbGlwaWEsY2FwZXJzIGFuZCBtdXNocm9vbXMgaW4gYSByZWR1Y2VkIHJlZCB3aW5lIFwiKSxcclxuICAgICAgICBuZXcgZW50cmVlKFwiTXVzaHJvb20gUmlzb3R0b1wiLCAyMSwgXCJEZWxpY2lvdXMgbXVzaHJvb20gcmlzb3R0byBtYWRlIHdpdGggdmVnZXRhYmxlIGJyb3RoLCBjcmVhbSBcIiksXHJcbiAgICAgICAgbmV3IGVudHJlZShcIlBydW5lIGFuZCBPbGl2ZSBDaGlja2VuXCIsIDIyLCBcIkEgdGFzdGUgb2YgdGhlIE1lZGl0ZXJyYW5lYW4gaW4gb25lIGRlbGljaW91cyBiYWtlZCBjaGlja2VuIGRpc2ggXCIpLFxyXG4gICAgXTtcclxuICAgIC8vY3JlYXRpb24gb2YgYWxsIGVsZW1lbnRzXHJcbiAgICB2YXIgY29udGVudF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1jb250ZW50XCIpO1xyXG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdmFyIGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgdmFyIHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdmFyIHBhc3Rhc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgdmFyIGhycjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICB2YXIgYXBwZXRpemVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICB2YXIgaHJyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICAgIHZhciByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHZhciBzb3VwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICB2YXIgaHJyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcclxuICAgIHZhciBzYWxhZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgdmFyIGhycjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICB2YXIgZW50cmVlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgdmFyIGhycjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICB2YXIgcm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB2YXIgcm93c193cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdoaWxlIChjb250ZW50X2JveC5sYXN0Q2hpbGQpIHtcclxuICAgICAgICBjb250ZW50X2JveC5yZW1vdmVDaGlsZChjb250ZW50X2JveC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgY29udGVudF9ib3guY2xhc3NMaXN0LmFkZChcInBhZ2VPbmVcIik7XHJcbiAgICByb3dzX3dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInJvd3Mtd3JhcHBlclwiKTtcclxuICAgIHJvdzEuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIHJvdzIuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIHJvdzMuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcclxuICAgIHJvdzEuaWQgPSBcInJvdzFcIjtcclxuICAgIHJvdzIuaWQgPSBcInJvdzJcIjtcclxuICAgIHJvdzMuaWQgPSBcInJvdzNcIjtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBwYXN0YXNUaXRsZS50ZXh0Q29udGVudCA9IFwiUGFzdGFzXCI7XHJcbiAgICBhcHBldGl6ZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiQXBwZXRpemVyc1wiO1xyXG4gICAgc291cFRpdGxlLnRleHRDb250ZW50ID0gXCJTb3Vwc1wiO1xyXG4gICAgc2FsYWRUaXRsZS50ZXh0Q29udGVudCA9IFwiU2FsYWRcIjtcclxuICAgIGVudHJlZXNUaXRsZS50ZXh0Q29udGVudCA9IFwiRW50cmVlc1wiO1xyXG4gICAgcm93MS5hcHBlbmRDaGlsZChhcHBldGl6ZXJUaXRsZSk7XHJcbiAgICByb3cxLmFwcGVuZENoaWxkKGhycjEpO1xyXG4gICAgYXBwc19kYXRhLmZvckVhY2goZnVuY3Rpb24gKGRhdGEsIGluZGV4KSB7IHJldHVybiBzZXRFbnRyZWVzKHJvdzEsIGRhdGEsIGluZGV4KTsgfSk7XHJcbiAgICByb3cxLmFwcGVuZENoaWxkKHBhc3Rhc1RpdGxlKTtcclxuICAgIHJvdzEuYXBwZW5kQ2hpbGQoaHJyMik7XHJcbiAgICBwYXN0YXNfZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhLCBpbmRleCkgeyByZXR1cm4gc2V0RW50cmVlcyhyb3cxLCBkYXRhLCBpbmRleCk7IH0pO1xyXG4gICAgcm93Mi5hcHBlbmRDaGlsZChzb3VwVGl0bGUpO1xyXG4gICAgcm93Mi5hcHBlbmRDaGlsZChocnIzKTtcclxuICAgIHNvdXBzX2RhdGEuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSwgaW5kZXgpIHsgcmV0dXJuIHNldEVudHJlZXMocm93MiwgZGF0YSwgaW5kZXgpOyB9KTtcclxuICAgIHJvdzIuYXBwZW5kQ2hpbGQoc2FsYWRUaXRsZSk7XHJcbiAgICByb3cyLmFwcGVuZENoaWxkKGhycjQpO1xyXG4gICAgc2FsYWRzX2RhdGEuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSwgaW5kZXgpIHsgcmV0dXJuIHNldEVudHJlZXMocm93MiwgZGF0YSwgaW5kZXgpOyB9KTtcclxuICAgIHJvdzMuYXBwZW5kQ2hpbGQoZW50cmVlc1RpdGxlKTtcclxuICAgIHJvdzMuYXBwZW5kQ2hpbGQoaHJyNSk7XHJcbiAgICBlbnRyZWVzX2RhdGEuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSwgaW5kZXgpIHsgcmV0dXJuIHNldEVudHJlZXMocm93MywgZGF0YSwgaW5kZXgpOyB9KTtcclxuICAgIGNvbnRlbnRfYm94LmFwcGVuZCh0aXRsZSk7XHJcbiAgICBjb250ZW50X2JveC5hcHBlbmQoaHIpO1xyXG4gICAgcm93c193cmFwcGVyLmFwcGVuZChyb3cxKTtcclxuICAgIHJvd3Nfd3JhcHBlci5hcHBlbmQocm93Mik7XHJcbiAgICByb3dzX3dyYXBwZXIuYXBwZW5kKHJvdzMpO1xyXG4gICAgY29udGVudF9ib3guYXBwZW5kKHJvd3Nfd3JhcHBlcik7XHJcbiAgICBmdW5jdGlvbiBzZXRFbnRyZWVzKHJvdywgaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgZW50cmVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB2YXIgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIHByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB2YXIgZGVzY3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBkZXNjckRpdi50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0RGVzY3IoKTtcclxuICAgICAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gaXRlbS5nZXROYW1lKCk7XHJcbiAgICAgICAgcHJpY2VEaXYudGV4dENvbnRlbnQgPSBcIlwiICsgaXRlbS5nZXRQcmljZSgpLnRvUHJlY2lzaW9uKDMpO1xyXG4gICAgICAgIHByaWNlRGl2LmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcclxuICAgICAgICBlbnRyZWVEaXYuYXBwZW5kQ2hpbGQobmFtZURpdik7XHJcbiAgICAgICAgZW50cmVlRGl2LmFwcGVuZENoaWxkKGRlc2NyRGl2KTtcclxuICAgICAgICBlbnRyZWVEaXYuYXBwZW5kQ2hpbGQocHJpY2VEaXYpO1xyXG4gICAgICAgIGVudHJlZURpdi5pZCA9IHJvdy5pZCArIFwiLVwiICsgaW5kZXg7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGVudHJlZURpdik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHAxIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbmV3Rm9vZDEuanBnXCI7XHJcbmltcG9ydCBwMiBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL25ld0Zvb2QyLmpwZ1wiO1xyXG5pbXBvcnQgcDMgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9uZXdGb29kMy5qcGdcIjtcclxuaW1wb3J0IHA0IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbmV3Rm9vZDQuanBnXCI7XHJcbmltcG9ydCBwNSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL25ld0Zvb2Q1LmpwZ1wiO1xyXG5pbXBvcnQgcDYgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9uZXdGb29kNi5qcGdcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZVR3byhsb2FkZWQpIHtcclxuICAgIGlmIChsb2FkZWQgPT09IHZvaWQgMCkgeyBsb2FkZWQgPSAwOyB9XHJcbiAgICB2YXIgY29udGVudF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JveC1jb250ZW50XCIpO1xyXG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudF9ib3guY2xhc3NMaXN0LmFkZChcInBhZ2VUd29cIik7XHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwaG90by13cmFwcGVyXCIpO1xyXG4gICAgc2V0VGl0bGUoXCJHYWxsZXJ5XCIpO1xyXG4gICAgdmFyIGltZzEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZzEuc3JjID0gcDE7XHJcbiAgICB2YXIgaW1nMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nMi5zcmMgPSBwMjtcclxuICAgIHZhciBpbWczID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWczLnNyYyA9IHAzO1xyXG4gICAgdmFyIGltZzQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZzQuc3JjID0gcDQ7XHJcbiAgICB2YXIgaW1nNSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nNS5zcmMgPSBwNTtcclxuICAgIHZhciBpbWc2ID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWc2LnNyYyA9IHA2O1xyXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodGV4dCkge1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICB2YXIgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIGNvbnRlbnRfYm94LmFwcGVuZCh0aXRsZSk7XHJcbiAgICAgICAgY29udGVudF9ib3guYXBwZW5kKGhyKTtcclxuICAgIH1cclxuICAgIHZhciBsb2FkZXJXcmFwcGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRlcldyYXBwZXIodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHZvaWQgMCkgeyB2YWwgPSAwOyB9XHJcbiAgICAgICAgICAgIHRoaXMuaW1ncyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNldCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlID49IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc29ydGVkXzEgPSB0aGlzLmltZ3Muc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYVsxXSA8IGJbMV07IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGltZykgeyByZXR1cm4gaW1nWzBdOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChjb250ZW50X2JveC5sYXN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X2JveC5yZW1vdmVDaGlsZChjb250ZW50X2JveC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUoXCJHYWxsZXJ5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkXzEuZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7IHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudF9ib3guYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY29udGVudF9ib3gubGFzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X2JveC5yZW1vdmVDaGlsZChjb250ZW50X2JveC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKFwiR2FsbGVyeVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkXzEuZm9yRWFjaChmdW5jdGlvbiAoZWxlKSB7IHJldHVybiB3cmFwcGVyLmFwcGVuZENoaWxkKGVsZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50X2JveC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkID0gZnVuY3Rpb24gKGltZywgb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1ncy5wdXNoKFtpbWcsIG9yZGVyXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh0aGlzLnZhbHVlICsgMSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwiZG90XCIpO1xyXG4gICAgICAgICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoXCJkXCIgKyBpKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRfYm94LmFwcGVuZENoaWxkKGRvdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxvYWRlcldyYXBwZXI7XHJcbiAgICB9KCkpO1xyXG4gICAgdmFyIGsgPSBuZXcgbG9hZGVyV3JhcHBlcigpO1xyXG4gICAgaW1nMS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGsuYWRkKGltZzEsIDEpOyB9O1xyXG4gICAgaW1nMi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGsuYWRkKGltZzIsIDIpOyB9O1xyXG4gICAgaW1nMy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGsuYWRkKGltZzMsIDMpOyB9O1xyXG4gICAgaW1nNC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGsuYWRkKGltZzQsIDQpOyB9O1xyXG4gICAgaW1nNS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGsuYWRkKGltZzUsIDUpOyB9O1xyXG4gICAgaW1nNi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGsuYWRkKGltZzYsIDYpOyB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCAnLi9jc3Mvc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgcGFnZU9uZSBmcm9tIFwiLi9maXJzdF9wYWdlXCI7XHJcbmltcG9ydCBwYWdlVHdvIGZyb20gXCIuL3NlY29uZF9wYWdlXCI7XHJcbnZhciBmdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gbWFrZUh0bWxFbGVtZW50KGVsZVR5cGUsIGVsZVNvdXJjZSwgb3B0aW9uKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7IG9wdGlvbiA9IHt9OyB9XHJcbiAgICAgICAgdmFyIG5ld0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlVHlwZSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbi5pZCkge1xyXG4gICAgICAgICAgICBuZXdFbGUuaWQgPSBvcHRpb24uaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb24uY2xhc3Nlcykge1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gbmV3RWxlLmNsYXNzTGlzdC5hZGQoY2hpbGQpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgICAgIG5ld0VsZS5pbm5lclRleHQgPSBvcHRpb24udGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbi5jbGljaykge1xyXG4gICAgICAgICAgICBuZXdFbGUub25jbGljayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9wdGlvbi5jbGljaygpOyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9uLmhvdmVyKSB7XHJcbiAgICAgICAgICAgIG5ld0VsZS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9wdGlvbi5ob3ZlcigpOyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gbWFrZUh0bWxFbGVtZW50KGNoaWxkWzBdLCBuZXdFbGUsIGNoaWxkWzFdKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZVNvdXJjZS5hcHBlbmRDaGlsZChuZXdFbGUpO1xyXG4gICAgICAgIHJldHVybiBuZXdFbGU7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5jciA9IDA7XHJcbiAgICB2YXIgX2N1clBhZ2UgPSAwO1xyXG4gICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdmFyIGJveF9jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHZhciBidXR0b25fZHJhd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHZhciBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHZhciBtZW51QnRuSHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICB2YXIgbWVudUJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHZhciBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHZhciBob21lQnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdmFyIGdhbGxlcnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdmFyIGdhbGxlcnlCdG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcInVuc2VsZWN0ZWRcIik7XHJcbiAgICBnYWxsZXJ5QnRuLmNsYXNzTGlzdC5hZGQoXCJ1bnNlbGVjdGVkXCIpO1xyXG4gICAgYnV0dG9uX2RyYXdlci5jbGFzc0xpc3QuYWRkKFwiYnRuLWRyYXdlclwiKTtcclxuICAgIG1lbnVCdG5Ici5jbGFzc0xpc3QuYWRkKFwidGVzdFwiKTtcclxuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuICAgIGJveF9jb250ZW50LmlkID0gXCJib3gtY29udGVudFwiO1xyXG4gICAgbWVudUJ0blRleHQudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIGdhbGxlcnlCdG5UZXh0LnRleHRDb250ZW50ID0gXCJHYWxsZXJ5XCI7XHJcbiAgICBob21lQnRuVGV4dC50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbWVudUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9QYWdlKDEpOyB9O1xyXG4gICAgaG9tZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9QYWdlKDApOyB9O1xyXG4gICAgZ2FsbGVyeUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9QYWdlKDIpOyB9O1xyXG4gICAgbWVudUJ0bi5hcHBlbmRDaGlsZChtZW51QnRuVGV4dCk7XHJcbiAgICBob21lQnRuLmFwcGVuZENoaWxkKGhvbWVCdG5UZXh0KTtcclxuICAgIGdhbGxlcnlCdG4uYXBwZW5kQ2hpbGQoZ2FsbGVyeUJ0blRleHQpO1xyXG4gICAgYnV0dG9uX2RyYXdlci5hcHBlbmQoaG9tZUJ0bik7XHJcbiAgICBidXR0b25fZHJhd2VyLmFwcGVuZChtZW51QnRuKTtcclxuICAgIGJ1dHRvbl9kcmF3ZXIuYXBwZW5kKGdhbGxlcnlCdG4pO1xyXG4gICAgYnV0dG9uX2RyYXdlci5hcHBlbmQobWVudUJ0bkhyKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uX2RyYXdlcik7XHJcbiAgICBob21lKCk7XHJcbiAgICBtZW51QnRuSHIuc3R5bGUubGVmdCA9IFwiY2FsYygzMyUgKiBcIiArICgwICogNCArIDEpICsgXCIvNCArIFwiICsgMCArIFwicHgpXCI7XHJcbiAgICBmdW5jdGlvbiBob21lKCkge1xyXG4gICAgICAgIHZhciBib3hfY29udGVudF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgICB2YXIgYm94X2NvbnRlbnRfcGhyYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIHZhciBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIHdlZWVrZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICB2YXIgd2VlZWtlbmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgIGJveF9jb250ZW50X3BocmFzZS5jbGFzc0xpc3QuYWRkKFwiZmFuY3lcIik7XHJcbiAgICAgICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xyXG4gICAgICAgIHdlZWVrZGF5cy50ZXh0Q29udGVudCA9IFwiMTI6MDBwbSAtIDExOjAwcG0gTW9uLUZyaVwiO1xyXG4gICAgICAgIHdlZWVrZW5kcy50ZXh0Q29udGVudCA9IFwiOTowMGFtIC0gMTA6MDBwbSBTYXQtU3VuXCI7XHJcbiAgICAgICAgYm94X2NvbnRlbnRfdGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGJveF9jb250ZW50X3BocmFzZS50ZXh0Q29udGVudCA9IFwiT1JUQUdHSU8gUEFTRVJOSVwiO1xyXG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKHdlZWVrZGF5cyk7XHJcbiAgICAgICAgaG91cnMuYXBwZW5kQ2hpbGQod2VlZWtlbmRzKTtcclxuICAgICAgICBib3hfY29udGVudC5hcHBlbmRDaGlsZChib3hfY29udGVudF90aXRsZSk7XHJcbiAgICAgICAgYm94X2NvbnRlbnQuYXBwZW5kQ2hpbGQoYm94X2NvbnRlbnRfcGhyYXNlKTtcclxuICAgICAgICBib3hfY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChib3hfY29udGVudCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUJveENvbnRlbnRDbGFzc2VzKCkge1xyXG4gICAgICAgIGJveF9jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlT25lXCIpO1xyXG4gICAgICAgIGJveF9jb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlVHdvXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW92ZU1lbnVCdG5TbGlkZXIobmV4dFBhZ2UpIHtcclxuICAgICAgICBtZW51QnRuSHIuc3R5bGUubGVmdCA9IFwiY2FsYygzMyUgKiBcIiArIChfY3VyUGFnZSAqIDQgKyAxKSArIFwiLzQgKyBcIiArIF9jdXJQYWdlICogMjAgKyBcInB4KVwiO1xyXG4gICAgICAgIG1lbnVCdG5Ici5jbGFzc0xpc3QucmVtb3ZlKFwiczBcIik7XHJcbiAgICAgICAgbWVudUJ0bkhyLmNsYXNzTGlzdC5yZW1vdmUoXCJzMVwiKTtcclxuICAgICAgICBtZW51QnRuSHIuY2xhc3NMaXN0LnJlbW92ZShcInMyXCIpO1xyXG4gICAgICAgIG1lbnVCdG5Ici5jbGFzc0xpc3QuYWRkKFwic1wiICsgbmV4dFBhZ2UpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5TZWxlY3RBbGxUYWJzKCkge1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIGhvbWVCdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIGdhbGxlcnlCdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcInVuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwidW5zZWxlY3RlZFwiKTtcclxuICAgICAgICBnYWxsZXJ5QnRuLmNsYXNzTGlzdC5hZGQoXCJ1bnNlbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd1NlbGVjdGVkVGFiKG5leHRQYWdlKSB7XHJcbiAgICAgICAgdW5TZWxlY3RBbGxUYWJzKCk7XHJcbiAgICAgICAgc3dpdGNoIChuZXh0UGFnZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIGhvbWVCdG4uY2xhc3NMaXN0LnJlbW92ZShcInVuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwidW5zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bnNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvUGFnZShwYWdlKSB7XHJcbiAgICAgICAgaWYgKHBhZ2UgPT09IF9jdXJQYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVtb3ZlQm94Q29udGVudENsYXNzZXMoKTtcclxuICAgICAgICByZW1vdmVDb250ZW50KCk7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVGFiKHBhZ2UpO1xyXG4gICAgICAgIG1vdmVNZW51QnRuU2xpZGVyKHBhZ2UpO1xyXG4gICAgICAgIF9jdXJQYWdlID0gcGFnZTtcclxuICAgICAgICBpZiAocGFnZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBwYWdlT25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWdlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGhvbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhZ2UgPT09IDIpIHtcclxuICAgICAgICAgICAgcGFnZVR3byhpbmNyKyspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgdmFyIGJveF9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3gtY29udGVudFwiKTtcclxuICAgICAgICB3aGlsZSAoYm94X2NvbnRlbnQubGFzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGJveF9jb250ZW50LnJlbW92ZUNoaWxkKGJveF9jb250ZW50Lmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9QYWdlMCgpIHtcclxuICAgICAgICByZW1vdmVDb250ZW50KCk7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVGFiKDApO1xyXG4gICAgICAgIG1vdmVNZW51QnRuU2xpZGVyKDApO1xyXG4gICAgICAgIF9jdXJQYWdlID0gMDtcclxuICAgICAgICBob21lKCk7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmMoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==