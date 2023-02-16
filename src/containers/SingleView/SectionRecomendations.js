import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  ContainerSectionList,
  ContainerSectionPreview,
  ContainerSectionPreview2,
} from "../../components/Section-Preview/styleSectionPreview";
import RecomendationCard from "./RecomendationCard";

const SectionRecomendations = ({ data, Title }) => {
  const dataRecomendations = data.filter(
    (data) => data.backdrop_path
  );
  return (
    <ContainerSectionPreview>
      <Typography variant="h4" sx={{ color: "#f9f9f9", margin: "4px", marginTop:"16px" }}>
        {Title}
      </Typography>
      <ContainerSectionList container spacing={3}>
        {dataRecomendations.map((item) => {
          return (
            <Grid item>
              <RecomendationCard item={item} />
            </Grid>
          );
        })}
      </ContainerSectionList>
    </ContainerSectionPreview>
  );
};

export default SectionRecomendations;
