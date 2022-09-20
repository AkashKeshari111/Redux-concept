import {  combineReducers, legacy_createStore,applyMiddleware} from "redux";

import {FeedsReducer} from "./feeds/Feeds.Reducer";
import thunk from "redux-thunk"
import { AuthReducer } from "./auth/Auth.Reducer";
import PostReducer from "./post/Post.Reducer";


const rootReducer=combineReducers({

})



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))