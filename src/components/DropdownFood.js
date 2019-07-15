import React, { Component } from "react";
import "./DropdownFood.css";

class DropdownFood extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Food: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form className="searchFoodForm" onSubmit={this.handleSubmit}>
          <label>
            <p className="question">
              How do your food choices impact on the environment?
            </p>
            <select
              className="dropdownFood"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="Milk (almond)">Milk (almond)</option>
              <option value="Milk (dairy)">Milk (dairy)</option>
              <option value="Milk (oat)">Milk (oat)</option>
              <option value="Milk (rice)">Milk (rice)</option>
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
