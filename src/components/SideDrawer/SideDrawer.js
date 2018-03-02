import React from 'react';
import Logo from '../Logo/Logo';
import NavItems from '../Navigation/NavItems/NavItems';
import Backdrop from '../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux';
import styles from './SideDrawer.css';

const sideDrawer = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.toggle} />
      <div className={[styles.SideDrawer, props.show ? styles.Open : styles.Close].join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <NavItems />
      </div>
    </Aux>
  );
};

export default sideDrawer;
