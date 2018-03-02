import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { PRICE_MAP, MAX_ING, MIN_ING, BASE_PRICE } from '../../constants';
import Modal from '../../ui/Modal/Modal';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: BASE_PRICE,
    canOrder: false,
    ordering: false
  }

  onClickAddRemove(addRemove, type) {
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
      canOrder: this.canOrder({ ...updatedIngredients })
    })
  }

  onClickPurchase() {
    this.setState({ ordering: true });
  }

  onCloseModal() {
    this.setState({ ordering: false });
  }

  canOrder(updatedIngredients) {
    // Object.values not supported in IE
    return Object.keys(updatedIngredients).reduce((sum, key) => sum + updatedIngredients[key], 0);
  }

  getDisabledInfo() {
    const ingCopy = { ...this.state.ingredients };
    const disabledInfo = {};
    Object.keys(ingCopy).forEach((key) => {
      disabledInfo[key] = {
        remove: ingCopy[key] <= MIN_ING,
        add: ingCopy[key] >= MAX_ING
      }
    })
    return disabledInfo;
  }

  render() {
    return (
      <Aux>
        <Modal show={this.state.ordering} closeModal={this.onCloseModal.bind(this)} >
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addRemove={this.onClickAddRemove.bind(this)}
          disabled={this.getDisabledInfo()}
          totalPrice={this.state.totalPrice}
          canOrder={this.state.canOrder}
          order={this.onClickPurchase.bind(this)} />
      </Aux>
    )
  }
}

export default BurgerBuilder;
