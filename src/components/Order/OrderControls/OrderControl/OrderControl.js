import React from 'react';

import styles from './OrderControl.module.css';

const orderControl = (props) => (
  <div>
    <div className={styles.OrderControl}>{props.label}</div>
    <button className={styles.Less}>Less</button>
    <button className={styles.More}>More</button>
  </div>
);

export default orderControl;