import React, { Component } from 'react'

class GroceryItems extends Component {
  render() {
    return (
      <>
        <ul>
          { this.props.items.map((item, index) => {
            return(
              <li key={ index }>
                <button onClick={ () => this.props.addItemToCart(item) }>{ item }</button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default GroceryItems
