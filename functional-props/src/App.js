import React, { Component } from 'react'
import GroceryCart from './components/GroceryCart'
import GroceryItems from './components/GroceryItems'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      food: ["Apples", "Cheese", "Ice cream", "Oatmeal", "Juice", "Peanut butter", "Oranges", "Almonds"],
      household: ["Paper towels", "Dish soap", "Kleenex"],
      cart: []
    }
  }

  addItemToCart = (newItem) => {
    this.setState({ cart: [...this.state.cart, newItem] })
  }

  render() {
    console.log(this.state.cart)
    return (
      <>
        <h1>Grocery App</h1>

        <h3>Food</h3>
        <GroceryItems items={ this.state.food } addItemToCart={ this.addItemToCart } />

        <h3>Household</h3>
        <GroceryItems items={ this.state.household } addItemToCart={ this.addItemToCart } />

        <GroceryCart cart={ this.state.cart } />
      </>
    )
  }
}
export default App
