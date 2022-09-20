

import { ERROR_FEEDS, LOADING_FEEDS, SUCCESS_FEEDS } from './FeedsType'

const initialState={
    loading:false,
    error:false,
    data:[]
}

export const FeedsReducer = (state=initialState,{type,payload}) => {
   switch(type){
    case LOADING_FEEDS:{
        return {...state,loading:true,error:false}
    }
    case SUCCESS_FEEDS:{
        return {...state,loading:false,error:false,data:payload}
    }
    case ERROR_FEEDS:{
        return {...state,loading:false,error:true}
    }
    default:{
        return state
    }
   }
}

