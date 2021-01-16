import AbstractView from "../../abstractView";

const createMainFilmsListContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

export default class FilmListContent extends AbstractView {
  getTemplate() {
    return createMainFilmsListContainerTemplate();
  }
}
