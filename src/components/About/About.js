/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./About.css";
import img from "../assets/profil.jpg";

const About = () => {
  return (
    <section className="about" id="abouts">
      <div className="About_max_width">
        <h2 className="title">About me</h2>
        <div className="about_ontent">
          <div className="column left">
            <img src={img} alt="" />
          </div>
          <div className="column right">
            <div className="text">
              Herizo Julien Prince
              <span className="typing-2"> Développeur Web</span>
            </div>
            <p>
              <span>___</span>Bonjour,je suis un concepteur de sites Web
              indépendant. J'ai plus de 2 ans d'expérience dans l'industrie du
              développement.Je suis ingénieure diplômée en informatique. Je
              travaille actuellement en tant qu’intégratrice web, développeur
              web. Passionnée depuis toujours par les nouvelles technologies
              multimédia, je me suis également lancée en webdesign après une
              formation en autodidacte. Que vous soyez une entreprise, une
              agence web ou un particulier, je serai contente de répondre à vos
              besoins.
            </p>
            <a
              href="https://drive.google.com/file/d/1E2pJe4guxWeZSBhRRzjnlJNXXhYs0N95/view?usp=sharing"
              target="_blank"
              rel="noopener"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
