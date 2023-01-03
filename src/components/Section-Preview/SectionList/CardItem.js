import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { CardActionArea } from '@mui/material';

export default function CardItem({movietv,index,GENRES}) {
  const navigate= useNavigate() //navigate(`/${movietv.id}`)

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

  const handleClick = ()=>{ movietv.first_air_date? navigate(`/tv/${movietv.id}`): navigate(`/movie/${movietv.id}`)}
  
  return (

    <Card value={movietv.id} sx={{ height: '340px', width: 180, p:"0px"}}>
        
      <CardCover>
        <img
          srcSet={`https://www.themoviedb.org/t/p/original/${movietv.poster_path}`}
          loading="lazy"
          alt=""
          
        />
      </CardCover>
      <CardActionArea onClick={handleClick}>
 
      <CardContent value={movietv.id} sx={{ mt: "240px", maxHeight: 92,  width: 1,bgcolor: 'rgba(0,0,0,0.7)'  }}>
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
      </CardActionArea>
    </Card>
  );
}