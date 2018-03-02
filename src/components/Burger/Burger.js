import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const START_ADDING = <p>Please start adding ingredients to see a preview of your burger</p>

function formatPrice(price) {
  const priceStr = `$ ${price}`;
  const priceArr = priceStr.split('.')
  if (priceArr.length > 1) {
    if (priceArr[1].length === 1) priceArr[1] += '0';
    return `${priceArr.join('.')}`;
  } else {
    return `${priceStr}.00`;
  }
}

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
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {allIngredients.length ? allIngredients : START_ADDING}
      <BurgerIngredient type="bread-bottom" />
      <h3>Total Price: {formatPrice(props.totalPrice)}</h3>
    </div>
  )
}

export default burger;
