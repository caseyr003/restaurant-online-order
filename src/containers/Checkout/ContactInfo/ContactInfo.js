import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactInfo.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactInfo extends Component {
  state = {
    customer: {
      name: 'Casey',
      id: 1,
      address: {
        street: '1000 JS Way',
        zipCode: '86753',
        country: 'US'
      },
      email: 'casey@testemail.com'
    },
    deliveryMethod: 'pickup',
    loading: false
  }

  placedOrderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});

    const order = {
      cost: this.props.price,
      items: this.props.items,
      customer: this.state.customer,
      deliveryMethod: this.state.deliveryMethod
    }
    
    axios.post('/orders', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
        // alert("Order Successful. Thank you for your purchase!");
      })
      .catch(error => {
        this.setState({loading: false});
        // alert("Order Failed. Please try again!");
      });
  }

  render () {
    let form = (
      <form>
        <input type='text' name='name' placeholder='name' />
        <input type='email' name='email' placeholder='email' />
        <input type='text' name='street' placeholder='street' />
        <input type='text' name='zip' placeholder='zip code' />
        <input type='text' name='country' placeholder='country' />
        <Button type="Success" clicked={this.placedOrderHandler}>Place Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={styles.ContactInfo}>
        <h4>Please Enter Your Contact Details</h4>
        {form}
      </div>
    );
  }
}

export default ContactInfo;