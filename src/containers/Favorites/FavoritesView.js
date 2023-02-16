import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Alert, CircularProgress, Tab, Typography } from "@mui/material";
import {
  ContainerSectionPreview,
  ContainerTabsTitles,
  ContainerTitleTabs,
} from "../../components/Section-Preview/styleSectionPreview";
import TitleSectionPreview from "../../components/Section-Preview/SectionHeader/TitleSectionPreview";
import {
  FAVORITE_TAB_TITLE,
  MY_FAVORITES,
  TABS_FAVORITES,
} from "../../data/constants";
import { TabContext, TabList } from "@mui/lab";
import SectionListFavs from "./SectionListFavs";
import { useSelector } from "react-redux";

const FavoritesView = () => {
  const sectionData = {
    [MY_FAVORITES]: useSelector((state) => state[MY_FAVORITES]),
  };
  
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(sectionData[MY_FAVORITES].data);
  }, []);
  
  const series = sectionData[MY_FAVORITES].data.filter( (item) => item.first_air_date);
  const movies = sectionData[MY_FAVORITES].data.filter((item) => item.release_date);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (event.target.innerText === "MOVIES") {
      setData(movies);
    } else if (event.target.innerText === "TV SERIES") {
      setData(series);
    } else {
      setData(sectionData[MY_FAVORITES].data);
    }
  };

  return (
      <Box
        display="flex"
        flexDirection="column"
        margin="auto"
        maxWidth="1200px"
        minHeight="700px"
      >
        <Box
          display="flex"
          flexDirection="row"
          margin="8px"
          alignItems="center"
        >
          <Avatar
            alt="Remy Sharp"
            sx={{
              bgcolor: "#595858",
              height: "100px",
              width: "100px",
              margin: "16px",
            }}
          >
            U
          </Avatar>
          <Typography variant="h3" gutterBottom color={"#f9f9f9"}>
            User Profile
          </Typography>
        </Box>
        <Box>
          <ContainerSectionPreview>
              <ContainerTitleTabs>
                <TitleSectionPreview
                  previewSectionTitle={FAVORITE_TAB_TITLE.favorites}
                />
                <Box>
                  <TabContext value={value}>
                    <ContainerTabsTitles>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        {TABS_FAVORITES.favorites?.map((tab, index) => {
                          return (
                            <Tab
                              key={index}
                              label={tab.label}
                              value={index}
                              sx={{ color: "#f9f9f9", typography: "body1" }}
                            />
                          );
                        })}
                      </TabList>
                    </ContainerTabsTitles>
                  </TabContext>
                </Box>
              </ContainerTitleTabs>
              {sectionData[MY_FAVORITES].loading && (<Box sx={{ display: "flex" }}><CircularProgress /></Box>)}
               {sectionData[MY_FAVORITES].error && <Alert variant="filled" severity="error">{sectionData[MY_FAVORITES].error}</Alert>}
              <SectionListFavs data={data}/>
          </ContainerSectionPreview>
        </Box>
      </Box>
  );
};

export default FavoritesView;
