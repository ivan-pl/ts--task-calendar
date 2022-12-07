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


;// CONCATENATED MODULE: ./src/common/utils/createElement.ts
function createElement(htmlTag, className, attributes, innerHTML) {
  const el = document.createElement(htmlTag);
  if (className) {
    el.classList.add(className);
  }
  if (attributes) {
    for (const [attr, val] of Object.entries(attributes)) {
      el.setAttribute(attr, val);
    }
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/toDate/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/eachDayOfInterval/index.js


/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */

function eachDayOfInterval(dirtyInterval, options) {
  var _options$step;

  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }

  return dates;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/addDays/index.js



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/addMonths/index.js



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/add/index.js
function add_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { add_typeof = function _typeof(obj) { return typeof obj; }; } else { add_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return add_typeof(obj); }







/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  requiredArgs(2, arguments);
  if (!duration || add_typeof(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? toInteger(duration.years) : 0;
  var months = duration.months ? toInteger(duration.months) : 0;
  var weeks = duration.weeks ? toInteger(duration.weeks) : 0;
  var days = duration.days ? toInteger(duration.days) : 0;
  var hours = duration.hours ? toInteger(duration.hours) : 0;
  var minutes = duration.minutes ? toInteger(duration.minutes) : 0;
  var seconds = duration.seconds ? toInteger(duration.seconds) : 0; // Add years and months

  var date = toDate(dirtyDate);
  var dateWithMonths = months || years ? addMonths(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}
;// CONCATENATED MODULE: ./src/features/calendar/utils/to2DArray.ts
function to2DArray(arr, cols) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += cols) {
    newArr.push(arr.slice(i, i + cols));
  }
  return newArr;
}
;// CONCATENATED MODULE: ./src/features/calendar/utils/variables.ts
const DAYS_COUNT = 42; // number of days which renders on page
const WEEKS_COUNT = 6; // number of weeks which renders on page
const DAYS_IN_WEEK = 7;
const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
;// CONCATENATED MODULE: ./src/features/calendar/utils/getDatesArray.ts




function getStartDate(year, month) {
  const curDate = new Date(year, month);
  while (curDate.getDay() !== 1) {
    curDate.setDate(curDate.getDate() - 1);
  }
  return curDate;
}
function getDatesArray(year, month) {
  const start = getStartDate(year, month);
  const end = add(start, {
    days: DAYS_COUNT - 1
  });
  return to2DArray(eachDayOfInterval({
    start,
    end
  }), DAYS_IN_WEEK);
}
;// CONCATENATED MODULE: ./src/features/calendar/createWeek.ts

function createDay(date) {
  const innerHTML = `
    <span class="day__date">${date.getDate()}</span>
    <div class="day__tasks"></div>
  `;
  const day = createElement("div", "day", {
    date: date.toString()
  }, innerHTML);
  return day;
}
function createWeek(week, currentMonth) {
  const weekElement = createElement("div", "week");
  for (let i = 0; i < week.length; i++) {
    const date = week[i];
    const dayEl = createDay(date);
    if (date.getMonth() !== currentMonth) {
      dayEl.classList.add("day--gray");
    }
    weekElement.append(dayEl);
  }
  return weekElement;
}
;// CONCATENATED MODULE: ./src/features/calendar/createMonth.ts



function createMonth(year, month) {
  const arrOfWeeks = getDatesArray(year, month);
  const monthElement = createElement("div", "month");
  for (const week of arrOfWeeks) {
    monthElement.append(createWeek(week, month));
  }
  return monthElement;
}
;// CONCATENATED MODULE: ./src/features/calendar/createDaysOfWeek.ts

function createDaysOfWeek() {
  const week = document.createElement("div");
  week.classList.add("legend");
  for (const dayName of DAYS_OF_WEEK) {
    const day = document.createElement("div");
    day.innerText = dayName;
    day.classList.add("day-of-week");
    week.append(day);
  }
  return week;
}
;// CONCATENATED MODULE: ./src/features/calendar/renderCalendar.ts
/* eslint no-param-reassign: ["error", { "props": false }] */




function renderCalendar(root) {
  const calendar = createElement("section", "calendar");
  calendar.append(createDaysOfWeek());
  calendar.append(createMonth(2022, 11));
  root.innerHTML = "";
  root.append(calendar);
}
/* harmony default export */ const calendar_renderCalendar = (renderCalendar);
;// CONCATENATED MODULE: ./src/features/calendar/index.ts


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