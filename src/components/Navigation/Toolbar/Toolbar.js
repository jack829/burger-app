import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = () => {
  return (
    <header className={styles.Toolbar}>
      <div>Menu</div>
      <Logo />
      <NavItems />
    </header>
  );
};

export default toolbar;
