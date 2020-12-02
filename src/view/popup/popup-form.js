import AbstractView from "../abstract";

const createPopupFormTemplate = () => {
  return (
    `<section class="film-details">
        <form class="film-details__inner" action="" method="get"></form>
    </section>`
  );
};

export default class PopupForm extends AbstractView {
  getTemplate() {
    return createPopupFormTemplate();
  }
}
