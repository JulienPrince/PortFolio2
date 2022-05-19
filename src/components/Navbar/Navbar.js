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
          Julien <Span scrollNav={scrollNav}>Prince</Span>
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
              Home
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
              About us
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
              to="works"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              Works
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-20}
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
