import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './OrderItem.module.css';

class OrderItem extends Component {
  render() {
    let item = null;

    switch(this.props.type) {
      case('bread-bottom'):
        item=<div className={styles.BreadBottom}></div>;
        break;
      case('bread-top'):
        item=(
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        );
        break;
      case('meat'):
        item=<div className={styles.Meat}></div>;
        break;
      case('cheese'):
        item=<div className={styles.Cheese}></div>;
        break;
      case('lettuce'):
        item=<div className={styles.Lettuce}></div>;
        break;
      case('bacon'):
        item=<div className={styles.Bacon}></div>;
        break;
      default:
          item=null;
    };

    return item;
  }
};

OrderItem.propTypes = {
  type: PropTypes.string.isRequired
};

export default OrderItem;