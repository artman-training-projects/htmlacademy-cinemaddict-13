import {getRandomizedFilm} from "../mock/films";
import {getRandomNumber} from "../utils";

const Fraction = {
  FILL: 0.4,
  EMPTY: 0.2,
};

const films = (() => {
  const random = Math.random();

  if (random > Fraction.FILL) {
    return new Array(getRandomNumber(20, 15)).fill(``).map(getRandomizedFilm);
  }

  if (random > Fraction.EMPTY) {
    return [];
  }

  return false;
})();

export const getFilmsFromServer = () => new Promise((resolve, reject) => {
  setTimeout(() => films ? resolve(films) : reject(new Error(`Упс! Загрузка не удалась`)), 2000);
});
