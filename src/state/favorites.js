import { createAction, createReducer } from "@reduxjs/toolkit";

export const onSetFavorites = createAction("ON_SET_FAVORITES")
export const setFavoritesFail = createAction("SET_FAVORITES_FAIL")
export const setFavoritesSuccess = createAction("SET_FAVORITES_SUCCESS")


const initialState = {
    data:[],
    loading:false,
    error:null,
}


export default createReducer(initialState,{
    [onSetFavorites.type]: (state, action)=>{return{
        ...state,
        loading:true,
        error:null,
    }},
    [setFavoritesFail.type]:(state, action)=>{return{
        ...state,
        loading:false,
        error:action.payload
    }},
    [setFavoritesSuccess.type]:(state, action) => {return{
        ...state,
        data:action.payload,
        loading:false
    }},
})