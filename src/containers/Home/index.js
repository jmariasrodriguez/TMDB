import React from "react";
import SectionPreview from "../../components/Section-Preview";
import { TABS, MAIN_TITLE, PREVIEW_SECTION_TITLE } from "../../data/constants";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpcoming } from "../../context/upcoming";
import { setMovies } from "../../context/movies";
import { setTv } from "../../context/tv";
import SectionMainTitle from "../../components/Section-MainTitle";

const Home = () => {
  const upcoming = useSelector((state) => state.upcoming);
  const movies = useSelector((state) => state.movies);
  const tvShows = useSelector((state) => state.tvShows);
  const dispatch = useDispatch();

  const [moviesGenres, setMoviesGenres] = useState([])
  const [tvGenres, setTvGenres] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US&page=1"
      )
      .then((upcomingMovies) => {
        dispatch(setUpcoming(upcomingMovies.data.results));
      });

      axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US&page=1"
      )
      .then((inTheaterMovies) => {
        dispatch(setMovies(inTheaterMovies.data.results));
      });

      axios
      .get(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US&page=1"
      )
      .then((onTheAirTV) => {
        dispatch(setTv(onTheAirTV.data.results));
      });

      axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US").then((genres)=>{setMoviesGenres(genres.data.genres)})
      axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US").then((genres)=>{setTvGenres(genres.data.genres)})
  },[]);
  
console.log("tv",tvShows)
  return (
    <>
      <SectionMainTitle MAIN_TITLE={MAIN_TITLE[0].homeView}/>
      <SectionPreview TABS={TABS.upcoming} PREVIEW_SECTION_TITLE={PREVIEW_SECTION_TITLE[0]} MOVIESTV={upcoming} GENRES={moviesGenres} />
      <SectionPreview TABS={TABS.movies} PREVIEW_SECTION_TITLE={PREVIEW_SECTION_TITLE[1]} MOVIESTV={movies} GENRES={moviesGenres} />
      <SectionPreview TABS={TABS.tvSeries} PREVIEW_SECTION_TITLE={PREVIEW_SECTION_TITLE[2]} MOVIESTV={tvShows} GENRES={tvGenres} />
    </>
  );
};

export default Home;
