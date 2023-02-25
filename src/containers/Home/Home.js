import React from "react";
import SectionPreview from "../../components/Section-Preview";
import { TABS, MAIN_TITLE, PREVIEW_SECTION_TITLE, API_URL, CAROUSEL_SHOWS } from "../../data/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {onSetUpcoming, setUpcomingFail, setUpcomingSuccess,} from "../../state/upcoming";
import {onSetMovies, setMoviesFail, setMoviesSuccess,} from "../../state/movies";
import { onSetTv, setTvFail, setTvSuccess } from "../../state/tv";
import SectionMainTitle from "../../components/Section-MainTitle";
import SectionCarousel from "../../components/Carousel";
import { TV_SERIES, UPCOMING, MOVIES } from "../../data/constants";
import { Box } from "@mui/material";
import { onSetCarouselShows, setCarouselShowsFail, setCarouselShowsSuccess } from "../../state/carouselShows";

const Home = () => {
  const sectionData = {
    [UPCOMING]: useSelector((state) => state[UPCOMING]),
    [MOVIES]: useSelector((state) => state[MOVIES]),
    [TV_SERIES]: useSelector((state) => state[TV_SERIES]),
    [CAROUSEL_SHOWS]: useSelector((state) => state[CAROUSEL_SHOWS]),
  };
  
  const dispatch = useDispatch();

  useEffect(() => {
    //get Carousel movies
    dispatch(onSetCarouselShows());
    axios
      .get(
        `${API_URL.beginningPath}discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}`
      )
      .then((moviesArray) => {
        dispatch(setCarouselShowsSuccess(moviesArray.data.results));
      })
      .catch((err) => {
        dispatch(setCarouselShowsFail(err.message || "Sorry, something went wrong."));
    });   
  }, [])
  
  useEffect(() => {
    //get Upcoming movies
    dispatch(onSetUpcoming());
    axios
    .get(
      `${API_URL.beginningPath}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`
    )
    .then((upcomingMovies) => {
      dispatch(setUpcomingSuccess(upcomingMovies.data.results));
    })
    .catch((err) => {
      dispatch(setUpcomingFail(err.message || "Sorry, something went wrong."));
    });   
  }, [])
  
  useEffect(() => {
    //get Movies
    dispatch(onSetMovies());
    axios
    .get(
      `${API_URL.beginningPath}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`
    )
    .then((Movies) => {
      dispatch(setMoviesSuccess(Movies.data.results));
    })
    .catch((err) => {
      dispatch(setMoviesFail(err.message || "Sorry, something went wrong."));
    }); 
  }, [])

  useEffect(() => {
    //get TV Series
    dispatch(onSetTv());
    axios
    .get(
      `${API_URL.beginningPath}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`
    )
    .then((TV) => {
      dispatch(setTvSuccess(TV.data.results));
    })
    .catch((err) => {
      dispatch(setTvFail(err.message || "Sorry, something went wrong."));
    });
  }, [])

  return (
    <Box>
      <SectionCarousel {...sectionData[CAROUSEL_SHOWS]}/>
      <SectionMainTitle mainTitle={MAIN_TITLE.homeView}/>
      {Object.keys(PREVIEW_SECTION_TITLE).map((section)=>
          <SectionPreview
          key={section}
          tabs={TABS[section]}
          previewSectionTitle={PREVIEW_SECTION_TITLE[section]}
          {...sectionData[section]}
        />
      )}
    </Box>
  );
};

export default Home;

