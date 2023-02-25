import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RecomendationCard({ item }) {
  const navigate = useNavigate();

const handleClick = () => {
      item.first_air_date
        ? navigate(`/tv/${item.id}`)
        : navigate(`/movie/${item.id}`);
        window.location.reload();
  };

  return (
    <Card sx={{ height: "300px", width: "150px", padding: "0px",backgroundColor: "#22214F" }}>
        <CardActionArea sx={{position:"relative", height:"100%"}} onClick={handleClick}>
      <CardMedia
        component="img"
        height="240px"
        image={`https://www.themoviedb.org/t/p/original${item.backdrop_path}`}
        alt={item.media_type === "tv"? item.original_name : item.title}
      />
      <CardContent
        sx={{
          color: "#f9f9f9",
          height: "70px",
          paddingTop: "4px",
          pr: "8px",
          pl: "8px",
        }}
      >
          <Typography
          variant="subtitle2"
          textColor="#f9f9f9"
          fontWeight="600"
          >
            {item.media_type === "tv"? item.original_name : item.title}
          </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
