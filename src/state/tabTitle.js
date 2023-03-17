import { createAction, createReducer } from "@reduxjs/toolkit";

export const tabTitle = createAction("SET_TAB_TITLE")
export const tabSubtitle = createAction("SET_TAB_SUBTITLE")

const initialState ={
    title:"",
    subtitle:"",
}

export default createReducer(initialState,{
    [tabTitle.type]: (state, action) =>  {return {
        ...state,
        title: action.payload}},

    [tabSubtitle.type]:(state, action)=> {return{
        ...state,
        subtitle: action.payload}}
})