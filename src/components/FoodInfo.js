import React, { Component } from "react";
import './FoodInfo.css'
import almondMilk from '../images/product/almondMilk.png'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarSide, faWater, faTree, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const product = {
  name: 'Almond Milk',
  img: '../images/product/almondMilk.png',
  greenhouseEmissions: '51 kg',
  petrolCar: '210 km',
  heating: '8 days',
  water: '27,042 litres',
  showers: '416 showers'
}

const productName = product.name;
const greenhouseGas = product.greenhouseEmissions;
const petrolCar = product.petrolCar;
const water = product.water;

class FoodInfo extends Component {
  render() {
    return (
      <>
        <div className="productImgName">
          <img className="productImg" src={almondMilk} alt={"almondMilk"}/>
          <p className="productName">{productName}</p>
        </div>

        <div className="impactDescriptionProduct">

        <div className="item">
          <p className="descriptionItem">This product contributes <span className="data">{greenhouseGas}</span> to annual greenhouse gas emissions. </p>
          <div className="itemIcon">
            <FontAwesomeIcon icon={faTree} className="tree"/>
          </div>
        </div>


        <div className="item">
          <p className="descriptionItem">That's the equivalent of: driving a regular petrol car <span className="data">{petrolCar}</span></p>
          <div className="itemIcon">
            <FontAwesomeIcon icon={faCarSide} className="car" />
          </div>
        </div>

        <div className="item">
          <p className="descriptionItem">The consumption also uses <span className="data">{water}</span> of water, equal to <span className="data">{product.showers}</span> lasting eight minutes.</p>
          <div className="itemIcon">
            <FontAwesomeIcon icon={faWater} className="water"/>
          </div>
        </div>

        <div>
        <button className="backButton">Choose another item</button>
        </div>

        </div>
      </>
    );
  }
}

export default FoodInfo;