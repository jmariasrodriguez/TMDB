function isMovie(show) {
  let value = parseFloat((Math.round((show.vote_average / 2) * 2) / 2).toFixed(1))
  let year;
  let name;
  let showType;

  if (show.release_date) {
    year = show.release_date.split("-")[0];
    name = show.original_title;
    showType = "Movie";
  } else if (show.first_air_date) {
    year = show.first_air_date.split("-")[0];
    name = show.name;
    showType = "TV Serie";
  } else {
    year = "none";
    name = "none";
    showType = "none";
  }
  return { value, year, name, showType };
}

function oneGenre(genres,show) {
  let genre
  // if(show.genre_ids[0] ){
  //   genre = genres.filter((genero) => genero.id === show.genre_ids[0])
  //    genre = genre[0].name
  //   //console.log("genre", genre)
  // } 
  //  else{ genre = "not found"}

  return genre
}

 function overviewLimit (text){
  let textArray = text.split("").slice(0,280).join("")
  return textArray + "..."
}

module.exports = { isMovie,oneGenre,overviewLimit };
