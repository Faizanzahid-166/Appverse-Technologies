import React, { useState } from 'react'
import { useTodo } from "../context/TodoContext";
import './Todoform.css'

function Todoform() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }
  return (
    <form onSubmit={add} class='form'>
        <input type="text" 
         placeholder='todo'
        class='form-input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />

        <button type='submit' class='form-btn'>
          Add
        </button>
    </form>
  )
}

export default Todoform
