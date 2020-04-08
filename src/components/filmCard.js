export const getSiteFilmCard = ({image, name, description, rating, year, duration, genre, commentsCount, isFavorite, isWatched, id}) => {
  return (
    `<article class="film-card">
          <h3 data-id="${id}" class="film-card__title">${name}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img data-id="${id}"  src="./images/posters/${image}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a data-id="${id}" class="film-card__comments">${commentsCount} ${commentsCount > 1 ? `comments` : `comment`}</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? `film-card__controls-item--active` : ``}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
          </form>
        </article>`
  );
};