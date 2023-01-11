import axios from 'axios';
import React, {  useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SectionMainTitle from '../../components/Section-MainTitle';
import SectionPreview from '../../components/Section-Preview';
import { API_URL, MAIN_TITLE, PREVIEW_SECTION_TITLE, TABS, TV_SERIES } from '../../data/constants';
import { onSetTv, setTvFail, setTvSuccess } from '../../state/tv';

const Tv = () => {
    const sectionData = {
      [TV_SERIES]: useSelector((state) => state[TV_SERIES]),
      };

  const [moviesGenres, setMoviesGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
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

  const genres = tvGenres.concat(moviesGenres)

  return (
    <>
     <SectionMainTitle mainTitle={MAIN_TITLE.tvView} />
     <SectionPreview
          tabs={TABS[TV_SERIES]}
          previewSectionTitle={PREVIEW_SECTION_TITLE[TV_SERIES]}
          genres={genres}
          {...sectionData[TV_SERIES]}
          />
          </>
  )
}

export default Tv