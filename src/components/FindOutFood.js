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
          <form>
            <p className="question">How do your food choices impact on the environment?</p>
            <DropdownFood />
            <div>
            <input className="findOut" type="submit" value="Find Out !" />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default FindOutFood;
