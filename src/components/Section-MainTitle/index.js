import { Typography } from "@mui/material";
import React from "react";
import { BoxContainerMainTitle, BoxMainTitle } from "./styleSection-MainTitle";

const SectionMainTitle = ({ mainTitle }) => {
  return (
    <BoxContainerMainTitle>
      <BoxMainTitle>
        <Typography variant="h3" gutterBottom color={"white"}>
          {mainTitle.main}
        </Typography>
        <Typography variant="h4" gutterBottom color={"white"}>
          {mainTitle.secondary}
        </Typography>
      </BoxMainTitle>
    </BoxContainerMainTitle>
  );
};
export default SectionMainTitle;
