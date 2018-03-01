import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  const allIngredients = Object.keys(props.ingredients).map((ingredient) => {
    // Old way
    // let i = props.ingredients[ingredient]
    // const ings = [];
    // while (i) {
    //   ings.push(<BurgerIngredient key={ingredient + 1} type={ingredient} />);
    //   i--;
    // }
    // return ings;
    // -----------------
    // New way
    // Create a new array whose length is the value of this object key
    return [...Array(props.ingredients[ingredient])].map((_, i) => {
      return <BurgerIngredient key={ingredient + 1} type={ingredient} />
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {allIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;
