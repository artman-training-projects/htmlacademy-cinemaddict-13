
import {List, Message, ShownFilms} from "../consts";
import {getFilmsFromServer} from "../api/api";
import {removeComponent, renderComponent} from "../render";

import Profile from "../view/header/profile";
import Filter, {generateFilters} from "../view/nav/filter";
import Stats from '../view/nav/stats';
import Sort from "../view/sort";
import FilmsLoading from "../view/main/films-loading";
import FilmList from "../view/main/films/film-list";
import FilmListHeader from "../view/main/films/film-list-header";
import FilmListContainer from "../view/main/films/film-list-container";
import FilmCard from "../view/main/films/film-card";
import ShowMoreButton from "../view/main/films/show-more-button";
import Statistic from "../view/footer/statistic";
import MainContainer from "../view/main/main-container";

export default class Cinemaddict {
  constructor(entryNodes) {
    this._entryNodes = entryNodes;
    this._films = [];
    this._topRatedFilms = [];
    this._mostCommentedFilms = [];

    this._mainList = new FilmList(List.MAIN, true);
    this._mainTopFilmsList = new FilmList(List.TOP_RATED);
    this._mainMostCommentedList = new FilmList(List.MOST_COMMENTED);

    this._profile = new Profile();
    this._filter = new Filter();
    this._stats = new Stats();
    this._sort = new Sort();
    this._loading = new FilmsLoading();
    this._mainContainer = new MainContainer();
    this._filmList = new FilmList();
    this._filmCard = new FilmCard();
    this._showMoreButton = new ShowMoreButton();
    this._statistic = new Statistic();
  }

  init() {
    this._renderBaseTemplate();

    getFilmsFromServer()
    .then((films) => {
      if (films.length) {
        this._films = films;
        this._getTopRatedFilms();
        this._getMostCommentedFilms();

        const renderFilmsLists = () => {
          const mainListContainer = this._renderFilmsListContainer(this._mainContainer.getElement(), List.MAIN, true);
          const topRatedListContainer = this._renderFilmsListContainer(this._mainContainer.getElement(), List.TOP_RATED);
          const mostCommentedListContainer = this._renderFilmsListContainer(this._mainContainer.getElement(), List.MOST_COMMENTED);

          this._renderFilms(mainListContainer, films.slice(0, ShownFilms.MAIN));
          this._renderFilms(topRatedListContainer, this._topRatedFilms);
          this._renderFilms(mostCommentedListContainer, this._mostCommentedFilms);

          this._addShowMoreButton(mainListContainer, this._films);
        };

        this._updateBaseTemplate();
        renderFilmsLists();
      } else {
        this._loading.message = Message.NO_FILM;
      }
    })
    .catch((err) => {
      this._loading.message = err;
    });
  }

  _getTopRatedFilms() {
    this._topRatedFilms = this._films.slice().sort((a, b) => a.rating < b.rating).slice(0, ShownFilms.EXTRA);
  }

  _getMostCommentedFilms() {
    this._mostCommentedFilms = this._films.slice().sort((a, b) => a.comments.length < b.comments.length).slice(0, ShownFilms.EXTRA);
  }

  _renderBaseTemplate() {
    renderComponent(this._entryNodes.main, this._filter);
    renderComponent(this._entryNodes.main, this._loading);
    renderComponent(this._entryNodes.footer, this._statistic);
  }

  _updateBaseTemplate() {
    this._renderProfile();

    this._filter.filters = generateFilters(this._films);

    removeComponent(this._loading);
    renderComponent(this._entryNodes.main, this._sort);
    renderComponent(this._entryNodes.main, this._mainContainer);

    this._statistic.totalFilms = this._films.length;
  }

  _renderProfile() {
    const watchedFilms = this._films.filter((film) => film.watched).length;
    this._profile.watchedFilms = watchedFilms;
    renderComponent(this._entryNodes.header, this._profile);
  }

  _renderFilmsListContainer(container, listType, isMain = false) {
    renderComponent(container, new FilmList(listType, isMain));

    const mainContainer = container.querySelector(`[data-list="${listType}"]`);
    renderComponent(mainContainer, new FilmListHeader(listType, isMain));
    renderComponent(mainContainer, new FilmListContainer());

    return mainContainer.querySelector(`.films-list__container`);
  }

  _renderFilms(container, films) {
    films.forEach((film) => {
      const filmCard = new FilmCard(film);
      renderComponent(container, filmCard);
      filmCard.setShowPopupHandler();
    });
  }

  _addShowMoreButton(listContainer, films) {
    if (films.length > ShownFilms.MAIN) {
      renderComponent(listContainer.parentNode, this._showMoreButton);
      let showedFilms = ShownFilms.MAIN;

      this._showMoreButton.setShowMoreHandler(() => {
        const addShowFilms = showedFilms + ShownFilms.MAIN;
        this._renderFilms(listContainer, films.slice(showedFilms, addShowFilms));
        showedFilms += ShownFilms.MAIN;

        if (films.length <= showedFilms) {
          removeComponent(this._showMoreButton);
        }
      });
    }
  }
}
