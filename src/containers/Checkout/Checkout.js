import React, { Component } from 'react';
import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    items: {
      lettuce: 1,
      cheese: 1,
      bacon: 0,
      meat: 1
    }
  }

  render () {
    return (
      <div>
        <CheckoutSummary items={this.state.items} />
      </div>
    );
  }
}

export default Checkout;