import AbstractView from "../../abstractView";

const createShowMoreButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

export default class ShowMoreButton extends AbstractView {
  constructor() {
    super();
    this._showMoreHandler = this._showMoreHandler.bind(this);
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
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
