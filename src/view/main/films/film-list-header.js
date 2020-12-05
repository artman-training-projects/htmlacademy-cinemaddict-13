import AbstractView from "../../abstractView";

const createMainFilmListHeaderTemplate = (title, isMain) => {
  const addHidden = () => isMain ? `visually-hidden` : ``;

  return (
    `<h2 class="films-list__title ${addHidden()}">${title}</h2>`
  );
};

export default class FilmListHeader extends AbstractView {
  constructor(title, isMain = false) {
    super();
    this._title = title;
    this._isMain = isMain;
  }

  getTemplate() {
    return createMainFilmListHeaderTemplate(this._title, this._isMain);
  }
}
