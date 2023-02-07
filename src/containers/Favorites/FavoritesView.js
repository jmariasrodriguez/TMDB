import { Box, fontWeight } from "@mui/system";
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Alert, CircularProgress, Tab, Typography } from "@mui/material";
import {
  ContainerSectionPreview,
  ContainerSectionPreview2,
  ContainerTabsTitles,
  ContainerTitleTabs,
} from "../../components/Section-Preview/styleSectionPreview";
import TitleSectionPreview from "../../components/Section-Preview/SectionHeader/TitleSectionPreview";
import TabsSectionPreview from "../../components/Section-Preview/SectionHeader/TabsSectionPreview";
import SectionList from "../../components/Section-Preview/SectionList";
import {
  FAVORITE_TAB_TITLE,
  PREVIEW_SECTION_TITLE,
  TABS_FAVORITES,
} from "../../data/constants";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SectionListFavs from "./SectionListFavs";
import { useDispatch, useSelector } from "react-redux";
import { onSetFavorites, setFavoritesSuccess } from "../../state/favorites";

const FavoritesView = ({ genres }) => {
  const sectionData = {
    favorites: useSelector((state) => state.favorites),
  };
  const dispatch = useDispatch();

  const [favorites, setFavorites] = useState([]);
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(onSetFavorites());
    dispatch(setFavoritesSuccess(JSON.parse(localStorage.getItem("data"))));
    //setFavorites(JSON.parse(localStorage.getItem("data")))
    setData(sectionData.favorites.data);
  }, []);

  const series = sectionData.favorites.data.filter(
    (item) => item.first_air_date
  );
  const movies = sectionData.favorites.data.filter((item) => item.release_date);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (event.target.innerText === "MOVIES") {
      setData(movies);
    } else if (event.target.innerText === "TV SERIES") {
      setData(series);
    } else {
      setData(sectionData.favorites.data);
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        margin="auto"
        maxWidth="1200px"
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
              bgcolor: "grey",
              height: "100px",
              width: "100px",
              margin: "16px",
            }}
          >
            U
          </Avatar>
          <Typography variant="h3" gutterBottom color={"white"}>
            User Profile
          </Typography>
        </Box>
        <Box>
          <ContainerSectionPreview>
            <ContainerSectionPreview2>
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
                              sx={{ color: "white", typography: "body1" }}
                            />
                          );
                        })}
                      </TabList>
                    </ContainerTabsTitles>
                    {TABS_FAVORITES.favorites?.map((tab, index) => {
                      return (
                        <TabPanel
                          key={index}
                          value={index}
                          sx={{ color: "white" }}
                        >
                          {tab.description}
                        </TabPanel>
                      );
                    })}
                  </TabContext>
                </Box>
              </ContainerTitleTabs>
{/* 
              {sectionData.favorites.loading && (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              )} */}
              {/* {error && <Alert variant="filled" severity="error">{error}</Alert>} */}
              <SectionListFavs data={data} genres={genres} />
            </ContainerSectionPreview2>
          </ContainerSectionPreview>
        </Box>
      </Box>
    </>
  );
};

export default FavoritesView;
