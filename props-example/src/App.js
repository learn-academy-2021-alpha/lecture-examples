import React, { Component } from "react"
import './App.css';
import Greeter from "./components/Greeter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      vip: [
        "Sarah",
        "Fernando",
        "Steph",
        "Justin",
        "Allen",
        "Raul",
        "Angelo",
        "Deven",
        "Elyse",
        "Guerrero",
        "Kevinn",
        "Lex",
        "Nick"
      ]
    };
  }

  pickRaffleNumber() {
    return Math.floor(Math.random() * 100);
  }

  render() {
    return (
      <div className="App">
        Alpha Party up in here!!
        {
          this.state.vip.map((person, index) => {
            return <Greeter name={person} 
                            key={index} 
                            raffleAction={this.pickRaffleNumber}/>
          })
        }
      </div>
    );
  }
}

export default App;
