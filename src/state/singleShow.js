import { createAction, createReducer } from "@reduxjs/toolkit";


export const onSetSingleShow = createAction("ON_SET_SINGLE_SHOW") 
export const setSingleShowFail = createAction("SET_SINGLE_SHOW_FAIL") 
export const setSingleShowSuccess = createAction("SET_SINGLE_SHOW_SUCCESS") 


const initialState = {
    data:{},
    loading:false,
    error:null,
}

export default createReducer(initialState,{
    [onSetSingleShow]: (state, action) =>{return{
        ...state,
        loading:true,
        error:null,
    } },
    [setSingleShowFail]: (state,action)=>{return{
        ...state,
        loading:false,
        error: action.payload,
    }},
    [setSingleShowSuccess]: (state, action)=>{return{
        ...state,
        loading:false,
        data: action.payload,
    }}
})