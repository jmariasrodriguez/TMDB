import React from "react";
import SectionPreview from "../../components/Section-Preview";
import { TITLE, TABS } from "../../data/constants";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpcoming } from "../../context/upcoming";
import { setMovies } from "../../context/movies";
import { setTv } from "../../context/tv";

const Home = () => {
  const upcoming = useSelector((state) => state.upcoming);
  const movies = useSelector((state) => state.movies);
  const tvShows = useSelector((state) => state.tvShows);
  const dispatch = useDispatch();

  //const [upcoming, setUpcoming] = useState([])
  useEffect(() => {
    // axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US&page=1").then((upcomingMovies)=>{setUpcoming(upcomingMovies.data.results)})
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

      
  }, []);
  
  // console.log("este es el estado de redux",upcoming)
  // console.log("este es el estado de redux",movies)
  // console.log("este es el estado de redux",tvShows)

  return (
    <>
      <SectionPreview TABS={TABS.upcoming} TITLE={TITLE[0]} />
    </>
  );
};

export default Home;
