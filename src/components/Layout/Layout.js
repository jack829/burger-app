import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    drawerOpen: false
  }

  onToggleSideDrawer() {
    this.setState((prevState) => {
      return { drawerOpen: !prevState.drawerOpen }
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.onToggleSideDrawer.bind(this)} />
        <SideDrawer
          show={this.state.drawerOpen}
          toggle={this.onToggleSideDrawer.bind(this)} />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
