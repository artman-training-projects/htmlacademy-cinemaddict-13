import SmartView from "../smartView";

const createFilmsLoadingTemplate = (filmsStatus) => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title">${filmsStatus}</h2>
      </section>
    </section>`
  );
};

export default class FilmsLoading extends SmartView {
  constructor(filmsStatus = `Loading...`) {
    super();
    this._filmsStatus = filmsStatus;
  }

  set message(str) {
    this._filmsStatus = str;
    this.updateElement();
  }

  getTemplate() {
    return createFilmsLoadingTemplate(this._filmsStatus);
  }
}
