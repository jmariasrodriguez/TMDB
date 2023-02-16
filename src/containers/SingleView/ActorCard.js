import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/joy";

export default function ActorCard({ item }) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Card sx={{ height: "300px", width: "150px", padding: "0px",backgroundColor: "#22214F"}}>
      <CardMedia
        component="img"
        image={`https://www.themoviedb.org/t/p/original${item.profile_path}`}
        alt={item.original_name}
        />
      <CardContent
        sx={{
          color: "#f9f9f9",
          height: "70px",
          paddingTop: "4px",
          pr: "8px",
          pl: "8px",
          //marginBottom: "4px",
        }}
        >
        <ThemeProvider theme={theme}>
          <Typography
            variant="subtitle2"
            textColor="#f9f9f9"
            fontWeight="600"
            >
            {item.original_name}
          </Typography>
          <Typography variant="body1">{item.character}</Typography>
        </ThemeProvider>
      </CardContent>
    </Card>
  );
}
