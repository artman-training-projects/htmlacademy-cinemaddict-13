import {List, ShownFilms} from "./consts";
import {removeComponent, renderComponent, replaceElement} from "./render";
import Profile from "./view/header/profile";
import MainContainer from "./view/main/main-container";
import FilmListContainer from "./view/main/films/film-list-container";
import ShowMoreButton from "./view/main/films/show-more-button";
// import Stats from './view/nav/stats';
import Sort from "./view/sort";
import Filter, {generateFilters} from "./view/nav/filter";
import FilmListHeader from "./view/main/films/film-list-header";
import FilmList from "./view/main/films/film-list";
import FilmCard from "./view/main/films/film-card";
import Statistic from "./view/footer/statistic";
import FilmsLoading from "./view/main/films-loading";
import NoFilms from "./view/main/no-films";
import {getFilmsFromServer} from "./api/api";

// Get entry place in template
const pageBodySection = document.body;
const headerSection = pageBodySection.querySelector(`.header`);
const mainSection = pageBodySection.querySelector(`.main`);
const footerStatisticSection = pageBodySection.querySelector(`.footer__statistics`);

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
    renderComponent(container, filmCard);
    filmCard.setShowPopupHandler();
  });
};

// show-more btn
const addShowMoreButton = (listContainer, films) => {
  if (films.length > ShownFilms.MAIN) {
    const showMoreButton = new ShowMoreButton();
    renderComponent(listContainer.parentNode, showMoreButton);

    showMoreButton.setShowMoreHandler(() => {
      const showedFilms = listContainer.childNodes;

      const addShowFilms = showedFilms.length + ShownFilms.MAIN;
      renderFilms(listContainer, films.slice(showedFilms.length, addShowFilms));

      if (films.length === showedFilms.length) {
        removeComponent(showMoreButton);
      }
    });
  }
};

// Start App
const filterComponent = new Filter();
const mainComponent = new MainContainer();
const statisticComponent = new Statistic();
const loadingComponent = new FilmsLoading();

const startApp = () => {
  renderComponent(mainSection, filterComponent);
  renderComponent(mainSection, mainComponent);
  renderComponent(mainComponent, loadingComponent);
  renderComponent(footerStatisticSection, statisticComponent);

  getFilmsFromServer()
    .then((films) => {
      if (films.length) {
        const topRatedFilms = [...films].sort((a, b) => a.rating < b.rating).slice(0, ShownFilms.EXTRA);
        const mostCommentedFilms = [...films].sort((a, b) => a.comments.length < b.comments.length).slice(0, ShownFilms.EXTRA);

        const filters = generateFilters(films);

        const renderProfile = () => {
          const watchedFilms = films.filter((film) => film.watched).length;
          const profileComponent = new Profile(watchedFilms);
          renderComponent(headerSection, profileComponent);
        };

        const updateTemplate = () => {
          removeComponent(mainComponent);
          replaceElement(filterComponent, new Filter(filters));
          renderComponent(mainSection, new Sort());
          renderComponent(mainSection, mainComponent);
          replaceElement(statisticComponent, new Statistic(films.length));
        };

        const renderFilmsLists = () => {
          const mainListContainer = renderListContainer(mainComponent.getElement(), List.MAIN, true);
          const topRatedListContainer = renderListContainer(mainComponent.getElement(), List.TOP_RATED);
          const mostCommentedListContainer = renderListContainer(mainComponent.getElement(), List.MOST_COMMENTED);

          renderFilms(mainListContainer, films.slice(0, ShownFilms.MAIN));
          renderFilms(topRatedListContainer, topRatedFilms);
          renderFilms(mostCommentedListContainer, mostCommentedFilms);

          addShowMoreButton(mainListContainer, films);
        };

        updateTemplate();
        renderProfile();
        renderFilmsLists();
      } else {
        removeComponent(loadingComponent);
        renderComponent(mainComponent, new NoFilms());
      }
    })
    .catch((err) => replaceElement(loadingComponent, new FilmsLoading(err)));
};

startApp();
