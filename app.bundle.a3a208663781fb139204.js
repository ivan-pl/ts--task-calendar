/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 540:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(490);
var HashRouter = /** @class */ (function () {
    function HashRouter() {
        var _this = this;
        this.handlers = new Map();
        this.prevPath = "";
        this.curPath = location.hash;
        document.body.addEventListener("click", function (event) {
            var _a;
            var el = event.target;
            if (!el.matches("a")) {
                return;
            }
            event.preventDefault();
            var url = (_a = el.getAttribute("href")) !== null && _a !== void 0 ? _a : "/";
            _this.go(url, {});
        });
    }
    HashRouter.prototype.on = function (match, params) {
        var _this = this;
        var handler = { match: match, params: params };
        this.handlers.set(match, handler);
        return function () { return _this.handlers.delete(match); };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    HashRouter.prototype.go = function (url, state) {
        var _this = this;
        url = url || "/";
        this.prevPath = this.curPath;
        this.state = state;
        location.hash = url;
        this.curPath = url;
        this.handlers.forEach(function (handler) { return _this.callHandler(handler); });
    };
    HashRouter.prototype.callHandler = function (_a) {
        var match = _a.match, _b = _a.params, _c = _b === void 0 ? {} : _b, onEnter = _c.onEnter, onBeforeEnter = _c.onBeforeEnter, onLeave = _c.onLeave;
        return __awaiter(this, void 0, void 0, function () {
            var args;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        args = {
                            curPath: this.curPath,
                            prevPath: this.prevPath,
                            state: this.state,
                        };
                        if (!(onLeave &&
                            this.prevPath !== this.curPath &&
                            (0, utils_1.isMatch)(match, this.prevPath))) return [3 /*break*/, 2];
                        return [4 /*yield*/, onLeave(args)];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        if (!(0, utils_1.isMatch)(match, this.curPath)) return [3 /*break*/, 6];
                        if (!onBeforeEnter) return [3 /*break*/, 4];
                        return [4 /*yield*/, onBeforeEnter(args)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        if (!onEnter) return [3 /*break*/, 6];
                        return [4 /*yield*/, onEnter(args)];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return HashRouter;
}());
exports["default"] = HashRouter;


/***/ }),

/***/ 674:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(490);
var HistoryRouter = /** @class */ (function () {
    function HistoryRouter() {
        var _this = this;
        this.handlers = new Map();
        this.prevPath = "";
        this.curPath = location.pathname;
        document.body.addEventListener("click", function (event) {
            var _a;
            var el = event.target;
            if (!el.matches("a")) {
                return;
            }
            event.preventDefault();
            var url = (_a = el.getAttribute("href")) !== null && _a !== void 0 ? _a : "/";
            _this.go(url, history.state);
        });
    }
    HistoryRouter.prototype.on = function (match, params) {
        var _this = this;
        var handler = { match: match, params: params };
        this.handlers.set(match, handler);
        return function () { return _this.handlers.delete(match); };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    HistoryRouter.prototype.go = function (url, state) {
        var _this = this;
        this.prevPath = this.curPath;
        history.pushState(state, url, url);
        this.curPath = location.pathname;
        this.handlers.forEach(function (handler) { return _this.callHandler(handler); });
    };
    HistoryRouter.prototype.callHandler = function (_a) {
        var match = _a.match, _b = _a.params, _c = _b === void 0 ? {} : _b, onEnter = _c.onEnter, onBeforeEnter = _c.onBeforeEnter, onLeave = _c.onLeave;
        return __awaiter(this, void 0, void 0, function () {
            var args;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        args = {
                            curPath: this.curPath,
                            prevPath: this.prevPath,
                            state: history.state,
                        };
                        if (!(onLeave && (0, utils_1.isMatch)(match, this.prevPath))) return [3 /*break*/, 2];
                        return [4 /*yield*/, onLeave(args)];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        if (!(0, utils_1.isMatch)(match, this.curPath)) return [3 /*break*/, 6];
                        if (!onBeforeEnter) return [3 /*break*/, 4];
                        return [4 /*yield*/, onBeforeEnter(args)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        if (!onEnter) return [3 /*break*/, 6];
                        return [4 /*yield*/, onEnter(args)];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return HistoryRouter;
}());
exports["default"] = HistoryRouter;


/***/ }),

/***/ 284:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HashRouter = exports.HistoryRouter = void 0;
var history_1 = __importDefault(__webpack_require__(674));
exports.HistoryRouter = history_1.default;
var hash_1 = __importDefault(__webpack_require__(540));
exports.HashRouter = hash_1.default;


/***/ }),

/***/ 490:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isMatch = void 0;
function isMatch(match, path) {
    if (typeof match === "string") {
        return match === path;
    }
    if (match instanceof RegExp) {
        return match.test(path);
    }
    return match(path);
}
exports.isMatch = isMatch;


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXTERNAL MODULE: ./node_modules/some-router/dist/index.js
var dist = __webpack_require__(284);
;// CONCATENATED MODULE: ./src/features/navbar/renderNavbar.ts
/* eslint no-param-reassign: ["error", { "props": false }] */

function renderNavbar(root) {
  const innerHTML = `
  <nav class="nav">
    <a href="/calendar" class="nav__link">Calendar</a>
    <a href="/list" class="nav__link">List</a>
    <a href="/about" class="nav__link">About</a>
  </nav>
  `;
  root.innerHTML = innerHTML;
}
/* harmony default export */ const navbar_renderNavbar = (renderNavbar);
;// CONCATENATED MODULE: ./src/features/navbar/index.ts


;// CONCATENATED MODULE: ./src/features/calendar/renderCalendar.ts
/* eslint no-param-reassign: ["error", { "props": false }] */

function renderCalendar(root) {
  const innerHtml = `<section class="calendar">Calendar page</section>`;
  root.innerHTML = innerHtml;
}
/* harmony default export */ const calendar_renderCalendar = (renderCalendar);
;// CONCATENATED MODULE: ./src/features/about/renderAbout.ts
/* eslint no-param-reassign: ["error", { "props": false }] */

function renderAbout(root) {
  const innerHtml = `<section class="about">About page</section>`;
  root.innerHTML = innerHtml;
}
/* harmony default export */ const about_renderAbout = (renderAbout);
;// CONCATENATED MODULE: ./src/features/list/renderList.ts
/* eslint no-param-reassign: ["error", { "props": false }] */

function renderList(root) {
  const innerHtml = `<section class="list">List page</section>`;
  root.innerHTML = innerHtml;
}
/* harmony default export */ const list_renderList = (renderList);
;// CONCATENATED MODULE: ./src/app/initApp.ts





function initApp(navRoot, appRoot) {
  navbar_renderNavbar(navRoot);
  const router = new dist.HashRouter();
  router.on("/", {
    onEnter: async () => calendar_renderCalendar(appRoot)
  });
  router.on("/calendar", {
    onEnter: async () => calendar_renderCalendar(appRoot)
  });
  router.on("/about", {
    onEnter: async () => about_renderAbout(appRoot)
  });
  router.on("/list", {
    onEnter: async () => list_renderList(appRoot)
  });
  router.go(location.hash.replace("#", ""), {});
}
;// CONCATENATED MODULE: ./src/app/index.ts


;// CONCATENATED MODULE: ./src/index.ts



const header = document.getElementById("header");
const app = document.getElementById("app");
initApp(header, app);
}();
/******/ })()
;