import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/joy";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RecomendationCard({ recomendationData }) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const navigate = useNavigate();

const handleClick = () => {
      recomendationData.first_air_date
        ? navigate(`/tv/${recomendationData.id}`)
        : navigate(`/movie/${recomendationData.id}`);
        window.location.reload();
  };

  return (
    <Card sx={{ height: "300px", width: "150px", paddingBottom:"36px" }}>
        <CardActionArea sx={{position:"relative", height:"100%"}} onClick={handleClick}>
      <CardMedia
        component="img"
        height="240px"
        image={`https://www.themoviedb.org/t/p/original${recomendationData.backdrop_path}`}
        alt={recomendationData.media_type === "tv"? recomendationData.original_name : recomendationData.title}
      />
      <CardContent
        sx={{
          backgroundColor: "#22214F",
          color: "#fff",
          height: "80px",
          paddingTop: "4px",
          pr: "8px",
          pl: "8px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography
            
            variant="subtitle1"
            textColor="#fff"
            fontWeight="600"
          >
            {recomendationData.media_type === "tv"? recomendationData.original_name : recomendationData.title}
          </Typography>
        </ThemeProvider>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
