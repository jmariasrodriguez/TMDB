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

export default function TabsSectionPreview({ tabs, previewSectionTitle }) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let titleLabel = previewSectionTitle;
    if (titleLabel === "Movies") {
      titleLabel = "movie";
    }
    if (titleLabel === "TV Series") {
      titleLabel = "tv";
    }

    let tabTitle = event.target.outerText.toLowerCase().split(" ").join("_");
    if (tabTitle === "in_theaters") {
      tabTitle = "now_playing";
    }

    if (titleLabel === "movie") {
      dispatch(onSetMovies());
      axios
        .get(
          `${API_URL.beginningPath}${titleLabel}/${tabTitle}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`
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
      axios
        .get(
          `${API_URL.beginningPath}${titleLabel}/${tabTitle}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`
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
              return (
                <Tab
                  key={index}
                  label={tab.label}
                  value={index}
                  sx={{ color: "white", typography: "body1" }}
                />
              );
            })}
          </TabList>
        </ContainerTabsTitles>
        {tabs?.map((tab, index) => {
          return (
            <TabPanel key={index} value={index} sx={{ color: "white" }}>
              {tab.description}
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
}
