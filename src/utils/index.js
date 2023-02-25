export const isMovie = (item)=> !!item.release_date

export const oneGenre = (genres,item)=> {
  return genres.filter((genero) => genero.id === item.genre_ids[0])[0]?.name
}

 export const overviewLimit = (text)=>{
  let textArray = text.split("").slice(0,280).join("")
  return textArray + "..."
}
