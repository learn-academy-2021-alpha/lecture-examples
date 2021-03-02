import React, { Component } from 'react'
import Dice from './components/Dice'
import Log from './components/Log'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      diceNumber: 0,
      diceLog: []
    }
  }

  diceRoll = () => {
    let dice = Math.ceil(Math.random() * 6)
    this.setState({
      diceNumber: dice,
      diceLog: [...this.state.diceLog, dice]
    })
  }

  render() {
    return (
      <>
        <h1>Dice Roller</h1>
        <Dice
          diceNumber={ this.state.diceNumber }
          diceRoll={ this.diceRoll }
        />
        <Log diceLog={ this.state.diceLog } />
      </>
    )
  }
}
export default App
