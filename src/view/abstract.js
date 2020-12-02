import {createElement} from "../render";

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Нельзя создать Абстрактный класс, только экземпляр.`);
    }

    this._element = null;
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

  removeElement() {
    this._element = null;
  }
}
