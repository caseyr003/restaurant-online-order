import React from 'react';
import logoImage from '../../assets/img/logo.png';
import styles from './Logo.module.css';

const logo = () => (
  <div className={styles.Logo}>
    <img src={logoImage} alt="logo" />
  </div>
);

export default logo;