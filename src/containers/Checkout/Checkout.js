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

  componentDidMount () {
    const query = new URLSearchParams(this.props.location.search);
    const items = {};
    for (let param of query.entries()) {
      items[param[0]] = +param[1];
    }
    this.setState({items: items});
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.push('/checkout/info');
  }

  render () {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          items={this.state.items} />
      </div>
    );
  }
}

export default Checkout;