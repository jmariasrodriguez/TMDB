import { createAction, createReducer } from "@reduxjs/toolkit";


export const onSetCarouselShows = createAction("ON_SET_CAROUSEL_SHOWS")
export const setCarouselShowsFail = createAction("SET_CAROUSEL_SHOWS_FAIL")
export const setCarouselShowsSuccess = createAction("SET_CAROUSEL_SHOWS_SUCCESS")


const initialState = {
    data:[],
    loading:false,
    error:null,
}

export default createReducer(initialState,{
    [onSetCarouselShows.type]: (state, action)=>{return{
        ...state,
        loading:true,
        error:null,
    }},
    [setCarouselShowsFail.type]:(state, action)=>{return{
        ...state,
        loading:false,
        error:action.payload
    }},
    [setCarouselShowsSuccess.type]:(state, action) => {return{
        ...state,
        data:action.payload,
        loading:false
    }},
})