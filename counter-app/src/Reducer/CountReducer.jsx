//initialState
const initialState={
    count:0
}

//Reducer
export const countReducer=(state=initialState,action)=>{
    switch(action.type){
       case "Add":{
        return {count:state.count+1};
       }
       case "Sub":{
        return {count:state.count-1};
       }
       default:{
        return state
       }
    }
}
