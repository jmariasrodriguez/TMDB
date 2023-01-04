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
