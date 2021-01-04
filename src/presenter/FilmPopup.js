import {Keys} from "../consts";
import {renderComponent} from "../render";
import PopupForm from "../view/popup/popup-form";
import PopupInfo from "../view/popup/popup-info";
import PopupComments from "../view/popup/popup-comments";

const single = Symbol(`Singleton-FilmPopup`);

export default class FilmPopup {
  constructor() {
    if (!new.target[single]) {
      new.target[single] = this;
    } else {
      return new.target[single];
    }

    this._container = document.body;
    this._film = {};
    this._isShow = false;

    this._popupForm = null;
    this._popupInfo = null;
    this._popupComments = null;

    this._renderPopup = this._renderPopup.bind(this);
    this._updatePopup = this._updatePopup.bind(this);
    this._onClosePopupClick = this._onClosePopupClick.bind(this);
    this._onClosePopupKeydown = this._onClosePopupKeydown.bind(this);
  }

  open(film) {
    this._film = film;

    if (this._isShow) {
      this._updatePopup();
    } else {
      this._renderPopup();
    }
  }

  _renderPopup() {
    this._isShow = true;

    this._popupForm = new PopupForm();
    this._popupInfo = new PopupInfo(this._film);
    this._popupComments = new PopupComments(this._film.comments);

    renderComponent(this._container, this._popupForm);
    renderComponent(this._popupForm, this._popupInfo);
    renderComponent(this._popupForm, this._popupComments);

    this._container.addEventListener(`keydown`, this._onClosePopupKeydown);
    this._container.classList.add(`hide-overflow`);

    this._setCloseButtonHandler();
  }

  _updatePopup() {
    this._popupInfo.film = this._film;
    this._popupComments.comments = this._film.comments;

    this._setCloseButtonHandler();
  }

  _setCloseButtonHandler() {
    const closeButton = this._container.querySelector(`.film-details__close-btn`);
    closeButton.addEventListener(`click`, this._onClosePopupClick);
  }

  _onClosePopupKeydown(evt) {
    if (evt.key === Keys.ESCAPE) {
      this._onClosePopupClick();
    }
  }

  _onClosePopupClick() {
    this._isShow = false;
    this._popupForm.getElement().remove();
    this._container.removeEventListener(`keydown`, this._onClosePopupKeydown);
    this._container.classList.remove(`hide-overflow`);
  }
}
