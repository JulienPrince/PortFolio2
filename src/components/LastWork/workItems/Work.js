/* eslint-disable react/jsx-no-target-blank */
import { Typography } from "@material-ui/core";
import React from "react";
import "./items.css";
const WorkItem = ({ img, title, link }) => {
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <div className="box">
            <div className="content">
              <img src={img} alt="projet" className="img" />
              <Typography variant="h2">{title}</Typography>
              <div className="btn">
                {link !== "" ? (
                  <a href={link} target="_blank" rel="noopener">
                    Visiter
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
