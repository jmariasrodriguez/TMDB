import * as React from "react";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";
import { CardActionArea, IconButton } from "@mui/material";
import {getParsedITem} from "../../utils/formatters"
import { ImageBox, TextBox } from "../SingleView/styleSingleView";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { onSetFavorites, setFavoritesSuccess } from "../../state/favorites";
import { useEffect } from "react";

export default function CardFavoriteItem({ item}) {
  
  const navigate = useNavigate();
  
  const movieTv = getParsedITem(item);
  const [isClicked, setIsClicked] = React.useState(false);
  
  const handleClick = () => {
    item.first_air_date
    ? navigate(`/tv/${item.id}`)
    : navigate(`/movie/${item.id}`);
    window.location.reload();
  };
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(onSetFavorites())
    dispatch(setFavoritesSuccess(JSON.parse(localStorage.getItem("data"))));
  }, [isClicked])


  const handleClickDelete = () =>{
    let idToDelete= item.id
    setIsClicked(true)
    let oldData = JSON.parse(localStorage.getItem("data"))
    let newData = oldData.filter((item) => item.id !== idToDelete )
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
              src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`}
              alt={item.poster_path}
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
                {movieTv.showType}, {item.genres? item.genres[0].name: null}
              </Typography>
              <Typography
                variant="body1"
                sx={{marginRight: "20%", marginTop:"1%", color:"grey"}}
              >
                {item.overview}
              </Typography>
          </TextBox>
    </Box>

   </Box>
   </>
  );
}
