
import { ERROR_POST, LOADING_POST, SUCCESS_POST } from './Post.Type'



const initialState={
    loading:false,
error:false,
cartData:[]
}
const PostReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case LOADING_POST: {
            return {...state,loading:true,error:false}
        }
        case SUCCESS_POST: {
            return {...state,loading:false,error:false,cartData:payload}
        }
        case ERROR_POST: {
            return {...state,loading:false,error:true}
        }
        default:{
            return state
        }
      }
}

export default PostReducer