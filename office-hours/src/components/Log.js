import React, { Component } from 'react'

class Log extends Component {
  render() {
    return (
      <>
        <h3>Dice Log</h3>
        { this.props.diceLog.map((value, index) => {
          return (
            <p key={ index }>
              { value }
            </p>
          )
        })}
      </>
    )
  }
}
export default Log
