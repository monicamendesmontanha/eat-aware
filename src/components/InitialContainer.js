import React, { Component } from "react";
import worldFood from "../images/World-Food.png";
import "./InitialContainer.css";

class InitialContainer extends Component {
  render() {
    return (
      <>
        <div className="initialContent">
          <img className="initialImg" src={worldFood} alt={"worldFood"} />
          <p className="initialText">
            Your diet choices can make a big difference to your personal
            environmental footprint, from saving water to reducing pollution and
            the loss of forests.
          </p>
        </div>
      </>
    );
  }
}

export default InitialContainer;
