import {  IconButton, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { SINGLE_SHOW, RATINGS_TEXT} from "../../data/constants";
import { CardCover } from "@mui/joy";
import { BoxRaiting } from "../../components/Section-Preview/styleSectionPreview";
import {getParsedITem} from "../../utils/formatters"
import StarIcon from "@mui/icons-material/Star";
import {
  BoxCardContent,
  ContainerCard,
  ImageBox,
  TextBox,
} from "./styleSingleView";
import { onSetFavorites, setFavoritesSuccess } from "../../state/favorites";

const SectionMovieTv = () => {
  const dataTable = {
    [SINGLE_SHOW]: useSelector((state) => state[SINGLE_SHOW].data),
  };
  const movieTv = getParsedITem(dataTable[SINGLE_SHOW]);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch()

  const handleOnclick = ()=>{
    setIsClicked(true)
    let newData = dataTable[SINGLE_SHOW]
    let oldData = JSON.parse(localStorage.getItem("data"))
    
    if(oldData.length === 0){
      oldData.push(newData)
    }else{
      //avoid duplicates
      let ids = oldData.filter(item => item.id === newData.id)
      if(ids.length === 0){
        oldData.push(newData)
      }
    }
    
    localStorage.setItem("data", JSON.stringify(oldData))
    dispatch(onSetFavorites())
    dispatch(setFavoritesSuccess(JSON.parse(localStorage.getItem("data"))));
  }

return (
  <>
      <ContainerCard container>
        <CardCover sx={{ opacity: "0.4" }}>
          <img
            src={`https://www.themoviedb.org/t/p/original/${dataTable[SINGLE_SHOW].backdrop_path}`}
            alt={dataTable[SINGLE_SHOW].backdrop_path}
          />
        </CardCover>
        <BoxCardContent>
          <ImageBox sx={{ display: { xs: "none", sm: "flex" } }}>
            <img
              width="100%"
              src={`https://www.themoviedb.org/t/p/original/${dataTable[SINGLE_SHOW].poster_path}`}
              alt={dataTable[SINGLE_SHOW].backdrop_path}
            />
          </ImageBox>
          <TextBox>
              <Typography variant="h3" color="#f9f9f9">
                {movieTv.name}, {movieTv.year}
              </Typography>
              <Typography variant="h5" color="#f9f9f9">
                {movieTv.showType}, {dataTable[SINGLE_SHOW].genres? dataTable[SINGLE_SHOW].genres[0].name: null}
              </Typography>
              <BoxRaiting
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "16px 4px 4px 0px",
                }}
              >
                <Rating
                  size="large"
                  name="text-feedback"
                  value={movieTv.value}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.3, color: "#f9f9f9" }} fontSize="inherit"/>}
                ></Rating>
                <Typography sx={{ ml: 1, color: "#f9f9f9", fontWeight: "bold" }}>
                  {RATINGS_TEXT[movieTv.value]}
                </Typography>{" "}
                <IconButton aria-label="favorite" color="primary" onClick={handleOnclick} disabled={isClicked} ><FavoriteIcon sx={{ marginLeft: "16px" }}/></IconButton> 
              </BoxRaiting>
              <Typography
                variant="h6"
                color="#f9f9f9"
                sx={{ margin: "16px 4px 4px 0px" }}
              >
                OVERVIEW
              </Typography>
              <Typography
                variant="body1"
                color="#f9f9f9"
                sx={{ marginRight: "10%"}}
              >
                {dataTable[SINGLE_SHOW].overview }  
              </Typography>
          </TextBox>
        </BoxCardContent>
      </ContainerCard>
    </>
  );
};

export default SectionMovieTv;
