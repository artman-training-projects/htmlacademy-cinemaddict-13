import {ShownFilms} from "../consts";
import {removeComponent, renderComponent} from "../render";

import FilmListContainer from "../view/main/films/film-list-container";
import FilmListHeader from "../view/main/films/film-list-header";
import FilmListContent from "../view/main/films/film-list-content";
import FilmCard from "../view/main/films/film-card";
import ShowMoreButton from "../view/main/films/show-more-button";

export default class FilmList {
  constructor(type, isMain = false) {
    this._type = type;
    this._isMain = isMain;
    this._films = [];

    this._filmListContainer = new FilmListContainer(type, isMain);
    this._filmListHeader = new FilmListHeader(type, isMain);
    this._filmListContent = new FilmListContent();
  }

  set films(films) {
    this._films = films.slice();
  }

  renderList(container) {
    renderComponent(container, this._filmListContainer);
    renderComponent(this._filmListContainer, this._filmListHeader);
    renderComponent(this._filmListContainer, this._filmListContent);

    if (this._isMain) {
      this._renderFilms(this._films.slice(0, ShownFilms.MAIN));
      this._addShowMoreButton();
    } else {
      this._renderFilms();
    }
  }

  _renderFilms(films = this._films) {
    films.forEach((film) => {
      const filmCard = new FilmCard(film);
      renderComponent(this._filmListContent, filmCard);
      filmCard.setShowPopupHandler();
    });
  }

  _addShowMoreButton() {
    if (this._films.length > ShownFilms.MAIN) {
      this._showMoreButton = new ShowMoreButton();
      renderComponent(this._filmListContainer, this._showMoreButton);
      let showedFilms = ShownFilms.MAIN;

      this._showMoreButton.setShowMoreHandler(() => {
        const addShowFilms = showedFilms + ShownFilms.MAIN;
        this._renderFilms(this._films.slice(showedFilms, addShowFilms));
        showedFilms += ShownFilms.MAIN;

        if (this._films.length <= showedFilms) {
          removeComponent(this._showMoreButton);
        }
      });
    }
  }
}
