import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import './DropdownFood.css'

const foodOptions = [
  {
    key: "Milk (almond)",
    text: "Milk (almond)",
    value: "Milk (almond)",
    type: "milk",
    image: {  product: true, src: "../images/product/almondMilk.png" }
  },
  {
    key: "Milk (dairy)",
    text: "Milk (dairy)",
    value: "Milk (dairy)",
    type: "milk",
    image: { product: true, src: "../images/product/dairyMilk.png" }
  },
  {
    key: "Milk (oat)",
    text: "Milk (oat)",
    value: "Milk (oat)",
    type: "milk",
    image: { product: true, src: "../images/product/oatMilk.png" }
  },
  {
    key: "Milk (rice)",
    text: "Milk (rice)",
    value: "Milk (rice)",
    type: "milk",
    image: { product: true, src: "../images/product/riceMilk.png" }
  },
  {
    key: "Milk (soy)",
    text: "Milk (soy)",
    value: "Milk (soy)",
    type: "milk",
    image: { product: true, src: "../images/product/soyMilk.png" }
  }
];

class DropdownFood extends Component {
  render() {
    return (
      <>
        <p className="question">How do your food choices impact on the environment?</p>
        <Dropdown
          placeholder="Select Food"
          fluid
          selection
          options={foodOptions}
        />
        <div>
          <input className="findOut" type="submit" value="Find Out !" />
        </div>
      </>
    );
  }
}

export default DropdownFood;
