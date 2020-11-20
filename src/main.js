import {createHeaderProfile} from "./view/header/header-profile";
import {createMainNav} from "./view/main/controls/main-nav";
import {createMainSort} from "./view/main/controls/main-sort";
import {createFooterStatistic} from "./view/footer/footer-statistic";
// import {createMainStatistic} from './view/main/controls/main-statistic';
// import {createMainFilmsLoading} from "./view/main/films/main-films-loading";
import {createMainFilms} from "./view/main/films/main-films";
import {createMainFilmListHeader} from "./view/main/films/main-film-list-header";
import {createMainFilmsList} from "./view/main/films/main-film-list";
import {createMainFilmsListMore} from "./view/main/films/main-film-list-more";
import {createMainFilmsListContainer} from "./view/main/films/main-film-list-container";
import {createMainFilmListCard} from "./view/main/films/main-film-list-card";
// import {createPopupForm} from "./view/popup/popup-form";
// import {createPopupFormTop} from "./view/popup/popup-form-top";
// import {createPopupFormBottom} from "./view/popup/popup-form-bottom";

const ShownFilms = {
  MAIN: 5,
  EXTRA: 2
};

const List = {
  MAIN: `All movies. Upcoming`,
  TOP_RATED: `Top rated`,
  MOST_COMMENTED: `Most commented`
};

const RenderPosition = {
  BEFOREEND: `beforeend`,
};

const render = (container, template, place = RenderPosition.BEFOREEND) => {
  container.insertAdjacentHTML(place, template);
};

const renderFilms = (container, filmsAmount) => {
  const listContainer = container.querySelector(`.films-list__container`);
  for (let i = 0; i < filmsAmount; i++) {
    render(listContainer, createMainFilmListCard());
  }
};

const renderList = (container, listType, filmsAmount, isMain = false) => {
  render(container, createMainFilmsList(listType, isMain));
  const mainContainer = container.querySelector(`[data-list="${listType}"]`);

  render(mainContainer, createMainFilmListHeader(listType, isMain));
  render(mainContainer, createMainFilmsListContainer());
  if (isMain) {
    render(mainContainer, createMainFilmsListMore());
  }
  renderFilms(mainContainer, filmsAmount);
};

const headerSection = document.body.querySelector(`.header`);
const mainSection = document.body.querySelector(`.main`);
const footerStatisticSection = document.body.querySelector(`.footer__statistics`);

render(headerSection, createHeaderProfile());
render(mainSection, createMainNav());
render(mainSection, createMainSort());
render(mainSection, createMainFilms());
render(footerStatisticSection, createFooterStatistic());

const mainFilmsContainer = mainSection.querySelector(`.films`);
renderList(mainFilmsContainer, List.MAIN, ShownFilms.MAIN, true);
renderList(mainFilmsContainer, List.TOP_RATED, ShownFilms.EXTRA);
renderList(mainFilmsContainer, List.MOST_COMMENTED, ShownFilms.EXTRA);

// popup render
// render(document.body, createPopupForm());
// const popupFormContainer = document.body.querySelector(`.film-details__inner`);
// render(popupFormContainer, createPopupFormTop());
// render(popupFormContainer, createPopupFormBottom());
