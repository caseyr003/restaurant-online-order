import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import OrderControls from '../../components/Order/OrderControls/OrderControls';
import Aux from '../../hoc/Aux';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

const ITEM_PRICES = {
  lettuce: 0.5,
  bacon: 0.7,
  cheese: 0.3,
  meat: 1.1
};

class OrderBuilder extends Component {

  state = {
    items: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 3,
    purchasable: false,
    purchasing: false,
    loading: false
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

  purchaseConfirmHandler = () => {
    this.setState({loading: true});

    const order = {
      cost: this.state.totalPrice,
      items: {
        lettuce: this.state.items.lettuce,
        cheese: this.state.items.cheese,
        bacon: this.state.items.bacon,
        meat: this.state.items.meat
      },
      customer: {
        name: 'Casey',
        id: 1,
        address: {
          street: '1000 JS Way',
          zipCode: '86753',
          country: 'US'
        },
        email: 'casey@testemail.com'
      },
      deliveryMethod: 'pickup'
    }
    
    axios.post('/orders', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
        alert("Order Successful. Thank you for your purchase!");
      })
      .catch(error => {
        this.setState({loading: false, purchasing: false});
        alert("Order Failed. Please try again!");
      });
  }

  render() {
    const disabledItems = {...this.state.items};
    for (let key in disabledItems) {
      disabledItems[key] = disabledItems[key] <= 0;
    }
    let orderSummary = <OrderSummary 
                          items={this.state.items}
                          price={this.state.totalPrice}
                          purchaseCancelled={this.purchaseCancelHandler} 
                          purchaseConfirmed={this.purchaseConfirmHandler}/>;

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return(
      <Aux>
        <Modal show={this.state.purchasing} modalDismissed={this.purchaseCancelHandler}>
          {orderSummary}
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