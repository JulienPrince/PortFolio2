import React from "react";

import "./Service.css";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
const Services = () => {
  return (
    <section className="services" id="service">
      <div className="services_max_width">
        <h2 className="title_service">Services</h2>
        <div className="serv_content">
          <div className="services_card">
            <div className="services_box">
              <div className="service_icon">
                <FaPaintBrush />
              </div>
              <div className="services_text">WEB DESIGN</div>
              <p>
                Create web mock-ups, design interfaces, think about a customized
                graphic identity, respect a charter graphic, to make you unique
                visual identities, which will make you represent you best.
              </p>
            </div>
          </div>
          <div className="services_card">
            <div className="services_box">
              <div className="service_icon">
                <FaCode />
              </div>
              <div className="services_text">FRONT-END DEVELOPMENT</div>
              <p>
                Integrate web mock-ups, reflect on the performance of a web
                page, provide clean code for a fine-tuned mock-up, and a site
                usable on a maximum of devices and browsers, this is our core
                business.
              </p>
            </div>
          </div>
          <div className="services_card">
            <div className="services_box">
              <div className="service_icon">
                <FaLaptopCode />
              </div>
              <div className="services_text">BACK-END DEVELOPMENT</div>
              <p>
                Creation of functional and technical reports. Application of a
                wide range of technical skills and experience across the
                spectrum of development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
