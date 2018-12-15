import React, { Component } from 'react';
import Order from '../../components/Order/Order';

import Aux from '../../hoc/Aux';

class OrderBuilder extends Component {
  render() {
    return(
      <Aux>
        <Order />
        <div>Order Controls</div>
      </Aux>
    );
  }
}

export default OrderBuilder;