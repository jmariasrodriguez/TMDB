import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Tab, Typography } from "@mui/material";
import {ContainerSectionPreview,ContainerTabsTitles,ContainerTitleTabs,} from "../../components/Section-Preview/styleSectionPreview";
import TitleSectionPreview from "../../components/Section-Preview/SectionHeader/TitleSectionPreview";
import {FAVORITE_TAB_TITLE,MY_FAVORITES,TABS_FAVORITES} from "../../data/constants";
import { TabContext, TabList } from "@mui/lab";
import SectionListFavs from "./SectionListFavs";
import { useSelector } from "react-redux";
import SectionUserImage from "./SectionUserImage";

const FavoritesView = () => {
  const sectionData = {[MY_FAVORITES]: useSelector((state) => state[MY_FAVORITES])};
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const series = sectionData[MY_FAVORITES].data.filter((item) => item.first_air_date);
  const movies = sectionData[MY_FAVORITES].data.filter((item) => item.release_date);

  useEffect(() => {
    //Set the data that will be passed to the SectionListFavs
    setData(sectionData[MY_FAVORITES].data);
  }, []);

  const handleChange = (event, newValue) => {
    //Set the data that will be passed to the SectionListFavs
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
    <Box display="flex" flexDirection="column" margin="auto" maxWidth="1200px" minHeight="800px">
      <SectionUserImage />
      <Box>
        <ContainerSectionPreview>
          <ContainerTitleTabs>
            <TitleSectionPreview previewSectionTitle={FAVORITE_TAB_TITLE.favorites}/>
            <TabContext value={value}>
              <ContainerTabsTitles>
                <TabList onChange={handleChange} aria-label="lab API tabs">
                  {TABS_FAVORITES.favorites?.map((tab, index) => {
                    return (<Tab key={index} label={tab.label} value={index} sx={{ color: "#f9f9f9", typography: "body1" }}/>);
                  })}
                </TabList>
              </ContainerTabsTitles>
            </TabContext>         
          </ContainerTitleTabs>
          <SectionListFavs data={data}/>
        </ContainerSectionPreview>
        </Box>
    </Box>
  );
};

export default FavoritesView;
