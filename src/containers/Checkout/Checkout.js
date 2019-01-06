import React, { Component } from 'react';
import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactInfo from './ContactInfo/ContactInfo';

class Checkout extends Component {
  state = {
    items: null,
    price: 0
  }

  componentWillMount () {
    const query = new URLSearchParams(this.props.location.search);
    const items = {};
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        this.setState({price: +param[1]});
      } else {
        items[param[0]] = +param[1];
      }
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
        <Route 
          path={this.props.match.path + '/info'} 
          render={() => (<ContactInfo items={this.state.items} price={this.state.price} {...this.props} />)} />
      </div>
    );
  }
}

export default Checkout;