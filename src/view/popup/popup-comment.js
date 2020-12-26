import dayjs from "dayjs";
import AbstractView from "../abstractView";

const createPopupCommentTemplate = (comments) => {
  const markupComments = comments.map((comment) => (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${comment.comment}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${comment.author}</span>
          <span class="film-details__comment-day">${dayjs(comment.date).format(`YYYY/MM/DD HH:mm`)}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  )).join(``);

  return (
    `<ul class="film-details__comments-list">
      ${markupComments}
    </ul>`
  );
};

export default class PopupComment extends AbstractView {
  constructor(comments) {
    super();
    this._comments = comments;
  }

  getTemplate() {
    return this._comments.length ? createPopupCommentTemplate(this._comments) : ` `;
  }
}
