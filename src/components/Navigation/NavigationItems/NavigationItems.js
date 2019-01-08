import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/">Order</NavigationItem>
    <NavigationItem link="/orders">Past Orders</NavigationItem>
  </ul>
);

export default navigationItems;