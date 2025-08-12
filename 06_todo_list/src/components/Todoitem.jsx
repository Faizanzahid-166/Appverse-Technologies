import React, { useState } from 'react'
import { useTodo } from '../context'
import './Todoitem.css'

function Todoitem({todo}) {
  const [todoeditable, setTodoeditable] = useState(false)
  const [todomsg, setTodomsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete}  = useTodo()

  const editTodo = ()  => {
    updateTodo(todo.id, {...todo,todo: todomsg})
    setTodoeditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }
  return (
    // todo lists
   <div className='form-items'> 

    <div >
      {/* todo checjbox */}
      <input type="checkbox" 
             className='form-items-input-checkbox' 
             checked={todo.completed} 
             onChange={toggleCompleted} />
      {/* todo input value text or string */}
      <input type="text" value={todomsg}  
             readOnly={!todoeditable} 
             onChange={(e) => setTodomsg(e.target.value)}
             className={`form-items-input ${todo.completed ? 'completed' : ''}`}  />

      {/* save && edit btn for text */}
      <button className={`form-items-btn-save ${todoeditable ? 'save-btn' : 'edit-btn'}`}
              disabled={todo.completed} onClick={() => {
               if (todo.completed) return;
               if (todoeditable) {
               editTodo();
               }else setTodoeditable((prev) => !prev);}}>
               {todoeditable ? "save" : "edit"}
      </button>

        {/* delete btn for text */}
      <button className='form-items-btn-delete'
              onClick={() => deleteTodo(todo.id)}> 
              delete
      </button>
    </div>
  </div>
  )
}

export default Todoitem
