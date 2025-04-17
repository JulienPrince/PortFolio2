import { Typography } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import "./worsk.css";
import { projects } from "./data";
import WorkItem from "./workItems/Work";

const Lastwork = () => {
  const sectionRef = useRef(null);
  const projectItemsRef = useRef([]);
  
  useEffect(() => {
    // Utiliser un délai pour s'assurer que les éléments sont dans le DOM
    const initObserver = () => {
      // Initialiser les références aux éléments de projet
      const wrapperElements = document.querySelectorAll('.wrapper');
      
      // Vérifier si les éléments existent
      if (wrapperElements.length === 0) {
        // Réessayer après un court délai si les éléments ne sont pas encore disponibles
        setTimeout(initObserver, 100);
        return;
      }
      
      // Stocker les éléments trouvés
      projectItemsRef.current = wrapperElements;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Activer l'animation pour tous les projets
            projectItemsRef.current.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 150); // Ajouter un délai progressif
            });
          } else {
            // Réinitialiser les animations lorsque la section sort de la vue
            projectItemsRef.current.forEach((item) => {
              item.classList.remove("visible");
            });
          }
        },
        { threshold: 0.2 }
      );
      
      // Observer la section
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      // Stocker l'observer pour le nettoyage
      return observer;
    };
    
    // Démarrer le processus d'initialisation
    const observer = initObserver();


    // Stocker la référence à l'élément section pour le nettoyage
    const sectionElement = sectionRef.current;
    
    return () => {
      if (observer && sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);
  
  return (
    <>
      <div className="work_main" id="works" ref={sectionRef}>
        <div className="titre">
          <div className="titre_line"></div>
          <Typography noWrap variant="h2">
            Derniers Projets
          </Typography>
        </div>
        <div className="container">
          {projects.map((project, index) => (
            <WorkItem key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Lastwork;
