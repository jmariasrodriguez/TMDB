import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SectionMainTitle from "../../components/Section-MainTitle";
import SectionPreview from "../../components/Section-Preview";
import { API_URL, MAIN_TITLE, MOVIES } from "../../data/constants";
import {
  onSetMovies,
  setMoviesFail,
  setMoviesSuccess,
} from "../../state/movies";

const SearchView = () => {
  let searchValue = useLocation().search.split("=")[1];

  const sectionData = {
    [MOVIES]: useSelector((state) => state[MOVIES]),
  };
  const dispatch = useDispatch();

  useEffect(() => {
    //Search the value in the api and set it on a state
    dispatch(onSetMovies());
    axios
      .get(
        `${API_URL.beginningPath}search/multi?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&query=${searchValue}&page=1&include_adult=false`
      )
      .then((Movies) => {
        dispatch(setMoviesSuccess(Movies.data.results));
      })
      .catch((err) => {
        dispatch(setMoviesFail(err.message || "Sorry, something went wrong."));
      });
  }, []);

  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "1200px",
        minHeight: "700px",
      }}
    >
      <SectionMainTitle mainTitle={MAIN_TITLE.searchView} />
      <SectionPreview {...sectionData[MOVIES]} />
    </Box>
  );
};

export default SearchView;
