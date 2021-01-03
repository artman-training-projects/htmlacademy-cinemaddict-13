import {List, Message, ShownFilms} from "../consts";
import {getFilmsFromServer} from "../api/api";
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
    this._films = [];
    this._topRatedFilms = [];
    this._mostCommentedFilms = [];

    this._mainList = new FilmList(List.MAIN, true);
    this._topRatedList = new FilmList(List.TOP_RATED);
    this._mostCommentedList = new FilmList(List.MOST_COMMENTED);

    this._profile = new Profile();
    this._filter = new Filter();
    this._stats = new Stats();
    this._sort = new Sort();
    this._loading = new FilmsLoading();
    this._mostCommentedListontainer = new MainContainer();
    this._statistic = new Statistic();
  }

  init() {
    this._renderBaseTemplate();

    getFilmsFromServer()
    .then((films) => {
      if (films.length) {
        this._films = films.slice();
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
    this._topRatedFilms = this._films.slice()
      .sort((a, b) => a.rating < b.rating).slice(0, ShownFilms.EXTRA);
  }

  _getMostCommentedFilms() {
    this._mostCommentedFilms = this._films.slice()
      .sort((a, b) => a.comments.length < b.comments.length).slice(0, ShownFilms.EXTRA);
  }

  _renderBaseTemplate() {
    renderComponent(this._entryNodes.main, this._filter);
    renderComponent(this._entryNodes.main, this._loading);
    renderComponent(this._entryNodes.footer, this._statistic);
  }

  _renderFilmsList() {
    this._mainList.films = this._films;
    this._mainList.renderList(this._mostCommentedListontainer);

    this._topRatedList.films = this._topRatedFilms;
    this._topRatedList.renderList(this._mostCommentedListontainer);

    this._mostCommentedList.films = this._mostCommentedFilms;
    this._mostCommentedList.renderList(this._mostCommentedListontainer);
  }

  _renderProfile() {
    const watchedFilms = this._films.filter((film) => film.watched).length;
    this._profile.watchedFilms = watchedFilms;
    renderComponent(this._entryNodes.header, this._profile);
  }

  _updateBaseTemplate() {
    this._renderProfile();

    this._filter.filters = generateFilters(this._films);

    removeComponent(this._loading);
    renderComponent(this._entryNodes.main, this._sort);
    renderComponent(this._entryNodes.main, this._mostCommentedListontainer);

    this._statistic.totalFilms = this._films.length;
  }
}
