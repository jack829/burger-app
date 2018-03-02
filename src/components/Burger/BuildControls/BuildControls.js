import React from 'react';
import styles from './BuildControls.css';
import Price from '../../Common/Price/Price';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Lettuce', type: 'salad' },
]

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <Price price={props.totalPrice} />
    {controls.map((ctrl) => {
      return (
        <BuildControl key={ctrl.label}
                      type={ctrl.type}
                      label={ctrl.label}
                      removeDisabled={props.disabled[ctrl.type].remove}
                      addDisabled={props.disabled[ctrl.type].add}
                      remove={props.addRemove.bind(this, 'remove', ctrl.type)}
                      add={props.addRemove.bind(this, 'add', ctrl.type)}
                      />
      )
    })}
    <button className={styles.OrderButton} disabled={!props.canOrder} onClick={props.order}>Order Now</button>
  </div>
);

export default buildControls;
