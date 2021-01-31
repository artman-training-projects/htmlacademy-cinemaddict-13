import {Keys} from "../consts";
import {removeComponent, renderComponent} from "../render";
import PopupForm from "../view/popup/popup-form";
import PopupInfo from "../view/popup/popup-info";
import PopupComments from "../view/popup/popup-comments";

export default class FilmPopup {
  constructor() {
    if (!new.target.instance) {
      new.target.instance = this;
    } else {
      return new.target.instance;
    }

    this._container = document.body;
    this._film = null;
    this._isShown = false;

    this._updateCard = null;
    this._popupForm = null;
    this._popupInfo = null;
    this._popupComments = null;

    this._showPopup = this._showPopup.bind(this);
    this._updatePopup = this._updatePopup.bind(this);
    this._onClosePopupKeydown = this._onClosePopupKeydown.bind(this);
    this.close = this.close.bind(this);
  }

  set film(film) {
    this._film = film;
  }

  set updateCard(callback) {
    this._updateCard = callback;
  }

  open() {
    if (this._isShown) {
      this._updatePopup();
    } else {
      this._showPopup();
    }
  }

  close() {
    this._isShown = false;
    this._popupForm.getElement().remove();

    this._container.removeEventListener(`keydown`, this._onClosePopupKeydown);
    this._container.classList.remove(`hide-overflow`);
  }

  _showPopup() {
    this._isShown = true;
    this._renderPopup();

    this._container.addEventListener(`keydown`, this._onClosePopupKeydown);
    this._container.classList.add(`hide-overflow`);
  }

  _updatePopup() {
    removeComponent(this._popupForm);
    this._renderPopup();
  }

  _renderPopup() {
    this._popupForm = new PopupForm();
    this._popupInfo = new PopupInfo(this._film, this._updateCard);
    this._popupComments = new PopupComments(this._film, this._updateCard);

    renderComponent(this._container, this._popupForm);
    renderComponent(this._popupForm, this._popupInfo);
    renderComponent(this._popupForm, this._popupComments);

    this._popupInfo.setHandlers();
    this._popupComments.setHandlers();
  }

  _onClosePopupKeydown(evt) {
    if (evt.key === Keys.ESCAPE) {
      this.close();
    }
  }
}
