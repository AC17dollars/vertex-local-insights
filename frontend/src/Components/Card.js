import React from "react";
import "./card.css";

function Card({ name, district, image }) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-title">
          <h2>{name}</h2>
          <h6>{district}</h6>
        </div>
      </div>
    </>
  );
}

export default Card;
