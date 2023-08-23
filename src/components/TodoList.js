import React from 'react'
import classes from './TodoList.module.css'
const TodoList = ({addTodo,onDelete}) => {
  return (
    <ul>
    {addTodo.map((todo)=>{
     return   <li key={todo.id}><span>{todo.name} ({todo.quantity})</span> <button onClick={()=>{onDelete(todo.id)}} className={classes.delete}>X</button></li>
    })}
    
    </ul>
  )
}

export default TodoList

