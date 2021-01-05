import {List, Message, ShownFilms} from "../consts";
import {getFilmsFromServer} from "../api/api";
import Film from "../api/film";
import {removeComponent, renderComponent} from "../render";

import FilmList from "./FilmList";
import Profile from "../view/header/profile";
import Filter, {generateFilters} from "../view/nav/filter";
import Stats from '../view/nav/stats';
import Sort from "../view/sort";
import FilmsLoading from "../view/main/films-loading";
import MainContainer from "../view/main/main-container";
import Statistic from "../view/footer/statistic";

export default class Cinemaddict {
  constructor(entryNodes) {
    this._entryNodes = entryNodes;
    this._films = {};
    this._lists = {};

    this._profile = new Profile();
    this._filter = new Filter();
    this._statistic = new Statistic();
    this._loading = new FilmsLoading();

    this._stats = new Stats();
    this._sort = new Sort();
    this._mainContainer = new MainContainer();
  }

  init() {
    this._renderBaseTemplate();

    getFilmsFromServer()
    .then((films) => {
      if (films.length) {
        this._films[List.MAIN] = films.slice().map((film) => new Film(film));
        this._getTopRatedFilms();
        this._getMostCommentedFilms();

        this._updateBaseTemplate();
        this._renderFilmsList();
      } else {
        this._loading.message = Message.NO_FILM;
      }
    })
    .catch((err) => {
      this._loading.message = err;
    });
  }

  _getTopRatedFilms() {
    this._films[List.TOP_RATED] = this._films[List.MAIN].slice()
      .sort((a, b) => a.rating < b.rating).slice(0, ShownFilms.EXTRA);
  }

  _getMostCommentedFilms() {
    this._films[List.MOST_COMMENTED] = this._films[List.MAIN].slice()
      .sort((a, b) => a.comments.length < b.comments.length).slice(0, ShownFilms.EXTRA);
  }

  _renderBaseTemplate() {
    renderComponent(this._entryNodes.main, this._filter);
    renderComponent(this._entryNodes.main, this._loading);
    renderComponent(this._entryNodes.footer, this._statistic);
  }

  _renderFilmsList() {
    for (const type in List) {
      if (List.hasOwnProperty(type)) {
        this._lists[type] = new FilmList(List[type]);
        this._lists[type].films = this._films[List[type]];
        this._lists[type].render(this._mainContainer);
      }
    }
  }

  _renderProfile() {
    const watchedFilms = this._films[List.MAIN].filter((film) => film.isWatched).length;
    this._profile.watchedFilms = watchedFilms;
    renderComponent(this._entryNodes.header, this._profile);
  }

  _updateBaseTemplate() {
    this._renderProfile();

    this._filter.filters = generateFilters(this._films[List.MAIN]);

    removeComponent(this._loading);
    renderComponent(this._entryNodes.main, this._sort);
    renderComponent(this._entryNodes.main, this._mainContainer);

    this._statistic.totalFilms = this._films[List.MAIN].length;
  }
}
