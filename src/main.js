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

const ShowFilms = {
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

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderFilms = (container, filmsCount) => {
  const listContainer = container.querySelector(`.films-list__container`);
  for (let i = 0; i < filmsCount; i++) {
    render(listContainer, createMainFilmListCard(), RenderPosition.BEFOREEND);
  }
};

const renderList = (container, typeList, isMain, countFilms) => {
  render(container, createMainFilmsList(typeList, isMain), RenderPosition.BEFOREEND);
  const mainContainer = container.querySelector(`[data-list="${typeList}"]`);

  render(mainContainer, createMainFilmListHeader(typeList, isMain), RenderPosition.BEFOREEND);
  render(mainContainer, createMainFilmsListContainer(), RenderPosition.BEFOREEND);
  if (isMain) {
    render(mainContainer, createMainFilmsListMore(), RenderPosition.BEFOREEND);
  }
  renderFilms(mainContainer, countFilms);
};

const page = document.querySelector(`body`);
const headerSection = page.querySelector(`.header`);
const mainSection = page.querySelector(`.main`);
const footerStatisticSection = page.querySelector(`.footer__statistics`);

render(headerSection, createHeaderProfile(), RenderPosition.BEFOREEND);
render(mainSection, createMainNav(), RenderPosition.BEFOREEND);
render(mainSection, createMainSort(), RenderPosition.BEFOREEND);
render(mainSection, createMainFilms(), RenderPosition.BEFOREEND);
render(footerStatisticSection, createFooterStatistic(), RenderPosition.BEFOREEND);

const mainFilmsContainer = mainSection.querySelector(`.films`);
renderList(mainFilmsContainer, List.MAIN, true, ShowFilms.MAIN);
renderList(mainFilmsContainer, List.TOP_RATED, false, ShowFilms.EXTRA);
renderList(mainFilmsContainer, List.MOST_COMMENTED, false, ShowFilms.EXTRA);

// popup render
// render(page, createPopupForm(), RenderPosition.BEFOREEND);
// const popupFormContainer = page.querySelector(`.film-details__inner`);
// render(popupFormContainer, createPopupFormTop(), RenderPosition.BEFOREEND);
// render(popupFormContainer, createPopupFormBottom(), RenderPosition.BEFOREEND);
