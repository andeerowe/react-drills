import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Components/ImageComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Image 
      img={'https://assets.vogue.com/photos/5d2f42b4e529c100082ac096/master/pass/00-promo-image-amalfi-coast-italy-travel-guide.jpg'}/>
      </div>
    );
  }
}

export default App;
