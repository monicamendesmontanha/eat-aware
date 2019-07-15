import React, { Component } from "react";
import food from '../images/food.png' // relative path to image
import DropdownFood from './DropdownFood'


class FindOutFood extends Component {
  render() {
    return (
      <>
        <div>
          <img src={food} alt={"food"}/>
          <p>
            Your diet choices can make a big difference to your personal
            environmental footprint, from saving water to reducing pollution and
            the loss of forests.
          </p>
        </div>
        <div>
          <p>How do your food choices impact on the environment?</p>
          <DropdownFood />
          <button>Find Out!</button>
        </div>
      </>
    );
  }
}

export default FindOutFood;
