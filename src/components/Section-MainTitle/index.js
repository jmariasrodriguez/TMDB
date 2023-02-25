import { Typography } from "@mui/material";
import React from "react";
import {  BoxMainTitle } from "./styleSection-MainTitle";

const SectionMainTitle = ({ mainTitle }) => {
  return (
      <BoxMainTitle>
        <Typography variant="h3" gutterBottom color={"#f9f9f9"}>
          {mainTitle.main}
        </Typography>
        <Typography variant="h4" gutterBottom color={"#f9f9f9"}>
          {mainTitle.secondary}
        </Typography>
      </BoxMainTitle>
  );
};
export default SectionMainTitle;
