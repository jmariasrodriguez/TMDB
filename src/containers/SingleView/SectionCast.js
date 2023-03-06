import { Alert, Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {
  ContainerSectionList,
  ContainerSectionPreview,
} from "../../components/Section-Preview/styleSectionPreview";
import ActorCard from "./ActorCard";

const SectionCast = ({ data, loading, error,Title }) => {
  const dataActors = data.filter((actorData) => actorData.profile_path);

  return (
    <ContainerSectionPreview>
      <Typography variant="h4" sx={{ color: "#f9f9f9", margin: "4px", marginTop:"16px"}}>
        {Title}
      </Typography>
      {loading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>} 
      {error && <Alert variant="filled" severity="error">{error}</Alert>}
      <ContainerSectionList container>
        {dataActors.length? dataActors.map((item) => {
          return (
            <Grid item key={item.id}>
              <ActorCard item={item}/>
            </Grid>
          );
        }) : <Grid item><Typography variant="subtitle2" color={"#f9f9f9"} margin= "4px">Sorry, we dont have cast information  .</Typography></Grid>}
      </ContainerSectionList>
    </ContainerSectionPreview>
  );
};

export default SectionCast;
