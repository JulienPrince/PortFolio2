import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  Span,
  MobilIcon,
} from "./NavElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="home" smooth={true} duration={500} spy={true} exact="true">
          Prince<Span scrollNav={scrollNav}> Dev.</Span>
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="acceuil"
              smooth={true}
              duration={500}
              spy={true}
              offset={-130}
              exact="true"
            >
              Accueil
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="abouts"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              À propos
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="service"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="teams"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              Teams
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
        <MobilIcon scrollNav={scrollNav} onClick={toggle}>
          <FaBars />
        </MobilIcon>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
