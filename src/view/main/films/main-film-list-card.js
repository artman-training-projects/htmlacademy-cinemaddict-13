import dayjs from "dayjs";
import {getFormattedRunTime} from "../../../utils";

export const createMainFilmListCard = (film) => {
  const showDescription = (description) => description.length > 140 ? (description.slice(0, 139) + `...`) : description;
  const isActive = (bool) => bool && `film-card__controls-item--active`;

  return (
    `<article class="film-card" data-film="${film.id}">
      <h3 class="film-card__title">${film.title}</h3>
      <p class="film-card__rating">${film.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${dayjs(film.releaseDate).format(`YYYY`)}</span>
        <span class="film-card__duration">${getFormattedRunTime(film.runtime)}</span>
        <span class="film-card__genre">${film.genre[0]}</span>
      </p>
      <img src=${film.poster} alt="" class="film-card__poster">
      <p class="film-card__description">${showDescription(film.description)}</p>
      <a class="film-card__comments">${film.comments.length} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isActive(film.watchlist)}" type="button">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isActive(film.watched)}" type="button">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${isActive(film.favorite)}" type="button">Mark as favorite</button>
      </div>
    </article>`
  );
};
