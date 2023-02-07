import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  ContainerSectionList,
  ContainerSectionPreview,
  ContainerSectionPreview2,
} from "../../components/Section-Preview/styleSectionPreview";
import ActorCard from "./ActorCard";

const SectionCast = ({ casting, Title }) => {
  const dataActors = casting.filter((actorData) => actorData.profile_path);

  console.log(dataActors);
  return (
    <ContainerSectionPreview>
      <Typography variant="h4" sx={{ color: "#fff", margin: "4px", marginTop:"16px"}}>
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
    </ContainerSectionPreview>
  );
};

export default SectionCast;
