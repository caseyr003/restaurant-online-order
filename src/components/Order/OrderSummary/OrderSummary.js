import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // could have been left as a functional component
  componentWillUpdate() {
    console.log("Order Summary will update");
  }

  render () {
    const itemsSummary = Object.keys(this.props.items)
    .map(key => {
      return (
        <li key={key}>
          <span style={{textTransform:'capitalize'}}>
            {key}
          </span>: {this.props.items[key]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order Summary</h3>
        <p>Thanks for your order! We hope you enjoy your items</p>
        <ul>
          {itemsSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button 
          clicked={this.props.purchaseCancelled}
          type="Danger">Cancel</Button>
        <Button 
          clicked={this.props.purchaseConfirmed}
          type="Success">Checkout</Button>
      </Aux>
    );
  }
}

export default OrderSummary;