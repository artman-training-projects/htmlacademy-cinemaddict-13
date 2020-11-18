export const createMainFilmListHeader = (title, isMain = false) => {
  const addHidden = () => isMain ? `visually-hidden` : ``;

  return (
    `<h2 class="films-list__title ${addHidden()}">${title}</h2>`
  );
};
