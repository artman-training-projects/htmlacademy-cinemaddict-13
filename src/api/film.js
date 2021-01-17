export default class Film {
  constructor(film) {
    this._film = film;
  }

  get info() {
    return this._film;
  }

  get isInWatchlist() {
    return this._film.watchlist;
  }

  get isWatched() {
    return this._film.watched;
  }

  get isFavorite() {
    return this._film.favorite;
  }

  get rating() {
    return this._film.rating;
  }

  get comments() {
    return this._film.comments;
  }

  get releaseDate() {
    return this._film.releaseDate;
  }

  set isInWatchlist(bool) {
    this._film.watchlist = bool;
  }

  set isWatched(bool) {
    this._film.watched = bool;
  }

  set isFavorite(bool) {
    this._film.favorite = bool;
  }
}
