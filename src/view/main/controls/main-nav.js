import {Nav} from "../../../consts";

// TODO: filterMap, by Alex Khab
const generateFilter = (filter) => Object.entries(filter).map(([filterName, amountFilms]) => ({
  filter: filterName,
  amount: amountFilms,
}));

export const createMainNav = (filteredFilms, active = Nav.ALL) => {
  const filters = generateFilter(filteredFilms);

  const generateLinks = (navs) => navs.map((nav) => (
    `<a href="#${nav.filter}"
      class="main-navigation__item ${active === nav.filter ? `main-navigation__item--active` : ``}">
      ${nav.filter} ${nav.filter === Nav.ALL ? `` : `<span class="main-navigation__item-count">${nav.amount.length}</span></a>`}`
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
