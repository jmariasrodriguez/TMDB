import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ActorCard({ item }) {
  return (
    <Card sx={{ height: "300px", width: "150px",m:"10px 4px 10px 10px",backgroundColor: "#22214F"}}>
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
        }}
        >
          <Typography
            variant="subtitle2"
            fontWeight="600"
            >
            {item.original_name}
          </Typography>
          <Typography variant="body1">{item.character}</Typography>
      </CardContent>
    </Card>
  );
}
