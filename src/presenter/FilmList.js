import {List, ShownFilms} from "../consts";
import {removeComponent, renderComponent} from "../render";

import FilmListContainer from "../view/main/films/film-list-container";
import FilmListHeader from "../view/main/films/film-list-header";
import FilmListContent from "../view/main/films/film-list-content";
import FilmCard from "../view/main/films/film-card";
import ShowMoreButton from "../view/main/films/show-more-button";

export default class FilmList {
  constructor(type) {
    this._type = type;
    this._isMain = type === List.MAIN;
    this._films = [];
    this._showedFilms = ShownFilms.MAIN;

    this._filmListContainer = null;
    this._filmListHeader = null;
    this._filmListContent = null;
  }

  set films(films) {
    this._films = films.slice();
  }

  render(container) {
    this._renderListContainer(container);

    if (this._isMain) {
      this._renderFilms(this._films.slice(0, ShownFilms.MAIN));
      this._addShowMoreButton();
    } else {
      this._renderFilms();
    }
  }

  _renderListContainer(container) {
    this._filmListContainer = new FilmListContainer(this._type, this._isMain);
    this._filmListHeader = new FilmListHeader(this._type, this._isMain);
    this._filmListContent = new FilmListContent();

    renderComponent(container, this._filmListContainer);
    renderComponent(this._filmListContainer, this._filmListHeader);
    renderComponent(this._filmListContainer, this._filmListContent);
  }

  _renderFilms(films = this._films) {
    films.forEach((film) => {
      const filmCard = new FilmCard(film);
      renderComponent(this._filmListContent, filmCard);
      filmCard.setShowPopupHandlers();
    });
  }

  _addShowMoreButton() {
    if (this._films.length > ShownFilms.MAIN) {
      this._showMoreButton = new ShowMoreButton();
      renderComponent(this._filmListContainer, this._showMoreButton);

      this._showMoreButton.setShowMoreHandler(() => {
        const addShowFilms = this._showedFilms + ShownFilms.MAIN;
        this._renderFilms(this._films.slice(this._showedFilms, addShowFilms));
        this._showedFilms += ShownFilms.MAIN;

        if (this._films.length <= this._showedFilms) {
          removeComponent(this._showMoreButton);
        }
      });
    }
  }
}
