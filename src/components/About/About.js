/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./About.css";
import img from "../assets/profil.jpg";

const About = () => {
  return (
    <section className="about" id="abouts">
      <div className="About_max_width">
        <h2 className="title">About Us</h2>
        <div className="about_ontent">
          <div className="column left">
            <img src={img} alt="" />
          </div>
          <div className="column right">
            <div className="text">
              <span className="typing-2"> Web - Mobile - Wordpress</span>{" "}
              Development
            </div>
            <p>
              Hello, I am a web designer independent. I have more than 2 years
              of experience in the industry of the development. I am a graduate
              engineer in computer science. I is currently working as a web
              integrator, developer web. Always passionate about new
              technologies, I also started in webdesign after a self-taught
              training. Whether you are a company, a web agency or an
              individual, I will be happy to answer your questions. needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
