import AbstractView from "../abstractView";

const createFooterStatisticTemplate = (filmAmount) => {
  return (
    `<p>${filmAmount} movies inside</p>`
  );
};

export default class Statistic extends AbstractView {
  constructor(amount) {
    super();
    this._amount = amount;
  }

  getTemplate() {
    return createFooterStatisticTemplate(this._amount);
  }
}
