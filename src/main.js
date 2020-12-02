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

import {List, Nav, ShownFilms} from "./consts";
import {getFilteredFilms, getRandomNumber} from "./utils";
import {getRandomizedFilm} from "./mock/films";
import {renderTemplate} from "./render";

const films = new Array(getRandomNumber(20, 15)).fill(``).map(getRandomizedFilm);
const filmsTopRated = [...films].sort((a, b) => a.rating < b.rating).slice(0, ShownFilms.EXTRA);
const filmsMostCommented = [...films].sort((a, b) => a.comments.length < b.comments.length).slice(0, ShownFilms.EXTRA);
const filteredFilms = getFilteredFilms(films);

const renderFilms = (container, films) => {
  const template = films.map(createMainFilmListCard).join(``);
  renderTemplate(container, template);
};

const renderListContainer = (container, listType, isMain = false) => {
  renderTemplate(container, createMainFilmsList(listType, isMain));

  const mainContainer = container.querySelector(`[data-list="${listType}"]`);
  renderTemplate(mainContainer, createMainFilmListHeader(listType, isMain));
  renderTemplate(mainContainer, createMainFilmsListContainer());

  return mainContainer.querySelector(`.films-list__container`);
};

// popup render
// renderTemplate(document.body, createPopupForm());
// const popupFormContainer = document.body.querySelector(`.film-details__inner`);
// renderTemplate(popupFormContainer, createPopupFormTop(films[0]));
// renderTemplate(popupFormContainer, createPopupFormBottom(films[0].comments));
// const popupCommentList = popupFormContainer.querySelector(`.film-details__comments-list`);
// renderTemplate(popupCommentList, createPopupComment(films[0].comments));


/* Start App */
const headerSection = document.body.querySelector(`.header`);
const mainSection = document.body.querySelector(`.main`);
const footerStatisticSection = document.body.querySelector(`.footer__statistics`);

renderTemplate(headerSection, createHeaderProfile());
renderTemplate(mainSection, createMainNav(filteredFilms));
renderTemplate(mainSection, createMainSort());
renderTemplate(mainSection, createMainFilms());
renderTemplate(footerStatisticSection, createFooterStatistic(films.length));

const mainFilmsContainer = mainSection.querySelector(`.films`);
const mainListContainer = renderListContainer(mainFilmsContainer, List.MAIN, true);
const topRatedListContainer = renderListContainer(mainFilmsContainer, List.TOP_RATED);
const mostCommentedListContainer = renderListContainer(mainFilmsContainer, List.MOST_COMMENTED);

renderFilms(mainListContainer, films.slice(0, ShownFilms.MAIN));
renderFilms(topRatedListContainer, filmsTopRated);
renderFilms(mostCommentedListContainer, filmsMostCommented);

// show-more btn
renderTemplate(mainListContainer.parentNode, createMainFilmsListMore());
const showMoreBtn = mainFilmsContainer.querySelector(`.films-list__show-more`);
showMoreBtn.addEventListener(`click`, () => {
  const countShownFilms = () => mainListContainer.querySelectorAll(`.film-card`).length;
  renderFilms(mainListContainer, films.slice(countShownFilms(), countShownFilms() + ShownFilms.MAIN));
  (() => films.length === countShownFilms() && showMoreBtn.remove())();
});


