import {getRandomizedFilm} from "../mock/films";
import {getRandomNumber} from "../utils";

const FRACTION = {
  FILL: 0.4,
  EMPTY: 0.2,
};

const films = (() => {
  const random = Math.random();

  if (random > FRACTION.FILL) {
    return new Array(getRandomNumber(20, 15)).fill(``).map(getRandomizedFilm);
  }

  if (random > FRACTION.EMPTY) {
    return [];
  }

  return null;
})();

export const getFilmsFromServer = () => new Promise((resolve, reject) => {
  setTimeout(() => films ? resolve(films) : reject(new Error(`Упс! Загрузка не удалась`)), 2000);
});
