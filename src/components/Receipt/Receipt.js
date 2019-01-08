import React from 'react';
import styles from './Receipt.module.css';

const receipt = () => (
  <div className={styles.Receipt}>
    <p>Items: Salad(1)</p>
    <p>Total Price: $5.60</p>
  </div>
);

export default receipt;