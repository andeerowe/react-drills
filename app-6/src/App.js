import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Todo from './Components/Todo'

const App = () => {
const [list, setList] = useState([])
const [item, setItem] = useState('')

const updateList = () => {
    setList([...list, item])
    setItem('')
}

    let toDoList = list.map((e,i) => {
      return <Todo key={i} task={e}/>
  
    })

    // console.log(this.state.todoList)

    return (
      <div className="App">
        <h1>My To-Do List</h1>

        <div>
        <input onChange={(e)=> setItem(e.target.value)}/>
        <button onClick={() => updateList()}>Add</button>
        </div>
        <br />
        {toDoList}
      </div>
    );
  }

export default App;
