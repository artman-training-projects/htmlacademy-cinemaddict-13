export const createMainFilmsList = (attr, isMain = false) => {
  const addExtra = () => isMain ? `` : `films-list--extra`;

  return (
    `<section class="films-list ${addExtra()}" data-list="${attr}">

    </section>`
  );
};
