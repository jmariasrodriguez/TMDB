import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { setMovies } from "../../../context/movies";
import { setTv } from "../../../context/tv";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ContainerTabsTitles } from "../styleSectionPreview";

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
      axios
        .get(
          `https://api.themoviedb.org/3/${titleLabel}/${tabTitle}?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US&page=1`
        )
        .then((moviesArray) => {
          dispatch(setMovies(moviesArray.data.results));
        });
    }

    if (titleLabel === "tv") {
      axios
        .get(
          `https://api.themoviedb.org/3/${titleLabel}/${tabTitle}?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US&page=1`
        )
        .then((tvArray) => {
          dispatch(setTv(tvArray.data.results));
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
