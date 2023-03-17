import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import CardItem from "./CardItem";
import {
  ContainerSectionList,
  ContainerSectionListOnePage,
} from "../styleSectionPreview";
import { useLocation, useMatch } from "react-router-dom";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import {
  onSetMovies,
  setMoviesFail,
  setMoviesSuccess,
} from "../../../state/movies";
import { API_URL, TAB_LABELS } from "../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { onSetTv, setTvFail, setTvSuccess } from "../../../state/tv";
import Pagination from "@mui/material/Pagination";

const SectionList = ({ data }) => {
  const match = useMatch("/");
  const matchTv = useMatch("/tv");
  const matchMovies = useMatch("/movies");
  const dispatch = useDispatch();
  const sectionData = {
    [TAB_LABELS]: useSelector((state) => state[TAB_LABELS]),
  };
  let searchValue = useLocation().search.split("=")[1];

  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    //Set the total number of pages to see in the pagination
    if (matchTv) {
      //Tv view
      axios
        .get(
          `${API_URL.beginningPath}${sectionData[TAB_LABELS].title}/${sectionData[TAB_LABELS].subtitle}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`
        )
        .then((moviesArray) => {
          moviesArray.data.total_pages > 50
            ? setTotalPages(50)
            : setTotalPages(moviesArray.data.total_pages);
        })
        .catch((err) => {
          setTvFail(err.message || "Sorry, something went wrong.");
        });
    } else if (matchMovies) {
      //Movies view
      axios
        .get(
          `${API_URL.beginningPath}${sectionData[TAB_LABELS].title}/${sectionData[TAB_LABELS].subtitle}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`
        )
        .then((moviesArray) => {
          moviesArray.data.total_pages > 50
            ? setTotalPages(50)
            : setTotalPages(moviesArray.data.total_pages);
        })
        .catch((err) => {
          setMoviesFail(err.message || "Sorry, something went wrong.");
        });
    } else {
      //Search view
      axios
        .get(
          `${API_URL.beginningPath}search/multi?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&query=${searchValue}&page=1&include_adult=false`
        )
        .then((moviesArray) => {
          setTotalPages(moviesArray.data.total_pages);
        })
        .catch((err) => {
          dispatch(
            setMoviesFail(err.message || "Sorry, something went wrong.")
          );
        });
    }
  }, []);

  const handleChange = (event, value) => {
    //Pagination change of page
    if (matchTv) {
      //Tv view
      dispatch(onSetTv());
      axios
        .get(
          `${API_URL.beginningPath}${sectionData[TAB_LABELS].title}/${sectionData[TAB_LABELS].subtitle}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=${event.target.textContent}`
        )
        .then((moviesArray) => {
          dispatch(setTvSuccess(moviesArray.data.results));
        })
        .catch((err) => {
          setTvFail(err.message || "Sorry, something went wrong.");
        });
    } else if (matchMovies) {
      //Movies view
      dispatch(onSetMovies());
      axios
        .get(
          `${API_URL.beginningPath}${sectionData[TAB_LABELS].title}/${sectionData[TAB_LABELS].subtitle}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=${event.target.textContent}`
        )
        .then((moviesArray) => {
          dispatch(setMoviesSuccess(moviesArray.data.results));
        })
        .catch((err) => {
          setMoviesFail(err.message || "Sorry, something went wrong.");
        });
    } else {
      //searchView
      dispatch(onSetMovies());
      axios
        .get(
          `${API_URL.beginningPath}search/multi?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&query=${searchValue}&page=${event.target.textContent}&include_adult=false`
        )
        .then((moviesArray) => {
          dispatch(setMoviesSuccess(moviesArray.data.results));
        })
        .catch((err) => {
          dispatch(
            setMoviesFail(err.message || "Sorry, something went wrong.")
          );
        });
    }
  };

  return match ? (
    <ContainerSectionList container spacing={3}>
      {data?.map((item, index) => {
        return (
          <Grid item key={item.id}>
            <CardItem key={item.id} item={item} index={index} />
          </Grid>
        );
      })}
    </ContainerSectionList>
  ) : (
    <Box>
      <ContainerSectionListOnePage container spacing={3}>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <Grid item key={item.id}>
                <CardItem key={item.id} item={item} index={index} />
              </Grid>
            );
          })
        ) : (
          <Typography sx={{ pl: "28px", color: "#f9f9f9" }}>
            There are no movies that matched your query.
          </Typography>
        )}
      </ContainerSectionListOnePage>
      <Box
        sx={{
          margin: "auto",
          p: "24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default SectionList;
