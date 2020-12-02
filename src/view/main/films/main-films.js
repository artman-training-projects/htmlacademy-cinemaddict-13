import AbstractView from "../../abstract";

const createMainFilmsTemplate = () => {
  return (
    `<section class="films"></section>`
  );
};

export default class MainFilms extends AbstractView {
  getTemplate() {
    return createMainFilmsTemplate();
  }
}
