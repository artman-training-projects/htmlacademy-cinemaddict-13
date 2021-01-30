import dayjs from "dayjs";
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
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${data.author}</span>
          <span class="film-details__comment-day">${dayjs(data.date).format(`YYYY/MM/DD HH:mm`)}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  )).join(``);

  const markupEmoji = currentData.emoji
    ? `<img src="images/emoji/${currentData.emoji}.png" width="55" height="55" alt="emoji-${currentData.emoji}">`
    : ``;

  const isActiveEmoji = (emoji) => currentData.emoji === emoji ? `checked` : ``;

  const markupInputs = Object.values(Emojis).map((emoji) => (
    `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}" ${isActiveEmoji(emoji)}>
    <label class="film-details__emoji-label" for="emoji-${emoji}" data-emoji="${emoji}">
      <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji-${emoji}">
    </label>`
  )).join(``);

  const isCommentText = currentData.text ? currentData.text : ``;

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
  constructor(film) {
    super();
    this._film = film;
    this._currentData = {};

    this._updateComments = this._updateComments.bind(this);
  }

  set film(film) {
    this._film = film;
    this.updateElement();
  }

  getTemplate() {
    return createPopupCommentsTemplate(this._film.info.comments, this._currentData);
  }

  setHandlers() {
    this._setChoiceEmoji();
    this._setTextInputHandler();
  }

  _updateComments() {
    this.updateElement();
    this.setHandlers();
  }

  _setChoiceEmoji() {
    this.getElement().querySelector(`.film-details__emoji-list`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const emoji = evt.target.parentElement.dataset.emoji;
        this._currentData.emoji = emoji;
        this._updateComments();
      });
  }

  _setTextInputHandler() {
    this.getElement().querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, (evt) => {
        const inputText = evt.target.value;
        this._currentData.text = inputText;
      });
  }
}
