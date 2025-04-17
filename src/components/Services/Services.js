import React, { useEffect, useRef } from "react";

import "./Service.css";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
const Services = () => {
  const sectionRef = useRef(null);
  const serviceCardsRef = useRef([]);
  
  useEffect(() => {
    // Initialiser les références aux cartes de services
    serviceCardsRef.current = document.querySelectorAll('.services_card');
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Activer l'animation pour toutes les cartes de services
          serviceCardsRef.current.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate");
            }, index * 200); // Ajouter un délai progressif
          });
        } else {
          // Réinitialiser les animations lorsque la section sort de la vue
          serviceCardsRef.current.forEach((card) => {
            card.classList.remove("animate");
          });
        }
      },
      { threshold: 0.2 }
    );

    const sectionElement = sectionRef.current;
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);
  
  return (
    <section className="services" id="service" ref={sectionRef}>
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
                Création de maquettes web, conception d'interfaces, réflexion sur une identité
                graphique personnalisée, respect d'une charte graphique, pour vous faire des
                identités visuelles uniques, qui vous représenteront au mieux.
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
                Intégrer des maquettes web, réfléchir à la performance d'une page
                web, fournir un code propre pour une maquette affinée, et un site
                utilisable sur un maximum d'appareils et de navigateurs, c'est notre
                cœur de métier.
              </p>
            </div>
          </div>
          <div className="services_card">
            <div className="services_box">
              <div className="service_icon">
                <FaLaptopCode />
              </div>
              <div className="services_text">DÉVELOPPEMENT BACK-END</div>
              <p>
                Création de rapports fonctionnels et techniques. Application d'une
                large gamme de compétences techniques et d'expérience dans tout le
                spectre du développement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
