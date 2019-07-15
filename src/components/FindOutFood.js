import React, { Component } from "react";
import food from '../images/food.png' // relative path to image
import DropdownFood from './DropdownFood'
import './FindOutFood.css'

class FindOutFood extends Component {
  render() {
    return (
      <>
        <div className="initialContent">
          <img className="initialImg" src={food} alt={"food"}/>
          <p className="initialText">
            Your diet choices can make a big difference to your personal
            environmental footprint, from saving water to reducing pollution and
            the loss of forests.
          </p>
          <p className="question">How do your food choices impact on the environment?</p>
          <DropdownFood />
          <button className="findOutButton">Find Out!</button>
        </div>
      </>
    );
  }
}

export default FindOutFood;
