import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import OrderControls from '../../components/Order/OrderControls/OrderControls';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
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
    items: null,
    totalPrice: 3,
    purchasable: true,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount () {
    axios.get('http://localhost:5000/items')
      .then(response => {
        this.setState({items: response.data.items});
      }).catch(error => {
        this.setState({error: true})
      });
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
        // alert("Order Successful. Thank you for your purchase!");
      })
      .catch(error => {
        this.setState({loading: false, purchasing: false});
        // alert("Order Failed. Please try again!");
      });
  }

  render() {
    const disabledItems = {...this.state.items};
    for (let key in disabledItems) {
      disabledItems[key] = disabledItems[key] <= 0;
    }

    let orderSummary = null;

    let order = <Spinner />

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    if (this.state.error) {
      order = (
        <div>
          <h1>Sorry, it looks like something went wrong</h1>
          <h5>Please try again</h5>
        </div>
      );
    }

    if (this.state.items) {
      order = (
        <Aux>
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

      orderSummary = (
        <OrderSummary 
          items={this.state.items}
          price={this.state.totalPrice}
          purchaseCancelled={this.purchaseCancelHandler} 
          purchaseConfirmed={this.purchaseConfirmHandler}/>
      );
    }

    return(
      <Aux>
        <Modal show={this.state.purchasing} modalDismissed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {order}
      </Aux>
    );
  }
}

export default withErrorHandler(OrderBuilder, axios);