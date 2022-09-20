
import { legacy_createStore ,combineReducers} from "redux"
import { FeedsReducer } from "./Feeds/FeedsReducer"

const rootReducer=combineReducers({
  feeds:FeedsReducer
})

export const store = legacy_createStore(rootReducer)