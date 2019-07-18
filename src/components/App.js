import React, { Component } from 'react';
import Head from './Head';
import InitialContainer from './InitialContainer';
import DropdownFood from './DropdownFood'
import FoodInfo from './FoodInfo';


class App extends Component {
  constructor() {
  super();
  this.state = {
    isSelectedFood: false,
  };

  }

  render() {
    return (
      <>
      <Head />

      {this.state.isSelectedFood ? (
        <>
          <InitialContainer />
          <DropdownFood />
        </>
      ) : (
        <FoodInfo />
      )}
      </>
    );
  }
}

export default App;
