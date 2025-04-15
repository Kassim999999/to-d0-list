import React from 'react'
import Todo from './Todo';

const Tod0list = ({todos, title}) => {
    console.log(title);
    
    let newTodos = todos.map(todo => {
        
        return(
           <Todo key={todo.id} todo ={todo}/> 
        )
    })
  return (
    <div>
        {newTodos}
    </div>
  )
}

export default Tod0list