import React from "react";
import SectionPreview from "../../components/Section-Preview";
import { TABS, MAIN_TITLE, PREVIEW_SECTION_TITLE, API_URL } from "../../data/constants";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onSetUpcoming,
  setUpcomingFail,
  setUpcomingSuccess,
} from "../../state/upcoming";
import {
  onSetMovies,
  setMoviesFail,
  setMoviesSuccess,
} from "../../state/movies";
import tv, { onSetTv, setTvFail, setTvSuccess } from "../../state/tv";
import SectionMainTitle from "../../components/Section-MainTitle";
import SectionCarousel from "../../components/Carousel";
import { TV_SERIES, UPCOMING, MOVIES } from "../../data/constants";

const Home = () => {
  const sectionData = {
    [UPCOMING]: useSelector((state) => state[UPCOMING]),
    [MOVIES]: useSelector((state) => state[MOVIES]),
    [TV_SERIES]: useSelector((state) => state[TV_SERIES]),
  };
  
  const [carouselShows, setCarouselShows] = useState([]);
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onSetUpcoming());
    dispatch(onSetTv());
    dispatch(onSetMovies());
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
    axios
      .get(
        `${API_URL.beginningPath}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`
      )
      .then((genres) => {
        setMoviesGenres(genres.data.genres);
      });
    axios
      .get(
        `${API_URL.beginningPath}genre/tv/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`
      )
      .then((genres) => {

        setTvGenres(genres.data.genres);
      });
    axios
      .get(
        `${API_URL.beginningPath}discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}`
      )
      .then((moviesArray) => {
        setCarouselShows(moviesArray.data.results);
      });
  }, []);
const genres = tvGenres.concat(moviesGenres)

  return (
    <>
      <SectionCarousel carouselShows={carouselShows} genres={moviesGenres} />
      <SectionMainTitle mainTitle={MAIN_TITLE.homeView} />
      {Object.keys(PREVIEW_SECTION_TITLE).map((section)=>
          <SectionPreview
          tabs={TABS[section]}
          previewSectionTitle={PREVIEW_SECTION_TITLE[section]}
          genres={genres}
          {...sectionData[section]}
        />
      )}
    </>
  );
};

export default Home;

