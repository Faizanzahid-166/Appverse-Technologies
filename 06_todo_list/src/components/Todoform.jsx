import React, { useState } from 'react'
import { useTodo } from "../context/TodoContext";
import './Todoform.css'

function Todoform() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    // add method to submit todo
    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }
  return (
    // add method to submit todo
    <form onSubmit={add} class='form'>

      {/* input feild where todo add */}
      <input type="text" placeholder='todo' className='form-input' value={todo} onChange={(e) => setTodo(e.target.value)}/>

      {/* add btn todo-list */}
      <button type='submit' className='form-btn'>
        Add
      </button>

    </form>
  )
}

export default Todoform
