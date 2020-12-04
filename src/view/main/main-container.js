import AbstractView from "../abstract";

const createMainContainerTemplate = () => {
  return (
    `<section class="films"></section>`
  );
};

export default class MainContainer extends AbstractView {
  getTemplate() {
    return createMainContainerTemplate();
  }
}
