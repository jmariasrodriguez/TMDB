import React, { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import CardItem from "./CardItem";
import { ContainerSectionList, ContainerSectionListOnePage } from "../styleSectionPreview";
import { useMatch } from "react-router-dom";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import { onSetMovies, setMoviesFail, setMoviesSuccess } from "../../../state/movies";
import { API_URL, TAB_LABELS } from "../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { onSetTv, setTvFail, setTvSuccess } from "../../../state/tv";

const SectionList = ({ data, genres }) => {
  const match = useMatch('/')
  const matchMovies = useMatch('/movies')
  const dispatch = useDispatch();
  const dataTable ={
    [TAB_LABELS]: useSelector((state) => state[TAB_LABELS])
  }

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)
  const handleChange = (e)=>{ 
    setPage(e.target.outerText)
    if (matchMovies){
      dispatch(onSetMovies());
        axios
          .get(
            `${API_URL.beginningPath}${dataTable[TAB_LABELS].title}/${dataTable[TAB_LABELS].subtitle}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=${page}`
          )
          .then((moviesArray) => {
            setTotalPages(moviesArray.data.total_pages)
            dispatch(setMoviesSuccess(moviesArray.data.results));
          })
          .catch((err) => {
            setMoviesFail(err.message || "Sorry, something went wrong.");
          });
        }else{
          dispatch(onSetTv());
          axios
            .get(
              `${API_URL.beginningPath}${dataTable[TAB_LABELS].title}/${dataTable[TAB_LABELS].subtitle}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=${page}`
            )
            .then((moviesArray) => {
              setTotalPages(moviesArray.data.total_pages)
              dispatch(setTvSuccess(moviesArray.data.results));
            })
            .catch((err) => {
              setTvFail(err.message || "Sorry, something went wrong.");
            });
}
    }
  return match? (
    <>
      <ContainerSectionList container spacing={3}>
        {data?.map((show, index) => {
          return (
            <Grid item>
              <CardItem key={index} show={show} index={index} genres={genres} />
            </Grid>
          );
        })}
      </ContainerSectionList>
    </>
  ): 
  ( <>
    <ContainerSectionListOnePage container spacing={3}>
      {data?.map((show, index) => {
        return (
          <Grid item>
            <CardItem key={index} show={show} index={index} genres={genres} />
          </Grid>
        );
      })}
    </ContainerSectionListOnePage>
    <Box sx={{ margin:"auto", p:"24px"}}>
      <Stack  spacing={2}>
        <Pagination count={totalPages} defaultPage={5}  onChange={handleChange} variant="outlined" shape="rounded"  color="primary" /></Stack>
    </Box>
  </>)
}

export default SectionList;
