import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import OrderControls from '../../components/Order/OrderControls/OrderControls';

import Aux from '../../hoc/Aux';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';

const ITEM_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.3,
  meat: 1.1
};

class OrderBuilder extends Component {

  state = {
    items: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 3,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState(items) {
    const sum = Object.keys(items)
        .map(key => {
          return items[key];
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);

    this.setState({purchasable: sum > 0}); 
  }

  addItemHandler = (type) => {
    const items = {...this.state.items};
    items[type]++;
    const updatedPrice = this.state.totalPrice + ITEM_PRICES[type];
    this.setState({items: items, totalPrice: updatedPrice});
    this.updatePurchaseState(items);
  }

  removeItemHandler = (type) => {
    if(this.state.items[type] > 0){
      const items = {...this.state.items};
      items[type]--;
      const updatedPrice = this.state.totalPrice - ITEM_PRICES[type];
      this.setState({items: items, totalPrice: updatedPrice});
      this.updatePurchaseState(items);
    }
  }

  purchasingHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  render() {
    const disabledItems = {...this.state.items};
    for (let key in disabledItems) {
      disabledItems[key] = disabledItems[key] <= 0;
    }
    return(
      <Aux>
        <Modal show={this.state.purchasing} modalDismissed={this.purchaseCancelHandler}>
          <OrderSummary items={this.state.items} />
        </Modal>
        <Order items={this.state.items} />
        <OrderControls 
          itemAdded={this.addItemHandler}
          itemRemoved={this.removeItemHandler}
          disabled={disabledItems}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchasingHandler} />
      </Aux>
    );
  }
}

export default OrderBuilder;