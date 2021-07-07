import SmartView from "../smartView";

const UserRank = {
  ZERO: ``,
  NOVICE: `novice`,
  FAN: `fan`,
  BUFF: `buff`,
};

const UserRankMap = new Map([
  [UserRank.ZERO, 0],
  [UserRank.NOVICE, 1],
  [UserRank.FAN, 11],
  [UserRank.BUFF, 21],
]);

const getRank = (watchedFilms) => {
  switch (true) {
    case watchedFilms >= UserRankMap.get(UserRank.BUFF): return UserRank.BUFF;
    case watchedFilms >= UserRankMap.get(UserRank.FAN): return UserRank.FAN;
    case watchedFilms >= UserRankMap.get(UserRank.NOVICE): return UserRank.NOVICE;
    default: return UserRank.ZERO;
  }
};

const createHeaderProfileTemplate = (watchedFilms) => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${getRank(watchedFilms)}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export default class Profile extends SmartView {
  constructor(watchedFilms = 0) {
    super();
    this._watchedFilms = watchedFilms;
  }

  set watchedFilms(films) {
    this._watchedFilms = films;
    this.updateElement();
  }

  getTemplate() {
    return createHeaderProfileTemplate(this._watchedFilms);
  }
}
