import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "./SectionHeader";
import SectionList from "./SectionList";

const SectionPreview = ({ TITLE, TABS, MOVIESTV, GENRES }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pt:"24px",pb:"24px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          maxHeight: "90px",
        }}
      >
        <SectionHeader TITLE={TITLE} TABS={TABS} />
      </Box>
      <SectionList MOVIESTV={MOVIESTV} GENRES={GENRES}/>
    </Box>
  );
};

export default SectionPreview;
