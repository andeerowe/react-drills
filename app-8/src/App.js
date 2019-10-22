import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

const App = () => {
  const [character, setCharacter] = useState([])
  useEffect(() => {
    axios.get('https://swapi.co/api/people/2')
    .then(res => setCharacter(res.data))
    .catch(err => console.log('Wrong.', err))

  }, [])
  console.log(character)
    return (
      <div className="App">
        <h2>Name: {character.name}</h2>
        <h2>Color: {character.skin_color}</h2>
        <h2>Height: {character.height}</h2>
        <h2>Eye Color: {character.eye_color}</h2>
        <h2>Birth Year: {character.birth_year}</h2>

      </div>
    )
  }

export default App;
