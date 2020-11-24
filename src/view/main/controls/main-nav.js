import {Nav} from "../../../consts";

export const createMainNav = (filteredFilms, active = Nav.ALL) => {
  const generateFilter = (filter) => Object.entries(filter).map(([filterName, amountFilms]) => ({
    filter: filterName,
    amount: amountFilms,
  }));

  const navs = generateFilter(filteredFilms);

  const links = [];
  const generateLinks = () => {
    for (const nav of navs) {
      links.push(
          `<a href="#${nav.filter}"
            class="main-navigation__item ${active === nav.filter ? `main-navigation__item--active` : ``}">
            ${nav.filter} ${nav.filter === Nav.ALL ? `` : `<span class="main-navigation__item-count">${nav.amount.length}</span></a>`}`);
    }

    return links.join(``);
  };

  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${generateLinks()}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};
