import React from "react";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import { ContainerSectionList } from "../styleSectionPreview";

const SectionList = ({ data, genres }) => {
  return (
    <>
      <ContainerSectionList container spacing={3}>
        {data?.map((show, index) => {
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
