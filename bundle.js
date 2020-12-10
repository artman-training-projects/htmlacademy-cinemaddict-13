/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs-random/index.min.js":
/*!************************************************!*\
  !*** ./node_modules/dayjs-random/index.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){"use strict";return(e,t,n)=>{n.between=(e,t)=>{const r=n(e).valueOf(),o=n(t).valueOf()-r,u=Math.floor(Math.random()*o+1),a=n(r+u);return n(a)},n.soon=(e=1,t=n())=>{const r=n(t),o=r.add(e,"day");return n.between(r,o)},n.recent=(e=1,t=n())=>{const r=n(t),o=r.subtract(e,"day");return n.between(o,r)},n.future=(e=1,t=n())=>{const r=n(t),o=r.add(e,"year");return n.between(r,o)},n.past=(e=1,t=n())=>{const r=n(t),o=r.subtract(e,"year");return n.between(o,r)}}}));

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID. If you use Expo, install `expo-random` ' +
        'and use `nanoid/async`.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        // `id.length + 1 === size` is a more compact option.
        if (id.length === +size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/*! exports provided: getFilmsFromServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilmsFromServer", function() { return getFilmsFromServer; });
/* harmony import */ var _mock_films__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/films */ "./src/mock/films.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const FRACTION = {
  FILL: 0.4,
  EMPTY: 0.2,
};

const films = (() => {
  const random = Math.random();

  if (random > FRACTION.FILL) {
    return new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomNumber"])(20, 15)).fill(``).map(_mock_films__WEBPACK_IMPORTED_MODULE_0__["getRandomizedFilm"]);
  }

  if (random > FRACTION.EMPTY) {
    return [];
  }

  return null;
})();

const getFilmsFromServer = () => new Promise((resolve, reject) => {
  setTimeout(() => films ? resolve(films) : reject(new Error(`Упс! Загрузка не удалась`)), 2000);
});


/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: ShownFilms, List, Filters, MAX_DESCRIPTION_LENGTH, Keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShownFilms", function() { return ShownFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return Filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DESCRIPTION_LENGTH", function() { return MAX_DESCRIPTION_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
const ShownFilms = {
  MAIN: 5,
  EXTRA: 2
};

const List = {
  MAIN: `All movies. Upcoming`,
  TOP_RATED: `Top rated`,
  MOST_COMMENTED: `Most commented`
};

const Filters = {
  ALL: `All movies`,
  WATCHLIST: `Watchlist`,
  HISTORY: `History`,
  FAVORITES: `Favorites`,
};

const MAX_DESCRIPTION_LENGTH = 139;

const Keys = {
  ESCAPE: `Escape`
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _view_header_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/header/profile */ "./src/view/header/profile.js");
/* harmony import */ var _view_main_main_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/main/main-container */ "./src/view/main/main-container.js");
/* harmony import */ var _view_main_films_film_list_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/main/films/film-list-container */ "./src/view/main/films/film-list-container.js");
/* harmony import */ var _view_main_films_show_more_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/main/films/show-more-button */ "./src/view/main/films/show-more-button.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_nav_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/nav/filter */ "./src/view/nav/filter.js");
/* harmony import */ var _view_main_films_film_list_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/main/films/film-list-header */ "./src/view/main/films/film-list-header.js");
/* harmony import */ var _view_main_films_film_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/main/films/film-list */ "./src/view/main/films/film-list.js");
/* harmony import */ var _view_main_films_film_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/main/films/film-card */ "./src/view/main/films/film-card.js");
/* harmony import */ var _view_footer_statistic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/footer/statistic */ "./src/view/footer/statistic.js");
/* harmony import */ var _view_main_films_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/main/films-loading */ "./src/view/main/films-loading.js");
/* harmony import */ var _view_main_no_films__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/main/no-films */ "./src/view/main/no-films.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api/api */ "./src/api/api.js");






// import Stats from './view/nav/stats';










// Get entry place in template
const pageBodySection = document.body;
const headerSection = pageBodySection.querySelector(`.header`);
const mainSection = pageBodySection.querySelector(`.main`);
const footerStatisticSection = pageBodySection.querySelector(`.footer__statistics`);

// container for films
const renderListContainer = (container, listType, isMain = false) => {
  Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(container, new _view_main_films_film_list__WEBPACK_IMPORTED_MODULE_9__["default"](listType, isMain));

  const mainContainer = container.querySelector(`[data-list="${listType}"]`);
  Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(mainContainer, new _view_main_films_film_list_header__WEBPACK_IMPORTED_MODULE_8__["default"](listType, isMain));
  Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(mainContainer, new _view_main_films_film_list_container__WEBPACK_IMPORTED_MODULE_4__["default"]());

  return mainContainer.querySelector(`.films-list__container`);
};

// render films
const renderFilms = (container, films) => {
  films.forEach((film) => {
    const filmCard = new _view_main_films_film_card__WEBPACK_IMPORTED_MODULE_10__["default"](film);
    Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(container, filmCard);
    filmCard.setShowPopupHandler();
  });
};

// show-more btn
const addShowMoreButton = (listContainer, films) => {
  if (films.length > _consts__WEBPACK_IMPORTED_MODULE_0__["ShownFilms"].MAIN) {
    const showMoreButton = new _view_main_films_show_more_button__WEBPACK_IMPORTED_MODULE_5__["default"]();
    Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(listContainer.parentNode, showMoreButton);
    let showedFilms = _consts__WEBPACK_IMPORTED_MODULE_0__["ShownFilms"].MAIN;

    showMoreButton.setShowMoreHandler(() => {
      const addShowFilms = showedFilms + _consts__WEBPACK_IMPORTED_MODULE_0__["ShownFilms"].MAIN;
      renderFilms(listContainer, films.slice(showedFilms, addShowFilms));
      showedFilms += _consts__WEBPACK_IMPORTED_MODULE_0__["ShownFilms"].MAIN;

      if (films.length <= showedFilms) {
        Object(_render__WEBPACK_IMPORTED_MODULE_1__["removeComponent"])(showMoreButton);
      }
    });
  }
};

// Start App
const filterComponent = new _view_nav_filter__WEBPACK_IMPORTED_MODULE_7__["default"]();
const mainComponent = new _view_main_main_container__WEBPACK_IMPORTED_MODULE_3__["default"]();
const statisticComponent = new _view_footer_statistic__WEBPACK_IMPORTED_MODULE_11__["default"]();
const loadingComponent = new _view_main_films_loading__WEBPACK_IMPORTED_MODULE_12__["default"]();

const startApp = () => {
  Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(mainSection, filterComponent);
  Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(mainSection, mainComponent);
  Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(mainComponent, loadingComponent);
  Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(footerStatisticSection, statisticComponent);

  Object(_api_api__WEBPACK_IMPORTED_MODULE_14__["getFilmsFromServer"])()
    .then((films) => {
      if (films.length) {
        const topRatedFilms = [...films].sort((a, b) => a.rating < b.rating).slice(0, _consts__WEBPACK_IMPORTED_MODULE_0__["ShownFilms"].EXTRA);
        const mostCommentedFilms = [...films].sort((a, b) => a.comments.length < b.comments.length).slice(0, _consts__WEBPACK_IMPORTED_MODULE_0__["ShownFilms"].EXTRA);

        const filters = Object(_view_nav_filter__WEBPACK_IMPORTED_MODULE_7__["generateFilters"])(films);

        const renderProfile = () => {
          const watchedFilms = films.filter((film) => film.watched).length;
          const profileComponent = new _view_header_profile__WEBPACK_IMPORTED_MODULE_2__["default"](watchedFilms);
          Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(headerSection, profileComponent);
        };

        const updateTemplate = () => {
          Object(_render__WEBPACK_IMPORTED_MODULE_1__["removeComponent"])(mainComponent);
          Object(_render__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(filterComponent, new _view_nav_filter__WEBPACK_IMPORTED_MODULE_7__["default"](filters));
          Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(mainSection, new _view_sort__WEBPACK_IMPORTED_MODULE_6__["default"]());
          Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(mainSection, mainComponent);
          Object(_render__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(statisticComponent, new _view_footer_statistic__WEBPACK_IMPORTED_MODULE_11__["default"](films.length));
        };

        const renderFilmsLists = () => {
          const mainListContainer = renderListContainer(mainComponent.getElement(), _consts__WEBPACK_IMPORTED_MODULE_0__["List"].MAIN, true);
          const topRatedListContainer = renderListContainer(mainComponent.getElement(), _consts__WEBPACK_IMPORTED_MODULE_0__["List"].TOP_RATED);
          const mostCommentedListContainer = renderListContainer(mainComponent.getElement(), _consts__WEBPACK_IMPORTED_MODULE_0__["List"].MOST_COMMENTED);

          renderFilms(mainListContainer, films.slice(0, _consts__WEBPACK_IMPORTED_MODULE_0__["ShownFilms"].MAIN));
          renderFilms(topRatedListContainer, topRatedFilms);
          renderFilms(mostCommentedListContainer, mostCommentedFilms);

          addShowMoreButton(mainListContainer, films);
        };

        updateTemplate();
        renderProfile();
        renderFilmsLists();
      } else {
        Object(_render__WEBPACK_IMPORTED_MODULE_1__["removeComponent"])(loadingComponent);
        Object(_render__WEBPACK_IMPORTED_MODULE_1__["renderComponent"])(mainComponent, new _view_main_no_films__WEBPACK_IMPORTED_MODULE_13__["default"]());
      }
    })
    .catch((err) => Object(_render__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(loadingComponent, new _view_main_films_loading__WEBPACK_IMPORTED_MODULE_12__["default"](err)));
};

startApp();


/***/ }),

/***/ "./src/mock/comment.js":
/*!*****************************!*\
  !*** ./src/mock/comment.js ***!
  \*****************************/
/*! exports provided: getRandomizedComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomizedComment", function() { return getRandomizedComment; });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs-random */ "./node_modules/dayjs-random/index.min.js");
/* harmony import */ var dayjs_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils.js");




dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_random__WEBPACK_IMPORTED_MODULE_2___default.a);

const commentAuthors = [`Tina Kuzmenko`, `Alex Khab`, `Artur Trifonov`, `Vladimir Art`];
const commentTexts = [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`];
const commentEmotions = [`smile`, `sleeping`, `puke`, `angry`];

const getRandomizedComment = () => ({
  id: Object(nanoid__WEBPACK_IMPORTED_MODULE_0__["nanoid"])(),
  author: commentAuthors[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, commentAuthors.length - 1)],
  comment: commentTexts[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, commentTexts.length - 1)],
  date: dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.recent(30).format(),
  emotion: commentEmotions[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, commentEmotions.length - 1)],
});


/***/ }),

/***/ "./src/mock/films.js":
/*!***************************!*\
  !*** ./src/mock/films.js ***!
  \***************************/
/*! exports provided: getRandomizedFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomizedFilm", function() { return getRandomizedFilm; });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs-random */ "./node_modules/dayjs-random/index.min.js");
/* harmony import */ var dayjs_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment */ "./src/mock/comment.js");



dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.extend(dayjs_random__WEBPACK_IMPORTED_MODULE_2___default.a);



const filmTitles = [
  `Made for each other`,
  `Popeye Meets Sinbad`,
  `Sagebrush Trail`,
  `Santa Claus Conquers the Martians`,
  `The Dance of Life`,
  `The Great Flamarion`,
  `The Man with the Golden Arm`,
];

const filmDescriptions = [
  `While on a business trip, an ambitious young lawyer meets and immediately falls in love with a stranger. They wed the following day, and tragedy soon strikes.`,
  `The legendary sailors Popeye and Sindbad do battle to see which one is the greatest.`,
  `The Duke is wrongly convicted for a killing, but he escapes from prison and heads out west to find the real killer.`,
  `The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.`,
  `A vaudeville comic and a pretty young dancer aren't having much luck in their separate careers, so they decide to combine their acts and in order to save money on the road, they get married.`,
  `Part of an entertainment act, a beautiful but unscrupulous female performer manipulates all the men in her life in order to achieve her aims.`,
  `A junkie must face his true self to kick his drug addiction.`
];

const filmGenres = [`Drama`, `Film-Noir`, `Mystery`, `Western`, `Musical`, `Comedy`, `Cartoon`, `Mystery`];
const filmDirectors = [`Tom Ford`, `John Cromwell`, `Jennifer Aniston`, `Thomas Vinterberg`, `Taylor Dooley`];
const filmWriters = [`Takeshi Kitano`, `Werner Herzog`, `Miles Teller`, `Diane Lane`, `Peter Stormare`, `Jack Black`];
const filmActors = [`Morgan Freeman`, `Matilda De Angelis`, `Kevin Hart`, `Amanda Collin`, `Ji Chang-wook`, `Neslihan Atagül`, `Mark Dacascos`, `Tim Robbins`];
const filmCountry = [`Finland`, `USA`, `France`, `China`, `USSR`, `England`, `Germany`];

const getRandomizedFilm = () => {
  const filmTitle = filmTitles[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, filmTitles.length - 1)];

  return {
    "id": Object(nanoid__WEBPACK_IMPORTED_MODULE_0__["nanoid"])(),
    "title": filmTitle,
    "titleOriginal": filmTitle,
    "poster": `images/posters/${filmTitle.toLocaleLowerCase().split(` `).join(`-`)}.jpg`,
    "description": filmDescriptions[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, filmDescriptions.length - 1)],
    "rating": Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, 9, true),
    "releaseDate": dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.past(100).format(),
    "country": filmCountry[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, filmCountry.length - 1)],
    "runtime": Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(30, 120),
    "comments": new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, 7)).fill(``).map(_comment__WEBPACK_IMPORTED_MODULE_4__["getRandomizedComment"]),
    "director": filmDirectors[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, filmDirectors.length - 1)],
    "writers": new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(1, 2)).fill(``).map(() => filmWriters[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(1, filmWriters.length - 1)]),
    "actors": new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(2, 4)).fill(``).map(() => filmActors[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(1, filmActors.length - 1)]),
    "genres": new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(1, 3)).fill(``).map(() => filmGenres[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(1, filmGenres.length - 1)]),
    "ageRating": Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getRandomNumber"])(0, 18),
    "watchlist": Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTrueFalse"])(),
    "watched": Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTrueFalse"])(),
    "favorite": Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTrueFalse"])(),
  };
};


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: RenderPosition, renderComponent, replaceElement, removeComponent, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return replaceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeComponent", function() { return removeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _view_abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/abstractView */ "./src/view/abstractView.js");


const RenderPosition = {
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
};

const renderComponent = (container, child, place = RenderPosition.BEFOREEND) => {
  if (container instanceof _view_abstractView__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstractView__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
    case RenderPosition.AFTEREND:
      container.after(child);
      break;
  }
};

const replaceElement = (oldChild, newChild) => {
  if (oldChild instanceof _view_abstractView__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstractView__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (!parent || !oldChild || !newChild) {
    throw new Error(`Нельзя заменить несуществующие элементы`);
  }

  parent.replaceChild(newChild, oldChild);
};

const removeComponent = (component) => {
  if (!(component instanceof _view_abstractView__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Только компонент может быть удалён`);
  }

  component.getElement().remove();
  component.removeElement();
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomNumber, getTrueFalse, getFormattedRunTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrueFalse", function() { return getTrueFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedRunTime", function() { return getFormattedRunTime; });
function getRandomNumber(min, max, isFraction = false) {
  let randomNumber = min + Math.random() * (max + 1 - min);
  return isFraction ? randomNumber.toFixed(1) : Math.floor(randomNumber);
}

function getTrueFalse() {
  return !!Math.round(Math.random());
}

function getFormattedRunTime(minutes) {
  const time = [];

  if (minutes / 60 >= 1) {
    time.push(`${Math.floor(minutes / 60)}h`);
  }

  if (minutes % 60) {
    time.push(`${minutes % 60}m`);
  }

  return time.join(` `);
}


/***/ }),

/***/ "./src/view/abstractView.js":
/*!**********************************!*\
  !*** ./src/view/abstractView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractView; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");


class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Нельзя создать Абстрактный класс, только экземпляр.`);
    }

    this._element = null;
    this._callbacks = {};
  }

  getTemplate() {
    throw new Error(`Отсутствует имплементация абстрактного метода: getTemplate.`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_render__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/footer/statistic.js":
/*!**************************************!*\
  !*** ./src/view/footer/statistic.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Statistic; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");


const createFooterStatisticTemplate = (filmAmount) => {
  return (
    `<p>${filmAmount} movies inside</p>`
  );
};

class Statistic extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(amount = 0) {
    super();
    this._amount = amount;
  }

  getTemplate() {
    return createFooterStatisticTemplate(this._amount);
  }
}


/***/ }),

/***/ "./src/view/header/profile.js":
/*!************************************!*\
  !*** ./src/view/header/profile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");


const UserRank = {
  ZERO: ``,
  NOVICE: `novice`,
  FAN: `fan`,
  BUFF: `buff`,
};

const UserRankMap = new Map([
  [UserRank.ZERO, 0],
  [UserRank.NOVICE, 1],
  [UserRank.FAN, 11],
  [UserRank.BUFF, 21],
]);

const getRank = (watchedFilms) => {
  switch (true) {
    case watchedFilms >= UserRankMap.get(UserRank.BUFF): return UserRank.BUFF;
    case watchedFilms >= UserRankMap.get(UserRank.FAN): return UserRank.FAN;
    case watchedFilms >= UserRankMap.get(UserRank.NOVICE): return UserRank.NOVICE;
    default: return UserRank.ZERO;
  }
};

const createHeaderProfileTemplate = (watchedFilms) => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${getRank(watchedFilms)}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

class Profile extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(watchedFilms) {
    super();
    this._watchedFilms = watchedFilms;
  }

  getTemplate() {
    return createHeaderProfileTemplate(this._watchedFilms);
  }
}


/***/ }),

/***/ "./src/view/main/films-loading.js":
/*!****************************************!*\
  !*** ./src/view/main/films-loading.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsLoading; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");


const createFilmsLoadingTemplate = (filmsStatus) => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title">${filmsStatus}</h2>
    </section>`
  );
};

class FilmsLoading extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filmsStatus = `Loading...`) {
    super();
    this._filmsStatus = filmsStatus;
  }

  getTemplate() {
    return createFilmsLoadingTemplate(this._filmsStatus);
  }
}


/***/ }),

/***/ "./src/view/main/films/film-card.js":
/*!******************************************!*\
  !*** ./src/view/main/films/film-card.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/utils.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../consts */ "./src/consts.js");
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../abstractView */ "./src/view/abstractView.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../render */ "./src/render.js");
/* harmony import */ var _popup_popup_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../popup/popup-form */ "./src/view/popup/popup-form.js");
/* harmony import */ var _popup_popup_form_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../popup/popup-form-top */ "./src/view/popup/popup-form-top.js");
/* harmony import */ var _popup_popup_form_bottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../popup/popup-form-bottom */ "./src/view/popup/popup-form-bottom.js");
/* harmony import */ var _popup_popup_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../popup/popup-comment */ "./src/view/popup/popup-comment.js");










const createFilmCardTemplate = (film) => {
  const showDescription = (description) => description.length >= _consts__WEBPACK_IMPORTED_MODULE_2__["MAX_DESCRIPTION_LENGTH"] ? `${description.slice(0, _consts__WEBPACK_IMPORTED_MODULE_2__["MAX_DESCRIPTION_LENGTH"])}...` : description;
  const getIsActive = (isChecked) => isChecked ? `film-card__controls-item--active` : ``;

  return (
    `<article class="film-card" data-film="${film.id}">
      <h3 class="film-card__title">${film.title}</h3>
      <p class="film-card__rating">${film.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(film.releaseDate).format(`YYYY`)}</span>
        <span class="film-card__duration">${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFormattedRunTime"])(film.runtime)}</span>
        <span class="film-card__genre">${film.genres[0]}</span>
      </p>
      <img src=${film.poster} alt=${film.title} class="film-card__poster">
      <p class="film-card__description">${showDescription(film.description)}</p>
      <a class="film-card__comments">${film.comments.length} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${getIsActive(film.watchlist)}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${getIsActive(film.watched)}" type="button">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${getIsActive(film.favorite)}" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
};

class FilmCard extends _abstractView__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(film) {
    super();
    this._film = film;
    this._body = document.body;

    this._onOpenPopupClick = this._onOpenPopupClick.bind(this);
    this._onClosePopupClick = this._onClosePopupClick.bind(this);
    this._onClosePopupKeydown = this._onClosePopupKeydown.bind(this);
    this._removeOldPopup = this._removeOldPopup.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  setShowPopupHandler() {
    this.getElement().querySelector(`.film-card__title`)
      .addEventListener(`click`, this._onOpenPopupClick);

    this.getElement().querySelector(`.film-card__poster`)
      .addEventListener(`click`, this._onOpenPopupClick);

    this.getElement().querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._onOpenPopupClick);
  }

  _onOpenPopupClick() {
    this._removeOldPopup();

    this._body.classList.add(`hide-overflow`);
    this._popup = new _popup_popup_form__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement();
    Object(_render__WEBPACK_IMPORTED_MODULE_4__["renderComponent"])(this._body, this._popup);

    const popupFormContainer = this._popup.querySelector(`.film-details__inner`);
    Object(_render__WEBPACK_IMPORTED_MODULE_4__["renderComponent"])(popupFormContainer, new _popup_popup_form_top__WEBPACK_IMPORTED_MODULE_6__["default"](this._film));
    Object(_render__WEBPACK_IMPORTED_MODULE_4__["renderComponent"])(popupFormContainer, new _popup_popup_form_bottom__WEBPACK_IMPORTED_MODULE_7__["default"](this._film.comments));

    const popupCommentList = popupFormContainer.querySelector(`.film-details__comments-title`);
    Object(_render__WEBPACK_IMPORTED_MODULE_4__["renderComponent"])(popupCommentList, new _popup_popup_comment__WEBPACK_IMPORTED_MODULE_8__["default"](this._film.comments), _render__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].AFTEREND);

    const closeButton = this._popup.querySelector(`.film-details__close-btn`);
    closeButton.addEventListener(`click`, this._onClosePopupClick);
    this._body.addEventListener(`keydown`, this._onClosePopupKeydown);

  }

  _onClosePopupKeydown(evt) {
    if (evt.key === _consts__WEBPACK_IMPORTED_MODULE_2__["Keys"].ESCAPE) {
      this._onClosePopupClick();
    }
  }

  _onClosePopupClick() {
    this._popup.remove();
    this._body.removeEventListener(`keydown`, this._onClosePopupKeydown);
    this._body.classList.remove(`hide-overflow`);
  }

  _removeOldPopup() {
    const oldPopup = this._body.querySelector(`.film-details`);
    if (oldPopup) {
      oldPopup.remove();
    }
  }
}


/***/ }),

/***/ "./src/view/main/films/film-list-container.js":
/*!****************************************************!*\
  !*** ./src/view/main/films/film-list-container.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmListContainer; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractView */ "./src/view/abstractView.js");


const createMainFilmsListContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

class FilmListContainer extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMainFilmsListContainerTemplate();
  }
}


/***/ }),

/***/ "./src/view/main/films/film-list-header.js":
/*!*************************************************!*\
  !*** ./src/view/main/films/film-list-header.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmListHeader; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractView */ "./src/view/abstractView.js");


const createMainFilmListHeaderTemplate = (title, isMain) => {
  const addHidden = () => isMain ? `visually-hidden` : ``;

  return (
    `<h2 class="films-list__title ${addHidden()}">${title}</h2>`
  );
};

class FilmListHeader extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(title, isMain = false) {
    super();
    this._title = title;
    this._isMain = isMain;
  }

  getTemplate() {
    return createMainFilmListHeaderTemplate(this._title, this._isMain);
  }
}


/***/ }),

/***/ "./src/view/main/films/film-list.js":
/*!******************************************!*\
  !*** ./src/view/main/films/film-list.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmList; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractView */ "./src/view/abstractView.js");


const createFilmsListTemplate = (attr, isMain = false) => {
  const addExtra = () => !isMain ? `films-list--extra` : ``;

  return (
    `<section class="films-list ${addExtra()}" data-list="${attr}"></section>`
  );
};

class FilmList extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(attr, isMain = false) {
    super();
    this._attr = attr;
    this._isMain = isMain;
  }

  getTemplate() {
    return createFilmsListTemplate(this._attr, this._isMain);
  }
}


/***/ }),

/***/ "./src/view/main/films/show-more-button.js":
/*!*************************************************!*\
  !*** ./src/view/main/films/show-more-button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractView */ "./src/view/abstractView.js");


const createShowMoreButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

class ShowMoreButton extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._showMoreHandler = this._showMoreHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  _showMoreHandler(evt) {
    evt.preventDefault();
    this._callbacks.showMore();
  }

  setShowMoreHandler(callback) {
    this._callbacks.showMore = callback;
    this.getElement().addEventListener(`click`, this._showMoreHandler);
  }
}


/***/ }),

/***/ "./src/view/main/main-container.js":
/*!*****************************************!*\
  !*** ./src/view/main/main-container.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");


const createMainContainerTemplate = () => {
  return (
    `<section class="films"></section>`
  );
};

class MainContainer extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMainContainerTemplate();
  }
}


/***/ }),

/***/ "./src/view/main/no-films.js":
/*!***********************************!*\
  !*** ./src/view/main/no-films.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoFilms; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");


const createNoFilmsTemplate = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>`
  );
};

class NoFilms extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoFilmsTemplate();
  }
}


/***/ }),

/***/ "./src/view/nav/filter.js":
/*!********************************!*\
  !*** ./src/view/nav/filter.js ***!
  \********************************/
/*! exports provided: generateFilters, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../consts */ "./src/consts.js");



const initFilter = {
  [_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].ALL]: null,
  [_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].WATCHLIST]: 0,
  [_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].HISTORY]: 0,
  [_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].FAVORITES]: 0,
};

const generateFilters = (films) => films.reduce((acc, item) => {
  return {
    [_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].ALL]: null,
    [_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].WATCHLIST]: item.watchlist ? ++acc[_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].WATCHLIST] : acc[_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].WATCHLIST],
    [_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].HISTORY]: item.watched ? ++acc[_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].HISTORY] : acc[_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].HISTORY],
    [_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].FAVORITES]: item.favorite ? ++acc[_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].FAVORITES] : acc[_consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].FAVORITES],
  };
}, initFilter);


const generateFilter = (filter) => Object.entries(filter).map(([filterName, amountFilms]) => ({
  filter: filterName,
  amount: amountFilms,
}));

const createMainFilterTemplate = (filters) => {
  const filter = generateFilter(filters);

  const generateLinks = (navFilters) => navFilters.map((link) => (
    `<a href="#${link.filter}"
      class="main-navigation__item ${link.filter === _consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].ALL ? `main-navigation__item--active` : ``}">
      ${link.filter} ${link.filter !== _consts__WEBPACK_IMPORTED_MODULE_1__["Filters"].ALL ? `<span class="main-navigation__item-count">${link.amount}</span></a>` : ``}`
  )).join(``);

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${generateLinks(filter)}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

class Filter extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filters = initFilter) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createMainFilterTemplate(this._filters);
  }
}


/***/ }),

/***/ "./src/view/popup/popup-comment.js":
/*!*****************************************!*\
  !*** ./src/view/popup/popup-comment.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupComment; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");



const createPopupCommentTemplate = (comments) => {
  const markupComments = comments.map((comment) => (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${comment.comment}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${comment.author}</span>
          <span class="film-details__comment-day">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(comment.date).format(`YYYY/MM/DD HH:mm`)}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  )).join(``);

  return (
    `<ul class="film-details__comments-list">
      ${markupComments}
    </ul>`
  );
};

class PopupComment extends _abstractView__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(comments) {
    super();
    this._comments = comments;
  }

  getTemplate() {
    return this._comments.length ? createPopupCommentTemplate(this._comments) : ` `;
  }
}


/***/ }),

/***/ "./src/view/popup/popup-form-bottom.js":
/*!*********************************************!*\
  !*** ./src/view/popup/popup-form-bottom.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupFormBottom; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");


const createPopupFormBottomTemplate = (comments) => {
  return (
    `<div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>


        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>`
  );
};

class PopupFormBottom extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(comments) {
    super();
    this._comments = comments;
  }

  getTemplate() {
    return createPopupFormBottomTemplate(this._comments);
  }
}


/***/ }),

/***/ "./src/view/popup/popup-form-top.js":
/*!******************************************!*\
  !*** ./src/view/popup/popup-form-top.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupFormTop; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");




const createPopupFormTopTemplate = (film) => {
  const getIsActive = (isChecked) => isChecked ? `checked` : ``;

  return (
    `<div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${film.poster}" alt="${film.title}">

          <p class="film-details__age">${film.ageRating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${film.title}</h3>
              <p class="film-details__title-original">Original: ${film.title}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${film.rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${film.director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${film.writers.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${film.actors.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(film.releaseDate).format(`DD MMM YYYY`)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getFormattedRunTime"])(film.runtime)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${film.country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                ${film.genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(``)}
              </td>
            </tr>
          </table>

          <p class="film-details__film-description">${film.description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${getIsActive(film.watchlist)}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${getIsActive(film.watched)}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${getIsActive(film.favorite)}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>`
  );
};

class PopupFormTop extends _abstractView__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(film) {
    super();
    this._film = film;
  }

  getTemplate() {
    return createPopupFormTopTemplate(this._film);
  }
}


/***/ }),

/***/ "./src/view/popup/popup-form.js":
/*!**************************************!*\
  !*** ./src/view/popup/popup-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupForm; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");


const createPopupFormTemplate = () => {
  return (
    `<section class="film-details">
        <form class="film-details__inner" action="" method="get"></form>
    </section>`
  );
};

class PopupForm extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createPopupFormTemplate();
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractView */ "./src/view/abstractView.js");


const createMainSortTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

class Sort extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMainSortTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map