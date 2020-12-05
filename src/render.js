import AbstractView from './view/abstractView';

export const RenderPosition = {
  BEFOREEND: `beforeend`,
};

export const renderElement = (container, child, place = RenderPosition.BEFOREEND) => {
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
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};
