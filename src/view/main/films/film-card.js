import dayjs from "dayjs";
import {getFormattedRunTime} from "../../../utils";
import {MAX_DESCRIPTION_LENGTH} from "../../../consts";
import AbstractView from "../../abstractView";

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
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }
}
