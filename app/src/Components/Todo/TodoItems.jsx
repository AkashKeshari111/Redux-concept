import React from 'react'


const TodoItems = ({todos,handleCompleted,handleDelete}) => {

  return (
    <div>
    {todos.map((todo) => (
      <div key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={()=>handleCompleted(todo.id)}>
          {todo.isCompleted ? "Completed" : "Not Completed"}
        </button>
        <button onClick={() => handleDelete(todo.id)}>Del</button>
      </div>
    ))}
  </div>
  )
}

export default TodoItems