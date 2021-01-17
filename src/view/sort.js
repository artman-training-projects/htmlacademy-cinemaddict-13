import AbstractView from "./abstractView";
import {Sorts} from "../consts";

const createMainSortTemplate = (currentSortType) => {
  const setActiveClass = (type) => currentSortType === type ? `sort__button--active` : ``;

  const generateLinks = () => Object.values(Sorts).map((sortType) => (
    `<li><a href="#" class="sort__button ${setActiveClass(sortType)}" data-sort-type="${sortType}">${sortType}</a></li>`
  )).join(``);

  return (
    `<ul class="sort">
      ${generateLinks()}
    </ul>`
  );
};

export default class Sort extends AbstractView {
  constructor(appInstance, sortType = Sorts.DEFAULT) {
    super();
    this._appInstance = appInstance;
    this._sortType = sortType;

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createMainSortTemplate(this._sortType);
  }

  setHandlers() {
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }

  _updateSort() {
    this.updateElement();
    this.setHandlers();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    const selectedSortType = evt.target.dataset.sortType;

    if (this._sortType === selectedSortType) {
      return;
    }

    evt.preventDefault();
    this._sortType = selectedSortType;
    this._appInstance.changeSort(selectedSortType);
    this._updateSort();
  }
}
