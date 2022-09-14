import React from 'react'
import { Add, Delete, Update } from './TodosActionType'




const initialState={
    todos:[]
}


const TodosReducer = (state=initialState,{type,payload}) => {

switch (type){
    case Add:{
        return {...state, todos:[...state.todos,payload]}
    }
    case Delete:{
        const newTodos= state.todos.filter((todo)=>(todo.id!==payload.id));
        return {...state, todos:newTodos}
    }

    case Update:{
        const updateData = state.todos.map((todo) =>
        todo.id === payload.id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted
            }
          : todo
      );
        return {...state, todos:updateData}
    }
 
    default:
        return state
       
}


}

export default TodosReducer