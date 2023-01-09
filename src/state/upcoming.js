import { createAction, createReducer } from "@reduxjs/toolkit";

export const onSetUpcoming = createAction("ON_SET_UPCOMING")
export const setUpcomingFail = createAction("SET_UPCOMING_FAIL")
export const setUpcomingSuccess = createAction("SET_UPCOMING-SUCCESS")


const initialState = {
        data:[],
        loading:false,
        error:null,
};

export default createReducer(initialState, {
    [onSetUpcoming.type]:(state, action) =>  {return{
        ...state,
        loading: true,
    }},
    [setUpcomingFail.type]:(state, action) =>  {return{
        ...state,
        loading: false,
        error: action.payload,
    }},
    [setUpcomingSuccess.type]:(state, action) =>  {return{
        ...state,
        data: action.payload,
        loading:false
    }},
})
