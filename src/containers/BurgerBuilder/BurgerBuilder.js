import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const PRICE_MAP = {
  salad: 0,
  meat: 1.5,
  cheese: 0.75,
  bacon: 1
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 4,
    canOrder: false
  }

  handleAddRemove(addRemove, type) {
    let updatedPrice = this.state.totalPrice;
    let updatedCount = this.state.ingredients[type];

    switch (addRemove) {
      case 'add':
        updatedCount += 1;
        updatedPrice += PRICE_MAP[type];
        break;
      case 'remove':
        updatedCount -= 1;
        updatedPrice -= PRICE_MAP[type];
        break;
      default:
        updatedCount += 0;
        updatedPrice += 0;
    }

    const updatedIngredients = { ...this.state.ingredients, [type]: updatedCount };

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
      canOrder: this.canOrder({...updatedIngredients})
    })
  }

  canOrder(updatedIngredients) {
    // Object.values not supported in IE
    return Object.keys(updatedIngredients).reduce((sum, key) => sum + updatedIngredients[key], 0);
  }

  getDisabledInfo() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return disabledInfo;
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addRemove={this.handleAddRemove.bind(this)}
          disabled={this.getDisabledInfo()}
          totalPrice={this.state.totalPrice}
          canOrder={this.state.canOrder} />
      </Aux>
    )
  }
}

export default BurgerBuilder;
