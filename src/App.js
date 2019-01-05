import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import OrderBuilder from './containers/OrderBuilder/OrderBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <OrderBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
