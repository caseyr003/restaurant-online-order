import React, { Component } from 'react';
import Order from '../../components/Order/Order';

import Aux from '../../hoc/Aux';

class OrderBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }
  state = {
    items: {
      salad: 2,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  }
  render() {
    return(
      <Aux>
        <Order items={this.state.items} />
        <div>Order Controls</div>
      </Aux>
    );
  }
}

export default OrderBuilder;