import React, { useState } from "react";
import About from "../components/About/About";
import HomeSection from "../components/Accueil/Accueil";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Lastwork from "../components/LastWork/LastWork";
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
      <Lastwork />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
