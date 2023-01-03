import React from "react";
import { Grid } from "@mui/material";
import CardItem from "./CardItem"

const SectionList = ({MOVIESTV, GENRES}) => {
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
        {MOVIESTV?.map((movietv, index)=>{
          return (
        <Grid item > 
        <CardItem key={index} movietv={movietv} index={index} GENRES={GENRES} />
        </Grid>
          )
        })}

      </Grid>
    </>
  );
};

export default SectionList;
