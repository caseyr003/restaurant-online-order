import React from 'react';
import styles from './Receipt.module.css';

const receipt = (props) => {
  const items = [];

  for (let key in props.order.items) {
    items.push({name: key, amount: props.order.items[key]});
  }

  const itemOutput = items.map(item => {
    return <span className={styles.Item}>{item.name}: {item.amount}</span>
  });
  return (
    <div className={styles.Receipt}>
      Items: 
      {itemOutput}
      <p>Total Cost: ${props.order.cost.toFixed(2)}</p>
    </div>
  );
};

export default receipt;