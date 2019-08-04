import React from "react";
import "./ProductDropdown.css";

const products = [
  "Please select a food",
  "Milk (almond)",
  "Milk (dairy)",
  "Milk (oat)",
  "Milk (rice)",
  "Milk (soy)"
];

const ProductDropdown = props => {
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
            {
              products.map((product) => <option value={product}>{product}</option>)
            }
          </select>
        </label>
        <input className="findOut" type="submit" value="Find Out !" />
      </form>
    </>
  );
};

export default ProductDropdown;
