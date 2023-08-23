import React, {  useReducer} from 'react'
import classes from './TodoInput.module.css'

const intitialState= {todo:'',quantity:0}

const reducer=(state,action)=>{
    switch(action.type){
        case('SET_TODO'):
        return{...state, todo: action.payload}
        case('SET_QUANTITY'):
        return{...state, quantity: action.payload}
        case('RESET'):
        return intitialState;
        default :
        return state;
    }
}

const TodoInput = (props) => {
   
    const [state,dispatch] = useReducer(reducer,intitialState)

    const submitHandler=(e)=>{
       e.preventDefault();
       if(state.todo.trim().length === 0 || state.quantity < 1 ){
        return;
    }
       props.addInput(state.todo,state.quantity)
       dispatch({type:"RESET" })
    }

    const inputHandler=(e)=>{
        dispatch({type:'SET_TODO' , payload: e.target.value})
      
    }
    const quantityHandler=(e)=>{
        dispatch({type:'SET_QUANTITY' , payload: e.target.value})
    }
  return (
    // <section id={classes.container}>
      <form  id={classes.container} onSubmit={submitHandler}>
        <label htmlFor="todoInput">Item Name</label>
        <input type="text" value={state.todo} id="todoInput" onChange={inputHandler} />
        <label htmlFor="quantity">Quantity</label>
        <input type="number" value={state.quantity} id="quantity" onChange={quantityHandler} />
        <button type='submit'>ADD</button>
      </form>
    // </section>
  )
}

export default TodoInput
