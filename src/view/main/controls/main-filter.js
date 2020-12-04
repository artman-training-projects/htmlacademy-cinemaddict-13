import {Filters} from "../../../consts";

export const generateFilters = (films) => ({
  [Filters.ALL]: films.length,
  [Filters.WATCHLIST]: films.filter((film) => film.watchlist).length,
  [Filters.HISTORY]: films.filter((film) => film.watched).length,
  [Filters.FAVORITES]: films.filter((film) => film.favorite).length,
});


const generateFilter = (filter) => Object.entries(filter).map(([filterName, amountFilms]) => ({
  filter: filterName,
  amount: amountFilms,
}));

export const createMainFilter = (fl, active = Filters.ALL) => {
  const filters = generateFilter(fl);

  const generateLinks = (navs) => navs.map((nav) => (
    `<a href="#${nav.filter}"
      class="main-navigation__item ${active === nav.filter ? `main-navigation__item--active` : ``}">
      ${nav.filter} ${nav.filter === Filters.ALL ? `` : `<span class="main-navigation__item-count">${nav.amount}</span></a>`}`
  )).join(``);

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${generateLinks(filters)}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};
