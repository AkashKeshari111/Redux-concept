

const initialState={
    count:0,
}


export const dynamicCounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case "AddOne":{
            return {count:state.count+1};
           }
           case "SubOne":{
            return {count:state.count-1};
           }
        case "Add 100 Rs":{
          return  {count:state.count + Number(action.payload)}
        }
        case "Dec 100 Rs":{
            return  {count:state.count - Number(action.payload)}
        }
        case "Add manually":{
            return  {count:state.count + Number(action.payload)}
        }
        case "Sub manually":{
            return  {count:state.count - Number(action.payload)}
        }
        case "Mul manually":{
            return  {count:state.count * Number(action.payload)}
        }
        case "Div manually":{
            return  {count:state.count / Number(action.payload)}
        }
        case "Reset manually":{
            return  {count:state.count=0}
        }
        default:{
            return state
        }
    }
}