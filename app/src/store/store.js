
import { legacy_createStore,combineReducers } from "redux";
import { countReducer } from "../Reducer/CountReducer";
import { dynamicCounterReducer } from "../Reducer/DynamicCounter";
import TodosReducer from "../TodoReducer/TodosReducer";




//combinedReducer
const rootReducers=combineReducers({
    counter:countReducer,
    dynamicCounter:dynamicCounterReducer,
    todos:TodosReducer
})


//creating the store
const store=legacy_createStore(rootReducers)





//export the store
export {store}