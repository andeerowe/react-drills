import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Todo from './Components/Todo'

class App extends Component {

constructor () {
  super ()

  this.state = {
    todoList: [],
    item: ''
  }
}

updateItem = (val) => {
  this.setState({
    item: val
  })
  // console.log(this.state.todoList)
}

updateList = () => {
  this.setState({
    todoList: [...this.state.todoList, this.state.item],
    item: ''
  })
}

  render() {

    let list = this.state.todoList.map((e,i) => {
      return <Todo key={i} task={e}/>
  
    })

    console.log(this.state.todoList)

    return (
      <div className="App">
        <h1>My To-Do List</h1>

        <div>
        <input onChange={(e)=>this.updateItem(e.target.value)}/>
        <button onClick={() => this.updateList()}>Add</button>
        </div>
        <br />
        {list}
      </div>
    );
  }
}

export default App;
