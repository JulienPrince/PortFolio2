/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useRef } from "react";
import "./About.css";
import img from "../assets/profil.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionElement = sectionRef.current;
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    if (imageElement) {
      observer.observe(imageElement);
    }
    
    if (textElement) {
      observer.observe(textElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      if (imageElement) {
        observer.unobserve(imageElement);
      }
      if (textElement) {
        observer.unobserve(textElement);
      }
    };
  }, []);

  return (
    <section className="about" id="abouts" ref={sectionRef}>
      <div className="About_max_width">
        <h2 className="title">À Propos</h2>
        <div className="about_ontent">
          <div className="column left">
            <img src={img} alt="Julien Prince" ref={imageRef} className="about-image" />
          </div>
          <div className="column right">
            <div className="text">
              <span className="typing-2">Web - Mobile - Wordpress</span>{" "}
              Développement
            </div>
            <p ref={textRef} className="about-text">
              Bonjour, je suis un webdesigner indépendant. J'ai plus de 2 ans
              d'expérience dans l'industrie du développement. Je suis ingénieur
              diplômé en informatique. Je travaille actuellement comme
              intégrateur web et développeur web. Toujours passionné par les
              nouvelles technologies, je me suis également lancé dans le
              webdesign après une formation autodidacte. Que vous soyez une
              entreprise, une agence web ou un particulier, je serai heureux
              de répondre à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
