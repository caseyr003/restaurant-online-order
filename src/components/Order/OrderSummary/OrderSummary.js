import React from 'react';
import Aux from '../../../hoc/Aux';

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
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;