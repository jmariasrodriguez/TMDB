import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "./SectionHeader";
import SectionList from "./SectionList";

const SectionPreview = ({ TITLE, TABS }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
      <SectionList />
    </Box>
  );
};

export default SectionPreview;
