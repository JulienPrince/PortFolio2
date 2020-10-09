import React, { useState } from "react";
import About from "../components/About/About";
import HomeSection from "../components/Accueil/Accueil";
import Team from "../components/MyTeam/Team";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import SideBar from "../components/Sidebar";
import Skill from "../components/Skills/Skill";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeSection />
      <About />
      <Services />
      <Skill />
      <Team />
    </>
  );
};

export default Home;
