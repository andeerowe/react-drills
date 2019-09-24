import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor () {
    super ()

    this.state = {
      dataArr:['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render() {
    return (
      <div className="App">
       <ul>
         <li><h2>{this.state.dataArr[0]}</h2></li>
         <li><h2>{this.state.dataArr[1]}</h2></li>
         <li><h2>{this.state.dataArr[2]}</h2></li>
         <li><h2>{this.state.dataArr[3]}</h2></li>
         <li><h2>{this.state.dataArr[4]}</h2></li>
       </ul>
      </div>
    );
  }
}

export default App;
