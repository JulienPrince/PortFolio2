import React, { useEffect, useRef } from "react";
import "./Skill.css";

const Skill = () => {
  const sectionRef = useRef(null);
  const skillBarsRef = useRef([]);
  
  useEffect(() => {
    skillBarsRef.current = document.querySelectorAll('.skill_bars');
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Activer l'animation pour toutes les barres de compétences
          skillBarsRef.current.forEach((bar, index) => {
            setTimeout(() => {
              bar.classList.add("animate");
            }, index * 100); // Ajouter un délai progressif
          });
        } else {
          // Réinitialiser les animations lorsque la section sort de la vue
          skillBarsRef.current.forEach((bar) => {
            bar.classList.remove("animate");
          });
        }
      },
      { threshold: 0.3 }
    );

    const sectionElement = sectionRef.current;
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);
  
  return (
    <>
      <section className="skills" id="skills" ref={sectionRef}>
        <div className="skill_max_width">
          <h2 className="skill_title">Compétences</h2>
          <div className="skills_content">
            <div className="skill_column skill_left">
              <div className="skill_text">
                Créativité <span>& </span>expériences
              </div>
            </div>
            <div className="skill_column skill_right">
              <div className="skill_bars">
                <div className="skill_info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className="skill_line html"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>CSS</span>
                  <span>85%</span>
                </div>
                <div className="skill_line css"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div className="skill_line js"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>TypeScript</span>
                  <span>80%</span>
                </div>
                <div className="skill_line ts"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>GraphQl</span>
                  <span>75%</span>
                </div>
                <div className="skill_line graphql"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>React JS</span>
                  <span>75%</span>
                </div>
                <div className="skill_line react"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>Vue JS</span>
                  <span>85%</span>
                </div>
                <div className="skill_line vue"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>MySQL</span>
                  <span>70%</span>
                </div>
                <div className="skill_line mysql"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>PostgreSQL</span>
                  <span>60%</span>
                </div>
                <div className="skill_line postgres"></div>
              </div>
              <div className="skill_bars">
                <div className="skill_info">
                  <span>Gestion de versions (GitHub, GitLab)</span>
                  <span>85%</span>
                </div>
                <div className="skill_line version"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
