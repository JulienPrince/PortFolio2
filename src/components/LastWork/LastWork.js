import { Typography } from "@material-ui/core";
import React from "react";
import "./worsk.css";
import { projects } from "./data";
import WorkItem from "./workItems/Work";

const Lastwork = () => {
  return (
    <>
      <div className="work_main" id="works">
        <div className="titre">
          <div className="titre_line"></div>
          <Typography noWrap variant="h2">
            Dernier Projet
          </Typography>
        </div>
        <div className="container">
          {projects.map((project, index) => (
            <WorkItem key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Lastwork;
