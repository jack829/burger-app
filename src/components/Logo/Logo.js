import React from 'react';
// Importing the logo this way tells webpack how to correctly build it and connect it
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.css';

const logo = () => (
    <div className={styles.BurgerLogo}>
      <img src={burgerLogo} alt='Burger' />
    </div>
);

export default logo;
