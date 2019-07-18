import React, { Component } from "react";
import './FoodInfo.css'
import almondMilk from '../images/product/almondMilk.png'

const product = {
  name: 'Almond Milk',
  img: '../images/product/almondMilk.png'
}

class FoodInfo extends Component {
  render() {
    return (
      <>
        <div className="productImgName">
          <img className="productImg" src={almondMilk} alt={"almondMilk"}/>
          <p className="productName">{product.name}</p>
        </div>
      </>
    );
  }
}

export default FoodInfo;