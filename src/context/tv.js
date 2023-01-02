import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTv = createAction("SET_TV")

const initialState = []

export default createReducer(initialState,{
    [setTv]:(state, action) => action.payload
})