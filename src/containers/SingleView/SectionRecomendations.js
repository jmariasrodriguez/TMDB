import { Alert, Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import {
  ContainerSectionList,
  ContainerSectionPreview,
} from "../../components/Section-Preview/styleSectionPreview";
import RecomendationCard from "./RecomendationCard";

const SectionRecomendations = ({ data, loading, error, Title }) => {
  const dataRecomendations = data.filter(
    (data) => data.backdrop_path
  );
  return (
    <ContainerSectionPreview>
      <Typography variant="h4" sx={{ color: "#f9f9f9", margin: "4px", marginTop:"16px" }}>
        {Title}
      </Typography>
      {loading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>} 
      {error && <Alert variant="filled" severity="error">{error}</Alert>}
      <ContainerSectionList container>
        {dataRecomendations.length?dataRecomendations.map((item) => {
          return (
            <Grid item key={item.id}>
              <RecomendationCard item={item} />
            </Grid>
          );
        }) : <Grid item><Typography variant="subtitle2" color={"#f9f9f9"} margin= "4px">Sorry, we dont have any recomendation.</Typography></Grid>}
      </ContainerSectionList>
    </ContainerSectionPreview>
  );
};

export default SectionRecomendations;
