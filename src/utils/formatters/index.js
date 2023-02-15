import moment from "moment"
import {isMovie} from "../index"

export const getParsedITem = (item)=> {
    return {
          value: parseFloat((Math.round((item.vote_average / 2) * 2) / 2).toFixed(1)),
          year: isMovie(item) ? moment(item.release_date).year() : moment(item.first_air_date).year(),
          name:isMovie(item) ? item.original_title : item.name,
          showType:isMovie(item)? "Movie": "TV Serie",
        }
  }