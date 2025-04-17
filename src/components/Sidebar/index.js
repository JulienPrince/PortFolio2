import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarConatriner,
  SidebarLink,
  SidebarMenu,
  SidebarWraper,
} from "./SidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarConatriner isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWraper>
        <SidebarMenu>
          <SidebarLink
            to="home"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Accueil
          </SidebarLink>
          <SidebarLink
            to="abouts"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            À propos
          </SidebarLink>
          <SidebarLink
            to="service"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="skills"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Compétences
          </SidebarLink>
          <SidebarLink
            to="teams"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Devis
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWraper>
    </SidebarConatriner>
  );
};

export default SideBar;
