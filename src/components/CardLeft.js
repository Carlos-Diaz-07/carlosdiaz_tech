import React from "react";
import "../css/components/card-left.css";
import img from "../img/app-img.jpg"

const CardLeft = () => {
  return (
    <div className="card-left card">
      <div className="card-text-container">
        <h4 className="card-title-left">Spotify</h4>
        <div className="card-title-line"></div>
        <p className="card-text">
          asdasdasdasd asd asd asddsa a asd a add weda adsf af ad cxva seaf ahgr
          cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs asddsa a asd
          a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth
          yhjsfga agh drga\g rg gf gs
        </p>
      </div>
      
        <img src={img} alt="alt" className="card-img-left" />
      
    </div>
  );
};

export default CardLeft;
