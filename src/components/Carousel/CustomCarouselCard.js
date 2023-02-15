import * as React from "react";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import { CarouselCard, ContentCarouselCard } from "./styleCarousel";
import { oneGenre } from "../../utils";
import { getParsedITem } from "../../utils/formatters";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CustomCarouselCard({ item}) {
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

  const redirect = item.first_air_date ? `/tv/${item.id}` : `/movie/${item.id}`;

  const TypoProps = {
    fontSize:"lg",
    fontWeight:"bold",
    textColor:"#f9f9f9",
    m:0.25
  }

  return (
    <Link to={redirect}>
      <CarouselCard value={item.id}>
        <CardCover>
          <img
            srcSet={`https://www.themoviedb.org/t/p/original/${item.backdrop_path}`}
            alt={movieTv.name}
          />
        </CardCover>
        <ContentCarouselCard value={item.id}>
          <Typography {...TypoProps}>
            {movieTv.name}
          </Typography>

          <Typography {...TypoProps}>
            {movieTv.year}, 
            {item.genre_ids && sectionData.moviesGenre.data.length > 0 && sectionData.moviesGenre.data.length > 0 ? oneGenre(genre.data, item) : null}
          </Typography>

          <Typography
            sx={{ display: { xs: "none", md: "flex" } }}
            {...TypoProps} 
            fontWeight="100"
          >
            {item.overview}
          </Typography>
        </ContentCarouselCard>
      </CarouselCard>
    </Link>
  );
}
