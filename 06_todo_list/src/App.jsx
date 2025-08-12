import { useEffect, useState } from 'react'
import {TodoProvider} from './context'
import Todoform  from "./components/Todoform";
import Todoitem from "./components/Todoitem";
import './App.css'

function App() {
  const [todos, setTodo] = useState([])
  
  // 1
  const addTodo = (todo) => {
    setTodo( (prev) => [...prev,{id: Date.now(),...todo}] )
  }

  //2
  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => ( prevTodo.id === id  ? todo : prevTodo)))
  }
 
  //3
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => (todo.id !== id) ))
  }

  //4
  const toggleComplete = (id) => {setTodo((prev) => 
    prev.map((prevTodo) => 
    prevTodo.id === id ? {...prevTodo,completed : !prevTodo.completed} : prevTodo))
  }

  // local-storage
  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"))

  //   if (todos && todos.length > 0) {
  //     setTodo(todos)
  //   }
  // }) ,[]

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // }),[todos]

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []); // Dependency array correctly placed
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Dependency array correctly placed

  return (
    // todo provider from context
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

      <div className='main-container'>

        {/* main heading */}
        <h1 className='main-logo'> TODO LISTS</h1>

        {/* todo-form component */}
        <div className='todo-form'><Todoform /></div>

        {/* todo-list component use maping */}
        {todos.map((todo) => (
        <div key={todo.id} className='todo-item'>
        <Todoitem todo={todo} />
        </div>))}
        
      </div>
    </TodoProvider>
  )
}

export default App
