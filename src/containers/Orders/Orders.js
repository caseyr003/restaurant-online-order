import React, { Component } from 'react';
import styles from './Orders.module.css';
import Receipt from '../../components/Receipt/Receipt';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
    error: false
  }
  componentDidMount () {
    axios.get('http://localhost:5000/orders')
      .then(response => {
        let fetchedOrders = [];
        for (let key in response.data.orders) {
          fetchedOrders.push(response.data.orders[key]);
        }
        this.setState({orders: fetchedOrders, loading: false});
      }).catch(error => {
        this.setState({error: true, loading: false});
      });
  }

  render () {
    return (
      <div className={styles.Orders}>
        {this.state.orders.map(order => (
          <Receipt 
            key={order.id} 
            order={order} />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);