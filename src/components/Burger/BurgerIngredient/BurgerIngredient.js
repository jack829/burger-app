import React from 'react';
import Aux from '../../../hoc/Aux';
import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Cheese,
  Salad,
  Bacon } from './BurgerIngredient.css';

const ingredientMap = {
  'bread-bottom': BreadBottom,
  'bread-top': BreadTop,
  'meat': Meat,
  'cheese': Cheese,
  'salad': Salad,
  'bacon': Bacon
}

const burgerIngredient = (props) => {
  console.log('props ', props)
  return (
    <Aux>
      {
        props.type === 'bread-top' ?
          <div className={ingredientMap[props.type]}>
            <div className={Seeds1}></div>
            <div className={Seeds2}></div>
          </div>
        :
          <div className={ingredientMap[props.type]}></div>
      }
    </Aux>
  )
}

export default burgerIngredient;
