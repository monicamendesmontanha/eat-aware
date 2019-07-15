import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const foodOptions = [
  {
    key: "Milk (almond)",
    text: "Milk (almond)",
    value: "Milk (almond)",
    type: "milk",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  },
  {
    key: "Milk (dairy)",
    text: "Milk (dairy)",
    value: "Milk (dairy)",
    type: "milk",
    image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
  },
  {
    key: "Milk (oat)",
    text: "Milk (oat)",
    value: "Milk (oat)",
    type: "milk",
    image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
  },
  {
    key: "Milk (rice)",
    text: "Milk (rice)",
    value: "Milk (rice)",
    type: "milk",
    image: { avatar: true, src: "/images/avatar/small/christian.jpg" }
  },
  {
    key: "Milk (soy)",
    text: "Milk (soy)",
    value: "Milk (soy)",
    type: "milk",
    image: { avatar: true, src: "/images/avatar/small/matt.jpg" }
  }
];

class DropdownFood extends Component {
  render() {
    return (
      <>
        <Dropdown
          placeholder="Select Food"
          fluid
          selection
          options={foodOptions}
        />
      </>
    );
  }
}

export default DropdownFood;
