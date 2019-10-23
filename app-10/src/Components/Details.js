import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Details = (props) => {
    // console.log(props.match.params.id)
    const [currentGuy, setCurrentGuy] = useState('')
    // console.log(currentGuy)

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/${props.match.params.id}`)
        .then(res => setCurrentGuy(res.data))
        .catch(err => console.log('Problem in details get request', err))
    }, [])
    return(
        <div>
            <h1>Details</h1>
            <p>Name: {currentGuy.name}</p>
            <p>Height: {currentGuy.height}</p>
            <p>Mass: {currentGuy.mass}</p>
            <p>Hair Color: {currentGuy.hair_color}</p>
            <p>Skin Color: {currentGuy.skin_color}</p>
            <p>Eye Color: {currentGuy.eye_color}</p>
            <p>Birth Year: {currentGuy.birth_year}</p>
            <p>Gender: {currentGuy.gender}</p>
            

        </div>
    )
}

export default Details