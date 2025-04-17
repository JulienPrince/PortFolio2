import React from "react";
import "./devi.css";

const Devi = () => {
  return (
    <section className="devi" id="teams">
      <div className="devi_max_width">
        <h2 className="devi_title_service">Devis</h2>
        <div className="devi_content">
          <div className="devi_card">
            <div className="devi_box">
              <div className="devi_text">Site vitrine</div>
              <p>
                Site vitrine (responsive) avec formulaire de contact. Création du
                modèle graphique. (Dans le cas d'une intégration de modèle existant,
                tarif différent).
              </p>
              <p className="price">300 €</p>
            </div>
          </div>
          <div className="devi_card">
            <div className="devi_box">
              <div className="devi_text">Application personnalisée</div>
              <p>
                Création de site sur mesure, Design, Front et Back office. Création du
                modèle graphique. (Dans le cas d'une intégration de maquette existante,
                tarif différent) et Maintenance.
              </p>
              <p className="price">550 €</p>
            </div>
          </div>
          <div className="devi_card">
            <div className="devi_box">
              <div className="devi_text">E-commerce</div>
              <p>
                Site e-commerce (responsive), Design, Front et Back office,
                Gestion des paiements, paypal, visa, mastercard. Proposition de nom de domaine,
                Référencement (SEO - Search Engine Optimization). Création du design
                graphique. (Dans le cas d'une intégration de template existant,
                tarif différent) et Maintenance.
              </p>
              <p className="price">850 €</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devi;
