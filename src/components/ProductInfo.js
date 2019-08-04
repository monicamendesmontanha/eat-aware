import React from "react";
import "./ProductInfo.css";
import { faCarSide, faWater, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductInfo = props => {
  return (
    <>
      <div className="productImgName">
        <img
          className="productImg"
          src={props.product.img}
          alt={props.product.img}
        />
        <p className="productName">{props.product.name}</p>
      </div>

      <div className="impactDescriptionProduct">
        <div className="item">
          <p className="descriptionItem">
            This product contributes{" "}
            <span className="data">{props.product.greenhouseEmissions}</span> to
            annual greenhouse gas emissions.{" "}
          </p>
          <div className="itemIcon">
            <FontAwesomeIcon icon={faTree} className="tree" />
          </div>
        </div>

        <div className="item">
          <p className="descriptionItem">
            That's the equivalent of driving a regular petrol car{" "}
            <span className="data">{props.product.petrolCar}</span>.
          </p>
          <div className="itemIcon">
            <FontAwesomeIcon icon={faCarSide} className="car" />
          </div>
        </div>

        <div className="item">
          <p className="descriptionItem">
            To produce it requires{" "}
            <span className="data">{props.product.water}</span> of water, equal
            to <span className="data">{props.product.showers}</span> lasting
            eight minutes.
          </p>
          <div className="itemIcon">
            <FontAwesomeIcon icon={faWater} className="water" />
          </div>
        </div>

        <div>
          <button className="backButton" onClick={props.handleBack}>
            Choose another item
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
