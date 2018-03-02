import React from 'react';
import Aux from '../../../hoc/Aux';
import { TYPE_MAP, PRICE_MAP } from '../../../constants';
import Price from '../../Common/Price/Price';
import Button from '../../../ui/Button/Button';

const orderSummary = (props) => {
  return (
    <Aux>
      <h1>Your Order</h1>
      <p>A burger with the following ingredients:</p>
      <ul>
        {Object.keys(props.ingredients).filter((type) => props.ingredients[type]).map((type) => {
          return (
            <li key={`modal${type}`}>
              {TYPE_MAP[type]} : {props.ingredients[type]} x ${PRICE_MAP[type]}
            </li>
          )
        })}
      </ul>
      <Price price={props.totalPrice} />
      <Button type="Danger" clicked={props.clickCancel}>cancel</Button>
      <Button type="Success" clicked={props.clickContinue}>Continue</Button>
    </Aux>
  );
};

export default orderSummary;
