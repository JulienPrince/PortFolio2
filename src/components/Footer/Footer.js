import React from "react";
import { Link } from "react-scroll";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <span>
          Créé par
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Julien Prince
          </Link>
          | Copyright © 2020 Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
