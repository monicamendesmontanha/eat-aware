import React, { Component } from "react";
import Head from "./Head";
import InitialContainer from "./InitialContainer";
import ProductDropdown from "./ProductDropdown";
import ProductInfo from "./ProductInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedFood: "",
      isFoodSelected: false
    };

    this.handleFoodChange = this.handleFoodChange.bind(this);
    this.handleFoodSubmit = this.handleFoodSubmit.bind(this);
    this.handleBackToChooseAnotherProduct = this.handleBackToChooseAnotherProduct.bind(this);
  }

  handleFoodChange(event) {
    this.setState({ selectedFood: event.target.value });
  }

  handleFoodSubmit(event) {
    event.preventDefault();
    this.setState({ isFoodSelected: true });
  }

  handleBackToChooseAnotherProduct() {
    this.setState({ isFoodSelected: false,  selectedFood: "" });
  }

  render() {
    return (
      <>
        <Head />

        {this.state.isFoodSelected ? (
          <ProductInfo
            food={this.state.selectedFood}
            handleBack={this.handleBackToChooseAnotherProduct}
          />
        ) : (
          <>
            <InitialContainer />
            <ProductDropdown
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
