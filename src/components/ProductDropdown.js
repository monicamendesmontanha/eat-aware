import React from "react";
import "./ProductDropdown.css";

const products = [
  {
    name: "Please select a food"
  },
  {
    name: "Milk (almond)",
    img: "../images/product/almondMilk.png",
    greenhouseEmissions: "51 kg",
    petrolCar: "210 km",
    heating: "8 days",
    water: "27,042 litres",
    showers: "416 showers"
  },
  {
    name: "Milk (dairy)",
    img: "../images/product/dairyMilk.png",
    greenhouseEmissions: "229 kg",
    petrolCar: "941 km",
    heating: "36 days",
    water: "45,733 litres",
    showers: "703 showers"
  },
  {
    name: "Milk (oat)",
    img: "../images/product/oatMilk.png",
    greenhouseEmissions: "65 kg",
    petrolCar: "270 km",
    heating: "10 days",
    water: "3,512 litres",
    showers: "54 showers"
  },
  {
    name: "Milk (rice)",
    img: "../images/product/riceMilk.png",
    greenhouseEmissions: "86 kg",
    petrolCar: "353 km",
    heating: "13 days",
    water: "19,642 litres",
    showers: "302 showers"
  },
  {
    name: "Milk (soy)",
    img: "../images/product/soyMilk.png",
    greenhouseEmissions: "71 kg",
    petrolCar: "293 km",
    heating: "11 days",
    water: "9,500 litres",
    showers: "146 showers"
  }
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
              products.map((product) => <option value={product.name}>{product.name}</option>)
            }
          </select>
        </label>
        <input className="findOut" type="submit" value="Find Out !" />
      </form>
    </>
  );
};

export default ProductDropdown;
