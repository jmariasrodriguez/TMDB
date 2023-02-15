import * as React from "react";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import { ContainerCard, ContentCard, BoxRaiting } from "../styleSectionPreview";
import {oneGenre } from "../../../utils";
import {getParsedITem} from "../../../utils/formatters"
import { useSelector } from "react-redux";


export default function CardItem({ item}) {
  const movieTv = getParsedITem(item);

  const sectionData = {
    moviesGenre: useSelector((state) => state.moviesGenre),
    seriesGenre: useSelector((state) => state.seriesGenre),
  };

  let genre
  if(movieTv === "Movie"){
     genre = sectionData.moviesGenre
  }else{
    genre = sectionData.moviesGenre
  }

  const navigate = useNavigate();

  const handleClick = () => {
    item.first_air_date
      ? navigate(`/tv/${item.id}`)
      : navigate(`/movie/${item.id}`);
      window.location.reload();
  };
  
  return (
    <ContainerCard value={item.id}>
      <CardCover>
        <img
          srcSet={`https://www.themoviedb.org/t/p/original/${item.poster_path}`}
          alt={movieTv.name}
        />
      </CardCover>
      <CardActionArea sx={{position:"relative", height:"100%"}} onClick={handleClick}>
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
          <Typography textColor="#f9f9f9" fontSize="sm" paddingTop={"4px"}>
            {movieTv.year},
            {item.genre_ids && sectionData.moviesGenre.data.length > 0 && sectionData.moviesGenre.data.length > 0 ? oneGenre(genre.data, item) : null}
          </Typography>
          <Typography level="h6" fontSize="md" textColor="#f9f9f9" marginTop={1}>
            {movieTv.name}
          </Typography>
        </ContentCard>
      </CardActionArea>
    </ContainerCard>
  );
}
