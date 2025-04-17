import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Accueil.css";

const HomeSection = () => {
  const sectionRef = useRef(null);
  const textElements = useRef([]);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      // Activer l'animation dès le chargement de la page
      sectionRef.current.classList.add('visible');
    }
    
    textElements.current = [
      document.querySelector('.text-1'),
      document.querySelector('.text-2'),
      document.querySelector('.text-3'),
      document.querySelector('.home-content a')
    ];
    
    // Ajouter les classes d'animation avec un délai progressif
    textElements.current.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('animate');
        }, 500 + index * 300); // Délai progressif
      }
    });
    
    // Observer pour réactiver les animations lors du défilement
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Section visible, activer les animations
          sectionRef.current.classList.add('visible');
          textElements.current.forEach((el, index) => {
            if (el) {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 300);
            }
          });
        } else {
          // Section hors de l'écran, réinitialiser les animations
          sectionRef.current.classList.remove('visible');
          textElements.current.forEach(el => {
            if (el) el.classList.remove('animate');
          });
        }
      },
      { threshold: 0.2 }
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
    <section className="home" id="home" ref={sectionRef}>
      <div className="max_width_home">
        <div className="home-content">
          <div className="text-1">Bonjour, je suis</div>
          <div className="text-2">Julien Prince</div>
          <div className="text-3">
            <span className="typing">Développement Web-Mobile-Desktop </span>
            <p>Bienvenue</p>
          </div>
          <Link
            to="works"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            className="cta-button"
            ref={buttonRef}
          >
            Voir nos réalisations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
