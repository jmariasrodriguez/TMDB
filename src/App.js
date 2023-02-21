import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  API_URL,
  NAVBAR_TITLES,
} from "./data/constants";
import Movies from "./containers/Movies/Movies";
import Tv from "./containers/Tv/Tv";
import SearchView from "./containers/Search/Search";
import SingleView from "./containers/SingleView/SingleView";
import { useEffect } from "react";
import axios from "axios";
import FavoritesView from "./containers/Favorites/FavoritesView";
import { useDispatch, useSelector } from "react-redux";
import {
  onSetMoviesGenre,
  setMoviesGenresFail,
  setMoviesGenresSuccess,
} from "./state/moviesGenre";
import {
  onSetSeriesGenre,
  setSeriesGenreFail,
  setSeriesGenreSuccess,
} from "./state/seriesGenre";
import { onSetFavorites, setFavoritesSuccess } from "./state/favorites";
import CssBaseline from "@mui/material/CssBaseline";
import { onSetUserImage, setUserImageSuccess } from "./state/userImage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onSetSeriesGenre());
    axios
      .get(
        `${API_URL.beginningPath}genre/tv/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`
      )
      .then((genres) => {
        dispatch(setSeriesGenreSuccess(genres.data.genres));
      })
      .catch((err) => {
        dispatch(setSeriesGenreFail(err.message || "Sorry, something went wrong.")
        );
      });
  }, []);

  useEffect(() => {
    dispatch(onSetMoviesGenre());
    axios
      .get(
        `${API_URL.beginningPath}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`
      )
      .then((genres) => {
        dispatch(setMoviesGenresSuccess(genres.data.genres));
      })
      .catch((err) => {
        dispatch(setMoviesGenresFail(err.message || "Sorry, something went wrong.")
        );
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("data") == null) {
      localStorage.setItem("data", "[]");
    }
    dispatch(onSetFavorites());
    dispatch(setFavoritesSuccess(JSON.parse(localStorage.getItem("data"))));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userImage") == null) {
      localStorage.setItem("userImage", "[]");
    }
    dispatch(onSetUserImage());
    dispatch(setUserImageSuccess(JSON.parse(localStorage.getItem("userImage")))
    );
  }, []);

  return (
    <>
      <CssBaseline />
      <Box
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ bgcolor: "#22214F" }}
      >
        <Navbar navbarTitles={NAVBAR_TITLES} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv/:id" element={<SingleView />} />
          <Route path="/movie/:id" element={<SingleView />} />
          <Route path="/search/:searchValue" element={<SearchView />} />
          <Route path="/userFavorites" element={<FavoritesView />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
