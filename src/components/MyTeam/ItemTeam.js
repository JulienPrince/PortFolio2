import React from "react";
import "./ItemTeam.css";

const ItemTeam = ({ items }) => {
  return (
    <div className="superCard">
      <div className="imgBox">
        <img src={items.img} />
      </div>
      <div className="superDetails">
        <h2>{items.name}</h2>
        <p>{items.description}</p>
      </div>
    </div>
  );
};

export default ItemTeam;
