import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor (){
    super ()

    this.state ={
      results: '',
      dataArr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      
    }
  }

  updateUserInput = (val) => {
      this.setState({
      results: val,
    }) 
  }

  render() {
     let foodsToDisplay = this.state.dataArr
    .filter((element, index) => {
      return element.includes(this.state.results);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return (
      <div className="App">
        <input onChange={(e) => this.updateUserInput(e.target.value)} type="text"/>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
