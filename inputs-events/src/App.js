import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: ""
    }
  }

  handleChange = (e) => {
    // console.log(e)
    // console.log(e.target)
    console.log(e.target.value)
    this.setState({ userName: e.target.value })
  }

  render() {
    console.log(typeof this.state.userName)
    return (
      <>
        <h1>Greeter App</h1>
        <input
          type="text"
          onChange={ this.handleChange }
          value={ this.state.userName }
        />
        <p>Hello, { this.state.userName }</p>
      </>
    )
  }
}
export default App
