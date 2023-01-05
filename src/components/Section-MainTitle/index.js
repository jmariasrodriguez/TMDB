import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SectionMainTitle = ({mainTitle}) => {
  return (
    <Box  sx={{ display: "flex", flexDirection: "column", mt:"36px", mb:"36px", pt:"16px",pb:"16px",bgcolor:"#27265B", paddingRight:"200px", paddingLeft:"200px" }}>  
           <Typography variant="h3" gutterBottom color={"white"}>{mainTitle.main}
      </Typography>
      <Typography variant="h4" gutterBottom color={"white"}>{mainTitle.secondary}
      </Typography>
    </Box>
  );
};

export default SectionMainTitle;
