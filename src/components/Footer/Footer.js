import React from "react";
import { Link } from "react-scroll";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <span>
          Created By
          <Link
            to="acceuil"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Prince Dev
          </Link>
          | Copyright © 2020 All rights reserved .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
