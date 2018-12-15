import React from 'react';
import styles from './Order.module.css';
import OrderItem from './OrderItem/OrderItem';

const order = (props) => {
  const transformedItems = Object.keys(props.items)
    .map(itemKey => {
      return [...Array(props.items[itemKey])].map((_, i) => {
        return <OrderItem key={itemKey + i} type={itemKey} />;
      });
  });

  return (
    <div className={styles.Burger}>
      <OrderItem type="bread-top" />
      {transformedItems}
      <OrderItem type="bread-bottom" />
    </div>
  );
};

export default order;