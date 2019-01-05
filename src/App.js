import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import OrderBuilder from './containers/OrderBuilder/OrderBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={OrderBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route render={() => <h1>404 Error</h1>} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
