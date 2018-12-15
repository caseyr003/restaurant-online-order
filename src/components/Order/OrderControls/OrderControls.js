import React from 'react';
import styles from './OrderControls.module.css'
import OrderControl from './OrderControl/OrderControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
]

const orderControls = (props) => (
  <div className={styles.OrderControls}>
    {controls.map(ctrl => (
      <OrderControl 
        key={ctrl.type} 
        label={ctrl.label}
        added={() => props.itemAdded(ctrl.type)}
        removed={() => props.itemRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
  </div>
);

export default orderControls;