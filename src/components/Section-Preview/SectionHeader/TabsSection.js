import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { setUpcoming } from "../../../context/upcoming";
import { setMovies } from "../../../context/movies";
import { setTv } from "../../../context/tv";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function TabsSection({ TABS, TITLE }) {
  const [value, setValue] = useState(0);

  const upcoming = useSelector((state) => state.upcoming);
  const movies = useSelector((state) => state.movies);
  const tv = useSelector((state) => state.tv);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let titleLabel = TITLE;
    if (titleLabel === "Movies") {titleLabel="movie"}
    if (titleLabel === "TV Series") {titleLabel="tv"}

    let tabTitle = event.target.outerText.toLowerCase().split(" ").join("_");
    if (tabTitle === "in_theaters") {tabTitle="now_playing"}

   
    if(titleLabel=== "movie") {
      axios.get(`https://api.themoviedb.org/3/${titleLabel}/${tabTitle}?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US&page=1`).then((moviesArray)=>{dispatch(setMovies(moviesArray.data.results));})
    }
    if(titleLabel=== "tv") {
      axios.get(`https://api.themoviedb.org/3/${titleLabel}/${tabTitle}?api_key=48f5be1a93ce7b3db1bd4f6b142d09ad&language=en-US&page=1`).then((tvArray)=>{dispatch(setTv(tvArray.data.results));})
    }
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ height: "30px", borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {TABS?.map((tab, index) => {
              return (
                <Tab
                key={index}
                  label={tab.label}
                  value={index}
                  textColor="white"
                  sx={{ color: "white" }}
                />
              );
            })}
          </TabList>
        </Box>
        {TABS?.map((tab, index) => {
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
