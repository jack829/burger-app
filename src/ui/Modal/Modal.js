import React from 'react';
import styles from './Modal.css';
import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div
        className={styles.Modal}
        // Animate the modal into view when show property is "true"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
          {props.children}
      </div>
    </Aux>
  );
};

export default modal;