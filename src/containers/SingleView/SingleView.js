import { Alert, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { API_URL, SINGLE_SHOW, SINGLE_SHOW_VIEW_TITLES } from "../../data/constants";
import { onSetSingleShow, setSingleShowFail, setSingleShowSuccess,} from "../../state/singleShow";
import SectionCast from "./SectionCast";
import SectionMovieTv from "./SectionMovieTv";
import SectionRecomendations from "./SectionRecomendations";

const SingleView = () => {
  const { id } = useParams();
  const showType = useLocation().pathname.split("/")[1];
  const dispatch = useDispatch();
  const [casting, setCasting] = useState({data:[], loading:false, error:null});
  const [recomendations, setRecomendations] = useState({data:[], loading:false, error:null});
  const sectionData = {
    [SINGLE_SHOW]: useSelector((state) => state[SINGLE_SHOW]),
  };
  
  useEffect(() => {
    //Get the singleShow data
    dispatch(onSetSingleShow());
    axios
      .get(`${API_URL.beginningPath}${showType}/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`)
      .then((show) => {dispatch(setSingleShowSuccess(show.data));})
      .catch((err) => {
        dispatch(setSingleShowFail(err));
      });
  }, []);

  useEffect(() => {
    //Get the Casting data
    setCasting({...casting, loading:true});
    axios
      .get(`${API_URL.beginningPath}${showType}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}`)
      .then((castData) => {setCasting({...casting, data: castData.data.cast, loading:false});
    })
    .catch((err)=>{setCasting({...casting, error: err, loading:false})})
  }, [])
  
  useEffect(() => {
    //Get the Recomendations data
    setRecomendations({...recomendations, loading:true});
    axios
    .get(`${API_URL.beginningPath}${showType}/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY_TMDB}&${API_URL.language}&page=1`)
    .then((recomendationsData) => {
      setRecomendations({...recomendations, data: recomendationsData.data.results, loading:false})
    })
    .catch((err)=>{setRecomendations({...recomendations, error:err, loading:false})})
  }, [])


  return (
    <Box>
      {sectionData[SINGLE_SHOW].loading && <Box sx={{ display: 'flex' }}><CircularProgress /></Box>} 
      {sectionData[SINGLE_SHOW].error && <Alert variant="filled" severity="error">{sectionData[SINGLE_SHOW].error}</Alert>}
      <SectionMovieTv/>
      <SectionCast Title={SINGLE_SHOW_VIEW_TITLES.cast} {...casting}/>
      <SectionRecomendations Title={SINGLE_SHOW_VIEW_TITLES.recomendations} {...recomendations}/>
    </Box>
  );
};

export default SingleView;
