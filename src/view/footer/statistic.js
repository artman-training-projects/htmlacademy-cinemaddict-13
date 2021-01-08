import AbstractView from "../abstractView";

const createFooterStatisticTemplate = (filmAmount) => {
  return (
    `<p>${filmAmount} movies inside</p>`
  );
};

export default class Statistic extends AbstractView {
  constructor(amount = 0) {
    super();
    this._amount = amount;
  }

  totalFilms(amount) {
    this._amount = amount;
    this.updateElement();
  }

  getTemplate() {
    return createFooterStatisticTemplate(this._amount);
  }
}
