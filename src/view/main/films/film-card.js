import dayjs from "dayjs";
import AbstractView from "../../abstractView";
import {MAX_DESCRIPTION_LENGTH} from "../../../consts";
import {getFormattedRunTime} from "../../../utils";
import FilmPopup from "../../../presenter/FilmPopup";

const createFilmCardTemplate = (film) => {
  const showDescription = (description) => description.length >= MAX_DESCRIPTION_LENGTH ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...` : description;
  const getIsActive = (isChecked) => isChecked ? `film-card__controls-item--active` : ``;

  return (
    `<article class="film-card" data-film="${film.id}">
      <h3 class="film-card__title">${film.title}</h3>
      <p class="film-card__rating">${film.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${dayjs(film.releaseDate).format(`YYYY`)}</span>
        <span class="film-card__duration">${getFormattedRunTime(film.runtime)}</span>
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

export default class FilmCard extends AbstractView {
  constructor(film) {
    super();
    this._film = film;

    this._updateCard = this._updateCard.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film.info);
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
    this._popup = new FilmPopup();

    this.getElement().querySelector(`.film-card__title`)
      .addEventListener(`click`, () => {
        this._popup.updateCard = this._updateCard;
        this._popup.open(this._film);
      });

    this.getElement().querySelector(`.film-card__poster`)
      .addEventListener(`click`, () => {
        this._popup.updateCard = this._updateCard;
        this._popup.open(this._film);
      });

    this.getElement().querySelector(`.film-card__comments`)
      .addEventListener(`click`, () => {
        this._popup.updateCard = this._updateCard;
        this._popup.open(this._film);
      });
  }

  _setControlsHandlers() {
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._film.isInWatchlist = !this._film.isInWatchlist;
        this._updateCard();
      });

    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._film.isWatched = !this._film.isWatched;
        this._updateCard();
      });

    this.getElement().querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._film.isFavorite = !this._film.isFavorite;
        this._updateCard();
      });
  }
}
