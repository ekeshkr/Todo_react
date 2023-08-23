import { useEffect, useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const getLocalStorage = () =>{
  let list = localStorage.getItem('Todo')
  if(list){
    return (list = JSON.parse(localStorage.getItem('Todo')));
  }else{
    return [];
  }
}

function App() {
   const [todos,setTodos] = useState(getLocalStorage());

  const inputListHandler=(todo,quantity)=>{
     setTodos(prevTodos=>{
      return[...prevTodos,{name:todo,quantity:quantity,id:Date.now()}]
     })
  }
  useEffect(() => {
    localStorage.setItem('Todo',JSON.stringify(todos))

  }, [todos])
  

  const deleteHandler=(todoId)=>{
    setTodos((prevTodos)=>{
       return prevTodos.filter((todo)=>todo.id !== todoId)
    })
  }

  return (
    <>
     <TodoInput addInput={inputListHandler}/>
     <TodoList addTodo={todos} onDelete={deleteHandler}/>
     
    </>
  );
}

export default App;
