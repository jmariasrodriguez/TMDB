import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  onSetMovies,
  setMoviesFail,
  setMoviesSuccess,
} from "../../../state/movies";
import { onSetTv, setTvFail, setTvSuccess } from "../../../state/tv";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ContainerTabsTitles } from "../styleSectionPreview";
import { API_URL } from "../../../data/constants";
import { tabTitle,tabSubtitle } from "../../../state/tabTitle";

export default function TabsSectionPreview({ tabs, previewSectionTitle }) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  if (previewSectionTitle === "Movies"){
    dispatch(tabTitle("movie"));
    dispatch(tabSubtitle("now_playing"));
  }else{
    dispatch(tabTitle("tv"));
    dispatch(tabSubtitle("on_the_air"));
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let titleLabel = previewSectionTitle;
    if (titleLabel === "Movies") {
      titleLabel = "movie";
    }
    if (titleLabel === "TV Series") {
      titleLabel = "tv";
    }

    let tabTitleLabel = event.target.outerText.toLowerCase().split(" ").join("_");
    if (tabTitleLabel === "in_theaters") {
      tabTitleLabel = "now_playing";
    }

    if (titleLabel === "movie") {
      dispatch(onSetMovies());
      dispatch(tabTitle(titleLabel));
      dispatch(tabSubtitle(tabTitleLabel));
      axios
        .get(
          `${API_URL.beginningPath}${titleLabel}/${tabTitleLabel}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`
        )
        .then((moviesArray) => {
          dispatch(setMoviesSuccess(moviesArray.data.results));
        })
        .catch((err) => {
          setMoviesFail(err.message || "Sorry, something went wrong.");
        });  
    }

    if (titleLabel === "tv") {
      dispatch(onSetTv());
      dispatch(tabTitle(titleLabel));
      dispatch(tabSubtitle(tabTitleLabel));
      axios
        .get(
          `${API_URL.beginningPath}${titleLabel}/${tabTitleLabel}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`
        )
        .then((tvArray) => {
          dispatch(setTvSuccess(tvArray.data.results));
        })
        .catch((err) => {
          setTvFail(err.message || "Sorry, something went wrong.");
        });
    }
  };

  return (
    <Box>
      <TabContext value={value}>
        <ContainerTabsTitles>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabs?.map((tab, index) => {
              
                {if(tab.label){
                  return (<Tab
                    key={index}
                    label={tab.label}
                    value={index}
                    sx={{ color: "#f9f9f9", typography: "body1" }}
                  />)
                }
              else{
                return null
              }}

            })}
          </TabList>
        </ContainerTabsTitles>
      </TabContext>
    </Box>
  );
}
