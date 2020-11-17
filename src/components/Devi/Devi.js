import React from "react";
import "./devi.css";

const Devi = () => {
  return (
    <section className="devi" id="teams">
      <div className="devi_max_width">
        <h2 className="devi_title_service">Quote</h2>
        <div className="devi_content">
          <div className="devi_card">
            <div className="devi_box">
              <div className="devi_text">Showcase site</div>
              <p>
                showcase site (responsive) with a contact form. Creation of the
                graphic model. (In the case of an integration of existing model
                other price).
              </p>
              <p className="price">300 €</p>
            </div>
          </div>
          <div className="devi_card">
            <div className="devi_box">
              <div className="devi_text">Customized application</div>
              <p>
                Custom site building, Design, Front and Back office. Creation of
                the graphic model. (In the case of an integration of existing
                mock-up other price) and Maintenance.
              </p>
              <p className="price">550 €</p>
            </div>
          </div>
          <div className="devi_card">
            <div className="devi_box">
              <div className="devi_text">E-commerce</div>
              <p>
                E-commerce website (responsive), Design, Front and Back office,
                Payment management, paypal, visa, mastercard. Domain name
                proposal, SEO (Search Engine Optimization) Creation of the
                graphic design. (In the case of an integration of existing
                template other price) and Maintenance.
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
