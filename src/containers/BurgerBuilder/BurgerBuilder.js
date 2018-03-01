import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <h1>Burger Controls</h1>
      </Aux>
    )
  }
}

export default BurgerBuilder;
