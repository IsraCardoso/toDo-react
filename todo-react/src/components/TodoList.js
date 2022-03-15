import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos]= useState([])
    
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(todo, ...todos)
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id){
                todo.isComplete =!todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }



  return (
    <div>
        
        <h2>Hey!<span role="img" aria-label="hands">👋</span> What's the plan for today? </h2>
        <TodoForm onSubmit={addTodo} />
        <Todo 
        todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default TodoList