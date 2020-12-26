import AbstractView from './view/abstractView';

export const RenderPosition = {
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
};

export const renderComponent = (container, child, place = RenderPosition.BEFOREEND) => {
  if (container instanceof AbstractView) {
    container = container.getElement();
  }

  if (child instanceof AbstractView) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
    case RenderPosition.AFTEREND:
      container.after(child);
      break;
  }
};

export const replaceElement = (oldChild, newChild) => {
  if (oldChild instanceof AbstractView) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof AbstractView) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (!parent || !oldChild || !newChild) {
    throw new Error(`Нельзя заменить несуществующие элементы`);
  }

  parent.replaceChild(newChild, oldChild);
};

export const removeComponent = (component) => {
  if (!(component instanceof AbstractView)) {
    throw new Error(`Только компонент может быть удалён`);
  }

  component.getElement().remove();
  component.removeElement();
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};
