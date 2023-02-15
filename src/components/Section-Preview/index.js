import React from "react";
import SectionList from "./SectionList";
import TabsSectionPreview from "./SectionHeader/TabsSectionPreview";
import TitleSectionPreview from "./SectionHeader/TitleSectionPreview";
import {
  ContainerSectionPreview,
  ContainerSectionPreview2,
  ContainerTitleTabs,
} from "./styleSectionPreview";
import { Alert, Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const SectionPreview = ({ previewSectionTitle, tabs, data, loading, error}) => {

  const sectionData = {
    moviesGenre: useSelector((state) => state.moviesGenre),
    seriesGenre: useSelector((state) => state.seriesGenre),
  };
 
  
  return (
    <ContainerSectionPreview>
        <ContainerTitleTabs>
          <TitleSectionPreview previewSectionTitle={previewSectionTitle} />  
          <TabsSectionPreview
            previewSectionTitle={previewSectionTitle}
            tabs={tabs}
          />
        </ContainerTitleTabs>

        {sectionData.moviesGenre.loading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>} 
        {loading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>} 
        {error && <Alert variant="filled" severity="error">{error}</Alert>}
        {sectionData.seriesGenre.loading ? <Box sx={{ display: 'flex' }}><CircularProgress /></Box> : <SectionList data={data}/>} 
        
    </ContainerSectionPreview>
  );
};

export default SectionPreview;
