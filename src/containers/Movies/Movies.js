import { Box } from '@mui/material';
import axios from 'axios';
import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SectionMainTitle from '../../components/Section-MainTitle';
import SectionPreview from '../../components/Section-Preview';
import { API_URL, MAIN_TITLE, MOVIES, PREVIEW_SECTION_TITLE, TABS } from '../../data/constants';
import { onSetMovies, setMoviesFail, setMoviesSuccess } from '../../state/movies';

const Movies = () => {
    const sectionData = {
        [MOVIES]: useSelector((state) => state[MOVIES]),
      };


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
  }, []);

  return (
    <Box>
     <SectionMainTitle mainTitle={MAIN_TITLE.moviesView} />
     <SectionPreview
          tabs={TABS[MOVIES]}
          previewSectionTitle={PREVIEW_SECTION_TITLE[MOVIES]}
          {...sectionData[MOVIES]}
          />
          </Box>
  )
}

export default Movies