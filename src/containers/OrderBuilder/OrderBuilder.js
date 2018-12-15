import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import OrderControls from '../../components/Order/OrderControls/OrderControls';

import Aux from '../../hoc/Aux';

class OrderBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }
  state = {
    items: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  render() {
    return(
      <Aux>
        <Order items={this.state.items} />
        <OrderControls />
      </Aux>
    );
  }
}

export default OrderBuilder;