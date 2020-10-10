import React from "react";

import "./Service.css";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
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
                Créer des maquettes web, concevoir des interfaces, réfléchir à
                une identité graphique sur mesure, respecter une charte
                graphique, pour vous faire des identités visuelles uniques, qui
                vous représentent le mieux.
              </p>
            </div>
          </div>
          <div className="services_card">
            <div className="services_box">
              <div className="service_icon">
                <FaCode />
              </div>
              <div className="services_text">DÉVELOPPEMENT FRONT-END</div>
              <p>
                Intégrer des maquettes web, réfléchir sur la performance d’une
                page web, fournir du code propre pour une maquette peaufinée et
                un site utilisable sur un maximum d’appareils et navigateurs,
                c’est mon coeur de métier.
              </p>
            </div>
          </div>
          <div className="services_card">
            <div className="services_box">
              <div className="service_icon">
                <FaLaptopCode />
              </div>
              <div className="services_text">DÉVELOPPEMENT BACK-END </div>
              <p>
                Création de rapports fonctionnels et techniques. Appliquation
                d'un large éventail de compétences techniques et d'expérience
                dans tout le spectre du développement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
