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

const renderFilms = (container, films) => {
  films.forEach((film) => renderElement(container, new FilmCard(film).getElement()));
};

const renderListContainer = (container, listType, isMain = false) => {
  renderElement(container, new FilmList(listType, isMain).getElement());

  const mainContainer = container.querySelector(`[data-list="${listType}"]`);
  renderElement(mainContainer, new FilmListHeader(listType, isMain).getElement());
  renderElement(mainContainer, new FilmListContainer().getElement());

  return mainContainer.querySelector(`.films-list__container`);
};

// popup render
// renderElement(pageBodySection, new PopupForm().getElement());
// const popupFormContainer = pageBodySection.querySelector(`.film-details__inner`);
// renderElement(popupFormContainer, new PopupFormTop(films[0]).getElement());
// renderElement(popupFormContainer, new PopupFormBottom(films[0].comments).getElement());
// const popupCommentList = popupFormContainer.querySelector(`.film-details__comments-list`);
// renderElement(popupCommentList, new PopupComment(films[0].comments).getElement());


/* Start App */
const mainContainer = new MainContainer();
renderElement(headerSection, new Profile().getElement());
renderElement(mainSection, new Filter(filters).getElement());
renderElement(mainSection, new Sort().getElement());
renderElement(footerStatisticSection, new Statistic(films.length).getElement());
renderElement(mainSection, mainContainer.getElement());

const mainListContainer = renderListContainer(mainContainer.getElement(), List.MAIN, true);
const topRatedListContainer = renderListContainer(mainContainer.getElement(), List.TOP_RATED);
const mostCommentedListContainer = renderListContainer(mainContainer.getElement(), List.MOST_COMMENTED);

renderFilms(mainListContainer, films.slice(0, ShownFilms.MAIN));
renderFilms(topRatedListContainer, filmsTopRated);
renderFilms(mostCommentedListContainer, filmsMostCommented);

// show-more btn
renderElement(mainListContainer.parentNode, new ShowMoreBtn().getElement());
const showMoreBtn = mainContainer.getElement().querySelector(`.films-list__show-more`);
showMoreBtn.addEventListener(`click`, () => {
  const countShownFilms = () => mainListContainer.querySelectorAll(`.film-card`).length;
  renderFilms(mainListContainer, films.slice(countShownFilms(), countShownFilms() + ShownFilms.MAIN));
  (() => films.length === countShownFilms() && showMoreBtn.remove())();
});


