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

const BREAD_TOP = 'bread-top';

const ingredientMap = {
  'bread-bottom': BreadBottom,
  'bread-top': BreadTop,
  'meat': Meat,
  'cheese': Cheese,
  'salad': Salad,
  'bacon': Bacon
}

const burgerIngredient = (props) => {
  return (
    <Aux>
      <div className={ingredientMap[props.type]}>
        {
          props.type === BREAD_TOP ?
            <Aux>
              <div className={Seeds1}></div>
              <div className={Seeds2}></div>
            </Aux>
          : null
      }
      </div>

    </Aux>
  )
}

export default burgerIngredient;
