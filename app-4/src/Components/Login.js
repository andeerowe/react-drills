import React, {Component} from 'react'

class Login extends Component {
    constructor (){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    updateUsername = (val) => {
        this.setState({
            username: val
        })
    }

    updatePassword = (val) => {
        this.setState({
            password: val
        })
    }

    alertFunction = () => {
        alert(`USERNAME: ${this.state.username}    PASSWORD: ${this.state.password}`)
    }

    render (){
        
        return (
            <div>
                <label>Username:</label>
                <input onChange={(e) => this.updateUsername(e.target.value)}/>
                <label>Password:</label>
                <input onChange={(e) => this.updatePassword(e.target.value)}/>
                <button onClick={() => this.alertFunction()}>Login</button>
            </div>
        )
    }
}

export default Login