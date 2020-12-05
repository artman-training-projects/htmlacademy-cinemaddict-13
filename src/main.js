import Profile from "./view/header/profile";
import MainContainer from "./view/main/main-container";
import FilmListContainer from "./view/main/films/film-list-container";
import ShowMoreBtn from "./view/main/films/show-more-btn";
import Stats from './view/nav/stats';
import FilmsLoading from "./view/main/films-loading";
import Sort from "./view/sort";
import Filter, {generateFilters} from "./view/nav/filter";
import FilmListHeader from "./view/main/films/film-list-header";
import FilmList from "./view/main/films/film-list";
import FilmCard from "./view/main/films/film-card";
import Statistic from "./view/footer/statistic";
import PopupForm from "./view/popup/popup-form";
import PopupFormTop from "./view/popup/popup-form-top";
import PopupFormBottom from "./view/popup/popup-form-bottom";
import PopupComment from "./view/popup/popup-comment";

import {List, ShownFilms} from "./consts";
import {getRandomNumber} from "./utils";
import {getRandomizedFilm} from "./mock/films";
import {renderElement} from "./render";

// Get entry place in template
const pageBodySection = document.body;
const headerSection = pageBodySection.querySelector(`.header`);
const mainSection = pageBodySection.querySelector(`.main`);
const footerStatisticSection = pageBodySection.querySelector(`.footer__statistics`);

const films = new Array(getRandomNumber(20, 15)).fill(``).map(getRandomizedFilm);
const filmsTopRated = [...films].sort((a, b) => a.rating < b.rating).slice(0, ShownFilms.EXTRA);
const filmsMostCommented = [...films].sort((a, b) => a.comments.length < b.comments.length).slice(0, ShownFilms.EXTRA);
const filters = generateFilters(films);

// popup render
const showPopup = (film) => {
  document.body.classList.toggle(`hide-overflow`);
  const popupForm = new PopupForm().getElement();
  renderElement(pageBodySection, popupForm);
  const popupFormContainer = popupForm.querySelector(`.film-details__inner`);
  renderElement(popupFormContainer, new PopupFormTop(film));
  renderElement(popupFormContainer, new PopupFormBottom(film.comments));
  const popupCommentList = popupFormContainer.querySelector(`.film-details__comments-list`);
  renderElement(popupCommentList, new PopupComment(film.comments));

  const closeBtn = popupForm.querySelector(`.film-details__close-btn`);
  const closePopup = (evt) => {
    if (evt.key === `Escape`) {
      popupForm.remove();
      document.removeEventListener(`keydown`, closePopup);
      document.body.classList.toggle(`hide-overflow`);
    }
  };

  document.addEventListener(`keydown`, closePopup);
  closeBtn.addEventListener(`click`, () => {
    popupForm.remove();
    document.removeEventListener(`keydown`, closePopup);
  });
};

// container for films
const renderListContainer = (container, listType, isMain = false) => {
  renderElement(container, new FilmList(listType, isMain));

  const mainContainer = container.querySelector(`[data-list="${listType}"]`);
  renderElement(mainContainer, new FilmListHeader(listType, isMain));
  renderElement(mainContainer, new FilmListContainer());

  return mainContainer.querySelector(`.films-list__container`);
};

// render films
const renderFilms = (container, films) => {
  films.forEach((film) => {
    const filmCard = new FilmCard(film);
    filmCard.getElement().addEventListener(`click`, () => showPopup(film));
    renderElement(container, filmCard);
  });
};


/* Start App */
const mainContainer = new MainContainer();
renderElement(headerSection, new Profile());
renderElement(mainSection, new Filter(filters));
renderElement(mainSection, new Sort());
renderElement(footerStatisticSection, new Statistic(films.length));
renderElement(mainSection, mainContainer);

const mainListContainer = renderListContainer(mainContainer.getElement(), List.MAIN, true);
const topRatedListContainer = renderListContainer(mainContainer.getElement(), List.TOP_RATED);
const mostCommentedListContainer = renderListContainer(mainContainer.getElement(), List.MOST_COMMENTED);

renderFilms(mainListContainer, films.slice(0, ShownFilms.MAIN));
renderFilms(topRatedListContainer, filmsTopRated);
renderFilms(mostCommentedListContainer, filmsMostCommented);

// show-more btn
renderElement(mainListContainer.parentNode, new ShowMoreBtn());
const showMoreBtn = mainContainer.getElement().querySelector(`.films-list__show-more`);
showMoreBtn.addEventListener(`click`, () => {
  const countShownFilms = () => mainListContainer.querySelectorAll(`.film-card`).length;
  renderFilms(mainListContainer, films.slice(countShownFilms(), countShownFilms() + ShownFilms.MAIN));
  (() => films.length === countShownFilms() && showMoreBtn.remove())();
});


