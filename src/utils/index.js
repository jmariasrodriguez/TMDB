function isMovie(show) {
  let value = show.vote_average / 2;
  let year;
  let name;

  if (show.release_date) {
    year = show.release_date.split("-")[0];
    name = show.original_title;
  } else {
    year = show.first_air_date.split("-")[0];
    name = show.name;
  }
  return { value, year, name };
}

function oneGenre(genres, show) {
  let genre = genres.filter((genero) => {
    return genero.id === show.genre_ids[0];
  });
  if (genre[0]) {
    genre = genre[0].name;
  } else {
    genre = "";
  }

  return genre;
}

module.exports = { isMovie, oneGenre };
