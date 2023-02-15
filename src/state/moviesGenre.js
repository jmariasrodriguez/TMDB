import { createAction, createReducer } from "@reduxjs/toolkit";


export const onSetMoviesGenre = createAction("ON_SET_MOVIES_GENRE")
export const setMoviesGenresFail = createAction("SET_MOVIES_GENRES_FAIL")
export const setMoviesGenresSuccess = createAction("SET_MOVIES_GENRES_SUCCESS")


const initialState = {
    data:[],
    loading:false,
    error:null,
}

export default createReducer(initialState,{
    [onSetMoviesGenre.type]:(state, action) =>  {return{
        ...state,
        loading: true,
    }},
    [setMoviesGenresFail.type]:(state, action) =>  {return{
        ...state,
        loading: false,
        error: action.payload,
    }},
    [setMoviesGenresSuccess.type]:(state, action) =>  {
        return{
        ...state,
        data: action.payload,
        loading:false
    }},
})