import React, { Component } from 'react'
import Miles from './components/Miles'

class App extends Component {

  render() {
    return (
      <>
        <h1>Miles Tracker</h1>
        <h3>January</h3>
        <Miles />
        <h3>February</h3>
        <Miles />
        <h3>March</h3>
        <Miles />
        <h3>April</h3>
        <Miles />
      </>
    )
  }

}
export default App
