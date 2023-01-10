import axios from 'axios';
import React, {  useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SectionMainTitle from '../../components/Section-MainTitle';
import SectionPreview from '../../components/Section-Preview';
import { API_URL, MAIN_TITLE, MOVIES, PREVIEW_SECTION_TITLE, TABS } from '../../data/constants';
import { onSetMovies, setMoviesFail, setMoviesSuccess } from '../../state/movies';

const Movies = () => {
    const sectionData = {
        [MOVIES]: useSelector((state) => state[MOVIES]),
      };

  const [moviesGenres, setMoviesGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
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
  }, []);

  const getGenre = (section)=> section === "movies"? moviesGenres : tvGenres

  return (
    <>
     <SectionMainTitle mainTitle={MAIN_TITLE.moviesView} />
     <SectionPreview
          tabs={TABS[MOVIES]}
          previewSectionTitle={PREVIEW_SECTION_TITLE[MOVIES]}
          genres={getGenre(MOVIES)}
          {...sectionData[MOVIES]}
          />
          </>
  )
}

export default Movies