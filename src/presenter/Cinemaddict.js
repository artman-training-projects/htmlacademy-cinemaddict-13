
import {List, ShownFilms} from "../consts";
import {getFilmsFromServer} from "../api/api";
import {removeComponent, renderComponent, replaceElement} from "../render";

import Profile from "../view/header/profile";
import Filter, {generateFilters} from "../view/nav/filter";
import Stats from '../view/nav/stats';
import Sort from "../view/sort";
import FilmsLoading from "../view/main/films-loading";
import NoFilms from "../view/main/no-films";
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

    this._profile = new Profile();
    this._filter = new Filter();
    this._stats = new Stats();
    this._sort = new Sort();
    this._loading = new FilmsLoading();
    this._noFilms = new NoFilms();
    this._mainContainer = new MainContainer();
    this._filmList = new FilmList();
    this._filmCard = new FilmCard();
    this._showMoreButton = new ShowMoreButton();
    this._statistic = new Statistic();
  }

  init() {
    renderComponent(this._entryNodes.main, this._filter);
    renderComponent(this._entryNodes.main, this._loading);
    renderComponent(this._entryNodes.footer, this._statistic);

    getFilmsFromServer()
    .then((films) => {
      if (films.length) {
        const topRatedFilms = [...films].sort((a, b) => a.rating < b.rating).slice(0, ShownFilms.EXTRA);
        const mostCommentedFilms = [...films].sort((a, b) => a.comments.length < b.comments.length).slice(0, ShownFilms.EXTRA);

        const filters = generateFilters(films);

        const renderProfile = () => {
          const watchedFilms = films.filter((film) => film.watched).length;
          const profileComponent = new Profile(watchedFilms);
          renderComponent(this._entryNodes.header, profileComponent);
        };

        const updateTemplate = () => {
          replaceElement(this._filter, new Filter(filters));
          renderComponent(this._entryNodes.main, new Sort());
          removeComponent(this._loading);
          renderComponent(this._entryNodes.main, this._mainContainer);
          replaceElement(this._statistic, new Statistic(films.length));
        };

        const renderFilmsLists = () => {
          const mainListContainer = this._renderListContainer(this._mainContainer.getElement(), List.MAIN, true);
          const topRatedListContainer = this._renderListContainer(this._mainContainer.getElement(), List.TOP_RATED);
          const mostCommentedListContainer = this._renderListContainer(this._mainContainer.getElement(), List.MOST_COMMENTED);

          this._renderFilms(mainListContainer, films.slice(0, ShownFilms.MAIN));
          this._renderFilms(topRatedListContainer, topRatedFilms);
          this._renderFilms(mostCommentedListContainer, mostCommentedFilms);

          this._addShowMoreButton(mainListContainer, films);
        };

        updateTemplate();
        renderProfile();
        renderFilmsLists();
      } else {
        replaceElement(this._loading, this._noFilms);
      }
    })
    .catch((err) => replaceElement(this._loading, new FilmsLoading(err)));
  }

  _renderListContainer(container, listType, isMain = false) {
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
      const showMoreButton = new ShowMoreButton();
      renderComponent(listContainer.parentNode, showMoreButton);
      let showedFilms = ShownFilms.MAIN;

      showMoreButton.setShowMoreHandler(() => {
        const addShowFilms = showedFilms + ShownFilms.MAIN;
        this._renderFilms(listContainer, films.slice(showedFilms, addShowFilms));
        showedFilms += ShownFilms.MAIN;

        if (films.length <= showedFilms) {
          removeComponent(showMoreButton);
        }
      });
    }
  }
}
