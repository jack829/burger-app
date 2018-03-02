import React from 'react';
import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Lettuce', type: 'salad' },
]

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <h3>Total Price: {`$${props.totalPrice.toFixed(2)}`}</h3>
    {controls.map((ctrl) => {
      return (
        <BuildControl key={ctrl.label}
                      type={ctrl.type}
                      label={ctrl.label}
                      disabled={props.disabled[ctrl.type]}
                      remove={props.addRemove.bind(this, 'remove', ctrl.type)}
                      add={props.addRemove.bind(this, 'add', ctrl.type)}
                      />
      )
    })}
    <button className={styles.OrderButton} disabled={!props.canOrder}>Order Now</button>
  </div>
);

export default buildControls;
