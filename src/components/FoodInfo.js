import React, { Component } from "react";
import './FoodInfo.css'
import almondMilk from '../images/product/almondMilk.png'

const product = {
  name: 'Almond Milk',
  img: '../images/product/almondMilk.png',
  greenhouseEmissions: '51 kg',
  petrolCar: '210 km',
  heating: '8 days',
  water: '27,042 litres',
  showers: '416 showers'
}

class FoodInfo extends Component {
  render() {
    return (
      <>
        <div className="productImgName">
          <img className="productImg" src={almondMilk} alt={"almondMilk"}/>
          <p className="productName">{product.name}</p>
        </div>

        <div className="impactDescriptionProduct">
        <p>Contributing {product.greenhouseEmissions} to annual greenhouse gas emissions. </p>

        <p>That's the equivalent of: </p>
        <p>driving a regular petrol car {product.petrolCar}</p>
        <p>OR</p>
        <p>the same as heating the average UK home for {product.heating}.</p>

        <p>The consumption of almond milk also uses {product.water} of water, equal to {product.showers} lasting eight minutes.</p>
        </div>
      </>
    );
  }
}

export default FoodInfo;