import React from "react";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import { ContainerSectionList } from "../styleSectionPreview";

const SectionList = ({ shows, genres }) => {
  return (
    <>
      <ContainerSectionList container spacing={3}>
        {shows?.map((show, index) => {
          return (
            <Grid item>
              <CardItem key={index} show={show} index={index} genres={genres} />
            </Grid>
          );
        })}
      </ContainerSectionList>
    </>
  );
};

export default SectionList;
