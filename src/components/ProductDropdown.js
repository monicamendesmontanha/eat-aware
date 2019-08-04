import React from "react";
import "./ProductDropdown.css";

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
            {props.products.map(product => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
        <input className="findOut" type="submit" value="Find Out !" />
      </form>
    </>
  );
};

export default ProductDropdown;
