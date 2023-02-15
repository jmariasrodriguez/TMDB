import { Box, Grid, Pagination, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CardItem from '../../components/Section-Preview/SectionList/CardItem';
import { ContainerSectionListOnePage } from '../../components/Section-Preview/styleSectionPreview';
import { API_URL, TAB_LABELS } from '../../data/constants';
import { onSetMovies, setMoviesFail, setMoviesSuccess } from '../../state/movies';
import { onSetTv, setTvFail, setTvSuccess } from '../../state/tv';
import CardFavoriteItem from './CardFavoriteItem';

const SectionListFavs = ({ data}) => {
  let searchValue = useLocation().search.split("=")[1]
    const dispatch = useDispatch();
    const dataTable ={
    [TAB_LABELS]: useSelector((state) => state[TAB_LABELS])
    }
    
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)

    useEffect(() => {
            axios
              .get(
                `${API_URL.beginningPath}search/multi?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&query=${searchValue}&page=${page}&include_adult=false`
              )
              .then((moviesArray) => {
                setTotalPages(moviesArray.data.total_pages)
              })
              .catch((err) => {
                dispatch(setMoviesFail(err.message || "Sorry, something went wrong."));
              });
      }, [])

    const handleChange = (e)=>{
        setPage(e.target.outerText)
            dispatch(onSetMovies());
            axios
              .get(
                `${API_URL.beginningPath}search/multi?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&query=${searchValue}&page=${page}&include_adult=false`
              )
              .then((moviesArray) => {
                dispatch(setMoviesSuccess(moviesArray.data.results));
              })
              .catch((err) => {
                dispatch(setMoviesFail(err.message || "Sorry, something went wrong."));
              })
        }
  return (
    <Box>
    <ContainerSectionListOnePage  spacing={0}>
      {data?.map((show, index) => {
        return (
          <Grid item>
            <CardFavoriteItem key={index} show={show} index={index}/>
          </Grid>
        );
      })}
    </ContainerSectionListOnePage>
    <Box sx={{ margin:"auto", p:"24px", display:"flex",justifyContent:"center"}}>
      <Stack  spacing={2}>
        <Pagination count={totalPages}  onChange={handleChange} variant="outlined" shape="rounded"  color="primary" /></Stack>
    </Box>
  </Box>)
}

export default SectionListFavs