import React, { Component } from "react";
import Head from "./Head";
import InitialContainer from "./InitialContainer";
import ProductDropdown from "./ProductDropdown";
import ProductInfo from "./ProductInfo";
import products from "./products";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedProduct: undefined,
      isProductSelected: false
    };

    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleProductSubmit = this.handleProductSubmit.bind(this);
    this.handleBackToChooseAnotherProduct = this.handleBackToChooseAnotherProduct.bind(
      this
    );
  }

  handleProductChange(event) {
    const productName = event.target.value;
    const selectedProduct = products.find(
      product => product.name === productName
    );

    this.setState({ selectedProduct: selectedProduct });
  }

  handleProductSubmit(event) {
    event.preventDefault();
    if (this.state.selectedProduct) {
      this.setState({ isProductSelected: true });
    }
  }

  handleBackToChooseAnotherProduct() {
    this.setState({ isProductSelected: false, selectedProduct: "" });
  }

  render() {
    return (
      <>
        <Head />

        {this.state.isProductSelected ? (
          <ProductInfo
            product={this.state.selectedProduct}
            handleBack={this.handleBackToChooseAnotherProduct}
          />
        ) : (
          <>
            <InitialContainer />
            <ProductDropdown
              handleChange={this.handleProductChange}
              handleSubmit={this.handleProductSubmit}
              selectedProduct={this.state.selectedProduct}
              products={products}
            />
          </>
        )}
      </>
    );
  }
}

export default App;
