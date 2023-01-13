import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { API_URL, SINGLE_SHOW_VIEW_TITLES } from "../../data/constants";
import {
  onSetSingleShow,
  setSingleShowFail,
  setSingleShowSuccess,
} from "../../state/singleShow";
import SectionCast from "./SectionCast";
import SectionMovieTv from "./SectionMovieTv";
import SectionRecomendations from "./SectionRecomendations";

const SingleView = ({genres}) => {
  const { id } = useParams();
  const showType = useLocation().pathname.split("/")[1];
  const dispatch = useDispatch();
  const [casting, setCasting] = useState([]);
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    dispatch(onSetSingleShow());
    axios
      .get(
        `${API_URL.beginningPath}${showType}/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`
      )
      .then((show) => {
        dispatch(setSingleShowSuccess(show.data));
      })
      .catch((err) => {
        dispatch(setSingleShowFail(err));
      });
    axios
      .get(
        `${API_URL.beginningPath}${showType}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`
      )
      .then((castData) => {
        setCasting(castData.data.cast);
      });
      axios
      .get(
      `${API_URL.beginningPath}${showType}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`)
      .then((recomendationsData) => {
        setRecomendations(recomendationsData.data.results);
      });
  }, []);

  return (
    <Box
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        maxWidth: "1600px",
      }}
    >
      <SectionMovieTv genres={genres} />
      <SectionCast Title={SINGLE_SHOW_VIEW_TITLES.cast} casting={casting} />
      <SectionRecomendations Title={SINGLE_SHOW_VIEW_TITLES.recomendations} recomendationsData={recomendations} />
    </Box>
  );
};

export default SingleView;
