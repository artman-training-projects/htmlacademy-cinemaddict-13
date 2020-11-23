import {nanoid} from "nanoid";
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
dayjs.extend(dayjsRandom);
import {getRandomNumber} from "../utils";

const commentAuthors = [`Tina Kuzmenko`, `Alex Khab`, `Artur Trifonov`, `Vladimir Art`];
const commentTexts = [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`];
const commentEmotions = [`smile`, `sleeping`, `puke`, `angry`];

export const getRandomizedComment = () => ({
  id: nanoid(),
  author: commentAuthors[getRandomNumber(commentAuthors.length - 1)],
  comment: commentTexts[getRandomNumber(commentTexts.length - 1)],
  date: dayjs.recent(30).format(),
  emotion: commentEmotions[getRandomNumber(commentEmotions.length - 1)],
});
