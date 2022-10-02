import SmartView from "../smartView";

const createFooterStatisticTemplate = (filmAmount) => {
  return (
    `<p>${filmAmount} movies inside</p>`
  );
};

export default class Statistic extends SmartView {
  constructor(amount = 0) {
    super();
    this._amount = amount;
  }

  set totalFilms(amount) {
    this._amount = amount;
    this.updateElement();
  }

  getTemplate() {
    return createFooterStatisticTemplate(this._amount);
  }
}
