import {createElement, replaceElement} from "../render";
import AbstractView from "./abstractView";

export default class SmartView extends AbstractView {
  constructor() {
    super();

    this._newElement = null;
  }

  updateElement() {
    this._newElement = createElement(this.getTemplate());

    if (this._element) {
      replaceElement(this._element, this._newElement);
    }

    this._element = this._newElement;
    this._newElement = null;
  }

  // restoreHandlers() {
  //   throw new Error(`Abstract method not implemented: resetHandlers`);
  // }
}
