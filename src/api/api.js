import {getRandomizedFilm} from "../mock/films";
import {getRandomNumber} from "../utils";

const films = (() => {
  // const random = Math.random();
  const random = 1;

  if (random > 0.5) {
    return new Array(getRandomNumber(20, 15)).fill(``).map(getRandomizedFilm);
  }

  if (random > 0.2) {
    return [];
  }

  return null;
})();

export const getFilmsFromServer = () => new Promise((resolve, reject) => {
  setTimeout(() => films ? resolve(films) : reject(new Error(`Упс! Загрузка не удалась`)), 0);
});
