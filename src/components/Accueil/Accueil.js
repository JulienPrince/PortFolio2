import React from "react";
import { Link } from "react-scroll";
import "./Accueil.css";

const HomeSection = () => {
  return (
    <section className="home" id="acceuil">
      <div className="max_width_home">
        <div className="home-content">
          <div className="text-1">Hello, My Name is</div>
          <div className="text-2">Julien Prince</div>
          <div className="text-3">
            <span className="typing">Web-Mobile-Wordpress </span> Development
            <p>Welcome</p>
          </div>
          <Link
            to="works"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Check Our Showcases
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
