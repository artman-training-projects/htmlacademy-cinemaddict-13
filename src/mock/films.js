import {nanoid} from "nanoid";
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
dayjs.extend(dayjsRandom);
import {getRandomNumber, getTrueFalse} from "../utils";
import {getRandomizedComment} from "./comment";

const filmTitles = [
  `Made for each other`,
  `Popeye Meets Sinbad`,
  `Sagebrush Trail`,
  `Santa Claus Conquers the Martians`,
  `The Dance of Life`,
  `The Great Flamarion`,
  `The Man with the Golden Arm`,
];

const filmDescriptions = [
  `While on a business trip, an ambitious young lawyer meets and immediately falls in love with a stranger. They wed the following day, and tragedy soon strikes.`,
  `The legendary sailors Popeye and Sindbad do battle to see which one is the greatest.`,
  `The Duke is wrongly convicted for a killing, but he escapes from prison and heads out west to find the real killer.`,
  `The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.`,
  `A vaudeville comic and a pretty young dancer aren't having much luck in their separate careers, so they decide to combine their acts and in order to save money on the road, they get married.`,
  `Part of an entertainment act, a beautiful but unscrupulous female performer manipulates all the men in her life in order to achieve her aims.`,
  `A junkie must face his true self to kick his drug addiction.`
];

const filmGenres = [`Drama`, `Film-Noir`, `Mystery`, `Western`, `Musical`, `Comedy`, `Cartoon`, `Mystery`];
const filmDirectors = [`Tom Ford`, `John Cromwell`, `Jennifer Aniston`, `Thomas Vinterberg`, `Taylor Dooley`];
const filmWriters = [`Takeshi Kitano`, `Werner Herzog`, `Miles Teller`, `Diane Lane`, `Peter Stormare`, `Jack Black`];
const filmActors = [`Morgan Freeman`, `Matilda De Angelis`, `Kevin Hart`, `Amanda Collin`, `Ji Chang-wook`, `Neslihan Atagül`, `Mark Dacascos`, `Tim Robbins`];
const filmCountry = [`Finland`, `USA`, `France`, `China`, `USSR`, `England`, `Germany`];

export const getRandomizedFilm = () => {
  const filmTitle = filmTitles[getRandomNumber(filmTitles.length - 1)];

  return {
    "id": nanoid(),
    "title": filmTitle,
    "titleOriginal": filmTitle,
    "poster": `images/posters/${filmTitle.toLocaleLowerCase().split(` `).join(`-`)}.jpg`,
    "description": filmDescriptions[getRandomNumber(filmDescriptions.length - 1)],
    "rating": getRandomNumber(10),
    "releaseDate": dayjs.past(100).format(),
    "country": filmCountry[getRandomNumber(filmCountry.length - 1)],
    "runtime": getRandomNumber(120, 30),
    "comments": new Array(getRandomNumber(5)).fill(``).map(getRandomizedComment),
    "director": filmDirectors[getRandomNumber(filmDirectors.length - 1)],
    "writers": new Array(getRandomNumber(2, 1)).fill(``).map(() => filmWriters[getRandomNumber(filmWriters.length - 1)]),
    "actors": new Array(getRandomNumber(4, 2)).fill(``).map(() => filmActors[getRandomNumber(filmActors.length - 1)]),
    "genre": new Array(getRandomNumber(3, 1)).fill(``).map(() => filmGenres[getRandomNumber(filmGenres.length - 1)]),
    "ageRating": getRandomNumber(18),
    "watchlist": getTrueFalse(),
    "watched": getTrueFalse(),
    "favorite": getTrueFalse(),
  };
};
