
import { ERROR_FEEDS, LOADING_FEEDS, SUCCESS_FEEDS } from './Feeds.Type'
const initialState={
loading:false,
error:false,
data:[{"products":"631ee11281d080642dfbe7aa","users":"631dd54b841b7dc181d9355b","quantity":5}]
}
export const FeedsReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case LOADING_FEEDS: {
            return { ...state,
                loading:true,error:false}
        }
        case SUCCESS_FEEDS: {
            return { ...state,
                loading:false,error:false,data:payload}
        }
        case ERROR_FEEDS: {
            return { ...state,
                loading:false,error:true}
        }
        default:{
            return state
        }
      }
}

