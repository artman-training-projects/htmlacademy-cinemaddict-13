import AbstractView from "../abstractView";

const createFilmsLoadingTemplate = (event) => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title">${event}</h2>
    </section>`
  );
};

export default class FilmsLoading extends AbstractView {
  constructor(event = `Loading...`) {
    super();
    this._event = event;
  }

  getTemplate() {
    return createFilmsLoadingTemplate(this._event);
  }
}
