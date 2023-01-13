import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/joy";

export default function ActorCard({ actorData }) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
    <Card sx={{ height: "300px", width: "150px", padding: "0px" }}>
      <CardMedia
        component="img"
        image={`https://www.themoviedb.org/t/p/original${actorData.profile_path}`}
        alt={actorData.original_name}
        />
      <CardContent
        sx={{
          backgroundColor: "#22214F",
          color: "#fff",
          height: "70px",
          paddingTop: "4px",
          pr: "8px",
          pl: "8px",
          marginBottom: "4px",
        }}
        >
        <ThemeProvider theme={theme}>
          <Typography
            variant="subtitle2"
            textColor="#fff"
            fontWeight="600"
            >
            {actorData.original_name}
          </Typography>
          <Typography variant="body1">{actorData.character}</Typography>
        </ThemeProvider>
      </CardContent>
    </Card>
   </>
  );
}
