import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      {/* {props.ingredients.map((ingredient) => <BurgerIngredient type={ingredient.type} /> )} */}
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;
