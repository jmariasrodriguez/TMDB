import { Grid, IconButton, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import {ReactComponent as tmdbIcon} from "../../assets/tmdb.svg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    const handleClickLinkeIn = ()=>{navigate(window.location.href = "https://es.linkedin.com/in/jmariasrodriguez")}
    const handleClickGitHub = ()=>{navigate(window.location.href = "https://github.com/jmariasrodriguez")}

  return (
    
    <Grid container display="flex" direction="row"  justifyContent="flex-start"  alignItems="center"  backgroundColor="#273088" sx={{minHeight:"50px"}} >

        <Grid container direction="row" display="flex"  justifyContent="center"  alignItems="center"  sx={{width:1/2, height: '100%'}}>
        <Grid item sx={{ml:"16px",mr:"16px", maxWidth:"13%"}}>
    <SvgIcon component={tmdbIcon} inheritViewBox  style={{width:"100%"}}/>
        </Grid>
        <Grid item>
        <Typography variant="body1" fontWeight="bold" color="white" >This product uses the TMDB API but is not endorsed or certify by TMDB</Typography>
        </Grid>
        </Grid>

        <Grid container direction="row" display="flex"  justifyContent="center"  alignItems="center"   sx={{width:1/2,height: '100%'}}>
        <Grid item  sx={{ml:"16px",mr:"16px"}}>
        <IconButton onClick={handleClickLinkeIn}>
            <LinkedInIcon  sx={{ color: "#0e76a8" }} fontSize="large"/>
        </IconButton>
        </Grid>
        <Grid item  sx={{ml:"16px",mr:"16px"}}>
            <IconButton onClick={handleClickGitHub}>
        <GitHubIcon  sx={{ color: "black" }} fontSize="large"/>
            </IconButton>
        </Grid>
        </Grid>

    </Grid>
  )
}

export default Footer