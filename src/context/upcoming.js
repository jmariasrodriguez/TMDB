import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUpcoming = createAction("SET_UPCOMING")

const initialState = []

export default createReducer(initialState,{
    [setUpcoming]:(state, action) => action.payload,
})