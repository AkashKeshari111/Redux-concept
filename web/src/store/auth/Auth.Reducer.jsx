import { ERROR_AUTH, LOADING_AUTH, LOGOUT, SUCCESS_AUTH } from "./Auth.Type";

const token = localStorage.getItem("token");
const initialState = {
  loading: false,
  error: false,
  token: token,
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_AUTH: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case SUCCESS_AUTH: {
        if(payload.token){
            localStorage.setItem("token", payload.token);
        }
     
      return { ...state, loading: false, error: false, token: payload.token };
    }
    case ERROR_AUTH: {
      return { ...state, loading: false, error: true };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: true,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};


