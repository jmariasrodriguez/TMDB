import { createAction, createReducer } from "@reduxjs/toolkit";

export const onSetUserImage = createAction("ON_SET_USERIMAGE")
export const setUserImageFail = createAction("SET_USERIMAGE_FAIL")
export const setUserImageSuccess = createAction("SET_USERIMAGE_SUCCESS")


const initialState = {
    data:[],
    loading:false,
    error:null,
}


export default createReducer(initialState,{
    [onSetUserImage.type]: (state, action)=>{return{
        ...state,
        loading:true,  
    }},
    [setUserImageFail.type]:(state, action)=>{return{
        ...state,
        loading:false,
        error:action.payload
    }},
    [setUserImageSuccess.type]:(state, action) => {return{
        ...state,
        data:action.payload,
        loading:false
    }},
})

