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

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: RenderPosition, ShownFilms, List, Nav, MAX_DESCRIPTION_LENGTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShownFilms", function() { return ShownFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DESCRIPTION_LENGTH", function() { return MAX_DESCRIPTION_LENGTH; });
const RenderPosition = {
  BEFOREEND: `beforeend`,
};

const ShownFilms = {
  MAIN: 5,
  EXTRA: 2
};

const List = {
  MAIN: `All movies. Upcoming`,
  TOP_RATED: `Top rated`,
  MOST_COMMENTED: `Most commented`
};

const Nav = {
  ALL: `All movies`,
  WATCHLIST: `Watchlist`,
  HISTORY: `History`,
  FAVORITES: `Favorites`,
};

const MAX_DESCRIPTION_LENGTH = 139;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_header_header_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/header/header-profile */ "./src/view/header/header-profile.js");
/* harmony import */ var _view_main_controls_main_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/main/controls/main-nav */ "./src/view/main/controls/main-nav.js");
/* harmony import */ var _view_main_controls_main_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/main/controls/main-sort */ "./src/view/main/controls/main-sort.js");
/* harmony import */ var _view_footer_footer_statistic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/footer/footer-statistic */ "./src/view/footer/footer-statistic.js");
/* harmony import */ var _view_main_controls_main_statistic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/main/controls/main-statistic */ "./src/view/main/controls/main-statistic.js");
/* harmony import */ var _view_main_films_main_films_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/main/films/main-films-loading */ "./src/view/main/films/main-films-loading.js");
/* harmony import */ var _view_main_films_main_films__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/main/films/main-films */ "./src/view/main/films/main-films.js");
/* harmony import */ var _view_main_films_main_film_list_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/main/films/main-film-list-header */ "./src/view/main/films/main-film-list-header.js");
/* harmony import */ var _view_main_films_main_film_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/main/films/main-film-list */ "./src/view/main/films/main-film-list.js");
/* harmony import */ var _view_main_films_main_film_list_more__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/main/films/main-film-list-more */ "./src/view/main/films/main-film-list-more.js");
/* harmony import */ var _view_main_films_main_film_list_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/main/films/main-film-list-container */ "./src/view/main/films/main-film-list-container.js");
/* harmony import */ var _view_main_films_main_film_list_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/main/films/main-film-list-card */ "./src/view/main/films/main-film-list-card.js");
/* harmony import */ var _view_popup_popup_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/popup/popup-form */ "./src/view/popup/popup-form.js");
/* harmony import */ var _view_popup_popup_form_top__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/popup/popup-form-top */ "./src/view/popup/popup-form-top.js");
/* harmony import */ var _view_popup_popup_form_bottom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/popup/popup-form-bottom */ "./src/view/popup/popup-form-bottom.js");
/* harmony import */ var _view_popup_popup_comment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/popup/popup-comment */ "./src/view/popup/popup-comment.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _mock_films__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mock/films */ "./src/mock/films.js");





















const films = new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_17__["getRandomNumber"])(20, 15)).fill(``).map(_mock_films__WEBPACK_IMPORTED_MODULE_18__["getRandomizedFilm"]);
const filmsTopRated = [...films].sort((a, b) => a.rating < b.rating).slice(0, _consts__WEBPACK_IMPORTED_MODULE_16__["ShownFilms"].EXTRA);
const filmsMostCommented = [...films].sort((a, b) => a.comments.length < b.comments.length).slice(0, _consts__WEBPACK_IMPORTED_MODULE_16__["ShownFilms"].EXTRA);
const filteredFilms = Object(_utils__WEBPACK_IMPORTED_MODULE_17__["getFilteredFilms"])(films);

const render = (container, template, place = _consts__WEBPACK_IMPORTED_MODULE_16__["RenderPosition"].BEFOREEND) => {
  container.insertAdjacentHTML(place, template);
};

const renderFilms = (container, films) => {
  const template = films.map(_view_main_films_main_film_list_card__WEBPACK_IMPORTED_MODULE_11__["createMainFilmListCard"]).join(``);
  render(container, template);
};

const renderListContainer = (container, listType, isMain = false) => {
  render(container, Object(_view_main_films_main_film_list__WEBPACK_IMPORTED_MODULE_8__["createMainFilmsList"])(listType, isMain));

  const mainContainer = container.querySelector(`[data-list="${listType}"]`);
  render(mainContainer, Object(_view_main_films_main_film_list_header__WEBPACK_IMPORTED_MODULE_7__["createMainFilmListHeader"])(listType, isMain));
  render(mainContainer, Object(_view_main_films_main_film_list_container__WEBPACK_IMPORTED_MODULE_10__["createMainFilmsListContainer"])());

  return mainContainer.querySelector(`.films-list__container`);
};

// popup render
// render(document.body, createPopupForm());
// const popupFormContainer = document.body.querySelector(`.film-details__inner`);
// render(popupFormContainer, createPopupFormTop(films[0]));
// render(popupFormContainer, createPopupFormBottom(films[0].comments));
// const popupCommentList = popupFormContainer.querySelector(`.film-details__comments-list`);
// render(popupCommentList, createPopupComment(films[0].comments));


/* Start App */
const headerSection = document.body.querySelector(`.header`);
const mainSection = document.body.querySelector(`.main`);
const footerStatisticSection = document.body.querySelector(`.footer__statistics`);

render(headerSection, Object(_view_header_header_profile__WEBPACK_IMPORTED_MODULE_0__["createHeaderProfile"])());
render(mainSection, Object(_view_main_controls_main_nav__WEBPACK_IMPORTED_MODULE_1__["createMainNav"])(filteredFilms));
render(mainSection, Object(_view_main_controls_main_sort__WEBPACK_IMPORTED_MODULE_2__["createMainSort"])());
render(mainSection, Object(_view_main_films_main_films__WEBPACK_IMPORTED_MODULE_6__["createMainFilms"])());
render(footerStatisticSection, Object(_view_footer_footer_statistic__WEBPACK_IMPORTED_MODULE_3__["createFooterStatistic"])(films.length));

const mainFilmsContainer = mainSection.querySelector(`.films`);
const mainListContainer = renderListContainer(mainFilmsContainer, _consts__WEBPACK_IMPORTED_MODULE_16__["List"].MAIN, true);
const topRatedListContainer = renderListContainer(mainFilmsContainer, _consts__WEBPACK_IMPORTED_MODULE_16__["List"].TOP_RATED);
const mostCommentedListContainer = renderListContainer(mainFilmsContainer, _consts__WEBPACK_IMPORTED_MODULE_16__["List"].MOST_COMMENTED);

renderFilms(mainListContainer, films.slice(0, _consts__WEBPACK_IMPORTED_MODULE_16__["ShownFilms"].MAIN));
renderFilms(topRatedListContainer, filmsTopRated);
renderFilms(mostCommentedListContainer, filmsMostCommented);

// show-more btn
render(mainListContainer.parentNode, Object(_view_main_films_main_film_list_more__WEBPACK_IMPORTED_MODULE_9__["createMainFilmsListMore"])());
const showMoreBtn = mainFilmsContainer.querySelector(`.films-list__show-more`);
showMoreBtn.addEventListener(`click`, () => {
  const countShownFilms = () => mainListContainer.querySelectorAll(`.film-card`).length;
  renderFilms(mainListContainer, films.slice(countShownFilms(), countShownFilms() + _consts__WEBPACK_IMPORTED_MODULE_16__["ShownFilms"].MAIN));
  (() => films.length === countShownFilms() && showMoreBtn.remove())();
});




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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomNumber, getTrueFalse, getFormattedRunTime, getFilteredFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrueFalse", function() { return getTrueFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedRunTime", function() { return getFormattedRunTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilteredFilms", function() { return getFilteredFilms; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.js");


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

const getFilteredFilms = (films) => ({
  [_consts__WEBPACK_IMPORTED_MODULE_0__["Nav"].ALL]: films,
  [_consts__WEBPACK_IMPORTED_MODULE_0__["Nav"].WATCHLIST]: films.filter((film) => film.watchlist),
  [_consts__WEBPACK_IMPORTED_MODULE_0__["Nav"].HISTORY]: films.filter((film) => film.watched),
  [_consts__WEBPACK_IMPORTED_MODULE_0__["Nav"].FAVORITES]: films.filter((film) => film.favorite),
});


/***/ }),

/***/ "./src/view/footer/footer-statistic.js":
/*!*********************************************!*\
  !*** ./src/view/footer/footer-statistic.js ***!
  \*********************************************/
/*! exports provided: createFooterStatistic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFooterStatistic", function() { return createFooterStatistic; });
const createFooterStatistic = (filmAmount) => {
  return (
    `<p>${filmAmount} movies inside</p>`
  );
};


/***/ }),

/***/ "./src/view/header/header-profile.js":
/*!*******************************************!*\
  !*** ./src/view/header/header-profile.js ***!
  \*******************************************/
/*! exports provided: createHeaderProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeaderProfile", function() { return createHeaderProfile; });
const createHeaderProfile = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">Sci-Fighter</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};


/***/ }),

/***/ "./src/view/main/controls/main-nav.js":
/*!********************************************!*\
  !*** ./src/view/main/controls/main-nav.js ***!
  \********************************************/
/*! exports provided: createMainNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainNav", function() { return createMainNav; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../consts */ "./src/consts.js");


// TODO: filterMap
const generateFilter = (filter) => Object.entries(filter).map(([filterName, amountFilms]) => ({
  filter: filterName,
  amount: amountFilms,
}));

const createMainNav = (filteredFilms, active = _consts__WEBPACK_IMPORTED_MODULE_0__["Nav"].ALL) => {
  const filters = generateFilter(filteredFilms);

  const generateLinks = (navs) => navs.map((nav) => (
    `<a href="#${nav.filter}"
      class="main-navigation__item ${active === nav.filter ? `main-navigation__item--active` : ``}">
      ${nav.filter} ${nav.filter === _consts__WEBPACK_IMPORTED_MODULE_0__["Nav"].ALL ? `` : `<span class="main-navigation__item-count">${nav.amount.length}</span></a>`}`
  )).join(``);

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${generateLinks(filters)}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};


/***/ }),

/***/ "./src/view/main/controls/main-sort.js":
/*!*********************************************!*\
  !*** ./src/view/main/controls/main-sort.js ***!
  \*********************************************/
/*! exports provided: createMainSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainSort", function() { return createMainSort; });
const createMainSort = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};


/***/ }),

/***/ "./src/view/main/controls/main-statistic.js":
/*!**************************************************!*\
  !*** ./src/view/main/controls/main-statistic.js ***!
  \**************************************************/
/*! exports provided: createMainStatistic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainStatistic", function() { return createMainStatistic; });
const createMainStatistic = () => {
  return (
    `<section class="statistic">
      <p class="statistic__rank">
        Your rank
        <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
        <span class="statistic__rank-label">Sci-Fighter</span>
      </p>

      <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
        <p class="statistic__filters-description">Show stats:</p>

        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
        <label for="statistic-all-time" class="statistic__filters-label">All time</label>

        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
        <label for="statistic-today" class="statistic__filters-label">Today</label>

        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
        <label for="statistic-week" class="statistic__filters-label">Week</label>

        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
        <label for="statistic-month" class="statistic__filters-label">Month</label>

        <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
        <label for="statistic-year" class="statistic__filters-label">Year</label>
      </form>

      <ul class="statistic__text-list">
        <li class="statistic__text-item">
          <h4 class="statistic__item-title">You watched</h4>
          <p class="statistic__item-text">22 <span class="statistic__item-description">movies</span></p>
        </li>
        <li class="statistic__text-item">
          <h4 class="statistic__item-title">Total duration</h4>
          <p class="statistic__item-text">130 <span class="statistic__item-description">h</span> 22 <span class="statistic__item-description">m</span></p>
        </li>
        <li class="statistic__text-item">
          <h4 class="statistic__item-title">Top genre</h4>
          <p class="statistic__item-text">Sci-Fi</p>
        </li>
      </ul>

      <div class="statistic__chart-wrap">
        <canvas class="statistic__chart" width="1000"></canvas>
      </div>

    </section>`
  );
};


/***/ }),

/***/ "./src/view/main/films/main-film-list-card.js":
/*!****************************************************!*\
  !*** ./src/view/main/films/main-film-list-card.js ***!
  \****************************************************/
/*! exports provided: createMainFilmListCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainFilmListCard", function() { return createMainFilmListCard; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/utils.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../consts */ "./src/consts.js");




const createMainFilmListCard = (film) => {
  const showDescription = (description) => description.length >= _consts__WEBPACK_IMPORTED_MODULE_2__["MAX_DESCRIPTION_LENGTH"] ? `${description.slice(0, _consts__WEBPACK_IMPORTED_MODULE_2__["MAX_DESCRIPTION_LENGTH"])}...` : description;
  const getIsActive = (isChecked) => isChecked && `film-card__controls-item--active`;

  return (
    `<article class="film-card" data-film="${film.id}">
      <h3 class="film-card__title">${film.title}</h3>
      <p class="film-card__rating">${film.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(film.releaseDate).format(`YYYY`)}</span>
        <span class="film-card__duration">${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFormattedRunTime"])(film.runtime)}</span>
        <span class="film-card__genre">${film.genres[0]}</span>
      </p>
      <img src=${film.poster} alt="" class="film-card__poster">
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


/***/ }),

/***/ "./src/view/main/films/main-film-list-container.js":
/*!*********************************************************!*\
  !*** ./src/view/main/films/main-film-list-container.js ***!
  \*********************************************************/
/*! exports provided: createMainFilmsListContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainFilmsListContainer", function() { return createMainFilmsListContainer; });
const createMainFilmsListContainer = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};


/***/ }),

/***/ "./src/view/main/films/main-film-list-header.js":
/*!******************************************************!*\
  !*** ./src/view/main/films/main-film-list-header.js ***!
  \******************************************************/
/*! exports provided: createMainFilmListHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainFilmListHeader", function() { return createMainFilmListHeader; });
const createMainFilmListHeader = (title, isMain = false) => {
  const addHidden = () => isMain ? `visually-hidden` : ``;

  return (
    `<h2 class="films-list__title ${addHidden()}">${title}</h2>`
  );
};


/***/ }),

/***/ "./src/view/main/films/main-film-list-more.js":
/*!****************************************************!*\
  !*** ./src/view/main/films/main-film-list-more.js ***!
  \****************************************************/
/*! exports provided: createMainFilmsListMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainFilmsListMore", function() { return createMainFilmsListMore; });
const createMainFilmsListMore = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};


/***/ }),

/***/ "./src/view/main/films/main-film-list.js":
/*!***********************************************!*\
  !*** ./src/view/main/films/main-film-list.js ***!
  \***********************************************/
/*! exports provided: createMainFilmsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainFilmsList", function() { return createMainFilmsList; });
const createMainFilmsList = (attr, isMain = false) => {
  const addExtra = () => !isMain ? `films-list--extra` : ``;

  return (
    `<section class="films-list ${addExtra()}" data-list="${attr}"></section>`
  );
};


/***/ }),

/***/ "./src/view/main/films/main-films-loading.js":
/*!***************************************************!*\
  !*** ./src/view/main/films/main-films-loading.js ***!
  \***************************************************/
/*! exports provided: createMainFilmsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainFilmsLoading", function() { return createMainFilmsLoading; });
const createMainFilmsLoading = () => {
  return (
    `<h2 class="films-list__title">Loading...</h2>`
  );
};


/***/ }),

/***/ "./src/view/main/films/main-films.js":
/*!*******************************************!*\
  !*** ./src/view/main/films/main-films.js ***!
  \*******************************************/
/*! exports provided: createMainFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainFilms", function() { return createMainFilms; });
const createMainFilms = () => {
  return (
    `<section class="films"></section>`
  );
};


/***/ }),

/***/ "./src/view/popup/popup-comment.js":
/*!*****************************************!*\
  !*** ./src/view/popup/popup-comment.js ***!
  \*****************************************/
/*! exports provided: createPopupComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopupComment", function() { return createPopupComment; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const createPopupComment = (comments) => {
  return comments.map((comment) => (
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
};


/***/ }),

/***/ "./src/view/popup/popup-form-bottom.js":
/*!*********************************************!*\
  !*** ./src/view/popup/popup-form-bottom.js ***!
  \*********************************************/
/*! exports provided: createPopupFormBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopupFormBottom", function() { return createPopupFormBottom; });
const createPopupFormBottom = (comments) => {
  return (
    `<div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list"></ul>

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


/***/ }),

/***/ "./src/view/popup/popup-form-top.js":
/*!******************************************!*\
  !*** ./src/view/popup/popup-form-top.js ***!
  \******************************************/
/*! exports provided: createPopupFormTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopupFormTop", function() { return createPopupFormTop; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");



const createPopupFormTop = (film) => {
  const getIsActive = (isChecked) => isChecked && `checked`;

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
              <td class="film-details__cell">${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFormattedRunTime"])(film.runtime)}</td>
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


/***/ }),

/***/ "./src/view/popup/popup-form.js":
/*!**************************************!*\
  !*** ./src/view/popup/popup-form.js ***!
  \**************************************/
/*! exports provided: createPopupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopupForm", function() { return createPopupForm; });
const createPopupForm = () => {
  return (
    `<section class="film-details">
        <form class="film-details__inner" action="" method="get">

        </form>
    </section>`
  );
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map