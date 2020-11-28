import {nanoid} from "nanoid";
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
import {getRandomNumber} from "../utils";
dayjs.extend(dayjsRandom);

const commentAuthors = [`Tina Kuzmenko`, `Alex Khab`, `Artur Trifonov`, `Vladimir Art`];
const commentTexts = [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`];
const commentEmotions = [`smile`, `sleeping`, `puke`, `angry`];

export const getRandomizedComment = () => ({
  id: nanoid(),
  author: commentAuthors[getRandomNumber(0, commentAuthors.length - 1)],
  comment: commentTexts[getRandomNumber(0, commentTexts.length - 1)],
  date: dayjs.recent(30).format(),
  emotion: commentEmotions[getRandomNumber(0, commentEmotions.length - 1)],
});
