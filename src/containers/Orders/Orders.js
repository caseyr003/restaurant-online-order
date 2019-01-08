import React, { Component } from 'react';
import styles from './Orders.module.css';
import Receipt from '../../components/Receipt/Receipt';

class Orders extends Component {
  render () {
    return (
      <div className={styles.Orders}>
        <Receipt />
        <Receipt />
      </div>
    );
  }
}

export default Orders;