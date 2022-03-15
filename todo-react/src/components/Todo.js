import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {MdOutlineDeleteForever} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'


function Todo({todos, completeTodo, removeTodo}) {
const [edit, setEdit] = useState({
    id:null,
    value:''
})

    return todos.map((todo,index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="icons">
            <FiEdit onClick={() => setEdit({id: todo.id , value: todo.text})} className='delete-icon'/>
            <MdOutlineDeleteForever onClick={() => removeTodo(todo.id)} className='delete-icon'/>


        </div>
        </div>
    ))
}

export default Todo