import React, { Component } from "react";
import Head from "./Head";
import InitialContainer from "./InitialContainer";
import ProductDropdown from "./ProductDropdown";
import ProductInfo from "./ProductInfo";

const products = [
  {
    name: "Please select a food"
  },
  {
    name: "Milk (almond)",
    img: "../images/product/almondMilk.png",
    greenhouseEmissions: "51 kg",
    petrolCar: "210 km",
    heating: "8 days",
    water: "27,042 litres",
    showers: "416 showers"
  },
  {
    name: "Milk (dairy)",
    img: "../images/product/dairyMilk.png",
    greenhouseEmissions: "229 kg",
    petrolCar: "941 km",
    heating: "36 days",
    water: "45,733 litres",
    showers: "703 showers"
  },
  {
    name: "Milk (oat)",
    img: "../images/product/oatMilk.png",
    greenhouseEmissions: "65 kg",
    petrolCar: "270 km",
    heating: "10 days",
    water: "3,512 litres",
    showers: "54 showers"
  },
  {
    name: "Milk (rice)",
    img: "../images/product/riceMilk.png",
    greenhouseEmissions: "86 kg",
    petrolCar: "353 km",
    heating: "13 days",
    water: "19,642 litres",
    showers: "302 showers"
  },
  {
    name: "Milk (soy)",
    img: "../images/product/soyMilk.png",
    greenhouseEmissions: "71 kg",
    petrolCar: "293 km",
    heating: "11 days",
    water: "9,500 litres",
    showers: "146 showers"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedProduct: undefined,
      isProductSelected: false
    };

    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleProductSubmit = this.handleProductSubmit.bind(this);
    this.handleBackToChooseAnotherProduct = this.handleBackToChooseAnotherProduct.bind(this);
  }

  handleProductChange(event) {
    const productName = event.target.value;
    const selectedProduct = products.find(product => product.name === productName);

    this.setState({ selectedProduct: selectedProduct });
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
