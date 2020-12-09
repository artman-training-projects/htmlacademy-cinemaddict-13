import AbstractView from "../abstractView";
import {Filters} from "../../consts";

const initFilter = {
  [Filters.ALL]: null,
  [Filters.WATCHLIST]: 0,
  [Filters.HISTORY]: 0,
  [Filters.FAVORITES]: 0,
};

export const generateFilters = (films) => films.reduce((acc, item) => {
  return {
    [Filters.ALL]: null,
    [Filters.WATCHLIST]: item.watchlist ? ++acc[Filters.WATCHLIST] : acc[Filters.WATCHLIST],
    [Filters.HISTORY]: item.watched ? ++acc[Filters.HISTORY] : acc[Filters.HISTORY],
    [Filters.FAVORITES]: item.favorite ? ++acc[Filters.FAVORITES] : acc[Filters.FAVORITES],
  };
}, initFilter);


const generateFilter = (filter) => Object.entries(filter).map(([filterName, amountFilms]) => ({
  filter: filterName,
  amount: amountFilms,
}));

const createMainFilterTemplate = (filters) => {
  const filter = generateFilter(filters);

  const generateLinks = (navFilters) => navFilters.map((link) => (
    `<a href="#${link.filter}"
      class="main-navigation__item ${link.filter === Filters.ALL ? `main-navigation__item--active` : ``}">
      ${link.filter} ${link.filter !== Filters.ALL ? `<span class="main-navigation__item-count">${link.amount}</span></a>` : ``}`
  )).join(``);

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${generateLinks(filter)}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export default class Filter extends AbstractView {
  constructor(filters = initFilter) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createMainFilterTemplate(this._filters);
  }
}
