import AbstractView from "../../abstractView";

const createShowMoreBtnTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class ShowMoreBtn extends AbstractView {
  constructor() {
    super();
    this._showMoreHandler = this._showMoreHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreBtnTemplate();
  }

  _showMoreHandler(evt) {
    evt.preventDefault();
    this._callbacks.showMore();
  }

  setShowMoreHandler(callback) {
    this._callbacks.showMore = callback;
    this.getElement().addEventListener(`click`, this._showMoreHandler);
  }
}
