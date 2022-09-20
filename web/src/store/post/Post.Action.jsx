import axios from "axios"
import { ERROR_POST, LOADING_POST, SUCCESS_POST } from "./Post.Type"

export const PostAction = (token)=>async (dispatch) => {
    dispatch({type:LOADING_POST})
   try{
       let res= await axios.post("http://localhost:8080/carts",{
    headers:{
          
            token:token
        }
       })
        dispatch({type:SUCCESS_POST,payload:res.data})
       return res.data
   }
   catch(err){
       console.log(err)
       dispatch({type:ERROR_POST})
   }
     
}