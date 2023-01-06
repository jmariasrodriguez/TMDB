import { Typography } from "@mui/material";
import React from "react";

const TitleSectionPreview = ({ previewSectionTitle }) => {
  return (
    <>
      <Typography variant="h4" sx={{ color: "white" }}>
        {previewSectionTitle}
      </Typography>
    </>
  );
};

export default TitleSectionPreview;
