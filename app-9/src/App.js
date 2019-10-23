import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import routes from './routes/routes'
import { Link } from 'react-router-dom'


const App = () => {
  
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/details'>Details</Link>
        {routes}
      </nav>
    )
  
}

export default App;
