import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import { CarouselCard, ContentCarouselCard } from "./styleCarousel";
import { oneGenre } from "../../utils";
import { getParsedITem } from "../../utils/formatters";
import { useSelector } from "react-redux";
import { MOVIES_GENRES } from "../../data/constants";

export default function CustomCarouselCard({ item}) {

  const movieTv = getParsedITem(item);

  const sectionData = {
    [MOVIES_GENRES]: useSelector((state) => state[MOVIES_GENRES]),
  };

  let genre = sectionData[MOVIES_GENRES]

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
            {movieTv.year}, {item.genre_ids && sectionData[MOVIES_GENRES].data.length > 0 ? oneGenre(genre.data, item) : null}
          </Typography>

          <Typography
            sx={{ display: { xs: "none", lg: "flex" } }}
            {...TypoProps} 
            fontWeight="100"
          >
            {item.overview.substring(0,269) + " ..."}
          </Typography>
        </ContentCarouselCard>
      </CarouselCard>
    </Link>
  );
}
