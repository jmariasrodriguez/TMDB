import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTv = createAction("SET_TV")
export const onSetTv = createAction("ON_SET_TV")
export const setTvFail = createAction("SET_TV_FAIL")
export const setTvSuccess = createAction("SET_TV_SUCCESS")

const initialState = {
    data:[],
    loading: false,
    error: null,
}

export default createReducer(initialState,{
    [onSetTv.type]:(state, action) => { return {
        ...state,
        loading: true
    }},
    [setTvFail.type]: (state, action)=>{return{
        ...state,
        loading:false,
        error: action.payload
    }},
    [setTvSuccess.type]:(state, action) => { return {
        ...state,
        data: action.payload,
        loading:false
    }},

})