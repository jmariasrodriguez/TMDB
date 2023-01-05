import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BoxMainTitle } from "./styleSection-MainTitle";

const SectionMainTitle = ({mainTitle}) => {
  return (
    <Box sx={{bgcolor:"#27265B"}}>
    <BoxMainTitle >  
           <Typography  variant="h3" gutterBottom color={"white"} >{mainTitle.main}
      </Typography>
      <Typography variant="h4" gutterBottom color={"white"}>{mainTitle.secondary}
      </Typography>
    </BoxMainTitle>
    </Box>
  );
};
export default SectionMainTitle;