import {List, ShownFilms} from "./consts";
import {removeComponent, renderComponent, replaceElement} from "./render";
import Profile from "./view/header/profile";
import MainContainer from "./view/main/main-container";
import FilmListContainer from "./view/main/films/film-list-container";
import ShowMoreBtn from "./view/main/films/show-more-btn";
// import Stats from './view/nav/stats';
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
import FilmsLoading from "./view/main/films-loading";
import NoFilms from "./view/main/no-films";
import {getFilmsFromServer} from "./api/api";

// Get entry place in template
const pageBodySection = document.body;
const headerSection = pageBodySection.querySelector(`.header`);
const mainSection = pageBodySection.querySelector(`.main`);
const footerStatisticSection = pageBodySection.querySelector(`.footer__statistics`);

// popup render
const showPopup = (film) => {
  document.body.classList.toggle(`hide-overflow`);
  const popupForm = new PopupForm().getElement();
  renderComponent(pageBodySection, popupForm);
  const popupFormContainer = popupForm.querySelector(`.film-details__inner`);
  renderComponent(popupFormContainer, new PopupFormTop(film));
  renderComponent(popupFormContainer, new PopupFormBottom(film.comments));
  const popupCommentList = popupFormContainer.querySelector(`.film-details__comments-list`);
  renderComponent(popupCommentList, new PopupComment(film.comments));

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
    document.body.classList.toggle(`hide-overflow`);
  });
};

// container for films
const renderListContainer = (container, listType, isMain = false) => {
  renderComponent(container, new FilmList(listType, isMain));

  const mainContainer = container.querySelector(`[data-list="${listType}"]`);
  renderComponent(mainContainer, new FilmListHeader(listType, isMain));
  renderComponent(mainContainer, new FilmListContainer());

  return mainContainer.querySelector(`.films-list__container`);
};

// render films
const renderFilms = (container, films) => {
  films.forEach((film) => {
    const filmCard = new FilmCard(film);
    filmCard.getElement().addEventListener(`click`, () => showPopup(film));
    renderComponent(container, filmCard);
  });
};

// show-more btn
const addShowMoreBtn = (listContainer, films) => {
  if (films.length > 5) {
    renderComponent(listContainer.parentNode, new ShowMoreBtn());
    const showMoreBtn = mainComponent.getElement().querySelector(`.films-list__show-more`);
    showMoreBtn.addEventListener(`click`, () => {
      const countShownFilms = () => listContainer.querySelectorAll(`.film-card`).length;
      renderFilms(listContainer, films.slice(countShownFilms(), countShownFilms() + ShownFilms.MAIN));
      (() => films.length === countShownFilms() && showMoreBtn.remove())();
    });
  }
};

// Start App
const profilreComponent = new Profile();
const filterComponent = new Filter();
const mainComponent = new MainContainer();
const statisticComponent = new Statistic(0);
const loadingComponent = new FilmsLoading();

const startApp = () => {
  renderComponent(mainSection, filterComponent);
  renderComponent(mainSection, mainComponent);
  renderComponent(footerStatisticSection, statisticComponent);
  renderComponent(mainComponent, loadingComponent);

  getFilmsFromServer()
    .then((films) => {
      if (films.length) {
        const topRatedFilms = [...films].sort((a, b) => a.rating < b.rating).slice(0, ShownFilms.EXTRA);
        const mostCommentedFilms = [...films].sort((a, b) => a.comments.length < b.comments.length).slice(0, ShownFilms.EXTRA);
        const filters = generateFilters(films);

        removeComponent(loadingComponent);
        renderComponent(headerSection, profilreComponent);
        renderComponent(mainSection, new Sort());
        replaceElement(filterComponent, new Filter(filters));
        replaceElement(statisticComponent, new Statistic(films.length));

        const mainListContainer = renderListContainer(mainComponent.getElement(), List.MAIN, true);
        const topRatedListContainer = renderListContainer(mainComponent.getElement(), List.TOP_RATED);
        const mostCommentedListContainer = renderListContainer(mainComponent.getElement(), List.MOST_COMMENTED);

        renderFilms(mainListContainer, films.slice(0, ShownFilms.MAIN));
        renderFilms(topRatedListContainer, topRatedFilms);
        renderFilms(mostCommentedListContainer, mostCommentedFilms);

        addShowMoreBtn(mainListContainer, films);
      } else {
        removeComponent(loadingComponent);
        renderComponent(mainComponent, new NoFilms());
      }
    })
    .catch((err) => replaceElement(loadingComponent, new FilmsLoading(err)));
};

startApp();
