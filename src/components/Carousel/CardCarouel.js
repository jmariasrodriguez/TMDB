import * as React from "react";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import { CarouselCard, ContentCarouselCard } from "./styleCarousel";
import { isMovie,oneGenre } from "../../utils";

export default function CardCarouel({ show, genres }) {
  const navigate = useNavigate();

  const movieTv= isMovie(show)

  let genre = oneGenre(genres,show)

  const handleClick = () => {
    show.first_air_date
      ? navigate(`/tv/${show.id}`)
      : navigate(`/movies/${show.id}`);
  };

  return (
    <CarouselCard value={show.id}>
      <CardCover>
        <img
          srcSet={`https://www.themoviedb.org/t/p/original/${show.backdrop_path}`}
          alt={movieTv.name}
        />
      </CardCover>
      <CardActionArea onClick={handleClick}>
        <ContentCarouselCard value={show.id}>
          <Typography fontSize="lg" fontWeight="bold" textColor="#fff" m={0.25}>
            {movieTv.name}
          </Typography>

          <Typography textColor="#fff" fontSize="lg" fontWeight="bold" m={0.25}>
            {movieTv.year}, {genre}
          </Typography>

          <Typography sx={{display: { xs: "none", md: "flex" }}} textColor="#fff" fontSize="sm" m={0.25}>
            {show.overview}
          </Typography>
        </ContentCarouselCard>
      </CardActionArea>
    </CarouselCard>
  );
}
