import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Image from './Components/ImageComponent'

const App = () => {
  const [img] = useState('https://assets.vogue.com/photos/5d2f42b4e529c100082ac096/master/pass/00-promo-image-amalfi-coast-italy-travel-guide.jpg')
    return (
      <div className="App">
      <Image 
      img={img}/>
      </div>
    );
  
}

export default App;
