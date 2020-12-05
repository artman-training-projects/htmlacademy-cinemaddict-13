import dayjs from "dayjs";
import {getFormattedRunTime} from "../../../utils";
import {MAX_DESCRIPTION_LENGTH} from "../../../consts";
import AbstractView from "../../abstractView";
import {renderComponent} from "../../../render";
import PopupForm from "../../popup/popup-form";
import PopupFormTop from "../../popup/popup-form-top";
import PopupFormBottom from "../../popup/popup-form-bottom";
import PopupComment from "../../popup/popup-comment";

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

export default class FilmCard extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
    this._popup = null;
    this._body = document.body;
    this._openPopup = this._openPopup.bind(this);
    this._closePopup = this._closePopup.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  setShowPopupHandler() {
    this.getElement().querySelector(`.film-card__title`)
      .addEventListener(`click`, this._openPopup);

    this.getElement().querySelector(`.film-card__poster`)
      .addEventListener(`click`, this._openPopup);

    this.getElement().querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._openPopup);
  }

  _openPopup() {
    this._removeOldPopup();

    document.body.classList.add(`hide-overflow`);
    this._popup = new PopupForm().getElement();
    renderComponent(this._body, this._popup);

    const popupFormContainer = this._popup.querySelector(`.film-details__inner`);
    renderComponent(popupFormContainer, new PopupFormTop(this._film));
    renderComponent(popupFormContainer, new PopupFormBottom(this._film.comments));

    const popupCommentList = popupFormContainer.querySelector(`.film-details__comments-list`);
    renderComponent(popupCommentList, new PopupComment(this._film.comments));

    const closeBtn = this._popup.querySelector(`.film-details__close-btn`);

    document.addEventListener(`keydown`, this._closePopup);
    closeBtn.addEventListener(`click`, () => {
      this._popup.remove();
      document.removeEventListener(`keydown`, this._closePopup);
      document.body.classList.remove(`hide-overflow`);
    });
  }

  _closePopup(evt) {
    if (evt.key === `Escape`) {
      this._popup.remove();
      document.removeEventListener(`keydown`, this._closePopup);
      document.body.classList.remove(`hide-overflow`);
    }
  }

  _removeOldPopup() {
    const oldPopup = document.querySelector(`.film-details`);
    if (oldPopup) {
      oldPopup.remove();
    }
  }
}
