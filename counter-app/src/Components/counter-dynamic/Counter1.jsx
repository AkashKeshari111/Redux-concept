import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter1 = () => {
  const [value, setValue] = useState(0);
  const count = useSelector((store) => store.dynamicCounter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Count:{count}</h1>

      <button onClick={()=>dispatch({type:"AddOne"})}>+</button>
      <button onClick={()=>dispatch({type:"SubOne"})}>-</button>
      
        <br/><br/>
      <button onClick={() => dispatch({ type: "Add 100 Rs", payload: 100 })}>
        Add 100 Rs
      </button>
      <button onClick={() => dispatch({ type: "Dec 100 Rs", payload: 100 })}>
        Dec 100 Rs
      </button>
      <br/><br/>
      <input  value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() =>dispatch({ type: "Add manually", payload: Number(value) })}> Add</button>
      <button onClick={() =>dispatch({ type: "Sub manually", payload: Number(value) })}> Sub</button>
      <button onClick={() =>dispatch({ type: "Mul manually", payload: Number(value) })}> Mul</button>
      <button onClick={() =>dispatch({ type: "Div manually", payload: Number(value) })}> Div</button>
      <button onClick={() =>dispatch({ type: "Reset manually" })}> Reset</button>
      <select onChange={(e)=>setValue(e.target.value)}>
      <option >0</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>
    </div>
  );
};

export default Counter1;
