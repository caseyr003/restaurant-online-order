import React from 'react';
import Order from '../../Order/Order';
import styles from './CheckoutSummary.module.css';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {

  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope you enjoy your order!</h1>
      <div className={styles.Order}>
        <Order items={props.items} />
      </div>
      <div>
        <Button type="Danger" clicked={props.cancelled}>Cancel</Button>
        <Button type="Success" clicked={props.continue}>Continue</Button>
      </div>
    </div>
  );

};

export default checkoutSummary;