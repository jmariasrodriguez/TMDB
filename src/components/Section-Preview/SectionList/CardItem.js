import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Rating from '@mui/material/Rating';
import peli from "../../../assets/peli.jpg"
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';

export default function CardItem({movietv,index,GENRES}) {
  let value =movietv.vote_average/2;
   let genre= GENRES.filter((genero)=>{ return genero.id === movietv.genre_ids[0]})
  if(genre[0]){
  genre= genre[0].name
  }else{genre=""}

  let year
  if (movietv.release_date){
    year = movietv.release_date.split("-")[0]
  } else{
    year = movietv.first_air_date.split("-")[0]
  }

  let name
  if (movietv.original_title){
    name = movietv.original_title
  } else{
    name = movietv.name
  }
  
  return (
   
    <Card sx={{ height: '340px', width: 180, p:"0px"}}>
      <CardCover>
        <img
          srcSet={`https://www.themoviedb.org/t/p/original/${movietv.poster_path}`}
          loading="lazy"
          alt=""
          
        />
      </CardCover>
 
      <CardContent  sx={{ mt: "240px", maxHeight: 92,  width: 1,bgcolor: 'rgba(0,0,0,0.7)'  }}>
        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt:"4px",
        pb:"4px"
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        size="small" 
        emptyIcon={<StarIcon style={{ opacity: 0.3, color:"#fff" }} fontSize="inherit" />}
      />
    </Box>

        <Typography
          textColor="#fff"
          fontSize="sm" 
          
          sx={{  pt:"4px"}}
        >
          {year},{genre}
        </Typography>

        <Typography level="h6" fontSize="md" textColor="#fff" mt={1} >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}