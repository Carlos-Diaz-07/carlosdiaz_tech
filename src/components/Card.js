import React from "react";

const Card = (props) => {
  return (
    <div className={`card card-${props.side}`}>
      <div className="card-text-container">
        <h4 className="card-title">{props.title}</h4>
        <div className="card-title-line"></div>
        <p className="card-text">{props.text}</p>
      </div>

      <img src={props.image} alt="alt" className="card-img" />
    </div>
  );
};

export default Card;
