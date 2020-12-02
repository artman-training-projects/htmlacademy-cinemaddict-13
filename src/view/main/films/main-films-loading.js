import AbstractView from "../../abstract";

const createMainFilmsLoadingTemplate = () => {
  return (
    `<h2 class="films-list__title">Loading...</h2>`
  );
};

export default class MainFilmsLoading extends AbstractView {
  getTemplate() {
    return createMainFilmsLoadingTemplate();
  }
}
