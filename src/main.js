import {createHeaderProfile} from "./view/header/header-profile";
import {createMainNav} from "./view/main/controls/main-nav";
import {createMainSort} from "./view/main/controls/main-sort";
import {createFooterStatistic} from "./view/footer/footer-statistic";
import {createMainStatistic} from './view/main/controls/main-statistic';
import {createMainFilmsLoading} from "./view/main/films/main-films-loading";
import {createMainFilms} from "./view/main/films/main-films";
import {createMainFilmListHeader} from "./view/main/films/main-film-list-header";
import {createMainFilmsList} from "./view/main/films/main-film-list";
import {createMainFilmsListMore} from "./view/main/films/main-film-list-more";
import {createMainFilmsListContainer} from "./view/main/films/main-film-list-container";
import {createMainFilmListCard} from "./view/main/films/main-film-list-card";
import {createPopupForm} from "./view/popup/popup-form";
import {createPopupFormTop} from "./view/popup/popup-form-top";
import {createPopupFormBottom} from "./view/popup/popup-form-bottom";
import {createPopupComment} from "./view/popup/popup-comment";

import {List, Nav, RenderPosition, ShownFilms} from "./consts";
import {getFilteredFilms, getRandomNumber} from "./utils";
import {getRandomizedFilm} from "./mock/films";

const films = new Array(getRandomNumber(20, 15)).fill(``).map(getRandomizedFilm);
const filmsTopRated = [...films].sort((a, b) => a.rating < b.rating).slice(0, ShownFilms.EXTRA);
const filmsMostCommented = [...films].sort((a, b) => a.comments.length < b.comments.length).slice(0, ShownFilms.EXTRA);
const filteredFilms = getFilteredFilms(films);

const render = (container, template, place = RenderPosition.BEFOREEND) => {
  container.insertAdjacentHTML(place, template);
};

const renderFilms = (container, films) => {
  const template = films.map(createMainFilmListCard).join(``);
  render(container, template);
};

const renderListContainer = (container, listType, isMain = false) => {
  render(container, createMainFilmsList(listType, isMain));

  const mainContainer = container.querySelector(`[data-list="${listType}"]`);
  render(mainContainer, createMainFilmListHeader(listType, isMain));
  render(mainContainer, createMainFilmsListContainer());

  return mainContainer.querySelector(`.films-list__container`);
};

// popup render
// render(document.body, createPopupForm());
// const popupFormContainer = document.body.querySelector(`.film-details__inner`);
// render(popupFormContainer, createPopupFormTop(films[0]));
// render(popupFormContainer, createPopupFormBottom(films[0].comments));
// const popupCommentList = popupFormContainer.querySelector(`.film-details__comments-list`);
// render(popupCommentList, createPopupComment(films[0].comments));


/* Start App */
const headerSection = document.body.querySelector(`.header`);
const mainSection = document.body.querySelector(`.main`);
const footerStatisticSection = document.body.querySelector(`.footer__statistics`);

render(headerSection, createHeaderProfile());
render(mainSection, createMainNav(filteredFilms));
render(mainSection, createMainSort());
render(mainSection, createMainFilms());
render(footerStatisticSection, createFooterStatistic(films.length));

const mainFilmsContainer = mainSection.querySelector(`.films`);
const mainListContainer = renderListContainer(mainFilmsContainer, List.MAIN, true);
const topRatedListContainer = renderListContainer(mainFilmsContainer, List.TOP_RATED);
const mostCommentedListContainer = renderListContainer(mainFilmsContainer, List.MOST_COMMENTED);

renderFilms(mainListContainer, films.slice(0, ShownFilms.MAIN));
renderFilms(topRatedListContainer, filmsTopRated);
renderFilms(mostCommentedListContainer, filmsMostCommented);

// show-more btn
render(mainListContainer.parentNode, createMainFilmsListMore());
const showMoreBtn = mainFilmsContainer.querySelector(`.films-list__show-more`);
showMoreBtn.addEventListener(`click`, () => {
  const countShownFilms = () => mainListContainer.querySelectorAll(`.film-card`).length;
  renderFilms(mainListContainer, films.slice(countShownFilms(), countShownFilms() + ShownFilms.MAIN));
  (() => films.length === countShownFilms() && showMoreBtn.remove())();
});


