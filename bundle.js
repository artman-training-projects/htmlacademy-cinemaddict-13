/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs-random/index.min.js":
/*!************************************************!*\
  !*** ./node_modules/dayjs-random/index.min.js ***!
  \************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return(e,t,n)=>{n.between=(e,t)=>{const r=n(e).valueOf(),o=n(t).valueOf()-r,u=Math.floor(Math.random()*o+1),a=n(r+u);return n(a)},n.soon=(e=1,t=n())=>{const r=n(t),o=r.add(e,"day");return n.between(r,o)},n.recent=(e=1,t=n())=>{const r=n(t),o=r.subtract(e,"day");return n.between(o,r)},n.future=(e=1,t=n())=>{const r=n(t),o=r.add(e,"year");return n.between(r,o)},n.past=(e=1,t=n())=>{const r=n(t),o=r.subtract(e,"year");return n.between(o,r)}}}));

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFilmsFromServer": () => (/* binding */ getFilmsFromServer)
/* harmony export */ });
/* harmony import */ var _mock_films__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/films */ "./src/mock/films.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const Fraction = {
  FILL: 0.4,
  EMPTY: 0.2,
};

const films = (() => {
  const random = Math.random();

  if (random > Fraction.FILL) {
    return new Array((0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)(20, 15)).fill(``).map(_mock_films__WEBPACK_IMPORTED_MODULE_0__.getRandomizedFilm);
  }

  if (random > Fraction.EMPTY) {
    return [];
  }

  return false;
})();

const getFilmsFromServer = () => new Promise((resolve, reject) => {
  setTimeout(() => films ? resolve(films) : reject(new Error(`Упс! Загрузка не удалась`)), 2000);
});


/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filters": () => (/* binding */ Filters),
/* harmony export */   "Keys": () => (/* binding */ Keys),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "MAX_DESCRIPTION_LENGTH": () => (/* binding */ MAX_DESCRIPTION_LENGTH),
/* harmony export */   "Message": () => (/* binding */ Message),
/* harmony export */   "ShownFilms": () => (/* binding */ ShownFilms),
/* harmony export */   "Sorts": () => (/* binding */ Sorts),
/* harmony export */   "TagNames": () => (/* binding */ TagNames)
/* harmony export */ });
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

const Sorts = {
  DEFAULT: `Sort by default`,
  DATE: `Sort by date`,
  RATING: `Sort by rating`
};

const MAX_DESCRIPTION_LENGTH = 139;

const Keys = {
  ESCAPE: `Escape`,
  ENTER: `Enter`
};

const TagNames = {
  A: `A`,
  BUTTON: `BUTTON`,
  IMG: `IMG`
};

const Message = {
  NO_FILM: `There are no movies in our database`,
};


/***/ }),

/***/ "./src/mock/comment.js":
/*!*****************************!*\
  !*** ./src/mock/comment.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomizedComment": () => (/* binding */ getRandomizedComment)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs-random */ "./node_modules/dayjs-random/index.min.js");
/* harmony import */ var dayjs_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");




dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_random__WEBPACK_IMPORTED_MODULE_1___default()));

const commentAuthors = [`Tina Kuzmenko`, `Alex Khab`, `Artur Trifonov`, `Vladimir Art`];
const commentTexts = [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`];
const commentEmotions = [`smile`, `sleeping`, `puke`, `angry`];

const getRandomizedComment = () => ({
  id: (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)(),
  author: commentAuthors[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, commentAuthors.length - 1)],
  comment: commentTexts[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, commentTexts.length - 1)],
  date: dayjs__WEBPACK_IMPORTED_MODULE_0___default().recent(30).format(),
  emotion: commentEmotions[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, commentEmotions.length - 1)],
});


/***/ }),

/***/ "./src/mock/films.js":
/*!***************************!*\
  !*** ./src/mock/films.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomizedFilm": () => (/* binding */ getRandomizedFilm)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs-random */ "./node_modules/dayjs-random/index.min.js");
/* harmony import */ var dayjs_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment */ "./src/mock/comment.js");



dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_random__WEBPACK_IMPORTED_MODULE_1___default()));



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
  const filmTitle = filmTitles[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, filmTitles.length - 1)];

  return {
    "id": (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)(),
    "title": filmTitle,
    "titleOriginal": filmTitle,
    "poster": `images/posters/${filmTitle.toLocaleLowerCase().split(` `).join(`-`)}.jpg`,
    "description": filmDescriptions[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, filmDescriptions.length - 1)],
    "rating": (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, 9, true),
    "releaseDate": dayjs__WEBPACK_IMPORTED_MODULE_0___default().past(100).format(),
    "country": filmCountry[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, filmCountry.length - 1)],
    "runtime": (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(30, 120),
    "comments": new Array((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, 7)).fill(``).map(_comment__WEBPACK_IMPORTED_MODULE_3__.getRandomizedComment),
    "director": filmDirectors[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, filmDirectors.length - 1)],
    "writers": new Array((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, 2)).fill(``).map(() => filmWriters[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, filmWriters.length - 1)]),
    "actors": new Array((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(2, 4)).fill(``).map(() => filmActors[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, filmActors.length - 1)]),
    "genres": new Array((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, 3)).fill(``).map(() => filmGenres[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(1, filmGenres.length - 1)]),
    "ageRating": (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(0, 18),
    "watchlist": (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getTrueFalse)(),
    "watched": (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getTrueFalse)(),
    "favorite": (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getTrueFalse)(),
  };
};


/***/ }),

/***/ "./src/presenter/Cinemaddict.js":
/*!**************************************!*\
  !*** ./src/presenter/Cinemaddict.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cinemaddict)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./src/api/api.js");
/* harmony import */ var _FilmList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilmList */ "./src/presenter/FilmList.js");
/* harmony import */ var _view_header_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/header/profile */ "./src/view/header/profile.js");
/* harmony import */ var _view_nav_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/nav/filter */ "./src/view/nav/filter.js");
/* harmony import */ var _view_nav_stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/nav/stats */ "./src/view/nav/stats.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_main_films_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/main/films-loading */ "./src/view/main/films-loading.js");
/* harmony import */ var _view_main_main_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view/main/main-container */ "./src/view/main/main-container.js");
/* harmony import */ var _view_footer_statistic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../view/footer/statistic */ "./src/view/footer/statistic.js");













class Cinemaddict {
  constructor(entryNodes) {
    this._entryNodes = entryNodes;
    this._films = {};
    this._filmsUnsort = {};
    this._lists = {};

    this._profile = new _view_header_profile__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._filter = new _view_nav_filter__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._statistic = new _view_footer_statistic__WEBPACK_IMPORTED_MODULE_10__["default"]();
    this._loading = new _view_main_films_loading__WEBPACK_IMPORTED_MODULE_8__["default"]();

    this._stats = new _view_nav_stats__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this._sort = new _view_sort__WEBPACK_IMPORTED_MODULE_7__["default"](this);
    this._mainContainer = new _view_main_main_container__WEBPACK_IMPORTED_MODULE_9__["default"]();
  }

  init() {
    this._renderBaseTemplate();
    this._getFilms();
  }

  changeSort(type) {
    this._currentSortType = type;
    this._sortFilms();
    this._updateList();
  }

  _getFilms() {
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.getFilmsFromServer)()
    .then((films) => {
      if (films.length) {
        this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN] = films.slice();
        this._filmsUnsort = this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN].slice();

        this._getTopRatedFilms();
        this._getMostCommentedFilms();

        this._updateBaseTemplate();
        this._renderFilmsList();
      } else {
        this._loading.message = _consts__WEBPACK_IMPORTED_MODULE_0__.Message.NO_FILM;
      }
    })
    .catch((error) => {
      this._loading.message = error;
    });
  }

  _getTopRatedFilms() {
    this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.TOP_RATED] = this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN].slice()
      .sort((a, b) => b.rating - a.rating).slice(0, _consts__WEBPACK_IMPORTED_MODULE_0__.ShownFilms.EXTRA);
  }

  _getMostCommentedFilms() {
    this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MOST_COMMENTED] = this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN].slice()
      .sort((a, b) => b.comments.length - a.comments.length).slice(0, _consts__WEBPACK_IMPORTED_MODULE_0__.ShownFilms.EXTRA);
  }

  _renderBaseTemplate() {
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._entryNodes.MAIN, this._filter);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._entryNodes.MAIN, this._loading);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._entryNodes.FOOTER, this._statistic);
  }

  _renderFilmsList() {
    for (const type in _consts__WEBPACK_IMPORTED_MODULE_0__.List) {
      if (_consts__WEBPACK_IMPORTED_MODULE_0__.List.hasOwnProperty(type)) {
        this._lists[type] = new _FilmList__WEBPACK_IMPORTED_MODULE_3__["default"](_consts__WEBPACK_IMPORTED_MODULE_0__.List[type]);
        this._lists[type].films = this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List[type]];
        this._lists[type].render(this._mainContainer);
      }
    }
  }

  _renderProfile() {
    const watchedFilms = this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN].filter((film) => film.watched).length;
    this._profile.watchedFilms = watchedFilms;
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._entryNodes.HEADER, this._profile);
  }

  _updateBaseTemplate() {
    this._renderProfile();

    (0,_render__WEBPACK_IMPORTED_MODULE_1__.removeComponent)(this._loading);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._entryNodes.MAIN, this._sort);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._entryNodes.MAIN, this._mainContainer);

    this._sort.setHandlers();
    this._filter.filters = (0,_view_nav_filter__WEBPACK_IMPORTED_MODULE_5__.generateFilters)(this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN]);
    this._statistic.totalFilms = this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN].length;
  }

  _updateList() {
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.removeComponent)(this._mainContainer);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._entryNodes.MAIN, this._mainContainer);
    this._renderFilmsList();
  }

  _sortFilms() {
    switch (this._currentSortType) {
      case _consts__WEBPACK_IMPORTED_MODULE_0__.Sorts.DATE:
        this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN]
          .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
        break;
      case _consts__WEBPACK_IMPORTED_MODULE_0__.Sorts.RATING:
        this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN]
          .sort((a, b) => b.rating - a.rating);
        break;
      default:
        this._films[_consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN] = this._filmsUnsort.slice();
    }
  }
}


/***/ }),

/***/ "./src/presenter/FilmList.js":
/*!***********************************!*\
  !*** ./src/presenter/FilmList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmList)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _view_main_films_film_list_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/main/films/film-list-container */ "./src/view/main/films/film-list-container.js");
/* harmony import */ var _view_main_films_film_list_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/main/films/film-list-header */ "./src/view/main/films/film-list-header.js");
/* harmony import */ var _view_main_films_film_list_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/main/films/film-list-content */ "./src/view/main/films/film-list-content.js");
/* harmony import */ var _view_main_films_film_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/main/films/film-card */ "./src/view/main/films/film-card.js");
/* harmony import */ var _view_main_films_show_more_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/main/films/show-more-button */ "./src/view/main/films/show-more-button.js");









class FilmList {
  constructor(type) {
    this._type = type;
    this._isMain = type === _consts__WEBPACK_IMPORTED_MODULE_0__.List.MAIN;
    this._films = [];
    this._showedFilms = _consts__WEBPACK_IMPORTED_MODULE_0__.ShownFilms.MAIN;

    this._filmListContainer = null;
    this._filmListHeader = null;
    this._filmListContent = null;
  }

  set films(films) {
    this._films = films;
  }

  render(container) {
    this._renderListContainer(container);

    if (this._isMain) {
      this._renderFilms(this._films.slice(0, _consts__WEBPACK_IMPORTED_MODULE_0__.ShownFilms.MAIN));
      this._addShowMoreButton();
    } else {
      this._renderFilms();
    }
  }

  _renderListContainer(container) {
    this._filmListContainer = new _view_main_films_film_list_container__WEBPACK_IMPORTED_MODULE_2__["default"](this._type, this._isMain);
    this._filmListHeader = new _view_main_films_film_list_header__WEBPACK_IMPORTED_MODULE_3__["default"](this._type, this._isMain);
    this._filmListContent = new _view_main_films_film_list_content__WEBPACK_IMPORTED_MODULE_4__["default"]();

    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(container, this._filmListContainer);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._filmListContainer, this._filmListHeader);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._filmListContainer, this._filmListContent);
  }

  _renderFilms(films = this._films) {
    films.forEach((film) => {
      const filmCard = new _view_main_films_film_card__WEBPACK_IMPORTED_MODULE_5__["default"](film);
      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._filmListContent, filmCard);
      filmCard.setHandlers();
    });
  }

  _addShowMoreButton() {
    if (this._films.length > _consts__WEBPACK_IMPORTED_MODULE_0__.ShownFilms.MAIN) {
      this._showMoreButton = new _view_main_films_show_more_button__WEBPACK_IMPORTED_MODULE_6__["default"]();
      (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._filmListContainer, this._showMoreButton);

      this._showMoreButton.setShowMoreHandler(() => {
        const addShowFilms = this._showedFilms + _consts__WEBPACK_IMPORTED_MODULE_0__.ShownFilms.MAIN;
        this._renderFilms(this._films.slice(this._showedFilms, addShowFilms));
        this._showedFilms += _consts__WEBPACK_IMPORTED_MODULE_0__.ShownFilms.MAIN;

        if (this._films.length <= this._showedFilms) {
          (0,_render__WEBPACK_IMPORTED_MODULE_1__.removeComponent)(this._showMoreButton);
        }
      });
    }
  }
}


/***/ }),

/***/ "./src/presenter/FilmPopup.js":
/*!************************************!*\
  !*** ./src/presenter/FilmPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmPopup)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _view_popup_popup_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/popup/popup-form */ "./src/view/popup/popup-form.js");
/* harmony import */ var _view_popup_popup_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/popup/popup-info */ "./src/view/popup/popup-info.js");
/* harmony import */ var _view_popup_popup_comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/popup/popup-comments */ "./src/view/popup/popup-comments.js");







class FilmPopup {
  constructor() {
    if (!new.target.instance) {
      new.target.instance = this;
    } else {
      return new.target.instance;
    }

    this._container = document.body;
    this._film = null;
    this._isShown = false;

    this._updateCard = null;
    this._popupForm = null;
    this._popupInfo = null;
    this._popupComments = null;

    this._showPopup = this._showPopup.bind(this);
    this._updatePopup = this._updatePopup.bind(this);
    this._onClosePopupKeydown = this._onClosePopupKeydown.bind(this);
    this.close = this.close.bind(this);
  }

  set film(film) {
    this._film = film;
  }

  set updateCard(callback) {
    this._updateCard = callback;
  }

  open() {
    if (this._isShown) {
      this._updatePopup();
    } else {
      this._showPopup();
    }
  }

  close() {
    this._isShown = false;
    this._popupForm.getElement().remove();

    this._container.removeEventListener(`keydown`, this._onClosePopupKeydown);
    this._container.classList.remove(`hide-overflow`);
  }

  _showPopup() {
    this._isShown = true;
    this._renderPopup();

    this._container.addEventListener(`keydown`, this._onClosePopupKeydown);
    this._container.classList.add(`hide-overflow`);
  }

  _updatePopup() {
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.removeComponent)(this._popupForm);
    this._renderPopup();
  }

  _renderPopup() {
    this._popupForm = new _view_popup_popup_form__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._popupInfo = new _view_popup_popup_info__WEBPACK_IMPORTED_MODULE_3__["default"](this._film, this._updateCard);
    this._popupComments = new _view_popup_popup_comments__WEBPACK_IMPORTED_MODULE_4__["default"](this._film, this._updateCard);

    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._container, this._popupForm);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._popupForm, this._popupInfo);
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderComponent)(this._popupForm, this._popupComments);

    this._popupInfo.setHandlers();
    this._popupComments.setHandlers();
  }

  _onClosePopupKeydown(evt) {
    if (evt.key === _consts__WEBPACK_IMPORTED_MODULE_0__.Keys.ESCAPE) {
      this.close();
    }
  }
}


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "removeComponent": () => (/* binding */ removeComponent),
/* harmony export */   "renderComponent": () => (/* binding */ renderComponent),
/* harmony export */   "replaceElement": () => (/* binding */ replaceElement)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormattedRunTime": () => (/* binding */ getFormattedRunTime),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber),
/* harmony export */   "getTrueFalse": () => (/* binding */ getTrueFalse)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
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
    throw new Error(
        `Отсутствует имплементация абстрактного метода: getTemplate.`
    );
  }

  getElement() {
    if (!this._element) {
      this._element = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Statistic)
/* harmony export */ });
/* harmony import */ var _smartView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../smartView */ "./src/view/smartView.js");


const createFooterStatisticTemplate = (filmAmount) => {
  return (
    `<p>${filmAmount} movies inside</p>`
  );
};

class Statistic extends _smartView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(amount = 0) {
    super();
    this._amount = amount;
  }

  set totalFilms(amount) {
    this._amount = amount;
    this.updateElement();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var _smartView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../smartView */ "./src/view/smartView.js");


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

class Profile extends _smartView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(watchedFilms = 0) {
    super();
    this._watchedFilms = watchedFilms;
  }

  set watchedFilms(films) {
    this._watchedFilms = films;
    this.updateElement();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmsLoading)
/* harmony export */ });
/* harmony import */ var _smartView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../smartView */ "./src/view/smartView.js");


const createFilmsLoadingTemplate = (filmsStatus) => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title">${filmsStatus}</h2>
      </section>
    </section>`
  );
};

class FilmsLoading extends _smartView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filmsStatus = `Loading...`) {
    super();
    this._filmsStatus = filmsStatus;
  }

  set message(str) {
    this._filmsStatus = str;
    this.updateElement();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmCard)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../consts */ "./src/consts.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ "./src/utils.js");
/* harmony import */ var _smartView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../smartView */ "./src/view/smartView.js");
/* harmony import */ var _presenter_FilmPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../presenter/FilmPopup */ "./src/presenter/FilmPopup.js");







const createFilmCardTemplate = (film) => {
  const showDescription = (description) => description.length >= _consts__WEBPACK_IMPORTED_MODULE_1__.MAX_DESCRIPTION_LENGTH ? `${description.slice(0, _consts__WEBPACK_IMPORTED_MODULE_1__.MAX_DESCRIPTION_LENGTH)}...` : description;
  const setActiveClass = (isChecked) => isChecked ? `film-card__controls-item--active` : ``;

  return (
    `<article class="film-card" data-film="${film.id}">
      <h3 class="film-card__title">${film.title}</h3>
      <p class="film-card__rating">${film.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(film.releaseDate).format(`YYYY`)}</span>
        <span class="film-card__duration">${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getFormattedRunTime)(film.runtime)}</span>
        <span class="film-card__genre">${film.genres[0]}</span>
      </p>
      <img src=${film.poster} alt=${film.title} class="film-card__poster">
      <p class="film-card__description">${showDescription(film.description)}</p>
      <a class="film-card__comments">${film.comments.length} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${setActiveClass(film.watchlist)}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${setActiveClass(film.watched)}" type="button">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${setActiveClass(film.favorite)}" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
};

class FilmCard extends _smartView__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(film) {
    super();
    this._film = film;

    this._updateCard = this._updateCard.bind(this);
    this._openPopupHandler = this._openPopupHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  setHandlers() {
    this._setOpenPopupHandlers();
    this._setControlsHandlers();
  }

  _updateCard() {
    this.updateElement();
    this.setHandlers();
  }

  _setOpenPopupHandlers() {
    this._popup = new _presenter_FilmPopup__WEBPACK_IMPORTED_MODULE_4__["default"]();

    this.getElement().querySelector(`.film-card__title`)
      .addEventListener(`click`, this._openPopupHandler);

    this.getElement().querySelector(`.film-card__poster`)
      .addEventListener(`click`, this._openPopupHandler);

    this.getElement().querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._openPopupHandler);
  }

  _setControlsHandlers() {
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._film.watchlist = !this._film.watchlist;
        this._updateCard();
      });

    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._film.watched = !this._film.watched;
        this._updateCard();
      });

    this.getElement().querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._film.favorite = !this._film.favorite;
        this._updateCard();
      });
  }

  _openPopupHandler() {
    this._popup.film = this._film;
    this._popup.updateCard = this._updateCard;
    this._popup.open();
  }
}


/***/ }),

/***/ "./src/view/main/films/film-list-container.js":
/*!****************************************************!*\
  !*** ./src/view/main/films/film-list-container.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmListContainer)
/* harmony export */ });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractView */ "./src/view/abstractView.js");


const createFilmsListTemplate = (attr, isMain = false) => {
  const addExtra = () => !isMain ? `films-list--extra` : ``;

  return (
    `<section class="films-list ${addExtra()}" data-list="${attr}"></section>`
  );
};

class FilmListContainer extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./src/view/main/films/film-list-content.js":
/*!**************************************************!*\
  !*** ./src/view/main/films/film-list-content.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmListContent)
/* harmony export */ });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../abstractView */ "./src/view/abstractView.js");


const createMainFilmsListContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

class FilmListContent extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMainFilmsListContainerTemplate();
  }
}


/***/ }),

/***/ "./src/view/main/films/film-list-header.js":
/*!*************************************************!*\
  !*** ./src/view/main/films/film-list-header.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilmListHeader)
/* harmony export */ });
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

/***/ "./src/view/main/films/show-more-button.js":
/*!*************************************************!*\
  !*** ./src/view/main/films/show-more-button.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowMoreButton)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainer)
/* harmony export */ });
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

/***/ "./src/view/nav/filter.js":
/*!********************************!*\
  !*** ./src/view/nav/filter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filter),
/* harmony export */   "generateFilters": () => (/* binding */ generateFilters)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ "./src/consts.js");
/* harmony import */ var _smartView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../smartView */ "./src/view/smartView.js");



const initFilter = {
  [_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.ALL]: null,
  [_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.WATCHLIST]: 0,
  [_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.HISTORY]: 0,
  [_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.FAVORITES]: 0,
};

const generateFilters = (films) => films.reduce((acc, item) => {
  return {
    [_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.ALL]: null,
    [_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.WATCHLIST]: item.watchlist ? ++acc[_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.WATCHLIST] : acc[_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.WATCHLIST],
    [_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.HISTORY]: item.watched ? ++acc[_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.HISTORY] : acc[_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.HISTORY],
    [_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.FAVORITES]: item.favorite ? ++acc[_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.FAVORITES] : acc[_consts__WEBPACK_IMPORTED_MODULE_0__.Filters.FAVORITES],
  };
}, initFilter);


const generateFilter = (filter) => Object.entries(filter).map(([filterName, amountFilms]) => ({
  name: filterName,
  amount: amountFilms,
}));

const createMainFilterTemplate = (filters) => {
  const filter = generateFilter(filters);

  const generateLinks = (navFilters) => navFilters.map((navFilter) => (
    `<a href="#${navFilter.name}"
      class="main-navigation__item ${navFilter.name === _consts__WEBPACK_IMPORTED_MODULE_0__.Filters.ALL ? `main-navigation__item--active` : ``}">
      ${navFilter.name} ${navFilter.name !== _consts__WEBPACK_IMPORTED_MODULE_0__.Filters.ALL ? `<span class="main-navigation__item-count">${navFilter.amount}</span></a>` : ``}`
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

class Filter extends _smartView__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(filters = initFilter) {
    super();
    this._filters = filters;
  }

  set filters(filters) {
    this._filters = filters;
    this.updateElement();
  }

  getTemplate() {
    return createMainFilterTemplate(this._filters);
  }
}


/***/ }),

/***/ "./src/view/nav/stats.js":
/*!*******************************!*\
  !*** ./src/view/nav/stats.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stats)
/* harmony export */ });
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractView */ "./src/view/abstractView.js");


const createMainStatisticTemplate = () => {
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

class Stats extends _abstractView__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMainStatisticTemplate();
  }
}


/***/ }),

/***/ "./src/view/popup/popup-comments.js":
/*!******************************************!*\
  !*** ./src/view/popup/popup-comments.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupComments)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../consts */ "./src/consts.js");
/* harmony import */ var _smartView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../smartView */ "./src/view/smartView.js");






const Emojis = {
  SMILE: `smile`,
  SLEEPING: `sleeping`,
  PUKE: `puke`,
  ANGRY: `angry`
};

const createPopupCommentsTemplate = (oldData, currentData) => {
  const markupComments = oldData.map((data) => (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${data.emotion}.png" width="55" height="55" alt="emoji-${data.emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${data.comment}</p>
        <p class="film-details__comment-info" data-comment="${data.id}">
          <span class="film-details__comment-author">${data.author}</span>
          <span class="film-details__comment-day">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(data.date).format(`YYYY/MM/DD HH:mm`)}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  )).join(``);

  const markupEmoji = currentData.emotion
    ? `<img src="images/emoji/${currentData.emotion}.png" width="55" height="55" alt="emoji-${currentData.emotion}">`
    : ``;

  const isActiveEmoji = (emoji) => currentData.emotion === emoji ? `checked` : ``;

  const markupInputs = Object.values(Emojis).map((emoji) => (
    `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}" ${isActiveEmoji(emoji)}>
    <label class="film-details__emoji-label" for="emoji-${emoji}" data-emoji="${emoji}">
      <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji-${emoji}">
    </label>`
  )).join(``);

  const isCommentText = currentData.comment ? currentData.comment : ``;

  return (
    `<div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${oldData.length}</span></h3>

        <ul class="film-details__comments-list">
          ${markupComments}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label">
            ${markupEmoji}
          </div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${isCommentText}</textarea>
          </label>

          <div class="film-details__emoji-list">
            ${markupInputs}
          </div>
        </div>
      </section>
    </div>`
  );
};

class PopupComments extends _smartView__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(film, updateCard) {
    super();
    this._film = film;
    this._updateCard = updateCard;
    this._currentData = {};

    this._updateComments = this._updateComments.bind(this);
  }

  set film(film) {
    this._film = film;
    this.updateElement();
  }

  getTemplate() {
    return createPopupCommentsTemplate(this._film.comments, this._currentData);
  }

  setHandlers() {
    this._setChoiceEmoji();
    this._setTextInputHandler();
    this._setSendCommentHandler();
    this._setDeleteCommentHandler();
  }

  _updateComments() {
    this._updateCard();
    this.updateElement();
    this.setHandlers();
  }

  _setChoiceEmoji() {
    this.getElement().querySelector(`.film-details__emoji-list`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();

        if (evt.target.tagName !== _consts__WEBPACK_IMPORTED_MODULE_1__.TagNames.IMG) {
          return;
        }

        const emoji = evt.target.parentElement.dataset.emoji;
        this._currentData.emotion = emoji;
        this._updateComments();
      });
  }

  _setTextInputHandler() {
    this.getElement().querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, (evt) => {
        const inputText = evt.target.value;
        this._currentData.comment = inputText;
      });
  }

  _setSendCommentHandler() {
    this.getElement().querySelector(`.film-details__comment-input`)
      .addEventListener(`keydown`, (evt) => {
        if (evt.key === _consts__WEBPACK_IMPORTED_MODULE_1__.Keys.ENTER) {
          evt.preventDefault();

          this._film.comments.push({
            id: (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)(),
            author: `Some author`,
            comment: this._currentData.comment,
            date: new Date(),
            emotion: this._currentData.emotion
          });

          this._updateComments();
        }
      });
  }

  _setDeleteCommentHandler() {
    this.getElement().querySelector(`.film-details__comments-list`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();

        if (evt.target.tagName !== _consts__WEBPACK_IMPORTED_MODULE_1__.TagNames.BUTTON) {
          return;
        }

        const commentId = evt.target.parentElement.dataset.comment;
        const finedCommentIndex = this._film.comments.findIndex((comment) => comment.id === commentId);
        this._film.comments.splice(finedCommentIndex, 1);
        this._updateComments();
      });
  }
}


/***/ }),

/***/ "./src/view/popup/popup-form.js":
/*!**************************************!*\
  !*** ./src/view/popup/popup-form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupForm)
/* harmony export */ });
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

/***/ "./src/view/popup/popup-info.js":
/*!**************************************!*\
  !*** ./src/view/popup/popup-info.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupInfo)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _smartView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../smartView */ "./src/view/smartView.js");
/* harmony import */ var _presenter_FilmPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../presenter/FilmPopup */ "./src/presenter/FilmPopup.js");






const createPopupInfoTemplate = (film) => {
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
              <td class="film-details__cell">${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getFormattedRunTime)(film.runtime)}</td>
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

class PopupInfo extends _smartView__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(film, updateCard) {
    super();
    this._film = film;
    this._updateCard = updateCard;
    this._popup = new _presenter_FilmPopup__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  set film(film) {
    this._film = film;
    this.updateElement();
  }

  getTemplate() {
    return createPopupInfoTemplate(this._film);
  }

  setHandlers() {
    this._setClosePopupButtonHandler();
    this._setControlsHandlers();
  }

  _updateInfo() {
    this._updateCard();
    this.updateElement();
    this.setHandlers();
  }

  _setClosePopupButtonHandler() {
    this.getElement().querySelector(`.film-details__close-btn`)
     .addEventListener(`click`, () => this._popup.close());
  }

  _setControlsHandlers() {
    this.getElement().querySelector(`.film-details__control-label--watchlist`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._film.watchlist = !this._film.watchlist;
        this._updateInfo();
      });

    this.getElement().querySelector(`.film-details__control-label--watched`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._film.watched = !this._film.watched;
        this._updateInfo();
      });

    this.getElement().querySelector(`.film-details__control-label--favorite`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._film.favorite = !this._film.favorite;
        this._updateInfo();
      });
  }
}


/***/ }),

/***/ "./src/view/smartView.js":
/*!*******************************!*\
  !*** ./src/view/smartView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartView)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _abstractView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractView */ "./src/view/abstractView.js");



class SmartView extends _abstractView__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super();

    this._newElement = null;
  }

  updateElement() {
    this._newElement = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());

    if (this._element) {
      (0,_render__WEBPACK_IMPORTED_MODULE_0__.replaceElement)(this._element, this._newElement);
    }

    this._element = this._newElement;
    this._newElement = null;
  }

  // restoreHandlers() {
  //   throw new Error(`Abstract method not implemented: resetHandlers`);
  // }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sort)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var _smartView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smartView */ "./src/view/smartView.js");



const createMainSortTemplate = (currentSortType) => {
  const setActiveClass = (type) => currentSortType === type ? `sort__button--active` : ``;

  const generateLinks = () => Object.values(_consts__WEBPACK_IMPORTED_MODULE_0__.Sorts).map((sortType) => (
    `<li><a href="#" class="sort__button ${setActiveClass(sortType)}" data-sort-type="${sortType}">${sortType}</a></li>`
  )).join(``);

  return (
    `<ul class="sort">
      ${generateLinks()}
    </ul>`
  );
};

class Sort extends _smartView__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(appInstance, sortType = _consts__WEBPACK_IMPORTED_MODULE_0__.Sorts.DEFAULT) {
    super();
    this._appInstance = appInstance;
    this._sortType = sortType;

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createMainSortTemplate(this._sortType);
  }

  setHandlers() {
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }

  _updateSort() {
    this.updateElement();
    this.setHandlers();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== _consts__WEBPACK_IMPORTED_MODULE_0__.TagNames.A) {
      return;
    }

    const selectedSortType = evt.target.dataset.sortType;

    if (this._sortType === selectedSortType) {
      return;
    }

    evt.preventDefault();
    this._sortType = selectedSortType;
    this._appInstance.changeSort(selectedSortType);
    this._updateSort();
  }
}


/***/ }),

/***/ "./node_modules/nanoid/index.dev.js":
/*!******************************************!*\
  !*** ./node_modules/nanoid/index.dev.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

if (true) {
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID.'
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
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * size) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenter_Cinemaddict__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenter/Cinemaddict */ "./src/presenter/Cinemaddict.js");


const EntryNodes = {
  BODY: document.body,
  HEADER: document.body.querySelector(`.header`),
  MAIN: document.body.querySelector(`.main`),
  FOOTER: document.body.querySelector(`.footer__statistics`),
};

const cinemaddict = new _presenter_Cinemaddict__WEBPACK_IMPORTED_MODULE_0__["default"](EntryNodes);
cinemaddict.init();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map