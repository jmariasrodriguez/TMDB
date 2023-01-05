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
import SectionCarousel from "../../components/Carousel";

const Home = () => {

  const upcoming = useSelector((state) => state.upcoming);
  const movies = useSelector((state) => state.movies);
  const tvShows = useSelector((state) => state.tvShows);
  
  const [carouselShows, setCarouselShows] = useState([])
  const [moviesGenres, setMoviesGenres] = useState([])
  const [tvGenres, setTvGenres] = useState([])
  
  const dispatch = useDispatch();
  useEffect(() => {
    
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&page=1`
      )
      .then((upcomingMovies) => {
        dispatch(setUpcoming(upcomingMovies.data.results));
      });
      axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&page=1`
      )
      .then((inTheaterMovies) => {
        dispatch(setMovies(inTheaterMovies.data.results));
      });
      axios
      .get(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&page=1`
      )
      .then((onTheAirTV) => {
        dispatch(setTv(onTheAirTV.data.results));
      });
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`).then((genres)=>{setMoviesGenres(genres.data.genres)})
      axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`).then((genres)=>{setTvGenres(genres.data.genres)})
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}`).then((moviesArray)=>{setCarouselShows(moviesArray.data.results)})
  },[]);
  
  return (
    <>
      <SectionCarousel carouselShows={carouselShows} genres={moviesGenres}/>
      <SectionMainTitle mainTitle={MAIN_TITLE[0].homeView}/>
      <SectionPreview tabs={TABS.upcoming} previewSectionTitle={PREVIEW_SECTION_TITLE[0]} shows={upcoming} genres={moviesGenres} />
      <SectionPreview tabs={TABS.movies} previewSectionTitle={PREVIEW_SECTION_TITLE[1]} shows={movies} genres={moviesGenres} />
      <SectionPreview tabs={TABS.tvSeries} previewSectionTitle={PREVIEW_SECTION_TITLE[2]} shows={tvShows} genres={tvGenres} />
    </>
  );
};

export default Home;
