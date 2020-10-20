import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import ItemTeam2 from "./ItemTeam2";
import { Teamslists } from "./Teams";
import "./Team.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const RightArrow = () => {
  return (
    <div className="rightArrow">
      <FaAngleRight />
    </div>
  );
};

const LeftArrow = () => {
  return (
    <div className="leftArrow">
      <FaAngleLeft />
    </div>
  );
};

const Team = () => {
  return (
    <section className="teams" id="teams">
      <div className="teams_max-width">
        <h2 className="teams_title">Our teams</h2>
        <ScrollMenu
          className="scroll"
          data={Teamslists.map((team, i) => (
            <ItemTeam2 key={i} item={team} />
          ))}
          arrowLeft={<LeftArrow />}
          arrowRight={<RightArrow />}
          itemStyle={{ marginRight: 25, marginTop: 10, marginBottom: 10 }}
          innerWrapperStyle={{ display: "flex", alignItems: "center" }}
          wheel={false}
        />
      </div>
    </section>
  );
};

export default Team;
