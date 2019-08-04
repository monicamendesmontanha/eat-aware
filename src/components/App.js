import React, { Component } from "react";
import Head from "./Head";
import InitialContainer from "./InitialContainer";
import ProductDropdown from "./ProductDropdown";
import ProductInfo from "./ProductInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedProduct: "",
      isProductSelected: false
    };

    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleProductSubmit = this.handleProductSubmit.bind(this);
    this.handleBackToChooseAnotherProduct = this.handleBackToChooseAnotherProduct.bind(this);
  }

  handleProductChange(event) {
    this.setState({ selectedProduct: event.target.value });
  }

  handleProductSubmit(event) {
    event.preventDefault();
    this.setState({ isProductSelected: true });
  }

  handleBackToChooseAnotherProduct() {
    this.setState({ isProductSelected: false,  selectedProduct: "" });
  }

  render() {
    return (
      <>
        <Head />

        {this.state.isProductSelected ? (
          <ProductInfo
            food={this.state.selectedProduct}
            handleBack={this.handleBackToChooseAnotherProduct}
          />
        ) : (
          <>
            <InitialContainer />
            <ProductDropdown
              handleChange={this.handleProductChange}
              handleSubmit={this.handleProductSubmit}
              selectedProduct={this.state.selectedProduct}
            />
          </>
        )}
      </>
    );
  }
}

export default App;
