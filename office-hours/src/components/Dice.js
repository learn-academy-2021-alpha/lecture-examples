import React, { Component } from 'react'

class Dice extends Component {
  render() {
    return (
      <>
        <div className="dice" onClick={ this.props.diceRoll }>
          { this.props.diceNumber }
        </div>
      </>
    )
  }
}
export default Dice
