import { Box, Typography } from "@mui/material";
import React from "react";

const TitleSectionPreview = ({ previewSectionTitle }) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: "#f9f9f9" }}>
        {previewSectionTitle}
      </Typography>
    </Box>
  );
};

export default TitleSectionPreview;
