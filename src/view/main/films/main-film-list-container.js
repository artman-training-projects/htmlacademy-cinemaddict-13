import AbstractView from "../../abstract";

const createMainFilmsListContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

export default class MainFilmListContainer extends AbstractView {
  getTemplate() {
    return createMainFilmsListContainerTemplate();
  }
}
