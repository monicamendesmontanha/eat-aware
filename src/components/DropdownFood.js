import React, { Component } from "react";
import './DropdownFood.css'


class DropdownFood extends Component {
  render() {
    return (
      <>
      <form className="searchFoodForm">
        <label>
          <p className="question">How do your food choices impact on the environment?</p>
          <select className="dropdownFood">
            <option value="Milk (almond)">Milk (almond)</option>
            <option value="Milk (dairy)">Milk (dairy)</option>
            <option value="Milk (oat)">Milk (oat)</option>
            <option selected value="Milk (rice)">Milk (rice)</option>
            <option value="Milk (soy)">Milk (soy)</option>
          </select>
        </label>
          <input className="findOut" type="submit" value="Find Out !" />
        </form>
      </>
    );
  }
}

export default DropdownFood;
