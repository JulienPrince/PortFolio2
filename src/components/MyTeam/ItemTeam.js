import React from "react";

const ItemTeam = ({ items }) => {
  return (
    <div className="teams_card">
      <div className="teams_box">
        <img src={items.img} alt={items.name} />
        <div className="teams_text">{items.name}</div>
        <p>{items.description}</p>
      </div>
    </div>
  );
};

export default ItemTeam;
