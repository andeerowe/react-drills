import React, {useState} from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
        
        return (
            <div>
                <label>Username:</label>
                <input onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={() => alert(`USERNAME: ${username}    PASSWORD: ${password}`)}>Login</button>
            </div>
        )
    
}

export default Login