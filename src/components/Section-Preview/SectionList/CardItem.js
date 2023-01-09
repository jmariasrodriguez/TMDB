import * as React from "react";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import { ContainerCard, ContentCard, BoxRaiting } from "../styleSectionPreview";
import { isMovie,oneGenre } from "../../../utils";

export default function CardItem({ show, genres }) {
  const navigate = useNavigate();

  const movieTv = isMovie(show);

  let genre = oneGenre(genres,show)
  
  const handleClick = () => {
    show.first_air_date
      ? navigate(`/tv/${show.id}`)
      : navigate(`/movies/${show.id}`);
  };

  return (
    <ContainerCard value={show.id}>
      <CardCover>
        <img
          srcSet={`https://www.themoviedb.org/t/p/original/${show.poster_path}`}
          alt={movieTv.name}
        />
      </CardCover>
      <CardActionArea sx={{position:"relative", height:"100%"}} onClick={handleClick}>
        <ContentCard value={show.id}>
          <BoxRaiting>
            <Rating
              name="text-feedback"
              value={movieTv.value}
              readOnly
              precision={0.5}
              size="small"
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.3, color: "#fff" }}
                  fontSize="inherit"
                />
              }
            />
          </BoxRaiting>
          <Typography textColor="#fff" fontSize="sm" paddingTop={"4px"}>
            {movieTv.year},{genre}
          </Typography>

          <Typography level="h6" fontSize="md" textColor="#fff" marginTop={1}>
            {movieTv.name}
          </Typography>
        </ContentCard>
      </CardActionArea>
    </ContainerCard>
  );
}
