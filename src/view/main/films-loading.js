import AbstractView from "../abstractView";

const createFilmsLoadingTemplate = (filmsStatus) => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title">${filmsStatus}</h2>
      </section>
    </section>`
  );
};

export default class FilmsLoading extends AbstractView {
  constructor(filmsStatus = `Loading...`) {
    super();
    this._filmsStatus = filmsStatus;
  }

  getTemplate() {
    return createFilmsLoadingTemplate(this._filmsStatus);
  }
}
