import React from "react";
import SectionList from "./SectionList";
import TabsSectionPreview from "./SectionHeader/TabsSectionPreview";
import TitleSectionPreview from "./SectionHeader/TitleSectionPreview";
import {
  ContainerSectionPreview,
  ContainerTitleTabs,
} from "./styleSectionPreview";
import { Alert, Box, CircularProgress } from "@mui/material";

const SectionPreview = ({ previewSectionTitle, tabs, data, loading, error}) => {
  
  return (
    <ContainerSectionPreview>
        <ContainerTitleTabs>
          <TitleSectionPreview previewSectionTitle={previewSectionTitle} />  
          <TabsSectionPreview
            previewSectionTitle={previewSectionTitle}
            tabs={tabs}
          />
        </ContainerTitleTabs>
        {loading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>} 
        {error && <Alert variant="filled" severity="error">{error}</Alert>}
        <SectionList data={data}/>
        
    </ContainerSectionPreview>
  );
};

export default SectionPreview;
