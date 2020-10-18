import React from "react";
import "./ItemTeam2.css";

function Container({ children }) {
  return <div className="jContainer">{children}</div>;
}

function TopRounded() {
  return <div className="jTopRounded"></div>;
}

function Profile({ img }) {
  return <img className="jProfile" src={img} alt="profile" />;
}

function About({ description, name }) {
  return (
    <div className="jAbout">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

function Socials() {
  return (
    <div className="jSocials">
      <div className="jICtn">
        <i class="fab fa-facebook-f"></i>
      </div>
      <div className="jICtn">
        <i class="fab fa-linkedin-in"></i>
      </div>
      <div className="jICtn">
        <i class="fab fa-twitter"></i>
      </div>
      <div className="jICtn">
        <i class="fab fa-instagram"></i>
      </div>
      <div className="jICtn">
        <i class="fab fa-youtube"></i>
      </div>
    </div>
  );
}

export default ({ item }) => {
  return (
    <Container>
      <TopRounded />
      <Profile img={item.img} />
      <About description={item.description} name={item.name} />
      <Socials />
    </Container>
  );
};
