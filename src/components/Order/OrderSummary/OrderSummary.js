import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const itemsSummary = Object.keys(props.items)
      .map(key => {
        return (
          <li key={key}>
            <span style={{textTransform:'capitalize'}}>
              {key}
            </span>: {props.items[key]}
          </li>
        );
      });
  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <p>Thanks for your order! We hope you enjoy your items</p>
      <ul>
        {itemsSummary}
      </ul>
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button 
        clicked={props.purchaseCancelled}
        type="Danger">Cancel</Button>
      <Button 
        clicked={props.purchaseConfirmed}
        type="Success">Checkout</Button>
    </Aux>
  );
};

export default orderSummary;