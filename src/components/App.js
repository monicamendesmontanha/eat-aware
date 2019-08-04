import React, { Component } from "react";
import Head from "./Head";
import InitialContainer from "./InitialContainer";
import FoodDropdown from "./FoodDropdown";
import ProductInfo from "./ProductInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedFood: '',
      isFoodSelected: false
    };

    this.handleFoodChange = this.handleFoodChange.bind(this);
    this.handleFoodSubmit = this.handleFoodSubmit.bind(this);
  }

  handleFoodChange(event) {
    this.setState({ selectedFood: event.target.value });
  }

  handleFoodSubmit(event) {
    event.preventDefault();
    this.setState({ isFoodSelected: true });
  }

  render() {
    return (
      <>
        <Head />

        {this.state.isFoodSelected ? (
          <ProductInfo  food={this.state.selectedFood}/>
        ) : (
          <>
            <InitialContainer />
            <FoodDropdown
              handleChange={this.handleFoodChange}
              handleSubmit={this.handleFoodSubmit}
              selectedFood={this.state.selectedFood}
            />
          </>
        )}
      </>
    );
  }
}

export default App;
