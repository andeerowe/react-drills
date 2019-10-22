// import React, { Component } from "react";
// import "./App.css";
// import NewTask from './Component/NewTask'
// import List from './Component/List'


// class App extends Component {
//   constructor (){
//     super ()

//     this.state = {
//       list: []
//     }
//   }

//   handleAddTask = (task) => {
//     this.setState({
//       list: [...this.state.list, task]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>My To Do List</h1>
//         <NewTask add={this.handleAddTask}/>
//         <List tasks={this.state.list} />
       
//       </div>
//     );
//   }
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import NewTask from './Component/NewTask'
import List from './Component/List'


const App = () => {
  const [list, setList] = useState([])
  
  const handleAddTask = (task) => {
    
      setList([...list, task]) 
    
  }

    return (
      <div className="App">
        <h1>My To Do List</h1>
        <NewTask add={handleAddTask}/>
        <List tasks={list} />
       
      </div>
    );
  }

export default App;
