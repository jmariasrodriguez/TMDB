import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "./SectionHeader";
import SectionList from "./SectionList";

const SectionPreview = ({ previewSectionTitle, tabs, shows, genres }) => {
  return (
    <Box sx={{bgcolor:"#27265B"}}>
    <Box sx={{ display: "flex", flexDirection: "column",margin:"auto", maxWidth:"1200px", mt:"36px", mb:"36px", pt:"16px",pb:"16px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          maxHeight: "90px",
        }}
      >
        <SectionHeader previewSectionTitle={previewSectionTitle} tabs={tabs} />
      </Box>
      <SectionList shows={shows} genres={genres}/>
    </Box>
    </Box>
  );
};

export default SectionPreview;
