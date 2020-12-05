import AbstractView from "../abstractView";

const createMainFilmsLoadingTemplate = () => {
  return (
    `<h2 class="films-list__title">Loading...</h2>`
  );
};

export default class FilmsLoading extends AbstractView {
  getTemplate() {
    return createMainFilmsLoadingTemplate();
  }
}
