import React from "react";
import { Grid } from "@mui/material";
import CardItem from "./CardItem"



const SectionList = ({shows, genres}) => {
  return (
    <>
    <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
        wrap="nowrap"
        overflow= "auto"
        sx={{
           "&::-webkit-scrollbar": {
      width: "20px",
      height:"8px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px rgb(255, 251, 251)",
      borderRadius: "20px",  
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#007AFF",
      borderRadius: "20px", 
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#00b3ff",
    }
        }}
      >
        {shows?.map((show, index)=>{
          return (
        <Grid item > 
        <CardItem key={index} show={show} index={index} genres={genres} />
        </Grid>
          )
        })}

      </Grid>
    </>
  );
};

export default SectionList;
