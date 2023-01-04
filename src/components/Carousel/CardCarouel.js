import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';
import { CardActionArea } from '@mui/material';

export default function CardCarouel({show,genres}) {
  const navigate= useNavigate()
   let genre= genres.filter((genero)=>{ return genero.id === show.genre_ids[0]})
  if(genre[0]){
  genre= genre[0].name
  }else{genre=""}

  let year
  if (show.release_date){
    year = show.release_date.split("-")[0]
  } else{
    year = show.first_air_date.split("-")[0]
  }

  let name
  if (show.original_title){
    name = show.original_title
  } else{
    name = show.name
  }

  const handleClick = ()=>{ show.first_air_date? navigate(`/tv/${show.id}`): navigate(`/movies/${show.id}`)}
  
  return (

    <Card value={show.id}  sx={{ height: '340px', width: 1, p:"0px"}}>
        
      <CardCover >
        <img
          srcSet={`https://www.themoviedb.org/t/p/original/${show.backdrop_path}`}
          loading="lazy"
          alt={name}
        />
      </CardCover>
      <CardActionArea onClick={handleClick}>
 
      <CardContent value={show.id} sx={{ mt: "230px", minHeight: 105,  width: 1,bgcolor: 'rgba(0,0,0,0.7)'  }}>
        <Typography fontSize="lg" fontWeight="bold" textColor="#fff" m={0.5} >
          {name}
        </Typography>

        <Typography
          textColor="#fff"
          fontSize="lg" 
          fontWeight="bold"
           m={0.5}
        >
          {year}, { genre}
        </Typography>

        <Typography
          textColor="#fff"
          fontSize="md" 
          m={1}
        >
          {show.overview}
        </Typography>

      </CardContent>
      </CardActionArea>
    </Card>
  );
}