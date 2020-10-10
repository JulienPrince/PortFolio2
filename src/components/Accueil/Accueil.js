import React from "react";
import { Link } from "react-scroll";
import "./Accueil.css";

const HomeSection = () => {
  return (
    <section className="home" id="acceuil">
      <div className="max_width_home">
        <div className="home-content">
          <div className="text-1">Hello, moi c'est</div>
          <div className="text-2">Prince Julien</div>
          <div className="text-3">
            Je suis intégrateur <span className="typing"> Web</span>,
            développeur <span className="typing"> Back-end</span>, et
            webdesigner<span className="typing"> freelance.</span>
            <p> Bienvenue sur mon portfolio !</p>
          </div>
          <Link
            to="works"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Voir mes réalisations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
