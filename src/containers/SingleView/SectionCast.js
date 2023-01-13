import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  ContainerSectionList,
  ContainerSectionPreview2,
} from "../../components/Section-Preview/styleSectionPreview";
import ActorCard from "./ActorCard";

const SectionCast = ({ casting, Title }) => {
  const dataActors = casting.filter((actorData) => actorData.profile_path);

  console.log(dataActors);
  return (
    <ContainerSectionPreview2 sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ color: "#fff", margin: "4px" }}>
        {Title}
      </Typography>
      <ContainerSectionList container sx={{}} spacing={3}>
        {dataActors.map((actorData) => {
          return (
            <Grid item>
              <ActorCard actorData={actorData} />
            </Grid>
          );
        })}
      </ContainerSectionList>
    </ContainerSectionPreview2>
  );
};

export default SectionCast;
