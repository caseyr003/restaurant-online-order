import React from 'react';
import styles from './Order.module.css';
import OrderItem from './OrderItem/OrderItem';

const order = (props) => {
  return (
    <div className={styles.Burger}>
      <OrderItem type="bread-top" />
      <OrderItem type="cheese" />
      <OrderItem type="meat" />
      <OrderItem type="bread-bottom" />
    </div>
  );
};

export default order;