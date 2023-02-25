import { Alert, Box, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
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
      <ContainerSectionList container spacing={3}>
        {dataActors.map((item) => {
          return (
            <Grid item>
              <ActorCard item={item} />
            </Grid>
          );
        })}
      </ContainerSectionList>
    </ContainerSectionPreview>
  );
};

export default SectionCast;
