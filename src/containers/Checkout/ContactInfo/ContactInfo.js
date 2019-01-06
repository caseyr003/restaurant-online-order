import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactInfo.module.css';

class ContactInfo extends Component {
  state = {
    name: 'Casey',
    id: 1,
    address: {
      street: '1000 JS Way',
      zipCode: '86753',
      country: 'US'
    },
    email: 'casey@testemail.com'
  }

  placedOrderHandler = () => {
    alert('order success');
  }

  render () {
    return (
      <div className={styles.ContactInfo}>
        <h4>Please Enter Your Contact Details</h4>
        <form>
          <input type='text' name='name' placeholder='name' />
          <input type='email' name='email' placeholder='email' />
          <input type='text' name='street' placeholder='street' />
          <input type='text' name='zip' placeholder='zip code' />
          <input type='text' name='country' placeholder='country' />
          <Button type="Success" clicked={this.placedOrderHandler}>Place Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactInfo;