import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  ContainerSectionList,
  ContainerSectionPreview,
  ContainerSectionPreview2,
} from "../../components/Section-Preview/styleSectionPreview";
import RecomendationCard from "./RecomendationCard";

const SectionRecomendations = ({ recomendationsData, Title }) => {
  const dataRecomendations = recomendationsData.filter(
    (recomendationData) => recomendationData.backdrop_path
  );
  return (
    <ContainerSectionPreview>
      <Typography variant="h4" sx={{ color: "#fff", margin: "4px", marginTop:"16px" }}>
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
    </ContainerSectionPreview>
  );
};

export default SectionRecomendations;
