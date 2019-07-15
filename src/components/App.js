import React, { Component } from 'react';
import Head from './Head';
import InitialContainer from './InitialContainer';
import DropdownFood from './DropdownFood'


class App extends Component {
  render() {
    return (
      <>
      <Head />
      <InitialContainer />
      <DropdownFood />
      </>
    );
  }
}

export default App;
