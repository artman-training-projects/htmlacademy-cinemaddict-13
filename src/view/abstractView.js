import {createElement, replaceElement} from "../render";

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Нельзя создать Абстрактный класс, только экземпляр.`);
    }

    this._element = null;
    this._newElement = null;
    this._callbacks = {};
  }

  getTemplate() {
    throw new Error(`Отсутствует имплементация абстрактного метода: getTemplate.`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  updateElement() {
    this._newElement = createElement(this.getTemplate());

    if (this._element) {
      replaceElement(this._element, this._newElement);
    }

    this._newElement = null;
  }

  removeElement() {
    this._element = null;
  }
}
