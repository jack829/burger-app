import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle toggle={props.toggle} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

export default toolbar;
