import AbstractView from "../../abstractView";

const createFilmsListTemplate = (attr, isMain = false) => {
  const addExtra = () => !isMain ? `films-list--extra` : ``;

  return (
    `<section class="films-list ${addExtra()}" data-list="${attr}"></section>`
  );
};

export default class FilmList extends AbstractView {
  constructor(attr, isMain = false) {
    super();
    this._attr = attr;
    this._isMain = isMain;
  }

  getTemplate() {
    return createFilmsListTemplate(this._attr, this._isMain);
  }
}
