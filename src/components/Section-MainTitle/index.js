import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SectionMainTitle = ({mainTitle}) => {
  return (
    <Box sx={{bgcolor:"#27265B",width: '100%', mb:"48px"}}>  
           <Typography variant="h3" gutterBottom color={"white"}>{mainTitle.main}
      </Typography>
      <Typography variant="h4" gutterBottom color={"white"}>{mainTitle.secondary}
      </Typography>
    </Box>
  );
};

export default SectionMainTitle;
