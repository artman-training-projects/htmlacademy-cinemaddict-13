import AbstractView from "./abstractView";
import {Sorts} from "../consts";
import Cinemaddict from "../presenter/Cinemaddict";

const createMainSortTemplate = (CurrentSortType) => {
  const isActive = (type) => CurrentSortType === type ? `sort__button--active` : ``;

  const generateLinks = () => Object.values(Sorts).map((sortType) => (
    `<li><a href="#" class="sort__button ${isActive(sortType)}" data-sort-type="${sortType}">${sortType}</a></li>`
  )).join(``);

  return (
    `<ul class="sort">
      ${generateLinks()}
    </ul>`
  );
};

export default class Sort extends AbstractView {
  constructor() {
    super();
    this._sortType = Sorts.DEFAULT;
  }

  set setType(type) {
    this._sortType = type;
  }

  getTemplate() {
    return createMainSortTemplate(this._sortType);
  }

  setHandlers() {
    this._setSortTypeChangeHandler();
  }

  _updateSort() {
    this.updateElement();
    this.setHandlers();
  }

  _setSortTypeChangeHandler() {
    this.getElement().addEventListener(`click`, (evt) => {
      if (evt.target.tagName !== `A`) {
        return;
      }

      const selectedSortType = evt.target.dataset.sortType;

      if (this._sortType === selectedSortType) {
        return;
      }

      evt.preventDefault();
      this._sortType = selectedSortType;
      new Cinemaddict().sortType = selectedSortType;
      this._updateSort();
    });
  }
}
