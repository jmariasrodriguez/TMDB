import Typography from "@mui/joy/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { ContentCard, BoxRaiting } from "../styleSectionPreview";
import {oneGenre } from "../../../utils";
import {getParsedITem} from "../../../utils/formatters"
import { useSelector } from "react-redux";
import { MOVIES_GENRES, TV_SERIES_GENRES } from "../../../data/constants";



export default function CardItem({ item}) {
  const movieTv = getParsedITem(item);

  const sectionData = {
  [MOVIES_GENRES]: useSelector((state) => state[MOVIES_GENRES]),
  [TV_SERIES_GENRES]: useSelector((state) => state[TV_SERIES_GENRES]),
  };

  let genre
  if(movieTv.showType === "Movie"){
     genre = sectionData[MOVIES_GENRES]
  }else{
    genre = sectionData[TV_SERIES_GENRES]
  }

  const redirect = item.first_air_date? `/tv/${item.id}` : `/movie/${item.id}`

  return (
    <Link to={redirect}>
    <Box sx={{ display:"flex", flexDirection:"row", alignItems:"end", height: "340px",
    width: "180px",
    backgroundImage:`url(https://www.themoviedb.org/t/p/original/${item.poster_path})`, backgroundSize:"180px 340px" }} value={item.id}>

      <Box sx={{position:"relative", minWidth:"180px"}}>

        <ContentCard value={item.id}>
          <BoxRaiting>
            <Rating
              name="text-feedback"
              value={movieTv.value}
              readOnly
              precision={0.5}
              size="small"
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.3, color: "#f9f9f9" }}
                  fontSize="inherit"
                />
              }
              />
          </BoxRaiting>
          <Typography textColor="#f9f9f9" fontSize="sm" marginTop={"4px"} marginLeft={"4px"}>
            {movieTv.year}, {item.genre_ids && sectionData[MOVIES_GENRES].data.length > 0 && sectionData[TV_SERIES_GENRES].data.length > 0 ? oneGenre(genre.data, item) : null}
          </Typography>
          <Typography level="h6" fontSize="md" textColor="#f9f9f9" marginTop={"4px"} marginLeft={"4px"}>
            {movieTv.name && movieTv.name.length > 42? movieTv.name.substring(0,37) + " .." : movieTv.name}
          </Typography>
        </ContentCard>
        </Box>
        </Box>
        </Link>
  );
}
