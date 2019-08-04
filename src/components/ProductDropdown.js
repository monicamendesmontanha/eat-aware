import React from "react";
import "./ProductDropdown.css";

const ProductDropdown = (props) => {
  return (
    <>
      <form className="searchFoodForm" onSubmit={props.handleSubmit}>
        <label>
          <p className="question">
            How do your food choices impact on the environment?
          </p>
          <select
            className="productDropdown"
            value={props.selectedFood}
            onChange={props.handleChange}
          >
          <option value="">Please select a food</option>
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
};

export default ProductDropdown;
