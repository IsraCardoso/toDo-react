import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos]= useState([])
    const emoji = <span role="img" aria-label="sheep">🐑</span>





  return (
    <div>
        
        <h2>Hey!<span role="img" aria-label="hands">👋</span> What's the plan for today? </h2>
        <TodoForm />
    </div>
  )
}

export default TodoList