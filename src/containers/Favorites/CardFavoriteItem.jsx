import * as React from "react";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { CardActionArea, IconButton } from "@mui/material";
import { ContainerCard, ContentCard, BoxRaiting } from "../Favorites/styleSectionPreview";
import {oneGenre } from "../../utils";
import {getParsedITem} from "../../utils/formatters"
import { ImageBox, TextBox } from "../SingleView/styleSingleView";
import { SINGLE_SHOW } from "../../data/constants";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

export default function CardFavoriteItem({ show}) {
  const navigate = useNavigate();

  const movieTv = getParsedITem(show);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    show.first_air_date
      ? navigate(`/tv/${show.id}`)
      : navigate(`/movie/${show.id}`);
      window.location.reload();
  };

  const handleClickDelete = () =>{
    let idToDelete= show.id
    setIsClicked(true)
    let oldData = JSON.parse(localStorage.getItem("data"))
    let newData = oldData.filter((show) => show.id !== idToDelete )
    localStorage.setItem("data", JSON.stringify(newData))
  }
  
  return (
   <>
   <Box display={"flex"} sx={{flexDirection:"row"}}>
    <Box>
        <CardActionArea onClick={handleClick}>
        <ImageBox sx={{   height: "255px",
  width: "170px",
  padding: "0px",
  marginTop: "30px", display: { xs: "flex" } }}>
            <img
              width="100%"
              src={`https://www.themoviedb.org/t/p/original/${show.poster_path}`}
              img
            />
          </ImageBox>
        </CardActionArea>
    </Box>
    <Box>
          <TextBox>
            <Box display={"flex"} sx={{flexDirection: "row", alignItems:"center"}}>
          <Typography variant="h3" sx={{color:"#f9f9f9", fontWeight:"bold"}} >
                {movieTv.name}, {movieTv.year}
              </Typography>
              <IconButton aria-label="delete" color="primary" onClick={handleClickDelete} disabled={isClicked}><DeleteIcon sx={{ marginLeft: "16px"}} />
                </IconButton>
            </Box>
              <Typography variant="h5" sx={{color:"#f9f9f9"}}>
                {movieTv.showType}, {show.genres? show.genres[0].name: null}
              </Typography>
              <Typography
                variant="body1"
                sx={{marginRight: "20%", marginTop:"1%", color:"grey"}}
              >
                {show.overview}
              </Typography>
          </TextBox>
    </Box>

   </Box>
   </>
  );
}
