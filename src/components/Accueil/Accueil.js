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
            Et Je suis un <span className="typing">Developeur Web</span>
          </div>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Hire me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
