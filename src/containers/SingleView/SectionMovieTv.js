import { Alert, Box, CircularProgress, IconButton, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { SINGLE_SHOW, RATINGS_TEXT} from "../../data/constants";
import { CardCover, ThemeProvider } from "@mui/joy";
import { BoxRaiting } from "../../components/Section-Preview/styleSectionPreview";
import { oneGenre, overviewLimit } from "../../utils";
import {getParsedITem} from "../../utils/formatters"
import StarIcon from "@mui/icons-material/Star";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {
  BoxCardContent,
  ContainerCard,
  ImageBox,
  TextBox,
} from "./styleSingleView";

const SectionMovieTv = ({loading, error, data }) => {
  const dataTable = {
    [SINGLE_SHOW]: useSelector((state) => state[SINGLE_SHOW].data),
  };
  const movieTv = getParsedITem(dataTable[SINGLE_SHOW]);
  const [isClicked, setIsClicked] = useState(false);

let theme = createTheme();
theme = responsiveFontSizes(theme);

const handleOnclick = ()=>{
  setIsClicked(true)
  let newData = dataTable[SINGLE_SHOW]
  if(localStorage.getItem("data") == null){
    localStorage.setItem("data","[]")
  }
  
  let oldData = JSON.parse(localStorage.getItem("data"))
  oldData.push(newData)
  
  localStorage.setItem("data", JSON.stringify(oldData))
}

return (
  <>
      <ContainerCard container sx={{}}>
        <CardCover sx={{ opacity: "0.4" }}>
          <img
            src={`https://www.themoviedb.org/t/p/original/${dataTable[SINGLE_SHOW].backdrop_path}`}
            img
          />
        </CardCover>
        <BoxCardContent>
          <ImageBox sx={{ display: { xs: "none", sm: "flex" } }}>
            <img
              width="100%"
              src={`https://www.themoviedb.org/t/p/original/${dataTable[SINGLE_SHOW].poster_path}`}
              img
            />
          </ImageBox>
          <TextBox>
            <ThemeProvider theme={theme}>
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
                  emptyIcon={
                    <StarIcon
                      style={{ opacity: 0.3, color: "#f9f9f9" }}
                      fontSize="inherit"
                    />
                  }
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
                {dataTable[SINGLE_SHOW].overview}
                
              </Typography>
            </ThemeProvider>
          </TextBox>
        </BoxCardContent>
      </ContainerCard>
    </>
  );
};

export default SectionMovieTv;
