import React from "react";
import "./Service.css";
import { FaChartLine, FaCode, FaPaintBrush } from "react-icons/fa";
const Services = () => {
  return (
    <section className="services" id="service">
      <div className="services_max_width">
        <h2 className="title_service">My services</h2>
        <div className="serv_content">
          <div className="services_card">
            <div className="services_box">
              <div className="service_icon">
                <FaPaintBrush />
              </div>
              <div className="services_text">Web Design</div>
              <p>
                Alias, non suscipit voluptatum perspiciatis deleniti repellendus
                molestiae sed, nulla nostrum dolorem impedit nemo libero porro
                consectetur assumenda,
              </p>
            </div>
          </div>
          <div className="services_card">
            <div className="services_box">
              <div className="service_icon">
                <FaChartLine />
              </div>
              <div className="services_text">Web Design</div>
              <p>
                Alias, non suscipit voluptatum perspiciatis deleniti repellendus
                molestiae sed, nulla nostrum dolorem impedit nemo libero porro
                consectetur assumenda,
              </p>
            </div>
          </div>
          <div className="services_card">
            <div className="services_box">
              <div className="service_icon">
                <FaCode />
              </div>
              <div className="services_text">Web Design</div>
              <p>
                Alias, non suscipit voluptatum perspiciatis deleniti repellendus
                molestiae sed, nulla nostrum dolorem impedit nemo libero porro
                consectetur assumenda,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
