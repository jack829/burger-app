import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.css';

const START_ADDING = <p>Please start adding ingredients to see a preview of your burger</p>

const burger = (props) => {
  const allIngredients = Object.keys(props.ingredients).map((ingredient) => {
    // Create a new array whose length is the value of this object key
    return [...Array(props.ingredients[ingredient])].map((_, i) => {
      return <BurgerIngredient key={ingredient + i} type={ingredient} />
    });
  })
    .reduce((base, current) => {
      return base.concat(current);
    }, [])

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {allIngredients.length ? allIngredients : START_ADDING}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;
