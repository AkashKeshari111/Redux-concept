import { Add, Delete, Update } from "./TodosActionType"
import {v4} from "uuid"

export const ADD=(text)=>{
  return {
    type:Add,
    payload:{
        id:v4(),
        isCompleted:false,
        text:text,
    }
  }
}

export const DELETE=(id)=>{
return {
    type:Delete,
    payload:{id}
}
}

export const markCompleted=(id)=>{
    return {
        type:Update,
        payload:{id}
    }
}