import { createAction, createReducer } from "@reduxjs/toolkit";


export const onSetMovies = createAction("ON_SET_MOVIES")
export const setMoviesFail = createAction("SET_MOVIES_FAIL")
export const setMoviesSuccess = createAction("SET_MOVIES_SUCCESS")


const initialState = {
    data:[],
    loading:false,
    error:null,
}

export default createReducer(initialState,{
    [onSetMovies.type]: (state, action)=>{return{
        ...state,
        loading:true,
    }},
    [setMoviesFail.type]:(state, action)=>{return{
        ...state,
        loading:false,
        error:action.payload
    }},
    [setMoviesSuccess.type]:(state, action) => {return{
        ...state,
        data:action.payload,
        loading:false
    }},
})