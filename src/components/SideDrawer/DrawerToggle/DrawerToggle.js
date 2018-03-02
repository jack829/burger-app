import React from 'react';
import styles from './DrawerToggle.css';

const drawerToggle = (props) => {
  return (
    <div
      className={styles.DrawerToggle}
      onClick={props.toggle}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
