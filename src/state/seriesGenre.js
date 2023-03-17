import { createAction, createReducer } from "@reduxjs/toolkit";


export const onSetSeriesGenre = createAction("ON_SET_SERIES_GENRE")
export const setSeriesGenreFail = createAction("SET_SERIES_GENRES_FAIL")
export const setSeriesGenreSuccess = createAction("SET_SERIES_GENRES_SUCCESS")


const initialState = {
    data:[],
    loading:false,
    error:null,
}

export default createReducer(initialState,{
    [onSetSeriesGenre.type]:(state, action) =>  {
        return{
        ...state,
        loading: true,
        error:null,
    }},
    [setSeriesGenreFail.type]:(state, action) =>  {
        return{
        ...state,
        loading: false,
        error: action.payload,
    }},
    [setSeriesGenreSuccess.type]:(state, action) =>  {
        return{
        ...state,
        data: action.payload,
        loading:false
    }},
})