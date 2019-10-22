import React, {useState} from 'react'

const NewTask = (props) => {
   const [input, setInput] = useState('')
       
    const handleAdd = () => {
        props.add(input)
        setInput('')
    }
        return (
            <div>
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}></input>
                <button onClick={handleAdd}>Add</button>
            </div>
        )
    }

export default NewTask