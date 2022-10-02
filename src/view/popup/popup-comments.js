import {nanoid} from "nanoid";
import dayjs from "dayjs";

import {Keys, TagNames} from "../../consts";
import SmartView from "../smartView";

const Emojis = {
  SMILE: `smile`,
  SLEEPING: `sleeping`,
  PUKE: `puke`,
  ANGRY: `angry`
};

const createPopupCommentsTemplate = (oldData, currentData) => {
  const markupComments = oldData.map((data) => (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${data.emotion}.png" width="55" height="55" alt="emoji-${data.emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${data.comment}</p>
        <p class="film-details__comment-info" data-comment="${data.id}">
          <span class="film-details__comment-author">${data.author}</span>
          <span class="film-details__comment-day">${dayjs(data.date).format(`YYYY/MM/DD HH:mm`)}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  )).join(``);

  const markupEmoji = currentData.emotion
    ? `<img src="images/emoji/${currentData.emotion}.png" width="55" height="55" alt="emoji-${currentData.emotion}">`
    : ``;

  const isActiveEmoji = (emoji) => currentData.emotion === emoji ? `checked` : ``;

  const markupInputs = Object.values(Emojis).map((emoji) => (
    `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}" ${isActiveEmoji(emoji)}>
    <label class="film-details__emoji-label" for="emoji-${emoji}" data-emoji="${emoji}">
      <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji-${emoji}">
    </label>`
  )).join(``);

  const isCommentText = currentData.comment ? currentData.comment : ``;

  return (
    `<div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${oldData.length}</span></h3>

        <ul class="film-details__comments-list">
          ${markupComments}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label">
            ${markupEmoji}
          </div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${isCommentText}</textarea>
          </label>

          <div class="film-details__emoji-list">
            ${markupInputs}
          </div>
        </div>
      </section>
    </div>`
  );
};

export default class PopupComments extends SmartView {
  constructor(film, updateCard) {
    super();
    this._film = film;
    this._updateCard = updateCard;
    this._currentData = {};

    this._updateComments = this._updateComments.bind(this);
  }

  set film(film) {
    this._film = film;
    this.updateElement();
  }

  getTemplate() {
    return createPopupCommentsTemplate(this._film.comments, this._currentData);
  }

  setHandlers() {
    this._setChoiceEmoji();
    this._setTextInputHandler();
    this._setSendCommentHandler();
    this._setDeleteCommentHandler();
  }

  _updateComments() {
    this._updateCard();
    this.updateElement();
    this.setHandlers();
  }

  _setChoiceEmoji() {
    this.getElement().querySelector(`.film-details__emoji-list`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();

        if (evt.target.tagName !== TagNames.IMG) {
          return;
        }

        const emoji = evt.target.parentElement.dataset.emoji;
        this._currentData.emotion = emoji;
        this._updateComments();
      });
  }

  _setTextInputHandler() {
    this.getElement().querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, (evt) => {
        const inputText = evt.target.value;
        this._currentData.comment = inputText;
      });
  }

  _setSendCommentHandler() {
    this.getElement().querySelector(`.film-details__comment-input`)
      .addEventListener(`keydown`, (evt) => {
        if (evt.key === Keys.ENTER) {
          evt.preventDefault();

          this._film.comments.push({
            id: nanoid(),
            author: `Some author`,
            comment: this._currentData.comment,
            date: new Date(),
            emotion: this._currentData.emotion
          });

          this._updateComments();
        }
      });
  }

  _setDeleteCommentHandler() {
    this.getElement().querySelector(`.film-details__comments-list`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();

        if (evt.target.tagName !== TagNames.BUTTON) {
          return;
        }

        const commentId = evt.target.parentElement.dataset.comment;
        const finedCommentIndex = this._film.comments.findIndex((comment) => comment.id === commentId);
        this._film.comments.splice(finedCommentIndex, 1);
        this._updateComments();
      });
  }
}
