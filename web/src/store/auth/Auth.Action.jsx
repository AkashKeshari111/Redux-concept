import axios from "axios";
import { ERROR_AUTH, LOADING_AUTH, LOGOUT, SUCCESS_AUTH } from "./Auth.Type";




export const AuthAction = (creds) => async (dispatch) => {
  dispatch({ type: LOADING_AUTH });
  try {
    let res = await axios.post("http://localhost:8080/users/login", creds);
    dispatch({ type: SUCCESS_AUTH, payload: res.data });
    console.log(res.data)
    return res.data;
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR_AUTH });
  }
};

export const AuthLogout = () => ({ type: LOGOUT });
