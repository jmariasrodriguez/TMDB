import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  ContainerSectionList,
  ContainerSectionPreview2,
} from "../../components/Section-Preview/styleSectionPreview";
import RecomendationCard from "./RecomendationCard";

const SectionRecomendations = ({ recomendationsData, Title }) => {
  const dataRecomendations = recomendationsData.filter(
    (recomendationData) => recomendationData.backdrop_path
  );
  return (
    <ContainerSectionPreview2 sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ color: "#fff", margin: "4px" }}>
        {Title}
      </Typography>
      <ContainerSectionList container sx={{}} spacing={3}>
        {dataRecomendations.map((recomendationData) => {
          return (
            <Grid item>
              <RecomendationCard recomendationData={recomendationData} />
            </Grid>
          );
        })}
      </ContainerSectionList>
    </ContainerSectionPreview2>
  );
};

export default SectionRecomendations;
