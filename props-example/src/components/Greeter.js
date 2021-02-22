import React, { Component } from "react";

class Greeter extends Component {
  constructor() {
    super();
    this.state = {
      raffleNumber: undefined
    }
  }

  getRaffleNumber = () => {
    const newRaffleNumber = this.props.raffleAction();
    this.setState({ raffleNumber: newRaffleNumber });
  }

  render() {
    return(
      <>
        <h1>Hi {this.props.name}!</h1>
        <p>This is your raffle number: {this.state.raffleNumber}</p>
        <button onClick={this.getRaffleNumber}>Pick a raffle number</button>
      </>)  
  }
}

export default Greeter;