// import React, { Component } from "react";
// import logo from "./logo.svg";


// class App extends Component {
//   constructor (){
//     super ()

//     this.state = {
//       userInput:''
//     }
//   }

//   updateWords = (val) => {
//     this.setState({
//       userInput: val
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         <input onChange={(e) => this.updateWords(e.target.value)}/>
//         <h5>{this.state.userInput}</h5>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [text, setText] = useState('')
return(
  <div>
    <input onChange={(e) => setText(e.target.value)}/>
    {text}
  </div>
  
)
}

export default App
