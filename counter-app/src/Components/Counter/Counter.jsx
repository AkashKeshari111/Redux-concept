import React from 'react'
import {useSelector,useDispatch} from "react-redux"

const Counter = () => {

const count=useSelector((store)=>store.counter.count);
const dispatch=useDispatch()

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch({type:"Sub"})}>-</button>
        <button onClick={()=>dispatch({type:"Add"})}>+</button>
    </div>
  )
}

export default Counter