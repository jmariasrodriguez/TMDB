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

export default function CardItem({show,genres}) {
  const navigate= useNavigate()

  let value =show.vote_average/2;
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

    <Card value={show.id} sx={{ height: '340px', width:"180px",p:"0px" ,mt:"30px"}}>
        
      <CardCover>
        <img
          srcSet={`https://www.themoviedb.org/t/p/original/${show.poster_path}`}
          alt={name}     
        />
      </CardCover>
      <CardActionArea onClick={handleClick}>
 
      <CardContent value={show.id} sx={{ mt: "230px", minHeight: "90px",  width: 1,bgcolor: 'rgba(0,0,0,0.7)'  }}>
        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt:"4px",
        pb:"4px",
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