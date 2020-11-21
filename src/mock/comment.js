import {nanoid} from "nanoid";
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
dayjs.extend(dayjsRandom);
import {getRandomNumber} from "../utils";

const commentAuthor = [`Tina Kuzmenko`, `Alex Khab`, `Artur Trifonov`, `Vladimir Art`];
const commentText = [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`];
const commentEmotion = [`smile`, `sleeping`, `puke`, `angry`];

export const getRandomizedComment = () => ({
  id: nanoid(),
  author: commentAuthor[getRandomNumber(commentAuthor.length - 1)],
  comment: commentText[getRandomNumber(commentText.length - 1)],
  date: dayjs.between(`2020-09-20T00:00:00+03:00`, `2020-11-20T00:00:00+03:00`).format(),
  emotion: commentEmotion[getRandomNumber(commentEmotion.length - 1)],
});
